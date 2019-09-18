# React Native Releases

[![GitHub Issues](https://img.shields.io/github/issues/react-native-community/releases.svg)](https://github.com/react-native-community/releases/issues) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

Stay up-to-date with the release activities of [React Native](https://github.com/facebook/react-native/) by [watching](https://github.com/react-native-community/releases/subscription) for [status reports](https://github.com/react-native-community/releases/issues?q=is%3Aopen+is%3Aissue+label%3A%22release+status%22). Or you can follow along as the release notes are prepared and help reviewing the overall [changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md).

## Release Status Issues

Progress towards release is tracked in issues, based on labels:

- _release status_: here you can read the status for the future/RC level releases
- _stable_: here you can read the status for the current stable release
- _backport requests_: here you can request cherry-picks for the current stable release, that will be included in the next patch version

Note that these issues are made to keep the conversation focused strictly on the status of each one - please refrain from going off-topic.

## Changelog

The changelog in this repository is a community-driven effort to provide a helpful and informative summary of React Native's rapidly changing codebase along with a full list of commits.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/), and generated via the script described in the next section.

In order to allow additional research, the commits that relate to a change are listed with their hashes. The revisions listed typically are the merge commits, so as to match the code that a user may find in their own copy. Authors are attributed to encourage recognizing the contributors for supporting React Native.

### Changelog helper script

In order to generate the Changelog, we use a script that, given a base version and a target version, checks all the commits between the two versions and parses release notes and authors in the commit message - and then prints it in the terminal for easy/copy paste.

To use it first off `git clone` the repo, then `yarn` and finally you can use it like in the following example: `./changelog-generator.js -b v0.57.5 -c v0.57.6`.

## "When will my fix make it into a release?"

React Native follows a release cycle not strictly monthly - you can read more [about it here](https://github.com/react-native-community/discussions-and-proposals/issues/17). When creating a new release, we cut a new branch from `master` (e.g. `0.61-stable`), with all the merged commits up to this point. After this initial cut, new commits on `master` will only be included on this release if they get manually cherry picked. Otherwise, they will be included in the next stable version (when a new cut from `master` will happen). This means that once a pull request is merged to the [core `react-native` repo](https://github.com/facebook/react-native), it may take one or two months for the changes to make it into a stable React Native release.

To determine whether a fix or feature is present in a given release, you will need the commit hash where the fix or feature was added to the `master` branch of the core `react-native` repo. If you know the PR, you can look for the comment from **@facebook-github-bot** that says 'closed this in <COMMIT_HASH>'.

Once you have the commit hash, navigate to `https://github.com/facebook/react-native/commit/<COMMIT_HASH>`. Look closely at the commit message, underneath which you will find a list of tags associated with the commit. These tags will tell you which releases contains this commit. For example, commit [5e80d95e034259af8c41b50756a623756cc81a77](https://github.com/facebook/react-native/commit/5e80d95e034259af8c41b50756a623756cc81a77) has the following tags as of this writing: `v0.55.0-rc.0 v0.54.2 v0.54.1 v0.54.0 v0.54.0-rc.4 v0.54.0-rc.3 v0.54.0-rc.2 v0.54.0-rc.0 latest`. These tags tell us that the commit first made it into the 0.54 release candidate, eventually landing in the 0.54 stable release. It is also present, as you'd expect, in the 0.55 release candidate (and should make it to 0.55 stable, and so on).

If the commit is only present in `master` (i.e. has no tags), then the commit has yet to be picked up by a release (or it may have been included in a follow up cherry pick for a patch version). You can expect it to be included in the next release candidate that is cut once the designed features have all landed.

## Backporting/cherry-picking of changes to existing builds

From time to time, [backporting](https://en.wikipedia.org/wiki/Backporting) a change to an existing release (including candidates) may be needed. Examples include security issues or critical regressions. If you believe a pull request on `react-native` is a candidate for backporting, please mention it in the version associated _backport request_ issue.

Please note that, if the change hasn't landed on `react-native`'s master, it can't be cherry picked to a release tag yet.
