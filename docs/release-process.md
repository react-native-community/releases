# The process in detail

Refer to the [README](../README.md) for a high-level overview of the process.

_NOTE: In these examples the minor version being used is ‘0.42.x’_

## 1. Kickoff the process

1. Create the stable branch with the appropriate name:

   ```bash
   git checkout master
   git pull
   git checkout -b 0.42-stable
   ```

1. Create a new issue on [the ‘releases’ repo][releases-repo] for the new
   version and invite users to provide feedback on the RC and what commits [that
   _have_ landed in `master`] to cherry-pick.

## 2. Publish the release-candidate

1. Publish the stable branch as an RC. (Refer to the document on how to [publish
   a release](./publish-release.md).)

1. TODO: Create GH release and include highlights.

1. Ask the point people to generate the [CHANGELOG](../CHANGELOG.md), which
   makes it easier for users to understand what changes to look out for and/or
   why they should upgrade sooner rather than later. (Refer to the document on
   how to [generate the CHANGELOG](./generate-changelog.md) for a new version.)

1. Ask the point people to create the diff for the upgrade helper, which makes
   it easier for users to know what changes to make to their project when
   upgrading to this new version. (Refer to the document on the
   [upgrade helper](./upgrade-helper.md).)

1. TODO: Ask FB/community to write a blogpost.

[releases-repo]: https://github.com/react-native-community/releases