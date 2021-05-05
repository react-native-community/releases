# The process in more detail

_Point people: [@alloy](https://github.com/alloy), [@grabbou](https://github.com/grabbou), [@kelset](https://github.com/kelset)_

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

1. Ask the contributors involved in the highlights of this version to start preparing a blog-post to accompany the release, in the form of a draft PR against the [website-repo].

## Publish the release-candidate

1. Publish the stable branch as an RC. [Read more ⇒](./publish-release.md)

1. Create a [GitHub ‘Release’][gh-release] for the new version and include the highlights of this release, so users might be more motivated to give the RC a try and so they can know what to look out for. Include a link to the RC-issue for people to report issues on. (For subsequent RC releases this copy can simply be copied.)

1. Ask the point people to generate the [CHANGELOG](../CHANGELOG.md), which makes it easier for users to understand what changes to look out for and/or why they should upgrade sooner rather than later. Ask them to setup a draft PR against [this repo][releases-repo]; so that it can be iterated upon per each RC and cleaned up over time, so that it's ready for when stable release lands. [Read more ⇒](./generate-changelog.md)

1. Ask the point people to create the diff for the upgrade helper, which makes it easier for users to know what changes to make to their project when upgrading to this new version. [Read more ⇒](./upgrade-helper.md)

## Iterate on the release-candidate

1. First make note of the current CI status, so it can be compared after picking commits.

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

1. If absolutely necessary for expediency, you can make some agreed upon minor fixes directly to the stable branch, but you **MUST** back-port those to the `master` branch as soon as possible.

1. Repeat the process from [publishing](#publish-the-release-candidate) onward until consensus is reached that the version is good enough to be released as a stable version.

## Release stable version

1. Publish the stable branch as a stable version. [Read more ⇒](./publish-release.md)

1. Close the RC-issue created at the start of this process, lock it as solved, then open a new issue in [this repo][releases-repo] for the next patch release (patch-release-issue).

1. Merge the changelog PR to [this repo][releases-repo] so that it can be referred to in the blogpost & in the Github release.

1. Merge the blogpost PR to the [website-repo] in order to publish it.

1. Create a [GitHub ‘Release’][gh-release] for the stable version and include the highlights of this release, along with links to the changelog, the blogpost and the patch-release-issue (described in the previous points).

1. Bump `defaultVersionShown` in [the website’s config][website-config] so it
   will show show the new version as the currently available version.

## Release subsequent patch versions

After a stable version has landed, keep an eye on the patch-release-issue created; creating a patch release follows the same iterative procedure as [release-candidate][rc-section] described above:

1. Take notes of the comments, and the commits that are requested for cherry picks

1. Select the ones that are bugfixes or minor improvements (discard any new features/behaviour changing commits - unless there is vast consensus that it's a valid exception)

1. List the commits, ordered by date, and cherry pick them.

1. Follow the standard [release process](./publish-release.md) to publish the new version as 0.42.1.

1. Generate new changelog, create a new GH release and ask the maintainers of upgrade-helper to generate new diffs (just like [above][publish-rc]).

1. Make a new patch-release-issue issue (closing the old one).

[releases-repo]: https://github.com/react-native-community/releases
[gh-release]: https://github.com/facebook/react-native/releases/new
[ux]: https://www.nngroup.com/articles/definition-user-experience/
[dx]: https://medium.com/@albertcavalcante/what-is-dx-developer-experience-401a0e44a9d9
[rc-section]: https://github.com/react-native-community/releases/blob/master/docs/release-process.md#iterate-on-the-release-candidate
[publish-rc]: https://github.com/react-native-community/releases/blob/master/docs/release-process.md#publish-the-release-candidate
[cherry-picking]: https://wiki.c2.com/?CherryPicking
[website-repo]: https://github.com/facebook/react-native-website
[website-config]: https://github.com/facebook/react-native-website/blob/49f26b08dfc9db36d8645a76f0de080995548303/website/siteConfig.js#L18
