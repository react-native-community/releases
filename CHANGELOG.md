# Changelog

## Unreleased

Welcome to the February 2018 release of React Native! This release includes work done by the React Native team and the community in January, and there are some big changes here after the holidays.

### Uncategorized

- Update React.podspec for RCTText ([7e7d00a](https://github.com/facebook/react-native/commit/7e7d00a) by [@hovox](https://github.com/hovox))
- Handle invalidation error in RCTObjcExecutor ([493f3e8](https://github.com/facebook/react-native/commit/493f3e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- RN: Revive `react-native-xcode.sh` ([b8c86b8](https://github.com/facebook/react-native/commit/b8c86b8) by [@yungsters](https://github.com/yungsters))
- Proper attributed strings comparsion in RCTBaseTextInputView ([46fd864](https://github.com/facebook/react-native/commit/46fd864) by [@shergin](https://github.com/shergin))
- Test and document Image resizeMode=center on iOS ([be7037f](https://github.com/facebook/react-native/commit/be7037f) by [@motiz88](https://github.com/motiz88))
- use scrollview for lightbox on ios ([e485cde](https://github.com/facebook/react-native/commit/e485cde) by [@sahrens](https://github.com/sahrens))
- Delete RCTBatchedBridge ([816d417](https://github.com/facebook/react-native/commit/816d417) by [@mhorowitz](https://github.com/mhorowitz))
- iOS: Added scaffolding for FabricUIManager native module ([b1e5c01](https://github.com/facebook/react-native/commit/b1e5c01) by [@fkgozali](https://github.com/fkgozali))
- (almost) kill fbjsc ([702b7e8](https://github.com/facebook/react-native/commit/702b7e8) by [@michalgr](https://github.com/michalgr))
- Report module id as string and as double, in case of invalid values are passed to nativeRequire ([8f358a2](https://github.com/facebook/react-native/commit/8f358a2) by [@fromcelticpark](https://github.com/fromcelticpark))
- Support for inherited events in view managers ([2afe7d4](https://github.com/facebook/react-native/commit/2afe7d4) by [@shergin](https://github.com/shergin))
- Spacing ([2a22d99](https://github.com/facebook/react-native/commit/2a22d99) by
- punctuation and grammar ([7abffc3](https://github.com/facebook/react-native/commit/7abffc3) by [@IgorGanapolsky](https://github.com/IgorGanapolsky))
- Refactor ReactViewGroup to reuse ReactViewBackgroundManager ([e8aa604](https://github.com/facebook/react-native/commit/e8aa604) by [@mdvacca](https://github.com/mdvacca))
- re #17486 - set locationManager if auth skipped ([5c17db8](https://github.com/facebook/react-native/commit/5c17db8) by [@ngandhy](https://github.com/ngandhy))
- Typos in comments and log messages ([d2c5697](https://github.com/facebook/react-native/commit/d2c5697) by [@ss18](https://github.com/ss18))
- RN: Create SyntheticEvent and ScrollEvent Types ([83ed9d1](https://github.com/facebook/react-native/commit/83ed9d1) by [@yungsters](https://github.com/yungsters))
- Slight modernizing of Text.js to make it compatible with coming changes ([9532062](https://github.com/facebook/react-native/commit/9532062) by [@shergin](https://github.com/shergin))
- Generalization of `isInAParentText` context ([5264832](https://github.com/facebook/react-native/commit/5264832) by [@shergin](https://github.com/shergin))
- Exposing `setDirtiedFunc` as plain C function YGNodeSetDirtiedFunc ([6bb8617](https://github.com/facebook/react-native/commit/6bb8617) by [@shergin](https://github.com/shergin))
- Revert D6704701: Refactor ReactViewGroup to reuse ReactViewBackgroundManager ([1f5bb37](https://github.com/facebook/react-native/commit/1f5bb37) by [@mdvacca](https://github.com/mdvacca))
- Upgrade connect dependency ([709ede7](https://github.com/facebook/react-native/commit/709ede7) by [@rafeca](https://github.com/rafeca))
- Move native accesses of array into one access instead of per-element ([5649aed](https://github.com/facebook/react-native/commit/5649aed) by
- move native accesses of map into two accesses instead of per-element ([7891805](https://github.com/facebook/react-native/commit/7891805) by
- Use boost-for-react-native CocoaPod ([d40db3a](https://github.com/facebook/react-native/commit/d40db3a) by [@CFKevinRef](https://github.com/CFKevinRef))
- metro: allow dynamic dependencies from within node_modules ([b5e19ad](https://github.com/facebook/react-native/commit/b5e19ad) by [@jeanlauliac](https://github.com/jeanlauliac))
- make AnimatedValueXY constructor input value immutable ([52ffa5d](https://github.com/facebook/react-native/commit/52ffa5d) by [@zjj010104](https://github.com/zjj010104))
- Cleanup ReactHorizontalScrollView ([71ec85f](https://github.com/facebook/react-native/commit/71ec85f) by [@mdvacca](https://github.com/mdvacca))
- Capture StackOverflowExceptions triggered when drawing a ReactViewGroup or ReactRootView ([1aac962](https://github.com/facebook/react-native/commit/1aac962) by [@mdvacca](https://github.com/mdvacca))
- Allow to attach the HMR server to an external http server ([8c6b816](https://github.com/facebook/react-native/commit/8c6b816) by [@rafeca](https://github.com/rafeca))
- Adding JS hierarchy information when a StackOverflowException is thrown in Dev mode ([4d3519c](https://github.com/facebook/react-native/commit/4d3519c) by [@mdvacca](https://github.com/mdvacca))
- TouchableWithoutFeedback will use child's nativeID if specified ([3c2bb3e](https://github.com/facebook/react-native/commit/3c2bb3e) by [@TheSavior](https://github.com/TheSavior))
- Make xplat react native files buildable ([4f2cc42](https://github.com/facebook/react-native/commit/4f2cc42) by
- tighten EdgeInsetsPropType flow type ([6e7fb01](https://github.com/facebook/react-native/commit/6e7fb01) by [@sahrens](https://github.com/sahrens))
- Mark model fields final ([ff2658c](https://github.com/facebook/react-native/commit/ff2658c) by [@passy](https://github.com/passy))
- xplat/js: asyncRequire: redirect async modules to control modules ([5e11b88](https://github.com/facebook/react-native/commit/5e11b88) by [@jeanlauliac](https://github.com/jeanlauliac))
- Split folly/Memory out from headers-only targets ([b8e79a7](https://github.com/facebook/react-native/commit/b8e79a7) by [@mzlee](https://github.com/mzlee))
- Make the React Native HMR client extend from the generic metro HMR client ([9a19867](https://github.com/facebook/react-native/commit/9a19867) by [@rafeca](https://github.com/rafeca))
- Added ScrollView support for React VR platform ([6fa039d](https://github.com/facebook/react-native/commit/6fa039d) by [@MartinSherburn](https://github.com/MartinSherburn))
- Check for nullptr when accessing isInspectable method ([70d23e8](https://github.com/facebook/react-native/commit/70d23e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- Popups calling error callback instead of crashing if view with passed tagId not found ([0c18ec5](https://github.com/facebook/react-native/commit/0c18ec5) by [@dryganets](https://github.com/dryganets))
- Backed out changeset 409acf8d3356 ([cd263a2](https://github.com/facebook/react-native/commit/cd263a2) by [@TheSavior](https://github.com/TheSavior))
- `babel-preset-react-native`: only require plugins once ([df6c48c](https://github.com/facebook/react-native/commit/df6c48c) by [@davidaurelio](https://github.com/davidaurelio))
- Continue wrapping functions as we prepare for skylark ([869866c](https://github.com/facebook/react-native/commit/869866c) by [@mzlee](https://github.com/mzlee))
- Give IInspector a virtual destructor for correct InspectorImpl destruction ([2a3c37f](https://github.com/facebook/react-native/commit/2a3c37f) by [@toulouse](https://github.com/toulouse))
- Implement Blob support for XMLHttpRequest ([be56a3e](https://github.com/facebook/react-native/commit/be56a3e) by [@satya164](https://github.com/satya164))
- Prevents JS Debugger issues with CORS ([29f8354](https://github.com/facebook/react-native/commit/29f8354) by [@njbmartin](https://github.com/njbmartin))
- Make sure refreshControl shows up on initial render if specified ([ed5872e](https://github.com/facebook/react-native/commit/ed5872e) by [@vonovak](https://github.com/vonovak))
- Measure time to create ReactInstanceManager ([6224ef5](https://github.com/facebook/react-native/commit/6224ef5) by [@alexeylang](https://github.com/alexeylang))
- Migrate DeviceInfoModule from RN Module to Native Function. ([429fcc8](https://github.com/facebook/react-native/commit/429fcc8) by
- Support sticky headers for inverted Lists ([ecaca80](https://github.com/facebook/react-native/commit/ecaca80) by [@janicduplessis](https://github.com/janicduplessis))
- Nested virtualized lists should receive recordInteration events ([ae2d5b1](https://github.com/facebook/react-native/commit/ae2d5b1) by
- React sync for revisions 9491dee...a7b9f98 ([d676746](https://github.com/facebook/react-native/commit/d676746) by [@bvaughn](https://github.com/bvaughn))
- Typos in code ([8ffc16c](https://github.com/facebook/react-native/commit/8ffc16c) by [@ss18](https://github.com/ss18))
- Synced ReactFabric render ([c7ed03a](https://github.com/facebook/react-native/commit/c7ed03a) by [@bvaughn](https://github.com/bvaughn))
- Pass hasteImplModulePath to JestHasteMap and everywhere else ([619a8c9](https://github.com/facebook/react-native/commit/619a8c9) by [@voideanvalue](https://github.com/voideanvalue))
- Allow substituting a default font handler ([a9c684a](https://github.com/facebook/react-native/commit/a9c684a) by [@mmmulani](https://github.com/mmmulani))
- Synchronize map access ([e756251](https://github.com/facebook/react-native/commit/e756251) by [@davidaurelio](https://github.com/davidaurelio))
- Implementing space-evenly ([b1cdb7d](https://github.com/facebook/react-native/commit/b1cdb7d) by [@gedeagas](https://github.com/gedeagas))
- Measure touch events from nearest "root view" ([a70fdac](https://github.com/facebook/react-native/commit/a70fdac) by [@mmmulani](https://github.com/mmmulani))
- Use delete instead of free ([9f57ded](https://github.com/facebook/react-native/commit/9f57ded) by [@ryu2](https://github.com/ryu2))
- Implement bundle sync status ([88980f2](https://github.com/facebook/react-native/commit/88980f2) by
- React sync for revisions a7b9f98...4eed18d ([1382975](https://github.com/facebook/react-native/commit/1382975) by [@bvaughn](https://github.com/bvaughn))
- Keep the ignored files during the upgrade process ([7492860](https://github.com/facebook/react-native/commit/7492860) by [@ncuillery](https://github.com/ncuillery))
- Uses findMetroConfig and fetchMetroConfig in the internal RN cli ([752427b](https://github.com/facebook/react-native/commit/752427b) by [@arcanis](https://github.com/arcanis))
- Do not expose `BundleDownloader` from `DevServerHelper` ([108f966](https://github.com/facebook/react-native/commit/108f966) by [@davidaurelio](https://github.com/davidaurelio))
- Removing our own implementation of round-to-pixel algorithm ([ceb1d1c](https://github.com/facebook/react-native/commit/ceb1d1c) by [@shergin](https://github.com/shergin))
- Consolidate bundle URL creation ([644123a](https://github.com/facebook/react-native/commit/644123a) by [@davidaurelio](https://github.com/davidaurelio))
- Clean up `DevServerHelper` ([6e44356](https://github.com/facebook/react-native/commit/6e44356) by [@davidaurelio](https://github.com/davidaurelio))
- Extract delta client ([1019bda](https://github.com/facebook/react-native/commit/1019bda) by [@davidaurelio](https://github.com/davidaurelio))
- Added ReactFabric shim ([94dac23](https://github.com/facebook/react-native/commit/94dac23) by [@fkgozali](https://github.com/fkgozali))
- Convert intent_binary_defs to Skylark ([d3db764](https://github.com/facebook/react-native/commit/d3db764) by
- Inline format strings in `DevServerHelper` ([06d8f96](https://github.com/facebook/react-native/commit/06d8f96) by [@davidaurelio](https://github.com/davidaurelio))
- Native Modules -> Native Extensions ([0c49c1f](https://github.com/facebook/react-native/commit/0c49c1f) by
- textinput: Maintain cursor position when secureTextEntry toggles. ([09b43e4](https://github.com/facebook/react-native/commit/09b43e4) by [@jainkuniya](https://github.com/jainkuniya))
- FIGCardHeader updates ([d37cdd9](https://github.com/facebook/react-native/commit/d37cdd9) by [@sahrens](https://github.com/sahrens))
- Migrate SourceCode from Native Module to a Native Extension. ([47fe523](https://github.com/facebook/react-native/commit/47fe523) by
- Skylarkify RN defs. ([79a63d0](https://github.com/facebook/react-native/commit/79a63d0) by [@ttsugriy](https://github.com/ttsugriy))
- Enable platforms to configure CLI commands ([a40bfa7](https://github.com/facebook/react-native/commit/a40bfa7) by [@rozele](https://github.com/rozele))
- always create debugger websocket connection ([fa334ce](https://github.com/facebook/react-native/commit/fa334ce) by [@bnham](https://github.com/bnham))
- Ran rename-unsafe-lifecycles codemod on xplat/js ([6f007e8](https://github.com/facebook/react-native/commit/6f007e8) by [@bvaughn](https://github.com/bvaughn))
- Convert fb_xplat_cxx to Skylark ([a8c95d2](https://github.com/facebook/react-native/commit/a8c95d2) by
- call into native FabricUIManager from JS ([fa0ac92](https://github.com/facebook/react-native/commit/fa0ac92) by [@fkgozali](https://github.com/fkgozali))

### Added - TODO CONFIRM

- Add extensibility point on react-native-xcode.sh script ([0d4ff1b](https://github.com/facebook/react-native/commit/0d4ff1b) by [@brunolemos](https://github.com/brunolemos))
- Enabling round-to-pixel Yoga feature for RN (iOS) ([114c258](https://github.com/facebook/react-native/commit/114c258) by [@shergin](https://github.com/shergin))
- Add Context to Redbox report api ([e3c27f5](https://github.com/facebook/react-native/commit/e3c27f5) by [@ayc1](https://github.com/ayc1))
- Add back support for the assetPlugin option ([af6450c](https://github.com/facebook/react-native/commit/af6450c) by [@ide](https://github.com/ide))
- new feature to support smooth bi-directional content loading ([cae7179](https://github.com/facebook/react-native/commit/cae7179) by [@sahrens](https://github.com/sahrens))
- Add Bundle Splitting support for source code bundles ([9e34cbd](https://github.com/facebook/react-native/commit/9e34cbd) by [@fromcelticpark](https://github.com/fromcelticpark))
- Add support for finding multiple views with NativeIds using a single listener ([f5efc46](https://github.com/facebook/react-native/commit/f5efc46) by - @axe-fb
- rename and extend new maintain visible content position feature ([65184ec](https://github.com/facebook/react-native/commit/65184ec) by [@sahrens](https://github.com/sahrens))
- Add flow typing to QuickPerformanceLogger ([bcfbdf4](https://github.com/facebook/react-native/commit/bcfbdf4) by [@alexeylang](https://github.com/alexeylang))
- Add back kwargs ([f5975a9](https://github.com/facebook/react-native/commit/f5975a9) by [@hramos](https://github.com/hramos))
- RN: Add Missing Start/End Style Types ([3fc33bb](https://github.com/facebook/react-native/commit/3fc33bb) by [@yungsters](https://github.com/yungsters))
- Add accessibilityElementsHidden prop ([3128816](https://github.com/facebook/react-native/commit/3128816) by [@aputinski](https://github.com/aputinski))
- Add minify flag to react-native bundle command ([3f969cb](https://github.com/facebook/react-native/commit/3f969cb) by [@tomduncalf](https://github.com/tomduncalf))
- Add back ability to customise OkHttp client ([22efd95](https://github.com/facebook/react-native/commit/22efd95) by [@cdlewis](https://github.com/cdlewis))
- RN: Add NativeImageSource Flow Type ([d99ba70](https://github.com/facebook/react-native/commit/d99ba70) by [@yungsters](https://github.com/yungsters))
- Add CountingOutputStream ([a5e135a](https://github.com/facebook/react-native/commit/a5e135a) by [@hramos](https://github.com/hramos))

#### Android Specific Additions

- Bundle download progress is now shown like iOS ([675f142](https://github.com/facebook/react-native/commit/675f142) by [@janicduplessis](https://github.com/janicduplessis))

### Removed - TODO CONFIRM

- Removed outdated assertion in RCTShadowView related to breaking change in Yoga ([e3ff3cf](https://github.com/facebook/react-native/commit/e3ff3cf) by [@shergin](https://github.com/shergin))
- Unset phone and visible-password keyboardType flags on Android ([164f6b6](https://github.com/facebook/react-native/commit/164f6b6) by [@BrandonWilliamsCS](https://github.com/BrandonWilliamsCS))
- Removed unused core from Image.android.js ([ce3146a](https://github.com/facebook/react-native/commit/ce3146a) by [@shergin](https://github.com/shergin))
- Stop crashing when open MP on android: Revert D6688488 ([63ce56f](https://github.com/facebook/react-native/commit/63ce56f) by
- Remove redundant config in AndroidManifest.xml ([d7a9ca2](https://github.com/facebook/react-native/commit/d7a9ca2) by [@gengjiawen](https://github.com/gengjiawen))
- `processUpdatedProperties` & `collectUpdatedProperties` was removed from RCTShadowView ([0f9fc4b](https://github.com/facebook/react-native/commit/0f9fc4b) by [@shergin](https://github.com/shergin))
- `[RCTShadowView isHidden]` was removed ([c19bc79](https://github.com/facebook/react-native/commit/c19bc79) by [@shergin](https://github.com/shergin))
- Remove unused `packagerInstance` option and rename it to `server` ([bbbc18c](https://github.com/facebook/react-native/commit/bbbc18c) by
- Remove blog/ ([e16d673](https://github.com/facebook/react-native/commit/e16d673) by [@hramos](https://github.com/hramos))
- Remove SoLoaderShim, use SoLoader ([fc6dd78](https://github.com/facebook/react-native/commit/fc6dd78) by [@foghina](https://github.com/foghina))
- Removed broken link for 'Getting Help' in the README ([b3a306a](https://github.com/facebook/react-native/commit/b3a306a) by [@rickydam](https://github.com/rickydam))
- Remove internal `utf8` utility ([431670f](https://github.com/facebook/react-native/commit/431670f) by [@mathiasbynens](https://github.com/mathiasbynens))
- Removed use of xip.io, as it's not needed. ([40a8434](https://github.com/facebook/react-native/commit/40a8434) by [@jvranish](https://github.com/jvranish))
- Remove release from ReadableNativeArray and Map ([28be33a](https://github.com/facebook/react-native/commit/28be33a) by
- Removed `[ShadowView collectUpdatedFrames:]` ([9dfa2e7](https://github.com/facebook/react-native/commit/9dfa2e7) by [@shergin](https://github.com/shergin))
- Remove unused method ([f88c9d6](https://github.com/facebook/react-native/commit/f88c9d6) by [@davidaurelio](https://github.com/davidaurelio))
- Remove fbobjc's RN copy ([af0c863](https://github.com/facebook/react-native/commit/af0c863) by

### Changed - TODO CONFIRM

#### iOS Specific Changes

- **Text** and **TextInput** have been re-implemented from the ground up for performance, flexibility, and reduced technical debt ([2716f53](https://github.com/facebook/react-native/commit/2716f53), [ef4214a](https://github.com/facebook/react-native/commit/ef4214a), [0009909](https://github.com/facebook/react-native/commit/0009909), [74963eb](https://github.com/facebook/react-native/commit/74963eb), [6c4ef28](https://github.com/facebook/react-native/commit/6c4ef28), [ebc9884](https://github.com/facebook/react-native/commit/ebc9884), [d7fa81f](https://github.com/facebook/react-native/commit/d7fa81f), [7d1ec7a](https://github.com/facebook/react-native/commit/7d1ec7a), and [5dbb3c5](https://github.com/facebook/react-native/commit/5dbb3c5) by [@shergin](https://github.com/shergin))

### Fixed - TODO CONFIRM

- fixed blobmanager inserting nil when there's no mime type ([854c233](https://github.com/facebook/react-native/commit/854c233) by [@fkgozali](https://github.com/fkgozali))
- Fix #6228: Crash in Android dialog module. ([d5e3f08](https://github.com/facebook/react-native/commit/d5e3f08) by [@dryganets](https://github.com/dryganets))
- Fix NPE in Android Switch during measure ([7b1915e](https://github.com/facebook/react-native/commit/7b1915e) by [@4ndroidev](https://github.com/4ndroidev))
- Fix initialScrollIndex for Android ([ef596de](https://github.com/facebook/react-native/commit/ef596de) by [@olegbl](https://github.com/olegbl))
- iOS: Fix Crash when CameraRoll is getting assets from iCloud and no filename is provided. #13671 ([2ae2436](https://github.com/facebook/react-native/commit/2ae2436) by [@pentarex](https://github.com/pentarex))
- Fix Xcode Archive task failing if project path contains whitespace ([8aa568e](https://github.com/facebook/react-native/commit/8aa568e) by [@jevakallio](https://github.com/jevakallio))
- Link both iOS and tvOS libraries with react-native link (fix #13783) ([a63fd37](https://github.com/facebook/react-native/commit/a63fd37) by - @dlowder-salesforce
- Fix redbox style ([f363dfe](https://github.com/facebook/react-native/commit/f363dfe) by [@ayc1](https://github.com/ayc1))
- Fix re-render case on SwipeableRow ([a580a44](https://github.com/facebook/react-native/commit/a580a44) by
- Fix obsolete instructions about editing docs ([2f46712](https://github.com/facebook/react-native/commit/2f46712) by [@ExplodingCabbage](https://github.com/ExplodingCabbage))
- Fix crash due to mishandling of UTF-8 in progressive download. ([9024f56](https://github.com/facebook/react-native/commit/9024f56) by [@dryganets](https://github.com/dryganets))
- Fix links to beginner friendly issues ([c355a34](https://github.com/facebook/react-native/commit/c355a34) by [@hotchemi](https://github.com/hotchemi))
- Fix HMR syntax error messages (`message` instead of `description`) ([2b80cdf](https://github.com/facebook/react-native/commit/2b80cdf) by [@ide](https://github.com/ide))
- Fix and re-enable "view flattening" optimizations for Marketplace ([877f1cd](https://github.com/facebook/react-native/commit/877f1cd) by [@mdvacca](https://github.com/mdvacca))
- Fix dependencies ([cec2e80](https://github.com/facebook/react-native/commit/cec2e80) by [@swolchok](https://github.com/swolchok))
- ClassCastException fix: getText() returns CharSequence not Spanned. ([46cc490](https://github.com/facebook/react-native/commit/46cc490) by [@dryganets](https://github.com/dryganets))
- Fix open source build load error ([4f6c157](https://github.com/facebook/react-native/commit/4f6c157) by
- Fix permissions on test script ([42c410a](https://github.com/facebook/react-native/commit/42c410a) by [@mzlee](https://github.com/mzlee))
- GLog fix on case sensitive APFS macOS ([2fef1ba](https://github.com/facebook/react-native/commit/2fef1ba) by [@hovox](https://github.com/hovox))
- Better handling exception in loadScript() ([3fbf785](https://github.com/facebook/react-native/commit/3fbf785) by
- Declare HMRClient module to fix Flow issues in OSS ([a1c479f](https://github.com/facebook/react-native/commit/a1c479f) by [@hramos](https://github.com/hramos))
- Fix adjustsFontSizeToFit to only shrink, not grow, text ([8a882fe](https://github.com/facebook/react-native/commit/8a882fe) by [@sahrens](https://github.com/sahrens))
- Fix ESLint upgrade "parsing error" ([9d21496](https://github.com/facebook/react-native/commit/9d21496) by [@zertosh](https://github.com/zertosh))
- Fix #17610, Add fixtures to metro blacklist ([4194bb2](https://github.com/facebook/react-native/commit/4194bb2) by [@t4deu](https://github.com/t4deu))
- CI for Android fixed ([c8e98bb](https://github.com/facebook/react-native/commit/c8e98bb) by [@dryganets](https://github.com/dryganets))
- CI for iOS fixed ([605a6e4](https://github.com/facebook/react-native/commit/605a6e4) by [@dryganets](https://github.com/dryganets))
- fixed issue with runIOS not being able to launch tvOS app ([afd988f](https://github.com/facebook/react-native/commit/afd988f) by
- Fixing clowntown in RCTSurfaceRootShadowView ([5fba82d](https://github.com/facebook/react-native/commit/5fba82d) by [@shergin](https://github.com/shergin))
- Fixed typo in RCTSurfaceRootShadowView ([d74ff6f](https://github.com/facebook/react-native/commit/d74ff6f) by [@shergin](https://github.com/shergin))

#### Android specific fixes

- Don't crash when using decimal `Animated.modulo` values with `useNativeDriver: true` ([6c38972](https://github.com/facebook/react-native/commit/6c38972) by [@motiz88](https://github.com/motiz88))
- Don't crash when receiving unknown websocket IDs ([1a790f8](https://github.com/facebook/react-native/commit/1a790f8) by [@sunweiyang](https://github.com/sunweiyang))

### Under-the-hood Changes

- A **massive** amount of Yoga optimizations, cleanups, refactors, and test fixes ([62d0100](https://github.com/facebook/react-native/commit/62d0100), [1475fc4](https://github.com/facebook/react-native/commit/1475fc4), [9daa174](https://github.com/facebook/react-native/commit/9daa174), [d4517dd](https://github.com/facebook/react-native/commit/d4517dd), [ca91f0e](https://github.com/facebook/react-native/commit/ca91f0e), [34b7ec8](https://github.com/facebook/react-native/commit/34b7ec8), [fda861a](https://github.com/facebook/react-native/commit/fda861a), [9f7cedb](https://github.com/facebook/react-native/commit/9f7cedb), [ac1c8c2](https://github.com/facebook/react-native/commit/ac1c8c2), [fcf2c7c](https://github.com/facebook/react-native/commit/fcf2c7c), [2b27f1a](https://github.com/facebook/react-native/commit/2b27f1a), [210ae5b](https://github.com/facebook/react-native/commit/210ae5b), [8208858](https://github.com/facebook/react-native/commit/8208858), [7f94bff](https://github.com/facebook/react-native/commit/7f94bff), [bd7bf94](https://github.com/facebook/react-native/commit/bd7bf94), [2fe65b0](https://github.com/facebook/react-native/commit/2fe65b0), [9658d9f](https://github.com/facebook/react-native/commit/9658d9f), [ee5c91c](https://github.com/facebook/react-native/commit/ee5c91c), [64d530b](https://github.com/facebook/react-native/commit/64d530b), [400a29e](https://github.com/facebook/react-native/commit/400a29e), [f75e21f](https://github.com/facebook/react-native/commit/f75e21f), [528bbac](https://github.com/facebook/react-native/commit/528bbac), [be8e7c6](https://github.com/facebook/react-native/commit/be8e7c6), [d0f7d4d](https://github.com/facebook/react-native/commit/d0f7d4d), [4b4959a](https://github.com/facebook/react-native/commit/4b4959a), [fdef378](https://github.com/facebook/react-native/commit/fdef378), and [831a1bb](https://github.com/facebook/react-native/commit/831a1bb) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Some autogenerated mystery string files were added ([c7846c4](https://github.com/facebook/react-native/commit/c7846c4), [bb6fcea](https://github.com/facebook/react-native/commit/bb6fcea), [8bd00a2](https://github.com/facebook/react-native/commit/8bd00a2), [faa9519](https://github.com/facebook/react-native/commit/faa9519), [f49f793](https://github.com/facebook/react-native/commit/f49f793))
- Uses a single code path to link and unlink all platforms for local-cli ([2c5fbd7](https://github.com/facebook/react-native/commit/2c5fbd7) by [@rozele](https://github.com/rozele))
- Introduce new Fabric API in RNAndroid ([2d35bde](https://github.com/facebook/react-native/commit/2d35bde) by [@mdvacca](https://github.com/mdvacca))
- Fixing Prepack model for latest global.nativeExtensions changes. ([01a58d1](https://github.com/facebook/react-native/commit/01a58d1) by [@NTillmann](https://github.com/NTillmann))
- General code cleanup: unused code and configurations ([e233646](https://github.com/facebook/react-native/commit/e233646) and [e701034](https://github.com/facebook/react-native/commit/e701034) by [@bvaughn](https://github.com/bvaughn) and others)
- Changes from Prettier ([b815eb5](https://github.com/facebook/react-native/commit/b815eb5), [e758cb7](https://github.com/facebook/react-native/commit/e758cb7), [bf9cabb](https://github.com/facebook/react-native/commit/bf9cabb), and [a5af841](https://github.com/facebook/react-native/commit/a5af841) by [@shergin](https://github.com/shergin))
- More progress towards split bundle support ([1a1a956](https://github.com/facebook/react-native/commit/1a1a956) by [@fromcelticpark](https://github.com/fromcelticpark))
- Various improvements to RCTSurface and RCTShadowView ([7d9e902](https://github.com/facebook/react-native/commit/7d9e902), [06ebaf2](https://github.com/facebook/react-native/commit/06ebaf2), [6882132](https://github.com/facebook/react-native/commit/6882132), and [193a2bd](https://github.com/facebook/react-native/commit/193a2bd) by [@shergin](https://github.com/shergin))
- Upgrade create-react-class to v15.6.3 ([74f3866](https://github.com/facebook/react-native/commit/74f3866) by [@bvaughn](https://github.com/bvaughn))
- Upgrade react-devtools to v3.1.0 ([8235a49](https://github.com/facebook/react-native/commit/8235a49) by [@bvaughn](https://github.com/bvaughn))
- Upgrade flow to v0.65.0 ([7aba456](https://github.com/facebook/react-native/commit/7aba456) and [298f3bb](https://github.com/facebook/react-native/commit/298f3bb) by [@avikchaudhuri](https://github.com/avikchaudhuri) and [@mroch](https://github.com/mroch))
- Upgrade Jest to v22.2.1 ([46f4d3e](https://github.com/facebook/react-native/commit/46f4d3e) and [24e521c](https://github.com/facebook/react-native/commit/24e521c) by [@mjesun](https://github.com/mjesun))
- Upgrade ESLint to v4.17.0 (plus update related deps) ([bba19e8](https://github.com/facebook/react-native/commit/bba19e8) by [@zertosh](https://github.com/zertosh))
- Upgrade React to v16.3.0-alpha.1 ([03d7b2a](https://github.com/facebook/react-native/commit/03d7b2a) and [5e80d95](https://github.com/facebook/react-native/commit/5e80d95) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))
- Upgrade metro to v0.26.0 ([9e6f3b8](https://github.com/facebook/react-native/commit/9e6f3b8), [ce50f25](https://github.com/facebook/react-native/commit/ce50f25), [e9b83e6](https://github.com/facebook/react-native/commit/e9b83e6), [2fe7483](https://github.com/facebook/react-native/commit/2fe7483), [0f96ebd](https://github.com/facebook/react-native/commit/0f96ebd), [0de470e](https://github.com/facebook/react-native/commit/0de470e), [e8893a0](https://github.com/facebook/react-native/commit/e8893a0), and [f4fde9d](https://github.com/facebook/react-native/commit/f4fde9d) by [@rafeca](https://github.com/rafeca) and [@grabbou](https://github.com/grabbou))
- GitHub bot commands have been disabled in the short term ([b973fe4](https://github.com/facebook/react-native/commit/b973fe4) by [@hramos](https://github.com/hramos))
- Various CI configuration changes ([17bd6c8](https://github.com/facebook/react-native/commit/17bd6c8), [51b6749](https://github.com/facebook/react-native/commit/51b6749), [a2f3ba8](https://github.com/facebook/react-native/commit/a2f3ba8), [2ef9b7f](https://github.com/facebook/react-native/commit/2ef9b7f), [40b1792](https://github.com/facebook/react-native/commit/40b1792), [613afba](https://github.com/facebook/react-native/commit/613afba), [da8bec9](https://github.com/facebook/react-native/commit/da8bec9), [fa11fae](https://github.com/facebook/react-native/commit/fa11fae), [f50af7f](https://github.com/facebook/react-native/commit/f50af7f), [9227ba7](https://github.com/facebook/react-native/commit/9227ba7), and [b58d848](https://github.com/facebook/react-native/commit/b58d848) by [@hramos](https://github.com/hramos) and [@grabbou](https://github.com/grabbou))
- Restore copyright header ([4f883bd](https://github.com/facebook/react-native/commit/4f883bd) by [@hramos](https://github.com/hramos))
- Trim docs that are already present in the open source docs site ([28d60b6](https://github.com/facebook/react-native/commit/28d60b6) by [@hramos](https://github.com/hramos))
- Run more checks in parallel ([365a4d4](https://github.com/facebook/react-native/commit/365a4d4) by [@hramos](https://github.com/hramos))
- Ignore dangerfile ([1ea3065](https://github.com/facebook/react-native/commit/1ea3065) by [@hramos](https://github.com/hramos))
- Namespace custom ESLint rules through eslint-plugin-lint ([488b682](https://github.com/facebook/react-native/commit/488b682) by [@zertosh](https://github.com/zertosh))

- ... and now we're at 0.54 🎉 ([67e67ec](https://github.com/facebook/react-native/commit/67e67ec), [21dd3dd](https://github.com/facebook/react-native/commit/21dd3dd), [49e35bd](https://github.com/facebook/react-native/commit/49e35bd), [829f675](https://github.com/facebook/react-native/commit/829f675), and [294d95a](https://github.com/facebook/react-native/commit/294d95a) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))

## [0.53]

Welcome to the January 2018 release of React Native. The CLI now supports `--port` for both platforms, a few components were made to support consistent props across both platforms, and various fixes were made. There was a lot of under-the-cover work done with more test improvements and dependency updates. 118 commits were made by 43 contributors 🎉.

### Added

- ✨ **Keyboard** events now include `easing` and `duration` ([4d33080](https://github.com/facebook/react-native/commit/4d33080) by [@sahrens](https://github.com/sahrens))

#### iOS exclusive additions

- `react-native run-ios` now supports the `--port` argument for metro ([33d710e](https://github.com/facebook/react-native/commit/33d710e))

#### Android exclusive additions

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

#### iOS exclusive changes

- 🔥⚡️ iOS UI Manager cleanup and optimizations ([7d1deda](https://github.com/facebook/react-native/commit/7d1deda), [0ae4c47](https://github.com/facebook/react-native/commit/0ae4c47), [2679f3e](https://github.com/facebook/react-native/commit/2679f3e),and [d9e5b31](https://github.com/facebook/react-native/commit/d9e5b31) by [@shergin](https://github.com/shergin))
- If the inspector tries to handle a wrapped event but there is no connection, log a warning rather than a Redbox ([30da262](https://github.com/facebook/react-native/commit/30da262) by [@bnham](https://github.com/bnham))
- Various under-the-covers changes around the bridge, RCTShadowView, RCTSurface, and a few others ([c3139d7](https://github.com/facebook/react-native/commit/c3139d7), [2789ba0](https://github.com/facebook/react-native/commit/2789ba0), [b8e60a3](https://github.com/facebook/react-native/commit/b8e60a3), [099b280](https://github.com/facebook/react-native/commit/099b280), [b263560](https://github.com/facebook/react-native/commit/b263560), [19a9c5e](https://github.com/facebook/react-native/commit/19a9c5e), [d3b41e0](https://github.com/facebook/react-native/commit/d3b41e0), [b2a2519](https://github.com/facebook/react-native/commit/b2a2519), [870bc48](https://github.com/facebook/react-native/commit/870bc48), [176a578](https://github.com/facebook/react-native/commit/176a578), [c491b22](https://github.com/facebook/react-native/commit/c491b22), [c756122](https://github.com/facebook/react-native/commit/c756122), and[c01a171](https://github.com/facebook/react-native/commit/c01a171) by [@shergin](https://github.com/shergin))
- Changed to use *boost-for-react-native* cocoapod, which speeds up `pod install` a ton ([cf19833](https://github.com/facebook/react-native/commit/cf19833) by [@CFKevinRef](https://github.com/CFKevinRef))

#### Android exclusive changes

- Include scroll momentum info when there are scroll events from Android ([c49d249](https://github.com/facebook/react-native/commit/c49d249) by [@wwalser](https://github.com/wwalser))
- Yoga's mkfile for Android now uses wildcard instead of manual file addition ([d89901f](https://github.com/facebook/react-native/commit/d89901f) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))

### Removed

- **TextInput** no longer has the `autoGrow` prop, since this is platform-default behavior now ([dabb78b](https://github.com/facebook/react-native/commit/dabb78b) by [@shergin](https://github.com/shergin))

#### iOS exclusive removals

- Updates to the bridge in order to enable future rendering optimizations ([d2dc451](https://github.com/facebook/react-native/commit/d2dc451) by [@shergin](https://github.com/shergin))

### Fixed

- Do not set `minify=true` when calculating the list of dependencies for the CLI ([4a1bb8f](https://github.com/facebook/react-native/commit/4a1bb8f) by [@rafeca](https://github.com/rafeca))
- 👷 Update CODEOWNERS now that the docs are in a separate repository ([85ff264](https://github.com/facebook/react-native/commit/85ff264) by [@hramos](https://github.com/hramos))
- Fixed a broken link in react-native-git-upgrade's readme ([bbedf2d](https://github.com/facebook/react-native/commit/bbedf2d) by [@Taym95](https://github.com/Taym95))
- 🤡 Do not use Node 8.x specific Stream.final for FS mocks ([4216cde](https://github.com/facebook/react-native/commit/4216cde) by [@hramos](https://github.com/hramos))
- Fix virtualized cell keys for list headers and footers ([a010a0c](https://github.com/facebook/react-native/commit/a010a0c))
- Fix warnings of casting and null pointer handling in Yoga ([a8d4666](https://github.com/facebook/react-native/commit/a8d4666) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix broken buck failures on master ([4e76701](https://github.com/facebook/react-native/commit/4e76701) by [@hramos](https://github.com/hramos))
- **RefreshControl** appears correctly when expected on initial render of a **FlatList** again ([9b877d6](https://github.com/facebook/react-native/commit/9b877d6) by [@vonovak](https://github.com/vonovak))
- Fixed JS debugger CORS issue ([df8da3b](https://github.com/facebook/react-native/commit/df8da3b) by [@njbmartin](https://github.com/njbmartin))

#### Android exclusive fixes

- Fix position of dev loading view on Android API < 20 ([7ff6657](https://github.com/facebook/react-native/commit/7ff6657) by [@kmagiera](https://github.com/kmagiera))
- Fix Modal not disappearing when navigating from inside a Modal to another activity ([e5c2a66](https://github.com/facebook/react-native/commit/e5c2a66)

#### iOS exclusive fixes

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
