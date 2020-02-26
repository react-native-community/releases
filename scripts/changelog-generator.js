#!/usr/bin/env node
// @ts-check

"use strict";

/**
 * @typedef {object} Commit
 * @property {string} sha
 * @property {{ message: string }} commit
 * @property {{ login: string }=} author
 */

const levenshtein = require("fast-levenshtein");
const util = require("util");
const execFile = util.promisify(require("child_process").execFile);
const path = require("path");
const fs = require("fs");

//#region NETWORK
//*****************************************************************************

/**
 * @param {string} token
 * @param {string} path
 */
function fetchJSON(token, path) {
  const host = "api.github.com";
  console.log(`[GET] https://${host}${path}`);
  return new Promise((resolve, reject) => {
    let data = "";

    require("https")
      .get({
        host,
        path,
        headers: {
          Authorization: `token ${token}`,
          "User-Agent": "Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0)"
        }
      })
      .on("response", response => {
        if (response.statusCode !== 200) {
          return reject(
            new Error(`[!] Got HTTP status: ${response.statusCode}`)
          );
        }

        response.on("data", chunk => {
          data += chunk;
        });

        response.on("end", () => {
          try {
            resolve({ json: JSON.parse(data), headers: response.headers });
          } catch (e) {
            reject(e);
          }
        });

        response.on("error", error => {
          reject(error);
        });
      });
  });
}

/**
 * @param {string} token
 * @param {string} base
 * @param {string} compare
 * @returns {Promise<Commit[]>}
 */
function fetchCommits(token, base, compare) {
  const commits = [];
  let page = 1;
  return new Promise((resolve, reject) => {
    const fetchPage = () => {
      fetchJSON(
        token,
        `/repos/facebook/react-native/commits?sha=${compare}&page=${page++}`
      )
        .then(({ json, headers }) => {
          /**
           * @type {Commit[]}
           */
          const pageCommits = json;
          for (const commit of pageCommits) {
            commits.push(commit);
            if (commit.sha === base) {
              return resolve(commits);
            }
          }
          if (!headers.link.includes("next")) {
            throw new Error(
              "Did not find commit after paging through all commits"
            );
          }
          setImmediate(fetchPage);
        })
        .catch(reject);
    };
    fetchPage();
  });
}

//*****************************************************************************
//#endregion

//#region FILTER COMMITS
//*****************************************************************************

/**
 * @param {Commit[]} commits
 */
function filterCICommits(commits) {
  return commits.filter(item => {
    const text = item.commit.message.toLowerCase();
    return !(
      text.includes("travis") ||
      text.includes("circleci") ||
      text.includes("circle ci") ||
      text.includes("bump version numbers") ||
      text.includes("docker")
    );
  });
}

/**
 * @param {Commit[]} commits
 */
function filterRevertCommits(commits) {
  let revertCommits = [];
  const pattern = /\b(revert d\d{8}: |revert\b|back out ".*")/i;
  const filteredCommits = commits
    .filter(item => {
      const text = item.commit.message.split("\n")[0].toLowerCase();
      const shouldRemove =
        pattern.test(text) && revertCommits.push(text.replace(pattern, ""));
      if (shouldRemove) console.warn("Removing revert commit: \n" + text);
      return !shouldRemove;
    })
    .filter(item => {
      let text = item.commit.message.split("\n")[0].toLowerCase();
      revertCommits.forEach(revertCommit => {
        if (levenshtein.get(text, revertCommit) < 0.5 * revertCommit.length) {
          revertCommits = revertCommits.filter(function(e) {
            return e !== revertCommit;
          });
          return false;
        }
      });
      return true;
    });
  if (revertCommits.length > 0)
    console.warn(
      "Was unable to find the mate for the following revert commits: \n\n" +
        revertCommits.join("\n") +
        "\n\nYou will need to manually remove this from below."
    );
  return filteredCommits;
}

/**
 * @param {string} existingChangelogData
 * @param {Commit[]} commits
 */
