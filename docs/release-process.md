# The process in more detail

Refer to the [README](../README.md) for a high-level overview of the process.

_NOTE: In these examples the minor version being used is ‘0.42.x’_

## Initialize the process for a new version

1. Create the stable branch with the appropriate name:

   ```bash
   git checkout master
   git pull
   git checkout -b 0.42-stable
   ```

1. Create a new issue on [the ‘releases’ repo][releases-repo] for the new version and invite users to provide feedback on the RC and what commits [that _have_ landed in `master`] to cherry-pick. (Hereafter referred to as the RC-issue.)

1. Ask the contributors involved in the highlights of this version to start preparing a blog-post to accompany the release.

## Publish the release-candidate

1. Publish the stable branch as an RC. [⇒](./publish-release.md)

1. Create a [GitHub ‘Release’][gh-release] for the new version and include the highlights of this release, so users might be more motivated to give the RC a try and so they can know what to look out for. Include a link to the RC-issue for people to report issues on. (For subsequent RC releases this copy can simply be copied.)

1. Ask the point people to generate the [CHANGELOG](../CHANGELOG.md), which makes it easier for users to understand what changes to look out for and/or why they should upgrade sooner rather than later. [⇒](./generate-changelog.md)

1. Ask the point people to create the diff for the upgrade helper, which makes it easier for users to know what changes to make to their project when upgrading to this new version. [⇒](./upgrade-helper.md)

## Iterate on the release-candidate

1. Take note of all changes that were suggested on the RC-issue and hide those that are not in scope or bring attention to a new problem. Types of changes to include are:

   - Bug-fixes for issues introduced in earlier versions or the new version.
   - Improvements to the overall [UX]/[DX].

1. Ideally order the commits by date, as that may ease merging.

   ℹ️ _You can hover over a relative date in the GitHub UI (e.g. “2 days ago”) to reveal the actual date/time a commit was made._

1. [Cherry-pick][cherry-picking] those changes that apply cleanly or with minimal effort:

   ```bash
   git cherry-pick [SHA]
   ```

1. Hide all the comments on the RC-issue for changes that have been picked and mark them as resolved.

1. Leave a comment stating what commits were **not** picked and for what reason.

1. Repeat the process from [Publish the release-candidate](TODO) onward until consensus is reached that the version is good enough to be released as a stable version.

## Release stable version

1. Publish the stable branch as a stable version. [⇒](./publish-release.md)

1. Bump `defaultVersionShown` in [the website’s config][website-config] so it
   will show show the new version as the currently available version.

[releases-repo]: https://github.com/react-native-community/releases
[gh-release]: https://github.com/facebook/react-native/releases/new
[ux]: https://www.nngroup.com/articles/definition-user-experience/
[dx]: https://medium.com/@albertcavalcante/what-is-dx-developer-experience-401a0e44a9d9
[cherry-picking]: https://wiki.c2.com/?CherryPicking
[website-config]: https://github.com/facebook/react-native-website/blob/49f26b08dfc9db36d8645a76f0de080995548303/website/siteConfig.js#L18
