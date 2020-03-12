# Generate changelog

Point people: [@alloy](https://github.com/alloy), [@kelset](https://github.com/kelset), [@turnrye](https://github.com/turnrye)

This repo contains a script that will generate a markdown formatted list of changes between two given git references (e.g. tags).

The script is a little more complex than one might expect for the following reasons:

- Attributing changes to the author’s github handle requires fetching the commit metadata from the github API, rather than rely on a local clone of the react-native repo.

- Due to how react-native’s [release process](../README.md#the-process-at-a-high-level) works, we want to be able to exclude previously cherry-picked commits from the changelog entry of a next version.

  However, with `git`, cherry-picked commits will have different commit hashes than their original counterparts–as they exist in the `master` branch. Because of this, the next version’s stable branch will include the same changes, except using their _original_ commit hash. This makes it impossible to exclude these commits without further work.

  For this reason, the script will parse the ‘referential revision’–which is added to each commit message by Facebook’s infrastructure–and use it to resolve to the original commit in the `master` branch. This resolved commit’s hash is then used in the changelog entry, so the script can find and exclude it from the next version’s entry.

  This cannot be done via the github API and thus relies on a local clone of the react-native repo.

## Setup

If you don’t already have a checkout of the react-native repo:

```bash
git clone https://github.com/facebook/react-native.git
```

…otherwise ensure it’s up-to-date:

```bash
pushd react-native
git checkout master
git pull
popd
```

Then clone this repo and install the script’s dependencies:

```bash
git clone https://github.com/react-native-community/releases.git
cd releases
yarn install
```

Finally, create a GitHub ‘personal access token’ that can be used by the script to fetch commit metadata from the GitHub API.

1. Visit the [token settings page](https://github.com/settings/tokens).
1. Generate a new token and **only** give it the `public_repo` scope.
1. Store this token somewhere secure for future usage.

## Usage

ℹ️ _See `yarn generate --help` for a complete list of available options and their short-cuts._

Consider the case where version `0.62.0` has just been published and now we need a changelog entry for all changes between the previous version and the new version. The following command, where `base` and `compare` are tags that exist in the react-native repo, will do just that:

```bash
yarn generate --base v0.61.5 --compare v0.62.0 --repo ../react-native --token [GITHUB TOKEN]
```

_The `base` tag could have been `v0.61.0` as well, but it would take a lot more time to complete._

The script will log, to `stderr`, informative details on its progress, as well as details on changes that might require follow-up work. The generated changelog entry will be printed to `stdout` and thus could be redirected to a file, if you so wish:

```bash
yarn -s generate […] > NEW_CHANGES.md
```
