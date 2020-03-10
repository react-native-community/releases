# React Native Releases

[![GitHub Issues](https://img.shields.io/github/issues/react-native-community/releases.svg)](https://github.com/react-native-community/releases/issues) ![Contributions welcome](https://img.shields.io/badge/contributions-welcome-orange.svg)

Stay up-to-date with the release activities of [React Native](https://github.com/facebook/react-native/) by [watching](https://github.com/react-native-community/releases/subscription) for [status reports](https://github.com/react-native-community/releases/issues?q=is%3Aopen+is%3Aissue+label%3A%22release+status%22). Or you can follow along as the release notes are prepared and help reviewing the overall [changelog](https://github.com/react-native-community/releases/blob/master/CHANGELOG.md).

## React Native’s Release Process

At Facebook React Native is not consumed via released versions, instead they always consume the latest version of the `master` branch. This means that they are able to iterate fast for _their_ needs; if something is broken the fix is a single commit away.

External users are of course similarly able to consume the latest `master` version, however this is most likely a too fast moving target for most–aside from turn around to get a fix in being longer.

To reconcile these two different use-cases, React Native’s release process is a different one from the one many users are familiar within the JavaScript ecosystem.

### The process at a high-level

1. A branch for a new version is created from `master`–hereafter referred to as “the stable branch”. [⇒](./docs/release-process.md#initialize-the-process-for-a-new-version)
1. A [release candidate][rc] is released from the stable branch, allowing the community to try it out and provide feedback–hereafter referred to as “the RC”. [⇒](./docs/release-process.md#publish-the-release-candidate)
1. Additional changes that have landed in the `master` branch since the stable branch was originally created and are deemed required for the version to be finalized are [cherry-picked][cherry-picking] onto the stable branch. These can be bug-fixes for previously released versions, including the RC, or changes otherwise deemed an improvement for the version to be finalized, such as [UX]/[DX] improvements. [⇒](./docs/release-process.md#iterate-on-the-release-candidate)
1. Steps 2 through 3 are repeated until consensus is reached that the version is good enough to be released as a stable version.
1. A stable version is released and communications are sent out to the community informing them of the availability of a new stable version and what changes it includes.
1. Steps 3 through 5 are repeated on the stable branch for bug-fixes _only_ and will result in a [patch release]. I.e. no release-candidates are published for patch versions.
1. The entire process is repeated from step 1 for the next [minor version], which will include all the changes that were made on the `master` branch previously but were not yet cherry-picked.

```
┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
            master branch            │
│
   ┌──────────────────────────────┐  │
│  │                              │
   │     pretty good bug-fix      │  │
│  │                              │
   └──────────────────────────────┘  │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
│                  │                                 0.42-stable             │
                   ▼                 │  │
│  ┌──────────────────────────────┐        ┌──────────────────────────────┐  │
   │                              │  │  │  │                              │
│  │   zomg, amazing feature A!   │───────▶│         0.42.0-rc.0          │  │
   │                              │  │  │  │                              │
│  └──────────────────────────────┘        └──────────────────────────────┘  │
                   │                 │  │                  │
│                  ▼                                       ▼                 │
   ┌──────────────────────────────┐  │  │  ┌──────────────────────────────┐
│  │                              │        │                              │  │
   │    whoops, fix feature A     │──┼──┼─▶│    whoops, fix feature A     │
│  │                              │        │                              │  │
   └──────────────────────────────┘  │  │  └──────────────────────────────┘
│                  │                                       │                 │
                   │                 │  │                  ▼
│                  │                       ┌──────────────────────────────┐  │
                   │                 │  │  │                              │
│                  ▼                       │         0.42.0-rc.1          │  │
   ┌──────────────────────────────┐  │  │  │                              │
│  │                              │        └──────────────────────────────┘  │
   │  wow, sweet new feature B!   │  │  │                  │
│  │                              │                        ▼                 │
   └──────────────────────────────┘  │  │  ┌──────────────────────────────┐
│                  │                       │                              │  │
                   │                 │  │  │            0.42.0            │
│                  │                       │                              │  │
                   │                 │  │  └──────────────────────────────┘
│                  │                                       │                 │
                   ▼                 │  │                  ▼
│  ┌──────────────────────────────┐        ┌──────────────────────────────┐  │
   │                              │  │  │  │                              │
│  │  yikes, fix feature A more   │───────▶│  yikes, fix feature A more   │  │
   │                              │  │  │  │                              │
│  └──────────────────────────────┘        └──────────────────────────────┘  │
                   │                 │  │                  │
│                  │                                       ▼                 │
                   │                 │  │  ┌──────────────────────────────┐
│                  │                       │                              │  │
                   │                 │  │  │            0.42.1            │
│                  │                       │                              │  │
                   │                 │  │  └──────────────────────────────┘
│                  │                                                         │
                   │                 │  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
│                  │
                   │                 │  ┌ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
│                  │                                 0.43-stable             │
                   ▼                 │  │
│  ┌──────────────────────────────┐        ┌──────────────────────────────┐  │
   │                              │  │  │  │                              │
│  │    make feature B better     │───────▶│         0.43.0-rc.0          │  │
   │                              │  │  │  │                              │
│  └──────────────────────────────┘        └──────────────────────────────┘  │
                   │                 │  │                  │
│                  ▼                                       ▼                 │
   ┌──────────────────────────────┐  │  │  ┌──────────────────────────────┐
│  │                              │        │                              │  │
   │      [history repeats]       │  │  │  │      [history repeats]       │
│  │                              │        │                              │  │
   └──────────────────────────────┘  │  │  └──────────────────────────────┘
│                                                                            │
 ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  └ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─
```

[rc]: https://en.wikipedia.org/wiki/Software_release_life_cycle#Release_candidate
[cherry-picking]: https://wiki.c2.com/?CherryPicking
[ux]: https://www.nngroup.com/articles/definition-user-experience/
[dx]: https://medium.com/@albertcavalcante/what-is-dx-developer-experience-401a0e44a9d9
[patch release]: https://semver.org/spec/v2.0.0.html#spec-item-6
[minor version]: https://semver.org/spec/v2.0.0.html#spec-item-7
