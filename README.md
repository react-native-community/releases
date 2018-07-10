# React Native Releases

[![GitHub Issues](https://img.shields.io/github/issues/react-native-community/react-native-releases.svg)](https://github.com/react-native-community/react-native-releases/issues)
![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

Stay up-to-date with the release activities of [React Native](https://github.com/facebook/react-native/) by [watching](https://github.com/react-native-community/react-native-releases/subscription) for [status reports](https://github.com/react-native-community/react-native-releases/issues?q=is%3Aopen+is%3Aissue+label%3A%22release+status%22). Follow along as the release notes are prepared and review the overall [changelog](https://github.com/react-native-community/react-native-releases/blob/master/CHANGELOG.md). Submit a [Request for Comment](/rfcs/README.md) for a substantial change or contribute to an [Active RFC](https://github.com/react-native-community/react-native-releases/pulls?q=is%3Aopen+is%3Apr+label%3Arfc).

## Request for Comments

For details on the RFC process, please visit the [Request for Comment](/rfcs/README.md) README.

## Release Status Issues

Progress towards release is tracked in issues. Look for these issues labelled _release status_. Soon a standardized format for the update will be published; please be patient while this settles.

Note that these issues are locked to keep conversation focused strictly on the status. Questions about the release should be directed to the [React Native](https://github.com/facebook/react-native/) repository or other communications channels.

## Changelog

The changelog in this repository is a community-provided effort to provide a helpful and informative summary of React Native's rapidly changing codebase. The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/), and emojii use is roughly based on [gitmoji](https://gitmoji.carloscuesta.me/) recommendations.

In order to allow additional research, the commits that relate to a change are listed. The revisions listed typically are the merge commits, so as to match the code that a user may find in their own copy. Authors are attributed to encourage recognizing the contributors for supporting React Native.

## "When will my fix make it into a release?"

React Native follows a [monthly release cycle](http://facebook.github.io/react-native/versions.html). Once a pull request is merged to the [core `react-native` repo](https://github.com/facebook/react-native), it may take one to two months for the changes to make it to a stable React Native release.

To determine whether a fix or feature is present in a given release, you will need the commit hash where the fix or feature was added to the `master` branch of the core `react-native` repo. If you know the PR, you can look for the comment from **@facebook-github-bot** that says 'closed this in <COMMIT_HASH>'.

Once you have the commit hash, navigate to `https://github.com/facebook/react-native/commit/<COMMIT_HASH>`. Look closely at the commit message, underneath which you will find a list of tags associated with the commit. These tags will tell you which releases contains this commit. For example, commit [5e80d95e034259af8c41b50756a623756cc81a77](https://github.com/facebook/react-native/commit/5e80d95e034259af8c41b50756a623756cc81a77) has the following tags as of this writing: `v0.55.0-rc.0 v0.54.2 v0.54.1 v0.54.0 v0.54.0-rc.4 v0.54.0-rc.3 v0.54.0-rc.2 v0.54.0-rc.0 latest`. These tags tell us that the commit first made it into the 0.54 release candidate, eventually landing in the 0.54 stable release. It is also present, as you'd expect, in the 0.55 release candidate (and should make it to 0.55 stable, and so on).

If the commit is only present in `master` (i.e. has no tags), then the commit has yet to be picked up by a release. You can expect it to be included in the next release candidate that is cut at the beginning of the next month.

## Backporting/cherry-picking of changes to existing builds

From time to time, [backporting](https://en.wikipedia.org/wiki/Backporting) a change to an existing release (including candidates) may be needed. Examples include security issues or critical regressions. If you believe a pull request on `react-native`  is a candidate for backporting, please mention it in the version associated _backport request_ issue.

Please note that if the change hasn't landed on `react-native`'s master, it can't be cherry picked to a release tag yet.