function filterPreviouslyPickedCommits(existingChangelogData, commits) {
  // TODO: Perhaps it's more performant to first parse all commit SHAs out of the existing changelog data.
  return commits.filter(({ sha }) => {
    if (existingChangelogData.includes(sha.slice(0, 7))) {
      console.warn(`Ignoring previously picked commit: ${sha}`);
      return false;
    }
    return true;
  });
}

//*****************************************************************************
//#endregion

//#region GIT INTERACTIONS
//*****************************************************************************

/**
 * @param {string} gitDir
 * @param {...string} args
 */
function git(gitDir, ...args) {
  return execFile("git", [`--git-dir=${gitDir}`, ...args]).then(out => {
    if (out.stderr) {
      throw new Error(out.stderr);
    }
    return out.stdout;
  });
}

/**
 * Finds a commit on the `master` branch, based on the ‘differential revision’
 * that FB's infrastructure adds to each commit that lands in the `master`
 * branch. This ensures that we always use the canonical commit ref as it
 * exists in the `master` branch, rather than a new cherry-picked commit ref.
 *
 * @param {string} gitDir
 * @param {Commit} item
 * @returns {Promise<Commit>}
 */
function getOriginalCommit(gitDir, item) {
  const match = item.commit.message.match(/Differential Revision: (D\d+)/m);
  if (match) {
    return git(
      gitDir,
      "log",
      "master",
      "--pretty=format:%H",
      `--grep=${match[1]}`
    ).then(sha => ({ ...item, sha }));
  } else {
    console.warn(
      `[!] Unable to find a differential revision for commit ${
        item.sha
      }. If this is a commit made on the release branch, be sure to update the CHANGELOG entry to point to the commit on the master branch after back-porting.\n`
    );
    return Promise.resolve(item);
  }
}

/**
 * Maps all commits to their canonical commit refs.
 *
 * @see {getOriginalCommit}
 *
 * @param {string} gitDir
 * @param {Commit[]} commits
 */
function getOriginalCommits(gitDir, commits) {
  return Promise.all(commits.map(c => getOriginalCommit(gitDir, c)));
}

/**
 * Resolves the ref to the first commit after the tree was forked from the
 * `master` branch.
 *
 * @param {string} gitDir
 * @param {string} ref
 */
function getFirstCommitAfterForkingFromMaster(gitDir, ref) {
  return git(gitDir, "rev-list", `^${ref}`, "--first-parent", "master").then(
    out => {
      const components = out.trimRight().split("\n");
      return components[components.length - 1];
    }
  );
}

/**
 * Resolves both `base` and `compare` to the first commit after forking from
 * the `master` branch. In case the result is the same for both, then the delta
 * between the two is in the PATCH version range and we should *not* use the
 * offset, as the changes we need to consider are all in the `compare` tree.
 *
 * @param {string} gitDir
 * @param {string} base
 * @param {string} compare
 */
function getOffsetBaseCommit(gitDir, base, compare) {
  return Promise.all([
    getFirstCommitAfterForkingFromMaster(gitDir, base),
    getFirstCommitAfterForkingFromMaster(gitDir, compare)
  ]).then(([offsetBase, offsetCompare]) => {
    if (offsetBase === offsetCompare) {
      return git(gitDir, "rev-list", "-n", "1", base).then(sha =>
        sha.trimRight()
      );
    } else {
      return offsetBase;
    }
  });
}

//*****************************************************************************
//#endregion

//#region UTILITIES
//*****************************************************************************

function isAndroidCommit(change) {
  return (
    !/(\[ios\]|\[general\])/i.test(change) &&
    (/\b(android|java)\b/i.test(change) || /android/i.test(change))
  );
}

function isIOSCommit(change) {
  return (
    !/(\[android\]|\[general\])/i.test(change) &&
    (/\b(ios|xcode|swift|objective-c|iphone|ipad)\b/i.test(change) ||
      /ios\b/i.test(change) ||
      /\brct/i.test(change))
  );
}

function isBreaking(change) {
  return /\b(breaking)\b/i.test(change);
}

function isAdded(change) {
  return /\b(added)\b/i.test(change);
}

function isChanged(change) {
  return /\b(changed)\b/i.test(change);
}

