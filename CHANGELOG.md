# Changelog

## Unreleased

## [0.53.0] - schedule TBD

Welcome to the January 2018 release of React Native. The CLI tools now support `--port` for both platforms, . There was a lot of under-the-cover work done.

### ✨ Added

- **Keyboard** events now include `easing` and `duration` ([4d33080](https://github.com/facebook/react-native/commit/4d33080) by [@sahrens](https://github.com/sahrens))

### 🍎 iOS exclusive additions

- `react-native run-ios` now supports the `--port` argument for metro ([33d710e](https://github.com/facebook/react-native/commit/33d710e))

#### 🤖 Android exclusive additions

- On Android, **ScrollView** now takes `snapToInterval` like iOS ([ddd65f1](https://github.com/facebook/react-native/commit/ddd65f1) and [b2848a5](https://github.com/facebook/react-native/commit/b2848a5) )
- On Android, **TextInput** now takes `onKeyPress` like iOS ([c9ff0bc](https://github.com/facebook/react-native/commit/c9ff0bc) by [@joshyhargreaves](https://github.com/joshyhargreaves))

### Changed

- ⬆️ Metro to v0.24.2 ([2e008bc](https://github.com/facebook/react-native/commit/2e008bc) and [0b5e8b4](https://github.com/facebook/react-native/commit/0b5e8b4) by [@rafeca](https://github.com/rafeca))
- ⬆️ Flow to v0.63 ([6b95c4f](https://github.com/facebook/react-native/commit/6b95c4f) by [@gabelevi](https://github.com/gabelevi))
- ⬆️ Danger to v2.0 ([b750e3b](https://github.com/facebook/react-native/commit/b750e3b) by [@hramos](https://github.com/hramos))
- ⬆️ Jest to v22.0.0 ([4803419](https://github.com/facebook/react-native/commit/4803419) by [@mjesun](https://github.com/mjesun))
- 💄 Bundler is now called Metro Bundler in the terminal ([654d759](https://github.com/facebook/react-native/commit/654d759) by [@edcs](https://github.com/edcs))
- 📝 Update getting started url on Android CLI ([6661633](https://github.com/facebook/react-native/commit/6661633))
- 🐳 Dockerfile uses newest Android SDK, Buck, and new Docker tags have been pushed ([4fbfbe6](https://github.com/facebook/react-native/commit/4fbfbe6) and [c547f78](https://github.com/facebook/react-native/commit/c547f78) by [@hramos](https://github.com/hramos))
- 📝 Update repo docs to use HTTPS ([33a2e53](https://github.com/facebook/react-native/commit/33a2e53) by [@him2him2](https://github.com/him2him2))
- 🎨 Make **ScrollResponder** follow code style ([45e6fcd](https://github.com/facebook/react-native/commit/45e6fcd) by [@TheSavior](https://github.com/TheSavior))
- **VirtualizedList** now requires a windowSize greater than 0 ([3559e42](https://github.com/facebook/react-native/commit/3559e42))
- react-devtools works with emulator and real devices now without needing to tweak the devServer value ([fa574c6](https://github.com/facebook/react-native/commit/fa574c6) by [@jhen0409](https://github.com/jhen0409))
- 📝 Clarify use of Flow props types in react-native-cli's template project ([9b147a5](https://github.com/facebook/react-native/commit/9b147a5) by [@hramos](https://github.com/hramos))
- 📝 Add docs for `isInspectable` ([59c7967](https://github.com/facebook/react-native/commit/59c7967) by [@bnham](https://github.com/bnham))
- ✅ More Flow improvements (**Text**, **SectionList**, and others) ([f71f4e7](https://github.com/facebook/react-native/commit/f71f4e7), [632f120](https://github.com/facebook/react-native/commit/632f120), and [a8391bd](https://github.com/facebook/react-native/commit/a8391bd) by [@yungsters](https://github.com/yungsters), [@samwgoldman](https://github.com/samwgoldman), and others)
- Various code cleanup to satisfy linting errors and standards ([b0319f3](https://github.com/facebook/react-native/commit/b0319f3), [dd46117](https://github.com/facebook/react-native/commit/dd46117), and [7f58189](https://github.com/facebook/react-native/commit/7f58189) by [@ayc1](https://github.com/ayc1), [@grabbou](https://github.com/grabbou), and [@ide](https://github.com/ide))

#### 🍎 iOS exclusive changes

- 🔥⚡️ iOS UI Manager cleanup and optimizations ([7d1deda](https://github.com/facebook/react-native/commit/7d1deda), [0ae4c47](https://github.com/facebook/react-native/commit/0ae4c47), [2679f3e](https://github.com/facebook/react-native/commit/2679f3e),and [d9e5b31](https://github.com/facebook/react-native/commit/d9e5b31) by [@shergin](https://github.com/shergin))
- If the inspector tries to handle a wrapped event but there is no connection, log a warning rather than a Redbox ([30da262](https://github.com/facebook/react-native/commit/30da262) by [@bnham](https://github.com/bnham))
- Various under-the-covers changes around the bridge, RCTShadowView, RCTSurface, and a few others ([c3139d7](https://github.com/facebook/react-native/commit/c3139d7), [2789ba0](https://github.com/facebook/react-native/commit/2789ba0), [b8e60a3](https://github.com/facebook/react-native/commit/b8e60a3), [099b280](https://github.com/facebook/react-native/commit/099b280), [b263560](https://github.com/facebook/react-native/commit/b263560), [19a9c5e](https://github.com/facebook/react-native/commit/19a9c5e), [d3b41e0](https://github.com/facebook/react-native/commit/d3b41e0), [b2a2519](https://github.com/facebook/react-native/commit/b2a2519), [870bc48](https://github.com/facebook/react-native/commit/870bc48), [176a578](https://github.com/facebook/react-native/commit/176a578), [c491b22](https://github.com/facebook/react-native/commit/c491b22), [c756122](https://github.com/facebook/react-native/commit/c756122), and[c01a171](https://github.com/facebook/react-native/commit/c01a171) by [@shergin](https://github.com/shergin))
- Changed to use *boost-for-react-native* cocoapod, which speeds up `pod install` a ton ([cf19833](https://github.com/facebook/react-native/commit/cf19833) by [@CFKevinRef](https://github.com/CFKevinRef))

#### 🤖 Android exclusive changes

- Include scroll momentum info when there are scroll events from Android ([c49d249](https://github.com/facebook/react-native/commit/c49d249) by [@wwalser](https://github.com/wwalser))
- Yoga's mkfile for Android now uses wildcard instead of manual file addition ([d89901f](https://github.com/facebook/react-native/commit/d89901f) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))

### Removed

- **TextInput** no longer has the `autoGrow` prop, since this is platform-default behavior now ([dabb78b](https://github.com/facebook/react-native/commit/dabb78b) by [@shergin](https://github.com/shergin))

#### 🍎 iOS exclusive removals

- Updates to the bridge in order to enable future rendering optimizations ([d2dc451](https://github.com/facebook/react-native/commit/d2dc451) by [@shergin](https://github.com/shergin))

### 🐛 Fixed

- Do not set `minify=true` when calculating the list of dependencies for the CLI ([4a1bb8f](https://github.com/facebook/react-native/commit/4a1bb8f) by [@rafeca](https://github.com/rafeca))
- 👷 Update CODEOWNERS now that the docs are in a separate repository ([85ff264](https://github.com/facebook/react-native/commit/85ff264) by [@hramos](https://github.com/hramos))
- Fixed a broken link in react-native-git-upgrade's readme ([bbedf2d](https://github.com/facebook/react-native/commit/bbedf2d) by [@Taym95](https://github.com/Taym95))
- 🤡 Do not use Node 8.x specific Stream.final for FS mocks ([4216cde](https://github.com/facebook/react-native/commit/4216cde) by [@hramos](https://github.com/hramos))
- Fix virtualized cell keys for list headers and footers ([a010a0c](https://github.com/facebook/react-native/commit/a010a0c))
- Fix warnings of casting and null pointer handling in Yoga ([a8d4666](https://github.com/facebook/react-native/commit/a8d4666) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix broken buck failures on master ([4e76701](https://github.com/facebook/react-native/commit/4e76701) by [@hramos](https://github.com/hramos))
- **RefreshControl** appears correctly when expected on initial render of a **FlatList** again ([9b877d6](https://github.com/facebook/react-native/commit/9b877d6) by [@vonovak](https://github.com/vonovak))
- Fixed JS debugger CORS issue ([df8da3b](https://github.com/facebook/react-native/commit/df8da3b) by [@njbmartin](https://github.com/njbmartin))

#### 🤖 Android exclusive fixes

- Fix position of dev loading view on Android API < 20 ([7ff6657](https://github.com/facebook/react-native/commit/7ff6657) by [@kmagiera](https://github.com/kmagiera))
- Fix Modal not disappearing when navigating from inside a Modal to another activity ([e5c2a66](https://github.com/facebook/react-native/commit/e5c2a66)

#### 🍎 iOS exclusive fixes

- Fix regression introduced where layout wouldn't occur in some situations ([46be5bf](https://github.com/facebook/react-native/commit/46be5bf) by [@shergin](https://github.com/shergin))
- Fixed double initial prop applying for newly created views ([0ec1017](https://github.com/facebook/react-native/commit/0ec1017) by [@shergin](https://github.com/shergin))
- tvOS build now works again ([3bd8986](https://github.com/facebook/react-native/commit/3bd8986) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))

### Other

Below is a list of the remaining, low-level changes that made it into this release of React Native.

- Remove "prepareReact" call from the bridge ([80f9e1f](https://github.com/facebook/react-native/commit/80f9e1f) and [56a42e5](https://github.com/facebook/react-native/commit/56a42e5) by [@fromcelticpark](https://github.com/fromcelticpark))
- Add explicit componentControllerClass to CKComponent for RCTSurface ([ab97270](https://github.com/facebook/react-native/commit/ab97270))
- Changes to RCTShadowView to increase RCTSurface performance ([f96f9c5](https://github.com/facebook/react-native/commit/f96f9c5) by [@shergin](https://github.com/shergin))
- Designated methods to control dirty propagation ([af226ef](https://github.com/facebook/react-native/commit/af226ef) by [@shergin](https://github.com/shergin))
- Add missing tvOS header ([49cbca7](https://github.com/facebook/react-native/commit/49cbca7) by [@grabbou](https://github.com/grabbou))
- On Android, seperate logic to initialize JS from starting the app ([4996b9a](https://github.com/facebook/react-native/commit/4996b9a) by [@axe-fb](https://github.com/axe-fb))
- ♻️ JS linting was cleaned up: removed unused libs, strengthened the rules, removed unneeded rules, prevent disabled tests, and more ([2815ada](https://github.com/facebook/react-native/commit/2815ada), [183c316](https://github.com/facebook/react-native/commit/183c316), [9c67e74](https://github.com/facebook/react-native/commit/9c67e74), [79902f9](https://github.com/facebook/react-native/commit/79902f9), [9a36872](https://github.com/facebook/react-native/commit/9a36872), [67a3c42](https://github.com/facebook/react-native/commit/67a3c42), [b826596](https://github.com/facebook/react-native/commit/b826596), [a1a0a69](https://github.com/facebook/react-native/commit/a1a0a69), and [11a495c](https://github.com/facebook/react-native/commit/11a495c) by [@TheSavior](https://github.com/TheSavior))
- 👷 Separate JS lint and flow checks from tests ([5ea5683](https://github.com/facebook/react-native/commit/5ea5683) by [@hramos](https://github.com/hramos))
- 👷 Fix Buck in build config to enable CI ([796122d](https://github.com/facebook/react-native/commit/796122d), [7c3a61f](https://github.com/facebook/react-native/commit/7c3a61f), [82b123e](https://github.com/facebook/react-native/commit/82b123e) by [@grabbou](https://github.com/grabbou))
- ♻️ Various refactoring within the YGNode implementation ([28968e2](https://github.com/facebook/react-native/commit/28968e2), [0a9e652](https://github.com/facebook/react-native/commit/0a9e652), [6627d77](https://github.com/facebook/react-native/commit/6627d77), and [d85da86](https://github.com/facebook/react-native/commit/d85da86), [a163f70](https://github.com/facebook/react-native/commit/a163f70) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix ReactLegacy and delete RCTViewControllerProtocol ([a0ff8c7](https://github.com/facebook/react-native/commit/a0ff8c7) by [@javache](https://github.com/javache))
- Define internal FB macro for OSS builds; remove some unused definitions ([077c3ab](https://github.com/facebook/react-native/commit/077c3ab) and ([a6a66c5](https://github.com/facebook/react-native/commit/a6a66c5) by [@ttsugriy](https://github.com/ttsugriy))
- RNTester: Relax Bridge Release Check ([e3c6f38](https://github.com/facebook/react-native/commit/e3c6f38) by [@yungsters](https://github.com/yungsters))
- Remove embeddedBundleURL from the asset resolver ([489b98b](https://github.com/facebook/react-native/commit/489b98b))
- Do not set FB_ASSERTION_ENABLED ([4cdbb77](https://github.com/facebook/react-native/commit/4cdbb77) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- JSBigString to MAP_PRIVATE not MAP_SHARED ([f9f40cd](https://github.com/facebook/react-native/commit/f9f40cd))
- Fixed black ARTSurfaceView ([5c8481e](https://github.com/facebook/react-native/commit/5c8481e) by [@shergin](https://github.com/shergin))
- Kill orphaned marker end in JSCExecutor ([6ad1f09](https://github.com/facebook/react-native/commit/6ad1f09) by [@michalgr](https://github.com/michalgr))
- Make YGNode as c++ struct with properties exposed through accessors ([f1055bc](https://github.com/facebook/react-native/commit/f1055bc) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- 🔖 ...and now we're at 0.53.0-rc.0 🎁 ([0b99657](https://github.com/facebook/react-native/commit/0b99657) by [@grabbou](https://github.com/grabbou))

## [0.52.0] - 2018-01-07

> This changelog has been prepared by Ryan Turner (@turnrye) - thank you for
> your time and making such a detailed changelog 🔥🔥

This release had a lot of work around the bundler and packager, a ton of
bugfixes, and updates to many of React Native's dependencies. Lots of
under-the-hood work was done as well to improve the layout engine. Happy new
year!

> If you would like to help us with the next release changelog, please contact
> @grabbou

### Added

- Prettier has a config and an npm script; try it out with `npm run prettier`
  ([1645912](https://github.com/facebook/react-native/commit/1645912) by
  [@janicduplessis](https://github.com/janicduplessis))
- Introducing justifyContent: **space-evenly**
  ([1050e0b](https://github.com/facebook/react-native/commit/1050e0b) by
  [@woehrl01](https://github.com/woehrl01))
- **Debug JS in Nuclide** is now an option in the dev menu 🐜
  ([7c7108a](https://github.com/facebook/react-native/commit/7c7108a) and
  [de424cc](https://github.com/facebook/react-native/commit/de424cc))
- Introducing **PlatformOS** – it looks a lot like **Platform**, but with a
  simplified API
  ([5ee27ff](https://github.com/facebook/react-native/commit/5ee27ff) by
  [@brishin](https://github.com/brishin))
- New experimental *RCTSurface*: measure and layout a UI in a thread-safe and
  synchronous manner
  ([be6976d](https://github.com/facebook/react-native/commit/be6976d),
  [7df58e2](https://github.com/facebook/react-native/commit/7df58e2),
  [e75bd87](https://github.com/facebook/react-native/commit/e75bd87),
  [aa83b5a](https://github.com/facebook/react-native/commit/aa83b5a),
  [081f7d1](https://github.com/facebook/react-native/commit/081f7d1),
  [da17b23](https://github.com/facebook/react-native/commit/da17b23),
  [e9e0cd7](https://github.com/facebook/react-native/commit/e9e0cd7),
  [43b2509](https://github.com/facebook/react-native/commit/43b2509),
  [ba60751](https://github.com/facebook/react-native/commit/ba60751),
  [d71d28f](https://github.com/facebook/react-native/commit/d71d28f),
  [4d37cf0](https://github.com/facebook/react-native/commit/4d37cf0), and
  [d021dd2](https://github.com/facebook/react-native/commit/d021dd2) by
  [@maicki](https://github.com/maicki) and
  [@shergin](https://github.com/shergin))
- Experimental **SwipeableRow**'s datasource now has a `getLastRowID` method
  ([d79e245](https://github.com/facebook/react-native/commit/d79e245))
- [React Native monthly
  #5](https://facebook.github.io/react-native/blog/2017/11/06/react-native-monthly-5.html)
  was added ([3c5a55d](https://github.com/facebook/react-native/commit/3c5a55d)
  by [@tenodi](https://github.com/tenodi))

#### iOS Specific

- **DatePickerIOS** now takes **locale** 🌍
  ([fd9c361](https://github.com/facebook/react-native/commit/fd9c361) by
  [@RobertPaul01](https://github.com/RobertPaul01))
- **CameraRoll** can now **deletePhotos** 📸
  ([554e873](https://github.com/facebook/react-native/commit/554e873) by
  [@fxfactorial](https://github.com/fxfactorial))
- There's now an API to specify a different directory for iOS image assets
  ([8f9b291](https://github.com/facebook/react-native/commit/8f9b291))
- Support for [custom accessibility
  actions](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)
  on iOS ([36ad813](https://github.com/facebook/react-native/commit/36ad813) by
  [@ericdavmsft](https://github.com/ericdavmsft))

### Deprecated

- Ignore YellowBox warnings with `YellowBox.ignoreWarnings([...])` rather than
  `console.ignoredYellowBox = [...]`
  ([26038f5](https://github.com/facebook/react-native/commit/26038f5) by
  [@wli](https://github.com/wli))

### Changed

- Metro-bundler is now metro, and it's v0.24.1; there were some performance
  increases at the cost of a few breaking changes; improved tests of the bundler
  too ([0bbd9f0](https://github.com/facebook/react-native/commit/0bbd9f0),
  [a2fd3fc](https://github.com/facebook/react-native/commit/a2fd3fc),
  [503b452](https://github.com/facebook/react-native/commit/503b452),
  [654fed4](https://github.com/facebook/react-native/commit/654fed4),
  [0091496](https://github.com/facebook/react-native/commit/0091496),
  [aba148f](https://github.com/facebook/react-native/commit/aba148f),
  [3d5dc87](https://github.com/facebook/react-native/commit/3d5dc87),
  [48019a0](https://github.com/facebook/react-native/commit/48019a0),
  [ecec431](https://github.com/facebook/react-native/commit/ecec431),
  [f4d627c](https://github.com/facebook/react-native/commit/f4d627c),
  [f871d25](https://github.com/facebook/react-native/commit/f871d25),
  [a7b231a](https://github.com/facebook/react-native/commit/a7b231a),
  [830b431](https://github.com/facebook/react-native/commit/830b431),
  [29dafa1](https://github.com/facebook/react-native/commit/29dafa1),
  [7a5d5a4](https://github.com/facebook/react-native/commit/7a5d5a4),
  [4cd685a](https://github.com/facebook/react-native/commit/4cd685a),
  [d326c86](https://github.com/facebook/react-native/commit/d326c86),
  [231c7a0](https://github.com/facebook/react-native/commit/231c7a0),
  [7d969a0](https://github.com/facebook/react-native/commit/7d969a0),
  [ae51730](https://github.com/facebook/react-native/commit/ae51730),
  [f587f8d](https://github.com/facebook/react-native/commit/f587f8d),
  [fbf0aed](https://github.com/facebook/react-native/commit/fbf0aed),
  [e9393f6](https://github.com/facebook/react-native/commit/e9393f6), and
  [968c88d](https://github.com/facebook/react-native/commit/968c88d) by
  [@cpojer](https://github.com/cpojer), [@hramos](https://github.com/hramos),
  [@jeanlauliac](https://github.com/jeanlauliac), and
  [@rafeca](https://github.com/rafeca)
  )
- React is now v16.2.0, and it took react-test-renderer along with it; [now with
  more
  fragments!](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
  🎉 ([c7f3707](https://github.com/facebook/react-native/commit/c7f3707) and
  [cd938d7](https://github.com/facebook/react-native/commit/cd938d7) by
  [@bvaughn](https://github.com/bvaughn))
- Jest is now v21.3.0-beta.13
  ([16bbd90](https://github.com/facebook/react-native/commit/16bbd90) and
  [ec2ea58](https://github.com/facebook/react-native/commit/ec2ea58) by
  [@mjesun](https://github.com/mjesun))
- Flow is now v0.61.0, and there were a ton of Flow fixes/coverage improvements
  made ([914ae93](https://github.com/facebook/react-native/commit/914ae93),
  [eb0d647](https://github.com/facebook/react-native/commit/eb0d647),
  [c8e72bb](https://github.com/facebook/react-native/commit/c8e72bb),
  [2d4bedb](https://github.com/facebook/react-native/commit/2d4bedb),
  [e0202e4](https://github.com/facebook/react-native/commit/e0202e4),
  [2be3ae1](https://github.com/facebook/react-native/commit/2be3ae1),
  [22a1419](https://github.com/facebook/react-native/commit/22a1419),
  [6ae0b34](https://github.com/facebook/react-native/commit/6ae0b34),
  [76a2ca4](https://github.com/facebook/react-native/commit/76a2ca4),
  [3259353](https://github.com/facebook/react-native/commit/3259353),
  [e6c1fb7](https://github.com/facebook/react-native/commit/e6c1fb7),
  [61d046b](https://github.com/facebook/react-native/commit/61d046b),
  [820cfa1](https://github.com/facebook/react-native/commit/820cfa1),
  [240039c](https://github.com/facebook/react-native/commit/240039c),
  [343c5a9](https://github.com/facebook/react-native/commit/343c5a9),
  [5f8d8e9](https://github.com/facebook/react-native/commit/5f8d8e9), and
  [da04796](https://github.com/facebook/react-native/commit/da04796) by
  [@Ashoat](https://github.com/Ashoat),
  [@calebmer](https://github.com/calebmer),
  [@cdlewis](https://github.com/cdlewis),
  [@deecewan](https://github.com/deecewan),
  [@grabbou](https://github.com/grabbou),
  [@jamesisaac](https://github.com/jamesisaac),
  [@mroch](https://github.com/mroch), [@nmn](https://github.com/nmn),
  [@nmote](https://github.com/nmote), [@sahrens](https://github.com/sahrens),
  [@samwgoldman](https://github.com/samwgoldman),
  [@TheSavior](https://github.com/TheSavior), and others)
- react-devtools-core is now v3.0.0
  ([a7d46ea](https://github.com/facebook/react-native/commit/a7d46ea) by
  [@rsnara](https://github.com/rsnara))
- Split out docs to [their own
  repo](https://github.com/facebook/react-native-website/tree/master/docs) (and
  a few formatting fixes along the journey) 👋
  ([2d86618](https://github.com/facebook/react-native/commit/2d86618),
  [64d80b1](https://github.com/facebook/react-native/commit/64d80b1),
  [3362da4](https://github.com/facebook/react-native/commit/3362da4),
  [75123c6](https://github.com/facebook/react-native/commit/75123c6), and
  [79e24ed](https://github.com/facebook/react-native/commit/79e24ed) by
  [@hramos](https://github.com/hramos)).
- **TouchableHighlight** now has a default delayPressOut value of 100; it was
  also refactored a bit for style
  ([ee8a7b4](https://github.com/facebook/react-native/commit/ee8a7b4) by
  [@sahrens](https://github.com/sahrens))
- When in a dev build, more robustly validate arguments for native methods
  ([ea2e2c5](https://github.com/facebook/react-native/commit/ea2e2c5) by
  [@mhorowitz](https://github.com/mhorowitz))
- On integration tests, report *all* errors
  ([3bcb912](https://github.com/facebook/react-native/commit/3bcb912) by
  [@sahrens](https://github.com/sahrens))
- Yoga has less technical debt, thanks to replacing *YGNodeList* with vectors
  ([b08a912](https://github.com/facebook/react-native/commit/b08a912) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Yoga is now cpp, compiled as *c++1y*
  ([d7ab949](https://github.com/facebook/react-native/commit/d7ab949) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Bundle segments are handled better and used more
  ([6812789](https://github.com/facebook/react-native/commit/6812789),
  [a47431e](https://github.com/facebook/react-native/commit/a47431e),
  [963c61d](https://github.com/facebook/react-native/commit/963c61d),
  [b9f21dc](https://github.com/facebook/react-native/commit/b9f21dc),
  [f125818](https://github.com/facebook/react-native/commit/f125818), and
  [1988ba1](https://github.com/facebook/react-native/commit/1988ba1) by
  [@fromcelticpark](https://github.com/fromcelticpark) and
  [@jeanlauliac](https://github.com/jeanlauliac))
- *packager-worker-for-buck* has better tests
  ([7fd5aa8](https://github.com/facebook/react-native/commit/7fd5aa8) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- *RCTUIManager* has less technical debt
  ([71b498b](https://github.com/facebook/react-native/commit/71b498b),
  [60dc9be](https://github.com/facebook/react-native/commit/60dc9be), and
  [21714fe](https://github.com/facebook/react-native/commit/21714fe) by
  [@shergin](https://github.com/shergin))
- Numerous bridge changes, especially around URL resolution
  ([e7bd0f0](https://github.com/facebook/react-native/commit/e7bd0f0),
  [260e6d2](https://github.com/facebook/react-native/commit/260e6d2),
  [4894ac4](https://github.com/facebook/react-native/commit/4894ac4),
  [b983de9](https://github.com/facebook/react-native/commit/b983de9),
  [b0193b0](https://github.com/facebook/react-native/commit/b0193b0),
  [ae5ef65](https://github.com/facebook/react-native/commit/ae5ef65), and
  [1d6ce23](https://github.com/facebook/react-native/commit/1d6ce23) by
  [@fromcelticpark](https://github.com/fromcelticpark) and others)
- Various cleanup and refactoring
  ([0537763](https://github.com/facebook/react-native/commit/0537763),
  [0984f29](https://github.com/facebook/react-native/commit/0984f29),
  [6c70975](https://github.com/facebook/react-native/commit/6c70975),
  [d950dc6](https://github.com/facebook/react-native/commit/d950dc6),
  [70c3590](https://github.com/facebook/react-native/commit/70c3590),
  [cfa2bbf](https://github.com/facebook/react-native/commit/cfa2bbf), and
  [850efa8](https://github.com/facebook/react-native/commit/850efa8) by
  [@bnham](https://github.com/bnham),
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), and others)
- Jest preprocessing now uses the AST from metro
  ([2ae255a](https://github.com/facebook/react-native/commit/2ae255a) and
  [d5b5951](https://github.com/facebook/react-native/commit/d5b5951) by
  [@rafeca](https://github.com/rafeca))
- `renderApplication()` now supports async initial render
  ([1b22d49](https://github.com/facebook/react-native/commit/1b22d49) by
  [@bvaughn](https://github.com/bvaughn))
- Welcome [@lwinkyawmyat](https://github.com/lwinkyawmyat) to the React Native
  GitHub Issue Task Force
  ([4ebe76d](https://github.com/facebook/react-native/commit/4ebe76d) by
  [@lwinkyawmyat](https://github.com/lwinkyawmyat))

#### Android exclusive changes

- Native components on Android register lazily rather than via ViewManager
  ([1b71e03](https://github.com/facebook/react-native/commit/1b71e03))
- Android debug overlays (like **RedBox**, dev menu, loading) are no longer are
  system overlays; they're now part of the *currentActivity*
  ([d19afc7](https://github.com/facebook/react-native/commit/d19afc7) by
  [@kmagiera](https://github.com/kmagiera))

#### iOS exclusive changes

- Improve iOS's *accessibilityLabel* performance by up to 20% 📈
  ([19b0a65](https://github.com/facebook/react-native/commit/19b0a65) by
  [@chendo](https://github.com/chendo))

### Fixed

- Fix `backgroundColor` on **TouchableHighlight**
  ([5a1171e](https://github.com/facebook/react-native/commit/5a1171e) by
  [@sahrens](https://github.com/sahrens))
- Various corrections in messages, comments, and docblocks
  ([58c3bc4](https://github.com/facebook/react-native/commit/58c3bc4),
  [354e1cb](https://github.com/facebook/react-native/commit/354e1cb),
  [58edf02](https://github.com/facebook/react-native/commit/58edf02),
  [b9e7006](https://github.com/facebook/react-native/commit/b9e7006),
  [d2f0abd](https://github.com/facebook/react-native/commit/d2f0abd),
  [94cd9f5](https://github.com/facebook/react-native/commit/94cd9f5),
  [8547b7e](https://github.com/facebook/react-native/commit/8547b7e),
  [44c1649](https://github.com/facebook/react-native/commit/44c1649),
  [c91d872](https://github.com/facebook/react-native/commit/c91d872),
  [85503a0](https://github.com/facebook/react-native/commit/85503a0), and
  [5b83dbe](https://github.com/facebook/react-native/commit/5b83dbe) by
  [@behrends](https://github.com/behrends),
  [@bvaughn](https://github.com/bvaughn),
  [@charpeni](https://github.com/charpeni)),
  [@dsandmark](https://github.com/dsandmark),
  [@gusgard](https://github.com/gusgard),
  [@nkabrown](https://github.com/nkabrown),
  [@petterh](https://github.com/petterh), [@solon](https://github.com/solon),
  [@swashcap](https://github.com/swashcap), and others)
- Various dev doc and project doc fixes for correctness and completeness
  ([92c0980](https://github.com/facebook/react-native/commit/92c0980),
  [3c9092a](https://github.com/facebook/react-native/commit/3c9092a),
  [e906525](https://github.com/facebook/react-native/commit/e906525),
  [6082856](https://github.com/facebook/react-native/commit/6082856),
  [c49b97c](https://github.com/facebook/react-native/commit/c49b97c),
  [45ed142](https://github.com/facebook/react-native/commit/45ed142),
  [cb6ec7c](https://github.com/facebook/react-native/commit/cb6ec7c),
  [9ec9567](https://github.com/facebook/react-native/commit/9ec9567),
  [e5a4ea9](https://github.com/facebook/react-native/commit/e5a4ea9),
  [c544c0d](https://github.com/facebook/react-native/commit/c544c0d),
  [33d5e5b](https://github.com/facebook/react-native/commit/33d5e5b),
  [95dac8d](https://github.com/facebook/react-native/commit/95dac8d),
  [6e1db1f](https://github.com/facebook/react-native/commit/6e1db1f),
  [e11d496](https://github.com/facebook/react-native/commit/e11d496),
  [6da8979](https://github.com/facebook/react-native/commit/6da8979),
  [0ff5760](https://github.com/facebook/react-native/commit/0ff5760),
  [1ee64cc](https://github.com/facebook/react-native/commit/1ee64cc),
  [3aa3856](https://github.com/facebook/react-native/commit/3aa3856),
  [6b26971](https://github.com/facebook/react-native/commit/6b26971), and
  [de3976a](https://github.com/facebook/react-native/commit/de3976a) by
  [@adrianomelo](https://github.com/adrianomelo),
  [@blargity](https://github.com/blargity),
  [@charpeni](https://github.com/charpeni),
  [@garlic-rice-with-butter](https://github.com/garlic-rice-with-butter),
  [@gwmccull](https://github.com/gwmccull),
  [@harikrishnanp](https://github.com/harikrishnanp),
  [@hramos](https://github.com/hramos)),
  [@johnthewilson](https://github.com/johnthewilson),
  [@jsdario](https://github.com/jsdario), [@kelset](https://github.com/kelset),
  [@patrickkempff](https://github.com/patrickkempff),
  [@ryanml](https://github.com/ryanml),
  [@tiagomoraismorgado88](https://github.com/tiagomoraismorgado88),
  [@timwangdev](https://github.com/timwangdev), and others)
- Stop `RCTRefreshControl` from jumping around
  ([2e1707d](https://github.com/facebook/react-native/commit/2e1707d) by
  [@sophiebits](https://github.com/sophiebits))
- Fix a race condition in the animation module
  ([515eb0e](https://github.com/facebook/react-native/commit/515eb0e) by
  [@mhorowitz](https://github.com/mhorowitz))
- Fix Windows local-cli's to not wrongfully identify as globally installed
  ([ca10604](https://github.com/facebook/react-native/commit/ca10604) by
  [@sballew](https://github.com/sballew))
- Fix Jest mocks for **NetInfo**, **Dimensions**, and **ScrollView** modules
  ([7fb3a92](https://github.com/facebook/react-native/commit/7fb3a92),
  [11a2a35](https://github.com/facebook/react-native/commit/11a2a35), and
  [0c8a3e4](https://github.com/facebook/react-native/commit/0c8a3e4) by
  [@alvaromb](https://github.com/alvaromb),
  [@timwangdev](https://github.com/timwangdev), and
  [@uk-ar](https://github.com/uk-ar))
- packager-worker-for-buck: `transformCommand`: add missing test
  ([73a01be](https://github.com/facebook/react-native/commit/73a01be) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- Fixed issue where CLI wasn't following the config value for postMinifyProcess
  when its running with `dev=false`
  ([6d92046](https://github.com/facebook/react-native/commit/6d92046) by
  [@rafeca](https://github.com/rafeca))
- Fix asset resolver url handling
  ([28d5d6b](https://github.com/facebook/react-native/commit/28d5d6b) by
  [@fkgozali](https://github.com/fkgozali))
- Fix crash when destroying catalyst
  ([f101566](https://github.com/facebook/react-native/commit/f101566))
- You can now `justifyContent` while you're `minWidth`ing and `marginLeft`ing;
  before the justification wasn't honored
  ([f5beceb](https://github.com/facebook/react-native/commit/f5beceb) by
  [@woehrl01](https://github.com/woehrl01))
- `marginLeft: auto` and `alignItem: stretch` now play nicely together; before
  the width and height ended up incorrect
  ([5f99b1a](https://github.com/facebook/react-native/commit/5f99b1a) by
  [@woehrl01](https://github.com/woehrl01))
- Fix assertion preventing YGNodeLayoutGet* with YGEdgeEnd
  ([a383b8c](https://github.com/facebook/react-native/commit/a383b8c) by
  [@justjake](https://github.com/justjake))
- Fix shrinking in non-strech alignments
  ([1d62848](https://github.com/facebook/react-native/commit/1d62848) by
  [@woehrl01](https://github.com/woehrl01))
- Correctly calculate min/max percentage constraints
  ([4fdaf2d](https://github.com/facebook/react-native/commit/4fdaf2d) by
  [@woehrl01](https://github.com/woehrl01))
- When running `react-native-git-upgrade`, don't execute git's hooks
  ([0182086](https://github.com/facebook/react-native/commit/0182086) by
  [@adrienthiery](https://github.com/adrienthiery))
- When running `react-native-git-upgrade` and failing with a signal, return that
  to the terminal
  ([b9a5862](https://github.com/facebook/react-native/commit/b9a5862) by
  [@mateusz-](https://github.com/mateusz-))
- In **KeyboardAvoidingView**, don't mistakenly try to layout when a hardware
  keyboard changes
  ([ad4450a](https://github.com/facebook/react-native/commit/ad4450a) by
  [@koenpunt](https://github.com/koenpunt))
- Don't endlessly collect websockets when not connected to the packager (dev
  memory leak)
  ([1e1e491](https://github.com/facebook/react-native/commit/1e1e491) by
  [@mmmulani](https://github.com/mmmulani))
- Fixed a bug in the sample project random `selection` prop that made it
  not-so-random
  ([766f020](https://github.com/facebook/react-native/commit/766f020) by
  [@rozele](https://github.com/rozele))

#### Android exclusive fixes

- Explicitly `#define isnan __builtin_isnan` for Android *clang-5* to mimic
  **gcc**'s default behavior
  ([f8fe6b0](https://github.com/facebook/react-native/commit/f8fe6b0))
- Correctly update **NetInfo** on Android even if connection types change while
  the app is in the background
  ([e6f542d](https://github.com/facebook/react-native/commit/e6f542d) by
  [@berickson1](https://github.com/berickson1))
- Direction-aware borders now work with Android APIs >= 17
  ([7170543](https://github.com/facebook/react-native/commit/7170543) by
  [@rsnara](https://github.com/rsnara))
- Don't throw *BadTokenException* and *IllegalArgmentException* when showing or
  dismissing Modal on Android
  ([c465599](https://github.com/facebook/react-native/commit/c465599))
- Fix Android crash when blurRadius is between 0 and 1
  ([dc01eff](https://github.com/facebook/react-native/commit/dc01eff) by
  [@jamesreggio](https://github.com/jamesreggio))
- Fix `borderRadius` with Android API level < 18
  ([5aa1fb3](https://github.com/facebook/react-native/commit/5aa1fb3) and
  [ca7fe72](https://github.com/facebook/react-native/commit/ca7fe72) by
  [@rsnara](https://github.com/rsnara))
- Make Android `lineHeight` behavior match iOS's 📏
  ([3f1b021](https://github.com/facebook/react-native/commit/3f1b021))
- Fixed autoscroll to cursor on Android **TextInput**
  ([0bef872](https://github.com/facebook/react-native/commit/0bef872) by
  [@shergin](https://github.com/shergin))
- Fix logging unpacking time on Android when it happens concurrently with eager
  unpacking ([028b64b](https://github.com/facebook/react-native/commit/028b64b)
  by [@alexeylang](https://github.com/alexeylang))
- Prevent an Android crash when **TextInput** has `selectionColor` defined but
  there is no drawable cursor
  ([1e18d90](https://github.com/facebook/react-native/commit/1e18d90) by
  [@gpeal](https://github.com/gpeal))

#### iOS exclusive fixes

- Don't have XCode warnings for *YGDefaultLog* in newly created projects
  ([72e762d](https://github.com/facebook/react-native/commit/72e762d) by
  [@woehrl01](https://github.com/woehrl01))
- iOS *RCTEventEmitter* uses a `double` for count, not *NSInteger*
  ([eaa8499](https://github.com/facebook/react-native/commit/eaa8499))
- Fix `isNuclideDebuggingAvailable` on iOS
  ([59c3e33](https://github.com/facebook/react-native/commit/59c3e33))
- iOS ScrollView is now rendered correctly with RefreshControl
  ([75d62bf](https://github.com/facebook/react-native/commit/75d62bf) by
  [@vonovak](https://github.com/vonovak))
- Fix a crash when keyboard is visible and bridge reload happens on iOS
  ([d9c6585](https://github.com/facebook/react-native/commit/d9c6585) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- **RedBox** now appears beneath the status bar on iOS
  ([33cefc1](https://github.com/facebook/react-native/commit/33cefc1) by
  [@adamjernst](https://github.com/adamjernst))
- Fractional border widths on iOS are now the right size, honoring insets
  ([15179f1](https://github.com/facebook/react-native/commit/15179f1) by
  [@Nikita2k](https://github.com/Nikita2k))
- Implement `requiresMainQueueSetup` in *RCTTVNavigationEventEmitter* to satisfy
  XCode warning
  ([ee3532b](https://github.com/facebook/react-native/commit/ee3532b) by
  [@charpeni](https://github.com/charpeni))
- Support the iPhone X in the sample project's header
  ([ad4b124](https://github.com/facebook/react-native/commit/ad4b124) by
  [@vincentriemer](https://github.com/vincentriemer))
- `testID` works on **TabBarItem** on iOS
  ([e19d9de](https://github.com/facebook/react-native/commit/e19d9de))
- On iOS, don't error on the first live-reload of large codebases because of too
  little wait time
  ([b6f1a60](https://github.com/facebook/react-native/commit/b6f1a60) by
  [@lelandrichardson](https://github.com/lelandrichardson))
- Prevent iOS crash on receiving bad unicode in *XMLHTTPRequest*
  ([1c04cee](https://github.com/facebook/react-native/commit/1c04cee) by
  [@cdlewis](https://github.com/cdlewis))
- Define `pod_target_xcconfig` for PrivateDatabase
  ([38b96cd](https://github.com/facebook/react-native/commit/38b96cd) by
  [@ide](https://github.com/ide))
- Fixed podspec include/excludes around tvOS
  ([ba1d7e9](https://github.com/facebook/react-native/commit/ba1d7e9) by
  [@yygene](https://github.com/yygene))
- Don't spam the logs for iOS when receiving `ECONNREFUSED` on connecting to
  packager ([b1701cc](https://github.com/facebook/react-native/commit/b1701cc)
  and [ff3dc2e](https://github.com/facebook/react-native/commit/ff3dc2e) by
  [@adamjernst](https://github.com/adamjernst))
- Don't crash Systrace when debugging JS remotely on iOS
  ([e8eec24](https://github.com/facebook/react-native/commit/e8eec24) by
  [@alexeylang](https://github.com/alexeylang))

### Removed

- Removing `reactBridgeDidFinishTransaction` from *RCTScrollView*
  ([a255204](https://github.com/facebook/react-native/commit/a255204) by
  [@shergin](https://github.com/shergin))
- Removing inherited background color optimization from *RCTText* to reduce code
  complexity – please give feedback if you find performance differences!
  ([8c8944c](https://github.com/facebook/react-native/commit/8c8944c) by
  [@shergin](https://github.com/shergin))

### Other

Below is a list of the remaining, low-level changes that made it into this
release of React Native.

- Add Systrace-based telemetry to Hermes GC
  ([05e862d](https://github.com/facebook/react-native/commit/05e862d))
- Unify Systrace native hook argument passing
  ([52e3ae9](https://github.com/facebook/react-native/commit/52e3ae9) by
  [@amnn](https://github.com/amnn))
- Use different symbols for SystraceSection depending on `WITH_FBYSTRACE`
  ([03956c4](https://github.com/facebook/react-native/commit/03956c4))
- Don't set global.performance to undefined if it was initialized already
  ([dfebcb7](https://github.com/facebook/react-native/commit/dfebcb7) by
  [@alexeylang](https://github.com/alexeylang))
- Autofixes for migrating to Buck's source-only ABI feature
  ([801cbdb](https://github.com/facebook/react-native/commit/801cbdb) by
  [@jkeljo](https://github.com/jkeljo))
- Add remote API to uninstall the global error handler in RN
  ([1d16923](https://github.com/facebook/react-native/commit/1d16923))
- Add *RCTLibraryPathForURL* in *RCTUtil*
  ([2fecbf6](https://github.com/facebook/react-native/commit/2fecbf6))
- Fix sections that come from React Fiber
  ([1f40c95](https://github.com/facebook/react-native/commit/1f40c95) by
  [@alexeylang](https://github.com/alexeylang))
- Fix boolean conversion in sync RN method calls.
  ([dd888d3](https://github.com/facebook/react-native/commit/dd888d3))
- Fix `embeddedBundleURL` update situation
  ([d1fc8ef](https://github.com/facebook/react-native/commit/d1fc8ef))
- Remove `android_react_native_perf.use_separate_ui_bg_thread` experiment.
  ([4f886a2](https://github.com/facebook/react-native/commit/4f886a2))
- ScrollView related files were moved to dedicated folder
  ([098a63a](https://github.com/facebook/react-native/commit/098a63a) by
  [@shergin](https://github.com/shergin))
- move page registration logic in to jsinspector
  ([bef7967](https://github.com/facebook/react-native/commit/bef7967) by
  [@bnham](https://github.com/bnham))
- Type global hooks as function pointers
  ([eca51eb](https://github.com/facebook/react-native/commit/eca51eb) by
  [@johnislarry](https://github.com/johnislarry))
- `std::string` to `const char*`
  ([b952365](https://github.com/facebook/react-native/commit/b952365) by
  [@johnislarry](https://github.com/johnislarry))
- Allow extending props supported by native animations
  ([71751e9](https://github.com/facebook/react-native/commit/71751e9) by
  [@andrewimm](https://github.com/andrewimm))
- Meyers singleton jsc error extractor
  ([434f432](https://github.com/facebook/react-native/commit/434f432) by
  [@johnislarry](https://github.com/johnislarry))
- Do not overwrite the same text in **TextInput**
  ([29f3f55](https://github.com/facebook/react-native/commit/29f3f55))
- Renaming *uiManagerWillFlushUIBlocks* -> *uiManagerWillPerformMounting*
  ([0a8721c](https://github.com/facebook/react-native/commit/0a8721c) by
  [@shergin](https://github.com/shergin))
- Skylarkify flags macros.
  ([ed2bfcb](https://github.com/facebook/react-native/commit/ed2bfcb) by
  [@ttsugriy](https://github.com/ttsugriy))
- Skylarkify `config_utils_defs` macros.
  ([88f6f69](https://github.com/facebook/react-native/commit/88f6f69) by
  [@ttsugriy](https://github.com/ttsugriy))
- Round size geometry for Button and RichText components.
  ([4034feb](https://github.com/facebook/react-native/commit/4034feb) by
  [@iaroslav-pavlov](https://github.com/iaroslav-pavlov)
- Temporarily patched Map/Set non-extensible check into RN dev renderer
  ([a99f0d6](https://github.com/facebook/react-native/commit/a99f0d6) by
  [@bvaughn](https://github.com/bvaughn))
- Run buildifier over all BUCK files
  ([d674d48](https://github.com/facebook/react-native/commit/d674d48) by
  [@zertosh](https://github.com/zertosh))
- Pass `scriptURL` to *RCTTestRunner*
  ([266ab7a](https://github.com/facebook/react-native/commit/266ab7a))
- Make *RCTNativeModule::invokeInner* explicitely return `folly::none` in case
  of error ([0ac5a52](https://github.com/facebook/react-native/commit/0ac5a52)
  by [@fromcelticpark](https://github.com/fromcelticpark))
- Make *RCTPackagerConnection* a singleton
  ([9180d4e](https://github.com/facebook/react-native/commit/9180d4e) by
  [@adamjernst](https://github.com/adamjernst))
- Register split segment paths with *RAMBundleRegistry*
  ([cff0d8e](https://github.com/facebook/react-native/commit/cff0d8e) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- check if listener is still in the set before calling `onHostResume`
  ([ad89ea7](https://github.com/facebook/react-native/commit/ad89ea7))
- export *SeparatorsObj* type for re-use in **ListItem**s etc.
  ([c6fe101](https://github.com/facebook/react-native/commit/c6fe101) by
  [@sahrens](https://github.com/sahrens))
- Do not mark node as dirty if, new and old values are undefined
  ([41da6e3](https://github.com/facebook/react-native/commit/41da6e3) by
  [@woehrl01](https://github.com/woehrl01))
- Remove *RAMBundleRegistry* subclasses
  ([6ecae73](https://github.com/facebook/react-native/commit/6ecae73) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- Fix `minimumViewTime` in *ViewabilityHelper*
  ([d19d137](https://github.com/facebook/react-native/commit/d19d137))