function isDeprecated(change) {
  return /\b(deprecated)\b/i.test(change);
}

function isRemoved(change) {
  return /\b(removed)\b/i.test(change);
}

function isFixed(change) {
  return /\b(fixed)\b/i.test(change);
}

function isSecurity(change) {
  return /\b(security)\b/i.test(change);
}

function isFabric(change) {
  return /\b(fabric)\b/i.test(change);
}

function isTurboModules(change) {
  return /\b(tm)\b/i.test(change);
}

function isInternal(change) {
  return /\[internal\]/i.test(change);
}

//*****************************************************************************
//#endregion

//#region FORMATTING
//*****************************************************************************

/**
 * @param {Commit} item
 */
function getChangeMessage(item) {
  const commitMessage = item.commit.message.split("\n");
  let entry =
    commitMessage
      .reverse()
      .find(a => /\[ios\]|\[android\]|\[general\]/i.test(a)) ||
    commitMessage.reverse()[0];
  entry = entry.replace(/^((\[\w*\] ?)+ - )/i, ""); //Remove the [General] [whatever]
  entry = entry.replace(/ \(\#\d*\)$/i, ""); //Remove the PR number if it's on the end

  const authorSection = `([${item.sha.slice(
    0,
    7
  )}](https://github.com/facebook/react-native/commit/${item.sha.slice(0, 7)})${
    item.author
      ? " by [@" +
        item.author.login +
        "](https://github.com/" +
        item.author.login +
        ")"
      : ""
  })`;
  return `- ${entry} ${authorSection}`;
}

/**
 * @param {Commit[]} commits
 * @param {boolean} verbose
 */
function getChangelogDesc(commits, verbose) {
  const acc = {
    breaking: { android: [], ios: [], general: [] },
    added: { android: [], ios: [], general: [] },
    changed: { android: [], ios: [], general: [] },
    deprecated: { android: [], ios: [], general: [] },
    removed: { android: [], ios: [], general: [] },
    fixed: { android: [], ios: [], general: [] },
    security: { android: [], ios: [], general: [] },
    unknown: { android: [], ios: [], general: [] }
  };

  commits.forEach(item => {
    const change = item.commit.message;
    const message = getChangeMessage(item);

    if (!verbose) {
      if (isFabric(change.split("\n")[0])) return;
      if (isTurboModules(change.split("\n")[0])) return;
      if (isInternal(change)) return;
    }

    if (isBreaking(change)) {
      if (isAndroidCommit(change)) {
        acc.breaking.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.breaking.ios.push(message);
      } else {
        acc.breaking.general.push(message);
      }
    } else if (isAdded(change)) {
      if (isAndroidCommit(change)) {
        acc.added.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.added.ios.push(message);
      } else {
        acc.added.general.push(message);
      }
    } else if (isChanged(change)) {
      if (isAndroidCommit(change)) {
        acc.changed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.changed.ios.push(message);
      } else {
        acc.changed.general.push(message);
      }
    } else if (isFixed(change)) {
      if (isAndroidCommit(change)) {
        acc.fixed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.fixed.ios.push(message);
      } else {
        acc.fixed.general.push(message);
      }
    } else if (isRemoved(change)) {
      if (isAndroidCommit(change)) {
        acc.removed.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.removed.ios.push(message);
      } else {
        acc.removed.general.push(message);
      }
    } else if (isDeprecated(change)) {
      if (isAndroidCommit(change)) {
        acc.deprecated.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.deprecated.ios.push(message);
      } else {
        acc.deprecated.general.push(message);
      }
    } else if (isSecurity(change)) {
      if (isAndroidCommit(change)) {
        acc.security.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.security.ios.push(message);
      } else {
        acc.security.general.push(message);
      }
    } else {
      if (isAndroidCommit(change)) {
        acc.unknown.android.push(message);
      } else if (isIOSCommit(change)) {
        acc.unknown.ios.push(message);
      } else {
        acc.unknown.general.push(message);
      }
    }
  });

  return acc;
}

function buildMarkDown(currentVersion, data) {
  return `

## [${currentVersion}.0]

### Breaking

${data.breaking.general.join("\n")}

#### Android specific

${data.breaking.android.join("\n")}

#### iOS specific

${data.breaking.ios.join("\n")}

### Added

${data.added.general.join("\n")}

#### Android specific

${data.added.android.join("\n")}

#### iOS specific

${data.added.ios.join("\n")}

### Changed

${data.changed.general.join("\n")}

#### Android specific

${data.changed.android.join("\n")}

#### iOS specific

${data.changed.ios.join("\n")}

### Deprecated

${data.deprecated.general.join("\n")}

#### Android specific

${data.deprecated.android.join("\n")}

#### iOS specific

${data.deprecated.ios.join("\n")}

### Removed

${data.removed.general.join("\n")}

#### Android specific

${data.removed.android.join("\n")}

#### iOS specific

${data.removed.ios.join("\n")}

### Fixed

${data.fixed.general.join("\n")}

#### Android specific

${data.fixed.android.join("\n")}

#### iOS specific

${data.fixed.ios.join("\n")}

### Security

${data.security.general.join("\n")}

#### Android specific

${data.security.android.join("\n")}

#### iOS specific

${data.security.ios.join("\n")}

### Unknown

${data.unknown.general.join("\n")}

#### Android Unknown

${data.unknown.android.join("\n")}

#### iOS Unknown

${data.unknown.ios.join("\n")}
`;
}

//*****************************************************************************
//#endregion

//#region MAIN
//*****************************************************************************

/**
 * @param {Object} options
 * @param {string} options.token
 * @param {string} options.base
 * @param {string} options.compare
 * @param {string} options.gitDir
 * @param {string} options.existingChangelogData
 * @param {boolean=} options.verbose
 */
function generateChangelog(options) {
  return fetchCommits(options.token, options.base, options.compare)
    .then(filterCICommits)
    .then(filterRevertCommits)
    .then(commits => getOriginalCommits(options.gitDir, commits))
    .then(commits =>
      filterPreviouslyPickedCommits(options.existingChangelogData, commits)
    )
    .then(commits => getChangelogDesc(commits, options.verbose))
    .then(changes => buildMarkDown(options.compare, changes));
}

module.exports = {
  fetchCommits,
  generateChangelog,
  getChangeMessage,
  getOffsetBaseCommit,
  getOriginalCommit,
  getFirstCommitAfterForkingFromMaster
};

if (!module["parent"]) {
  const argv = require("yargs")
    .usage(
      "$0 [args]",
      "Generate a React Native changelog from the commits and PRs"
    )
    .options({
      base: {
        alias: "b",
        string: true,
        describe:
          "the base branch/tag/commit to compare against (most likely the previous stable version)",
        demandOption: true
      },
      compare: {
        alias: "c",
        string: true,
        describe:
          "the new version branch/tag/commit (most likely the latest release candidate)",
        demandOption: true
      },
      repo: {
        alias: "r",
        string: true,
        describe: "the path to an up-to-date clone of the react-native repo",
        demandOption: true
      },
      changelog: {
        alias: "f",
        string: true,
        describe: "the path to the existing CHANGELOG.md file",
        demandOption: true
      },
      token: {
        alias: "t",
        string: true,
        describe: "A GitHub token",
        demandOption: true
      },
      verbose: {
        alias: "v",
        describe:
          "verbose listing, includes internal changes as well as public-facing changes",
        demandOption: false,
        default: false
      }
    })
    .version(false)
    .help("help").argv;

  const gitDir = path.join(argv.repo, ".git");
  git(gitDir, "rev-parse")
    .catch(() => {
      throw new Error(
        "Specified path to react-native repo is not a valid git repo."
      );
    })
    .then(() => {
      const existingChangelogData = fs.readFileSync(argv.changelog, "utf-8");
      return getOffsetBaseCommit(gitDir, argv.base, argv.compare)
        .then(base =>
          generateChangelog({ ...argv, base, gitDir, existingChangelogData })
        )
        .then(data => console.log(data));
    })
    .catch(e => {
      console.error(e);
      process.exit(1);
    });
}

//*****************************************************************************
//#endregion
