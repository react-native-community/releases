# Changelog

## v0.67.0

### Breaking

#### Android specific

#### iOS specific

### Added

- Added examples to Switch component ([c9c14ef687](https://github.com/facebook/react-native/commit/c9c14ef6872eb90b7305e0bc19cded76ce851186) by [@suminkimm](https://github.com/suminkimm))
- Added `cancelButtonTintColor` prop for `ActionSheetIOS` to change only the text color of the cancel button ([01856633a1](https://github.com/facebook/react-native/commit/01856633a1d42ed3b26e7cc93a007d7948e1f76e) by [@nomi9995](https://github.com/nomi9995))
- Added [LSApplicationQueriesSchemes](https://developer.apple.com/library/archive/documentation/General/Reference/InfoPlistKeyReference/Articles/LaunchServicesKeys.html#//apple_ref/doc/uid/TP40009250-SW14) in info.plist with entries tel, telprompt, http, fb, geo ([b26f277262](https://github.com/facebook/react-native/commit/b26f2772624c863c91fa1ff627b481c92d7562fb) by [@utkarsh-dixit](https://github.com/utkarsh-dixit))
- Adding Accessibility Display Options Enabled to RNTester ([2abacace54](https://github.com/facebook/react-native/commit/2abacace54dc72bac1a5d7f2fb795edd89374b1c) by [@graytmatterMS](https://github.com/graytmatterMS))

#### Android specific

- Added an experimental touch dispatch path ([a2feaeb5f1](https://github.com/facebook/react-native/commit/a2feaeb5f1121a860a9416b5d4e0e96debd45b09) by [@ShikaSD](https://github.com/ShikaSD))
- Add ACCESS_MEDIA_LOCATION permission to PermisionsAndroid library. ([79db483568](https://github.com/facebook/react-native/commit/79db4835681f5d0149620ec8e0990411cb882241) by [@Skrilltrax](https://github.com/Skrilltrax))
- Implement SnapToAlignment in ReactScrollView ([e774c037bc](https://github.com/facebook/react-native/commit/e774c037bce40a4b48e78d2d0a1085a1e4f5a328) by [@mdvacca](https://github.com/mdvacca))
- Implement snapToAlignment into ReactScrollViewManager ([c6e5640e87](https://github.com/facebook/react-native/commit/c6e5640e87e7cb5b514ded2c8d4cbb039bd02c5f) by [@mdvacca](https://github.com/mdvacca))
- Implement SnapToAlignment in ReactHorizontalScrollView ([b12256394e](https://github.com/facebook/react-native/commit/b12256394e34c375942ca508ef79a8c816317976) by [@mdvacca](https://github.com/mdvacca))
- Implement snapToAlignment into ReactHorizontalScrollViewManager ([deec1db9fd](https://github.com/facebook/react-native/commit/deec1db9fdf2848941326ba5bebc11f3592a301e) by [@mdvacca](https://github.com/mdvacca))
- Implement snapToAlignment in ReactHorizontalScrollView ([a54cfb9e57](https://github.com/facebook/react-native/commit/a54cfb9e5794f196d3834e19762f3aacf47a177d) by [@mdvacca](https://github.com/mdvacca))
- Add SurfaceDelegate abstraction to support interaction in multiple platforms and provide default implementation in LogBoxModule ([652cb541a5](https://github.com/facebook/react-native/commit/652cb541a50f9f8e5e9aeafb95898f7381e16614) by [@ryancat](https://github.com/ryancat))
- Summary: Changelog: [Android][added] - Adds option use fallback bundle instead of cached bundle when the packager isn't running in ReactInstanceManager ([dd10134bdc](https://github.com/facebook/react-native/commit/dd10134bdcf9f046bde3136a694e3482e5876c34) by [@amy588](https://github.com/amy588))
- Show Redbox for C++ errors. ([d6c879edba](https://github.com/facebook/react-native/commit/d6c879edbad068d0f461381875b7fae6db99d18d) by [@sota000](https://github.com/sota000))

#### iOS specific

- Add asdf-vm support in find-node.sh ([3e7c310b1d](https://github.com/facebook/react-native/commit/3e7c310b1dcf5643920535eea70afa451888792a) by [@pastleo](https://github.com/pastleo))
- ScrollView: Respect `contentInset` when animating new items with `autoscrollToTopThreshold`, make `automaticallyAdjustKeyboardInsets` work with `autoscrollToTopThreshold` (includes vertical, vertical-inverted, horizontal and horizontal-inverted ScrollViews) ([6e903b07fa](https://github.com/facebook/react-native/commit/6e903b07fa8e8d9b78cae0e031bb8022f7a63195) by [@mrousavy](https://github.com/mrousavy))
- Introduce MockSurfaceHandler ([ec92c85a15](https://github.com/facebook/react-native/commit/ec92c85a15468fd00dc0a23b8f69f5f1624f7b45) by [@philIip](https://github.com/philIip))

### Changed

- React Native sync for revisions e8feb11...afcb9cd ([c75ad2cdb1](https://github.com/facebook/react-native/commit/c75ad2cdb1b553af47dafb5840137d845b38be0b) by [@ShikaSD](https://github.com/ShikaSD))
- Remove shared responsibility between LogBox and ExceptionsManager native module ([c901c43d11](https://github.com/facebook/react-native/commit/c901c43d11a243e7e4a9389f7e8f1440581ef7d9))
- Update Modal's mock to not render its children when it is not visible ([ec614c16b3](https://github.com/facebook/react-native/commit/ec614c16b331bf3f793fda5780fa273d181a8492) by [@AntoineDoubovetzky](https://github.com/AntoineDoubovetzky))
- Upgraded react-devtools-core dependency to 4.19.1 ([356236471a](https://github.com/facebook/react-native/commit/356236471abc6b5b8c139223e15388fd1eecd2d1) by [@jstejada](https://github.com/jstejada))
- Changed the showcase URL ([1927ceb552](https://github.com/facebook/react-native/commit/1927ceb5520e36c5ca92e349ee1b860093290c15) by [@HeroBanana](https://github.com/HeroBanana))
- ImageBackground now respects `imageStyle` width and height ([dbd5c3d8e5](https://github.com/facebook/react-native/commit/dbd5c3d8e5e35685be89156194a96cead553a330) by [@Naturalclar](https://github.com/Naturalclar))
- React Native sync for revisions 95d762e...e8feb11 ([88021894f2](https://github.com/facebook/react-native/commit/88021894f2645266d7e1b0a2e61a737b1590d039) by [@kacieb](https://github.com/kacieb))
- React Native sync for revisions bd5bf55...95d762e ([7f7f8188f2](https://github.com/facebook/react-native/commit/7f7f8188f2ed3cb40b85e7f1ad65fdf31b678ffc) by [@rickhanlonii](https://github.com/rickhanlonii))
- Remove defaultProps from the DrawerLayoutAndroid Component ([b998e32501](https://github.com/facebook/react-native/commit/b998e32501ab13525a1a7c711d5ad090e3d23d9f) by [@mdaj06](https://github.com/mdaj06))
- React-native/normalize-color now supports Node.js ([65e58f26e1](https://github.com/facebook/react-native/commit/65e58f26e1fbd06b1ae32e2ab3a2616c8eef08e0) by [@yungsters](https://github.com/yungsters))
- Updated to Contributor Covenant v2.1 ([19f8d2f7da](https://github.com/facebook/react-native/commit/19f8d2f7da13f4524f31acf7aa10cc0aa91b5da4))

#### Android specific

- Bump Gradle version to 7.2 ([9ae3367431](https://github.com/facebook/react-native/commit/9ae3367431428748f5486c782199beb4f9c6b477) by [@svbutko](https://github.com/svbutko))
- Move mavenCentral repo below local paths ([046b02628d](https://github.com/facebook/react-native/commit/046b02628d32eadd6d44160ab79932f6c26b188d) by [@friederbluemle](https://github.com/friederbluemle))
- Setting `overflow: scroll` in View component style will clip the children in the View container ([93beb83abe](https://github.com/facebook/react-native/commit/93beb83abef42b92db43ee3bb8b156f486a6c00f) by [@ryancat](https://github.com/ryancat))
- Removed experimental deprecation from `dispatchModern` ([8491edec28](https://github.com/facebook/react-native/commit/8491edec2883ceb9b335fca90ee380c0ace32703) by [@ShikaSD](https://github.com/ShikaSD))
- Native views backing Animated.View (w/ JavaScript-driven animations) will no longer be flattened; this should be a transparent change. ([4fdbc44ab5](https://github.com/facebook/react-native/commit/4fdbc44ab5945399338e4ed94ea5611098bd2142) by [@yungsters](https://github.com/yungsters))
- Implement ScrollView.snapToAlignments in RN Android ([04184ef851](https://github.com/facebook/react-native/commit/04184ef851c71141009c523ba59838ae6af19ba5) by [@mdvacca](https://github.com/mdvacca))
- Changed `react.gradle` `detectCliPath` function logic for `cliPath` case ([ce51b62494](https://github.com/facebook/react-native/commit/ce51b6249449361ee50b8c99a427c28af7ab3531) by [@vitalyiegorov](https://github.com/vitalyiegorov))
- Gradle: Merge CodegenPluginExtension inside ReactAppExtension ([022f188750](https://github.com/facebook/react-native/commit/022f1887509fb2206441a0735cae91a6e2ddba04) by [@cortinico](https://github.com/cortinico))
- Use new Locale API on Android 11 (API 30)+ ([b7c023a8c1](https://github.com/facebook/react-native/commit/b7c023a8c1122500c6ceb7de2547569b3b9251ba))
- Hermes initialization will no longer need an explicit configuration. ([a40f973f58](https://github.com/facebook/react-native/commit/a40f973f58609ca717fac63bc501d5cf93b748ad) by [@Ashoat](https://github.com/Ashoat))
- Bumped Gradle to 7.1.1 ([b1120c6a65](https://github.com/facebook/react-native/commit/b1120c6a6513ec24568abc6bbe60dd57ef1dec96) by [@cortinico](https://github.com/cortinico))
- Bumped Kotlin to 1.4.32 ([6a2b6c2f3e](https://github.com/facebook/react-native/commit/6a2b6c2f3ef63cf0ff733daf75005ee32eebdd00) by [@cortinico](https://github.com/cortinico))
- Bumped Gradle project version to 7.0.2 ([85249cafe8](https://github.com/facebook/react-native/commit/85249cafe8870ab8f47c38569b106555ce2f8527) by [@cortinico](https://github.com/cortinico))
- Remove `"high"` and `"balanced"` as values for `android_hyphenationFrequency` on `Text` ([a0d30b848a](https://github.com/facebook/react-native/commit/a0d30b848a07480d0fccec608a62a505c71f8cac))

#### iOS specific

- Fixed inaccurate comment ([c744528da1](https://github.com/facebook/react-native/commit/c744528da1d6094f73b087d0ef90e33a9fa105ed) by [@philIip](https://github.com/philIip))
- Remove iOS 11 version check ([398595e074](https://github.com/facebook/react-native/commit/398595e07483fa8f45579de4ca1aee9585e20620) by [@ken0nek](https://github.com/ken0nek))
- Optimized font handling ([4ac42d88ef](https://github.com/facebook/react-native/commit/4ac42d88ef60ae3fed7319851d47b93e98ac9afa) by [@Adlai-Holler](https://github.com/Adlai-Holler))

### Deprecated

#### Android specific

#### iOS specific

### Removed

- Removed unnecessary global variable `GLOBAL`. ([a101fc768c](https://github.com/facebook/react-native/commit/a101fc768cedc7ac9754006e5b7292bb7084ab54) by [@rubennorte](https://github.com/rubennorte))
- Chore: removed unused files ([64aa1e5ffe](https://github.com/facebook/react-native/commit/64aa1e5ffe5d577c04cabb3692246b956f65597b) by [@ecreeth](https://github.com/ecreeth))

#### Android specific

- Remove DatePickerAndroid from react-native-github ([7a770526c6](https://github.com/facebook/react-native/commit/7a770526c626e6659a12939f8c61057a688aa623) by [@andresantonioriveros](https://github.com/andresantonioriveros))

#### iOS specific

### Fixed

- Updated documentation link in `View`. ([4790146374](https://github.com/facebook/react-native/commit/47901463746391ab28085d2c9d9734b9710dee58) by [@mdvacca](https://github.com/mdvacca))
- Update metro config language to `blockList` ([7923804c28](https://github.com/facebook/react-native/commit/7923804c28aac731396f0db112cb6c3a9d30c08f) by [@rh389](https://github.com/rh389))
- Ignores global npm prefix ([6334ac35ac](https://github.com/facebook/react-native/commit/6334ac35ac3cbc2c84b2d46d46ec118bf9bf714d) by [@redreceipt](https://github.com/redreceipt))
- Summary: Changelog: [General][fixed] Support Animated.ValueXY when validating Animated.event ([27dd2ecb70](https://github.com/facebook/react-native/commit/27dd2ecb70f1d08787c93a2e18250ffaff328e5f) by [@javache](https://github.com/javache))
- Add a function `getIgnorePatterns` in `LogBoxData.js` for tests or other usecases. ([a950634424](https://github.com/facebook/react-native/commit/a950634424cddf31c0adb6c9799adf1cc5f83bf0))
- Copy repo-config dependencies for bumping release version ([963254e2ec](https://github.com/facebook/react-native/commit/963254e2ec31fd5897d46e51862feba5d65a7e5b) by [@lunaleaps](https://github.com/lunaleaps))

#### Android specific

- Fix error handling when loading JSC or Hermes ([d839b24b06](https://github.com/facebook/react-native/commit/d839b24b06d31b4ce91fb459742831b942972f56) by [@iqqmuT](https://github.com/iqqmuT))
- Fix encoding for gradlew.bat files ([ab2bdee735](https://github.com/facebook/react-native/commit/ab2bdee735cd0d53d3dbfbac5cd31f96eefb7e61) by [@yungsters](https://github.com/yungsters))
- Fix hermesFlags not working with multiple variants ([91adb761cf](https://github.com/facebook/react-native/commit/91adb761cf1583598d4d63ce879fd7e0f4ae793c) by [@grit96](https://github.com/grit96))
- Clarified in-code documentation in the template's `android/app/build.gradle`. ([1ad45f5160](https://github.com/facebook/react-native/commit/1ad45f516048b86eb03d6c2352b4b85c21ee3860) by [@kraenhansen](https://github.com/kraenhansen))
- ScrollTo API in ScrollView will check the actual scroll position before setting the scroll state ([1a9e2d5d55](https://github.com/facebook/react-native/commit/1a9e2d5d5589ce5cee92868ea5bccceb6e161eff) by [@ryancat](https://github.com/ryancat))
- TextInput Drawable to avoid Null Pointer Exception RuntimeError https://github.com/facebook/react-native/issues/17530 ([254493e1fb](https://github.com/facebook/react-native/commit/254493e1fb0c3a1e279e2c957e83edac6252d041) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Nested Text Android onPress does not work with last character ([132d1d00f8](https://github.com/facebook/react-native/commit/132d1d00f885fe5a45d712fd7698db285c22bc4b) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Compute Android Notch in keyboardDidShow height calculation API 28+ ([8bef3b1f11](https://github.com/facebook/react-native/commit/8bef3b1f1136ab5c2f2309a3101a7d9626ced1f5) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Exclude unused .so files for reduce android .apk and .aab ([6f126740fa](https://github.com/facebook/react-native/commit/6f126740fa560d7a831979b9f3747baacfb28dba) by [@enniel](https://github.com/enniel))
- Ensure elevated views are behind sticky header in FlatList ([4090195122](https://github.com/facebook/react-native/commit/4090195122ce56c58ddb4c9df447a4cc8d29075f) by [@ShikaSD](https://github.com/ShikaSD))
- Fix currentActivity being null when launching Redbox ([f4fdf4b55e](https://github.com/facebook/react-native/commit/f4fdf4b55e4489c21f4552b4ac01ef253c038b2d))
- When sending OS intents, always set "FLAG_ACTIVITY_NEW_TASK" flag (required by OS). ([04fe3ed80d](https://github.com/facebook/react-native/commit/04fe3ed80d9c201a483a2b477aeebd3d4169fd6d) by [@Krizzu](https://github.com/Krizzu))
- Fix missing WebView provider crash in ForwardingCookieHandler ([d40cb0e1b0](https://github.com/facebook/react-native/commit/d40cb0e1b0fb233a27b9d476167814d2853acf2a) by [@RodolfoGS](https://github.com/RodolfoGS))
- Fix keyboardDismissMode="on-drag" on Android ([7edf9274cf](https://github.com/facebook/react-native/commit/7edf9274cf6d3398075c19cd1cb020a5d6a346a2) by [@janicduplessis](https://github.com/janicduplessis))
- Fix non selectable Text in FlatList ([c360b1d92b](https://github.com/facebook/react-native/commit/c360b1d92b69e1d298b390ec88c4d29c1023945a) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Set textBreakStrategy default to be 'highQuality' ([3b2d541989](https://github.com/facebook/react-native/commit/3b2d5419899363d84aea4f5cc3a4c75253dd6406))
- Fixed `alignItems: baseline` for <Text> elements on Android ([1acf334614](https://github.com/facebook/react-native/commit/1acf33461451834097463f43e70d90bae0f67198))
- OnKeyPress event not fired with numeric keys ([ee3e71f536](https://github.com/facebook/react-native/commit/ee3e71f536127295ba4ea377e618499409a2e9ba) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fix viewconfig for AndroidHorizontalScrollViewNativeComponent by adding snapToAlignment ([7bbf549ae5](https://github.com/facebook/react-native/commit/7bbf549ae5954009146b611e364bb22cc15b8c2a) by [@GijsWeterings](https://github.com/GijsWeterings))

#### iOS specific

- IOS Ruby Updates ([1e6add1a43](https://github.com/facebook/react-native/commit/1e6add1a43355bb88c57400a7420a656966bef97) by [@barbieri](https://github.com/barbieri))
- Fixed an edge case when scroll to item/index is called without animation, the offset position is not updated. This caused the measurement of the position to be wrong. ([55392f65a6](https://github.com/facebook/react-native/commit/55392f65a6addbdd8214b61d4ae286f26d63a94f) by [@ryancat](https://github.com/ryancat))
- Fixed the issue when moving cursor in multi-line TextInput. ([22801870f0](https://github.com/facebook/react-native/commit/22801870f0613c2544ade1ebc5363e6e2f015c79) by [@xiankuncheng](https://github.com/xiankuncheng))
- Warn if Rosetta2 is being used (x86_64 on arm64) ([51bf557948](https://github.com/facebook/react-native/commit/51bf55794899284e1c465d346a3f6ebd8a485da2) by [@barbieri](https://github.com/barbieri))
- Fix Image defaultSource not showing on iOS ([900210cacc](https://github.com/facebook/react-native/commit/900210cacc4abca0079e3903781bc223c80c8ac7) by [@cristianoccazinsp](https://github.com/cristianoccazinsp))
- \_\_apply_Xcode_12_5_M1_post_install_workaround() ([a1c445a39c](https://github.com/facebook/react-native/commit/a1c445a39c580037ada4a5d194a0d2daef15a25a) by [@barbieri](https://github.com/barbieri))
- Source map path for schemes containing whitespaces ([f3fe7a0fb5](https://github.com/facebook/react-native/commit/f3fe7a0fb5fc0325fbe062c6df4cbf8b58779189) by [@andersonvom](https://github.com/andersonvom))
- Fix build error after running `pod install` with `--project-directory=ios` ([ef5ff3e055](https://github.com/facebook/react-native/commit/ef5ff3e055482771cbe866d4961ee2d0a9e00e45) by [@sonicdoe](https://github.com/sonicdoe))
- Don't hang app for 60s if packager can't be reached ([c0e04460f5](https://github.com/facebook/react-native/commit/c0e04460f546dfef2623bff367eb8db8fd75fa34) by [@radex](https://github.com/radex))
- Fix NSInvalidArgumentException for invalid font family names. ([5683932862](https://github.com/facebook/react-native/commit/5683932862ab870e735342342c68e03fb5ca9e09) by [@yungsters](https://github.com/yungsters))
- Unbreak Folly linker error ([b0c8a4eee8](https://github.com/facebook/react-native/commit/b0c8a4eee821ca0b22e166a2a38f2bd2f22a1abe) by [@fkgozali](https://github.com/fkgozali))
- Fixed inability to build apps when gflags is installed ([ab8dbdf663](https://github.com/facebook/react-native/commit/ab8dbdf66363f3d65f0dfbcc4ec7c71b1cd69b2a) by [@KDederichs](https://github.com/KDederichs))
- Exclude OpenSSL-Universal flipper dependency from release builds ([c13eb781fe](https://github.com/facebook/react-native/commit/c13eb781fec49ada04ba3a2d691a029842785e3c) by [@janicduplessis](https://github.com/janicduplessis))
- Unbreak \$ENTRY_FILE handling for JS bundling ([945c5f714d](https://github.com/facebook/react-native/commit/945c5f714d9b3a75f0be02b3a408f865c9021aa7) by [@fkgozali](https://github.com/fkgozali))
- ([4a9621647c](https://github.com/facebook/react-native/commit/4a9621647cde0ba14e7589295c0fbb9dcb300cde))

### Security

- Avoiding logging root view params outside of dev / debug mode builds ([e612d3a116](https://github.com/facebook/react-native/commit/e612d3a116f39ab354169643bab0d4bb9cfc1a85) by [@sterlingwes](https://github.com/sterlingwes))

#### Android specific

#### iOS specific

### Unknown

#### Android Unknown

#### iOS Unknown

#### Failed to parse

- Re-introduce AsyncEventBeatV2 experiment ([6d367d70f2](https://github.com/facebook/react-native/commit/6d367d70f2c5b44cbefa875308fd0d1b78a2ba88) by [@sammy-SC](https://github.com/sammy-SC))
- Move react-native-codegen dependency to react-native root package.json ([b494ae0703](https://github.com/facebook/react-native/commit/b494ae0703c4e29cbab8354f3a73076986167b20) by [@hramos](https://github.com/hramos))
- Setup a new macro to gate the core packager functionality ([a8cd8f7696](https://github.com/facebook/react-native/commit/a8cd8f769695621e4624a14d1da7f355c4544cbe) by [@jimmy623](https://github.com/jimmy623))
- Remove movesToAnimate var which was never read ([1e4f364f87](https://github.com/facebook/react-native/commit/1e4f364f873fdeb98e394899fa17079a4404eaaa) by [@sammy-SC](https://github.com/sammy-SC))
- Fix "Running on device" in RNTester README ([21b2d6c8e7](https://github.com/facebook/react-native/commit/21b2d6c8e7e137ae161a4f7ceee2f7d9888fb501) by [@osdnk](https://github.com/osdnk))
- Switch order of search libraries to fix M1 build error ([329b026f3a](https://github.com/facebook/react-native/commit/329b026f3a48a4228a89696540ba459276f9a2c2) by [@sammy-SC](https://github.com/sammy-SC))
- Include Swift lib in LIBRARY_SEARCH_PATHS ([ad9030ca9a](https://github.com/facebook/react-native/commit/ad9030ca9ae3861d079c16d3ce610edc1bedc54c) by [@lunaleaps](https://github.com/lunaleaps))
- Add UIAccessibilityTraitUpdatesFrequently to progressBar role ([1a42bd6e97](https://github.com/facebook/react-native/commit/1a42bd6e97ae44a3b38ca552865bac63a6f35da5) by [@jimmy623](https://github.com/jimmy623))

## v0.66.1

### Fixed

- For Android, general fixes to Appearance API and also fixes AppCompatDelegate.setDefaultNightMode(). For iOS, now works correctly when setting window.overrideUserInterfaceStyle ([25a2c608f7](https://github.com/facebook/react-native/commit/25a2c608f790f42cbc4bb0a90fc06cc7bbbc9b95) by [@mrbrentkelly](https://github.com/mrbrentkelly))

#### Android specific

- Fix Android border positioning regression ([d1a33cd139](https://github.com/facebook/react-native/commit/d1a33cd139fab4565b1fc691f5751c4af99d5849) by [@oblador](https://github.com/oblador))

#### iOS specific

- Fix for unable to find `find-node.sh` in `react-native-xcode.sh` script ([cc59a7cbde](https://github.com/facebook/react-native/commit/cc59a7cbde1c0fc6d6ef059321d23bf287f08218) by [@garethknowles](https://github.com/garethknowles))

## v0.66.0

### Highlights

- Hermes 0.9.0
  - This Hermes release is primarily about closing gap between Hermes cut and this React Native release. Among ~400 commits, contains memory and size wins, bugfixes and other progress behind the scenes. See [issue for more details](https://github.com/facebook/hermes/issues/586).
- Allow taps on views outside the bounds of a parent with `overflow: visible` ([e35a963bfb](https://github.com/facebook/react-native/commit/e35a963bfb93bbbdd92f4dd74d14e2ad6df5e14a) by [@hsource](https://github.com/hsource))
- Fixes for building on Apple Silicon and Xcode 13 ([ac4ddec542](https://github.com/facebook/react-native/commit/ac4ddec542febda744de218dae3a3d34edc7da84) thanks to [@mikehardy](https://github.com/mikehardy))
- New bluetooth permissions for Android ([2bcc6fac38](https://github.com/facebook/react-native/commit/2bcc6fac3844f0752bc7067517c92a643679575e), [eeb8e58](https://github.com/facebook/react-native/commit/eeb8e5829e183f6b5cd5fd327cf6da03a7db0541) by [@iBotPeaches](https://github.com/iBotPeaches))

### Breaking

- Remove Picker and PickerIOS components
  [cddb97ad18](https://github.com/facebook/react-native/commit/cddb97ad18cfdb663dcf015af3c9426d5414e396), [77366cd869](https://github.com/facebook/react-native/commit/77366cd8696cb8ada3f84d7fb4d36a27f7007b06), [ad0ccac0d6](https://github.com/facebook/react-native/commit/ad0ccac0d6471fa5428bf137c3aa0646883e8446)
- Remove StatusBarIOS component ([7ce0f40f5c](https://github.com/facebook/react-native/commit/7ce0f40f5cd8c0928ce720d6d121bcc5963958a2) by [@ecreeth](https://github.com/ecreeth))

#### Android specific

- Updated `autoCompleteType` prop of `TextInput` to `autoComplete` ([27fec9569e](https://github.com/facebook/react-native/commit/27fec9569e08a04e0dbdbd5de063a599ad0416fa) by [@jeswinsimon](https://github.com/jeswinsimon))

### Added

- Add `global.queueMicrotask` ([be189cd819](https://github.com/facebook/react-native/commit/be189cd81905a735f08a8519c62a707658c7fb27) by [@Huxpro](https://github.com/Huxpro))
- Added data field to `markerPoint` to allow callers to add additional arbitrary string data to logged points ([aa98978302](https://github.com/facebook/react-native/commit/aa9897830293955b7cc77fd818a50e8d736e715d))
- Adds accessibility actions to Button ([44717152ca](https://github.com/facebook/react-native/commit/44717152cadb18c7aff74e9465fdb70efdb1bf81) by [@dennisurtubia](https://github.com/dennisurtubia))
- Add accessibilityState prop to Slider component ([35dd86180b](https://github.com/facebook/react-native/commit/35dd86180ba730425b97592ef6e5c4d449caee06) by [@sladyn98](https://github.com/sladyn98))
- Add support for "togglebutton" `accessibilityRole` ([da899c0cc4](https://github.com/facebook/react-native/commit/da899c0cc4372830e5ca053a096b74fff2a19cb8) by [@kacieb](https://github.com/kacieb))

#### Android specific

- Add INFO, and MENU key event support ([bb33c1050b](https://github.com/facebook/react-native/commit/bb33c1050ba6098a68d70055e33186d9438c4374) by [@havlasme](https://github.com/havlasme))
- Added all autofill types to TextEdit ([d9e0ea77f0](https://github.com/facebook/react-native/commit/d9e0ea77f0111fd8400c65d68e45d54e2f84287b) by [@safaiyeh](https://github.com/safaiyeh))
- Add support to URI keyboard type in Android ([1465c8f387](https://github.com/facebook/react-native/commit/1465c8f3874cdee8c325ab4a4916fda0b3e43bdb))
- Add `MEDIA_STOP`, `MEDIA_NEXT`, and `MEDIA_PREVIOUS` event support to Android TV ([3e2bb331fc](https://github.com/facebook/react-native/commit/3e2bb331fc0974bc870b2e7bd3171e585183ed1b) by [@havlasme](https://github.com/havlasme))
- Allow configuring ndk build architectures ([d6ed1ff58b](https://github.com/facebook/react-native/commit/d6ed1ff58b2ca4d1c8b45416e56fa1da75633c07) by [@janicduplessis](https://github.com/janicduplessis))
- Added support for accessibility role of "list" for flatlist and sectioned list ([25a16123a6](https://github.com/facebook/react-native/commit/25a16123a610ae377ced23ef81ed4c03ad7d06d9) by [@anaskhraza](https://github.com/anaskhraza))
- Support for foreground ripple in Pressable ([0823f299e5](https://github.com/facebook/react-native/commit/0823f299e560efda5c0f344fcec86cf68801f4ab) by [@intergalacticspacehighway](https://github.com/intergalacticspacehighway))
- Support for ScrollAway native nav bars added to `ReactScrollView` ([0ef5beee85](https://github.com/facebook/react-native/commit/0ef5beee855afa592cc647383ba6a3ceae9cc40a) by [@JoshuaGross](https://github.com/JoshuaGross))

#### iOS specific

- Added new prop "selection" to `TextInputProps` ([8434177722](https://github.com/facebook/react-native/commit/8434177722f70a9325f9a6adf46b5315b1f4ffa4))
- Support for onRequestClose for iOS Modal component. ([c29ec46b0e](https://github.com/facebook/react-native/commit/c29ec46b0eee99670ce7762898fe3a4810db968b) by [@intergalacticspacehighway](https://github.com/intergalacticspacehighway))
- Allow `PlatformColor` to return user-defined named asset color ([36c0a7dec1](https://github.com/facebook/react-native/commit/36c0a7dec121bd3a4b92d02c03a24771d3c4cf84) by [@oblador](https://github.com/oblador))
- Add support for the `UIAccessibilityTraitsTabBar` ([11f8d9c7cd](https://github.com/facebook/react-native/commit/11f8d9c7cd4bae0b1a5e880ea9b2da7447ad76c2) by [@jimmy623](https://github.com/jimmy623))
- Added "altitudeAngle" property to touch events from Apple Pencil/Stylus devices. ([f1b1ba8963](https://github.com/facebook/react-native/commit/f1b1ba8963ff152d995c3cd132bc0755413bc44f) by [@swittk](https://github.com/swittk))
- Introduce `RCTInitializing` to allow NativeModules to initialize themselves ([9b45df1fce](https://github.com/facebook/react-native/commit/9b45df1fced066f40034b0a58be6f4caafd5f785) by [@RSNara](https://github.com/RSNara))
- Introduce `RCTCallableJSModules` API for NativeModules ([ece373d244](https://github.com/facebook/react-native/commit/ece373d24421d96e62dafa9a064b38acd6b71e46) by [@RSNara](https://github.com/RSNara))
- Attach `RCTBundleManager` to NativeModules ([329f58ee46](https://github.com/facebook/react-native/commit/329f58ee461e7afade36d8c249d3f4930c485312) by [@RSNara](https://github.com/RSNara))
- Introduce RCTBundleManager for bundleURL access ([4a1bafe591](https://github.com/facebook/react-native/commit/4a1bafe591917482d78be998d45552e2568e3e23) by [@RSNara](https://github.com/RSNara))

### Changed

- Initialized LogBox earlier and centralized access in LogBox module ([8abe737068](https://github.com/facebook/react-native/commit/8abe737068a54a874571c8b5560b2118b1df31ad) by [@rubennorte](https://github.com/rubennorte))
- ExceptionsManager will no longer report exceptions with `type === 'warn'`. ([883e0d5752](https://github.com/facebook/react-native/commit/883e0d5752b952c829c8d45504d3532f52bb272f) by [@yungsters](https://github.com/yungsters))
- Disable TouchableOpacity when `accessibilityState.disabled` is set ([ea609defe8](https://github.com/facebook/react-native/commit/ea609defe8462a6beeac4da3aa7a43397ee9a77f) by [@chakrihacker](https://github.com/chakrihacker))
- Upgrade Babel from 7.12.3 to 7.14.1 ([58a0f9b4e2](https://github.com/facebook/react-native/commit/58a0f9b4e202a921ab0820c79d6a3dd54204da46) by [@MichaReiser](https://github.com/MichaReiser))
- Upgrade `react-devtools-core` from ~4.6.0 to ^4.13.0 ([9e020ef476](https://github.com/facebook/react-native/commit/9e020ef476e24bb5703fc421225f1a94ae14512b) by [@bvaughn](https://github.com/bvaughn))
- Update Flipper to 0.99.0 ([41f45a77ad](https://github.com/facebook/react-native/commit/41f45a77ad09b46de328fb2a72775a052dac1e93) by [@swrobel](https://github.com/swrobel))
- Bump CLI to ^6.0.0 ([c677e196a9](https://github.com/facebook/react-native/commit/c677e196a9c4d6cfdf84d97e4746922bb4ed4823) by [@thymikee](https://github.com/thymikee))
- Upgrade ESLint TS parser and plugin ([3b751d396b](https://github.com/facebook/react-native/commit/3b751d396ba0acaa1b4c8e1115c79eb45dab403d) by [@wcandillon](https://github.com/wcandillon))
- Upgrade folly to 2021.06.28.00 and boost to 1.76.0 ([b77948e33b](https://github.com/facebook/react-native/commit/b77948e33bc5e0df422fffca3b4c9253f611d298) by [@Kudo](https://github.com/Kudo))

#### Android specific

- Add BLUETOOTH_ADVERTISE to `PermissionsAndroid` ([2bcc6fac38](https://github.com/facebook/react-native/commit/2bcc6fac3844f0752bc7067517c92a643679575e) by [@iBotPeaches](https://github.com/iBotPeaches))
- Native ScrollView listeners list maintains weak references to listeners to avoid memory leaks ([b673e352fb](https://github.com/facebook/react-native/commit/b673e352fb0ea44b545edf5a7e8c1b422180838a) by [@dalves](https://github.com/dalves))
- Rename the "Toggle Inspector" DevMenu item to "Hide/Show Element Inspector" ([e91fb05db7](https://github.com/facebook/react-native/commit/e91fb05db7f576e07114755b9db1eee91c672f25) by [@RSNara](https://github.com/RSNara))
- Localize "search", "button", and "togglebutton" accessibility roles by using the platform roles ([399285f91c](https://github.com/facebook/react-native/commit/399285f91c2f675dea16fe61a86049ef7fecf35b) by [@kacieb](https://github.com/kacieb))
- Refactor `AndroidTextInput.AndroidTextInput.color` prop to use SharedColor instead of int ([bc57056cc3](https://github.com/facebook/react-native/commit/bc57056cc3263431d54982426d890ba60b4cadb7) by [@mdvacca](https://github.com/mdvacca))
- Upgraded `infer-annotation` to 0.18.0. ([b5c94e316c](https://github.com/facebook/react-native/commit/b5c94e316cc9b4ff090d8daa8970bf1becf77959) by [@yungsters](https://github.com/yungsters))
- Bumped AGP to 4.2.2 ([ae494e7ce1](https://github.com/facebook/react-native/commit/ae494e7ce199cc5d524f791d45ddce51535cdadb) by [@cortinico](https://github.com/cortinico))
- Upgrade folly to 2021.06.28.00 ([ebe939b18a](https://github.com/facebook/react-native/commit/ebe939b18aa859eb0f7f265222874c292ed771a4) by [@Kudo](https://github.com/Kudo))
- Bump NDK to 21.4.7075529 ([aa43aab77c](https://github.com/facebook/react-native/commit/aa43aab77c8571632a2b0913c80fbf822dac01bc) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- ScrollView scrollIndicatorInsets to not automatically add safe area on iOS13+ ([bc1e602e0c](https://github.com/facebook/react-native/commit/bc1e602e0c7922da6bf238675b7bf8b4c3faa493) by [@justinwh](https://github.com/justinwh))

### Removed

- `StyleSheet.create` will no longer do DEV-time validation. ([2e8c0bd7ea](https://github.com/facebook/react-native/commit/2e8c0bd7ea7db1aac183eb7f656772d3cffcb132) by [@yungsters](https://github.com/yungsters))

### Fixed

- Fix `window` not existing in jest setup ([bc1c533833](https://github.com/facebook/react-native/commit/bc1c533833bfe25a22f1abd105b8bcb1babce3b5) by [@timomeh](https://github.com/timomeh))
- Clamp negative values for `numberOfLines` in <Text> component ([3bc883c6c6](https://github.com/facebook/react-native/commit/3bc883c6c60632f6a41df3867368f16f684b3865) by [@ShikaSD](https://github.com/ShikaSD))
- Add missing `jest/create-cache-key-function` dep root package.json ([9a43eac7a3](https://github.com/facebook/react-native/commit/9a43eac7a32a6ba3164a048960101022a92fcd5a) by [@janicduplessis](https://github.com/janicduplessis))
- Fix Switch ref forwarding ([1538fa4455](https://github.com/facebook/react-native/commit/1538fa4455fa7095879aceba7f74a519c1337a8b) by [@janicduplessis](https://github.com/janicduplessis))
- Report fatal errors even if its `type` is "warn". ([e4a4c4d6d7](https://github.com/facebook/react-native/commit/e4a4c4d6d71ab1a747d768e4b518e64e100ddfde) by [@yungsters](https://github.com/yungsters))
- Parse `accessibilityAction` props into object instead of string ([faaeb778df](https://github.com/facebook/react-native/commit/faaeb778dfe25df67fc00b599d023819c10406e8) by [@ShikaSD](https://github.com/ShikaSD))
- Avoid downgrading `console.error` when passed warning-like objects. ([0dba0aff18](https://github.com/facebook/react-native/commit/0dba0aff185f4fd46e1146362235e68e52c59556) by [@yungsters](https://github.com/yungsters))
- Fix natively driven animations not getting reset properly ([129180c77b](https://github.com/facebook/react-native/commit/129180c77b0b99a3acedbeb04ce6ec4667f74cac) by [@tienphaw](https://github.com/tienphaw))
- Fix compilation errors on Windows. ([6d04a46f74](https://github.com/facebook/react-native/commit/6d04a46f7427b9e107608f8f620fe2a1a84ff42d))
- Fixed bug parsing hermes call stacks when the file name is empty ([e539e7d0be](https://github.com/facebook/react-native/commit/e539e7d0bed4fef42f458f28d06100ae23f52cb7) by [@MartinSherburn](https://github.com/MartinSherburn))
- Upgrade dependencies / version of eslint package ([463ec22bb9](https://github.com/facebook/react-native/commit/463ec22bb9f2938164fef6133dfd94d2e428e5b0) by [@mikehardy](https://github.com/mikehardy))

#### Android specific

- Allow taps on views outside the bounds of a parent with `overflow: visible` ([e35a963bfb](https://github.com/facebook/react-native/commit/e35a963bfb93bbbdd92f4dd74d14e2ad6df5e14a) by [@hsource](https://github.com/hsource))
- Fixed to use correct Android theme color for dark theme ([b3a715f6ea](https://github.com/facebook/react-native/commit/b3a715f6ea3d0faaf6d09e2a49267f2a5fb3fad2) by [@sidverma32](https://github.com/sidverma32))
- Fixed dynamic behavior of `<Text adjustsFontSizeToFit={true}>` on Android ([59021521e7](https://github.com/facebook/react-native/commit/59021521e7aba0f70b91b5c7778ccdd1b30eaae4))
- Fix Dimensions not updating ([c18a492858](https://github.com/facebook/react-native/commit/c18a492858e94b31e632560ad17499012e688158) by [@jonnyandrew](https://github.com/jonnyandrew))
- Fix dashed/dotted border-drawing when `borderRadius` is 0 ([3e5998e651](https://github.com/facebook/react-native/commit/3e5998e651eba840603dcb1a9c0be564fc3f868d) by [@IjzerenHein](https://github.com/IjzerenHein))
- Fix selectionColor doesn't style Android TextInput selection handles ([5819538a08](https://github.com/facebook/react-native/commit/5819538a087f1f48d564e7b4e273fe43dfb026cc) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fix Modal being dismissed incorrectly when pressing escape on a hardware keyboard ([f51773ecde](https://github.com/facebook/react-native/commit/f51773ecdedbac19d25eb20894e532edef2cb304) by [@levibuzolic](https://github.com/levibuzolic))
- Avoid calling setHint with a null parameter causing cursor to jump to the right ([3560753559](https://github.com/facebook/react-native/commit/356075355908f4901b87ad6ce33c157f01c8e748) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Create slider accessibility delegate in createViewInstance ([91cac20289](https://github.com/facebook/react-native/commit/91cac2028900cd18d17e70f9050cc125ed1eb12e) by [@janicduplessis](https://github.com/janicduplessis))
- Quickfix individual border style dotted or dashed rendering as solid ([cb0e1d603a](https://github.com/facebook/react-native/commit/cb0e1d603aa4439a4d4804ad2987e4cb1f9bbf90) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Make `mHybridData` thread safe ([7929551623](https://github.com/facebook/react-native/commit/7929551623d4e3fbd849500d795755d0c41fdbbd))
- Exit early from layout in textview if text layout is null ([8dfc3bcda1](https://github.com/facebook/react-native/commit/8dfc3bcda1e77fc982bc98da20dc129c23d8cc77) by [@ShikaSD](https://github.com/ShikaSD))
- Fix `NullPointerException` caused by race condition in `ReactInstanceManager.getViewManagerNames` method ([fb386fccdd](https://github.com/facebook/react-native/commit/fb386fccddfe381fd6af5656c13fac802bffd316) by [@mdvacca](https://github.com/mdvacca))
- Pressable ripple subsequent press coordinates. ([961b00d8c0](https://github.com/facebook/react-native/commit/961b00d8c0117750ce147c0b27c59af93f64b65c) by [@intergalacticspacehighway](https://github.com/intergalacticspacehighway))
- TouchableNativeFeedback ripple starts on previous touch location. ([d85d72d0d9](https://github.com/facebook/react-native/commit/d85d72d0d9143693f73cef24c8e5bbb4d539a620) by [@intergalacticspacehighway](https://github.com/intergalacticspacehighway))
- Fix Crash in `ViewProps.isLayoutOnly` ([e6b9508f12](https://github.com/facebook/react-native/commit/e6b9508f12ffd732d773ddcf9c2f633b0eca4232) by [@javache](https://github.com/javache))
- Fixed a crash when updating `snapToOffsets` to a null value ([ba387b91d3](https://github.com/facebook/react-native/commit/ba387b91d3c7c9c1acd4b08f07fcd45629f3edfb) by [@maxoumime](https://github.com/maxoumime))
- Adding `setAccessible` to `ReactImageManager` to allow screenreader announce Image accessibilityState of "disabled" ([333b46c4b0](https://github.com/facebook/react-native/commit/333b46c4b0ddee286e6d1d4b971fe8554a5c14cb) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fixed Android library builds with react.gradle file ([88f0676ae4](https://github.com/facebook/react-native/commit/88f0676ae49fd629331495101248c8e13423aed2) by [@Legion2](https://github.com/Legion2))

#### iOS specific

- Fix deadlock on `RCTi18nUtil` ([fcead14b0e](https://github.com/facebook/react-native/commit/fcead14b0effe2176a5d08ad50ee71e48528ddbd) by [@Saadnajmi](https://github.com/Saadnajmi))
- Avoid re-encoding images when uploading local files ([f78526ce3d](https://github.com/facebook/react-native/commit/f78526ce3d4004eb4bf8ca5178ca7e2c1c9abc1a) by [@arthuralee](https://github.com/arthuralee))
- <TextInput> content is reset when emoji is entered at the max length ([f3b8d4976f](https://github.com/facebook/react-native/commit/f3b8d4976f8608c2cda1f071923f14b6d4538967))
- Use `actionName` in accessibility event callback ([fed6ad5bad](https://github.com/facebook/react-native/commit/fed6ad5badb4196a1895370fc81c522572cb34b4) by [@ShikaSD](https://github.com/ShikaSD))

## v0.65.1

### Changed

- Set `react-test-renderer` to `17.0.2` in the template ([d272880](https://github.com/facebook/react-native/commit/d27288044e94a248982f596e9885d55d066bc72e) by [@@rickhanlonii](https://github.com/@rickhanlonii))

### Fixed

- Resolve `NODE_BINARY` after finding the right path to node ([d75683](https://github.com/facebook/react-native/commit/d75683ac943205d64dd4142cca713ab2356094b8) by [@santiagofm](https://github.com/santiagofm))

#### Android specific

- `ColorProps` with value null should be defaultColor instead of transparent ([842bcb902e](https://github.com/facebook/react-native/commit/842bcb902ed27928255b60cb20524e9318d9bf70) by [@hank121314](https://github.com/hank121314))
- Android Gradle Plugin 7 compatibility ([06e31c748f](https://github.com/facebook/react-native/commit/06e31c748fe87a866dbaf4d0c2019e76ec00e309) by [@dulmandakh](https://github.com/dulmandakh))

## v0.65.0

### Highlights

- Hermes 0.8.1. Please see the highlighted changes from its [0.8.0](https://github.com/facebook/hermes/releases/tag/v0.8.0) and [0.8.1](https://github.com/facebook/hermes/releases/tag/v0.8.1) release notes.
- `react-native-codegen` version `0.0.7` is now needed as a `devDependency` in the `package.json`.

### Breaking Changes

#### iOS specific

- Replace `flipper_post_install` with `react_native_post_install` hook. Will automatically detect if Flipper is enabled. ([42dde12aac](https://github.com/facebook/react-native/commit/42dde12aac81208c4e69da991f4e08b9e62d18f6) by [@grabbou](https://github.com/grabbou))

### Added

- Add `onPressIn` & `onPressOut` props to Text ([1d924549ca](https://github.com/facebook/react-native/commit/1d924549cad75912191005c8f68dd73e15b07183) by [@adrienharnay](https://github.com/adrienharnay))
- Stabilize `RootTagContext`. And temporarily export both `unstable_RootTagContext` and `RootTagContext` ([9d489354ae](https://github.com/facebook/react-native/commit/9d489354ae373614b20cd91f588eb25743686ee0) by [@nadiia](https://github.com/nadiia))
- Implement `sendAccessibilityEvent` in the React(Fabric/non-Fabric) renderer ([99b7052248](https://github.com/facebook/react-native/commit/99b7052248202cee172e0b80e7ee3dfb41316746) by [@JoshuaGross](https://github.com/JoshuaGross))
- Re-added `localeIdentifier` to `I18nManager` constants ([6b91ae73cd](https://github.com/facebook/react-native/commit/6b91ae73cdf096e15a3235ae76276f9d7fb12f7b) by [@acoates-ms](https://github.com/acoates-ms))
- Add PressabilityPerformanceEventEmitter ([c4c0065b00](https://github.com/facebook/react-native/commit/c4c0065b0009ced0049c5abc4dddd327ac638928) by [@JoshuaGross](https://github.com/JoshuaGross))
- Added `displayName` to some RN contexts to make them more easy to differentiate when debugging. ([68a476103a](https://github.com/facebook/react-native/commit/68a476103a95be77f4fc7c582e52cc94946de1b4) by [@bvaughn](https://github.com/bvaughn))
- Add `displayName` to `TouchableHighlight` and `TouchableOpacity` ([c4e40b81c0](https://github.com/facebook/react-native/commit/c4e40b81c01d061c189a7d28a4f56a588c3d1aea) by [@brunohkbx](https://github.com/brunohkbx))
- Added context to URL's error messages when the feature is not implemented ([452240bafa](https://github.com/facebook/react-native/commit/452240bafa970578144aedaea0223e17863d2d26) by [@Crash--](https://github.com/Crash--))
- Add a `stickyHeaderHiddenOnScroll` option to keep the sticky header hidden during scrolling down, and only slide in when scrolling up ([ffba25c648](https://github.com/facebook/react-native/commit/ffba25c648152021dd3fb9e79afd8cade7008d05))
- Added `debugName` parameter to `renderApplication` to use as the display name for the React root tree ([eeb36f4709](https://github.com/facebook/react-native/commit/eeb36f470929c2fdd8e1ed69898a5ba9144b8715) by [@rubennorte](https://github.com/rubennorte))
- Adding support for `cancelOnBackground` for UserFlow ([0d4985900b](https://github.com/facebook/react-native/commit/0d4985900b52d5def22fce4371c2259ee65368ee) by [@dmitry-voronkevich](https://github.com/dmitry-voronkevich))
- Introducing RuntimeScheduler module ([eb13baf2a6](https://github.com/facebook/react-native/commit/eb13baf2a687b53dde04b9a336f18629d94f4b79) by [@sammy-SC](https://github.com/sammy-SC))
- Roll out TurboModule Promise Async Dispatch ([5c4f145e33](https://github.com/facebook/react-native/commit/5c4f145e33d92969f8a86284360a5a2f09308500) by [@RSNara](https://github.com/RSNara))

#### Android specific

- Add `getRecommendedTimeoutMillis` to AccessibilityInfo ([d29a7e7a89](https://github.com/facebook/react-native/commit/d29a7e7a89f4e5e3489e9723979426bb1b6f0674) by [@grgr-dkrk](https://github.com/grgr-dkrk))
- TalkBack now announces "unselected" when changing `accessibilityState.selected` to false. ([73bc96ecf9](https://github.com/facebook/react-native/commit/73bc96ecf9a16d420533c12e9e1812ffe21c10a2) by [@yungsters](https://github.com/yungsters))
- Fbjni version bump to 0.0.3 ([24f9f75bf6](https://github.com/facebook/react-native/commit/24f9f75bf66b8f32a117ba9f9dea3c65b35b1e00) by [@IvanKobzarev](https://github.com/IvanKobzarev))
- Add `onFocus` and `onBlur` for Pressable on Android. ([cab4da7288](https://github.com/facebook/react-native/commit/cab4da728814bf9d3c0cc7c9921e982bfc090730))
- Introduce API to allow applications to register `TurboModuleManagerDelegates` with `ReactInstanceManager` ([eb7e89e286](https://github.com/facebook/react-native/commit/eb7e89e2864e941b4a21d55a7403a6028e9a26a2) by [@RSNara](https://github.com/RSNara))
- Added convenience methods to simplify native Event classes and ease migrations ([72d0ddc16f](https://github.com/facebook/react-native/commit/72d0ddc16f2f631003c3486e0a59e50c145ec613) by [@JoshuaGross](https://github.com/JoshuaGross))

#### iOS specific

- High contrast dynamic color options for dark and light mode. ([4b9d9dda27](https://github.com/facebook/react-native/commit/4b9d9dda270acd4e0314f40490c699ffd0f6e30e) by [@birkir](https://github.com/birkir))
- Adds an ability to retrieve the notifications authorization status from JavaScript side. ([b86e52a9ec](https://github.com/facebook/react-native/commit/b86e52a9ec9ec828388eb4a717a3782a54c7b3d9))
- Added reset method to `RCTFabricSurface` to help with reloads ([53858ceaa3](https://github.com/facebook/react-native/commit/53858ceaa3beab02726b1bd6e125e506477d445e) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Allow `RCTRootView` to be initialized with a frame ([00bc09c8f7](https://github.com/facebook/react-native/commit/00bc09c8f76879eb1f9a92a6a643191da9355de8) by [@appden](https://github.com/appden))
- Allow for configuring the `NSURLSessionConfiguration` ([58444c74f5](https://github.com/facebook/react-native/commit/58444c74f5c18b74e88a6c1cd0f059fe434c1a21) by [@hakonk](https://github.com/hakonk))
- Use react-native-codegen in iOS app template ([e99b8bbb40](https://github.com/facebook/react-native/commit/e99b8bbb404f8cd1f11b6c7998083be530d7b8a4) by [@hramos](https://github.com/hramos))

### Changed

- Bump Flipper + Bump hermes (#31872 by [@Titozzz](https://github.com/Titozzz))
- Show warning when native module without `addListener` or `removeListeners` is passed to `NativeEventEmitter` ([114be1d217](https://github.com/facebook/react-native/commit/114be1d2170bae2d29da749c07b45acf931e51e2) by [@rubennorte](https://github.com/rubennorte))
- Disable `accessibilityState` when the `TouchableWithoutFeedback` is `disabled`. ([697164077c](https://github.com/facebook/react-native/commit/697164077c362cfa9a384b0f4e246d6bd9c470ba) by [@carloscuesta](https://github.com/carloscuesta))
- Upgraded `react-devtools-core dependency` to 4.12.0 ([5a2693d78f](https://github.com/facebook/react-native/commit/5a2693d78f1a886f0aa5b7f86830d3ddb54a57e9) by [@bvaughn](https://github.com/bvaughn))
- Set disabled `accessibilityState` when `TouchableHighlight` is disabled ([f69e096bb4](https://github.com/facebook/react-native/commit/f69e096bb4df67474351786f674b1bb1e42d3363) by [@Naturalclar](https://github.com/Naturalclar))
- Add checks and logs to for better error handling ([ea1f9531f0](https://github.com/facebook/react-native/commit/ea1f9531f00b5cd834e03f58cdfa117a93634624))
- CreateAnimatedComponent: removed deprecated lifecycles usage ([ba61267015](https://github.com/facebook/react-native/commit/ba61267015567bf180dd3272a295dc262b3e2c97) by [@nadiia](https://github.com/nadiia))
- Hide caret in the `TextInput` during test runs. ([397bfa6ad7](https://github.com/facebook/react-native/commit/397bfa6ad7dff71f4b6d27ac17acc76fe8a6bbb5) by [@nadiia](https://github.com/nadiia))
- Use `usePressability` hook in TextInput ([c4aa411ee3](https://github.com/facebook/react-native/commit/c4aa411ee374f2320343b900f1f8b24a47b633c9) by [@nadiia](https://github.com/nadiia))
- `Keyboard` no longer inherits from `NativeEventEmitter`, so it no longer implements `removeAllListeners`, and `removeSubscription`. ([1049835b50](https://github.com/facebook/react-native/commit/1049835b504cece42ee43ac5b554687891da1349) by [@yungsters](https://github.com/yungsters))
- `AppState` no longer inherits from `NativeEventEmitter`, so it no longer implements `addListener`, `removeAllListeners`, and `removeSubscription`. ([6f22989e92](https://github.com/facebook/react-native/commit/6f22989e920246a2cd611b93e170024d89903027) by [@yungsters](https://github.com/yungsters))
- `DevSettings` no longer inherits from `NativeEventEmitter` ([70cd569e7e](https://github.com/facebook/react-native/commit/70cd569e7e4cceac81023eae4ea5089cff2f9b59) by [@yungsters](https://github.com/yungsters))
- LogBox will not initially collapse stack frames if every frame would be collapsed. ([88a41f180c](https://github.com/facebook/react-native/commit/88a41f180c315bc55e05d77ddc3fc671ad8630e6) by [@yungsters](https://github.com/yungsters))
- Update package name warning of deprecated modules ([34e1b0ef98](https://github.com/facebook/react-native/commit/34e1b0ef981559adc09cd9f994bef9584f1c82b7) by [@Naturalclar](https://github.com/Naturalclar))
- Update react-native-codegen to 0.0.7 ([cd6c9f3273](https://github.com/facebook/react-native/commit/cd6c9f3273fbe41052c4ec8512d3b1129daf149b) by [@Naturalclar](https://github.com/Naturalclar))
- Update template devDependencies ([652e3953f4](https://github.com/facebook/react-native/commit/652e3953f48938580e1bf8ea1ba70105997e59d2) by [@Bardiamist](https://github.com/Bardiamist))
- Don't minify JS bundle by default when using hermes ([1a67dda668](https://github.com/facebook/react-native/commit/1a67dda668c71d961a4bb3b0cdf6aa22c0e5c138) by [@janicduplessis](https://github.com/janicduplessis))
- Migrate warnings in index.js to point to new lean core repos ([4421a64ac1](https://github.com/facebook/react-native/commit/4421a64ac1ea9df3827fb99194c8576a0750beab) by [@Naturalclar](https://github.com/Naturalclar))
- Update Flipper to 0.93.0 ([06c33e9abe](https://github.com/facebook/react-native/commit/06c33e9abe6ed51b1c8bba03982ebce2b6da3860) by [@mweststrate](https://github.com/mweststrate))
- Update Flipper to 0.91.1, fixed iOS build support for i386, `use_flipper!()` will no longer need custom overrides to build with XCode 12.5 ([4246c75d0d](https://github.com/facebook/react-native/commit/4246c75d0d5b9dccbe0fd5ecec66b4cc0331f815) by [@mweststrate](https://github.com/mweststrate))
- Find node on m1 via homebrew node managers ([4d40b53c12](https://github.com/facebook/react-native/commit/4d40b53c12c8ad52760c63cacde417ee876bdfb1) by [@danilobuerger](https://github.com/danilobuerger))
- Clean up EventObjectPropertyType ([0e46080847](https://github.com/facebook/react-native/commit/0e46080847595fb7577b18042c932db958bc0959) by [@RSNara](https://github.com/RSNara))
- `Appearance.addChangeListener` now returns an `EventSubscription`. ([305b4253c2](https://github.com/facebook/react-native/commit/305b4253c2a9ed4d71be33e02cb12b6d570e2fb1) by [@yungsters](https://github.com/yungsters))
- `Dimensions.addEventListener` now returns an `EventSubscription`. ([c47a03563d](https://github.com/facebook/react-native/commit/c47a03563db72d1580bf87b7729bd22ce6ca63dd) by [@yungsters](https://github.com/yungsters))
- Updated react-native-community/cli to v6 (hence updating metro to 0.66) ([0d32aef3aa](https://github.com/facebook/react-native/commit/0d32aef3aa9a75b00d99503b8e4f502c52380dea) by [@Titozzz](https://github.com/Titozzz))
- Reflect Hermes release version from HermesBadge ([c54aeccf1a](https://github.com/facebook/react-native/commit/c54aeccf1a8e16240e400d783dda5ec07fcf3808) by [@Huxpro](https://github.com/Huxpro))

#### Android specific

- Modified `NativeEventEmitter` to also use the passed native module to report subscriptions on Android ([f5502fbda9](https://github.com/facebook/react-native/commit/f5502fbda9fe271ff6e1d0da773a3a8ee206a453) by [@rubennorte](https://github.com/rubennorte))
- RefreshControl.size prop changed its type to string, the valid values are: 'default' and 'large' ([dd60414578](https://github.com/facebook/react-native/commit/dd604145781ac07c8db8d9100043bd76f6d6e913), [65975dd28d](https://github.com/facebook/react-native/commit/65975dd28de0a7b8b8c4eef6479bf7eee5fcfb93) by [@mdvacca](https://github.com/mdvacca))
- TouchableNativeFeedback: sync disabled prop with accessibilityState ([88f2356eed](https://github.com/facebook/react-native/commit/88f2356eedf71183d02cde0826c8a0c6910f83dd) by [@kyamashiro](https://github.com/kyamashiro))
- Rename `hasActiveCatalystInstance` to `hasActiveReactInstance` ([dfa8eb0558](https://github.com/facebook/react-native/commit/dfa8eb0558338f18ea01f294a64d355f6deeff06))
- Record latest error type in dev support ([423453e105](https://github.com/facebook/react-native/commit/423453e1050c9aedda2df050a5ee6d40e7c82031))
- Passing accessibility state in button so it can announce disabled in talkback ([5889cbebe3](https://github.com/facebook/react-native/commit/5889cbebe392dd19c6ce0cfd5fa1f725ece1060a) by [@huzaifaaak](https://github.com/huzaifaaak))
- Fixed issue that causes HorizontalScrollView to shift to the right when a TextInput is selected and keyboard pops up ([b9b23e1ab1](https://github.com/facebook/react-native/commit/b9b23e1ab138189d2a4c22b13ba6ad8f8957579e) by [@JoshuaGross](https://github.com/JoshuaGross))
- Fixed jumpy RTL horizontal ScrollViews. If you have Android-specific JS hacks for handling RTL in ScrollViews, you probably can/probably want to remove them, because they should be reliable now and require fewer hacks. ([fc032cd8d8](https://github.com/facebook/react-native/commit/fc032cd8d889d828edad3ea4b735205092cf0d40) by [@JoshuaGross](https://github.com/JoshuaGross))
- Add a new check to avoid calling this method ([2b708560fc](https://github.com/facebook/react-native/commit/2b708560fc002c26f0b09f09cfa451827a3425ac))
- Clipping subviews has been temporarily disabled in HorizontalScrollView in RTL mode. Minor/negligible perf impact. ([da8ed6b625](https://github.com/facebook/react-native/commit/da8ed6b6252fd53a83f14ab6da7e9b467f12ffe1) by [@JoshuaGross](https://github.com/JoshuaGross))
- Change StatusBar style handling strategy ([7324b92dc4](https://github.com/facebook/react-native/commit/7324b92dc45679d3b38526378b7d3e78ad082641))
- Clean listeners during destroy of `ReactContext` ([d79212120b](https://github.com/facebook/react-native/commit/d79212120b7168015d3d0225ef372ed851a230fa) by [@mdvacca](https://github.com/mdvacca))
- Bump buildToolsVersion to 30.0.2, ([5d01110b53](https://github.com/facebook/react-native/commit/5d01110b5370f884907b6dbdc56773f03518a54d) by [@dulmandakh](https://github.com/dulmandakh))
- Initial replacement of jcenter with mavenCentral. ([704dd2812f](https://github.com/facebook/react-native/commit/704dd2812f7b8c79971274cc9e4c717e56847ac0) by [@ShikaSD](https://github.com/ShikaSD))
- Remove developer tool guard for android ([c7d28bca30](https://github.com/facebook/react-native/commit/c7d28bca308c1654c576df9a0328a3116ed65d54))
- Bump Android compileSdkVersion and targetSdkVersion from 29 to 30 ([55c8833817](https://github.com/facebook/react-native/commit/55c8833817c3e9cf9882a712c8b9946a262df231), [c7efd5b369](https://github.com/facebook/react-native/commit/c7efd5b369aa7605a1017791440735ab72bc9fa8) by [@mdvacca](https://github.com/mdvacca))
- Upgrade jsc-android to 250230.2.1 ([341f061ce3](https://github.com/facebook/react-native/commit/341f061ce3ae057f3a958654e0ec3a9c4c8211ad) by [@Kudo](https://github.com/Kudo))
- Bump Gradle to 6.9, Android Gradle Plugin to 4.2.1 ([547b4c92e4](https://github.com/facebook/react-native/commit/547b4c92e4743f5b5816297f48a608ace9de6bb5) by [@dulmandakh](https://github.com/dulmandakh))
- Bump gradle wrapper to 6.8.3 ([7258afeea3](https://github.com/facebook/react-native/commit/7258afeea38949dc408c0af79924f6f36f7ade84) by [@dulmandakh](https://github.com/dulmandakh))
- Bumping OkHttp from 4.9.0 to 4.9.1. ([6caec9d91f](https://github.com/facebook/react-native/commit/6caec9d91fe71bcd80d670218d752c4f251bde81) by [@gedeagas](https://github.com/gedeagas))
- Bumping OkHttp from v3 to v4. ([8207e97f91](https://github.com/facebook/react-native/commit/8207e97f9174a04e319431193c0f63d47a093c44) by [@arazabishov](https://github.com/arazabishov))
- Update Okhttp to version 3.14.19 ([6bfd89d277](https://github.com/facebook/react-native/commit/6bfd89d27724f2aac602fa2acbf4753950f4152e) by [@LukasFPV](https://github.com/LukasFPV))
- Bump Fresco to 2.5.0 ([8fa8934011](https://github.com/facebook/react-native/commit/8fa8934011e4d9f1f7a49c8519fcc97f30a5c74b) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Fresco to 2.3.0 ([280f524b49](https://github.com/facebook/react-native/commit/280f524b491e7a36bb9f9a26e354bb8e125375ed) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- Give RCTNetworking handler provider block RCTModuleRegistry ([4c5182c1cc](https://github.com/facebook/react-native/commit/4c5182c1cc8bafb15490adf602c87cb5bf289ffd) by [@RSNara](https://github.com/RSNara))
- Give RCTImageURLLoader's loader/decoder provider blocks RCTModuleRegistry ([af6bcfa3ab](https://github.com/facebook/react-native/commit/af6bcfa3ab0ef6e1b0f669dda6cd7d6a5e8975ba) by [@RSNara](https://github.com/RSNara))
- Make RCTTurboModule `getTurboModule`: required ([e0b8f5080f](https://github.com/facebook/react-native/commit/e0b8f5080f814ba2a75807ed6d7f2944aab98d7e) by [@RSNara](https://github.com/RSNara))
- Update React.podspec to require cocoapods >= 1.10.1 ([b50b7e3a19](https://github.com/facebook/react-native/commit/b50b7e3a191dfa95aa122c259e0df8699cbaccae) by [@sunnylqm](https://github.com/sunnylqm))
- Fix glog pod install with Xcode 12 ([8a5fd8ea95](https://github.com/facebook/react-native/commit/8a5fd8ea95678a0b4423db2cbcbefc1a33595813) by [@dulmandakh](https://github.com/dulmandakh))
- Only show Dev Menu on shake if RN view is visible ([7186c4de4f](https://github.com/facebook/react-native/commit/7186c4de4fc76e87fa1386f2839f178dd220a02b) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- `progressViewOffset` prop of `RefreshControl` and `VirtualizedList` now works on iOS ([310a6bcf4b](https://github.com/facebook/react-native/commit/310a6bcf4ba7ca162d3ba1c03e0ab07ff41f9ead) by [@davidbiedenbach](https://github.com/davidbiedenbach))
- Roll out TurboModule block copy ([5275895af5](https://github.com/facebook/react-native/commit/5275895af5136bc278c0c5eb07ae93e395c5b29b) by [@RSNara](https://github.com/RSNara))
- Add instructions to template/ios/Podfile for enabling hermes ([a326a30e32](https://github.com/facebook/react-native/commit/a326a30e322f6cdff880734aafe965b299febb8d) by [@SConaway](https://github.com/SConaway))

### Deprecated

- `EventEmitter#removeSubscription` is now deprecated. ([cb6cbd12f8](https://github.com/facebook/react-native/commit/cb6cbd12f80152b4ce742f37e2e6eefadf89d927) by [@yungsters](https://github.com/yungsters))
- It is now deprecated to pass a constructor argument to `EventEmitter(...)`. ([14f7a2b707](https://github.com/facebook/react-native/commit/14f7a2b70754c92804d746959d1ff091bf49af69) by [@yungsters](https://github.com/yungsters))
- Deprecate `AccessibilityInfo.removeEventListener`. ([003d63d6e5](https://github.com/facebook/react-native/commit/003d63d6e501411f870ff5dbef819ad2aca20974) by [@yungsters](https://github.com/yungsters))
- Deprecate `Linking.removeEventListener`. Instead, call `remove()` on the subscription returned by `Linking.addEventListener`. ([6d1aca806c](https://github.com/facebook/react-native/commit/6d1aca806cee86ad76de771ed3a1cc62982ebcd7), [035718ba97](https://github.com/facebook/react-native/commit/035718ba97bb44c68f2a4ccdd95e537e3d28690c) by [@yungsters](https://github.com/yungsters))
- Old Native method to create ScrollEvent has been deprecated and will be removed at some point in the (distant) future ([62f0dee235](https://github.com/facebook/react-native/commit/62f0dee2353b14ce1524dc62de5e1d2f1883a089) by [@JoshuaGross](https://github.com/JoshuaGross))

#### Android specific

- Deprecate `NativeModule.onCatalystInstanceDestroy()` for `NativeModule.invalidate()` ([18c8417290](https://github.com/facebook/react-native/commit/18c8417290823e67e211bde241ae9dde27b72f17) by [@RSNara](https://github.com/RSNara))
- Mark `hasActiveCatalystInstance()` as Deprecated ([1b50722a7e](https://github.com/facebook/react-native/commit/1b50722a7e84cd8acffd3f0f84d77057e1e0d955))

### Removed

- Stabilize `RootTagContext` ([9b98edcd01](https://github.com/facebook/react-native/commit/9b98edcd0155a4a8a1f71d19e565c485910a6137) by [@nadiia](https://github.com/nadiia))
- Removed `getNode()` from animated component refs. ([b914153286](https://github.com/facebook/react-native/commit/b914153286ea537d4a57ff934e63e07172c576a0) by [@yungsters](https://github.com/yungsters))
- Remove legacy context API usage in AppContainer ([17be3a0032](https://github.com/facebook/react-native/commit/17be3a0032c181a100efc7af17b7366a3d636c52) by [@nadiia](https://github.com/nadiia))
- Removed `AccessibilityInfo.fetch`, use `isScreenReaderEnabled` instead. ([d831134d51](https://github.com/facebook/react-native/commit/d831134d514c5db6be1ee35cc7e9994b777179c1) by [@yungsters](https://github.com/yungsters))
- Remove unused VR-only props ([95f7c791c5](https://github.com/facebook/react-native/commit/95f7c791c56b527dadbe0b4ec7a1be5af12d7afe) by [@Simek](https://github.com/Simek))
- Removed `RCTDeviceEventEmitter.sharedSubscribers`. ([3af0c84aa5](https://github.com/facebook/react-native/commit/3af0c84aa5d1633f058ea3e7aef0d125fe33e01d) by [@yungsters](https://github.com/yungsters))
- Moved `ScrollResponder.Mixin` methods into ScrollView to Remove ScrollResponder.js ([099f67cf8a](https://github.com/facebook/react-native/commit/099f67cf8aa290592092cfa0cb4e938d0543b696) by [@kacieb](https://github.com/kacieb))
- `NativeEventEmitter` no longer inherits from `EventEmitter`, so it no longer implements `removeListener` and `removeSubscription`. Instead, use the `remove()` method on the subscription object returned by `addListener`. ([d39643b9de](https://github.com/facebook/react-native/commit/d39643b9de11c6b44984166ede34a7f44de76fe5) by [@yungsters](https://github.com/yungsters))
- `RCTDeviceEventEmitter` no longer throws for `StatusBar`, `Keyboard`, and `AppState` events. However, you are still recommended to use the more appropriate modules for listening to these events. ([c8c975f0d7](https://github.com/facebook/react-native/commit/c8c975f0d7b8a57e9e90373a2be4d630ed9dd65e) by [@yungsters](https://github.com/yungsters))
- Removed second optional argument of `NativeEventEmitter` constructor ([f5f47879b8](https://github.com/facebook/react-native/commit/f5f47879b8320a9934914cb8ce7a72269840a83a) by [@yungsters](https://github.com/yungsters))
- Removed warning on Android for `setTimeout` with delays greater than 1 minute. ([480dabd665](https://github.com/facebook/react-native/commit/480dabd66547a60522249eda203a3eb1934b02e5) by [@yungsters](https://github.com/yungsters))
- Removed `Touchable.TOUCH_TARGET_DEBUG` property. ([ef765d423c](https://github.com/facebook/react-native/commit/ef765d423cb188957a9fb2fd92c62b0efe8a36a6) by [@yungsters](https://github.com/yungsters))

#### Android specific

- Remove okhttp3 proguard rules ([b4c9f13fe7](https://github.com/facebook/react-native/commit/b4c9f13fe794283d76766c1baef87888d174cb1c) by [@doniwinata0309](https://github.com/doniwinata0309))
- Remove filter pills ([5cf4ab8dd2](https://github.com/facebook/react-native/commit/5cf4ab8dd28b5a336d7af29d295ede51f0d19587) by [@suminkimm](https://github.com/suminkimm))
- Remove `ReactFragmentActivity` class. ([2798e7172b](https://github.com/facebook/react-native/commit/2798e7172b01b9e2dbe2937d0163f98ab29230cf) by [@dulmandakh](https://github.com/dulmandakh))
- Remove jcenter ([70da640946](https://github.com/facebook/react-native/commit/70da64094608f5f2e3c554ed719e9aad624e3459) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- Removed event methods except `addListener` from `Networking` ([a81b7d18fa](https://github.com/facebook/react-native/commit/a81b7d18fa65a727539c6c7ea17f787673d3c889) by [@yungsters](https://github.com/yungsters))
- Delete deprecated "live reloading" setting ([b512beb0c4](https://github.com/facebook/react-native/commit/b512beb0c497158f9c861fcc16af960655b1feb5) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Remove iOS10/tvOS10 support ([f2c6279ca4](https://github.com/facebook/react-native/commit/f2c6279ca497b34d5a2bfbb6f2d33dc7a7bea02a), [a1d626739d](https://github.com/facebook/react-native/commit/a1d626739d95d6cbbb1be169b93952cdd1465486) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Remove iOS10/tvOS10 support from remaining podfiles ([f0faa7843c](https://github.com/facebook/react-native/commit/f0faa7843c5a0e9041edb6e77fd6631335ab2b12) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Delete RCTTurboModuleManagerDelegate `getTurboModule:initParams` ([c4c34a1237](https://github.com/facebook/react-native/commit/c4c34a1237ec584c667c62358dc577174bf11033) by [@RSNara](https://github.com/RSNara))

### Fixed

- Don't disconnect DevTools WebSocket connection on Cmd+D ([60a18c138c](https://github.com/facebook/react-native/commit/60a18c138c51d3adcfeba7785315fc222cdfeb35) by [@bvaughn](https://github.com/bvaughn))
- For native components that accept color arrays, invalid elements will now fallback to transparent with a console error. ([bb6cd56fae](https://github.com/facebook/react-native/commit/bb6cd56fae4118f44ae47fd6978710a22f9e1510) by [@yungsters](https://github.com/yungsters))
- Fixes usage of std::thread in runtime executor ([75d9ba733f](https://github.com/facebook/react-native/commit/75d9ba733f4a041e4320098b52903f69747df02b) by [@asklar](https://github.com/asklar))
- Fix sticky header not sticking on first render in ScrollView ([921c9ff165](https://github.com/facebook/react-native/commit/921c9ff165d47a73e9978df918b1761b95f9979d) by [@kacieb](https://github.com/kacieb))
- Fix ScrollView `getInnerViewNode` and `getInnerViewRef` ref methods ([6e36d046a3](https://github.com/facebook/react-native/commit/6e36d046a313c7961cc2f91e0422f4bf29005eb6) by [@vshab](https://github.com/vshab))
- Fix stalling UI due to a bug in KeyboardAvoidingView ([67309277fe](https://github.com/facebook/react-native/commit/67309277fe588c4dd64fe0c680d1d00d2f3fb2b6) by [@sammy-SC](https://github.com/sammy-SC))
- Avoid eating clicks/taps into ScrollView when using physical keyboard ([6d2a527984](https://github.com/facebook/react-native/commit/6d2a5279841886a9a14f82057202bf8950c3f917) by [@NickGerleman](https://github.com/NickGerleman))
- Fix nested FlatList not firing `onScrollDragEnd` and `onMomentum` methods ([46be292f67](https://github.com/facebook/react-native/commit/46be292f671c70aac4ecc178c96e3a2a6a3d16da) by [@kacieb](https://github.com/kacieb))
- Fix race condition in Debug Inspector shutdown ([d021000b9e](https://github.com/facebook/react-native/commit/d021000b9e358a9379ca5d6208f24757c0c8ce97) by [@MartinSherburn](https://github.com/MartinSherburn))
- Fixes layout of nodes with `YGDisplayNone` and `YGPositionTypeAbsolute` ([b15f8a30e7](https://github.com/facebook/react-native/commit/b15f8a30e75b54a8de5cc9456aaa07ebe8d8a176) by [@rozele](https://github.com/rozele))
- Fix changes of View visibilities ([4076293aa1](https://github.com/facebook/react-native/commit/4076293aa1059005704576530d8fe948b85e6a6d) by [@mdvacca](https://github.com/mdvacca))
- Fix: save connection url as class variable ([8facc865ab](https://github.com/facebook/react-native/commit/8facc865ab2ec032da34f6f755ee8870ee4741aa) by [@sirpy](https://github.com/sirpy))
- Fix Hermes build on folly version 2021.04.26.00 ([8eceee744e](https://github.com/facebook/react-native/commit/8eceee744ed9fee1eb2402f6b13bb606f6046f62) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix disabled handling for Text ([33ff4445dc](https://github.com/facebook/react-native/commit/33ff4445dcf858cd5e6ba899163fd2a76774b641) by [@lunaleaps](https://github.com/lunaleaps))
- Fix disabled prop not disabling onPress for voice assistant ([1c7d9c8046](https://github.com/facebook/react-native/commit/1c7d9c8046099eab8db4a460bedc0b2c07ed06df) by [@kacieb](https://github.com/kacieb))
- Fix unsafe cast and detect overflow in MapBuffer. ([e69f1c9f50](https://github.com/facebook/react-native/commit/e69f1c9f50c64bfcaeb684d763f02b9ccadec960))
- Fix(deps): bump metro to 0.66.2 + dedup ([e40f58272d](https://github.com/facebook/react-native/commit/e40f58272d51a40e7b5fa77c14767ddaf9ecc006) by [@Titozzz](https://github.com/Titozzz))

#### Android specific

- Fixed crash when using style `borderRadius: any` with `backgroundColor: null` ([42b6e6682c](https://github.com/facebook/react-native/commit/42b6e6682ce0fa9ac6eb5c1bf8ef0c224d2d80c0))
- Fix font weight numeric values ([3827ca6171](https://github.com/facebook/react-native/commit/3827ca61714b699c866e17d58b4697dde86e3d00) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fix wrong ripple color on Switch component ([1b0683533a](https://github.com/facebook/react-native/commit/1b0683533a07aa8875b4d494d8c2a3d18ef69438) by [@rnike](https://github.com/rnike))
- Fix Selected State does not announce when TextInput Component selected on Android ([7ee2acc6c8](https://github.com/facebook/react-native/commit/7ee2acc6c84c9ea6a51908495a6f14a26f346b29) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fix layout bug in ReactTextView. ([dec1b6ba15](https://github.com/facebook/react-native/commit/dec1b6ba15df8f255d30b696a7c08ef543d1d19c))
- Fix source build on Windows machines vol. 2 ([c37d49492b](https://github.com/facebook/react-native/commit/c37d49492b20c3815ca10133f971755f659b1b6a))
- Make NativeModules immediately initializable ([2bf866e401](https://github.com/facebook/react-native/commit/2bf866e4018ea72c1f1c92c806db85378c801fb7) by [@RSNara](https://github.com/RSNara))
- Restore `android_hyphenationFrequency` on `Text`. ([1433ed6333](https://github.com/facebook/react-native/commit/1433ed6333162189730d6f92cf80f3077ac69120) by [@yungsters](https://github.com/yungsters))
- Display the `testID` as the `resource-id` for black-box testing frameworks ([381fb395ad](https://github.com/facebook/react-native/commit/381fb395ad9d2d48717a5d082aaedbecdd804554) by [@jdeff](https://github.com/jdeff))
- Fix support for blobs larger than 64 KB ([f00e348ca7](https://github.com/facebook/react-native/commit/f00e348ca7f031c3577b1335a3163bc3e4eb4b41) by [@tomekzaw](https://github.com/tomekzaw))
- Fix building React Android on Windows. ([5dc15222b2](https://github.com/facebook/react-native/commit/5dc15222b256e32517df553c5fe7f6f5b7d0d31f))
- Fix race-condition on the initialization of ReactRootViews ([74a756846f](https://github.com/facebook/react-native/commit/74a756846fdab1ef7d183c4df3069a23fcd0d49e) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Animated images without loop no longer animate twice ([17aa1e320e](https://github.com/facebook/react-native/commit/17aa1e320e75393d46a54ec0fee8b068eeef142f) by [@comvenger-brandon](https://github.com/comvenger-brandon))
- Allow PlatformColor to work with border colors ([c974cbff04](https://github.com/facebook/react-native/commit/c974cbff04a8d90ac0f856dbada3fc5a75c75b49) by [@danilobuerger](https://github.com/danilobuerger))
- RCTSurfaceHostingView default background color is now consistent with RCTRootView ([f31497354b](https://github.com/facebook/react-native/commit/f31497354b72ad51b452a4b8bd3b70de16830025) by [@fkgozali](https://github.com/fkgozali))
- Invalidate TurboModules with infra-generated method queues on their method queues ([497eb578ab](https://github.com/facebook/react-native/commit/497eb578ab32614744a4ef61d7a6bca0d4251885) by [@RSNara](https://github.com/RSNara))
- Fix RefreshControl layout when removed from window ([e67811e7a6](https://github.com/facebook/react-native/commit/e67811e7a6df0937ed61d3367ab10fab95b31bfa) by [@janicduplessis](https://github.com/janicduplessis))
- Tab Accessibility Role had incorrect localization string ([80a10953f9](https://github.com/facebook/react-native/commit/80a10953f9de8cc251e9b8c1e59a173af87febb9) by [@adkenyon](https://github.com/adkenyon))
- Incorrect ScrollView offset on update ([a4526bcc3f](https://github.com/facebook/react-native/commit/a4526bcc3f89f5b9d3f86c814ade8f55c86e819e) by [@rnike](https://github.com/rnike))
- Modal's `onDismiss` prop will now be called successfully. ([d85d5d2e19](https://github.com/facebook/react-native/commit/d85d5d2e1974b463318e4c86da29a5ccdd60a977) by [@kkoudev](https://github.com/kkoudev))
- Fix DatePicker sizing issue ([84d55868e8](https://github.com/facebook/react-native/commit/84d55868e8b4e5a555d324c6162b8e38571524d8) by [@sammy-SC](https://github.com/sammy-SC))
- First press not working after pull to refresh ([c4950610e4](https://github.com/facebook/react-native/commit/c4950610e40f2019c828bc99e29769cd4089c217) by [@rnike](https://github.com/rnike))
- Fix Codegen silently failing when Yarn is not installed, or when Yarn v2 is active. ([07e4953514](https://github.com/facebook/react-native/commit/07e4953514636aaadc5915944cc64c12028516f2) by [@ivanmoskalev](https://github.com/ivanmoskalev))
- Make codegen more reliable on iOS ([12fccdeea3](https://github.com/facebook/react-native/commit/12fccdeea33324b8ddaa3ac0e2dbf81a44ca1eb2) by [@janicduplessis](https://github.com/janicduplessis))
- Fix crash in RCTCoreModulesClassProvider during quit ([2f62c2892d](https://github.com/facebook/react-native/commit/2f62c2892d9979f80752350d1b949f2770511956) by [@appden](https://github.com/appden))
- Fix an issue calling stopSurface in bridgeless mode before surface is started ([81096901a8](https://github.com/facebook/react-native/commit/81096901a8a6da75744cef7b663ccea2ff9c4c09))
- Move hermes to a separate podspec ([0959ff36d1](https://github.com/facebook/react-native/commit/0959ff36d1f3264e117021eb1999d0bdb71377c3) by [@janicduplessis](https://github.com/janicduplessis))
- Fix cli bundle platform for Mac Catalyst in `react-native-xcode.sh` ([b496a531e0](https://github.com/facebook/react-native/commit/b496a531e0b4b5d828077b0e7dff43dd28fed5eb) by [@robertying](https://github.com/robertying))
- Fix `prefetchImageWithMetadata` redbox([f27e305056](https://github.com/facebook/react-native/commit/f27e305056152ff9ad7aeb9018bf289d51719eb9) by [@p-sun](https://github.com/p-sun))
- Roll out RCTNetworking extraneous NativeModule call removal ([0e0d2e84f5](https://github.com/facebook/react-native/commit/0e0d2e84f56ea233e72d980ff6bd9797df250553) by [@RSNara](https://github.com/RSNara))
- Fix Hermes + no Flipper build on Xcode 12.5 ([b9243e00e3](https://github.com/facebook/react-native/commit/b9243e00e30be057a45af6ed1916af4328c458e4) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix(hermes): fixed hermes build on iOS ([59abb5f378](https://github.com/facebook/react-native/commit/59abb5f378e116288cdea2f619de0c128bb0b0eb) by [@Titozzz](https://github.com/Titozzz))
- Fix builds on Xcode 12.5 ([36b58a824e](https://github.com/facebook/react-native/commit/36b58a824ea20daa22fe7c528a3bf0ff4e6a4cb5) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix running React Native project with Xcode 12 in Release on iPhone Simulator ([fdcacd7f76](https://github.com/facebook/react-native/commit/fdcacd7f76ea8ca6dafda32ac431c8adc7bdad00) by [@grabbou](https://github.com/grabbou))

## v0.64.2

### Changed

- Find-node.sh supports Homebrew on M1 ([502b819049](https://github.com/facebook/react-native/commit/502b81904998b800f2d960bb4a8e244988c72958) by [@dulmandakh](https://github.com/dulmandakh))
- Refactor UIManagerHelper.getUIManager to return null when there's no UIManager registered ([b0e8c1eac0](https://github.com/facebook/react-native/commit/b0e8c1eac0a9edda12ecfa264209a8b3222afe27) by [@mdvacca](https://github.com/mdvacca))

### Fixed

- Fix ScrollViewStickyHeader to push up header above it ([d754bdefc6](https://github.com/facebook/react-native/commit/d754bdefc68ff757ac2b5a2ffa38d5aad234d484) by [@kacieb](https://github.com/kacieb))

#### Android specific

- Font family is not apply when secureTextEntry is true ([cda77c77dd83cba07e6c2e56e938c3e4f7faf8fc](https://github.com/facebook/react-native/commit/cda77c77dd83cba07e6c2e56e938c3e4f7faf8fc) by [@hank121314](https://github.com/hank121314))
- Dimension update events are now properly sent following orientation change ([a6a4d3365f17332e367c34357a07a73f97d6ec83](https://github.com/facebook/react-native/commit/a6a4d3365f17332e367c34357a07a73f97d6ec83) by [@ajpaulingalls](https://github.com/ajpaulingalls))

## v0.64.1

### Fixed

#### iOS specific

- Fixes to ensure Xcode 12.5 builds ([cf8a364767](https://github.com/facebook/react-native/commit/cf8a364767df830d7255339741350bb53ab1a68a), [1c4ac48a55](https://github.com/facebook/react-native/commit/1c4ac48a55cf0703f0c8a32cbb07474a2d126f3e) and [76f45d35e7](https://github.com/facebook/react-native/commit/76f45d35e710f84a1cc44c90bc128494bc4280ce) by [@kelset](https://github.com/kelset))

### Security

- Update validateBaseUrl to use latest regex ([33ef82ce6d](https://github.com/facebook/react-native/commit/33ef82ce6dfd31e1f990d438c925a0e52723e16b) by [@FBNeal](https://github.com/FBNeal))

## v0.64.0

### Breaking

- Enable `inlineRequires` by default in new projects' `metro.config.js`. Gives a performance benefit but slightly different JS execution order ([959365a902](https://github.com/facebook/react-native/commit/959365a90216ee14d0f8b5d2f4653a1ab4c10d7e) by [@GantMan](https://github.com/GantMan))
- Minimum supported Node version changed to 12 ([4b92e2e53d](https://github.com/facebook/react-native/commit/4b92e2e53d9c79f5b5858b3eb0d1654da79a4a68) by [@safaiyeh](https://github.com/safaiyeh))
- Remove deprecated `CameraRoll` API (deprecated in 0.61) ([824d3a9770](https://github.com/facebook/react-native/commit/824d3a977057b336d81237ec3cec3a49a9d5e34d) by [@seanyusa](https://github.com/seanyusa))
- Remove deprecated `CheckBox` component (deprecated in 0.60) ([dff17effe5](https://github.com/facebook/react-native/commit/dff17effe54dc58dda19fcc81ebacbd8f46e9005) by [@poteto](https://github.com/poteto))
- Removed `DEPRECATED_sendUpdatedChildFrames` prop from `ScrollView` component (deprecated in 0.47) ([345d0c1abb](https://github.com/facebook/react-native/commit/345d0c1abb1afe937a06982c4328caee57820832) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- On `Image`, `onLoad` event objects' `source.url` is now renamed to `source.uri`. ([74ab8f6e5a](https://github.com/facebook/react-native/commit/74ab8f6e5a61999f1132351ff52df43c91360a09) by [@yungsters](https://github.com/yungsters))

#### Android specific

- Remove support of Android API levels 16 through 20. The new minSDK version will be 21+ moving forward. ([973198667d](https://github.com/facebook/react-native/commit/973198667d7bbbf3b5d8890fc0a53dc99d0bce18), [25a40cbc61](https://github.com/facebook/react-native/commit/25a40cbc61e6c718d8cdea6d67fd82c6309963b1), [f829722b54](https://github.com/facebook/react-native/commit/f829722b54b34f145c41a95edfa5b522c837f9fc), [b133427778](https://github.com/facebook/react-native/commit/b13342777856bc4024d8489de790e7f90cd6b33b), [9b34aa261c](https://github.com/facebook/react-native/commit/9b34aa261c272d96829c9a7d5b166594b3162f9d), and [79d0a7d711](https://github.com/facebook/react-native/commit/79d0a7d71119122d2a2b9954e6038bbee119b8fa) by [@mdvacca](https://github.com/mdvacca); [49f10fd2e5](https://github.com/facebook/react-native/commit/49f10fd2e526b64294777357ab2fef8880739f26) and [a17ff44adc](https://github.com/facebook/react-native/commit/a17ff44adcf003dd4e4ef2301e1f80b77913f712) by [@JoshuaGross](https://github.com/JoshuaGross); [dd4298a377](https://github.com/facebook/react-native/commit/dd4298a3770eee7f66846ef0cc4c41a628b7bf01) by [@safaiyeh](https://github.com/safaiyeh))
- Fix ReadableArray null annotations. Possibly breaking change for Kotlin apps. ([d76556543f](https://github.com/facebook/react-native/commit/d76556543f96f4d739be3a708b8f6314bb32cc87) by [@dulmandakh](https://github.com/dulmandakh))
- On `Image`, `onLoad` and `onError` event objects will no longer have an extra `uri` property. ([74ab8f6e5a](https://github.com/facebook/react-native/commit/74ab8f6e5a61999f1132351ff52df43c91360a09) by [@yungsters](https://github.com/yungsters))
- Deletes the method PlayTouchSound method from UIManagerModule, this method was moved to the SoundManagerModule class. ([d0c4c5eaf9](https://github.com/facebook/react-native/commit/d0c4c5eaf90430c7004621d1596c5f2a55ad03e0) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Remove `calculateChildFrames` from `RCTScrollView` ([62aa84a325](https://github.com/facebook/react-native/commit/62aa84a3257bd3c513df3fcb4b4eaa350ecf77bb) by [@PeteTheHeat](https://github.com/PeteTheHeat))

### Deprecated

#### Android specific

- Deprecated method `UIManagerModule.getUIImplementation`. This method will not be part of the new architecture of React Native. ([fe79abb32c](https://github.com/facebook/react-native/commit/fe79abb32ca3425ff689b7641d9200461ea8166d) by [@mdvacca](https://github.com/mdvacca))

### Added

- Adds the Hermes runtime bytecode version number to the JS bundle requestURL. This allows Metro with Bytecode to work with prebuilt binaries. ([34c405462f](https://github.com/facebook/react-native/commit/34c405462f890afbccdfeaa7804791f7e9bcaa83))
- TextInput now supports `onPressIn` and `onPressOut`. ([b7b0e23202](https://github.com/facebook/react-native/commit/b7b0e232028723794af4c79fc6366c483ae2350b) by [@yungsters](https://github.com/yungsters))
- Allow setting a custom performance logger in XMLHttpRequest ([57b10f759e](https://github.com/facebook/react-native/commit/57b10f759efed786b46cfe082367f929aa2925d3) by [@rubennorte](https://github.com/rubennorte))
- Add mock for `DevSettings` to jest preset ([a50f736bb6](https://github.com/facebook/react-native/commit/a50f736bb6ade9ea9caae45e41ca4b92f6707b17) by [@MarcoScabbiolo](https://github.com/MarcoScabbiolo))
- Added Inspector overlay support for Pressable ([8ac467c51b](https://github.com/facebook/react-native/commit/8ac467c51b94c82d81930b4802b2978c85539925) by [@yungsters](https://github.com/yungsters))
- Introduce NativeModulePerfLogger ([0486640571](https://github.com/facebook/react-native/commit/0486640571c89a0ce067c0437655a6b375308bcd) by [@RSNara](https://github.com/RSNara))
- Add default `titlePlaceholder` in template configuration. ([8ffa180d80](https://github.com/facebook/react-native/commit/8ffa180d80b9c9acb76a0631b5a709d2c0adcd86) by [@Esemesek](https://github.com/Esemesek))
- Modified `renderApplication` to forward `initialProps` to `WrapperComponent` ([4f5a092bf6](https://github.com/facebook/react-native/commit/4f5a092bf68a0cd825328ce4a1e6bb41a8fad2e3) by [@rubennorte](https://github.com/rubennorte))
- Add warning to `VirtualizedList` when incorrectly using nested Lists or custom scroll components ([7f2515ece8](https://github.com/facebook/react-native/commit/7f2515ece8833f7a8adba025ef544013f89ae26f) by [@kacieb](https://github.com/kacieb))
- Add native module for loading split JS bundles in development ([fca3a39da5](https://github.com/facebook/react-native/commit/fca3a39da5f1c31514e8969738e7b2c2d22bc230) by [@makovkastar](https://github.com/makovkastar))
- Added `listenerCount()` to `DeviceEventEmitter` and `NativeEventEmitter`. ([b11d6ecbb8](https://github.com/facebook/react-native/commit/b11d6ecbb8bb2f0d6f423be6775e587f4e9b1c4d) by [@yungsters](https://github.com/yungsters))

#### Android specific

- Upgrade Hermes to version 0.7 and turn on ES6 Proxy support ([776a415d98](https://github.com/facebook/react-native/commit/776a415d98dffd04b11200812a32204aa1c5e157) and [bb003816a3](https://github.com/facebook/react-native/commit/bb003816a389b8655c53fa34444417c14516459c) by [@Huxpro](https://github.com/Huxpro), [a28dd38909](https://github.com/facebook/react-native/commit/a28dd3890974d699070f08ab43781324411e6f5c) by [@janicduplessis](https://github.com/janicduplessis))
- Add support for `shadowColor` on API level >= 28 ([cfa4260598](https://github.com/facebook/react-native/commit/cfa42605989eee5a9de42bdb1259fb7f4d9451fb) by [@IjzerenHein](https://github.com/IjzerenHein))
- Add `android_hyphenationFrequency` prop to Text component ([0fda91ffff](https://github.com/facebook/react-native/commit/0fda91ffffa4972ebe58e3d0b610692a1286eaa1) and [7d8aeb4955](https://github.com/facebook/react-native/commit/7d8aeb4955a4101ca7e8e486f935309c21ab76ff) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Add `accessibilityHint` to TouchableNativeFeedback ([72285d808d](https://github.com/facebook/react-native/commit/72285d808dfce748287a19e2620d58517a5f76e7) by [@CMDadabo](https://github.com/CMDadabo))
- Adds support for the `onProgress` event on `Image` ([fa0e6f8051](https://github.com/facebook/react-native/commit/fa0e6f8051d2208af467b789a2a9306ec7ddad76) by [@yungsters](https://github.com/yungsters))
- ScrollView now supports `contentOffset` ([ed29ba13f9](https://github.com/facebook/react-native/commit/ed29ba13f97f240c91fdf6c0ef3fb601046697b9) by [@JoshuaGross](https://github.com/JoshuaGross))
- Add an explicit NDK version to Android template ([18ffe12203](https://github.com/facebook/react-native/commit/18ffe12203d03b4e960d61d7bb50cd02bba94663) by [@safaiyeh](https://github.com/safaiyeh))
- Exposed `getFlex` method as part of ReactShadowNode API ([6570f7887b](https://github.com/facebook/react-native/commit/6570f7887b8824705ae09b5653d631428e17bc5f) by [@mdvacca](https://github.com/mdvacca))
- Add `\*.hprof` files to gitignore ([69ce9c21d4](https://github.com/facebook/react-native/commit/69ce9c21d433a23ffb9934062b46fa64277ee255) by [@enesozturk](https://github.com/enesozturk))
- Move `DevSettingsActivity` from main to debug ([d8e6c45782](https://github.com/facebook/react-native/commit/d8e6c45782a5c9132bb7ec315fe0b9ba3999e830) by [@invalid-email-address](https://github.com/invalid-email-address))

#### iOS specific

- `PlatformColor`: add missing `clearColor` ([b7167c23fc](https://github.com/facebook/react-native/commit/b7167c23fc052f8d9f8c27a7f4ad9c5cdf51281e) by [@Simek](https://github.com/Simek))
- Update template to Xcode 12 ([6685aba462](https://github.com/facebook/react-native/commit/6685aba462699c696cb6ac95626b9592deb292fc) by [@janicduplessis](https://github.com/janicduplessis))
- Add `importantForAccessibility` to `AccessibilityProps` ([fd660fd0c5](https://github.com/facebook/react-native/commit/fd660fd0c50a0acca730bd1ecd427e574bbe81c7) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- Allow hotkeys to be used without command key ([f2b9ec7981](https://github.com/facebook/react-native/commit/f2b9ec798172db76dfb55f390e1fcea90dd341da) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add `disableButtonsIndices` option to `ActionSheetIOS` component ([a7c1c5aff2](https://github.com/facebook/react-native/commit/a7c1c5aff24671bba609caeb82092a8de3d3b232) by [@lukewalczak](https://github.com/lukewalczak))
- Add `showSoftInputOnFocus` to `TextInput` ([d54113d8c4](https://github.com/facebook/react-native/commit/d54113d8c4bcd0e0c7a09acca60819724eb69926) by [@gurs1kh](https://github.com/gurs1kh))
- Added hostname to loading banner. ([96999339b6](https://github.com/facebook/react-native/commit/96999339b6a7aeabd0cd706ef7736fd91d9ecf80) by [@rickhanlonii](https://github.com/rickhanlonii))
- Allow iOS `PlatformColor` strings to be ObjC or Swift UIColor selectors ([25793eab56](https://github.com/facebook/react-native/commit/25793eab56217a9961620761ea65ec2fcb97dcb0) by [@tom-un](https://github.com/tom-un))
- Add Dark Mode support to loading banner ([94c45af136](https://github.com/facebook/react-native/commit/94c45af136f44245b5f2e56bded60c8ebd9b1235) by [@rickhanlonii](https://github.com/rickhanlonii))
- Allow image loaders to enable/disable image telemetry ([e37708dfb6](https://github.com/facebook/react-native/commit/e37708dfb605dd9ee9f4b2dac5d841d98b7d376c) by [@p-sun](https://github.com/p-sun))
- Add `RCTDevSplitBundleLoader` native module ([ad879e50bc](https://github.com/facebook/react-native/commit/ad879e50bcd51caca76b1073720f2b63df485ff1) by [@cpojer](https://github.com/cpojer))

### Changed

- Update flipper to 0.75.1 ([3399896ae7](https://github.com/facebook/react-native/commit/3399896ae756719b238e837001077a46508849be) by [@janicduplessis](https://github.com/janicduplessis))
- Refined Flow type for `Text` component. ([a911efaecd](https://github.com/facebook/react-native/commit/a911efaecd005237816ddb480218eb5388460d16) by [@yungsters](https://github.com/yungsters))
- Changed type definition of IPerformanceLogger from object to interface ([b90f4d978f](https://github.com/facebook/react-native/commit/b90f4d978fa27e37926d9f4a1d13c9168243798c) by [@rubennorte](https://github.com/rubennorte))
- Removed `fbjs` dependency from `react-native`. ([54e19a6b7f](https://github.com/facebook/react-native/commit/54e19a6b7f217ffc0611e660f2a6b1a8ad14775b) by [@yungsters](https://github.com/yungsters))
- Refined `ImageSource` Flow type for array-variant and headers. ([a0dc252dc8](https://github.com/facebook/react-native/commit/a0dc252dc89699f7bd0d733642b98762d0db423a) by [@yungsters](https://github.com/yungsters))
- Some warnings changed to use `console.warn` without the "Warning:" prefix. ([982272932c](https://github.com/facebook/react-native/commit/982272932cee3be599076bd18b290bc812285533) by [@yungsters](https://github.com/yungsters))
- Core/Differ: detect and optimize reparenting ([1e4d8d902d](https://github.com/facebook/react-native/commit/1e4d8d902daca8e524ba67fc3c1f4b77698c4d08) by [@JoshuaGross](https://github.com/JoshuaGross))
- Improve "not a registered callable module" error message ([e27d656ef3](https://github.com/facebook/react-native/commit/e27d656ef370958c864b052123ec05579ac9fc01) by [@vonovak](https://github.com/vonovak))
- Use `VirtualizedList`'s `onEndReachedThreshold` default value when null is provided ([10b4b9505a](https://github.com/facebook/react-native/commit/10b4b9505a51f8bf3fbc12d296a087b784a9201a) by [@fatalsun](https://github.com/fatalsun))
- Migrate large amount of modules to flow strict and strict-local ([4409642811](https://github.com/facebook/react-native/commit/4409642811c787052e0baeb92e2679a96002c1e3) by [@rubennorte](https://github.com/rubennorte))
- Enable exact objects by default in the project template Flow config ([050a7dd019](https://github.com/facebook/react-native/commit/050a7dd019be435b848de0a86030599d83f8791d) by [@rubennorte](https://github.com/rubennorte))
- Minor fix in Hermes Inspector cli tool help message ([6ffb983f83](https://github.com/facebook/react-native/commit/6ffb983f83afdee5d9290c683c5060d2a959818d))
- Updated the React Hooks ESLint Plugin in the community ESLint config ([ac87e90fa5](https://github.com/facebook/react-native/commit/ac87e90fa517676440c1adf9575cb48f90de8069) by [@gaearon](https://github.com/gaearon))
- Don't scroll to `initialScrollIndex` if `contentOffset` is provided to the same `VirtualizedList` ([3346ac7f96](https://github.com/facebook/react-native/commit/3346ac7f96d2fd3f77dca5acb283b28e02ad21fa) by [@markv](https://github.com/markv))
- Migrated `VirtualizedList` legacy context implementation to `React.Context`. ([7bd694fc6f](https://github.com/facebook/react-native/commit/7bd694fc6f4bb027b6d7ee04034cad41a43e5695) by [@yungsters](https://github.com/yungsters))
- Changed Flow type of `BackHandler` to be more specific. ([a903d1b86a](https://github.com/facebook/react-native/commit/a903d1b86ab56163abcdcb584f335949ba0c85fc) by [@Naturalclar](https://github.com/Naturalclar))
- Updated transitive dependency `kind-of` to 6.0.3 to resolve vulnerability ([abde0154ba](https://github.com/facebook/react-native/commit/abde0154ba4247d2c9f1451b5de8b3cba1abd316) by [@TheSavior](https://github.com/TheSavior))
- Upgrade eslint-config dependencies. ([93019dc190](https://github.com/facebook/react-native/commit/93019dc19072776053a88f9ab595e435b83fead0) by [@wcandillon](https://github.com/wcandillon))
- Upgrade to Jest 25 ([f248ba1c8b](https://github.com/facebook/react-native/commit/f248ba1c8b15a12a0c590ce8211855cde31defe8) by [@cpojer](https://github.com/cpojer))
- Use `React.Children.count` for counting children of `TextInput` ([92160f3144](https://github.com/facebook/react-native/commit/92160f3144dcfa510ff14b5f2eb231643f107af9) by [@vonovak](https://github.com/vonovak))
- Annotate <Image> components in QPL logging using ImageAnalyticsTagContext ([60b7a3085c](https://github.com/facebook/react-native/commit/60b7a3085c0d83c126023b98e666ecda6f769454) by [@p-sun](https://github.com/p-sun))
- Upgrade to React 17 ([24bca492c3](https://github.com/facebook/react-native/commit/24bca492c349ab90d40f9444df0f477145a4c311) by [@rickhanlonii](https://github.com/rickhanlonii))
- Made promise polyfill conditionalized on Hermes ([0a28b34dac](https://github.com/facebook/react-native/commit/0a28b34dacb91a7e74cd5feec59cf8f8fb0487c9) by [@Huxpro](https://github.com/Huxpro))
- Flow: Remove type union in PickeriOS/PickerNativeComponent ([3113e47b9b](https://github.com/facebook/react-native/commit/3113e47b9bc92e3b0efb96db776f650848093dfc) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Flow: export ColorValue from StyleSheet instead of StyleSheetTypes ([0a67133124](https://github.com/facebook/react-native/commit/0a6713312467d3f5b5dc993e91db9e7b1aa4fc8c))
- Forward URL parameters from main bundle to hot reloaded bundles ([b4785e5144](https://github.com/facebook/react-native/commit/b4785e514430dc3ba45ed6d136ec63574be88e26) by [@motiz88](https://github.com/motiz88))
- Add package name / bundle ID to bundle URL in development ([9b5359133b](https://github.com/facebook/react-native/commit/9b5359133b46b16be200e37dba0b03d82b73b4a0) by [@motiz88](https://github.com/motiz88))

#### Android specific

- Bump Gradle Wrapper to 6.7 ([8988a073b4](https://github.com/facebook/react-native/commit/8988a073b48df0f0cd4a7126edf1a421f4537d58), [5bc67b658e](https://github.com/facebook/react-native/commit/5bc67b658e581e0176deb7ed95b51a5c1cbe65c2), and [3a8559b86c](https://github.com/facebook/react-native/commit/3a8559b86c3c0b0ab6d6c6904c6efd97ab2c7b38) by [@friederbluemle](https://github.com/friederbluemle); [e559aee642](https://github.com/facebook/react-native/commit/e559aee64275126eaa135486e6bf09138be70f4d) and [e9fd93f53f](https://github.com/facebook/react-native/commit/e9fd93f53f8b14f921578cd401b3a6529e4e0c9f) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Android Gradle Plugin to 4.1.0 ([cf8368f204](https://github.com/facebook/react-native/commit/cf8368f2046ae1ff0f6b02bb6857eeeff8f57d7d) and [553fb8b28d](https://github.com/facebook/react-native/commit/553fb8b28d0ad332d75a944d244832be3390b6ba) by [@friederbluemle](https://github.com/friederbluemle), [dfa9db49e3](https://github.com/facebook/react-native/commit/dfa9db49e34c6f54c04148b877de938bf103a059) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Okio to 1.17.5 ([1e78e0655d](https://github.com/facebook/react-native/commit/1e78e0655d53ac947f523bcadf9c5339ab07bbb8) by [@dulmandakh](https://github.com/dulmandakh))
- Make Android versionCodeOverride for new apps using the template human-readable ([e1bf515ae8](https://github.com/facebook/react-native/commit/e1bf515ae8e77fb24f76037d9f22e903799fb637) by [@gedeagas](https://github.com/gedeagas))
- Bump SoLoader to 0.9.0 ([7465239230](https://github.com/facebook/react-native/commit/7465239230881f453d64364d51272f28614c8653) by [@dulmandakh](https://github.com/dulmandakh))
- Update Okhttp to version 3.12.12 ([0f6fcb2c27](https://github.com/facebook/react-native/commit/0f6fcb2c2788dc7150f6c3673a8f4f9d8f929441) by [@halaei](https://github.com/halaei))
- Update Android build tools to 29.0.3 ([e629e94b46](https://github.com/facebook/react-native/commit/e629e94b466ebbd5924b1d4493c026004dad707d) by [@friederbluemle](https://github.com/friederbluemle))
- ViewCommands on Android now execute earlier, as a perf optimization. ([c6b9cc36da](https://github.com/facebook/react-native/commit/c6b9cc36da4f7d190d05122048aa4ada9c152b73) by [@JoshuaGross](https://github.com/JoshuaGross))
- Effect of `blurRadius` now more closely matches other platforms. ([64860972be](https://github.com/facebook/react-native/commit/64860972be828fb601acbef11b4c2dbc672dee8a) by [@yungsters](https://github.com/yungsters))
- Migrate Android tests to Robolectric v4 ([6a78b32878](https://github.com/facebook/react-native/commit/6a78b32878aea1b0dac98ff36378fb9392d4aeb1) by [@jselbo](https://github.com/jselbo), [d373a8d88c](https://github.com/facebook/react-native/commit/d373a8d88c30af910133d97ae973d256c4479929) and [18f7abae07](https://github.com/facebook/react-native/commit/18f7abae07b8ea60c7530a5d9f34541c50f5edd9) by [@fkgozali](https://github.com/fkgozali))
- Get ripple drawables by id instead of by name ([c8ed2dbbb2](https://github.com/facebook/react-native/commit/c8ed2dbbb287deed05a8782fb8665c1edf45bbac) by [@vonovak](https://github.com/vonovak))
- `TextInput`: Set `caretHidden` default value to `true` on Xiaomi devices to fix the crash ([b5b4a70410](https://github.com/facebook/react-native/commit/b5b4a7041027fd767850a564b5d80fa4a98ba2a2))
- Update loading banner text and colors ([6afc984e81](https://github.com/facebook/react-native/commit/6afc984e8187ac91f780f125dad4421576131c83) by [@makovkastar](https://github.com/makovkastar))
- Declare all attrs used in res targets ([05abbd245c](https://github.com/facebook/react-native/commit/05abbd245c2326b12d24698bb13007a7ce11e586) by [@IanChilds](https://github.com/IanChilds))

#### iOS specific

- Upgraded JSI with a new HERMES_ENABLE_BITCODE flag ([311d4e9ef0](https://github.com/facebook/react-native/commit/311d4e9ef080aa429f840236cc23c013c0ae644c) by [@grabbou](https://github.com/grabbou))
- Remove main queue execution of constantsToExport in NativeModules ([d7ac21cec5](https://github.com/facebook/react-native/commit/d7ac21cec5492e180fbf3817af7be64ab121cb75) by [@RSNara](https://github.com/RSNara))
- Updated loading banner messages and color ([3729fe8de0](https://github.com/facebook/react-native/commit/3729fe8de0109c80014f6c20fae8b949b3628de2) by [@rickhanlonii](https://github.com/rickhanlonii))
- Speed up loading banner animations ([3fb37b4326](https://github.com/facebook/react-native/commit/3fb37b4326090def3aea43bd8189a0df648ccb34) by [@rickhanlonii](https://github.com/rickhanlonii))
- Shrink loading bar down to not cover safe area. ([f0dfd35108](https://github.com/facebook/react-native/commit/f0dfd35108dd3f092d46b65e77560c35477bf6ba) by [@rickhanlonii](https://github.com/rickhanlonii))
- Build macOS framework and add CocoaPods podspec ([ffa3d7f638](https://github.com/facebook/react-native/commit/ffa3d7f638c820dc208320193e6ba65667d751eb) by [@alloy](https://github.com/alloy))
- Set `NSAllowsArbitraryLoads` to `false` by default in template ([7b61a968fd](https://github.com/facebook/react-native/commit/7b61a968fd774a6ca2196a731b6cec4282ab25cc) by [@wddwycc](https://github.com/wddwycc))

### Removed

- `Text.viewConfig` is no longer exported. ([06ce643565](https://github.com/facebook/react-native/commit/06ce64356594a921cd9ae4f71c15dd56dd0e53a3) by [@yungsters](https://github.com/yungsters))
- Removed `once()` and `removeCurrentListener()` from `DeviceEventEmitter` and `NativeEventEmitter`. ([87a2e29f59](https://github.com/facebook/react-native/commit/87a2e29f5928c2e09ac9a98c54732d5f697d8e61) by [@yungsters](https://github.com/yungsters))
- Removed tvOS related files from the template ([df03228a61](https://github.com/facebook/react-native/commit/df03228a61881cdfa520fa6d8a9d9cfb6e77fdde) by [@Naturalclar](https://github.com/Naturalclar))

#### Android specific

- Remove undocumented ColorAndroid function ([411c344794](https://github.com/facebook/react-native/commit/411c3447946c18743476e7d613358233464d6f58) by [@tom-un](https://github.com/tom-un))

### Fixed

- Fix handling of very deeply nested data across the bridge ([a8c90e6af4](https://github.com/facebook/react-native/commit/a8c90e6af4a4e5ac115016a3e8977ecff90e99a0) by [@mhorowitz](https://github.com/mhorowitz))
- Prevent TypeError in TaskQueue when cancelling a started but not resolved promise. ([14042fb76f](https://github.com/facebook/react-native/commit/14042fb76fee3573529d590ec6f8ad216aa0b820) by [@robwalkerco](https://github.com/robwalkerco))
- Fix typo in `ActionSheetManager` invariant message ([9c353b5ab0](https://github.com/facebook/react-native/commit/9c353b5ab060be9392a7aaf437bba4ffc56d78ca) by [@sweatherall](https://github.com/sweatherall))
- `TouchableHighlight` now correctly fires `onPress` when pressed for >500ms, when `onLongPress` is not supplied. ([bdf3c79110](https://github.com/facebook/react-native/commit/bdf3c7911007f547101d753903da11ea4ee095f9) by [@yungsters](https://github.com/yungsters))
- `Pressability` now consistently fires `onPressIn` and `onPressOut`, even without an `onPress`. ([0c392bc405](https://github.com/facebook/react-native/commit/0c392bc4052784de7497bf7b5eaf207b02409877) by [@yungsters](https://github.com/yungsters))
- Remove extraneous argument for `onResponderGrant` Flow type on `Text`. ([49015b0f5b](https://github.com/facebook/react-native/commit/49015b0f5bda83794b88b17dd3cbd834fa235b72) by [@yungsters](https://github.com/yungsters))
- Prevent `ScrollView` From Stealing Responder Capture When Using Physical Keyboard ([93e7a7a70d](https://github.com/facebook/react-native/commit/93e7a7a70dc2f41fccd3c1e4cce80d92913c4243) by [@NickGerleman](https://github.com/NickGerleman))
- Fix failure when debugging code in a browser; was caused by `performanceNow()` function. ([db474a47b7](https://github.com/facebook/react-native/commit/db474a47b70e4fa50f594f4dea8a2f531ca9fc07) by [@zerkella](https://github.com/zerkella))
- Fix test renderer mocks to use the `displayName` more often. ([4b935ae95f](https://github.com/facebook/react-native/commit/4b935ae95f09e4a1eb1e5ac8089eb258222a0f8b) by [@rickhanlonii](https://github.com/rickhanlonii))
- Make sure `LogBox` is not included in production bundles ([d3b937f990](https://github.com/facebook/react-native/commit/d3b937f990012a31b8d917e220f4ed2f0a4fd2d3) by [@janicduplessis](https://github.com/janicduplessis))
- Mark `force` as an optional property of the PressEvent object ([ad2f98df8f](https://github.com/facebook/react-native/commit/ad2f98df8f2ad8aff1dcdc11b187f35b372e3f0e) by [@Simek](https://github.com/Simek))
- Fix invalid `event` objects from `onPressOut` in certain cases ([2c600b7c5a](https://github.com/facebook/react-native/commit/2c600b7c5a0e79bfc632b39b471e6ba774d7b0b3) by [@yungsters](https://github.com/yungsters))
- When Hermes debugger is enabled continue to send log messages to the console ([77ef8f881f](https://github.com/facebook/react-native/commit/77ef8f881f2e4067894b412f308e2a80042c946f) by [@MartinSherburn](https://github.com/MartinSherburn))
- Handle nullish `initialProps` correctly in `renderApplication` ([26c120c632](https://github.com/facebook/react-native/commit/26c120c6329d45e27318d82aaf5a50338bd6fa7d) by [@rubennorte](https://github.com/rubennorte))
- Fix Flow type of Touchable{Opacity,Bounce,Highlight} being exported as `any` ([de7f69a58e](https://github.com/facebook/react-native/commit/de7f69a58ed4e18887f4b9d4d853293fb136afb7) by [@draperunner](https://github.com/draperunner))
- Clarified the boundaries in error message of `scrollToIndex` ([78d2b3c813](https://github.com/facebook/react-native/commit/78d2b3c8138f54c2433958b0ad6b9f52ca59115a) by [@sasurau4](https://github.com/sasurau4))
- Fix jsi cmake include dirs ([f5d00e5a29](https://github.com/facebook/react-native/commit/f5d00e5a2922d35a0b44935592da5700518c422b) by [@ryantrem](https://github.com/ryantrem))
- Fix race condition in `KeyboardAvoidingView` ([b08fff6f86](https://github.com/facebook/react-native/commit/b08fff6f869e00c20c0dcdf7aca71284c2f276f0) by [@sammy-SC](https://github.com/sammy-SC))
- Fix clone issue in YogaNodeJNIBase ([2707c17b07](https://github.com/facebook/react-native/commit/2707c17b0727f241d404f4a21090021c27c66f2c) by [@pasqualeanatriello](https://github.com/pasqualeanatriello))
- Fix "Cannot read property 'getNativeScrollRef' of undefined" in createAnimatedComponent ([629e10e91b](https://github.com/facebook/react-native/commit/629e10e91b728c4251f1ed78a50df62820ce0dc4) by [@sammy-SC](https://github.com/sammy-SC))

#### Android specific

- Fix App Bundle/Release build missing index.android.bundle with gradle plugin 4.1.0/gradle 6.5 ([53f55001af](https://github.com/facebook/react-native/commit/53f55001afbf07494de0df064a92dfdd42f37c98) by [@tomoima525](https://github.com/tomoima525))
- Do not crash when `ScrollView` `snapToOffsets` array is empty ([d238da71aa](https://github.com/facebook/react-native/commit/d238da71aa8cdd7ce519de617a9a200406da794c) by [@makovkastar](https://github.com/makovkastar))
- Fixed `TextInput` not being selectable in `removeClippedSubviews` FlatLists ([12a50c0a44](https://github.com/facebook/react-native/commit/12a50c0a442b78d9095398d955bec307cfcb0f69) by [@hsource](https://github.com/hsource))
- Make nested `Text` components accessible as links ([b352e2da81](https://github.com/facebook/react-native/commit/b352e2da8137452f66717cf1cecb2e72abd727d7) by [@ejanzer](https://github.com/ejanzer))
- Move selection to the end of the text input on accessibility click ([f0e80ae229](https://github.com/facebook/react-native/commit/f0e80ae2292ebf7ce32666900007845724844fb5) by [@ejanzer](https://github.com/ejanzer))
- Fix secure text entry setting to always hide text ([f19372361f](https://github.com/facebook/react-native/commit/f19372361f22201a453ff38eb69c5fa052b57474) by [@smeenai](https://github.com/smeenai))
- Make promise NativeModule methods dispatch to NativeModules thread ([9c35b5b8c4](https://github.com/facebook/react-native/commit/9c35b5b8c4710dfe6a4b689a5565aa78ae5b37d3) by [@RSNara](https://github.com/RSNara))
- Fix `NoSuchMethodException` when calling `DisplayMetricsHolder.initDisplayMetrics` in Android API level <= 16 (though those Android versions are no longer supported) ([35128f45d1](https://github.com/facebook/react-native/commit/35128f45d1ba97010e437423d14fa5ea0faf5fa3) by [@mdvacca](https://github.com/mdvacca))
- Fixed error message in `DebugCorePackage.getModule` ([a71f37b951](https://github.com/facebook/react-native/commit/a71f37b951ca49c180b037ea8955851654b09afa) by [@TheWirv](https://github.com/TheWirv))
- ScrollView, HorizontalScrollView: do not ignore `null` `contentOffset` prop ([9e85b7ad88](https://github.com/facebook/react-native/commit/9e85b7ad889900cd57cd2f82286aa8e034b0a32b) by [@vonovak](https://github.com/vonovak))
- Picker - fix usage of setNativeSelectedPosition in onSelect ([078e386024](https://github.com/facebook/react-native/commit/078e386024474edc9b464f6c0fd8a1429e922289))
- Fix intermittent crash of ReactSlider on Android ([32888a8b4a](https://github.com/facebook/react-native/commit/32888a8b4a9d75b9d3f6cc4578ce6a6ccd932407) by [@mdvacca](https://github.com/mdvacca))
- Use actual constructor when throwing GradleScriptException ([8ef0f1d90b](https://github.com/facebook/react-native/commit/8ef0f1d90bbb2fa98e48ce89281718e5ac79365a))
- Fix `skewX` transform decomposition ([797367c089](https://github.com/facebook/react-native/commit/797367c0890a38ec51cfaf7bd90b9cc7db0e97c7) by [@wcandillon](https://github.com/wcandillon))
- Allow passing partial contentOffset to ScrollView on Android ([0348953914](https://github.com/facebook/react-native/commit/03489539146556ec5ba6ba07ac338ce200f5b0f4) by [@janicduplessis](https://github.com/janicduplessis))
- Check if NativeModules returned from CatalystInstanceImpl.getNativeModule are null before using them. ([9263eb5d38](https://github.com/facebook/react-native/commit/9263eb5d3864a42925b699343db2c09cc8934ed0) by [@RSNara](https://github.com/RSNara))
- Fix calculating view position within the window in split-screen mode ([b020e7c440](https://github.com/facebook/react-native/commit/b020e7c440f58dabd4cc64b72869f3ae9680ef30) by [@jakubkinst](https://github.com/jakubkinst))
- Text layout no longer ignores parent bounds ([025be8148a](https://github.com/facebook/react-native/commit/025be8148a9abc533a8ae108e49cfd3f4512c581) by [@yungsters](https://github.com/yungsters))
- Fixed excessive space in Text view with word-wrapping ([dda7f82261](https://github.com/facebook/react-native/commit/dda7f82261cc5684564e2c67071c13e379985308) by [@yungsters](https://github.com/yungsters))
- `Pressable`: ripple should be applied even when borderless == false ([44ec762e41](https://github.com/facebook/react-native/commit/44ec762e41029bf43530b1ff9b36ca3512c526e2) by [@vonovak](https://github.com/vonovak))
- Fix `ReadableNativeMap.getNullableValue` to match signature and return null instead of throwing ([1015194ba1](https://github.com/facebook/react-native/commit/1015194ba1a81eab99000d589914100e4b9ea037) by [@dulmandakh](https://github.com/dulmandakh))
- `Picker`: set color filter so that the arrow matches the text color ([bb8d0f5732](https://github.com/facebook/react-native/commit/bb8d0f57328a20c942991f2d19d86639a7791924) by [@ejanzer](https://github.com/ejanzer))
- `Modal`: fix crash when updating props after the activity disappeared ([7abcaafd66](https://github.com/facebook/react-native/commit/7abcaafd6600535825aa8330af7290ba8acea245) by [@mdvacca](https://github.com/mdvacca))
- Fix crash while measuring ReactSlider in Android API < 21 ([75e6f7961f](https://github.com/facebook/react-native/commit/75e6f7961fb3f6de6afbe79d49c42ad55fba1673) by [@mdvacca](https://github.com/mdvacca))
- Fix measureLayout function for VirtualTexts ([5c48c94f8c](https://github.com/facebook/react-native/commit/5c48c94f8c0441bc78a007f0ea0c5b2763ff6875) by [@mdvacca](https://github.com/mdvacca))
- Smoother scrolling in ScrollView, HorizontalScrollView ([10314fe621](https://github.com/facebook/react-native/commit/10314fe621e1649654e83df197adf657e0ca8363) by [@JoshuaGross](https://github.com/JoshuaGross))

#### iOS specific

- Synchronize RCTImageLoader loaders initialization ([edb6fa7979](https://github.com/facebook/react-native/commit/edb6fa79791beb804e450ca4a562a248abf730e5) by [@p-sun](https://github.com/p-sun))
- Make sure js bundle still exists at bundle-output path ([3a41f69f9c](https://github.com/facebook/react-native/commit/3a41f69f9ce1ab778112c0727a69a753fe36c77a) by [@janicduplessis](https://github.com/janicduplessis))
- Fix crash in WebSocket module ([748aa13747](https://github.com/facebook/react-native/commit/748aa137472d6080427f74bb686c795b925c7d43) by [@marksinkovics](https://github.com/marksinkovics))
- Align multi-line `TextInput` `onSubmitEditing` behavior: don't call onSubmitEditing when blurOnSubmit=false ([521b16730d](https://github.com/facebook/react-native/commit/521b16730dd07d80261086c2f33eed2a766d404e) by [@tido64](https://github.com/tido64))
- Fix passing react native path in Podfile template ([e599d6c5d3](https://github.com/facebook/react-native/commit/e599d6c5d338c1b4d1a0d988e0d9ff83c179fb54) by [@janicduplessis](https://github.com/janicduplessis))
- Call [RCTEventEmitter stopObserving] on correct method queue ([23717e48af](https://github.com/facebook/react-native/commit/23717e48aff3d7fdaea30c9b8dcdd6cfbb7802d5) by [@appden](https://github.com/appden))
- Persist Enable Fast Refresh across app launches ([845e9eaafb](https://github.com/facebook/react-native/commit/845e9eaafb08b4ca87a9987e840798e0ba011676) by [@stigi](https://github.com/stigi))
- Fix xcodebuild warnings in React-Core ([cb719a16cc](https://github.com/facebook/react-native/commit/cb719a16cc496b0cdb09d8d971b5e95cc8863b77))
- Fix that RCTModalHostView can't be dismissed while being presented ([8933724d7d](https://github.com/facebook/react-native/commit/8933724d7d0f9ec012b2708d8e737f02f03e4a6f) by [@Mi-ZAZ](https://github.com/Mi-ZAZ))
- Fix "'RCTBlobPlugins.h' file not found" when building iOS ([aaeffdb49a](https://github.com/facebook/react-native/commit/aaeffdb49a8412a98bb52477933fd208d1dcc096) by [@tido64](https://github.com/tido64))
- Improved text rendering on macOS Catalyst ([694e22de84](https://github.com/facebook/react-native/commit/694e22de847e5f789b7d5ffe472b63aabbd7a5b0) by [@andymatuschak](https://github.com/andymatuschak))
- Fixed showing Alert while closing a Modal ([f319ff321c](https://github.com/facebook/react-native/commit/f319ff321c4b7c0929b99e3ebe7e1ce1fa50b34c) by [@devon94](https://github.com/devon94))
- Fix `refreshControl` messes up navigationBar largeTitles ([1b0fb9bead](https://github.com/facebook/react-native/commit/1b0fb9bead4d158d14df5a994423d06716b5e377) by [@yogevbd](https://github.com/yogevbd))
- When Sec-WebSocket-Protocol header is empty vaulue, IIS server will return error 502. ([fd85b84a86](https://github.com/facebook/react-native/commit/fd85b84a863cea9f33e5b39230b27af53c1307e7) by [@bill2004158](https://github.com/bill2004158))
- Fix multiline `TextInput` crash when inserting/removing lots of text ([15dda0ab5a](https://github.com/facebook/react-native/commit/15dda0ab5a491dcc83539f9ef32c9896be41074a) by [@tido64](https://github.com/tido64))
- Group accessible views using the view hierarchy ([e2fd9d4f22](https://github.com/facebook/react-native/commit/e2fd9d4f22cda85c995c38875fc3a2a20a198c4a) by [@p-sun](https://github.com/p-sun))
- Fix Flow types for StatusBar showHideTransition ([e5a8f4270e](https://github.com/facebook/react-native/commit/e5a8f4270ea71749a5ce6bd7ae198f695edb4307) by [@Simek](https://github.com/Simek))
- Better error message when missing entry file ([e73208e2ca](https://github.com/facebook/react-native/commit/e73208e2ca59a2cf6a8a9c5e4e5b33afb5131f09) by [@petrbela](https://github.com/petrbela))
- Fix imports in `RCTUtilsUIOverride.h` ([b7e8f66795](https://github.com/facebook/react-native/commit/b7e8f667953c2bc65c25b00968051c063a684d01) by [@Fanghao](https://github.com/Fanghao))
- Fix skewX/skewY/perspective/matrix transforms. ([4b956fe5a6](https://github.com/facebook/react-native/commit/4b956fe5a6b3a05b1c2883efc82a95c2524aeb56) by [@wcandillon](https://github.com/wcandillon))
- Fix module lookup race condition on bridge invalidation. ([8ad810717e](https://github.com/facebook/react-native/commit/8ad810717ee1769aa5ff6c73e0c9bfa8c43a3bac) by [@fkgozali](https://github.com/fkgozali))
- Fix duration calculation for `RCTUIImageViewAnimated` ([12f8b2598f](https://github.com/facebook/react-native/commit/12f8b2598fa46533ea59834a0225cc9e36b20111))
- Cap loading banner percentage at 100% ([e27542bb13](https://github.com/facebook/react-native/commit/e27542bb13d1f8f422cd307c4d43148c8bd82bc0) by [@rickhanlonii](https://github.com/rickhanlonii))
- Delay loading banner message to prevent flashing messages ([2b771b0129](https://github.com/facebook/react-native/commit/2b771b0129f2ef921c7cdb9c952e004f931927c3) by [@rickhanlonii](https://github.com/rickhanlonii))
- Do not update loading banner message while hiding the banner ([131c497aa2](https://github.com/facebook/react-native/commit/131c497aa2c081f9dfd03e45b25fb7ae388b98bd) by [@rickhanlonii](https://github.com/rickhanlonii))
- Search en0 through en8 for the Metro Bundler's IP address when generating iOS debug builds ([b2b23a2017](https://github.com/facebook/react-native/commit/b2b23a20170d12f6d8bf2733b93d7f9ab9c6cb15))
- Migrate `frameInterval` to `preferredFramesPerSecond`, fixing Xcode warnings ([335f3aabe2](https://github.com/facebook/react-native/commit/335f3aabe28ec8f9b96fd695edabf0d5ab0b402a) by [@safaiyeh](https://github.com/safaiyeh))
- Animated image should animate at the same speed regardless of framerate ([b0d0e51a77](https://github.com/facebook/react-native/commit/b0d0e51a7724dcefe3ce1c2dfb334a731b2a385c) by [@p-sun](https://github.com/p-sun))
- Fix logging lifecycle when image is scrolled out and immediately back in ([1f95c9b62e](https://github.com/facebook/react-native/commit/1f95c9b62e306fdaf0ef351b02fb79713941259c) by [@p-sun](https://github.com/p-sun))
- Fix image instrumentation lifecycle on image cancel ([6cba4d2006](https://github.com/facebook/react-native/commit/6cba4d20068ef4ca9b9832e4c5cf71a7e361ddbe) by [@p-sun](https://github.com/p-sun))
- Break retain cycle in RCTLegacyViewManagerInteropCoordinator ([8f90ce26a5](https://github.com/facebook/react-native/commit/8f90ce26a55f2b1aab42d7c44b0d527321fa8c21) by [@sammy-SC](https://github.com/sammy-SC))
- Respect port information if available from RCTBundleURLProvider ([7d44959940](https://github.com/facebook/react-native/commit/7d44959940b7f7b03feefde0e9a15382f04dad6d) by [@jimmy623](https://github.com/jimmy623))
- Remove port from JSLocation when returning packager host ([12543d557f](https://github.com/facebook/react-native/commit/12543d557f00545a719b4dfd76cc0d0adfa37a01) by [@jimmy623](https://github.com/jimmy623))
- Remove requestToken being nil check from [RCTNetworkTask validateRequestToken] ([ffc90c7f92](https://github.com/facebook/react-native/commit/ffc90c7f92e63e1a53ed107833e3deed492ab435) by [@sammy-SC](https://github.com/sammy-SC))
- Remove unnecessary packager running check when saved JSLocation is empty ([bbb7bef539](https://github.com/facebook/react-native/commit/bbb7bef539f418bdb452e40987d399c9369df5a2) by [@jimmy623](https://github.com/jimmy623))
- Check whether packager is running in RCTBundleURLProvider for saved JSLocation ([3d882495d5](https://github.com/facebook/react-native/commit/3d882495d5e4415c2ebb8f4280e18e16025e0736) by [@jimmy623](https://github.com/jimmy623))
- Fix crash inside RCTRedBox when trying to present same UIViewController twice ([46c77dc296](https://github.com/facebook/react-native/commit/46c77dc296dfab754356cd9346a01dae8d4869f4) by [@sammy-SC](https://github.com/sammy-SC))
- Fix outdated CocoaPods version requirement in a React.podspec ([8a6ac1fef3](https://github.com/facebook/react-native/commit/8a6ac1fef369071405a3bf14a89924c66f28d192) by [@sunnylqm](https://github.com/sunnylqm))

## v0.63.4

### Changed

- [Maintenance] Bump detox to xcode 12 compatible version ([ccd4efac90](https://github.com/facebook/react-native/commit/ccd4efac90191e57b1dd6e7fff0da13e5764bcc4) by [@kelset](https://github.com/kelset))

#### Android specific

- Bump SoLoader to 0.9.0 ([7465239230](https://github.com/facebook/react-native/commit/7465239230881f453d64364d51272f28614c8653) by [@dulmandakh](https://github.com/dulmandakh))
- Update Okhttp to version 3.12.12 ([0f6fcb2c27](https://github.com/facebook/react-native/commit/0f6fcb2c2788dc7150f6c3673a8f4f9d8f929441) by [@halaei](https://github.com/halaei))
- ScrollView now supports `contentOffset` ([ed29ba13f9](https://github.com/facebook/react-native/commit/ed29ba13f97f240c91fdf6c0ef3fb601046697b9) by [@JoshuaGross](https://github.com/JoshuaGross))

### Fixed

#### Android specific

- Fix ReadableNativeMap.getNullableValue to match signature ([1015194ba1](https://github.com/facebook/react-native/commit/1015194ba1a81eab99000d589914100e4b9ea037) by [@dulmandakh](https://github.com/dulmandakh))
- Dimension update events are now properly sent following orientation change ([0e9296b95d](https://github.com/facebook/react-native/commit/0e9296b95da06789121f052e6cd6d7cac808464c) by [@ajpaulingalls](https://github.com/ajpaulingalls))
- Font family is not apply when secureTextEntry is true. ([00d9deaf6b](https://github.com/facebook/react-native/commit/00d9deaf6ba26c605694d303bb0cb072fceae5a1) by [@hank121314](https://github.com/hank121314))
- Fix App Bundle/Release build missing index.android.bundle with gradle plugin 4.1.0/gradle 6.5 ([53f55001af](https://github.com/facebook/react-native/commit/53f55001afbf07494de0df064a92dfdd42f37c98) by [@tomoima525](https://github.com/tomoima525))
- ScrollView, HorizontalScrollView: do not ignore `null` `contentOffset` prop ([9e85b7ad88](https://github.com/facebook/react-native/commit/9e85b7ad889900cd57cd2f82286aa8e034b0a32b) by [@vonovak](https://github.com/vonovak))
- SkewX transforms ([797367c089](https://github.com/facebook/react-native/commit/797367c0890a38ec51cfaf7bd90b9cc7db0e97c7) by [@wcandillon](https://github.com/wcandillon))
- Allow passing partial contentOffset to ScrollView on Android ([0348953914](https://github.com/facebook/react-native/commit/03489539146556ec5ba6ba07ac338ce200f5b0f4) by [@janicduplessis](https://github.com/janicduplessis))
- Set color filter so that the arrow matches the text color ([bb8d0f5732](https://github.com/facebook/react-native/commit/bb8d0f57328a20c942991f2d19d86639a7791924) by [@ejanzer](https://github.com/ejanzer))

#### iOS specific

- A crash in WebSocket module ([748aa13747](https://github.com/facebook/react-native/commit/748aa137472d6080427f74bb686c795b925c7d43) by [@marksinkovics](https://github.com/marksinkovics))
- Fixed showing Alert while closing a Modal ([f319ff321c](https://github.com/facebook/react-native/commit/f319ff321c4b7c0929b99e3ebe7e1ce1fa50b34c) by [@devon94](https://github.com/devon94))
- Bug with skewX/skewY/perspective/matrix transforms. ([4b956fe5a6](https://github.com/facebook/react-native/commit/4b956fe5a6b3a05b1c2883efc82a95c2524aeb56) by [@wcandillon](https://github.com/wcandillon))

## v0.63.3

### Added

#### iOS specific

- Ability to set which configuration to enable flipper for when using use_flipper! ([dc2df75426](https://github.com/facebook/react-native/commit/dc2df754267df3909631d81c22b9fcab58dfa241) by [@nicoburns](https://github.com/nicoburns))

### Changed

- Update Flipper to 0.54 ([d8b70b19b3](https://github.com/facebook/react-native/commit/d8b70b19b39ead4dd41895d666d116a43c56474e) by [@mweststrate](https://github.com/mweststrate))
- Removed default 130ms delay from Pressability and Pressable. ([86ffb9c41e](https://github.com/facebook/react-native/commit/86ffb9c41e033f59599e01b7ad016706b5f62fc8) by [@yungsters](https://github.com/yungsters))

### Fixed

#### Android specific

- `KeyboardDidHide` wrong `screenY` coordinates with `windowTranslucentStatus=true` ([45954ac5dc](https://github.com/facebook/react-native/commit/45954ac5dccdfe05de7553a0f08c4f0e66e3d62e) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fix Xiaomi TextInput crash in native ([07a597ad18](https://github.com/facebook/react-native/commit/07a597ad185c8c31ac38bdd4d022b0b880d02859))

#### iOS specific

- Prefetch images using a lower download priority ([058eeb43b4](https://github.com/facebook/react-native/commit/058eeb43b489f52183f081fb7232be683002a242) by [@p-sun](https://github.com/p-sun))
- Fix `RCTImageLoader` not using decoders provided. ([663b5a878b](https://github.com/facebook/react-native/commit/663b5a878be9faafd13b41c222a1bc2ac7bb3a65) by [@sjchmiela](https://github.com/sjchmiela))
- Support Swift based libraries using Xcode 12’s build system. ([6e08f84719](https://github.com/facebook/react-native/commit/6e08f84719c47985e80123c72686d7a1c89b72ed) by [@alloy](https://github.com/alloy))
- Fix "main.jsbundle does not exist" issue ([83777cb4fb](https://github.com/facebook/react-native/commit/83777cb4fb5dda89c430b7eff9cd1f28d2577831))
- Fixed headers in `Image.getSizeWithHeaders`. ([0bcc686c1c](https://github.com/facebook/react-native/commit/0bcc686c1cc90fd44de7a28e2f56ea20fe2f5123) by [@PaitoAnderson](https://github.com/PaitoAnderson))

### Security

- Fix security issues with `@react-native-community/cli` by bumping version ([001eb7cbd6](https://github.com/facebook/react-native/commit/001eb7cbd66c7dc1a302ee2a638c1cfc164538f4) by [@alexbrazier](https://github.com/alexbrazier))

## v0.63.2

### Fixed

- Restore Previous Behavior for StyleSheet Validation of Null/Undefined Styles ([e75557b48f](https://github.com/facebook/react-native/commit/e75557b48fbee1d136b8b7d1a78ea8f9b9467479) by [@NickGerleman](https://github.com/NickGerleman))

#### Android specific

- Set LogBox windowTranslucentNavigation to false ([23036b38bc](https://github.com/facebook/react-native/commit/23036b38bc4443c8db4865e5c2b21aca7ab4f92f) by [@Ashoat](https://github.com/Ashoat))
- Fix unable to run in debug mode on Android API < 21 ([7694b32a88](https://github.com/facebook/react-native/commit/7694b32a88078278457dd8721eb61da9c4ac0f5a) by [@Shywim](https://github.com/Shywim))

#### iOS specific

- Fix image cannot show in iOS 14 ([123423c2a9](https://github.com/facebook/react-native/commit/123423c2a9258c9af25ca9bffe1f10c42a176bf3))

## v0.63.1

### Added

- Added `minPressDuration` to `Pressable`. ([4aaf629982](https://github.com/facebook/react-native/commit/4aaf62998247bcfd8ebf369d73290096fde08012) by [@yungsters](https://github.com/yungsters))
- Support for array buffers in the JavaScriptCore implementation of JSI ([9c32140068](https://github.com/facebook/react-native/commit/9c32140068463739b91874689f741ea9630d8c3b) by [@ryantrem](https://github.com/ryantrem))

#### Android specific

- ProGuard rule for hermes ([449dc37720](https://github.com/facebook/react-native/commit/449dc37720b24d9d88661314424c9f982e70ec3a) by [@radko93](https://github.com/radko93))

### Fixed

- LogBox.ignoreAllLogs() should ignore logs ([f28c7505fa](https://github.com/facebook/react-native/commit/f28c7505fa5b4a7ddf1e9311d38dfcd15e8953a2) by [@rickhanlonii](https://github.com/rickhanlonii))

#### Android specific

- Fix font variant crash on Android < 4.4 ([f23feced42](https://github.com/facebook/react-native/commit/f23feced42abd1d18a12e413bf79a51bead61379) by [@Almouro](https://github.com/Almouro))
- Fix border-drawing when changing border-radius back to 0` ([7757ad0576](https://github.com/facebook/react-native/commit/7757ad05762284c059807d7d75fd03559e86f2b2) by [@IjzerenHein](https://github.com/IjzerenHein))
- Fix rounded border-drawing when border-radius is smaller than border-width` ([28dce3665d](https://github.com/facebook/react-native/commit/28dce3665d8a63e902c165c060400486fe6234f4) by [@IjzerenHein](https://github.com/IjzerenHein))

#### iOS specific

- TextInput color has the same default (#000) on iOS whether in light or dark mode ([a2f8b9c36e](https://github.com/facebook/react-native/commit/a2f8b9c36e5eba6bc354a2f53bf8d3ca11297d00) by [@JonnyBurger](https://github.com/JonnyBurger))
- Fixes TextInput shaking when typing Chinese ([9cdc19a936](https://github.com/facebook/react-native/commit/9cdc19a93669b37c0518bd32263e156ffc9193c7) by [@zhongwuzw](https://github.com/zhongwuzw))

## v0.63.0

### Breaking

- The `target` field of events is now a native component, not a react tag ([3b813cade1](https://github.com/facebook/react-native/commit/3b813cade1f5d6f248a39f6bbd983f68c5794fe6) by [@TheSavior](https://github.com/TheSavior))
- Modal: Remove support for `animated` prop (deprecated in 0.26) ([1e9db7bd6d](https://github.com/facebook/react-native/commit/1e9db7bd6df3055b9b81d23f15a54bb250621a41) by [@TheSavior](https://github.com/TheSavior))
- Alert: Remove deprecated support for passing callback as fourth argument to `Alert.prompt` (deprecated in 0.59) ([a26d622d04](https://github.com/facebook/react-native/commit/a26d622d04451d6872eed2491e5d3f7d4689824d) by [@TheSavior](https://github.com/TheSavior))
- Switch: Remove support for `thumbTintColor`, `tintColor`, `onTintColor` props (deprecated in 0.57) ([26912bd979](https://github.com/facebook/react-native/commit/26912bd9798aeb38931466b8ddcd3a48973b0528) by [@TheSavior](https://github.com/TheSavior))
- Multiple deprecations and breaking changes to `TextInputState`. Use native component refs instead of react tags ([6286270e4c](https://github.com/facebook/react-native/commit/6286270e4cb10b40cfd7c8193e31d965f6815150) by [@TheSavior](https://github.com/TheSavior))
- Bump supported Node engines to >= 10 ([f0c7178a3a](https://github.com/facebook/react-native/commit/f0c7178a3a24e7694b765946f0d884104c8cfa4c) by [@safaiyeh](https://github.com/safaiyeh))

### Deprecated

- Add deprecation warnings for `Clipboard`, `SegmentedControlIOS`, `ProgressViewIOS`, `ProgressBarAndroid`. These modules have been moved to [react-native-community](https://github.com/react-native-community) libraries. ([f295d7f608](https://github.com/facebook/react-native/commit/f295d7f60843a45bb09fc366e497f512c2bc0046) by [@Naturalclar](https://github.com/Naturalclar))
- Deprecated `console.disableYellowBox` in favor of `LogBox.ignoreAllLogs`. ([87f1e22434](https://github.com/facebook/react-native/commit/87f1e22434210ad22f526422bbda0413f59786ce) by [@rickhanlonii](https://github.com/rickhanlonii))

#### Android specific

- We are deprecating the method `UIManagerModule.resolveRootTagFromReactTag`, this will not be supported in the next version of RN ([acbf9e18ea](https://github.com/facebook/react-native/commit/acbf9e18ea666b07c1224a324602a41d0a66985e) by [@mdvacca](https://github.com/mdvacca))
- Add warning message for trying to use `ToolbarAndroid` which has been removed from the core since 0.61. ([6249d14a61](https://github.com/facebook/react-native/commit/6249d14a61723b22deb1336457b4295978471885) by [@Naturalclar](https://github.com/Naturalclar))

#### iOS specific

- Deprecate iOS 9.x support ([58a6a40eac](https://github.com/facebook/react-native/commit/58a6a40eac9afb5c4de78a63418cc48ea97da1a4), [829a2237d2](https://github.com/facebook/react-native/commit/829a2237d270c03c80467eb6c2b5b18c87135a45), [674b591809](https://github.com/facebook/react-native/commit/674b591809cd1275b5f1c4d203c2f0ec52303396) by [@fkgozali](https://github.com/fkgozali), [d1265077d6](https://github.com/facebook/react-native/commit/d1265077d6638bb9219180628caf6ff83f8d6019) by [@sunnylqm](https://github.com/sunnylqm))

### Added

- Implement `nativePerformanceNow` and `performance.now()` ([232517a574](https://github.com/facebook/react-native/commit/232517a5740f5b82cfe8779b3832e9a7a47a8d3d) by [@emilisb](https://github.com/emilisb))
- Support `PerformanceLogger` stopTimespan updates ([08c338eebf](https://github.com/facebook/react-native/commit/08c338eebf67ef6c8c8fb7e3a91bbf89bbc2bb4c) by [@sahrens](https://github.com/sahrens))
- Added `PlatformColor` implementations for iOS and Android ([f4de45800f](https://github.com/facebook/react-native/commit/f4de45800f25930a1c70f757d12269d859066d3d) by [@tom-un](https://github.com/tom-un))
- Stamp React Native Version Into C++ Code ([427ba359e0](https://github.com/facebook/react-native/commit/427ba359e0c9411438286dd137bbca67f9829fde) by [@NickGerleman](https://github.com/NickGerleman))
- New `<Pressable>` Component to make it easier to create touchable elements ([3212f7dfe8](https://github.com/facebook/react-native/commit/3212f7dfe82d187e27f1410c8c3cb1d9fb9f5094) by [@TheSavior](https://github.com/TheSavior), [bd3868643d](https://github.com/facebook/react-native/commit/bd3868643d29e93610e19312571a9736df2cbdf8) by [@vonovak](https://github.com/vonovak))
- Export `LogBox` module ([799bf56f6f](https://github.com/facebook/react-native/commit/799bf56f6f6a46b6bd42ac5a824f44bd1412f3b6) by [@rickhanlonii](https://github.com/rickhanlonii))
- Export `LayoutAnimationConfig` flow type ([f0dafd34fe](https://github.com/facebook/react-native/commit/f0dafd34fedb0d63eb2499b978a52da9e6b71ea1) by [@sahrens](https://github.com/sahrens))
- Added `react-native-community/eslint-plugin` as a dependency for `react-native-community/eslint-config` ([2c2e35c634](https://github.com/facebook/react-native/commit/2c2e35c634cd936bd7ea7a7fe444058268308224) by [@Naturalclar](https://github.com/Naturalclar))
- `DEBUG_NETWORK_SEND_DELAY` can be used to simulate slow network. ([4aac019176](https://github.com/facebook/react-native/commit/4aac019176e3359068ac671ed4157a6e3ada481f) by [@sahrens](https://github.com/sahrens))
- Support for `accessibilityLabel` prop to the `Picker` component ([0a525b6d9d](https://github.com/facebook/react-native/commit/0a525b6d9d2a88dddf24b85a2485b928fca23b16) by [@KevinGVargas](https://github.com/KevinGVargas))
- Allow `zIndex` to `useNativeDriver` ([6a4e06faa8](https://github.com/facebook/react-native/commit/6a4e06faa8afbcb607fc2696c45c4f3257b6665d) by [@mackenziemance](https://github.com/mackenziemance))

#### Android specific

- Support item background color in Dialog `Picker` ([22eb711c84](https://github.com/facebook/react-native/commit/22eb711c84587ac92da97e486fecaa79424fa925))
- Add OverrideColorScheme interface and setOverrideColorScheme method to AppearanceModule([45d7df6cf7](https://github.com/facebook/react-native/commit/45d7df6cf7482b9790c97db613055ff5d3e59a87))
- Allow setting custom ripple radius on `TouchableNativeFeedback` ([7f2a79f40b](https://github.com/facebook/react-native/commit/7f2a79f40b4a4c41344ca90cefe318af607675e0) by [@vonovak](https://github.com/vonovak))
- Add `resizeMode` prop support on `TextInlineView` ([6871416328](https://github.com/facebook/react-native/commit/68714163280695c3148544b95b05a2c1464dbbba) by [@mdvacca](https://github.com/mdvacca))
- Added an API for checking if there are busy timers to `TimingModule` ([22764e6cdc](https://github.com/facebook/react-native/commit/22764e6cdcf45ca5930676f6e95f9ab2f82bc78d) by [@ejanzer](https://github.com/ejanzer))
- Make packager location customizable in dev mode ([3714f3648a](https://github.com/facebook/react-native/commit/3714f3648a8ac51f2bb7f2791e2381551d0209b4))

#### iOS specific

- `UIScene` support for `RCTImageView` ([f332fac163](https://github.com/facebook/react-native/commit/f332fac16346d2f03d056575cc988a0b2bbb48c6) by [@tido64](https://github.com/tido64))
- Status bar style is now correctly changed in multi-window iPadOS 13 apps if you use `RCTRootViewController` and set `UIViewControllerBasedStatusBarAppearance=YES` ([80e6d672f3](https://github.com/facebook/react-native/commit/80e6d672f32fdc860c73eabcc63763dcab3c6269) by [@radex](https://github.com/radex))
- Added `userInterfaceStyle` for `ActionSheetIOS` and `Share` to override user interface style on IOS 13 ([0a9cc34dd8](https://github.com/facebook/react-native/commit/0a9cc34dd82a3a7dba576997ebd424b12876dbaa) by [@Arjan-Zuidema](https://github.com/Arjan-Zuidema))
- Add localized accessibility strings to `ReactCore` pod ([aebf54aee4](https://github.com/facebook/react-native/commit/aebf54aee41cc892198b055a7a546743297412bd) by [@xuelgong](https://github.com/xuelgong))
- Resolve and reject promise for `PushNotificationIOS.requestPermissions` ([edfdafc7a1](https://github.com/facebook/react-native/commit/edfdafc7a14e88a2660b95cb220c62f29b1b28c0) by [@p-sun](https://github.com/p-sun))
- Use autolink script in template on iOS ([a35efb9400](https://github.com/facebook/react-native/commit/a35efb94006bfa3f541bf3fc3ab5262740f00525) by [@janicduplessis](https://github.com/janicduplessis))
- Added `Flipper` to template app ([52cd9cd6fe](https://github.com/facebook/react-native/commit/52cd9cd6fec0866177aa02f7129a8b3d8b2bdbea) by [@safaiyeh](https://github.com/safaiyeh))
- Add `textColor` and `backgroundColor` props to `SegmentedControl` for iOS >=13 ([e8f577e541](https://github.com/facebook/react-native/commit/e8f577e541815bfd8adebdf14f70c9e4205f8e4e) by [@Naturalclar](https://github.com/Naturalclar))
- Adds `RCTOverrideAppearancePreference` to the iOS `Appearance` module ([fa65b156d4](https://github.com/facebook/react-native/commit/fa65b156d4109e6a3121484b601358b11cf0d541))
- Changed iOS LaunchScreen from `xib` to `storyboard` ([33b3a1a145](https://github.com/facebook/react-native/commit/33b3a1a1453ca51690e59b758eeb61a4fa8f35bc) by [@jeswinsimon](https://github.com/jeswinsimon))

### Changed

- Update `react-native-community/eslint-config` to 1.1.0, adding the new color rule ([780f06cd47](https://github.com/facebook/react-native/commit/780f06cd477f34da48646a949bd25dd3f883a9a2) by [@TheSavior](https://github.com/TheSavior))
- Update community eslint plugin in the eslint config ([b2d10bc602](https://github.com/facebook/react-native/commit/b2d10bc60272fc2318835ff38655a9eb4a2bbed0) by [@Naturalclar](https://github.com/Naturalclar))
- Upgrade `eslint-config` and `metro-preset` in project template ([ad86a18305](https://github.com/facebook/react-native/commit/ad86a183052e8b25d599eb395aef55412c02ff7b) by [@Naturalclar](https://github.com/Naturalclar))
- Add ES Lint rules for `DynamicColorIOS()`and `ColorAndroid()` ([602070f44b](https://github.com/facebook/react-native/commit/602070f44b02220aeb036a7b3c26dad5c611b636) by [@tom-un](https://github.com/tom-un))
- Make `ScrollView` use `forwardRef` ([d2f314af75](https://github.com/facebook/react-native/commit/d2f314af75b63443db23e131aaf93c2d064e4f44) by [@kacieb](https://github.com/kacieb))
- Upgrade embedded React DevTools backend from v4.0.6 to v4.6.0 ([93ee5b2cc8](https://github.com/facebook/react-native/commit/93ee5b2cc8391bc5cb12ca7cf08ed0e44c74d29a) by [@bvaughn](https://github.com/bvaughn))
- Updated the React Hooks ESLint Plugin ([6ce3f0a4f7](https://github.com/facebook/react-native/commit/6ce3f0a4f7495adb82e655d037dc4e5af462f955) by [@gaearon](https://github.com/gaearon))
- Update to React 16.13.1 ([9637d6214a](https://github.com/facebook/react-native/commit/9637d6214a47e58d7fa8252a3de8c057e5cfb101) by [@gaearon](https://github.com/gaearon))
- Relax `RefreshControl`'s `onRefresh` flow typing ([884c86ae02](https://github.com/facebook/react-native/commit/884c86ae02b0be7ea1e4b258dab39f4c5aee0b9d) by [@vonovak](https://github.com/vonovak))
- Improved flowtype support for `Animated` ([bdafc55f50](https://github.com/facebook/react-native/commit/bdafc55f50c7d580ee2e643a02cb95d0196f721c) by [@javache](https://github.com/javache))
- Upgrade `eslint-plugin-relay` to 1.6.0 ([0483404d82](https://github.com/facebook/react-native/commit/0483404d827416b7270e8a42b84e424035127892) by [@kassens](https://github.com/kassens))
- Upgrade to latest dependencies in package.json template ([82e8239337](https://github.com/facebook/react-native/commit/82e82393377ddcedba01c401a5d79d5bbcdc4dc9) by [@codler](https://github.com/codler))
- Make JSStringToSTLString 23x faster ([733532e5e9](https://github.com/facebook/react-native/commit/733532e5e95c85b8295b6c66009ca9efd2a77622) by [@radex](https://github.com/radex))
- Changed property `disableIntervalMomentum` to work with both horizontal and vertical ScrollViews ([6237cfb325](https://github.com/facebook/react-native/commit/6237cfb325e39571ede0054a67d60f2c978d6d58) by [@Shaninnik](https://github.com/Shaninnik))
- Upgraded to Flow v0.114.0 ([aa78457343](https://github.com/facebook/react-native/commit/aa7845734352eab2bd32f7d6e683d6674fd6680d) by [@mroch](https://github.com/mroch))
- Updated CLI to the latest version ([ddc33007ad](https://github.com/facebook/react-native/commit/ddc33007ad0b4a0a24966b833e797227b9c56cca) by [@grabbou](https://github.com/grabbou))
- Upgrade Prettier from 1.17 to 2.0.2. ([cf44650b3f](https://github.com/facebook/react-native/commit/cf44650b3f4f13df8208ceded60ec5c48bd6baf3) by [@bolinfest](https://github.com/bolinfest))
- Only set dimensions if the window attributes change ([35c6bb9ac0](https://github.com/facebook/react-native/commit/35c6bb9ac0fc452428e85fee72affb4fc29f500c) by [@cpojer](https://github.com/cpojer))
- Upgrade internal packages to support ESLint >= 6 ([89d04b5e4a](https://github.com/facebook/react-native/commit/89d04b5e4a3fd0b0f77b5a390c0aa62a3804e2bc) by [@Barbiero](https://github.com/Barbiero))
- Make `JSCRuntime::createValue` faster ([24e0bad8be](https://github.com/facebook/react-native/commit/24e0bad8bea95ef7ddf72e2f00a93ffd47872d5b) by [@radex](https://github.com/radex))
- Add perf markers in `XMLHttpRequest` ([71b8ececf9](https://github.com/facebook/react-native/commit/71b8ececf9b298fbf99aa27d0e363b533411e93d) by [@sahrens](https://github.com/sahrens))
- Update SoLoader to 0.8.2 ([0a6f058b6b](https://github.com/facebook/react-native/commit/0a6f058b6bd0493f7eece972b1f73be3606ca8d5) by [@passy](https://github.com/passy))
- `console.error` calls, and uncaught exceptions are now displayed in the Metro logs as well ([ffb82cb2f0](https://github.com/facebook/react-native/commit/ffb82cb2f052f276a94a004d5acea0ab44f8098c) by [@mweststrate](https://github.com/mweststrate))
- Upgrade Flipper to 0.37.0 ([17f025bc26](https://github.com/facebook/react-native/commit/17f025bc26da13da795845a3f7daee65563420c0) by [@sunnylqm](https://github.com/sunnylqm))

#### Android specific

- Upgraded to Hermes 0.5.0 ([4305a291a9](https://github.com/facebook/react-native/commit/4305a291a9408ca65847994bbec42f1fbc97071d) by [@willholen](https://github.com/willholen))
- Internal storage now will be preferred for caching images from `ImageEditor`. ([79efa43428](https://github.com/facebook/react-native/commit/79efa4342852a3e9271a56e3a0fb7c15be664e9a) by [@kitttn](https://github.com/kitttn))
- Update Gradle Wrapper to 6.2 ([d4d8887b50](https://github.com/facebook/react-native/commit/d4d8887b5018782eeb3f26efa85125e6bbff73e4) by [@friederbluemle](https://github.com/friederbluemle))
- Upgrade Folly to v2020.01.13.00 ([6e2131b8fa](https://github.com/facebook/react-native/commit/6e2131b8fa85da8b3fb0391803e7fbecba890ffb) by [@Kudo](https://github.com/Kudo))
- Only update dimensions in `ReactRootView` if they've changed ([cc3e27d484](https://github.com/facebook/react-native/commit/cc3e27d484d3a412f632454b7f1c637b2c271af2) by [@ejanzer](https://github.com/ejanzer))
- `ReactEditText` extends `AppCompatEditText` ([aaa2765a92](https://github.com/facebook/react-native/commit/aaa2765a920de8234f0def4cae05ca5d6c8c8ac8) by [@dulmandakh](https://github.com/dulmandakh))
- Make `ReactApplicationContext` nullable as the constructor argument of `ReactContextBaseJavaModule` ([f8d5c5bfd7](https://github.com/facebook/react-native/commit/f8d5c5bfd79be0e20a205a1856bd9946143eeacf) by [@RSNara](https://github.com/RSNara))
- Update Android Gradle plugin to 3.5.3 ([e1e081b00e](https://github.com/facebook/react-native/commit/e1e081b00e5efb32bce74211c850212eca8a9412) by [@SaeedZhiany](https://github.com/SaeedZhiany))
- Don't emit dimensions update event on initial load ([383934a06e](https://github.com/facebook/react-native/commit/383934a06e22e8e1a5ee50d121722240259f95d0) by [@ejanzer](https://github.com/ejanzer))
- Bump Android build-tools to 29.0.2, compileSdk to 29 ([edcbfb9821](https://github.com/facebook/react-native/commit/edcbfb98210d9aaa6bb1d7c64281ae9cfb41cac2) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Disambiguate autolinking-ios.rb script from CLI’s “autolinking” feature and bring RNTester & template in line. ([4118d79826](https://github.com/facebook/react-native/commit/4118d798265341061105f3a53550db83c66a71cb) by [@alloy](https://github.com/alloy))
- Updated Flipper iOS integration to be included by default in the `Debug` configuration ([619d5d60df](https://github.com/facebook/react-native/commit/619d5d60dfa94966e7104febec08166c1b5eca49) by [@alloy](https://github.com/alloy))
- Use Apple unified logging API (os_log) ([f501ed682a](https://github.com/facebook/react-native/commit/f501ed682ae68136d966aee2b0d3cc0f1e8b90cd) by [@LeoNatan](https://github.com/LeoNatan))
- Upgrade Folly to v2020.01.13.00 ([a27e31c059](https://github.com/facebook/react-native/commit/a27e31c059971b1d554ad6c7c81706f08eafac87) by [@Kudo](https://github.com/Kudo))
- Remove the `xcshareddata` from .gitignore ([7980615d37](https://github.com/facebook/react-native/commit/7980615d371a7bf607a3787bca91cfde229c41dc) by [@pvinis](https://github.com/pvinis))
- Add `complete_nullability = True` to compatible libraries ([796a4ea7e3](https://github.com/facebook/react-native/commit/796a4ea7e31ae05b76e59e02ab05f9c955f7c149))
- Remove the Flipper pod post install step ([44beb2a685](https://github.com/facebook/react-native/commit/44beb2a685b7ceb0311bde7d0d33cb70bb891d30) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Enable Flipper with CocoaPods `:configuration` ([7bb1c4e1b8](https://github.com/facebook/react-native/commit/7bb1c4e1b8715a5c9cb6f9e4e77a6df783481d3d) by [@alloy](https://github.com/alloy))

### Removed

- Remove unused`ImageProp` ([fbd09b1797](https://github.com/facebook/react-native/commit/fbd09b179759cd90f2be5c24caa11bdb483ad8cd) by [@Naturalclar](https://github.com/Naturalclar))
- Remove leftover `Incremental` component ([e99800267b](https://github.com/facebook/react-native/commit/e99800267b78aa581aff956d47b8be91858628b9) by [@venits](https://github.com/venits))
- Remove "Debug with Nuclide" option ([011eb4cea5](https://github.com/facebook/react-native/commit/011eb4cea5d482cef54d7659e7436a04e539ff19) by [@rickhanlonii](https://github.com/rickhanlonii))

#### Android specific

- Remove unused Feature Flag: `lazilyLoadViewManagers` ([3963f34980](https://github.com/facebook/react-native/commit/3963f34980f501ef89a945a1d0e76716af84527d) by [@JoshuaGross](https://github.com/JoshuaGross))
- `PickFirst` options for RNTester and template ([4bb0b4f205](https://github.com/facebook/react-native/commit/4bb0b4f205b1bc9a91150fe1f609f7d7313eb806) by [@passy](https://github.com/passy))
- Remove Kotlin version from the default template ([ced959bb3d](https://github.com/facebook/react-native/commit/ced959bb3d6abdab30c5e64af9bff6059b111cdd) by [@grabbou](https://github.com/grabbou))

#### iOS specific

- Remove core `RCTConvert` CoreLocation Libraries ([bcf2a716fb](https://github.com/facebook/react-native/commit/bcf2a716fb8b8954d6f7b801a1699eeea9418e73) by [@maschad](https://github.com/maschad))
- Remove copyright notices from iOS application template ([9c3fa57337](https://github.com/facebook/react-native/commit/9c3fa573379bb4824bbe02b5b5aa1ae3502772d8) by [@alloy](https://github.com/alloy))
- Remove three properties: `textColor`, `font` and `textAlignment` from `RCTBackedTextInputViewProtocol`, unifying the usage into `defaultTextAttributes`. ([aff6bad27c](https://github.com/facebook/react-native/commit/aff6bad27c6c2232ba8bde17823d0a0db4ac589b) by [@jimmy623](https://github.com/jimmy623))

### Fixed

- Add support to render `<View>` with no fixed size nested within a `<Text>` ([dbb7eacb42](https://github.com/facebook/react-native/commit/dbb7eacb429adb4160e740017c212bfd6df0f03a) by [@mdvacca](https://github.com/mdvacca))
- Fixes bug where `<Text><View><Image>` would crash. ([66601e755f](https://github.com/facebook/react-native/commit/66601e755fcad10698e61d20878d52194ad0e90c) by [@TheSavior](https://github.com/TheSavior))
- Use new `setTextCursorDrawable` API for Android 10 ([e7a14b803f](https://github.com/facebook/react-native/commit/e7a14b803fdc8840bbcde51d4bfa9cf9a85a8472) by [@sturmen](https://github.com/sturmen))
- Fix `Animated.Value` initialized with undefined in `ScrollView` ([cf02bd9b76](https://github.com/facebook/react-native/commit/cf02bd9b765e29ed8aa2bbf62661e89c84bb80e5) by [@janicduplessis](https://github.com/janicduplessis))
- Do not explicitly include `.js` in Library imports ([161b910494](https://github.com/facebook/react-native/commit/161b9104941663dcc0b08a73789c0ff3410fc661) by [@NickGerleman](https://github.com/NickGerleman))
- Fixed `Pressability` to properly fire `onLongPress`. ([5ca1d8f260](https://github.com/facebook/react-native/commit/5ca1d8f260bfb64111a6ba39f76a0a935829c0f2) by [@yungsters](https://github.com/yungsters))
- Fixed typo from `inly` to `only` inside `Modal.js` library code. ([686d8a57f8](https://github.com/facebook/react-native/commit/686d8a57f889fe74dc1c66566c80f0ed6d677729) by [@Darking360](https://github.com/Darking360))
- Fix viewability calculations for nested `VirtualizedLists` inside of a parent list's `FooterComponent` ([074a2fab74](https://github.com/facebook/react-native/commit/074a2fab74754c28cba0ccc51552a246a3046501) by [@logandaniels](https://github.com/logandaniels))
- Fix android `TextInput` transitions ([0a17a4fe56](https://github.com/facebook/react-native/commit/0a17a4fe56ff2cabc3c7d1cc5b34bd3fdd032e59))
- Remove JS autoFocus implementation ([0569d4c431](https://github.com/facebook/react-native/commit/0569d4c4315d61d2d8f4ab628a54eb1e1db45dc2) by [@janicduplessis](https://github.com/janicduplessis))
- Check null values in `shouldAnimate` ([3498b3b96b](https://github.com/facebook/react-native/commit/3498b3b96b2e27c7c7f6407b3673b44540871a31) by [@axe-fb](https://github.com/axe-fb))
- Fix `AccessibilityInfo.isScreenReaderEnabled` mock in Jest setup ([ec3327b61a](https://github.com/facebook/react-native/commit/ec3327b61ab1be3fd1565c8a35fe56747bd9069f) by [@rubennorte](https://github.com/rubennorte))
- Fix crash when passing invalid UTF-16 data from JSC into native code ([011cf3f884](https://github.com/facebook/react-native/commit/011cf3f88428ca83552d0b51c7c3a0c47b9728e5) by [@motiz88](https://github.com/motiz88))
- Make `YGValue.h` compile with Clang on Windows ([014bc95135](https://github.com/facebook/react-native/commit/014bc95135a38d65b991509492c0979cfd153e71) by [@christophpurrer](https://github.com/christophpurrer))
- Fix documentation comments for HermesJS's `Function::callWithThis` method to accurately reflect how `this` is handled. ([399bda5284](https://github.com/facebook/react-native/commit/399bda52840161bf7d30c09eca061b4378b8f6e4) by [@Kronopath](https://github.com/Kronopath))
- Fix resolving assets outside of the project root ([7deeec7396](https://github.com/facebook/react-native/commit/7deeec73966d84140492c2a767819977318c4d2d) by [@janicduplessis](https://github.com/janicduplessis))
- Transform empty responses into empty `Blob`s ([9a8c06b502](https://github.com/facebook/react-native/commit/9a8c06b502c774f7a0bff1bdc064fbfe16ca75be) by [@RSNara](https://github.com/RSNara))
- Fix validation of event mappings for `AnimatedEvent` ([19362f6116](https://github.com/facebook/react-native/commit/19362f6116bad441c5e23f2bab420af78664b3d3) by [@javache](https://github.com/javache))
- Fix `NativeJSCHeapCapture` ([7e3a43c23d](https://github.com/facebook/react-native/commit/7e3a43c23d028a4481bc455dd28c391a81ff1a94) by [@RSNara](https://github.com/RSNara))
- Add `AnimationInterpolation` as possible type for toValue ([26e8870fbf](https://github.com/facebook/react-native/commit/26e8870fbf310f0fb438a86cb2fe260f0bc419b9) by [@nabati](https://github.com/nabati))
- Fix return type of `StyleSheet.create` ([4e71a30969](https://github.com/facebook/react-native/commit/4e71a30969d74073309d0350be55cadb84ae43ff) by [@jbrown215](https://github.com/jbrown215))
- Adjust HelloWorld-tvOSTests/Info.plist `CFBundleIdentifier` to use `PRODUCT_BUNDLE_IDENTIFIER` ([98ebc1ea25](https://github.com/facebook/react-native/commit/98ebc1ea25102049ec53288a458ff16ed5b4ada0) by [@MoOx](https://github.com/MoOx))
- Fix bug where if `Error` global is not callable when building an error, jsi will throw a JS exception back to JS code. #158 ([a195447539](https://github.com/facebook/react-native/commit/a1954475394dc03704a2e093e6fc4b48188640fa) by [@mhorowitz](https://github.com/mhorowitz))
- Fix stylesheet validation for functions with custom prototype methods. ([f464dad5d4](https://github.com/facebook/react-native/commit/f464dad5d4f0fbf1cb23e21d22907ffddeaf97e4))
- Fix sporadic issue with `onEndReached` called on load when not needed ([8ddf231306](https://github.com/facebook/react-native/commit/8ddf231306e3bd85be718940d04f11d23b570a62) by [@sahrens](https://github.com/sahrens))
- Correct argument types of `NativeJSDevSupport.onSuccess` ([b42371da5a](https://github.com/facebook/react-native/commit/b42371da5a41916522b569a66c0a126333cf9cac) by [@RSNara](https://github.com/RSNara))
- Add `URLSearchParams` and `Headers` to eslint globals ([7a13a1a88f](https://github.com/facebook/react-native/commit/7a13a1a88fdf26dca817b76399f1c86a8a05eccb) by [@sonnyp](https://github.com/sonnyp))
- Export exception classes with default visibility ([84adc85523](https://github.com/facebook/react-native/commit/84adc85523770ebfee749a020920e0b216cf69f8) by [@appden](https://github.com/appden))
- Add `URL` to eslint globals. ([ff9def41ff](https://github.com/facebook/react-native/commit/ff9def41ff3e7760d076bf1b899583d4b36cba0d) by [@sonnyp](https://github.com/sonnyp))
- Plumb through memory allocation profiler feature to Chrome Inspector ([ed3054927c](https://github.com/facebook/react-native/commit/ed3054927c30c8823f78026b9c4cb42fbe4f8b00) by [@jbower-fb](https://github.com/jbower-fb))
- Better monorepo support when building release apk ([a8e85026cf](https://github.com/facebook/react-native/commit/a8e85026cfa60056b1bcbcd39cde789e4d65f9cb) by [@grabbou](https://github.com/grabbou))
- `LogBox` - Fix dependency cycle ([6ba2aeefa8](https://github.com/facebook/react-native/commit/6ba2aeefa8dfe031bf1dc46dbea29235aec31d61) by [@rickhanlonii](https://github.com/rickhanlonii))
- Always update background color and bar style on Android status bar ([9457efa84c](https://github.com/facebook/react-native/commit/9457efa84c872f029027cdcfc3bae4f403715e48))
- Disable accessibility state changes of the focused view for Android API < 21 ([f2d58483c2](https://github.com/facebook/react-native/commit/f2d58483c2aec689d7065eb68766a5aec7c96e97) by [@mdvacca](https://github.com/mdvacca))

#### Android specific

- Gradle release config ([0d1fb458ab](https://github.com/facebook/react-native/commit/0d1fb458ab8027dcfac5f2fa11e8c16d6853c59c) by [@vdmtrv](https://github.com/vdmtrv))
- Change how `TextInput` responds to `requestFocus` to fix a11y focus issue ([d4a498aba2](https://github.com/facebook/react-native/commit/d4a498aba2d2843e7a741a31b0c91c6a79a7386c) by [@ejanzer](https://github.com/ejanzer))
- Fixed style in `TextInputTestCase` ([8c493804f3](https://github.com/facebook/react-native/commit/8c493804f3f7b3ae3761679a978971ab9d71baa0) by [@ejanzer](https://github.com/ejanzer))
- Fix template instacrash from missing androidx dependency ([a1b14deb3e](https://github.com/facebook/react-native/commit/a1b14deb3e32df797aae99a75743a4d283e5337b) by [@alloy](https://github.com/alloy))
- Implement native `TextInput` `autoFocus` on Android ([055a41b081](https://github.com/facebook/react-native/commit/055a41b081c5bc9535b071d9b4b7488b92e71803) by [@janicduplessis](https://github.com/janicduplessis))
- Support for case insensitive `Origin` headers for `Websockets` ([aeaf286c77](https://github.com/facebook/react-native/commit/aeaf286c77b50a95c4961de0d2355caad8ffa396) by [@brunobar79](https://github.com/brunobar79))
- RNTester Buck Build ([a3cb377645](https://github.com/facebook/react-native/commit/a3cb377645f2ccb7632ded73c230a41025d38f6f) by [@passy](https://github.com/passy))
- Fix bug in updating dimensions in JS ([bef845ffd5](https://github.com/facebook/react-native/commit/bef845ffd521aa83d779de584ec370f9f88f27f3) by [@ejanzer](https://github.com/ejanzer))
- Applied missing changes from bumping Gradle wrapper to 6.0.1 ([aa0ef15335](https://github.com/facebook/react-native/commit/aa0ef15335fe27c0c193e3e968789886d82e82ed) by [@SaeedZhiany](https://github.com/SaeedZhiany))
- Unregister `JSDevSupport` from `DebugCorePackage` ([c20963e11c](https://github.com/facebook/react-native/commit/c20963e11cc1c10f20a2a0a3c209f5b403c9e899) by [@RSNara](https://github.com/RSNara))
- Make sure `ServerHost` is optional in `NativePlatformConstants.js` ([048f88a33a](https://github.com/facebook/react-native/commit/048f88a33a53ebd4e45865b319c42291f1d6c7f2) by [@RSNara](https://github.com/RSNara))
- Removed code that would cause accessibility header role to be spoken twice ([7428271995](https://github.com/facebook/react-native/commit/7428271995adf21b2b31b188ed83b785ce1e9189) by [@KevinGVargas](https://github.com/KevinGVargas))
- Fail silently in `AppStateModule.sendEvent` if `CatalystInstance` is not available ([c4806fada6](https://github.com/facebook/react-native/commit/c4806fada6532894e2242cf31f7145d2992e3a2b) by [@JoshuaGross](https://github.com/JoshuaGross))
- RN `Picker` - fix types in `AndroidDialogPickerManagerInterface` ([56b0f5cb6b](https://github.com/facebook/react-native/commit/56b0f5cb6ba48ecefc2890152ebe88e3df61a0ea))
- Fix Hermes debugger being disabled by default ([b8621f5d30](https://github.com/facebook/react-native/commit/b8621f5d303442ab78dc5d745cfc86a941d4737c) by [@willholen](https://github.com/willholen))

#### iOS specific

- Fixed connection of metro reload command to iOS device ([f9df93385e](https://github.com/facebook/react-native/commit/f9df93385eee0e1cd1144a65e05410dfb48b119c) by [@reyalpsirc](https://github.com/reyalpsirc))
- Remove `RCTDevLoadingView` jank ([faff19a7c6](https://github.com/facebook/react-native/commit/faff19a7c651c740d8d649b86727b63b63562b20) by [@RSNara](https://github.com/RSNara))
- Fix crash when passing null value in object parameter of bridged method ([15434c7c43](https://github.com/facebook/react-native/commit/15434c7c435928a40b9cd66fe9f5d1bcdea8d954))
- Get ready for Clang 10 ([8721ee0a6b](https://github.com/facebook/react-native/commit/8721ee0a6b10e5bc8a5a95809aaa7b25dd5a6043) by [@maxovtsin](https://github.com/maxovtsin))
- Fix `RCTBlobManager` cleanup crash ([91c5ff4a12](https://github.com/facebook/react-native/commit/91c5ff4a12982ccead56c9c038761e9316d01409) by [@RSNara](https://github.com/RSNara))
- Make Lambda function called in `NativeModule` mutable ([5290047d09](https://github.com/facebook/react-native/commit/5290047d09c0a41c85a1d47a638877c226d9c191) by [@maschad](https://github.com/maschad))
- Fix crash in `RCTCxxBridge.executeApplicationScript` ([0c2db3256f](https://github.com/facebook/react-native/commit/0c2db3256f6cbb3ec564e0f183a52a439ed33f52) by [@ahimberg](https://github.com/ahimberg))
- Fix `RCTDevLoadingView` `RedBox` on reload ([fe5ac2c3f9](https://github.com/facebook/react-native/commit/fe5ac2c3f9e47cfb7c5820a755a5d74d47624953) by [@RSNara](https://github.com/RSNara))
- Fix `Image` component crashing when `uri` is `null` ([06b8b15b0a](https://github.com/facebook/react-native/commit/06b8b15b0af84b6f8b44d200dc25f29eac51181c) by [@mlazari](https://github.com/mlazari))
- Fix `RCTDevLoadingView` not showing up with `UIScene` ([74b667dbc2](https://github.com/facebook/react-native/commit/74b667dbc2a48183dec0b9c3b5401bc3f9e54e7b) by [@tido64](https://github.com/tido64))
- Prevent interactive dismissal for non-fullscreen modals ([1e7ed81d16](https://github.com/facebook/react-native/commit/1e7ed81d16dda4188352e0ccdc0f0bd3ad4741f3))
- Resolve localization warnings in template ([0e4bcaa296](https://github.com/facebook/react-native/commit/0e4bcaa2960a2b1aa42dbe716fc6a35652aa7207) by [@safaiyeh](https://github.com/safaiyeh))
- Implement `requiresMainQueueSetup` in `RCTDevSettings.mm` ([adf87dd7ed](https://github.com/facebook/react-native/commit/adf87dd7eddcf65a3300e6ac9092838d9c8a3279) by [@logandaniels](https://github.com/logandaniels))
- Resolve `React-RCTText` Xcode warning ([04fed6508b](https://github.com/facebook/react-native/commit/04fed6508b74b23c954183af3f6121fb344d2138) by [@safaiyeh](https://github.com/safaiyeh))
- Resolve Xcode warnings from `React-cxxreact`. ([dc6c57ce0d](https://github.com/facebook/react-native/commit/dc6c57ce0d4f5424bfb047c51fee18eac381a98b) by [@safaiyeh](https://github.com/safaiyeh))
- `RCTReconnectingWebSocket` is reconnecting infinitely when stopped before getting connected ([0d4b0e9417](https://github.com/facebook/react-native/commit/0d4b0e941725657d8e63940428888aaceff505ad))
- Fix prop name of `passwordRules` in `TextInput` ([3f5c42f357](https://github.com/facebook/react-native/commit/3f5c42f357d58268d0a0fd1bfc639f41feab937c) by [@Naturalclar](https://github.com/Naturalclar))
- Remove need for Swift file in the user’s project in order to use Flipper ([8f93dedc6a](https://github.com/facebook/react-native/commit/8f93dedc6a5653edd2220c65ccb4ff8736ee060c) by [@alloy](https://github.com/alloy))
- Clear all held `jsi::Functions` when `jsi::Runtime` is deleted ([9ae95582e7](https://github.com/facebook/react-native/commit/9ae95582e792a3dca4487bdce9080c6d874c7dd7) by [@RSNara](https://github.com/RSNara))
- Make framework builds work again by making `RCTImageLoader` C++ requirement opt-in ([25571ec452](https://github.com/facebook/react-native/commit/25571ec4522931193b41723d3f80b3bced1fca3b) by [@alloy](https://github.com/alloy))
- Enable dev keyboard shortcuts on Mac Catalyst ([56dfc86d64](https://github.com/facebook/react-native/commit/56dfc86d64a2a1f2ad05239b6d11aacac73cbac9) by [@charpeni](https://github.com/charpeni))
- Fix `RCTTextView` layout issue that happens on some font with `leading` attribute not equal to zero, which causes wrong base-alignment layout ([5d08aab526](https://github.com/facebook/react-native/commit/5d08aab526b2702b46ff75ea7e943a33aa6df288))
- Fix LAN instead of Wi-Fi device bundle configuration ([d1e6f8d3c4](https://github.com/facebook/react-native/commit/d1e6f8d3c4de1fbb4bddd5205cd3b35c572b495b) by [@Oleg-E-Bakharev](https://github.com/Oleg-E-Bakharev))
- Add autorelease pool for each run loop for JS Thread ([948cbfdacc](https://github.com/facebook/react-native/commit/948cbfdacc42f8d2640e69f61df55f6adb823fcf) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fixed bug in implementation of `<TextInput>`'s `selectOnFocus` prop ([e020576b34](https://github.com/facebook/react-native/commit/e020576b34fb6ca6d3f9fe38916844b78a45c0e3) by [@shergin](https://github.com/shergin))
- `RCTRedBox` doesn't appear in apps implementing `UISceneDelegate` ([d0a32c2011](https://github.com/facebook/react-native/commit/d0a32c2011ca00991be45ac3fa320f4fc663b2e8) by [@tido64](https://github.com/tido64))
- Fixes the `InputAccessoryView.backgroundColor` prop’s typing to use `ColorValue`. ([a43fd60e18](https://github.com/facebook/react-native/commit/a43fd60e18aff9ee6bcaf8ec576adb8678d5bcf4) by [@alloy](https://github.com/alloy))
- Fix `Animated` image crash when `CADisplayLink` target in `RCTWeakProxy` is `nil` ([e5a6655e71](https://github.com/facebook/react-native/commit/e5a6655e71d41a58ce0e51d37aa9fb8792e37dd5) by [@p-sun](https://github.com/p-sun))

## v0.62.3

### Security

- Update validateBaseUrl to use latest regex ([33ef82ce6d](https://github.com/facebook/react-native/commit/33ef82ce6dfd31e1f990d438c925a0e52723e16b) by [@FBNeal](https://github.com/FBNeal))

### Fixed

#### iOS specific

- Change autolink to match requirements for FlipperFolly working with Xcode 12.5 ([c6f4611dcb](https://github.com/facebook/react-native/commit/c6f4611dcbfbb64d5b54e242570e2a1acffcabef) by [@kelset](https://github.com/kelset))
- Change podfile to rely on the autolink-ios rb file ([c4ea556d64](https://github.com/facebook/react-native/commit/c4ea556d64c7fc146d1412548788c48bbcc0f6bb) by [@kelset](https://github.com/kelset))
- Update detox to work on Xcode 12 ([158b558e50](https://github.com/facebook/react-native/commit/158b558e500576f434dec09417bb02cc0bc53f7a) by [@kelset](https://github.com/kelset))

## v0.62.2

### Fixed

- Fix Appearance module when using Chrome Debugger ([f7b90336be](https://github.com/facebook/react-native/commit/f7b90336be25b78935549aa140131d4d6d133f7b) by [@TheSavior](https://github.com/TheSavior))
- Fix mock for TextInput ([5a3c6faee9](https://github.com/facebook/react-native/commit/5a3c6faee9c44a2d99b13d113c91dbf98990f8af) by [@SergioEstevao](https://github.com/SergioEstevao))
- Flow errors from YellowBox and BubblingEventHandler ([a049130f34](https://github.com/facebook/react-native/commit/a049130f34be951c9c67d2a472c7eb7f3d08f070) by [@thymikee](https://github.com/thymikee))

#### iOS specific

- Make Vibration library compatible with TurboModules. ([3904228704](https://github.com/facebook/react-native/commit/390422870466beba571dda04f669380e14055056) by [@brunobar79](https://github.com/brunobar79))
- Exclude Flipper from iOS Release builds ([e5497ca8f6](https://github.com/facebook/react-native/commit/e5497ca8f6e3b240948fdbeef0ac2a710f25bb56) by [@javiercr](https://github.com/javiercr))
- Fix crash when enabling Performance Monitor on iOS 13.4 ([e2c417f7cf](https://github.com/facebook/react-native/commit/e2c417f7cf5ae7efa5ea1f9644a51c4c706a983f) by [@IjzerenHein](https://github.com/IjzerenHein))

## v0.62.1

### Fixed

- Bump CLI to 4.5.1 to improve DX ([eac56b9749](https://github.com/facebook/react-native/commit/eac56b9749ed624275d4190b5e48b775583acb3f) by [@alloy](https://github.com/alloy))
- Fix a YellowBox regression in v0.62.0 where the Flipper network inspector causes YellowBox to crash the app due to using base64 images. ([227aa96bb2](https://github.com/facebook/react-native/commit/227aa96bb23b6ff20eebbd8a9335fd172ed6005b) by [@rickhanlonii](https://github.com/rickhanlonii))

#### Android specific

- Add new DoNotStrip class to proguard config ([cfcf5eba43](https://github.com/facebook/react-native/commit/cfcf5eba4317f80ef8902463b7c0b2e1e7b534a7) by [@janicduplessis](https://github.com/janicduplessis))

#### iOS specific

- Fix Performance Monitor in dark appearance ([576ddfb3a8](https://github.com/facebook/react-native/commit/576ddfb3a84a5461679959f0d3f229a000dcea8d) by [@gorhom](https://github.com/gorhom))
- Inverted ScrollViews scroll to their bottom when the status bar is pressed ([7a4753d76a](https://github.com/facebook/react-native/commit/7a4753d76aab1c52a09f26ec6f7fd43a68da8a97) by [@emilioicai](https://github.com/emilioicai))
- Revert [previous incomplete fix](https://github.com/facebook/react-native/commit/bd2b7d6c0366b5f19de56b71cb706a0af4b0be43) for [an issue](https://github.com/facebook/react-native/issues/26473) with `Modal`’s `onDismiss` prop. ([27a3248a3b](https://github.com/facebook/react-native/commit/27a3248a3b37410b5ee6dda421ae00fa485b525c) by [@grabbou](https://github.com/grabbou))
- Fix double call to onEndReached in VirtualizedList ([d3658bc2b6](https://github.com/facebook/react-native/commit/d3658bc2b6437e858d3b3f5688277dedbca779b8) by [@MartinSherburn](https://github.com/MartinSherburn))

### Changed

- Update warning message of deprecated imports ([405200e9a9](https://github.com/facebook/react-native/commit/405200e9a930cded47954f374f2a779ec769cd4c) by [@Naturalclar](https://github.com/Naturalclar))

## v0.62.0

This major release includes Flipper support by default, improved dark mode support, moving Apple TV to [react-native-tvos](https://github.com/react-native-community/react-native-tvos), and more. See the [blog post](https://reactnative.dev/blog/2020/03/26/version-0.62) for all of the highlights.

This release comes in the midst of a global pandemic. We’re releasing this version today to respect the work of hundreds of contributors who made this release possible and to prevent the release from falling too far behind master. Please be mindful of the reduced capacity of contributors to help with issues and prepare to delay upgrading if necessary.

If you're upgrading, manual intervention may be required for your app. Please see the [upgrade-helper](https://react-native-community.github.io/upgrade-helper/) for a detailed breakdown of the changes required and see [this issue](https://github.com/react-native-community/releases/issues/179) for known issues.

One known issue with workaround is regarding Android builds and [APK size increases](https://github.com/facebook/react-native/issues/28330).

### Breaking

- React DevTools v4 integration ([92a3c9da0a](https://github.com/facebook/react-native/commit/92a3c9da0a38870a8bad7c91bdc3ddb494f6e5f2) by [@bvaughn](https://github.com/bvaughn))
- Remove `TextInput`'s `onTextInput` prop ([3f7e0a2c96](https://github.com/facebook/react-native/commit/3f7e0a2c9601fc186f25bfd794cd0008ac3983ab) by [@shergin](https://github.com/shergin))
- Remove `TextInput`'s `inputView` prop ([1804e7cbea](https://github.com/facebook/react-native/commit/1804e7cbea707a35046118090966a54031edfae8) by [@TheSavior](https://github.com/TheSavior))
- Animated: Remove `defaultProps` Parameter ([a70987cee2](https://github.com/facebook/react-native/commit/a70987cee24bcd027b9c4a5aa85dfd6a1aab74b3) by [@yungsters](https://github.com/yungsters))
- Remove `TextInput`'s `selectionState` prop ([2becdfd404](https://github.com/facebook/react-native/commit/2becdfd4041f7f28138ba3a61c03e17c06dc2e50) by [@yungsters](https://github.com/yungsters))
- Remove support for `framesToPop` ([8bc02fdd52](https://github.com/facebook/react-native/commit/8bc02fdd52124d0a24d96e4a61d7688328ef1660) [cf4d45ec2b](https://github.com/facebook/react-native/commit/cf4d45ec2bcd301be7793d5840de21ec7d02275b) [a483f802fd](https://github.com/facebook/react-native/commit/a483f802fddfd927f2baa0d95e2b4094d452cddd) by [@motiz88](https://github.com/motiz88))
- Remove `TimePickerAndroid` ([dbf070c51e](https://github.com/facebook/react-native/commit/dbf070c51ecd14127a8317faa75cb661697b5a6b) by [@cpojer](https://github.com/cpojer))
- Remove `scrollWithoutAnimationTo` from ScrollView ([c7e89909da](https://github.com/facebook/react-native/commit/c7e89909da70ac5290f9971080eb897567db3e43) by [@TheSavior](https://github.com/TheSavior))
- Bump CLI to ^4.2.x ([be5088401f](https://github.com/facebook/react-native/commit/be5088401fd8e19d57adda42d275cab437448064) by [@alloy](https://github.com/alloy)) - for details on what v4 of the CLI improves on (like monorepo support), please refer to the [dedicated blog post](https://callstack.com/blog/react-native-cli-3-1-0-and-4-0-0-whats-new/) and the [release notes](https://github.com/react-native-community/cli/releases)
- Remove `accessibilityStates` property ([7b35f427fd](https://github.com/facebook/react-native/commit/7b35f427fd66cb0f36921b992095fe5b3c14d8b9) by [@marcmulcahy](https://github.com/marcmulcahy))
- Upgraded to Hermes 0.4.0. If you're using ProGuard you will need to add the following rule to `proguard-rules.pro`: `-keep class com.facebook.jni.** { *; }` ([ab3c184555](https://github.com/facebook/react-native/commit/ab3c184555e382b8693cbfcdfe01ba89583ee726) by [@willholen](https://github.com/willholen))

#### Android specific

- Fix setting keyboardType from breaking autoCapitalize ([233fdfc014](https://github.com/facebook/react-native/commit/233fdfc014bb4b919c7624c90e5dac614479076f) by [@safaiyeh](https://github.com/safaiyeh))
- Limit size of video uploaded from camera roll in android (< 100 MB) ([d21f695edf](https://github.com/facebook/react-native/commit/d21f695edf367166a03af4c6e9376cd498b38665))
- Remove "Reload on JS change" from RN Android ([478df155e7](https://github.com/facebook/react-native/commit/478df155e70a4ce30219adcac6f0801c4e4d10ec) by [@cpojer](https://github.com/cpojer))

### Added

- Add support for Flipper by default ([multiple commits](https://github.com/facebook/react-native/pulls?q=is%3Apr+Flipper+is%3Aclosed))
- Add `getNativeScrollRef` method to FlatList component ([bde1d63c85](https://github.com/facebook/react-native/commit/bde1d63c853630609b22c87121c125775dd1f5cb) by [@kacieb](https://github.com/kacieb))
- Add missing accessibility props on Touchables ([8c0c860e38](https://github.com/facebook/react-native/commit/8c0c860e38f57e18296f689e47dfb4a54088c260) by [@xuelgong](https://github.com/xuelgong))
- Added missing `console` polyfills in release builds. ([b7ab922bb3](https://github.com/facebook/react-native/commit/b7ab922bb3fd4f9f103e583bed9e9295a9521578) by [@yungsters](https://github.com/yungsters))
- Platform.select now supports native as an option. ([a6fc0898de](https://github.com/facebook/react-native/commit/a6fc0898de990959d201b9665501deda215e41a4) by [@koke](https://github.com/koke))
- Export the DevSettings module, add `addMenuItem` method ([cc068b0551](https://github.com/facebook/react-native/commit/cc068b055185e6fb7341bf945f69a74ed3ef4814) by [@janicduplessis](https://github.com/janicduplessis))
- Expose RCTNetworking as a public 'Networking' API ([42ee5ec934](https://github.com/facebook/react-native/commit/42ee5ec93425c95dee6125a6ff6864ec647636aa) by [@adamchel](https://github.com/adamchel))
- Add `useColorScheme` hook ([51681e80ab](https://github.com/facebook/react-native/commit/51681e80ab0d1efdaba684b626994b694d53d2a5) by [@hramos](https://github.com/hramos))
- Add `unstable_enableLogBox` ([dd8e5f468a](https://github.com/facebook/react-native/commit/dd8e5f468a29e299647ffbd0887f53afd24936e3) by [@rickhanlonii](https://github.com/rickhanlonii))
- Expose Hermes Sampling Profiler ([15ecb60d6d](https://github.com/facebook/react-native/commit/15ecb60d6deb96fcb7b0ef70faccd10594ededa3) by [@axe-fb](https://github.com/axe-fb))
- Add `error-subclass-name` lint rule ([6611c4b8f4](https://github.com/facebook/react-native/commit/6611c4b8f42520add983cc48fe4e14f7a02cc7cf) by [@motiz88](https://github.com/motiz88))
- Add `HostComponent` to the public API of React Native ([a446a38aaa](https://github.com/facebook/react-native/commit/a446a38aaab5bea2e279f1958cfd90090bfd7e09) by [@TheSavior](https://github.com/TheSavior))
- Add `RCTExceptionsManager.reportException` ([9a57145f52](https://github.com/facebook/react-native/commit/9a57145f52a03678da02d5d00cbe11eed3f5a0fc) by [@motiz88](https://github.com/motiz88))
- Add `accessibilityValue` property ([7df3eea1a7](https://github.com/facebook/react-native/commit/7df3eea1a79f12c2dfff1976d0cef605a83232ec) by [@marcmulcahy](https://github.com/marcmulcahy))
- Add `Appearance` module to expose the user's current Night theme preference ([17862a78db](https://github.com/facebook/react-native/commit/17862a78db59d60fe316961f9111efc330ba2abd) [63fa3f21c5](https://github.com/facebook/react-native/commit/63fa3f21c5ab308def450bffb22054241a8842ef) by [@hramos](https://github.com/hramos))
- Add `onSlidingComplete` callbacks when sliders adjusted via a11y. ([c7aa6dc827](https://github.com/facebook/react-native/commit/c7aa6dc8270c0eabc913fe6c617c8131e3f4b3c5) by [@marcmulcahy](https://github.com/marcmulcahy))

#### Android specific

- Implement `adjustsFontSizeToFit` on Android ([2c1913f0b3](https://github.com/facebook/react-native/commit/2c1913f0b3d12147654501f7ee43af1d313655d8) by [@janicduplessis](https://github.com/janicduplessis))
- Allow overriding `EditText` construction in `ReactTextInputShadowNode` ([a5b5d1a805](https://github.com/facebook/react-native/commit/a5b5d1a805a9c54d325763b432be1cf2c8811dc9) by [@mchowning](https://github.com/mchowning))
- Add Android support for `fontVariant` prop ([c2c4b43dfe](https://github.com/facebook/react-native/commit/c2c4b43dfe098342a6958a20f6a1d841f7526e48) by [@mcuelenaere](https://github.com/mcuelenaere))
- Custom entry file on android using `ENTRY_FILE` environment variable ([a0d8740878](https://github.com/facebook/react-native/commit/a0d87408782fcf191988612198493d9130736c72))
- Added `statusBarTranslucent` prop to Modal component ([c35a419e5d](https://github.com/facebook/react-native/commit/c35a419e5d2eca4fe9cd0939df085088fa88423b) by [@pfulop](https://github.com/pfulop))
- Add `fadingEdgeLength` prop to FlatList and ScrollView ([51aacd5241](https://github.com/facebook/react-native/commit/51aacd5241c4b4c0b9b1e1b8f9dabac45e5b5291))
- Support `removeClippedSubviews` for horizontal ScrollViews ([42152a3fa3](https://github.com/facebook/react-native/commit/42152a3fa3f949f5112461753eb44a436355dfb1))
- Introducing `ReactCallerContextFactory` interface ([9713b63d9a](https://github.com/facebook/react-native/commit/9713b63d9ac1e1ae85accd86b78b351ac6295d01) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Added web socket support for macOS ([f21fa4ecb7](https://github.com/facebook/react-native/commit/f21fa4ecb73551bdc4c3d70db9fc13e93b19b3a6) by [@andymatuschak](https://github.com/andymatuschak))
- Added Warning message Linking API with Phones in iOS Simulator ([e1d89fbd9d](https://github.com/facebook/react-native/commit/e1d89fbd9df91679ec36e955a3d0f699c2d5e777) by [@espipj](https://github.com/espipj))
- Added missing deps for React-CoreModules ([15b2353382](https://github.com/facebook/react-native/commit/15b2353382c46dc5f0130ff44b9deb6a2361e3e5) by [@fkgozali](https://github.com/fkgozali))
- Expose the `isPackagerRunning` methods on RCTBundleURLProvider ([fe9cba74fa](https://github.com/facebook/react-native/commit/fe9cba74fa6241b4c38a3df9481d3634ebd51bf9) by [@afoxman](https://github.com/afoxman))
- Add `autoFocus` to TextInput ([6adba409e6](https://github.com/facebook/react-native/commit/6adba409e6256fd2dcc27a4272edcedae89927af) by [@janicduplessis](https://github.com/janicduplessis))

### Changed

- Upgrade metro version to 0.56.3 ([4b487ba500](https://github.com/facebook/react-native/commit/4b487ba50025becb6a83c805b99d45651db6b8c1) by [@EssamEmad](https://github.com/EssamEmad))
- Upgrade `eslint-plugin-relay` to 1.3.12 ([f0bcfbe9be](https://github.com/facebook/react-native/commit/f0bcfbe9be0eb6a06d096a682717a23e43c39d52) by [@jstejada](https://github.com/jstejada))
- Upgrade to Flow v0.108.0 ([d34bc5fa64](https://github.com/facebook/react-native/commit/d34bc5fa64a54dfc2e780461ee2997a4b17f8c65) by [@mvitousek](https://github.com/mvitousek))
- Upgrade metro babel preset ([cef001713f](https://github.com/facebook/react-native/commit/cef001713fc6384353bbcb4d45645ceee44ed1a9) by [@alloy](https://github.com/alloy))
- TextInput now properly sends native the end selection location on change ([dff490d140](https://github.com/facebook/react-native/commit/dff490d140010913d3209a2f3e987914b9c4eee4) by [@TheSavior](https://github.com/TheSavior))
- TextInput now uses `forwardRef` allowing it to be used directly by new APIs requiring a host component. ([bbc5c35a61](https://github.com/facebook/react-native/commit/bbc5c35a61cd3af47ccb2dc62430e4b6a4d4e08f) by [@TheSavior](https://github.com/TheSavior))
- TextInput no longer does an extra round trip to native on focus/blur ([e9b4928311](https://github.com/facebook/react-native/commit/e9b4928311513d3cbbd9d875827694eab6cfa932) by [@TheSavior](https://github.com/TheSavior))
- Render collapsed JavaScript frames in RedBox ([468d1a2d2e](https://github.com/facebook/react-native/commit/468d1a2d2e6c72d7c6d435ecaad8499997584de6) by [@motiz88](https://github.com/motiz88))
- Enable `no-useless-escape` lint rule ([90977b0e00](https://github.com/facebook/react-native/commit/90977b0e00acc6b3263502017c27094392e89478) by [@motiz88](https://github.com/motiz88))
- Update `DevSettings.reload` to accept a reason ([549cac63cb](https://github.com/facebook/react-native/commit/549cac63cb252037f73453c5d4e7ae5f15586607) by [@rickhanlonii](https://github.com/rickhanlonii))
- Move `react-native-implementation.js` to `index.js` ([e54ecf907e](https://github.com/facebook/react-native/commit/e54ecf907e9f0660d05dc807ec0e67127143ebed) by [@cpojer](https://github.com/cpojer))
- Delete Long Press Error in Touchable ([9a3d722ccb](https://github.com/facebook/react-native/commit/9a3d722ccb523f227ffd7770a809996e6cfe75d9) by [@yungsters](https://github.com/yungsters))
- Add Intl to eslint globals. ([f6a62f9ae2](https://github.com/facebook/react-native/commit/f6a62f9ae2278c0f3a1e5c1a6ec3b7cca3421a41))
- Add WebSocket to eslint globals ([af8ea06bb4](https://github.com/facebook/react-native/commit/af8ea06bb44e84ce51d4ca4e76f0d66bf34323bd) by [@dr2009](https://github.com/dr2009))
- Change default `accessibilityRole` of Switch component from `button` to `switch` ([36672c3851](https://github.com/facebook/react-native/commit/36672c3851a044a1ab0edcfaa2790c02f7909695) by [@alvinmatias69](https://github.com/alvinmatias69))

#### Android specific

- Bump gradle-download-task to 4.0.2 ([088be260b6](https://github.com/facebook/react-native/commit/088be260b6727ba82167fe58cb1ee4410a6920b2) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Gradle to 6.0.1 ([701e66bde4](https://github.com/facebook/react-native/commit/701e66bde4ea0e404626c7805e2bcdfa0c129c05) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Gradle wrapper 5.6.4 ([928f4434b9](https://github.com/facebook/react-native/commit/928f4434b9829c90098b1626b03938d932a9c1f6) by [@friederbluemle](https://github.com/friederbluemle))
- Bump Soloader to 0.8.0 ([614039834b](https://github.com/facebook/react-native/commit/614039834bf255de096f8b1d168832f81b0cf3fa))
- Update Android Gradle plugin to 3.5.2 ([b41b5ce8ae](https://github.com/facebook/react-native/commit/b41b5ce8ae2902169ae58860da2c70a9233bea53) by [@friederbluemle](https://github.com/friederbluemle))
- Improve exception message when JSC loading fails ([65d3167a80](https://github.com/facebook/react-native/commit/65d3167a802b2ca04d4f05ff972c2d51765f1e0d) by [@mhorowitz](https://github.com/mhorowitz))
- Expose `addCookies` method ([cc845ccfb4](https://github.com/facebook/react-native/commit/cc845ccfb4c0f841b876bca55c5f70efd72be538) by [@safaiyeh](https://github.com/safaiyeh))
- Migrated from libfb to libfbjni for JNI calls ([9ad5e72b77](https://github.com/facebook/react-native/commit/9ad5e72b77013083f925108870ea6b17f4711a1d) by [@passy](https://github.com/passy))
- Formatted cpp/h code with clang-format ([d5ba113bb2](https://github.com/facebook/react-native/commit/d5ba113bb2cd839ea38768785e527fbbc9636e41) by [@passy](https://github.com/passy))
- Switch MainActivity launchMode to singleTask ([7a42596438](https://github.com/facebook/react-native/commit/7a42596438018129d52ff04899ab4ddabd27cdcb) by [@dulmandakh](https://github.com/dulmandakh))
- Changing method signatures for ImageLoaderModule to accept double for requestId ([641e9657dd](https://github.com/facebook/react-native/commit/641e9657ddab5d1b2676e98d86fd369372281d2c) by [@ejanzer](https://github.com/ejanzer))
- Use Node's module resolution algorithm to find JSC & Hermes ([fc25f288fe](https://github.com/facebook/react-native/commit/fc25f288fe553cb7e8f04b8ce4b56297b7fa40d5) by [@ide](https://github.com/ide))
- Add `ACCESS_BACKGROUND_LOCATION` to PermissionsAndroid ([8c099b5f53](https://github.com/facebook/react-native/commit/8c099b5f53405fe0806113ca7ccf0bbe1af92a21) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- Add `xcscheme` files for iOS template back in. ([a715decd2d](https://github.com/facebook/react-native/commit/a715decd2d3bcdab9537f3246c8398ad9869e94e) by [@pvinis](https://github.com/pvinis))

### Deprecated

- Add deprecation warning to `AccessibilityInfo.fetch` ([523ab83338](https://github.com/facebook/react-native/commit/523ab8333800afbfb169c6fd70ab6611fe07cc2a) by [@TheSavior](https://github.com/TheSavior))
- Make setting `useNativeDriver` required. Add runtime warning if not specified ([5876052615](https://github.com/facebook/react-native/commit/5876052615f4858ed5fc32fa3da9b64695974238) by [@TheSavior](https://github.com/TheSavior))
- Refs on an Animated component are now the internal component. The `getNode` call has been deprecated. ([66e72bb4e0](https://github.com/facebook/react-native/commit/66e72bb4e00aafbcb9f450ed5db261d98f99f82a) by [@yungsters](https://github.com/yungsters))

#### iOS specific

- Deprecate `[bridge reload]`, prefer `RCTReloadCommand` ([ffe2306164](https://github.com/facebook/react-native/commit/ffe2306164ed7edfe5ab9d75b5122791037a852a) by [@PeteTheHeat](https://github.com/PeteTheHeat))

#### Android specific

- Deprecate `CallerContext` from `ReactImageManager` ([8accd77c45](https://github.com/facebook/react-native/commit/8accd77c45a4b051bf02904c3485d6a0dcd27631) by [@mdvacca](https://github.com/mdvacca))

### Removed

- Removing experimental `IncrementalPresenter` component ([0ef0d3167e](https://github.com/facebook/react-native/commit/0ef0d3167e291f31ce01ceb729df77cc679d2330) by [@TheSavior](https://github.com/TheSavior))
- TouchableWithoutFeedback no longer exports Props. Use React.ElementConfig, instead. ([7bcae81299](https://github.com/facebook/react-native/commit/7bcae812997f669de5803cc781dcf3ea65baf0e9) by [@yungsters](https://github.com/yungsters))
- Remove `Sample` and `CrashyCrash` Modules ([8ec7e0966c](https://github.com/facebook/react-native/commit/8ec7e0966cf83ed29a39aab47c686bc60a124983) by [@RSNara](https://github.com/RSNara))
- Remove `propTypes` from Animated components. ([86d90c03eb](https://github.com/facebook/react-native/commit/86d90c03ebe39ebc4b2c6dcc0747b4f3a34f5f2f) by [@yungsters](https://github.com/yungsters))
- Remove `propTypes` from TouchableHighlight. ([7c01172bef](https://github.com/facebook/react-native/commit/7c01172befd07f1d082b18993b87fc880e4b718f) by [@yungsters](https://github.com/yungsters))
- Remove `propTypes` from TouchableNativeFeedback. ([2185dd298a](https://github.com/facebook/react-native/commit/2185dd298a788c2b713ea17878fd36e06205b4da) by [@yungsters](https://github.com/yungsters))
- Remove `propTypes` from TouchableOpacity. ([88ae24f719](https://github.com/facebook/react-native/commit/88ae24f719d365b004696aff6461535188ca9f41) by [@yungsters](https://github.com/yungsters))
- Remove `propTypes` from TouchableWithoutFeedback. ([ebf7d75816](https://github.com/facebook/react-native/commit/ebf7d758164873169937321a4dccc3782359a0d3) by [@yungsters](https://github.com/yungsters))
- Remove `__skipSetNativeProps_FOR_TESTS_ONLY` from Animated components. ([dcd63078bd](https://github.com/facebook/react-native/commit/dcd63078bdab864830168005b940f638f1e08b23) by [@yungsters](https://github.com/yungsters))
- Remove Apple TV Props ([548aad4ff1](https://github.com/facebook/react-native/commit/548aad4ff1dfef0d71bdd39aa83ad71e522a2546) by [@yungsters](https://github.com/yungsters))

#### Android specific

- Remove `NativeRunnableDeprecated` ([973253af8a](https://github.com/facebook/react-native/commit/973253af8a47d9ebd137f554054e7a95f8ef2e45) by [@passy](https://github.com/passy))
- Remove `com.facebook.react.modules.debug.NativeSourceCodeSpec` ([4d9e5f8481](https://github.com/facebook/react-native/commit/4d9e5f8481531000380cf4d3d485fcde1321a37b) by [@RSNara](https://github.com/RSNara))

### Fixed

- Fix `require` cycle warning in ScrollResponder. ([674ac69cee](https://github.com/facebook/react-native/commit/674ac69cee7c1ce6096bee258880e79966322ee0) by [@Naturalclar](https://github.com/Naturalclar))
- Restore behavior for `underlayColor={null}` in `TouchableHighlight`. ([37d8440a8e](https://github.com/facebook/react-native/commit/37d8440a8e35a53b81914e429502db527790b3cd) by [@yungsters](https://github.com/yungsters))
- Fix stack traces showing the wrong function name in some cases ([60b4ba16c0](https://github.com/facebook/react-native/commit/60b4ba16c008c23959ebd27ea7215f83878d1343) by [@motiz88](https://github.com/motiz88))
- Fix `requestAnimationFrame` when focusing input on mount ([5798cf2aa9](https://github.com/facebook/react-native/commit/5798cf2aa9b86bbcb40016aae14eca88fca19fde) by [@janicduplessis](https://github.com/janicduplessis))
- Reduce overhead of setting up timers in DEV ([75a154b449](https://github.com/facebook/react-native/commit/75a154b4499e44b4ab31ccf28f9eb1dbf21578ac) by [@motiz88](https://github.com/motiz88))
- Fixed an issue where margin and padding were resolved incorrectly. ([1d683faf1d](https://github.com/facebook/react-native/commit/1d683faf1dc89e4950e7e1f5c5a67f9a7ca1ee24) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Fix using width for calculating margin top percent ([0599af2282](https://github.com/facebook/react-native/commit/0599af2282ffbf636604bce1cb4c049201fed393) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Don't restore default values in NativeAnimated when components unmount ([686ab49107](https://github.com/facebook/react-native/commit/686ab49107df8ed20d4e810f1366715cd70b4a31) by [@janicduplessis](https://github.com/janicduplessis))
- Fix eslint-config peer dependency warnings ([1353da5a53](https://github.com/facebook/react-native/commit/1353da5a538d4a6f76fc9530711394cf981034a0) by [@friederbluemle](https://github.com/friederbluemle))
- Remove style rules from eslint config for prettier options ([e4b62bb139](https://github.com/facebook/react-native/commit/e4b62bb139c258b65a9ebf2a8ee692ea52c3afab) by [@iRoachie](https://github.com/iRoachie))
- Fix separators displays in wrong places with the inverted list ([dfb4f4af68](https://github.com/facebook/react-native/commit/dfb4f4af68726d2e05f63689a9c74c9bb9a0611b) by [@dy93](https://github.com/dy93))
- Fix issue where we attempt to connect to React devtools every 2 seconds ([e7f6210d5d](https://github.com/facebook/react-native/commit/e7f6210d5d417c5b6d4ba7f5cf96b40dbf70b9cd) by [@ejanzer](https://github.com/ejanzer))
- Fix so that early logs don't get dropped by Metro ([4ed05ca241](https://github.com/facebook/react-native/commit/4ed05ca241b791ad629fd154429a4a53c7731556) by [@gaearon](https://github.com/gaearon))
- Fix to announce accessibility state changes happening in the background ([baa66f63d8](https://github.com/facebook/react-native/commit/baa66f63d8af2b772dea8ff8eda50eba264c3faf) by [@xuelgong](https://github.com/xuelgong))
- Fix `JSBigString` not compiling on Windows due to Unix-specific headers ([80857f295c](https://github.com/facebook/react-native/commit/80857f295c17e5f8966b3d1c1207d3c4570a1b26) by [@empyrical](https://github.com/empyrical))
- Fix exception in `scrollResponderScrollNativeHandleToKeyboard` when ref is null ([da8ae011bb](https://github.com/facebook/react-native/commit/da8ae011bbabc8acb7ef7f6903f68dd60aaa1f9d) by [@TheSavior](https://github.com/TheSavior))
- Fix excessive toggles on the Switch component ([b782934f3f](https://github.com/facebook/react-native/commit/b782934f3f2a80ae7e3872cc7d7a610aa6680ec4) by [@rurikoaraki](https://github.com/rurikoaraki))
- Fix bare hosts in `URL`. Add missing / between url ([20ab946f34](https://github.com/facebook/react-native/commit/20ab946f34b1d9727ff08c733b2006e84fd79349) by [@jeswinsimon](https://github.com/jeswinsimon))
- Fix the non-standard usage of `ATOMIC_VAR_INIT` macro from code with systrace enabled ([75a7a52db4](https://github.com/facebook/react-native/commit/75a7a52db496bd3892a367372eea25bf50840fc3))
- Fix `useWindowDimensions` hook firing continuously after dimensions change ([3b3c95b017](https://github.com/facebook/react-native/commit/3b3c95b0170e60983eb6e89b910d100d08eee141) by [@dulmandakh](https://github.com/dulmandakh))
- Fix throttling in ScrollView ([4159e20146](https://github.com/facebook/react-native/commit/4159e201462c346c456de1fa869d88a9cce7b6d4) by [@sammy-SC](https://github.com/sammy-SC))
- Fix `TimingAnimation` rounding error issue ([77b6e26538](https://github.com/facebook/react-native/commit/77b6e2653835af61b186903eae45d67f35351ade) by [@MartinSherburn](https://github.com/MartinSherburn))
- Fix recycling of Switch ([a261e6dfb2](https://github.com/facebook/react-native/commit/a261e6dfb2680a955943db53c4b0a7bb887bfe22) by [@sammy-SC](https://github.com/sammy-SC))

#### Android specific

- Fix to reset sMatrixDecompositionContext before applying transformations ([bf01dfbc97](https://github.com/facebook/react-native/commit/bf01dfbc97ea8be9d88214ab31809f2f42d6c064) by [@makovkastar](https://github.com/makovkastar))
- Fix animations in OSS debug builds by modifying `Platform.isTesting()` behavior ([1fbc6a7c17](https://github.com/facebook/react-native/commit/1fbc6a7c178d13421b0b84d6ea01f9174105325f) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix Modal not disappearing when reloading ([5ddf00ee1a](https://github.com/facebook/react-native/commit/5ddf00ee1acbf66c7204227c398a58c13e4545cf) by [@sunnylqm](https://github.com/sunnylqm))
- Fix to support nullable returns NativeModule methods returning Boxed Primitives ([f57b0caaa4](https://github.com/facebook/react-native/commit/f57b0caaa4452c64006c159cd28a1a562b332c21) by [@RSNara](https://github.com/RSNara))
- Fix crash in TextInput ([6ebd3b046e](https://github.com/facebook/react-native/commit/6ebd3b046e5b71130281f1a7dbe7220eff95d74a) by [@MarcoPolo](https://github.com/MarcoPolo))
- Fix View.getGlobalVisibleRect() to clip result rect properly when overflow is 'hidden' ([df9abf7983](https://github.com/facebook/react-native/commit/df9abf798351c43253c449fe2c83c2cca0479d80) by [@davidbiedenbach](https://github.com/davidbiedenbach))
- Fix throwing "Unknown array type" exception ([4b9350061f](https://github.com/facebook/react-native/commit/4b9350061fa3d186fdd3a973e1b46f60a7ac03b9) by [@petterh](https://github.com/petterh))
- Fix issue with refresh control not working properly on an inverted ScrollView ([0a282c42b4](https://github.com/facebook/react-native/commit/0a282c42b4d1c2316513cd5588a0a92b54db2991) by [@migbot](https://github.com/migbot))
- Fix to listen to NFC actions for linking url events ([8d8c3d4e1e](https://github.com/facebook/react-native/commit/8d8c3d4e1eb88366074e87385c4d96a46dfdd544) by [@cimitan](https://github.com/cimitan))
- Fix onPress prop for Touchable Components being called twice on AndroidTV. ([21890e964d](https://github.com/facebook/react-native/commit/21890e964df7674fcf13cefc8cb939441f6eddef) by [@dbarr33](https://github.com/dbarr33))
- Fix `includeFontPadding` for `TextInput` placeholder ([211ea485cd](https://github.com/facebook/react-native/commit/211ea485cd993ca25d6640be41e54f327ca1629c) by [@janicduplessis](https://github.com/janicduplessis))
- Fix medium font weights for TextInput on Android ([8b9f790069](https://github.com/facebook/react-native/commit/8b9f7900697b2e4bb72b37ed2e6c3d113185d327) by [@janicduplessis](https://github.com/janicduplessis))
- Fix close button issue in KeyboardAvoidingView ([f1c6029e48](https://github.com/facebook/react-native/commit/f1c6029e4868084e5a10d81c15ee3cc5e301599a) by [@saxenanickk](https://github.com/saxenanickk))
- Fix activity recreation on theme change ([83a16b16c9](https://github.com/facebook/react-native/commit/83a16b16c9afa0fe0328ab818470d4fce098876b) by [@Esemesek](https://github.com/Esemesek))
- Fix ForwardingCookieHandler missing WebView exceptions. ([314eba98b2](https://github.com/facebook/react-native/commit/314eba98b2f2755cb26ed7a268d3fe83a7626efa) by [@siddhantsoni](https://github.com/siddhantsoni))
- Fix ReactInstanceManagerBuilder.build crashing if SoLoader has not been explicitly initialized ([60e00d9d96](https://github.com/facebook/react-native/commit/60e00d9d96d7b186c1d4c1542caddc1b74eeb3da) by [@petterh](https://github.com/petterh))
- Fix default accessibility hint not being read. ([f8dff0bcb3](https://github.com/facebook/react-native/commit/f8dff0bcb3147b7a1aa8ac7159952d848e198e29))
- Fix JS bundle loading progress bar ([7b9d6d19e2](https://github.com/facebook/react-native/commit/7b9d6d19e2c0854aa53587ef68ce715fb7803e2a) by [@makovkastar](https://github.com/makovkastar))
- Fix Android Q related NaN error - don't try to do math with NaN values ([db5994980d](https://github.com/facebook/react-native/commit/db5994980df136c5cce6cd90348b4bf18180562f))
- Fix throwing exceptions when the host activity is not FragmentActivity ([7cfabf42b8](https://github.com/facebook/react-native/commit/7cfabf42b816de758d8e52896bbab0c50e3a802a) by [@mganandraj](https://github.com/mganandraj))
- Fix crash when using `TextInput.FontVariant` prop in Android API level < 26 ([e885ddedb9](https://github.com/facebook/react-native/commit/e885ddedb9b0a025cb8031414dcc4bd22744a0eb) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Fix support for `onRequestClose` in Modal on iOS 13+ ([8e5fac89bb](https://github.com/facebook/react-native/commit/8e5fac89bbdcc3028bb5d81a358969a235abf991) by [@koke](https://github.com/koke))
- Fix `Dimensions` module to update on initial split screen ([7a72c35a20](https://github.com/facebook/react-native/commit/7a72c35a20a18c19bf6ab883cb2c53a85bd4c5c0) by [@sahrens](https://github.com/sahrens))
- Fix spinner visibility on `beginRefreshingProgrammatically` ([e341489521](https://github.com/facebook/react-native/commit/e341489521ad495e68e8aba01ff4dd25a5e4ff3e) by [@nnabinh](https://github.com/nnabinh))
- Reconnect to debugger websocket after Metro is restarted. ([13992f90e4](https://github.com/facebook/react-native/commit/13992f90e48fc11e0b7217ee6d9413f97c32268a) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix Slider not disabling properly if the disabled prop is set. ([fa9ff07017](https://github.com/facebook/react-native/commit/fa9ff07017edbc76595fe2f2d964ee13c5f4088a))
- Fix apps crashing on iOS 13.x when running timer in the background ([e1d03b4cc0](https://github.com/facebook/react-native/commit/e1d03b4cc00c361e10687eb4a9f902563cd1cbe1) by [@radko93](https://github.com/radko93))
- Fix TextInput blur when tabbing in iOS simulator. ([a7437710d2](https://github.com/facebook/react-native/commit/a7437710d25adfc9150fc079e4525ed59d5404e2) by [@fat](https://github.com/fat))
- Fix promised returned by `Share.share(content, options)` not resolving if share dialog dismissed ([7468a6c903](https://github.com/facebook/react-native/commit/7468a6c9033ffe8cc2315a3de3a759b8745fe43d) by [@v-fernandez](https://github.com/v-fernandez))
- Fix maximum searching depth while measuring layout by removing it. ([2f8328dbb0](https://github.com/facebook/react-native/commit/2f8328dbb0d9813c904c0b888b2b7500cf4a4bce) by [@draws](https://github.com/dratwas))
- Fix SafeAreaInsets call to not crash on older versions of iOS ([03acf57b76](https://github.com/facebook/react-native/commit/03acf57b767553acbee4ff589055fbd239ffffbb) by [@mmmulani](https://github.com/mmmulani))
- Fix to retain `cropData` struct arg in ImageEditingManager.cropImage call ([002d3c179d](https://github.com/facebook/react-native/commit/002d3c179dd2515f0a4d894d9b7f70c4e538f728) by [@RSNara](https://github.com/RSNara)))
- Fix bug rendering nested text on iOS13 ([06599b3e59](https://github.com/facebook/react-native/commit/06599b3e594355a1d5062ede049ff3e333285516) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix longstanding bug where RCTNullIfNil() can return nil ([79b573511b](https://github.com/facebook/react-native/commit/79b573511bd55e6c82c0044e1930549ccfa8a923) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix crash in RCTScrollViewComponentView ([e7ef9921d3](https://github.com/facebook/react-native/commit/e7ef9921d3f91b02cfec4bbfd88b4968434e201c) by [@shergin](https://github.com/shergin))
- Fix how the amount of free memory is calculated to mimic the logic Apple uses. ([b53d3d80f9](https://github.com/facebook/react-native/commit/b53d3d80f991937915a87ba8515f403551de139e))
- Fix animated gifs incorrectly looping ([6f2e6f170e](https://github.com/facebook/react-native/commit/6f2e6f170e3ee785d1ba844971447ea24f91185e) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix `tintColor` in SegmentedControlIOS component ([be89e4d928](https://github.com/facebook/react-native/commit/be89e4d928a504de304f5afb19bd3cc15ae3eb7d) by [@sammy-SC](https://github.com/sammy-SC))

## v0.61.5

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/151) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixes

#### Android specific

- Fix bundling assets in monorepo ([a3b0804867](https://github.com/facebook/react-native/commit/a3b08048674e324dbe1f0ca816f35607e9e06a2f) by [@Esemesek](https://github.com/Esemesek))
- Fix multiple `set-cookie` not aggregated correctly in response headers ([1df8bd4932](https://github.com/facebook/react-native/commit/1df8bd4932f42958c01dccf44cee92b75a6988ed) by **Vincent Cheung**)

## v0.61.4

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/150) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixed

- Fix build with Hermes on Windows ([81a6b6ed3c](https://github.com/facebook/react-native/commit/81a6b6ed3c54498f6f2148c106846352405949bf) by [@B27](https://github.com/B27))
- Fix Chrome debugger showing console.logs at incorrect locations ([42ac240bce](https://github.com/facebook/react-native/commit/42ac240bceb104474494c6007df0089baec00f7a) by [@rickhanlonii](https://github.com/rickhanlonii))

#### iOS specific

- Fix bug in iOS 13 when application would be terminated immediately when in background ([d7c9173b07](https://github.com/facebook/react-native/commit/d7c9173b07171164bcadf73855454e90e07b31be) by [@radko93](https://github.com/radko93))

## v0.61.3

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/148) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixed

- Fix bug where ScrollView contentInset top set to undefined wouldn't default to 0 ([d576a5bcc0](https://github.com/facebook/react-native/commit/d576a5bcc0e03dd9c4ccd982f723d6e376e5b680) by [TheSavior](https://github.com/TheSavior))
- Fix TimingAnimation rounding error issue ([bfd01552af](https://github.com/facebook/react-native/commit/bfd01552af6c074a425da2e7cc1a5908faba2644) by [MartinSherburn](https://github.com/MartinSherburn))

#### iOS specific

- Fix selecting videos from library in iOS 13 ([63769518e0](https://github.com/facebook/react-native/commit/63769518e0c7db60eb39bb5f47fe24f4bc664862) by [fatalsun](https://github.com/fatalsun))
- Fix bug in iOS13 nested text rendering ([7cf43afa8d](https://github.com/facebook/react-native/commit/7cf43afa8d6a03ccb4cfdc09f81891eabe8b8b70) by [PeteTheHeat](https://github.com/PeteTheHeat))

#### Android specific

- Release underlying resources when JS instance is GC'ed on Android try ([9b2374b542](https://github.com/facebook/react-native/commit/9b2374b542f87b7baefcfb4a3eb4f57029069b57) by [janicduplessis](https://github.com/janicduplessis))

## v0.61.2

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/146) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixed

#### Android specific

- Fix elevation issues on Android ([8fd9ab2f54](https://github.com/facebook/react-native/pull/26682) by [@grabbou](https://github.com/grabbou))

### Added

- Use `warnOnce` for excessive number of callbacks error ([0cafa0f5d1](https://github.com/facebook/react-native/commit/0cafa0f5d1e7fa5369b765f4b97f38bf1608230a) by [@janicduplessis](https://github.com/anicduplessis))
- Include transform in OUTER_PROPS ([b94438](https://github.com/facebook/react-native/commit/b94438) by [@migbot](https://github.com/migbot))

#### iOS specific

- Better iOS13 support in `StatusBar` API ([796b3a1f88](https://github.com/facebook/react-native/commit/796b3a1f8823c87c9a066ea9c51244710dc0b9b5) by [@gaodeng](https://github.com/gaodeng))

#### Android specific

- Improve error message in NativeModuleRegistryBuilder ([113c4e229c](https://github.com/facebook/react-native/commit/113c4e229c374232c46a89afd74df7117a3447c1) by [@vonovak](https://github.com/vonovak))

## v0.61.1

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/144) to improve the quality of the 0.60 release. Thanks to everyone who contributed!

### Fixed

#### iOS specific

- Fix ShareSheet crash on iOS 13 ([a4fbb8e75b](https://github.com/facebook/react-native/commit/a4fbb8e75bd9f521037926a68a8b75eaca2eca74) by [@tomtargosz](https://github.com/tomtargosz))

#### Android specific

- Allow again for injecting custom root view via ReactActivityDelegate ([9f0dede1c9](https://github.com/facebook/react-native/commit/9f0dede1c913612e1241432f4cbccdc74d23a1e4) by [@kmagiera](https://github.com/kmagiera))

## v0.61.0

This is a major release that includes the new reloading experience Fast Refresh. It also removes the React `.xcodeproj`, fixes `use_frameworks!` for CocoaPods support, adds a `useWindowDimensions` hook, and upgrades to React 16.9.

### Added

- Add Fast Refresh by default ([17f8e5810f](https://github.com/facebook/react-native/commit/17f8e5810f3260ce1b24c61665883bab8847aabe) by [@gaearon](https://github.com/gaearon))
- Add `useWindowDimensions` hook to replace most `Dimensions` usage ([103ec2f770](https://github.com/facebook/react-native/commit/103ec2f770dbb785ef4bc26f8662c74edded796a) by [@sahrens](https://github.com/sahrens))

#### Android specific

- Add exception in .gitignore for `debug.keystore` to the android template. ([d55025694b](https://github.com/facebook/react-native/commit/d55025694be8b4ee5d09c8fdc910d42a5f144883) by [@bondehagen](https://github.com/bondehagen))
- Add jitpack repository to template ([1a92cf9b2a](https://github.com/facebook/react-native/commit/1a92cf9b2afa718a81299b4be5ab6bdff16f4863) by [@iyegoroff](https://github.com/iyegoroff))

#### iOS specific

- Add RCTWeakProxy to properly deallocate RCTUIImageViewAnimated ([947e71a922](https://github.com/facebook/react-native/commit/947e71a922c0db5d3d3780d249d1a8d183534c22) by [@mmmulani](https://github.com/mmmulani))

### Changed

- Use prettyFormat for Metro logging ([abd7faf354](https://github.com/facebook/react-native/commit/abd7faf3547e165abfc52383d3709b9d4d2e9006) by [@cpojer](https://github.com/cpojer))
- Tweak messages and fix the warning condition ([2a3ac0429b](https://github.com/facebook/react-native/commit/2a3ac0429b0e4c443d185807a39b41fc5a2ab1d2) by [@gaearon](https://github.com/gaearon))
- Allow jest globals in **mocks** directories ([e78c01375a](https://github.com/facebook/react-native/commit/e78c01375aef88e0bb4029479acac9e85ecaf080) by [@artdent](https://github.com/artdent))
- Make Animation EndCallback type allow any return value ([306c8d64d9](https://github.com/facebook/react-native/commit/306c8d64d91f87b248f627333de7f24355248088) by [@draperunner](https://github.com/draperunner))
- create two layout pass reason flexLayout and flexMeasure instead of flex ([6ce985463b](https://github.com/facebook/react-native/commit/6ce985463b2724451baed8b0486b298f969e36e7) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Use shorthand for Fragment in App.js ([7cac6a4b6c](https://github.com/facebook/react-native/commit/7cac6a4b6cfa8c1b54db62f2b1510f7c52f4574d) by [@ferdicus](https://github.com/ferdicus))
- Use eslint-plugin-prettier recommended config ([d2b92fffb1](https://github.com/facebook/react-native/commit/d2b92fffb1d14dd0ec628e9dcdfd76e39f2067ff) by [@Justkant](https://github.com/Justkant))
- Support string command arguments ([0314305e12](https://github.com/facebook/react-native/commit/0314305e1202e48c74091e15da8574f1b92ce441) by [@TheSavior](https://github.com/TheSavior))
- chore: Link to CLA wiki and CLA form. ([e2d55d5c5e](https://github.com/facebook/react-native/commit/e2d55d5c5ef40ccae3220dc0e1fca7cf3592c676) by [@JustinTRoss](https://github.com/JustinTRoss))
- CLI is now ^3.0.0-alpha.1 ([5edd1c674c](https://github.com/facebook/react-native/commit/5edd1c674c911a6c59aaad8ed36ce12fa98787ff) by [@thymikee](https://github.com/thymikee))
- Flow is now v0.104.0 ([59db059dbd](https://github.com/facebook/react-native/commit/59db059dbddb8101212f3739eecf0db494cfab41) by [@mroch](https://github.com/mroch))
- React is now at 16.9 ([40e8a5f685](https://github.com/facebook/react-native/commit/40e8a5f685376300aa5365de4557cd395996b9a2), [0ccedf3964](https://github.com/facebook/react-native/commit/0ccedf3964b1ebff43e4631d1e60b3e733096e56) by [@TheSavior](https://github.com/TheSavior))
- Use Metro for auto-collapsing internal stack frames ([77125a1ac3](https://github.com/facebook/react-native/commit/77125a1ac364a6b7e2382fdc86cc19a3e2eba089) by [@motiz88](https://github.com/motiz88))
- Move React error message formatting into ExceptionsManager ([2dadb9e2b0](https://github.com/facebook/react-native/commit/2dadb9e2b0ba26223ed83a30af620ce3e62e245f) by [@motiz88](https://github.com/motiz88))
- Improve VirtualizedList error message ([bef87b648c](https://github.com/facebook/react-native/commit/bef87b648c4bed228f1c5889abe0181a271edf76) by [@vonovak](https://github.com/vonovak))

#### Android specific

- Bump Hermes to v0.2.1 ([811401bcac](https://github.com/facebook/react-native/commit/811401bcac02f3e6e154c7e0f76f9f82eeaa6959) by [@sunnylqm](https://github.com/sunnylqm))
- Use centralized package for DoNotStrip annotation ([35fc0add2d](https://github.com/facebook/react-native/commit/35fc0add2d3a278bf90257284fe23e03898008de) by [@passy](https://github.com/passy))

#### iOS specific

- Do not override ActivityIndicator color when setting its size ([14b0ed4c5d](https://github.com/facebook/react-native/commit/14b0ed4c5d872cd992f6e1ca072a2c44c8ece25f) by [@cabelitos](https://github.com/cabelitos))
- fix display problems when image fails to load ([71d7d6883c](https://github.com/facebook/react-native/commit/71d7d6883cb9a3d18666f04a444de7b4a611b304))
- Renamed yoga podspec to Yoga ([82a8080f07](https://github.com/facebook/react-native/commit/82a8080f0704e83079d0429e4e367f5131052e64) by [@axe-fb](https://github.com/axe-fb))
- Update loading pre-bundled message ([eb92f8181f](https://github.com/facebook/react-native/commit/eb92f8181f3119bbc69ff7cb5aff2e03d993b8b3) by [@rickhanlonii](https://github.com/rickhanlonii))

### Deprecated

- Deprecate method UIManagerModule.playTouchSound() ([e3ec8dbe15](https://github.com/facebook/react-native/commit/e3ec8dbe15a07e86530e1fd801c27ad8c1023b5c) by [@mdvacca](https://github.com/mdvacca))
- Deprecate UIManager.measureLayoutRelativeToParent ([e42009b784](https://github.com/facebook/react-native/commit/e42009b7849f1cfd6d6d34e28c564ec5e39680bb) by [@mdvacca](https://github.com/mdvacca))

#### Android specific

- DrawerLayoutAndroid drawerPosition now expects a string, number is deprecated ([305b0a2814](https://github.com/facebook/react-native/commit/305b0a28142414d559d2d08795a5963716dc4b0f) by [@TheSavior](https://github.com/TheSavior))

### Removed

#### Android specific

- Remove supportLibVersion variable in build.gradle ([fee7f0617e](https://github.com/facebook/react-native/commit/fee7f0617ee6e4f10edf6b8e36da6c5fb00d22ac) by [@ferdicus](https://github.com/ferdicus))

#### iOS Specific

- Remove 's.static_framework = true' requirement for podspec ([ca9e108110](https://github.com/facebook/react-native/commit/ca9e108110e4a3cc39044805f879d9a9cb637c41) by [@jtreanor](https://github.com/jtreanor))

### Fixed

- Add ErrorUtils to eslint globals ([76af5f9163](https://github.com/facebook/react-native/commit/76af5f916303d7906ea522076c965292145a1370) by [@rodineijf](https://github.com/rodineijf))
- URL: Do not prepend baseUrl if the URL is not a relative URL ([e104204ae0](https://github.com/facebook/react-native/commit/e104204ae083d31e0b9967373ce79f2f1ca8fbb6) by [@jeswinsimon](https://github.com/jeswinsimon))
- Memory Leak due to JSStringRelease not called ([b8d6ef3726](https://github.com/facebook/react-native/commit/b8d6ef372663fe6d467144abfc5d2c9352dc28d6) by [@sachinservicemax](https://github.com/sachinservicemax))
- Fixed rotateZ native animation ([f4f08d3c54](https://github.com/facebook/react-native/commit/f4f08d3c549f2af7cd04ef78fe800d3bc12af1f0) by [@Titozzz](https://github.com/Titozzz))
- Fix indentation in Gradle files ([9b0adb5ad1](https://github.com/facebook/react-native/commit/9b0adb5ad132b8ff37e707a4943411d92b4e58dc) by [@sonicdoe](https://github.com/sonicdoe))
- Fix handling of failed image downloads ([71d7d6883c](https://github.com/facebook/react-native/commit/71d7d6883cb9a3d18666f04a444de7b4a611b304) by [@sammy-SC](https://github.com/sammy-SC))
- Fix SectionList scrollToLocation and prevent regressions ([8a82503b54](https://github.com/facebook/react-native/commit/8a82503b54e3c63230a07de99ec082b2dcb54bc7) by [@vonovak](https://github.com/vonovak))
- [General][internal] Fix incorrect `module.name_mapper` in template .flowconfig ([e6b2cf0418](https://github.com/facebook/react-native/commit/e6b2cf04188fc9647bae4bef4cca5d4dde22a657) by [@MoOx](https://github.com/MoOx))
- Fall back to `JSON.stringify` in `console.log` if Symbol is unavailable ([179889704b](https://github.com/facebook/react-native/commit/179889704b6f9d56cb990d5b9bba6ee5ea2cd13f) by [@cpojer](https://github.com/cpojer))
- Pop frames correctly in console.error handler ([3eaf245540](https://github.com/facebook/react-native/commit/3eaf2455402b5ad73c8a059311f0cb213df9dd28) by [@motiz88](https://github.com/motiz88))
- Add documentation to TextInput's Flow types ([d00f0882fb](https://github.com/facebook/react-native/commit/d00f0882fbdd532f8698d2569bd771ca5843d0f5) by [@empyrical](https://github.com/empyrical))

#### Android specific

- Add missing Hermes include ([1db96a3c46](https://github.com/facebook/react-native/commit/1db96a3c469b872e851553207e5420d54afc731a) by [@janicduplessis](https://github.com/janicduplessis))
- Fix UIManager.measure to consider scale and rotation transforms ([28d50189f3](https://github.com/facebook/react-native/commit/28d50189f3350e7550bf03ea5bd1363839ee2911) by [@floriancargoet](https://github.com/floriancargoet))

#### iOS specific

- Fixed iOS packager connection ([4ab9da134c](https://github.com/facebook/react-native/commit/4ab9da134c988db832b1a2daa90ce38bf8c419eb) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fixed compatibility with CocoaPods frameworks. ([8131b7bb7b](https://github.com/facebook/react-native/commit/8131b7bb7b4794e0e7003a6e3d34e1ebe4b8b9bc) by [@jtreanor](https://github.com/jtreanor))
- Don't call sharedApplication in App Extension ([c5ea18f738](https://github.com/facebook/react-native/commit/c5ea18f7389fe821e7a9882e4b1b30b0a1b266f4) by [@zhongwuzw](https://github.com/zhongwuzw))

## v0.60.6

This is a small patch release with a commit to fix the build break in MSVC to help the users of react-native-windows. ([9833ee7bc1](https://github.com/facebook/react-native/commit/9833ee7bc19982acd6ccaf6ac222bc24a97667a8) by [@acoates-ms](https://github.com/acoates-ms))

## v0.60.5

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/130) to improve the quality of the 0.60 release. Thanks to everyone who contributed!

### Added

- Added a default Prettier config for new projects ([7254bab0b3](https://github.com/facebook/react-native/commit/7254bab0b3fa129cd238783ab993fbae1102d60a) by [@jpdriver](https://github.com/jpdriver))

#### Android specific

- Add showSoftInputOnFocus to TextInput ([d88e4701fc](https://github.com/facebook/react-native/commit/d88e4701fc46b028861ddcfa3e6ffb141b3ede3d))

### Changed

- Bump CLI to ^2.6.0 ([fafe5ee072](https://github.com/facebook/react-native/commit/fafe5ee0726061e3590b91d3b5cff04e33781f87) by [@thymikee](https://github.com/thymikee))

### Fixed

- Ensure right version of Metro bundler is used ([1bb197afb1](https://github.com/facebook/react-native/commit/1bb197afb191eab134354386700053914f1ac181) by [@kelset](https://github.com/kelset))

#### Android specific

- Fix `ClassNotFound` exception in Android during Release builds ([ffdf3f22c6](https://github.com/facebook/react-native/commit/ffdf3f22c68583fe77517f78dd97bd2e97ff1b9e) by [@thecodrr](https://github.com/thecodrr))
- Remove unnecessary flag when running JS server ([a162554f5d](https://github.com/facebook/react-native/commit/a162554f5dc36fa0647b5bf52119a62bd20046e3) by [@thecodrr](https://github.com/thecodrr))
- Correctly set the border radius on android ([b432b8f13b](https://github.com/facebook/react-native/commit/b432b8f13b4871dcafd690e57d37298662712b50) by [@cabelitos](https://github.com/cabelitos))
- Fix addition of comma at the end of accessibility labels on Android. ([812abfdbba](https://github.com/facebook/react-native/commit/812abfdbba7c27978a5c2b7041fc4a900f3203ae) by [@marcmulcahy](https://github.com/marcmulcahy))

#### iOS specific

- Don't call sharedApplication in App Extension ([c5ea18f738](https://github.com/facebook/react-native/commit/c5ea18f7389fe821e7a9882e4b1b30b0a1b266f4) by [@zhongwuzw](https://github.com/zhongwuzw))
- Delete fishhook ([46bdb4161c](https://github.com/facebook/react-native/commit/46bdb4161c84b33f1d0612e9c7cdd824462a31fd) by [@mmmulani](https://github.com/mmmulani))

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## v0.60.4

This is a patch release that contains two more Hermes related fixes, thanks to the contributors for helping improving the support!

### Fixed

#### Android specific

- Generate correct source map if hermes not enabled ([b1f81be4bc](https://github.com/facebook/react-native/commit/b1f81be4bc21eb9baa39dd7ef97709d9927ad407) by [@HazAT](https://github.com/HazAT))
- Generate source maps outside of assets/ ([60e75dc1ab](https://github.com/facebook/react-native/commit/60e75dc1ab73b2893ec2e25c0320f32b3cf12b80) by [@motiz88](https://github.com/motiz88))

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## v0.60.3

This is a patch release that fixes the binary path to Hermes package, thanks to [@zoontek](https://github.com/zoontek)) for creating the PR!

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## v0.60.2

This is a patch release that fixes the path to Hermes package.

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## v0.60.1

This is a patch release that includes the Hermes JavaScript Engine announced at Chain React Conf 2019.

Check out the documentation to opt-in and give [Hermes a try](https://reactnative.dev/docs/hermes).

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## v0.60.0

This feature release of React Native includes many milestone changes for the platform. Please refer to the [blog post](https://reactnative.dev/blog/2019/07/03/version-60) for selected details. For upgrading users, some of the progress comes with breaking changes; manual intervention may be required for your app. We're also aware that existing CocoaPods integrations using `use_frameworks` are not out-of-the-box compatible with this version, but please consider [various workarounds](https://github.com/facebook/react-native/issues/25349) while we prepare a long-term solution for a future release. If you're interested in helping evaluate our next release (0.61), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/130).

Have you ever considered contributing to React Native itself? Be sure to check out [Contributing to React Native](https://github.com/facebook/react-native/blob/master/CONTRIBUTING.md).

### Added

- CLI autolinking support ([5954880875](https://github.com/facebook/react-native/commit/5954880875d8dfb9b7868aa316647f8fe2b3d8c3), [da7d3dfc7d](https://github.com/facebook/react-native/commit/da7d3dfc7d3bd83e7522175a720b30fee4c9b3d3) by [@zhongwuzw](https://github.com/zhongwuzw) and [@hramos](https://github.com/hramos))
- New Intro screen ([6b393b27e1](https://github.com/facebook/react-native/commit/6b393b27e18e663d39b66fd121ee302bce29d77d), [233fddbe01](https://github.com/facebook/react-native/commit/233fddbe012098dce3719ba066d3dc653e05e6c9), [fe88e9e48c](https://github.com/facebook/react-native/commit/fe88e9e48ce99cb8b9da913051cc36575310018b), [aa926e349b](https://github.com/facebook/react-native/commit/aa926e349b1656b02b8c1a2048cc56b25f9567c1), [a9e8a71e53](https://github.com/facebook/react-native/commit/a9e8a71e531510baf126780cecdcbc64c934f4dd), [ad4a5d9a3e](https://github.com/facebook/react-native/commit/ad4a5d9a3eac9794038e93158d45e7f1ceb9e495), and [0245fd713e](https://github.com/facebook/react-native/commit/0245fd713ea9ff6fe334980f537e2254a9e3126c) by [@cpojer](https://github.com/cpojer), [@eliperkins](https://github.com/eliperkins), [@lucasbento](https://github.com/lucasbento), [@orta](https://github.com/orta), [@adamshurson](https://github.com/adamshurson), [@karanpratapsingh](https://github.com/karanpratapsingh) and [@glauberfc](https://github.com/glauberfc))
- Add enhanced accessibility actions support ([7fb02bd908](https://github.com/facebook/react-native/commit/7fb02bd90884f0a717e8151d4d30767fe38392c1) by [@xuelgong](https://github.com/xuelgong))
- Add additional accessibility roles and states ([1aeac1c625](https://github.com/facebook/react-native/commit/1aeac1c62528004d994200664368dc85fba1795d))
- Add `isReduceMotionEnabled()` plus `reduceMotionChanged` to `AccessibilityInfo` ([0090ab32c2](https://github.com/facebook/react-native/commit/0090ab32c2aeffed76ff58931930fe40a45e6ebc) by [@estevaolucas](https://github.com/estevaolucas)])
- Add support for cancelling fetch requests with `AbortController` ([h5e36b0c](https://github.com/facebook/react-native/commit/5e36b0c6eb2494cefd11907673aa018831526750) by [@janicduplessis](https://github.com/janicduplessis))

#### Android specific

- Enable views to be nested within **Text**; this brings feature parity to Android, but be aware that it [has some limitations](https://github.com/facebook/react-native/commit/a2a03bc68ba062a96a6971d3791d291f49794dfd) ([5c399a9f74](https://github.com/facebook/react-native/commit/5c399a9f74f22c58c11f75abde32ac7dc269ccc0) by [@rigdern](https://github.com/rigdern))
- Add a `touchSoundDisabled` prop to **Button**, **Touchable**, and **TouchableWithoutFeedback** ([45e77c8324](https://github.com/facebook/react-native/commit/45e77c8324f7dc2d53109e45a4e0b18cbab6a877) by [@yurykorzun](https://github.com/yurykorzun))

#### iOS specific

- Add `announceForAccessibility` and `announcementFinished` APIs for making screen reader announcements ([cfe003238a](https://github.com/facebook/react-native/commit/cfe003238ab8c5686d185f6ce9e0776eeb4bb729) by [@rigdern](https://github.com/rigdern))
- Ability to force network requests to use WiFi using the `allowsCellularAccess` property. This can ensure that network requests are sent over WiFi if communicating with a local hardware device and is accomplished by setting a flag. Default behavior of allowing network connections over cellular networks when available is unchanged. ([01c70f2fb9](https://github.com/facebook/react-native/commit/01c70f2fb9e8ac78a4d0cbd016d4de47316fe4d1) and [916186a7e6](https://github.com/facebook/react-native/commit/916186a7e6c43b1a1c68652ab82862bcd8fb1e01) by [@bondparkerbond](https://github.com/bondparkerbond)and [@zhongwuzw](https://github.com/zhongwuzw))
- `$RN_CACHE_DIR` can now be used to manually specify the iOS build cache directory ([845eee403e](https://github.com/facebook/react-native/commit/845eee403e1cd3cb36935ef142f411f2b5075346) by [@hramos](https://github.com/hramos))

### Changed

- _BREAKING_ Migrated to AndroidX; please see [this thread](https://github.com/react-native-community/discussions-and-proposals/issues/129#issuecomment-503829184) for more details on this change
- Cleanup **RedBox** message and stack output; it's now far easier to understand ([49d26eb0c4](https://github.com/facebook/react-native/commit/49d26eb0c4aeb611c6cb37a568708afa67b48c18) by [@thymikee](https://github.com/thymikee))
- Add default `scrollEventThrottle` value to **Animated.FlatList** and **Animated.SectionList**; this now behaves consistently with **Animated.ScrollView** ([933e65e245](https://github.com/facebook/react-native/commit/933e65e245b30f7dc5a26aa51881153fb7c3628e) by [@janicduplessis](https://github.com/janicduplessis))
- Remove invariant on nested sibling **VirtualizedLists** without unique listKey props; they now trigger a **RedBox** ([af5633bcba](https://github.com/facebook/react-native/commit/af5633bcba224f71f035ba4214a93b69723c9b93))
- **FlatList** and **VirtualizedList**'s default `keyExtractor` now checks `item.id` and `item.key` ([de0d7cfb79](https://github.com/facebook/react-native/commit/de0d7cfb79c7f4011d4b6748b1afc656d33fd5ac) by [@sahrens](https://github.com/sahrens))
- **SectionList**'s `scrollToLocation` on iOS now counts `itemIndex` like Android; both platforms are now consistent, and the `itemIndex` value 0 now represents scrolling to the first heading ([248a108abf](https://github.com/facebook/react-native/commit/248a108abf206b7ae32208537f0b73a8192a4829) by [@vonovak](https://github.com/vonovak))
- Slightly speedup core initialization by moving native version check to DEV only ([5bb2277245](https://github.com/facebook/react-native/commit/5bb22772452e49dbcfbf183f6ebeee4576e67947) by [@mmmulani](https://github.com/mmmulani))
- `react` is now at v16.8.6 ([53cec2dc1f](https://github.com/facebook/react-native/commit/53cec2dc1f1f5d143d0bb9752629b72350ebd112), [ee681b72ce](https://github.com/facebook/react-native/commit/ee681b72ce89539e5764ed59e5dfea4fab04d48c), and [6001acb319](https://github.com/facebook/react-native/commit/6001acb319958242f8d8e2dd40cb91a55b5eab2e) by [@kelset](https://github.com/kelset), [@mdvacca](https://github.com/mdvacca), [@gaearon](https://github.com/gaearon))
- `react-native-community/cli` is now at v2.0.0 (by [@thymikee](https://github.com/thymikee))
- `flow` is now at v0.98 ([0e1dfd4369](https://github.com/facebook/react-native/commit/0e1dfd436917a78a09da7b57a0b50397e6a0b6e1) by [@nmote](https://github.com/nmote))
- `prettier` is now at v1.17.0 ([ff9f8f347d](https://github.com/facebook/react-native/commit/ff9f8f347d71630664dc3da1e8be0425799c0ce0))
- `metro` packages are now at v0.54.1 ([7ff3874ec0](https://github.com/facebook/react-native/commit/7ff3874ec060bce568537a2238aea2c888e6e13f), [343f0a1d50](https://github.com/facebook/react-native/commit/343f0a1d50662aa37ef0b26d5436b2a0b40fbabb) by [@motiz88](https://github.com/motiz88))
- Replace patched fetch polyfill with `whatwg-fetch@3.0` ([bccc92dfdd](https://github.com/facebook/react-native/commit/bccc92dfdd2d85933f2a9cb5c8d1773affb7acba) by [@janicduplessis](https://github.com/janicduplessis))

#### Android specific

- Use class canonical name for `PARTIAL_WAKE_LOCK` tag ([88dbb4558c](https://github.com/facebook/react-native/commit/88dbb4558cd10f129f2c31e3b0b872924aba5416) by [@timwangdev](https://github.com/timwangdev))

#### iOS specific

- _BREAKING_: Split React.podspec into separate podspecs for each Xcode project; your libraries will need to update for this change as well to avoid CocoaPods build errors ([2321b3fd7f](https://github.com/facebook/react-native/commit/2321b3fd7f666ce30f5dad4cd2673ddf22972056) by [@fson](https://github.com/fson))
- Improve handling of native module exceptions; they are now propagated to crash reporting tools with the context and callstack ([629708beda](https://github.com/facebook/react-native/commit/629708bedae65a30e39d234da6b04d6fa101a779) by [@pvinis](https://github.com/pvinis))
- Switch **Slider** `onSlidingComplete` event to a non-bubbling event on iOS to match Android ([7927437a6d](https://github.com/facebook/react-native/commit/7927437a6d5d63de2424d43d58085291c1067091) by [@rickhanlonii](https://github.com/rickhanlonii))

### Deprecated

- **StatusBar** is no longer deprecated; thank you for the feedback ([a203ebe206](https://github.com/facebook/react-native/commit/a203ebe2062b3c12f85783f46030971f3aa5db1d) by [@cpojer](https://github.com/cpojer))

### Removed

- **NetInfo** has been removed; its replacement is now available via the [react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo) package ([5a30c2a205](https://github.com/facebook/react-native/commit/5a30c2a2052ba76e88dbf71b5b5c92966591bf26) by [@cpojer](https://github.com/cpojer))
- **WebView** has been removed; its replacement is now available via the [react-native-community/webview](https://github.com/react-native-community/react-native-webview) package ([](https://github.com/facebook/react-native/commit/6ca438a7f4bd7e6b317f0461aebbd5a7186151ed), [1ca9a95537](https://github.com/facebook/react-native/commit/1ca9a9553763a89c977f756b45486f8b9cedab80), and [954f715b25](https://github.com/facebook/react-native/commit/954f715b25d3c47c35b5a23ae23770a93bc58cee) by [@cpojer](https://github.com/cpojer) and [@thorbenprimke](https://github.com/thorbenprimke))
- **Geolocation** has been removed; its replacement is now available via the [react-native-community/geolocation](https://github.com/react-native-community/react-native-geolocation) package ([17dbf98884](https://github.com/facebook/react-native/commit/17dbf988845bb7815dbb6182218c8c28d027fb91) and [9834c580af](https://github.com/facebook/react-native/commit/9834c580af654366bf0d38b78cd2694b0a0c477f) by [@cpojer](https://github.com/cpojer) and [@mmmulani](https://github.com/mmmulani))

### Fixed

- Fix `Animated.Value` value after animation if component was re-mounted ([b3f7d53b87](https://github.com/facebook/react-native/commit/b3f7d53b87413abdf302c521114e4d77aa92e07f) by [@michalchudziak](https://github.com/michalchudziak))
- Consistent reporting native module name on crash on native side ([fdd8fadea8](https://github.com/facebook/react-native/commit/fdd8fadea84f475714a16b6f0ec433f898d09558) and [b79d7db9db](https://github.com/facebook/react-native/commit/b79d7db9dbf588085b29274e507d34438e2e2595) by [@DimitryDushkin](https://github.com/DimitryDushkin))
- Handle null filenames in symbolicated stack trace gracefully in **ExceptionsManager** ([2e8d39bed7](https://github.com/facebook/react-native/commit/2e8d39bed70e2e5eeddeb2dc98155bf70f9abebd) by [@motiz88](https://github.com/motiz88))
- Fix HasteImpl platform name regex ([28e0de070d](https://github.com/facebook/react-native/commit/28e0de070d2dae9a486ab5915b6fd76723bd84ef) by [@CaptainNic](https://github.com/CaptainNic))
- Fix a JS memory leak in Blob handling; this resolves multiple leaks around `fetch` ([05baf62721](https://github.com/facebook/react-native/commit/05baf6272143667694585a14fb59657fdc93c3b1) and [9ef5107d04](https://github.com/facebook/react-native/commit/9ef5107d04da374fc566d8b296572ddd992419f0) by [@janicduplessis](https://github.com/janicduplessis))
- **SectionList**'s `scrollToLocation` now scrolls to the top of the sticky header as expected ([d376a444e3](https://github.com/facebook/react-native/commit/d376a444e318beabd8ebe9ccb41ffc300e12ea76) by [@danilobuerger](https://github.com/danilobuerger))

#### Android specific

- Fix duplicate resource error in Android build ([962437fafd](https://github.com/facebook/react-native/commit/962437fafd02c936754d1e992479056577cafd05) and [eb534bca58](https://github.com/facebook/react-native/commit/eb534bca58a89ae306010626a8bdae92c23b8784) by [@mikehardy](https://github.com/mikehardy) and [@Dbroqua](https://github.com/Dbroqua))
- Reorder operations of native view hierarchy ([5f027ec64d](https://github.com/facebook/react-native/commit/5f027ec64d6764fbbb9813fabb373194dec79db7) by [@lunaleaps](https://github.com/lunaleaps))
- Fix performance regression from new custom fonts implementation ([fd6386a07e](https://github.com/facebook/react-native/commit/fd6386a07eb75a8ec16b1384a3e5827dea520b64) by [@dulmandakh](https://github.com/dulmandakh))
- Fix internal test case around disabled state of buttons ([70e2ab2ec9](https://github.com/facebook/react-native/commit/70e2ab2ec9a1df60b39987946af18cac8621b3b0))
- Fix extra call of **PickerAndroid**'s `onValueChange` on initialization; now it is only called when `selectedValue` changes ([82148da667](https://github.com/facebook/react-native/commit/82148da6672e613f34ffb48133cdefc235418dea) by [@a-c-sreedhar-reddy](https://github.com/a-c-sreedhar-reddy))
- Fix **PickerAndroid** will reset selected value during items update ([310cc38a5a](https://github.com/facebook/react-native/commit/310cc38a5acb79ba0f1cda22913bd1d0cb296034) by [@Kudo](https://github.com/Kudo))
- Fix unexpected PARTIAL_WAKE_LOCK when no headless tasks registered. ([bdb1d4377e](https://github.com/facebook/react-native/commit/bdb1d4377e47c6cd49ff619134d4860519a3cb0c) by [@timwangdev](https://github.com/timwangdev))
- Fix calling **TextInput**'s `onKeyPress` method when the user types an emoji ([a5c57b4ed4](https://github.com/facebook/react-native/commit/a5c57b4ed4965ac4bb231399fd145da8095cece3))
- Fix value of **TextInput**'s `onSelectionChange` start and end arguments by normalizing them ([2ad3bb2e2d](https://github.com/facebook/react-native/commit/2ad3bb2e2d62ffb780bab020f645626a16dd3b4a) by [@uqmessias](https://github.com/uqmessias))
- In `Linking.getInitialURL` method, use the `InteractionManager` to wait for the current activity to finish initializing ([c802d0b757](https://github.com/facebook/react-native/commit/c802d0b757912358d703d4d8a114073377a905b9) by [@mu29](https://github.com/mu29))
- Disable delta bundles on the first app run ([e4aff423ac](https://github.com/facebook/react-native/commit/e4aff423ac0421f4af7b9a111e5ad954f489da19) by [@wojteg1337](https://github.com/wojteg1337))
- In **DatePickerAndroid**, work around Android Nougat bug displaying the wrong the spinner mode ([bb060d6cf8](https://github.com/facebook/react-native/commit/bb060d6cf89500778bba27d1da5925e2623c7a99) by [@luancurti](https://github.com/luancurti))
- Fix crash in Animated Interpolation when inputMin === inputMax ([7abfd23b90](https://github.com/facebook/react-native/commit/7abfd23b90db08b426c3c91b0cb6d01d161a9b9e) by [@olegbl](https://github.com/olegbl))
- Fix symbolication for **RedBox** and **YellowBox** when using delta bundling ([a05e9f8e09](https://github.com/facebook/react-native/commit/a05e9f8e094b25cc86ee297477cccafc3be5ef52) by [@motiz88](https://github.com/motiz88))
- Fix **CameraRoll** crash on mime type guessing ([ebeb893b50](https://github.com/facebook/react-native/commit/ebeb893b50b4aa1ad77bdb203e4f8faed75db43a) by [@Sroka](https://github.com/Sroka))

#### iOS specific

- Call designated initializer for SurfaceHostingProxyRootView ([3c125e867f](https://github.com/facebook/react-native/commit/3c125e867f52efd7f18b2bd8c9a21b246afcd788) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **RedBox** JS symbolication when adding JS engine tag to the message ([920632cadb](https://github.com/facebook/react-native/commit/920632cadb108ceeacad93e9316e706608df2942) by [@motiz88](https://github.com/motiz88))
- Fix **TextInput**'s `onSelectionChange` behavior in single line text inputs ([0c11d8d9b4](https://github.com/facebook/react-native/commit/0c11d8d9b4edf7830255f5b016d0ba7ef72ae827) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix accessibility problem with **TextInput** Clear Button ([4e37d37cbf](https://github.com/facebook/react-native/commit/4e37d37cbff27e61659440094a662e00eafd8fc4) by [@shergin](https://github.com/shergin))
- Fix `renderingMode` not applied to GIF **Image**s ([75380aa329](https://github.com/facebook/react-native/commit/75380aa3296210777dc0be70a722701767276117) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **ScrollView** `centerContent` not work in some cases ([2cdf9694b5](https://github.com/facebook/react-native/commit/2cdf9694b56e76477dde572eb3dc38be31361eab) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash on performance logger ([5d3d3987d8](https://github.com/facebook/react-native/commit/5d3d3987d8a81b84d43dc88808d7f50c7bf11d19) by [@zhigang1992](https://github.com/zhigang1992))
- Do not run packager in Release mode ([4ea6204111](https://github.com/facebook/react-native/commit/4ea62041118fb031d7540726df2d29185c6b130d) by [@lucasbento](https://github.com/lucasbento))
- Fix `code` and `reason` arguments being ignored when calling `WebSocket.close` ([0ac2171c54](https://github.com/facebook/react-native/commit/0ac2171c549b389228c4a37ae645eb0d9813b82d) by [@jeanregisser](https://github.com/jeanregisser))
- Fix return value of `Linking.openURL()` ([4a5d0bdbd7](https://github.com/facebook/react-native/commit/4a5d0bdbd75c433d2f51f160657a0ad91e440272) by [@thib92](https://github.com/thib92))
- When an accessibilityLabel can't be discerned, return `nil` instead of `@""` ([d4ff5ed258](https://github.com/facebook/react-native/commit/d4ff5ed258b75fe77c5d801af7b097b04fcd3690) by [@sammy-SC](https://github.com/sammy-SC))
- Fix Xcode build when the project's path contains whitespace ([f0770b6b37](https://github.com/facebook/react-native/commit/f0770b6b370f483fdd729bdba04069cc783353dc))
- Move accessibility props to UIView+React ([9261035c2b](https://github.com/facebook/react-native/commit/9261035c2bf2fe9522806fb1c535a1835e7acfa2) by [@janicduplessis](https://github.com/janicduplessis))

## v0.59.10

This is likely the last patch release for version 59 of React Native for the foreseeable future: it contains an important Android side update for the JavaScript Core, to prevent a great number of crashes mostly related to Samsung devices - thanks to [@Kudo](https://github.com/Kudo) for his work on fixing this via [557989a86f](https://github.com/facebook/react-native/commit/557989a86f8730113393ed229927d607a478e524)!

Thanks everyone who participated in the [discussion](https://github.com/react-native-community/releases/issues/127).

## v0.59.9

This is a patch fix release addressing a couple ScrollView regressions, and "future-proof" RN 59 from crashes caused by upgrading Gradle (now can support up to 5.4.1 & 3.4.0 for the plugin) and Xcode 11 Beta 1. You can upgrade to this version without upgrading your tooling.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/124) for cherry-picking commits. You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/127).

### Changed

- If `isInteraction` is not specified in the config, it would always default to `true` which would block interactions like VirtualizedList updates. This is generally not what you want with useNativeDriver since the animation won't be interrupted by JS. If something does end up interfering with an animation and causes frame drops, `isInteraction` can be set manually. ([8f186b84ae](https://github.com/facebook/react-native/commit/8f186b84aeeb2613bf6ae08f20a8547d40179007) by [@sahrens](https://github.com/sahrens))

- Update detox to match master ([c6a5c09e2b](https://github.com/facebook/react-native/commit/c6a5c09e2b330891242af5c0b3ed7875f32c189e) by [@kelset](https://github.com/kelset))

#### Android specific

- Bump Gradle to 5.4.1 & Android Gradle plugin to 3.4.0 ([b4017a9923](https://github.com/facebook/react-native/commit/b4017a9923b09fed4b693a8e4cfadd30ce34c88d), [d9f5a9dc16](https://github.com/facebook/react-native/commit/d9f5a9dc16f68cecc995bf8ba64fb726e397fadf), [30348f7899](https://github.com/facebook/react-native/commit/30348f789946dc99f5ccd02c85c8decbdb9ac29b), [6976a93126](https://github.com/facebook/react-native/commit/6976a931266126f249458a099bfaf509f9d81a05) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed

- Fixes wrong time unit of scroll event throttle ([1148c03f6f](https://github.com/facebook/react-native/commit/1148c03f6f51329710e23fba99a6916fff3ba42c) by [@zhongwuzw](https://github.com/zhongwuzw))

#### Android specific

- Fix indexed RAM bundle ([d8fa1206c3](https://github.com/facebook/react-native/commit/d8fa1206c3fecd494b0f6abb63c66488e6ced5e0) by [@dratwas](https://github.com/dratwas))

#### iOS specific

- Fix Xcode 11 Beta 1 builds ([46c7ada535](https://github.com/facebook/react-native/commit/46c7ada535f8d87f325ccbd96c24993dd522165d) by [@ericlewis](https://github.com/ericlewis))

## v0.59.8

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points (in particular, check the `KeyboardAvoidingView` change). Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/118) for cherry-picking commits.

### Fixed

- Fix regexp on `hasteImpl` ([bcd1e2](https://github.com/facebook/react-native/commit/28e0de070d2dae9a486ab5915b6fd76723bd84ef) by [@CaptainNic](https://github.com/CaptainNic))
- Fix sparse array handling in `EventEmitter#listeners()` ([f68dc8](https://github.com/facebook/react-native/commit/f68dc8) by [@ide](https://github.com/ide))
- Fix **VirtualizedList** to call `_updateViewableItems` immediately ([08141e](https://github.com/facebook/react-native/commit/efe6a0f0b56191907e8f13be2aee28fe1dcdf555) by [@sahrens](https://github.com/sahrens))
- Fix prop overrides of **TouchableWithoutFeedback** ([0c4206](https://github.com/facebook/react-native/commit/68825f9ca5a6c8c70390e8499d9663c5be475639) by [@aleclarson](https://github.com/aleclarson))
- Fix resolve relative size rendering error in inspector ([4884ab](https://github.com/facebook/react-native/commit/972ee2edbd4e1c4201da1606bf5a4c5add9f0083) by [@gandreadis](https://github.com/gandreadis))
- Fix **VirtualizedSectionList** by making sure to check array bounds ([54f91d](https://github.com/facebook/react-native/commit/929908f28728c217ab4a16c8596e0957295f4d67) by [@vonovak](https://github.com/vonovak))
- Update `_scrollAnimatedValue` offset of **ScrollView** ([e0d1b3](https://github.com/facebook/react-native/commit/58c956768af75047b2acdca429a28945a6a8b8c0) by [@miyabi](https://github.com/miyabi))
- Fix infinite `setState` in **VirtualizedList** ([c40a93](https://github.com/facebook/react-native/commit/88787b5e7a7f6dd9c3b258b9dfb60b93ca5a5cea) by [@sahrens](https://github.com/sahrens))

#### iOS specific

- Fix incorrect opacity behavior for **Text** component ([f71357](https://github.com/facebook/react-native/commit/d99e657e3909ff14cd623d1df7d3d13056fdd851) by [@shergin](https://github.com/shergin))
- Fix **Text** shadow displays when `text Offset` is `{0,0}` ([17a81b](https://github.com/facebook/react-native/commit/9b63b50ad562c8567336898c7511a9a5198a4d6b) by [@Woodpav](https://github.com/Woodpav))
- Add convert compatible of **NSString** for bridge message data ([c37e9c](https://github.com/facebook/react-native/commit/ffa3b0d4d601fe6788319a7cfd4185b8e4bf462f) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix nullability warnings in **RCTExceptionsManager** ([2b7d79](https://github.com/facebook/react-native/commit/31850df116fdd1595dddcd7b37a21568e679ffa7) by [@jtreanor](https://github.com/jtreanor))
- Fix app to reconnect with metro after the bundler is closed and reopened ([c28676](https://github.com/facebook/react-native/commit/62bac80f90cf5a4ab216488b4ede441f0e3f86ba) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix throttle below 16ms on **ScrollView** ([39776a](https://github.com/facebook/react-native/commit/c87de765f6a9ebf656c188fa2115a1ba01b7939c) by [@sahrens](https://github.com/sahrens))

#### Android specific

- Fix JS errors during bundle load were reported as `UnknownCppException` ([84e263](https://github.com/facebook/react-native/commit/6f6696fa63dc5f7029cb121c7e0ee98f8d271602))
- Add logic to catch `MissingWebViewPackageException` ([379874](https://github.com/facebook/react-native/commit/954f715b25d3c47c35b5a23ae23770a93bc58cee) by [@thorbenprimke](https://github.com/thorbenprimke))
- Revert "[improve RTL](https://github.com/facebook/react-native/commit/b3c74967ca6b20d7bda84c690ae3a99dfe255843)" ([f3801d](https://github.com/facebook/react-native/commit/8d3e16831a93079fc5a855a7b0f8b4be508c6942) by [@thorbenprimke](https://github.com/thorbenprimke))

### Added

- Add listener for non-value animated node ([4a82dc](https://github.com/facebook/react-native/commit/68a5ceef312c7e3ac74d616b960c1cfde46a109d) by [@osdnk](https://github.com/osdnk))
- Set **ScrollView** throttle by default ([74d740](https://github.com/facebook/react-native/commit/b8c8562ffb424831cc34a18aeb25e5fec0954dd0) by [@sahrens](https://github.com/sahrens))

### Changed

- Make **KeyboardAvoidingView** with `behavior="height"` resize on keyboard close ([7140a7](https://github.com/facebook/react-native/commit/3711ea69375ea420800bac97914aa0d24fc9b1a6) by [@WaldoJeffers](https://github.com/WaldoJeffers))
- Update network inspector to have smarter scroll stickiness ([57dc37](https://github.com/facebook/react-native/commit/c06473ab464e07edbb4715f58cd13674273bb29b) by [@AlanFoster](https://github.com/AlanFoster))

## v0.59.7

This patch release was unpublished.

## v0.59.6

This patch release was unpublished.

## v0.59.5

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/113) for cherry-picking commits.

### Fixed

- Remove wrapper around **ListEmptyComponent** ([54af5b](https://github.com/facebook/react-native/commit/46276444508581bac7b9f27edd56ec0c8ec450bc) by [@AntoineDoubovetzky](https://github.com/AntoineDoubovetzky))

#### Android specific

- Enforced thread safety on UIImplementation methods that mutate the shadowNodeRegistry ([f5a318](https://github.com/facebook/react-native/commit/f5a31801a03b61df3d7bc2fc86df7bad272082e2) by [@SudoPlz](https://github.com/sunnylqm))
- Fixed a `NoSuchKeyException` when parsing JS stack frames without line numbers ([d7bd6c](https://github.com/facebook/react-native/commit/c953e0b4319da0976ece877c09b648a55bc57d9f) by [@Salakar](https://github.com/Salakar))
- Fixed `mostRecentEventCount` is not updated ([b8aac0](https://github.com/facebook/react-native/commit/60c0a60c508346f7639d32fde0376fabded9f3f0) by [@jainkuniya](https://github.com/jainkuniya))

#### iOS specific

- Pass back correct dimensions for application window in Dimensions module ([72b4cc](https://github.com/facebook/react-native/commit/33b55ccccad56e0b97af294749d728b67b03e658) by [@rdonnelly](https://github.com/rdonnelly))
- Fixed warning: "RCTImagePickerManager requires main queue setup" ([effb02](https://github.com/facebook/react-native/commit/6508b88cfdccdb2da6bfde05faac4647436ce4e7) by [@scarlac](https://github.com/scarlac))

## v0.59.4

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Changed

- Make Jest transform @react-native-community packages by default ([7e23c7c565](https://github.com/facebook/react-native/commit/7e23c7c5654818fa076eeb627b709d39130f57f6) by [@thymikee](https://github.com/thymikee))

#### iOS specific

- Add `scrollToOverflowEnabled` prop to **ScrollView** ([6f4239b37c](https://github.com/facebook/react-native/commit/6f4239b37c3059d6cb1fdaf2dcd3b6c962dde471) by [@mysport12](https://github.com/mysport12))

### Fixed

- Fix **Touchable** long-press ([59e50237bf](https://github.com/facebook/react-native/commit/59e50237bff9521d2b78d7576abf4e23d844ac1b) by [@Kida007](https://github.com/Kida007))

#### Android specific

- Fix a crash when setting `underlineColorAndroid` in **TextInput** ([556aa93ed7](https://github.com/facebook/react-native/commit/556aa93ed72d9dc0f18a1c6d7dec3d9c182fee85) by [@sunnylqm](https://github.com/sunnylqm))

#### iOS specific

- Fix universal links not working in iOS 12 / Xcode 10 ([56679ed359](https://github.com/facebook/react-native/commit/56679ed359834c2177c8837d744cc7bf2ceb6b0a) by [@IljaDaderko](https://github.com/IljaDaderko))
- Fix triangle views ([7a6fe0cda0](https://github.com/facebook/react-native/commit/7a6fe0cda0a1089c1c82fdd5f7f2db940f70feae) by [@zhongwuzw](https://github.com/zhongwuzw))

## v0.59.3

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Changed

#### Android specific

- Improve RTL support ([b3c74967ca](https://github.com/facebook/react-native/commit/b3c74967ca6b20d7bda84c690ae3a99dfe255843) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed

- Fix **VirtualizedList**, **SectionList** and **FlatList** behavior on rendering list headers with inverted prop and zero items ([c13f5d48cf](https://github.com/facebook/react-native/commit/c13f5d48cfe3e7c0f6c6d0b745b50a089d6993ef) by [@michalchudziak](https://github.com/michalchudziak))
- Fix **VirtualizedList** debug mode crash ([02e8e531dd](https://github.com/facebook/react-native/commit/02e8e531ddfd86e9abf7ef47fbf30445afeb37cf))
- Fix running Metro on Windows ([43d3313788](https://github.com/facebook/react-native/commit/43d3313788a5f0a36abdbfadc000b06b2188fc06) and [9db347fabc](https://github.com/facebook/react-native/commit/9db347fabca19c66f669faf4054c81cc3624be03) by [@aliazizi](https://github.com/aliazizi) and [@nazreinkaram](https://github.com/nazreinkaram))

#### Android specific

- Fix IllegalStateException when invalid URL or headers are passed ([aad4dbbbfe](https://github.com/facebook/react-native/commit/aad4dbbbfe937d1924e5359556979ab067198a58) by [@dryganets](https://github.com/dryganets))
- Fix IllegalStateException when tapping next on Android Keyboard ([b943db418f](https://github.com/facebook/react-native/commit/b943db418f4f0b9d0865642aaca3e1a2f1529663) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Show Perf Monitor after reloading JS ([15619c22e5](https://github.com/facebook/react-native/commit/15619c22e57f73dfbed7bbe5fd6d9b3d2a8c9225) by [@usrbowe](https://github.com/usrbowe))
- Fix **TextInput**'s `maxLength` when inserting characters at begin ([17415938c7](https://github.com/facebook/react-native/commit/17415938c7180a95811db949122b8ad24a442866) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix runtime crash in Xcode 10.2 when using `RCT_EXTERN_MODULE` for swift classes ([ff66600224](https://github.com/facebook/react-native/commit/ff66600224e78fec5d0e902f8a035b78ed31a961))

## v0.59.2

This is a patch fix release addressing regressions, crashes, and a few developer-experience pain points. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/100) for cherry-picking commits.

### Fixed

#### Android specific

- Crash on pre-26 Android devices when setting **TextInput** content type ([d4aa1e7a52](https://github.com/facebook/react-native/commit/d4aa1e7a52b51fa5d7fc9ded132b7b50170f2190) by [@hramos](https://github.com/hramos))
- Crash when scroll to index 0 in a **SectionList** ([8fa116cc0e](https://github.com/facebook/react-native/commit/8fa116cc0e1cadbb6cf0734cfde0e0b8060f6b59) by [@danilobuerger](https://github.com/danilobuerger))
- **Switch**'s `trackColor` being reset when toggled ([7652e31d8c](https://github.com/facebook/react-native/commit/7652e31d8c233c1c831f6597c8a2f7ce3d9c0b6e) and [d6ee448e15](https://github.com/facebook/react-native/commit/d6ee448e15a25a7485482a4702aadb2e396445c7) by [@dulmandakh](https://github.com/dulmandakh) and [@ejanzer](https://github.com/ejanzer))

#### iOS specific

- **ScrollView** offset out of content size ([9c1c5a7455](https://github.com/facebook/react-native/commit/9c1c5a7455d90ec837a9a6141c096de70b798e43) by [@zhongwuzw](https://github.com/zhongwuzw))
- **RefreshControl** state's race condition ([95d399bc82](https://github.com/facebook/react-native/commit/95d399bc825c5471e08b83eff4b1b1b510e384a0) by [@rostislav-simonik](https://github.com/rostislav-simonik))
- Start Metro packager from project root ([fe3aebf87b](https://github.com/facebook/react-native/commit/fe3aebf87b4123f8b16cdfcb9e2e774e6e0bf0b6) by [@MatthieuLemoine](https://github.com/MatthieuLemoine))
- **TextInput**s that are single-line reverting to default text ([e38be82dfa](https://github.com/facebook/react-native/commit/e38be82dfa8b49385b990629318f027de26500cf) by [@PeteTheHeat](https://github.com/PeteTheHeat))

### Changed

#### Android specific

- Add TLS 1.3 support to all Android versions using Conscrypt; to use this, you must add `implementation('org.conscrypt:conscrypt-android:2.0.0')` to `build.gradle` ([75af15ede4](https://github.com/facebook/react-native/commit/75af15ede44135110e40de75a649d5b15430c590) by [@dulmandakh](https://github.com/dulmandakh))
- Turn off Metro JS Deltas by default for Android ([845189c17d](https://github.com/facebook/react-native/commit/845189c17de621cc5aa373503220c1c12f649c3c) by [@PeteTheHeat](https://github.com/PeteTheHeat))

## v0.59.1

This is a small patch release that addresses two critical issues from the 0.59.0 release.

### Fixed

#### Android specific

- Template build gradle error on x86_64 ([4b996da470](https://github.com/facebook/react-native/commit/4b996da470b43f97fd0426b54bda739d7717fb28) by [@grabbou](https://github.com/grabbou))

#### iOS specific

- Build error warning of **Text** module ([d834197746](https://github.com/facebook/react-native/commit/d834197746371b203bd7d7aaabdc2bc581acc867) by [@zhongwuzw](https://github.com/zhongwuzw))

## v0.59.0

Welcome to release 0.59 of React Native! For highlights of this release, please view the dedicated [blog post](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059). Thanks to those who gave feedback during the [release candidate phase](https://github.com/react-native-community/react-native-releases/issues/79). If you're interested in helping evaluate our next release (0.60), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/99).

### Added

- Add a Metro configuration to the template with inline require/import options; read more about it [in the blog post](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059) ([ae11993d0f](https://github.com/facebook/react-native/commit/ae11993d0f6c6de661867b5d032d844e91c83c6f) by [@cpojer](https://github.com/cpojer))

#### Android specific

- **Text** and **TextInput** now has prop [maxFontSizeMultiplier](https://reactnative.dev/docs/text#maxfontsizemultiplier) ([4936d284df](https://github.com/facebook/react-native/commit/4936d284df36071047ce776d9e2486c0371f7b97) by [@rigdern](https://github.com/rigdern))
- **TextInput** now has prop [autoComplete](https://reactnative.dev/docs/textinput#autocomplete) prop ([f15145639d](https://github.com/facebook/react-native/commit/f15145639dab1e8d7a1c79a127b7d45c91d025a8))
- **CameraRoll**'s `getPhotos` now supports `assetType: "All"` to let users pick from video and photos simultaneously ([54534e79d7](https://github.com/facebook/react-native/commit/54534e79d724ff57572efc43f65100067f35d4c1) by [@kesha-antonov](https://github.com/kesha-antonov))
- **Text** and **TextInput** now support `textAlign:justify` for android O+ (api level >=26) ([d2153fc58d](https://github.com/facebook/react-native/commit/d2153fc58d825006076a3fce12e0f7eb84479132) by [sunnylqm](https://github.com/sunnylqm))

#### iOS specific

- **TextInput** now has prop `rejectResponderTermination` to enable TextInputs inside Swipeables to function properly ([11df0eae5f](https://github.com/facebook/react-native/commit/11df0eae5ff8f530bfaf56aaf2209ff48f3ed9ac) by [@cmcewen](https://github.com/cmcewen))
- **ActionSheetIOS** has a new prop `destructiveButtonIndexes` for an `Array<number>` of destructive indexes ([67e7f16944](https://github.com/facebook/react-native/commit/67e7f16944530aa0d1a4d375b0de5efd5c432865) by [@sdg9](https://github.com/sdg9))
- Add `isEventFromThisApp` to `KeyboardEvent` notifications to disambiguate keyboard events when apps are running side-by-side ([05f35c296d](https://github.com/facebook/react-native/commit/05f35c296d91d946acf4edd94106fbdd0dd69a29) by [@nossbigg](https://github.com/nossbigg))
- Allow changing the project path in `react-native-xcode.sh` using env var `PROJECT_ROOT` ([9ccde378b6](https://github.com/facebook/react-native/commit/9ccde378b6e6379df61f9d968be6346ca6be7ead) by [@janicduplessis](https://github.com/janicduplessis))

### Changed

- `React` is now at `v16.8.3` ([ccefc700d0](https://github.com/facebook/react-native/commit/ccefc700d0120539eba73747d1d6b65effb0645d) and ([2af13b4477](https://github.com/facebook/react-native/commit/2af13b4477342d3498ab302ceb5297fcbc17e097) by [@cpojer](https://github.com/cpojer) and [@hramos](https://github.com/hramos))
- `Flow` dependency is now at `v0.92.0` ([5ee738659b](https://github.com/facebook/react-native/commit/5ee738659b4ac7b0e73b9dba09a63091d4571ed9) by [@pakoito](https://github.com/pakoito))
- `@react-native-community/cli` dependency is at `v1.2.1` ([a252aee2ea](https://github.com/facebook/react-native/commit/a252aee2eabd9eeffb279b9fcf1827093ef4039c) and [5e1504b0fc](https://github.com/facebook/react-native/commit/5e1504b0fca99cad3bfe2339ac0e7862b2315f9c) by [@grabbou](https://github.com/grabbou))
- Enhance Flow types definitions for **ViewPropTypes** ([7ff9456f2e](https://github.com/facebook/react-native/commit/7ff9456f2e5fd72286f5be52598988707eaef69c) by [@danibonilha](https://github.com/danibonilha))

#### Android specific

- Clarify error message to direct people to `react-native start` rather than `react-native bundle` ([46aaa02274](https://github.com/facebook/react-native/commit/46aaa02274a51ebe2aaa9fca2422dcebf9323475) by [@sunnylqm](https://github.com/sunnylqm))
- **BREAKING** - removed `OkHttpClientProvider.replaceOkHttpClient` method; please use `OkHttpClientProvider.setOkHttpClientFactory` from 0.54+ ([7cbdd7b6ac](https://github.com/facebook/react-native/commit/7cbdd7b6ac7db2192f7d0193d22326041517a63e) by [@cdlewis](https://github.com/cdlewis))
- **BREAKING** - remove `ViewHelper`, use `ViewCompat` instead; this may also require changing the `android:theme` to be from `Theme.AppCompat`; read more about it [in the blog post](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059) ([c493cfe708](https://github.com/facebook/react-native/commit/c493cfe7083a6b97b6ec9eb9cb59cf1fdec45458) by [@dulmandakh](https://github.com/dulmandakh))
- Add nullable annotations to `ReadableMap`, `WritableMap`, `ReadableArray`, `Writable`, `ReactPackage`, and native module interfaces; this may impact Kotlin usage ([b640b6faf7](https://github.com/facebook/react-native/commit/b640b6faf77f7af955e64bd03ae630ce2fb09627), [c93cbdf1b2](https://github.com/facebook/react-native/commit/c93cbdf1b272cfd60124d9ddb4c52b58ca59d319), [7b33d6b0b9](https://github.com/facebook/react-native/commit/7b33d6b0b96578a548e9a7f973eb59ac9236697b), and [84f40da990](https://github.com/facebook/react-native/commit/84f40da990dfd21eb1c21e20f2be0f8b2c5a78e4) by [@dulmandakh](https://github.com/dulmandakh))
- `Soloader` is now at `v0.6.0` ([07d1075f37](https://github.com/facebook/react-native/commit/07d1075f372bb864ddc62b9c8f613b03becfa568) by [@dulmandakh](https://github.com/dulmandakh))
- Android Support Library is now at `v28.0.0` ([5bbed43854](https://github.com/facebook/react-native/commit/5bbed43854957a37c4b51f49f30669665a72e7f7) by [@dulmandakh](https://github.com/dulmandakh))
- `targetSdkVersion` is now at `v28` ([57f444bd8a](https://github.com/facebook/react-native/commit/57f444bd8a175038c367fa1b7d93e2e8ba9de7ed) by [@dulmandakh](https://github.com/dulmandakh))
- Android Plugin is now at `v3.3.1` ([da5b5d2fa1](https://github.com/facebook/react-native/commit/da5b5d2fa134aa09dda4a620be9fa4d3d419201f) by [@dulmandakh](https://github.com/dulmandakh))
- Enable Java 8 support ([38eb2a70af](https://github.com/facebook/react-native/commit/38eb2a70afa87c49c1e62754f5ae3cd26e7f59c3) by [@dulmandakh](https://github.com/dulmandakh))
- Suppress misleading missing permission warnings ([d53dbb0dfb](https://github.com/facebook/react-native/commit/d53dbb0dfb99bdee5cd7eeaaa6f4ae51dcca00c5) by [@dulmandakh](https://github.com/dulmandakh))
- Add back `buildToolsVersion` to build.gradle ([cf52ab561d](https://github.com/facebook/react-native/commit/cf52ab561d9fa0e4d14de7a8f3324cbc2b25bf92) by [@dulmandakh](https://github.com/dulmandakh))
- **TimePickerAndroid** has better Flow types definitions ([2ed1bb2e01](https://github.com/facebook/react-native/commit/2ed1bb2e01ab7360d9bf13e4f9e13cb9c9c9d32e) by [@yushimatenjin](https://github.com/yushimatenjin))
- `ReactActivity`, `ReactSlider`, `ReactTextView`, and `ReactPicker` extends `AppCompatActivity`; updates to `TimePickerDialogModule` and `DatePickerDialogModule` as well ([dda2b82a0a](https://github.com/facebook/react-native/commit/dda2b82a0a49da52b43b50db5a2bda50a216c09b), [3b9604feda](https://github.com/facebook/react-native/commit/3b9604feda8f9e8fe3dd884912ec7d9be67d7f1d), [ba0c3ffd5b](https://github.com/facebook/react-native/commit/ba0c3ffd5b46963a8bb27b40eb396965535cd927), [833429dd63](https://github.com/facebook/react-native/commit/833429dd633b33fff71224a7ce663b60681a7f81), [adc1410572](https://github.com/facebook/react-native/commit/adc14105727f708c990b7a744a0ea270ff0fba13), [c6c5a173bc](https://github.com/facebook/react-native/commit/c6c5a173bce3d8c847931d26eddb295956285438), and [be361d0fc1](https://github.com/facebook/react-native/commit/be361d0fc1930b1679c4226e15c1a5b416b94105) by [@dulmandakh](https://github.com/dulmandakh))
- Fix lint error/warnings that cause older Android crashes ([d2fc19f4aa](https://github.com/facebook/react-native/commit/d2fc19f4aa94888b7c3d3f4a5fb621bf96a1aff9) by [@dulmandakh](https://github.com/dulmandakh))
- The error message on getting Android drawable folder suffix now gives more information ([a159a33c02](https://github.com/facebook/react-native/commit/a159a33c02e0c0d7aa245adfd540a066ec065362) by [@BrunoVillanova](https://github.com/BrunoVillanova))
- `SYSTEM_ALERT_WINDOW` permissions available only in debug builds ([84a2fb0a4a](https://github.com/facebook/react-native/commit/84a2fb0a4a67cd9dc37cf4e5bab814f25181cfb7) by [@dulmandakh](https://github.com/dulmandakh))
- Add talkback navigation support for links and header ([b9d3743cda](https://github.com/facebook/react-native/commit/b9d3743cda95d1f475dbec8f6d72935941519deb) by [@yangweigbh](https://github.com/yangweigbh))
- **FlatList** has `removeClippedSubviews` default to `true` on Android ([1a499f43b2](https://github.com/facebook/react-native/commit/1a499f43b2d03cc27dd6c25c8f13a767862afba1) by [@fred2028](https://github.com/fred2028))

#### iOS specific

- Moved iOS build cache directory from `~/.rncache` to `~/Library/Caches/com.facebook.ReactNativeBuild` ([1024dc251e](https://github.com/facebook/react-native/commit/1024dc251e1f4777052b7c41807ea314672bb13a) by [@sryze](https://github.com/sryze))
- Keyboard API Event flow types have been improved ([7ee13cc84c](https://github.com/facebook/react-native/commit/7ee13cc84c342244d3aa9e485de0e759482287ea) by [@nossbigg](https://github.com/nossbigg))
- Expose **AsyncLocalStorage** get/set methods to native code ([7b8235a95a](https://github.com/facebook/react-native/commit/7b8235a95ad9519e9735cc1555a8d3aa5bb7c0ee) by [@ejmartin504](https://github.com/ejmartin504))
- Clear RCTBridge **launchOptions** when bridge is reloaded ([19d04a312b](https://github.com/facebook/react-native/commit/19d04a312bf4221cd26beff6d0da6dd296a28cd0) by [@venik](https://github.com/venik))

### Deprecated

The following deprecations are part of our Lean Core initiative; read more about it [in the blog post](https://reactnative.dev/blog/2019/03/12/releasing-react-native-059).

- Deprecated [MaskedViewIOS](https://reactnative.dev/docs/maskedviewios) as it has now been moved to [react-native-community/masked-view](https://github.com/react-native-community/react-native-masked-view) ([4ac65f5413](https://github.com/facebook/react-native/commit/4ac65f5413ee59f7546b88a2eae2c4ce6fa8826b) by [@FonDorn](https://github.com/FonDorn))
- Deprecated [ViewPagerAndroid](https://reactnative.dev/docs/viewpagerandroid) as it has now been moved to [react-native-community/viewpager](https://github.com/react-native-community/react-native-viewpager) ([77300ca91c](https://github.com/facebook/react-native/commit/77300ca91c17d371f6ba04230b8c2e8f5cd99ab8) by [@ferrannp](https://github.com/ferrannp))
- Deprecated [AsyncStorage](https://reactnative.dev/docs/asyncstorage) as it has now been moved to [react-native-community/asyncstorage](https://github.com/react-native-community/react-native-async-storage) ([ffe37487b2](https://github.com/facebook/react-native/commit/ffe37487b228b77a3697c32767e91f1dd68041d8) by [@Krizzu](https://github.com/Krizzu))
- Deprecated [Slider](https://reactnative.dev/docs/slider) as it has now been moved to [react-native-community/slider](https://github.com/react-native-community/react-native-slider) ([bf888a7582](https://github.com/facebook/react-native/commit/bf888a7582763a593d8b36874d242653fc0a9575) by [@michalchudziak](https://github.com/michalchudziak))
- Deprecated [NetInfo](https://reactnative.dev/docs/netinfo) as it has now been moved to [react-native-community/netinfo](https://github.com/react-native-community/react-native-netinfo) ([d9c0dfe353](https://github.com/facebook/react-native/commit/d9c0dfe353eceb91efcec774bab0f65b6792e4fa) by [@matt-oakes](https://github.com/matt-oakes))
- Deprecated [ImageStore](https://reactnative.dev/docs/imagestore) and directed users to `expo-file-system` and `react-native-fs` ([62599fa8ff](https://github.com/facebook/react-native/commit/62599fa8ff7f308259fe178fa37b7bcf3c1a408c) by [@EvanBacon](https://github.com/EvanBacon))

#### iOS specific

- Replace deprecated `stringByReplacingPercentEscapesUsingEncoding:` with `stringByAddingPercentEncodingWithAllowedCharacters:` ([61ca119650](https://github.com/facebook/react-native/commit/61ca11965046f75e7500e5152c5f2b60df2a2cd5) by [@pvinis](https://github.com/pvinis))

### Removed

- `react-native-git-upgrade` is now officially dead; use `react-native upgrade` instead (which uses [rn-diff-purge](https://github.com/react-native-community/rn-diff-purge) under the covers) ([a6bdacb257](https://github.com/facebook/react-native/commit/a6bdacb2575dcc3be2acec95d8a6db6e2db909c4) by [@cpojer](https://github.com/cpojer))

#### iOS specific

- Remove the previously deprecated **TabBarIOS** ([02697291ff](https://github.com/facebook/react-native/commit/02697291ff41ddfac5b85d886e9cafa0261c8b98) by [@axe-fb](https://github.com/axe-fb))
- **AlertIOS** is now replaced with **Alert** ([e2bd7db732](https://github.com/facebook/react-native/commit/e2bd7db732602b2c477fe040f2946bd8293df297) by [@wellmonge](https://github.com/wellmonge))

### Fixed

- **KeyboardAvoidingView** now shows the correct height after the keyboard is toggled ([745484c892](https://github.com/facebook/react-native/commit/745484c892e40cfe15ded128f5a589edb28d8f6b) by [@shauns](https://github.com/shauns))
- Adds fixes for react-native-windows UWP ([dfcbf9729f](https://github.com/facebook/react-native/commit/dfcbf9729fab64c4bd8c00e1d092ec4e9bae717f) by [@rozele](https://github.com/rozele))
- The `Map` and `Set` polyfills no longer reject non-extensible object keys; also fix hash collision scenario ([90850cace9](https://github.com/facebook/react-native/commit/90850cace9991ed0a02605586ea5c32ce099de65) by [@benjamn](https://github.com/benjamn))
- Corrected StyleSheet's transformation perspective to match iOS's behavior, regardless of screen density ([4c10f9321c](https://github.com/facebook/react-native/commit/4c10f9321c9d01dbcac4808e7e6674cba12f3aa5) by [@syaau](https://github.com/syaau))
- Fix `yarn test` in new projects ([5218932b13](https://github.com/facebook/react-native/commit/5218932b13ad0649ff2a57aaf1ec682fe278c47d) by [@Esemesek](https://github.com/Esemesek))
- Fix issue with `getInspectorDataForViewTag` that caused red screen when toggling inspector ([46f3285a3f](https://github.com/facebook/react-native/commit/46f3285a3f240f9325a548e677a1927402d76bd7) by [@TranLuongTuanAnh](https://github.com/TranLuongTuanAnh))
- Fix `displayName` for `Image`; this will make tests no longer mistake it as `Component` ([4989123f8c](https://github.com/facebook/react-native/commit/4989123f8cab37c95b020e23b9a925746a3f3677) by [@linnett](https://github.com/linnett))
- Fix regression of **VirtualizedList** jumpy header ([e4fd9babe0](https://github.com/facebook/react-native/commit/e4fd9babe03d82fcf39ba6a46376f746a8a3e960) by [@danilobuerger](https://github.com/danilobuerger))
- Set `wait_for_recheck=true` to work around crash in Flow ([ffc9908bef](https://github.com/facebook/react-native/commit/ffc9908bef535ba1392c370ca4e9e4e528c3c4c5) by [@gabelevi](https://github.com/gabelevi))
- Fix flow typing of **Text** ([10c8352141](https://github.com/facebook/react-native/commit/10c835214160cc5a5726c8dd9f0d42a0275d198b) by [@sahrens](https://github.com/sahrens))
- Fix `jest` and `jest-junit` to be only development dependencies ([c7b57f1986](https://github.com/facebook/react-native/commit/c7b57f19869f31474c8ee17f7a1ac1551bab1b6e) by [@vovkasm](https://github.com/vovkasm))
- Fix layout issue with **SwipeableQuickActionButton** ([ad52f52624](https://github.com/facebook/react-native/commit/ad52f526247af6eebadd2ea436b86ff7eb874f27) by [@varungupta85](https://github.com/varungupta85))

#### Android specific

- Fix textTransform when used with other text styles on Android (#22670) ([3a33e75183](https://github.com/facebook/react-native/commit/3a33e75183bf196d61b46e662b4c3f84a5f570bd) by [@janicduplessis](https://github.com/janicduplessis))
- Fix warnings related to updating to gradle 4.10.1 or higher ([5be50d4820](https://github.com/facebook/react-native/commit/5be50d482082917351b46ee2e339e56e7e34e111) by [@misaku](https://github.com/misaku))
- Fix issue with use of Android API 28 by adding security config for metro access ([5747094532](https://github.com/facebook/react-native/commit/5747094532bace3fe6b1ebdf55235e53189baa71), [19492b730b](https://github.com/facebook/react-native/commit/19492b730b6779486f83d5ddbaeeb870cb3d5e9c), [3b0b7ce8c3](https://github.com/facebook/react-native/commit/3b0b7ce8c3c3679610c14ca72beb1a9dcf84d930), and [84572c4051](https://github.com/facebook/react-native/commit/84572c4051f11f68ddf0928d2c3df5850ae15491) by [@Salakar](https://github.com/Salakar) and [@dulmandakh](https://github.com/dulmandakh))
- Fix Inverted Horizontal **ScrollView** ([32cb9ec49c](https://github.com/facebook/react-native/commit/32cb9ec49c801fcebe61486149134ab542d9364b) by [@dmainas](https://github.com/dmainas))
- Fix crash on **CheckBox** on older Android versions ([58437cd10a](https://github.com/facebook/react-native/commit/58437cd10a667bbcbc16781df855fd7c3d73bf49) by [@vonovak](https://github.com/vonovak))
- Fix undefined error description in **Image** `onError` callback ([7795a672d3](https://github.com/facebook/react-native/commit/7795a672d3a24a5b50df6ad6d30555d856b557cc) by [@Jyrno42](https://github.com/Jyrno42))
- Fix Android crash on animating with `useNativeDriver` ([e405e84fc3](https://github.com/facebook/react-native/commit/e405e84fc35923888442df748757787698040010) by [@scisci](https://github.com/scisci))
- Fix dev settings menu not appearing for certain codebases due to namespace conflicts ([9968d0c203](https://github.com/facebook/react-native/commit/9968d0c2030c1065979db34cc9a244bd52b7b2a5) by [@khaled-cliqz](https://github.com/khaled-cliqz))
- Fix exception occurring while fading a **TextView** ([f83281e2ce](https://github.com/facebook/react-native/commit/f83281e2ce2aece44b1207844d8a5149d5d2e78d) by [@mdvacca](https://github.com/mdvacca))
- Fix **StatusBar** overwriting previously set `SystemUiVisibility` flags ([8afa0378cd](https://github.com/facebook/react-native/commit/8afa0378cd09b8fa6c30d759539fc9a680e8cae2) by [@rogerkerse](https://github.com/rogerkerse))
- Prevent `fetch()` POST requests from appending `charset=utf-8` to `Content-Type` header ([4a807761a4](https://github.com/facebook/react-native/commit/4a807761a4aca9e551ff2cee8ca18a2450fb11ca) and [0d5aebbd9a](https://github.com/facebook/react-native/commit/0d5aebbd9ac92a90ec7ab1426ed92dd22ae8c736) by [@nhunzaker](https://github.com/nhunzaker))
- Fix issue with **Location** that led to exceptions in two cases ([f32dc63546](https://github.com/facebook/react-native/commit/f32dc635467a2e93371f0cf2e40b07a712349288) by [@mikelambert](https://github.com/mikelambert))

#### iOS specific

- Fix **TextInput** mistakenly capitalizing I's after emojiis ([f307ac7c5e](https://github.com/facebook/react-native/commit/f307ac7c5e3adb9b4c0f8b2e4b8cdc2f980c7733) by [@dchersey](https://github.com/dchersey))
- Fix **TextView**'s `setAttributedText` for CJK languages on single-line text fields ([e38be82dfa](https://github.com/facebook/react-native/commit/e38be82dfa8b49385b990629318f027de26500cf) by [@mandrigin](https://github.com/mandrigin))
- Fix RCTImageLoader multi thread crash ([5ed31ce524](https://github.com/facebook/react-native/commit/5ed31ce5240a7392afdc522120edef182e0014ed))
- Fix removing keys of large values from **AsyncStorage** ([27b4d21564](https://github.com/facebook/react-native/commit/27b4d215641f9397ef415cbb2acfc1275e6110ac) by [@esprehn](https://github.com/esprehn))
- Fix overscroll behavior on virtualized lists; behavior is now consistent ([4d5f85ed42](https://github.com/facebook/react-native/commit/4d5f85ed426cfb43dc5e63f915e416a47d76b965))
- Fix **Alert** to not block input focus and blur ([e4364faa3c](https://github.com/facebook/react-native/commit/e4364faa3cab150b82272819fc92086fb4da297e) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix broken JSIexecutor search path ([2aa2401766](https://github.com/facebook/react-native/commit/2aa24017667721ba17a859ca4e13d43e52d86bc5) by [@amccarri](https://github.com/amccarri))
- Fix potential linker issues when using Xcode project ([9f72e6a5d0](https://github.com/facebook/react-native/commit/9f72e6a5d02d84fe8ed545e0c0904199b9cb3c7a) by [@tyrone-sudeium](https://github.com/tyrone-sudeium))
- Fix crash when `scrollEnabled` used in singleline textinput ([9ff43abe65](https://github.com/facebook/react-native/commit/9ff43abe653ac5af0e591b369228f0809caad204) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash in gif image usage ([d0cd3cae13](https://github.com/facebook/react-native/commit/d0cd3cae13a1b1fff8a2e378b5228d3cdccd695f) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **geolocation** to not constantly reset accuracy to default of 100 meters ([bbcb97a29a](https://github.com/facebook/react-native/commit/bbcb97a29adc2a3a05728b47d28e28fa78d84df2) by [@omnikron](https://github.com/omnikron))
- Fix iOS build issue related to missing `DoubleConversion` and `glog` to `cxxreact`, `jsi` and `jsiexecutor` subspecs in `React.podspec` file ([00392ac46b](https://github.com/facebook/react-native/commit/00392ac46b6319dcff2b6df2e5f7bb4ee094612f) by [@alexruperez](https://github.com/alexruperez))
- Fix "'folly/folly-config.h' file not found" build error when using React via CocoaPods ([5560a47c1d](https://github.com/facebook/react-native/commit/5560a47c1dbc7daab1e4f4aac0667080fdea836a) by [@Salakar](https://github.com/Salakar))
- Fix image cache to follow [MDN strategy](https://developer.mozilla.org/en-US/docs/Web/HTTP/Caching#Freshness) ([fb8ba3fe95](https://github.com/facebook/react-native/commit/fb8ba3fe959fd2a0c4ef0025fd84f6deffd9d03b) and [fb8ba3fe95](https://github.com/facebook/react-native/commit/fb8ba3fe959fd2a0c4ef0025fd84f6deffd9d03b) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash due to IllegalArgumentException when creating CookieManage ([cda8171af3](https://github.com/facebook/react-native/commit/cda8171af30815edfa331e07d1bbf605f0926303) by [@mdvacca](https://github.com/mdvacca))
- Fix cursor placement after toggling `secureTextEntry` cursor spacing ([8ce3c1b43e](https://github.com/facebook/react-native/commit/8ce3c1b43edd47191c8e5ee8432c58f6e93dfca7) by [@ericlewis](https://github.com/facebook/react-native/commits?author=ericlewis))

## v0.58.6

This release is fairly small, as we approach stable status for [0.59](https://github.com/react-native-community/react-native-releases/issues/79).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/95) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/97).

### Fixed

#### Android specific

- Fix Inverted Horizontal ScrollView on Android (#23233) ([32cb9ec49c](https://github.com/facebook/react-native/commit/32cb9ec49c801fcebe61486149134ab542d9364b) by [@dmainas](https://github.com/dmainas))

#### iOS specific

- Map TextInput textContentType strings to Objective-C constants (#22611) ([a89fe4165c](https://github.com/facebook/react-native/commit/a89fe4165c2a331a9d88636d89a5a48151ab8660) by [@levibuzolic](https://github.com/levibuzolic))
- Don't reconnect inspector if connection refused (#22625) ([d9489c4e9c](https://github.com/facebook/react-native/commit/d9489c4e9c646b79025f07635b840e9974be8cd5) by [@msand](https://github.com/msand))

## v0.58.5

This release resolves a few bugs and includes a few improvements, listed below.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/86) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/95).

### Removed

- Remove fallback cache ([9d60c20cb3](https://github.com/facebook/react-native/commit/9d60c20cb35074e92a90b803d3d6f420f6671635) by [@grabbou](https://github.com/grabbou))

### Fixed

- Fixes capitalized I's when emojis are present after the text being edited. (#21951) ([f307ac7c5e](https://github.com/facebook/react-native/commit/f307ac7c5e3adb9b4c0f8b2e4b8cdc2f980c7733) by [@dchersey](https://github.com/dchersey))
- Fix broken jsiexecutor search path. (#23274) ([2aa2401766](https://github.com/facebook/react-native/commit/2aa24017667721ba17a859ca4e13d43e52d86bc5) by [@amccarri](https://github.com/amccarri))
- Fix duplicate symbols linker error in xcodeproj (#23284) ([9f72e6a5d0](https://github.com/facebook/react-native/commit/9f72e6a5d02d84fe8ed545e0c0904199b9cb3c7a) by [@tyrone-sudeium](https://github.com/tyrone-sudeium))
- apply Network Security Config file (fixes #22375) (part 2 of #23105) (#23135) ([84572c4051](https://github.com/facebook/react-native/commit/84572c4051f11f68ddf0928d2c3df5850ae15491) by [@Salakar](https://github.com/Salakar))
- Fix crash for web socket in some race conditions (#22439) ([dd209bb789](https://github.com/facebook/react-native/commit/dd209bb7891ed5f05b96a9922c7b0e39bf3ac9e9) by [@zhongwuzw](https://github.com/zhongwuzw))

#### iOS specific

- Don't attempt to load RCTDevLoadingView lazily ([a9dd828c68](https://github.com/facebook/react-native/commit/a9dd828c68338dbf0e55ffa1838bf8ff574f317d) by [@fkgozali](https://github.com/fkgozali))

### Security

#### Android specific

- improve Android Network Security config (#23429) ([5747094532](https://github.com/facebook/react-native/commit/5747094532bace3fe6b1ebdf55235e53189baa71) by [@dulmandakh](https://github.com/dulmandakh))

## v0.58.4

This release resolves a few bugs and includes a few improvements, listed below.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/86).

### Added

#### Android specific

- Add error description to Image onError callback ([7795a672d3](https://github.com/facebook/react-native/commit/7795a672d3a24a5b50df6ad6d30555d856b557cc) by [@Jyrno42](https://github.com/Jyrno42))

### Changed

#### Android specific

- bump soloader to `0.6.0` ([07d1075f37](https://github.com/facebook/react-native/commit/07d1075f372bb864ddc62b9c8f613b03becfa568) by [@dulmandakh](https://github.com/dulmandakh))

### Removed

- Remove jest and jest-junit from runtime dependencies (#23276) ([c7b57f1986](https://github.com/facebook/react-native/commit/c7b57f19869f31474c8ee17f7a1ac1551bab1b6e) by [@vovkasm](https://github.com/vovkasm))

### Fixed

#### Android specific

- Fixes Android crash on animated style with string rotation ([e405e84fc3](https://github.com/facebook/react-native/commit/e405e84fc35923888442df748757787698040010) by [@scisci](https://github.com/scisci))

#### iOS specific

- fix incorrect type which makes animated gifs not loop forever on device (#22987) ([728a35fcf2](https://github.com/facebook/react-native/commit/728a35fcf2a2b0d695a4d7083b266eda486b1392) by [@chrisnojima](https://github.com/chrisnojima))
- Fixes for running the simulator ([9a8c9596eb](https://github.com/facebook/react-native/commit/9a8c9596ebe41e27d37ba18d6bf09f1c931c1ff2) by [@osunnarvik](https://github.com/osunnarvik)), ([98bcfe00fb](https://github.com/facebook/react-native/commit/98bcfe00fbca066d6914a2680c3647b678caccc5) by [@cpojer](https://github.com/cpojer)) and ([8bddcb6cb0](https://github.com/facebook/react-native/commit/8bddcb6cb0914373a0aeb927f12a6d48ffc5bb84) by [@cpojer](https://github.com/cpojer))

## v0.58.3

This release resolves a regression in **StatusBar** using [these fixes](https://github.com/facebook/react-native/compare/v0.58.2...v0.58.3).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## v0.58.2

This release fixes an issue caused by a wrongly reverted merge commit, that caused a short timeframe of commits to not actually be in the original 0.58.0. Those commits have been added to the 0.58 changelog below, as many are intertwined with the original work.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## v0.58.1

There were some regressions with developer tools that prevented `react-native run-ios` from working properly in 0.58.0; this patch fix addresses that.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate to the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## v0.58.0

Welcome to first stable release of React Native of 2019!
There are a number of significant changes in this version, and we'd like to especially draw your attention to them:

- [Modernizing](https://github.com/facebook/react-native/issues/21581) and [strengthening flow types](https://github.com/facebook/react-native/issues/22100) for core components
- Breaking changes to `ScrollView`, `CameraRollView`, and `SwipeableRow` that make it no longer bound to the component instance in certain methods
- Support for mutual TLS in WebKit
- Asset serving from directories besides `/assets`
- Numerous crash fixes and resolutions for unexpected behavior

Aside from those:

- if you are an iOS developer, you'll need to manually link `JavaScriptCore.framework` when upgrading; this can be done via Xcode, and following the steps shown [here](https://camo.githubusercontent.com/c09cd42747364b498efa7c82fcb73978ba076eae/687474703a2f2f646f63732e6f6e656d6f62696c6573646b2e616f6c2e636f6d2f696f732d61642d73646b2f616464696e672d6672616d65776f726b732e706e67).

- Android developers, please note that Android's target SDK 27 is supported. Work is still underway to land target SDK 28 support, and it will come soon.

Thanks to those who gave feedback during the [release candidate phase](https://github.com/react-native-community/react-native-releases/issues/41). If you're interested in helping evaluate our next release (0.59), subscribe to the dedicated issue [here](https://github.com/react-native-community/react-native-releases/issues/79).

### Added

- Add support for `publicPath` to enable serving static assets from different locations ([0b314960aa](https://github.com/facebook/react-native/commit/0b314960aa34c71fc731bac9c1f2b48f3223c5cb) by [@gdborton](https://github.com/gdborton))
- Add **TouchableBounce** now has a simple `bounce()` function that can be used to trigger a bounce without callbacks ([7fe3f90156](https://github.com/facebook/react-native/commit/7fe3f90156e879fe53665efb5a90ba3a711475fa))

#### Android specific

- Bundler server host can now be set using Android System Properties, making for easier debugging across multiple apps or app installs `adb shell setprop metro.host` ([e02a154787](https://github.com/facebook/react-native/commit/e02a154787274be1da3632cb1412554cbd53928b) by [@stepanhruda](https://github.com/stepanhruda))
- Native Modules can now reject a promise with an additional `WritableMap` arg for extra properties (`userInfo`). See the interface defined in [`Promise.java`](https://github.com/facebook/react-native/blob/60b3942/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java) for available methods. This is accessible in JavaScript as `Error.userInfo`. This is to match iOS's existing `Error.userInfo` behavior. See PR for examples. (#20940 by @Salakar)
- Native Modules now expose a `nativeStackAndroid` property to promises rejected with an Exception/Throwable - making native error stacks available inside Javascript: `Error.nativeStackAndroid`. This is to match iOS's existing `Error.nativeStackIOS` support. See PR for examples. (#20940 by @Salakar)

#### iOS specific

- Add `moduleForName: lazilyLoadIfNecessary` to **RCTBridge.h** to lookup modules by name and force load them, plus various improvements to LazyLoading ([d7a0c44590](https://github.com/facebook/react-native/commit/d7a0c44590bcf3fb9d055aeae3391d5bcd7e21be), [6534718a18](https://github.com/facebook/react-native/commit/6534718a1898aa472e255d2aa9a0a6cae305619a), [d7865ebde8](https://github.com/facebook/react-native/commit/d7865ebde879983b355d6f6e64232e4bd264081d), [04ea9762e2](https://github.com/facebook/react-native/commit/04ea9762e2013dcebf9f8a51d8974fa799e41cd5), [1f394fa673](https://github.com/facebook/react-native/commit/1f394fa673a876753fdc9ac2cb86a4d4a58cd8cd), [80f92adf1f](https://github.com/facebook/react-native/commit/80f92adf1f35e74ee6db0b2f445cc851463059cf), and [81b74ec1ed](https://github.com/facebook/react-native/commit/81b74ec1ed3792c0b406c30b0a1c01219a2d6243) by [@dshahidehpour](https://github.com/dshahidehpour), [@fkgozali](https://github.com/fkgozali), and [@mmmulani](https://github.com/mmmulani))
- Add ability for **WebView** to `setClientAuthenticationCredential` when `useWebKit={true}` for mutual TLS authentication ([8911353c47](https://github.com/facebook/react-native/commit/8911353c47af018f78c1cff59dfab05b975e39ed) and [8911353c47](https://github.com/facebook/react-native/commit/8911353c47af018f78c1cff59dfab05b975e39ed) by [@mjhu](https://github.com/mjhu))

### Changed

- Major improvements to Flow types for Core Components ([499c195eba](https://github.com/facebook/react-native/commit/499c195ebab0f276e3a58baf1e6172c1ba046a9e), [fbc5a4f5e6](https://github.com/facebook/react-native/commit/fbc5a4f5e65e024c10ad43d84f2b2353c9e92461), [f9050e0908](https://github.com/facebook/react-native/commit/f9050e09084cf3700bfc1954f97adf0f60cd8d88), [6476151717](https://github.com/facebook/react-native/commit/6476151717f44d3a90679f0f5293bed62a4f420e), [c03fc4087f](https://github.com/facebook/react-native/commit/c03fc4087ff9ac3ccbd1ab2261a1af329b354d99), [69213eea95](https://github.com/facebook/react-native/commit/69213eea9512c81ed998d240a6f5a3be05346b48), [136dfc8312](https://github.com/facebook/react-native/commit/136dfc831230e5418db02d1202e60d23a95c17b6), [3c0211b61a](https://github.com/facebook/react-native/commit/3c0211b61a1e723c3aaeba42c61b60bc724a3729), [c127000a7d](https://github.com/facebook/react-native/commit/c127000a7d2bb54599c9d80503528c3e8d75fddc), [636e146c4a](https://github.com/facebook/react-native/commit/636e146c4a27990547c81c2d36411d36b2c8e788), [c3dea894bd](https://github.com/facebook/react-native/commit/c3dea894bdb07d0b7ec18ab0388626d0340e6b69), [35a65cd704](https://github.com/facebook/react-native/commit/35a65cd704f2da67cd759c4d91251f8d4964b251), [79274979b7](https://github.com/facebook/react-native/commit/79274979b775e89d5f54a557a34062f873134199), [45c51835d6](https://github.com/facebook/react-native/commit/45c51835d69e111b67b4fcf1af39a13f7df1ee48), [a97d104b44](https://github.com/facebook/react-native/commit/a97d104b44daa068fa3848cc6c3225356f9dc318), [fb4825a2c6](https://github.com/facebook/react-native/commit/fb4825a2c65fba3aa905f7defb7d0c125fff644d), [84c5416617](https://github.com/facebook/react-native/commit/84c541661729dd20ab260c7468e48abbbe82affb), [3649a503cf](https://github.com/facebook/react-native/commit/3649a503cf52feac0386b4a10aab5ef6c4ec5ca0) by [@mottox2](https://github.com/mottox2), [@saitoxu](https://github.com/saitoxu), [@RSNara](https://github.com/RSNara), [@watanabeyu](https://github.com/watanabeyu), [@Tnarita0000](https://github.com/Tnarita0000), [@exced](https://github.com/exced), [@nd-02110114](https://github.com/nd-02110114), [@flowkraD](https://github.com/flowkraD))
- Many public components were converted to ES6 classes ([ScrollView](https://github.com/facebook/react-native/commit/010e3302b8101287f231254086f3a8788a5a2c3e) by [@thymikee](https://github.com/thymikee), [CameraRollView](https://github.com/facebook/react-native/pull/21619), [SwipeableRow](https://github.com/facebook/react-native/pull/21876/files) and [ProgressBarAndroid](https://github.com/facebook/react-native/pull/21874) by [@exceed](https://github.com/exceed), [ProgressViewIOS](https://github.com/facebook/react-native/pull/21588) by [@empyrical](https://github.com/empyrical), [SegmentedControlIOS](https://github.com/facebook/react-native/pull/21888/files), [ToolbarAndroid](https://github.com/facebook/react-native/pull/21893/files) by [@nd-02110114](https://github.com/nd-02110114)
- Flow dependency is now at `v0.85.0` ([adc8a33fcf](https://github.com/facebook/react-native/commit/adc8a33fcfeb8fc163f48ae4a4bc5aaac98bcb0d) by [@samwgoldman](https://github.com/samwgoldman))
- metro dependency is now at `v0.49.1` ([f867db366a](https://github.com/facebook/react-native/commit/f867db366aa4f0ead5a20c0d3154ca58be43fc20), [88882951e1](https://github.com/facebook/react-native/commit/88882951e1607b0af6f1772ef13135e037f9c4e3), [31bb551e75](https://github.com/facebook/react-native/commit/31bb551e75bda155b4821381e5497dc423326e3c), [de60e8643a](https://github.com/facebook/react-native/commit/de60e8643ac4e13a7f92175351268dd3c3e768db), and [de60e8643a](https://github.com/facebook/react-native/commit/de60e8643ac4e13a7f92175351268dd3c3e768db) by [@alexkirsz](https://github.com/alexkirsz) and [@rafeca](https://github.com/rafeca))
- jest dependency is now at `v24.0.0-alpha.6` ([1b4fd64325](https://github.com/facebook/react-native/commit/1b4fd643256817d29163b37101da612867a225a1), [66aba09251](https://github.com/facebook/react-native/commit/66aba092514abd2b278a4fb66c30abffbdd5d5ff), and [06c13b3e06](https://github.com/facebook/react-native/commit/06c13b3e066636b414f5dc19c919dcb138763c71) by [@rafeca](https://github.com/rafeca) and [@rubennorte](https://github.com/rubennorte))
- fbjs-scripts dependency is now at `v1.0.0` (#21880) ([cdbf719307](https://github.com/facebook/react-native/commit/cdbf719307f41e94a62307ec22463bb562d1c8de) by [@jmheik](https://github.com/jmheik))
- folly dependency is now at `v2018.10.22.00` ([a316dc6ec3](https://github.com/facebook/react-native/commit/a316dc6ec34655981c0f226186f4fb668e4a01e2), [287934dba9](https://github.com/facebook/react-native/commit/287934dba943cd954164bde8b06f9ba85940b45f), and [a70625abd7](https://github.com/facebook/react-native/commit/a70625abd7bf4fba3dafb8a969a73854b7ddcd42) by [@Kudo](https://github.com/Kudo) and [@radko93](https://github.com/radko93))
- React is set to `16.6.3` now via sync for revisions 4773fdf...6bf5e85 ([0cb59b5c23](https://github.com/facebook/react-native/commit/0cb59b5c23b76771a30f59cdcedaa3c95c4dd280) and [073ad6a036](https://github.com/facebook/react-native/commit/073ad6a0367c3156e03680c0ab0648feed2bf89c) by [@yungsters](https://github.com/yungsters))
- Clearer error messages when hot reloading ([c787866d64](https://github.com/facebook/react-native/commit/c787866d644be4c8d30bb17c237a50fdd6e1a82d) by [@alexkirsz](https://github.com/alexkirsz))
- Allow CxxModules to implement functions which take two callbacks ([8826d8b233](https://github.com/facebook/react-native/commit/8826d8b233c1e3325a575d5012b713c4786e6062) by [@acoates-ms](https://github.com/acoates-ms))

#### Breaking Changes 💥

- Public methods of components converted to ES6 classes are no longer bound to their component instance. For `ScrollView`, the affected methods are `setNativeProps`, `getScrollResponder`, `getScrollableNode`, `getInnerViewNode`, `scrollTo`, `scrollToEnd`, `scrollWithoutAnimationTo`, and `flashScrollIndicators`. For `CameraRollView`, the affected methods are: `rendererChanged`. For `SwipeableRow`, the affected methods are: `close`. Therefore, it is no longer safe to pass these method by reference as callbacks to functions. Auto-binding methods to component instances was a behaviour of `createReactClass` that we decided to not preserve when switching over to ES6 classes. (you can refer to [this example](https://github.com/react-native-community/react-native-releases/issues/81#issuecomment-459252692))
- Native Modules in Android now require `@ReactModule` annotations to access `.getNativeModule` method on the `ReactContext`. This is how your updated Native Module should look like:

  ```diff
  // CustomModule.java

  // ...
  +  import com.facebook.react.module.annotations.ReactModule;

  +  @ReactModule(name="CustomBridge")
  public class CustomModule extends ReactContextBaseJavaModule {
    // ...

    @Override
    public String getName() {
        return "CustomBridge";
    }

    // ...
  }
  ```

#### Android specific

- Optimize `PlatformConstants.ServerHost`, `PlatformConstants.isTesting`, and `PlatformConstants.androidID` for performance ([2bf0d54f15](https://github.com/facebook/react-native/commit/2bf0d54f155c28244fa60230871b3eed60a20c6d), [339d9d3afb](https://github.com/facebook/react-native/commit/339d9d3afba45bb28073db59e365caea37258891), and [9f9390ddfc](https://github.com/facebook/react-native/commit/9f9390ddfccab706ff2d346fdbd408c1cfc1c312) by [@stepanhruda](https://github.com/stepanhruda), [@fkgozali](https://github.com/fkgozali), and [@axe-fb](https://github.com/axe-fb))

#### iOS specific

- Suppress yellow box about missing export for native modules ([5431607c6d](https://github.com/facebook/react-native/commit/5431607c6d4983e0adccf0192dd4dc4f5dc85443) by [@fkgozali](https://github.com/fkgozali))

### Removed

- Remove `UIManager.measureViewsInRect()` ([d6236796b2](https://github.com/facebook/react-native/commit/d6236796b285e6ad19c53c5308a0ad9c10792a05) by [@shergin](https://github.com/shergin))

### Fixed

- Fix potential UI thread stalling scenario from Yoga JNI bindings ([2a8f6c3028](https://github.com/facebook/react-native/commit/2a8f6c3028feec7fc9a01cbdfad45955c4771bf8) by [@davidaurelio](https://github.com/davidaurelio))
- Fix crash happening due to race condition around bridge cxx module registry ([188cbb04ad](https://github.com/facebook/react-native/commit/188cbb04ad264aea32ae235b85b61e626b767b83), [188cbb04ad](https://github.com/facebook/react-native/commit/188cbb04ad264aea32ae235b85b61e626b767b83), and [188cbb04ad](https://github.com/facebook/react-native/commit/188cbb04ad264aea32ae235b85b61e626b767b83) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix **View** and **Text**'s displayName; show the specific name rather than generic "Component" ([7a914fcef4](https://github.com/facebook/react-native/commit/7a914fcef4ae035221e1f984c104ba20430d6fad) by [@rajivshah3](https://github.com/rajivshah3))
- Fix `react-native init --help` so that it doesn't return `undefined` ([58732a88b6](https://github.com/facebook/react-native/commit/58732a88b629b40b2d223a76fac46ecee5ae7295) by [@ignacioola](https://github.com/ignacioola))
- Fix `react-native --sourceExts` ([ce860803a4](https://github.com/facebook/react-native/commit/ce860803a4341c4121a0bb504dc669349ac0db35) by [@elyalvarado](https://github.com/elyalvarado))
- Fix accidental showing of **Modal** when `visible` prop is undefined or null ([cc13a7367b](https://github.com/facebook/react-native/commit/cc13a7367b08bd766749ddbfaacc25ade1f33a8f) by [@MateusAndrade](https://github.com/MateusAndrade))
- Fix crash during **VirtualizedList** pagination ([5803772017](https://github.com/facebook/react-native/commit/580377201793314ca643250c1bd7cf1c47d49920))
- Fix scenario where removing a module with remote debugging and Delta bundles may cause incorrect stack traces ([bea57d871f](https://github.com/facebook/react-native/commit/bea57d871f6b5bed76d1625b3e3f483695bd13e9) by [@alexkirsz](https://github.com/alexkirsz))
- Fix regression in **StyleSheet** `setStyleAttributePreprocessor` ([04085337bc](https://github.com/facebook/react-native/commit/04085337bc47392922c7911b95b8fdaea98800e8) by [@brentvatne](https://github.com/brentvatne))
- Fix React Native AsyncMode and DevTools ([aacb06c594](https://github.com/facebook/react-native/commit/aacb06c594dcd4581918035f713a69cf73bf125b) by [@bvaughn](https://github.com/bvaughn))

#### Android specific

- Fix crash when removing root nodes ([b649fa96a0](https://github.com/facebook/react-native/commit/b649fa96a088a9e8ccbf3f979ebfa4a5e28a066f) by [@ayc1](https://github.com/ayc1))
- Fix various **ReactInstanceManager** deadlocks and race conditions ([df7e8c64ff](https://github.com/facebook/react-native/commit/df7e8c64ff8f5ff739fba2ba5ed6b0610567235e), [df7e8c64ff](https://github.com/facebook/react-native/commit/df7e8c64ff8f5ff739fba2ba5ed6b0610567235e), and [be282b5287](https://github.com/facebook/react-native/commit/be282b5287f7eecf8a3fd14b06ab36454dbba5fe) by [@ayc1](https://github.com/ayc1))
- Fix IllegalArgumentException when dismissing ReactModalHostView and DialogManager ([e57ad4ee37](https://github.com/facebook/react-native/commit/e57ad4ee37b02cd4c9e10a97d7a1d2b799204d7d) and [38e01a20c3](https://github.com/facebook/react-native/commit/38e01a20c343e60d5f8cd92fb26454e9940565df) by [@mdvacca](https://github.com/mdvacca))
- Fix incorrect merged asset path with flavor for Android Gradle Plugin 3.2 ([e90319e9fa](https://github.com/facebook/react-native/commit/e90319e9fa18661144ad29faf36efba3750edb32) by [@yatatsu](https://github.com/yatatsu))
- Fix HTTP connection ontimeout callback ([a508134724](https://github.com/facebook/react-native/commit/a50813472450f51d2ef24b40be99a22beefec33c))
- Fix websocket properly closing when remote server initiates close ([2e465bca15](https://github.com/facebook/react-native/commit/2e465bca158ae9cfa89448e2a3bb8cc009397ac8) by [@syaau](https://github.com/syaau))
- Fix compatibility issue for Android 16 device ([5939d078a0](https://github.com/facebook/react-native/commit/5939d078a01edc9f83fce102317540ffbcac17c1), [f22473e9e9](https://github.com/facebook/react-native/commit/f22473e9e9f73605cd27c5e38298bd793478c84d), and [f22473e9e9](https://github.com/facebook/react-native/commit/f22473e9e9f73605cd27c5e38298bd793478c84d) by [@gengjiawen](https://github.com/gengjiawen))
- Fix issue where `Image.resizeMode` isn't respected while source is loading, resulting in unexpected padding ([673ef39561](https://github.com/facebook/react-native/commit/673ef39561ce6640e447fa40299c263961e4f178) by [@dulmandakh](https://github.com/dulmandakh))
- Fix Android 28's inverted **ScrollView** so that momentum is in the proper direction ([b971c5beb8](https://github.com/facebook/react-native/commit/b971c5beb8c7f90543ea037194790142f4f57c80) by [@mandrigin](https://github.com/mandrigin))
- Fix HTTP connection timeout callback to be appropriately called ([a508134724](https://github.com/facebook/react-native/commit/a50813472450f51d2ef24b40be99a22beefec33c))
- Fix compatibility issue with Android 16 device ([5939d078a0](https://github.com/facebook/react-native/commit/5939d078a01edc9f83fce102317540ffbcac17c1) by [@gengjiawen](https://github.com/gengjiawen))
- Fix crash when releasing RN views and removing root nodes([83405ff316](https://github.com/facebook/react-native/commit/83405ff3167eaba6fa59ca52c54943221a05ee09) and [b649fa96a0](https://github.com/facebook/react-native/commit/b649fa96a088a9e8ccbf3f979ebfa4a5e28a066f) by [@ayc1](https://github.com/ayc1))
- Close websocket properly when remote server initiates close ([2e465bca15](https://github.com/facebook/react-native/commit/2e465bca158ae9cfa89448e2a3bb8cc009397ac8) by [@syaau](https://github.com/syaau))
- Workaround a wrong fling direction for inverted ScrollViews on Android P ([b971c5beb8](https://github.com/facebook/react-native/commit/b971c5beb8c7f90543ea037194790142f4f57c80) by [@mandrigin](https://github.com/mandrigin))
- Fix **Image** to respect `resizeMode` for `defaultSource` images rather than showing padding while loading ([673ef39561](https://github.com/facebook/react-native/commit/673ef39561ce6640e447fa40299c263961e4f178) by [@dulmandakh](https://github.com/dulmandakh))

#### iOS specific

- Fix case where content of inline views didn't get relaid out ([798517a267](https://github.com/facebook/react-native/commit/798517a267841675956cb52a1c0ae493a913962a) by [@rigdern](https://github.com/rigdern))
- Fix issue with **ImagePickerIOS**'s inconsistent image when using the front-facing camera ([4aeea4d2dc](https://github.com/facebook/react-native/commit/4aeea4d2dc14cf02dc3766043e2938bf367c6170))
- Fix race condition and crash around shutdown of the JSC for iOS 11 and earlier ([bf2500e38e](https://github.com/facebook/react-native/commit/bf2500e38ec06d2de501c5a3737e396fe43d1fae) by [@mhorowitz](https://github.com/mhorowitz))
- Fix crash in **NetInfo**'s \_firstTimeReachability ([eebc8e230a](https://github.com/facebook/react-native/commit/eebc8e230a9f72c3dde34a5cfd59bbffba55e53d) by [@mmmulani](https://github.com/mmmulani))
- Fix case where inline view is visible even though it should have been truncated ([70826dbafc](https://github.com/facebook/react-native/commit/70826dbafcb00c08e0038c5066e33848141be77b) by [@rigdern](https://github.com/rigdern))
- Fix crash with **ScrollView** related to content offsets ([585f7b916d](https://github.com/facebook/react-native/commit/585f7b916d63b7b4d22a7347334765ffcd7945e9) by [@shergin](https://github.com/shergin))
- Fix an issue where **CameraRoll** wasn't showing the front-facing camera consistently during capture and preview ([4aeea4d2dc](https://github.com/facebook/react-native/commit/4aeea4d2dc14cf02dc3766043e2938bf367c6170))
- Fix case where inline view is visible even though it should have been truncated ([70826dbafc](https://github.com/facebook/react-native/commit/70826dbafcb00c08e0038c5066e33848141be77b) by [@rigdern](https://github.com/rigdern))

### Known issues

It is possible that you'll face an AAPT error regarding missing resources, [here](https://github.com/infinitered/ignite-andross/issues/244) is an example of this error, in this case, you should try to update the build tools versions to `buildToolsVersion = "28.0.2"` in your android/build.gradle file. If you maintain a react-native library which uses native code you should avoid using hardcoded versions of the build tools and use the packaged version numbers, here is an example you can [follow](https://github.com/react-native-community/react-native-linear-gradient/blob/master/android/build.gradle)

## v0.57.8

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.3"`.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/71) for cherry-picking commits - you can participate to the decision process for the next release [here](https://github.com/react-native-community/react-native-releases/issues/75).

### Added

- Fix: Add displayName to ActivityIndicator (#22417) ([53da585832](https://github.com/facebook/react-native/commit/53da5858326bbddd2df112f86b2c1e935adc3882))

### Changed

- Switch: Improve Accessibility ([0c8db08f51](https://github.com/facebook/react-native/commit/0c8db08f519fdf5162dff1d9a18b58885c4c7d2f) by [@yungsters](https://github.com/yungsters))
- React sync for revisions 3ff2c7c...6bf5e85 ([073ad6a036](https://github.com/facebook/react-native/commit/073ad6a0367c3156e03680c0ab0648feed2bf89c) by [@yungsters](https://github.com/yungsters))

#### iOS specific

- Extend reason message for `RCTFatalException` (#22532) ([2831d9ef61](https://github.com/facebook/react-native/commit/2831d9ef614280d08699f3134eeaeda84c30234e) by [@zackzachariah](https://github.com/zackzachariah))

### Removed

- Remove trailing slash from origin header if no port is specified (#22290) ([cbe7d41f3f](https://github.com/facebook/react-native/commit/cbe7d41f3f509aaa8b8b0819b0d8ad4996fd7296))

### Fixed

- Fix text alpha bug ([fd78eee11b](https://github.com/facebook/react-native/commit/fd78eee11b71799aa7fa57bbd70d59c6c642c3b3) by [@necolas](https://github.com/necolas))
- fix possible NPE in StatusBarModule ([0f3be77b7d](https://github.com/facebook/react-native/commit/0f3be77b7d4177c8f94d775bf8ef2a2b68f1e828) by [@mdvacca](https://github.com/mdvacca))
- Fixes animated gifs incorrectly looping/not stopping on last frame (#21999) ([de759b949e](https://github.com/facebook/react-native/commit/de759b949e4aa4904fd60a2fcbb874a3c857b50c) by [@staufman](https://github.com/staufman))
- Fix ListEmptyComponent is rendered upside down when using inverted flag. (#21496) ([198eb02697](https://github.com/facebook/react-native/commit/198eb0269781803cc16254916b0477916afbcb0e) by [@hyochans](https://github.com/hyochans))
- Fix bug in comparison logic of object property (#22348) ([c3b3eb7f73](https://github.com/facebook/react-native/commit/c3b3eb7f73b0fb4035d4b2478bf9827caf746372) by [@vreality64](https://github.com/vreality64))
- Fix dispatch of OnLayout event for first render ([844e11967d](https://github.com/facebook/react-native/commit/844e11967d9292bd5cfe423d0fd57e34388f2337) by [@mdvacca](https://github.com/mdvacca))
- KeyboardAvoidingView: Duration cannot be less then 10ms (#21858) ([87b6533937](https://github.com/facebook/react-native/commit/87b65339379362f9db77ae3f5c9fa8934da34b25))
- default hitSlop values to 0 (#22281) ([f6d3a61677](https://github.com/facebook/react-native/commit/f6d3a6167730cc9253b796b859d8f1f33f821687) by [@Taylor123](https://github.com/Taylor123))

#### iOS specific

- Fixed for supporting mediaPlaybackRequiresUserAction under iOS 10. (#22208) ([c45d290b07](https://github.com/facebook/react-native/commit/c45d290b079f95466ad4054acf7b93c66cabc429) by [@ifsnow](https://github.com/ifsnow))
- Use main.jsbundle in iOS template for production build (#22531) ([a2ef5b85d8](https://github.com/facebook/react-native/commit/a2ef5b85d8c46cefd5873bf5fc6dddabf1d51d13) by [@radeno](https://github.com/radeno))
- Use relative path for SCRIPTDIR (#22598) ([0314fca63a](https://github.com/facebook/react-native/commit/0314fca63a035c95864e5b198e1fbd9a5ee1d2a7) by [@sunnylqm](https://github.com/sunnylqm))
- Fix UIScrollView crash ([585f7b916d](https://github.com/facebook/react-native/commit/585f7b916d63b7b4d22a7347334765ffcd7945e9) by [@shergin](https://github.com/shergin))
- Avoid using `-[UITextView setAttributedString:]` while user is typing (#19809) ([f77aa4eb45](https://github.com/facebook/react-native/commit/f77aa4eb459b9dcb7f0b558ad3f04e0c507955e9))

### Security

- Bump ws package to 1.1.5 due to vulnerability issues (#21769) ([96ce6f9538](https://github.com/facebook/react-native/commit/96ce6f9538ed3559ffea6040a47b1d6a30546ab9) by [@prog1dev](https://github.com/prog1dev))

## v0.57.7

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.

This patch release fixes version 0.57.6 about losing focus in `TextInput` because of [ada7089066](https://github.com/facebook/react-native/commit/ada70890663503b65b42bb5f6f98d3df412ecdc4).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

## v0.57.6

**INFO NOTE**: It's highly recommended that you skip this version and upgrade to 0.57.7.

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.
This patch release fixes a number of crashes, resolves build issues (both for iOS and Android). Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

### Added

#### iOS specific

- Add iOS 12 textContentType options (#21079) ([644fc57fad](https://github.com/facebook/react-native/commit/644fc57fad4b163e96c3b3d6ec441c7b566d2d43) by [@ultramiraculous](https://github.com/ultramiraculous))

### Removed

- Remove useless additional blur call (#22156) ([ada7089066](https://github.com/facebook/react-native/commit/ada70890663503b65b42bb5f6f98d3df412ecdc4))

### Fixed

- Improving Modal `visible` prop check to handle undefined and null (#22072) ([cc13a7367b](https://github.com/facebook/react-native/commit/cc13a7367b08bd766749ddbfaacc25ade1f33a8f) by [@MateusAndrade](https://github.com/MateusAndrade))
- Fix crash in nativeInjectHMRUpdate (#22412) ([0b4fd621e3](https://github.com/facebook/react-native/commit/0b4fd621e3ab511510d6852af67183a3581d1aad) by [@vovkasm](https://github.com/vovkasm))
- Fix IllegalArgumentException when dismissing ReactModalHostView ([e57ad4ee37](https://github.com/facebook/react-native/commit/e57ad4ee37b02cd4c9e10a97d7a1d2b799204d7d) by [@mdvacca](https://github.com/mdvacca))
- Fix regression in StyleSheet.setStyleAttributePreprocessor (#22262) ([04085337bc](https://github.com/facebook/react-native/commit/04085337bc47392922c7911b95b8fdaea98800e8) by [@brentvatne](https://github.com/brentvatne))
- Fix React Native AsyncMode and DevTools ([f41383fb6d](https://github.com/facebook/react-native/commit/f41383fb6d6d0858e1b09dda79a74632d7932d07) by [@bvaughn](https://github.com/bvaughn))
- CxxReact: Silence 'unused lambda capture' warnings in open-source (#22240) ([0c0540965a](https://github.com/facebook/react-native/commit/0c0540965ad9e3cdd9af16f606e141eca8ab2193) by [@empyrical](https://github.com/empyrical))

#### Android specific

- Fixed HTTP connection timeout on Android (#22164) ([a508134724](https://github.com/facebook/react-native/commit/a50813472450f51d2ef24b40be99a22beefec33c))
- resizeMode applies to Image.defaultSource (#22216) ([673ef39561](https://github.com/facebook/react-native/commit/673ef39561ce6640e447fa40299c263961e4f178) by [@dulmandakh](https://github.com/dulmandakh))
- Android: Close websocket properly when remote server initiates close (#22248) ([2e465bca15](https://github.com/facebook/react-native/commit/2e465bca158ae9cfa89448e2a3bb8cc009397ac8) by [@syaau](https://github.com/syaau))
- Workaround a wrong fling direction for inverted ScrollViews on Android P (#21117) ([b971c5beb8](https://github.com/facebook/react-native/commit/b971c5beb8c7f90543ea037194790142f4f57c80) by [@mandrigin](https://github.com/mandrigin))
- Fix crash when releasing RN views ([83405ff316](https://github.com/facebook/react-native/commit/83405ff3167eaba6fa59ca52c54943221a05ee09) by [@ayc1](https://github.com/ayc1))

#### iOS specific

- iOS: Support inline view truncation (#21456) ([70826dbafc](https://github.com/facebook/react-native/commit/70826dbafcb00c08e0038c5066e33848141be77b) by [@rigdern](https://github.com/rigdern))
- NetInfo: try to solve crash with releasing \_firstTimeReachability ([eebc8e230a](https://github.com/facebook/react-native/commit/eebc8e230a9f72c3dde34a5cfd59bbffba55e53d) by [@mmmulani](https://github.com/mmmulani))
- Generate ip.txt before SKIP_BUNDLING check (#20554) ([9c1ea45d38](https://github.com/facebook/react-native/commit/9c1ea45d38a6ec731894443debe8879fa3876ab7) by [@keatongreve](https://github.com/keatongreve))
- Revert [Performance improvement for loading cached images on iOS ] ([7eeb305933](https://github.com/facebook/react-native/commit/7eeb305933fca695c5a15d675bb10569c3385109) by [@kelset](https://github.com/kelset))
- Fix inability to remove 'Disabled' state from AccessibilityStates ([5eaa2d29c0](https://github.com/facebook/react-native/commit/5eaa2d29c0c4c633a40f7241408737c754edea84))

## v0.57.5

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.

This patch release fixes a number of crashes, resolves build issues (both for iOS and Android), and brings React to v16.6.1. Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/54) for cherry-picking commits.

### Changed

- React is now at v16.6.1 ([8325e09e5c](https://github.com/facebook/react-native/commit/8325e09e5cd8538fded1b5a1b4fff1854e17eb22) and [76c99f20e3](https://github.com/facebook/react-native/commit/76c99f20e39ef1b5fa93487bc8c82e7c6aede5dd) by [@yungsters](https://github.com/yungsters))

#### iOS specific

- Performance improvement for loading cached images ([54f7eb3424](https://github.com/facebook/react-native/commit/54f7eb34243715a1d4bc821ccbadeec12486d22c) and [3a98318c91](https://github.com/facebook/react-native/commit/3a98318c91283a1bba35c0bca93b975d4a550330) by [@esamelson](https://github.com/esamelson) and others)

### Fixed

- Fix crash in **VirtualizedList** during pagination ([5803772017](https://github.com/facebook/react-native/commit/580377201793314ca643250c1bd7cf1c47d49920))
- Fix polyfilling of **regeneratorRuntime** to avoid setting it to undefined in some situations ([2a7e02edf6](https://github.com/facebook/react-native/commit/2a7e02edf64c20410b2f95f35e313279545b40db) by [@rafeca](https://github.com/rafeca))
- Fix **View**, **Text**, and **ActivityIndicator**'s `displayName` ([7a914fcef4](https://github.com/facebook/react-native/commit/7a914fcef4ae035221e1f984c104ba20430d6fad) and [53da585832](https://github.com/facebook/react-native/commit/53da5858326bbddd2df112f86b2c1e935adc3882) by [@rajivshah3](https://github.com/rajivshah3) and others)
- Fix crash that happens when a component throws an exception that contains a null message ([6debfdf6d6](https://github.com/facebook/react-native/commit/6debfdf6d6172cec2d87fd1e780c3b347d41dc1d) by [@mdvacca](https://github.com/mdvacca))

#### Android specific

- Fix incorrect merged asset path with flavor for Android Gradle Plugin 3.2 ([e90319e9fa](https://github.com/facebook/react-native/commit/e90319e9fa18661144ad29faf36efba3750edb32) by [@yatatsu](https://github.com/yatatsu))
- Fix crash in **ReadableNativeArray.getType** when size of ReadableNativeArray's length > 512 ([09c78fe968](https://github.com/facebook/react-native/commit/09c78fe968e1bb71108c4058e76ebf70178e5a8b) by [@dryganets](https://github.com/dryganets))

#### iOS specific

- Fix crash in rapid use of **NetInfo.getCurrentConnectivity** ([67afaefa78](https://github.com/facebook/react-native/commit/67afaefa78c314b38249a7e2758e0af38c18f34a) by [@mmmulani](https://github.com/mmmulani))
- Fix Xcode 10 errors relating to third-party ([277c19c93e](https://github.com/facebook/react-native/commit/277c19c93eacf3e3ce63f71236fd399214d6e6d0) by [@mmccartney](https://github.com/mmccartney))
- Fix build errors when path to `$NODE_BINARY` contains spaces ([7d4e94edcc](https://github.com/facebook/react-native/commit/7d4e94edccfc2f642fcbd1d6aa00756f02e3a525) by [@sundbry](https://github.com/sundbry))
- Fix case where content of inline views didn't get relaid out ([798517a267](https://github.com/facebook/react-native/commit/798517a267841675956cb52a1c0ae493a913962a) by [@rigdern](https://github.com/rigdern))
- Fix **InputAccessoryView**'s safe area when not attached to a **TextInput** ([2191eecf54](https://github.com/facebook/react-native/commit/2191eecf54b5c4bf278dfaf23fec46d44ac9a1f0) by [@janicduplessis](https://github.com/janicduplessis))

## v0.57.4

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.0-alpha.8af6728"` (next version, 0.57.5, will update to `16.6.0`, and it will come soon). Also, please check the _Known issues_ section below, especially if you are using Xcode 10.

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/48) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

#### Android specific additions

- Android textTransform style support ([22cf5dc566](https://github.com/facebook/react-native/commit/22cf5dc5660f19b16de3592ccae4c42cc16ace69) by Stephen Cook)

### Changes: existing functionality that is now different

- Add deprecation notice to SwipeableListView ([99471f87b9](https://github.com/facebook/react-native/commit/99471f87b944b26bbdaa0fb0881db91c1118b741) by [@TheSavior](https://github.com/TheSavior))

#### Android specific changes

- Consolidate native dependencies versions ([ba608a2db7](https://github.com/facebook/react-native/commit/ba608a2db786a8e983a6e30b31662fac254286c0) by [@dulmandakh](https://github.com/dulmandakh))
- bump okhttp3 to 3.11 ([10fc548809](https://github.com/facebook/react-native/commit/10fc548809cc08db209ae6696b723341925137d1) by [@dulmandakh](https://github.com/dulmandakh))
- Android: Send `<Text>` metrics in onTextLayout events ([737f93705c](https://github.com/facebook/react-native/commit/737f93705ca8b5d3fdd207f870cf27adcf1e885b) by [@mmmulani](https://github.com/mmmulani))
- Use TextLegend example in Android as well ([335927db44](https://github.com/facebook/react-native/commit/335927db44fe47e20db4503a1ab5fcf8d62144a8) by [@mmmulani](https://github.com/mmmulani))

#### iOS specific changes

- Bump xcode@1.0.0 ([b9514995a2](https://github.com/facebook/react-native/commit/b9514995a26b4c3f6d555257740457dd4d6cfeae) by [@peat-psuwit](https://github.com/peat-psuwit))
- Text: send metrics after rendering (iOS) ([737f93705c](https://github.com/facebook/react-native/commit/737f93705ca8b5d3fdd207f870cf27adcf1e885b) by [@mmmulani](https://github.com/mmmulani))
- Allow specifying iOS version for run-ios with simulator option ([0fab27cbac](https://github.com/facebook/react-native/commit/0fab27cbaca57b90119ab36104af4d0b3052ae30) by [@elyalvarado](https://github.com/elyalvarado))
- Relax the requirement that lazy module cannot be initialized on the main thread ([dbc864c9cd](https://github.com/facebook/react-native/commit/dbc864c9cd95f9df268d85a642742e84e2360db4) by [@spredolac](https://github.com/spredolac))

### Fixed: bugs that have been resolved

- Fix crashes on invalid regex ([298f14da12](https://github.com/facebook/react-native/commit/298f14da1210460b3e25c6002e8d1aa5f7b4e0ef) by [@RSNara](https://github.com/RSNara))
- Fix pull to refresh refresh component clipping on Android ([8a3a0ad2d0](https://github.com/facebook/react-native/commit/8a3a0ad2d0f894a3d8c1e403a9336dab17c2dde8) by Andy Huang)
- ListView requestAnimationFrame leak ([70b5eb3aa2](https://github.com/facebook/react-native/commit/70b5eb3aa27822fa11571c3d8d3628ecf03268ab) by [@exced](https://github.com/exced))

#### Android specific fixes

- reverted [Update bad method](https://github.com/facebook/react-native/commit/1592a8d42411d1f91c8ceb738c0533c1cee73f71)
- Fix accessibility role crash ([1f96ff62cf](https://github.com/facebook/react-native/commit/1f96ff62cf786f93c91e6625bf2b819077902251) by Haseeb Saeed)
- Fix accessibilityRole value lookup ([1f96ff62cf](https://github.com/facebook/react-native/commit/1f96ff62cf786f93c91e6625bf2b819077902251) by [@ayc1](https://github.com/ayc1))
- Fix DynamicFromMap object pool synchronization ([b0d68c0bb9](https://github.com/facebook/react-native/commit/b0d68c0bb971a44dfdf7722682933f1e96e1cd45) by [@haitaoli](https://github.com/haitaoli))
- Back out "[react-native][pr] Rounded corner rendering fixed on Android N." ([bb407fa1ec](https://github.com/facebook/react-native/commit/bb407fa1ec0bd0367373961fdc0e840150840068) by Jonathan Lee)
- Fix onTextLayout metrics on Android when using alignText ([1c240ae898](https://github.com/facebook/react-native/commit/1c240ae898e26534b8d9a09a334dec02e96faa05) by [@mmmulani](https://github.com/mmmulani))
- Cleaning up imports in ViewGroupManager ([082a869dae](https://github.com/facebook/react-native/commit/082a869daef3cf602a088d0418c185279052b8c3) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific fixes

- Fix issue when inserting text at 0 when maxLength is set ([17415938c7](https://github.com/facebook/react-native/commit/17415938c7180a95811db949122b8ad24a442866) by [@ejanzer](https://github.com/ejanzer))

### Known issues

There are a few issues that don't have a finalized solution (as it happens for 0.x projects). In particular:

- when using Xcode 10 and `react-native init`, your build may fail due to third-party build steps ([#20774](https://github.com/facebook/react-native/issues/20774)). There is a [commit](https://github.com/facebook/react-native/commit/b44c5ae92eb08125d466cf151cb804dabfbbc690) we are planning to cherry pick in a future release that should help - in the meantime, you should be able to run these commands from the project folder to fix the issue (you should need to do it only once per project):

  ```bash
  cd node_modules/react-native
  scripts/ios-install-third-party.sh
  cd third-party/glog-0.3.5/
  ../../scripts/ios-configure-glog.sh
  ```

- React `16.6.0` works for the most part, aside from the Context API (check [this issue](https://github.com/facebook/react-native/issues/21975)) - and if you are eager to test the new React Hooks you will have to be patient, as they are not production ready and `16.7.alpha` is **not** yet [supported](https://github.com/facebook/react-native/issues/21967) by React Native.

## v0.57.3

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.0-alpha.8af6728"`. Also, please check the _Known issues_ section below, especially if you are using Xcode 10.

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/46) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

- Expose enableBabelRuntime config param externally ([89a358f347](https://github.com/facebook/react-native/commit/89a358f34786198c8a9a2d379588efd57b6a0eec) by [@rafeca](https://github.com/rafeca))

#### Android specific additions

- Add test for InterpolatorType ([b7526b2095](https://github.com/facebook/react-native/commit/b7526b2095e4a5c8641e8264786d1622d6390029) by [@ejanzer](https://github.com/ejanzer))

### Changes: existing functionality that is now different

- React sync for revisions ade5e69...d836010 ([fa6035bda6](https://github.com/facebook/react-native/commit/7142e9b1c5f95e82ceb04798b166318385004147) by [@yungsters](https://github.com/yungsters))
- React: Bump Canary Version ([8258b6a280](https://github.com/facebook/react-native/commit/8258b6a2801121bebb25272bfcc5d3da1fb5ae39) by [@yungsters](https://github.com/yungsters))
- FBJS: Upgrade to ^1.0.0 ([ee034596fe](https://github.com/facebook/react-native/commit/ee034596fecfb47ff9e6e1fc30cefb0e970e7d80) by [@yungsters](https://github.com/yungsters))
- Bump metro@0.48.1 ([bf47589b8b](https://github.com/facebook/react-native/commit/bf47589b8be145750e954d09684370463a616779) by [@rafeca](https://github.com/rafeca))
- Update to Detox 9 ([15c05988e9](https://github.com/facebook/react-native/commit/15c05988e980118151bdf41ed82ebb8c8e30a0f3) by [@kelset](https://github.com/kelset))
- Add Deprecation Warning to ListView ([e90f5fa263](https://github.com/facebook/react-native/commit/e90f5fa2630f8a89e15fa57c70ada83e75a20642) by [@TheSavior](https://github.com/TheSavior))
- Deprecate legacyImplementation of FlatList ([3aa8f09b44](https://github.com/facebook/react-native/commit/3aa8f09b4437eab8b91429b7325f8a6173ffa49a) by [@TheSavior](https://github.com/TheSavior))

#### Android specific changes

- bump Android NDK to r17c ([436cf154bb](https://github.com/facebook/react-native/commit/436cf154bb9cf4fc0bcafd7115d33544ce36b759) by [@dulmandakh](https://github.com/dulmandakh))
- Resolve protocol http, https when not in lowercase ([d00bdb9bb8](https://github.com/facebook/react-native/commit/d00bdb9bb8b9b11bce900689c7e28cebd2eb0807) by [@hyunjongL](https://github.com/hyunjongL))
- Normalize scheme for URL on Android ([4b6f02ea75](https://github.com/facebook/react-native/commit/4b6f02ea758a9ab5853a29ebfc054eaa98e6dc53) by [@radeno](https://github.com/radeno))

#### iOS specific changes

- Bump up the buffer size and show a warning if the trace might be truncated ([1fc8a46570](https://github.com/facebook/react-native/commit/1fc8a46570561a32657ffccb0f5a12c6f4d6a3dd) by [@alexeylang](https://github.com/alexeylang))

### Fixed: bugs that have been resolved

- Fix deprecation warning message in Switch ([997f382adc](https://github.com/facebook/react-native/commit/997f382adcc7f82fccd97ac671d13e86aef7171e) by [@radko93](https://github.com/radko93))

#### Android specific fixes

- Fix default accessibility delegate ([fa6035bda6](https://github.com/facebook/react-native/commit/fa6035bda6c606868977179534cb941f26fbdb92) by [@ayc1](https://github.com/ayc1))
- Fix accessibility role/label ([fa6035bda6](https://github.com/facebook/react-native/commit/fa6035bda6c606868977179534cb941f26fbdb92) by [@ayc1](https://github.com/ayc1))
- When converting arguments JS->Java, handle integers correctly ([bb9b9a8b9d](https://github.com/facebook/react-native/commit/bb9b9a8b9d5868c7ab5034117b785943496f6405) by [@mhorowitz](https://github.com/mhorowitz))
- Fix CameraRoll.getPhotos() crash on Android if device has a problematic video asset ([4768bea0cf](https://github.com/facebook/react-native/commit/4768bea0cf288cf9c8097fc498b896610728c645) by [@naxel](https://github.com/naxel))
- Android ScrollView fix for snapToInterval not snapping to end ([6eeff75849](https://github.com/facebook/react-native/commit/6eeff75849c9b8bf91592c1b7906b4dab8fba518) by [@olegbl](https://github.com/olegbl))
- Fix for InterpolatorType crash ([01a1004808](https://github.com/facebook/react-native/commit/01a1004808928e29a6d6c698b3b18312fed17a02) by [@ejanzer](https://github.com/ejanzer))
- Update bad method ([1592a8d424](https://github.com/facebook/react-native/commit/1592a8d42411d1f91c8ceb738c0533c1cee73f71) by [@grabbou](https://github.com/grabbou))

#### iOS specific fixes

- Dealloc first time RCTNetInfo reachability callback ([e7e63fd409](https://github.com/facebook/react-native/commit/e7e63fd4092a81beec482fc48d05f1a048801037) by [@mmmulani](https://github.com/mmmulani))
- iOS: fix the baseline issue when displaying a mixture of different-language characters ([c1561ab441](https://github.com/facebook/react-native/commit/c1561ab4411854bef96b5d268d38002a013d6d3e) by [@BingBingL](https://github.com/BingBingL))
- Fix artifacting on RN-drawn borders with asymmetric radii ([9e6522374b](https://github.com/facebook/react-native/commit/9e6522374bc605bb1a92ff02842878ace35e9f3d) by [@jamesreggio](https://github.com/jamesreggio))
- check isAvailable key on simulator object ([1031872784](https://github.com/facebook/react-native/commit/1031872784e9373082797e5bf5c815816af2105b) by [@antonychan](https://github.com/antonychan))
- ios-simulator: change default iphone version ([6d09df5b72](https://github.com/facebook/react-native/commit/6d09df5b726ac951417b87a49bc345ebc9142951) by Vitor Capretz)

### Known issues

There are a few issues that don't have a finalized solution. In particular, when using Xcode 10 and `react-native init`, your build may fail due to third-party build steps ([#20774](https://github.com/facebook/react-native/issues/20774)). There is an open pull request which we are testing and hope to land soon ([#21458](https://github.com/facebook/react-native/pull/21458)). In the meantime, you can find a workaround here: [https://github.com/facebook/react-native/issues/20774](https://github.com/facebook/react-native/issues/20774).

## v0.57.2

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/45) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

#### Android specific additions

- Android subpixel text ([65e4e674fc](https://github.com/facebook/react-native/commit/65e4e674fca7127fd7800ae011cab449561f475b) by [@kevinresol](https://github.com/kevinresol))

### Changes: existing functionality that is now different

- ReactScrollView should account for `overflow: scroll` ([201f2f189f](https://github.com/facebook/react-native/commit/201f2f189f2c41092397e5457eda83b0764ee4cd) by [@mcolotto](https://github.com/mcolotto))
- bump metro 0.47.0 ([4750f52b34](https://github.com/facebook/react-native/commit/4750f52b34f524cae8ca08fcacec063c0725e4de) by [@rafeca](https://github.com/rafeca))
- Use babel runtime instead of relying on global babelHelpers and regenerator ([36033bd0ed](https://github.com/facebook/react-native/commit/36033bd0edecd20fe2ae5edd56408bcc134378e7) by [@janicduplessis](https://github.com/janicduplessis))
- React: Upgrade to react-devtools@^3.4.0 ([25119f95c8](https://github.com/facebook/react-native/commit/25119f95c81039761dd505c216c1e499003c6294) by [@yungsters](https://github.com/yungsters))
- Change new Date() to Date.now() to save on date allocations ([bbb2d9a5b3](https://github.com/facebook/react-native/commit/bbb2d9a5b358bc0c150fe6ff74c45594c987e949) by [@dulinriley](https://github.com/dulinriley))
- Make config object read-only ([2c1057062e](https://github.com/facebook/react-native/commit/2c1057062e81f8b43d3f942a35371fb3db841bed) by [@rafeca](https://github.com/rafeca))
- Cleanup the transformer flow types ([28dedfb6d6](https://github.com/facebook/react-native/commit/28dedfb6d61e64a50d78aa06ee4f744665a54c2a) by [@rafeca](https://github.com/rafeca))
- bump metro 0.47.1 ([12ab08a5aa](https://github.com/facebook/react-native/commit/12ab08a5aab3e14c9b2fb35454b16708b8ce093d) by [@rafeca](https://github.com/rafeca))

#### Android specific changes

- Android ScrollView support for `overflow: visible` ([4af4da9089](https://github.com/facebook/react-native/commit/4af4da9089e20aa84bc5660bfb37763556442a4e) by [@olegbl](https://github.com/olegbl))
- Expose a getter for overflow setting in ReactViewGroup ([02ad56f541](https://github.com/facebook/react-native/commit/02ad56f5419675572d684c3cc8a28644f29afffa) by [@kmagiera](https://github.com/kmagiera))
- Add workaround for Android Gradle Plugin 3.2 change to asset dir ([ff084a4e80](https://github.com/facebook/react-native/commit/ff084a4e8071adb4ff6198b32aa8a7e8e29cca1c) by [@edilaic](https://github.com/edilaic))

### Fixed: bugs that have been resolved

- Fix HEAD request failing with `Invalid response for blob` ([7e9c3f77cc](https://github.com/facebook/react-native/commit/7e9c3f77cce881dbb47af266993da5a2b6e98b5b) by [@anthonyhumphreys](https://github.com/anthonyhumphreys))
- Check if child view != null before dropping ([af181fb192](https://github.com/facebook/react-native/commit/af181fb192c83e1dd0575c24e38d8814bbf187d6) by [@chrusart](https://github.com/chrusart))

#### Android specific fixes

- Fix event handlers for DPad arrows on Android TV ([4d71b1525d](https://github.com/facebook/react-native/commit/4d71b1525d357a61a1740d6de5c1b97b6527f986) by [@krzysztofciombor](https://github.com/krzysztofciombor))
- Rounded corner rendering fixed on Android N ([748cf82c97](https://github.com/facebook/react-native/commit/748cf82c974d6cf5d5df64b6e6013211c870530c) by [@dryganets](https://github.com/dryganets))
- Android: fix cookies lost on Android 5.0 and above ([ea53727e16](https://github.com/facebook/react-native/commit/ea53727e16223d412fcbba49df79cc68b39f5d93) by chenwenyu)
- allow zero offset when shadow radius is nonzero ([97f0e43710](https://github.com/facebook/react-native/commit/97f0e43710a990c30e14d66bf67c7d612377d3f2) by Timothy Kukulski)
- Android ScrollView fix for pagingEnabled ([e0170a9445](https://github.com/facebook/react-native/commit/e0170a944501bb487e899b92363bf5aa64b29299) by [@olegbl](https://github.com/olegbl))

### Removed: features that have been removed; these are breaking

- Remove global babelHelpers and regenerator ([458d56c0a1](https://github.com/facebook/react-native/commit/458d56c0a1ac73c088660830a8bf2db65de7d9a2) by [@janicduplessis](https://github.com/janicduplessis))
- Remove overflow hidden killswitch ([59aada873e](https://github.com/facebook/react-native/commit/59aada873e13bf0b1f5e3a10cfe9a5a45c28f9fb) by [@ayc1](https://github.com/ayc1))
- Remove absolute path parameter from transformers ([2e0d5c87e9](https://github.com/facebook/react-native/commit/2e0d5c87e93bb970ef1c8864ca44b47b36d6ae2e) by [@rafeca](https://github.com/rafeca))

## v0.57.1

We are trying, for 0.57, to approach it as a version with a longer "support", while waiting for some features to land that will allow for [0.58 to be cut](https://github.com/react-native-community/react-native-releases/issues/41).

Thanks to everyone that contributed to the [discussion](https://github.com/react-native-community/react-native-releases/issues/34) for cherry-picking the commits that landed in this release, and the developers who submitted those commits!

### Added: new features

- Expose AllowFileAccess property in WebView ([0c576ef84a](https://github.com/facebook/react-native/commit/0c576ef84a1c7f79b228f205cc687ab1b945bda1) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific additions

- Expose scrollEnabled as iOS prop for TextInput ([b9c28c236b](https://github.com/facebook/react-native/commit/b9c28c236bc971a5fbc51a3bda09c3980d547b96) by Chun Chen)

### Changes: existing functionality that is now different

- Give RNPM the ability to look for plugins in `@Scoped` modules ([4b106be477](https://github.com/facebook/react-native/commit/4b106be47765dd391f7a4cc6cf0e705ae977b90a) by [empyrical](https://github.com/empyrical))
- Upgrade babel-eslint to 9.0.0 ([44dc283bcd](https://github.com/facebook/react-native/commit/44dc283bcd0a75826d9be86cdc727e32d5697ef2) by [@rafeca](https://github.com/rafeca))
- bump metro 0.45.6 ([7bac0565e8](https://github.com/facebook/react-native/commit/7bac0565e82981d4a6e2b500d376ba9fa8aba721) by [@rafeca](https://github.com/rafeca))

#### iOS specific changes

- Making RCTIsIPhoneX() return true for the R and Max models ([5e7c3ca005](https://github.com/facebook/react-native/commit/5e7c3ca0057f6084d692e30ae4db863fb20968ff) by [@shergin](https://github.com/shergin))
- Way to register RCT_MODULE in Plugin2.0 instead of +load ([5c160e5ded](https://github.com/facebook/react-native/commit/5c160e5dedae713c686d88d4b9d4308b596e68a7) by Jeff Thomas)
- Update RCTLinkingManager.h to explicitly state the 'nullability' of parameters ([2271d1f912](https://github.com/facebook/react-native/commit/2271d1f912435eba7da2414ea4665ba8e56c7ad7) by Warren Knox)

### Fixed: bugs that have been resolved

- Pass the maxWorkers config param correctly to Metro ([7a69f1aa27](https://github.com/facebook/react-native/commit/7a69f1aa272a9b71755033a80f6f4aa5e9dcbaf6) by [@rafeca](https://github.com/rafeca))
- Fix ignored --projectRoot/watchFolders arguments (([9fca769e76](https://github.com/facebook/react-native/commit/9fca769e7666df696299b422c140d6509e726ec6) by [@oblador](https://github.com/oblador))
- Debug only code were leaking into release builds on iOS. (([d1ff0b0cc5](https://github.com/facebook/react-native/commit/d1ff0b0cc51c31cae89689b2ad2f4b35f29531d8) by [@dryganets](https://github.com/dryganets))

#### iOS specific fixes

- Fix RCTNetInfo first time connection status ([e7e63fd409](https://github.com/facebook/react-native/commit/e7e63fd4092a81beec482fc48d05f1a048801037) by [@karanjthakkar](https://github.com/karanjthakkar))

### Removed: features that have been removed; these are breaking

#### iOS specific removals

- Removing development team from Xcode project ([8103c431c8](https://github.com/facebook/react-native/commit/8103c431c897c02d47cfad1e71bb2e6ddaabbdc0) by [@hramos](https://github.com/hramos))

## v0.57.0

Welcome to the 0.57 release of React Native! This release addresses a number of issues and has some exciting improvements. We again skipped a monthly release, focused on quality by extending the release candidate phase, and let some upstream packages reach stable for inclusion.

This release includes [599 commits by 73 different contributors](https://github.com/facebook/react-native/compare/0.56-stable...0.57-stable)! In response to feedback, we've prepared a changelog that contains only user-impacting changes. Please share your input and let us know how we can make this even more useful, and as always [let us know](https://github.com/react-native-community/react-native-releases/issues/34) if you have any feedback on this process.

### Highlights

#### New features

- Accessibility APIs now support accessibility hints, inverted colors, and easier usage of defining the element's role and states; read more at [@ziqichen6's excellent blog post](https://reactnative.dev/blog/2018/08/13/react-native-accessibility-updates)
- On iOS, `WKWebView` can now be used within the `WebView` component; read more at [@rsnara's awesome blog post](https://reactnative.dev/blog/2018/08/27/wkwebview)
- Better support for out-of-tree platforms. For details, please refer to [the discussion](https://github.com/react-native-community/discussions-and-proposals/issues/21) that the community used to get this up and running (there will be a new page in the docs dedicated to it too) - huge props to @empyrical for working on this!

#### Tooling updates

- Android tooling has been updated to match newer configuration requirements (SDK 27, gradle 4.4, and support library 27); building with Android plugin 3.2 doesn't work due to the gradle scripts, so **please** stay on Android Studio 3.1 for now
- Support Babel 7 stable landed! Be sure to read [here](https://blogs.msdn.microsoft.com/typescript/2018/08/27/typescript-and-babel-7/) about using TypeScript and check out the [Babel 7 migration guide](https://babeljs.io/docs/en/next/v7-migration) for help migrating.
- Metro has been upgraded (with Babel 7 and better transformer support), and in the next major release we plan on having two new features (ram bundles and inline requires) optional for you all to use - you can read how it will happen [here](https://github.com/react-native-community/discussions-and-proposals/blob/master/core-meetings/2018-09-metro-meeting.md); moreover, if you have a custom packager config, we recommend you read also the "updating to this version" section.
- Flow, React, and related packages have also been updated; this includes [working support](https://github.com/facebook/react-native/commit/5491c3f942430982ce9cb6140ed1733879ed3d1d) for the [React Profiler](https://reactjs.org/blog/2018/09/10/introducing-the-react-profiler.html).

#### The Slimmening is happening

As mentioned a few times in the past, the core team is reviewing the repository to trim it to the base React Native features in order to make the whole ecosystem more maintainable (by using a _divide-et-impera_ approach, the community will move faster and enable pull requests to be reviewed and merged quicker). This change requires extracting some components into their own separate repos and removing old, unused code ([details here](https://github.com/react-native-community/discussions-and-proposals/issues/6)).

0.57 is **not** directly affected by any changes, but we want you to know that:

- `WebView` will be moved to its own repo at [react-native-community/react-native-webview](https://github.com/react-native-community/react-native-webview). There is already a base implementation there. Help us out by giving that a try, and expect that `WebView` will be deprecated soon
- `NavigatorIOS` will be **fully** removed from the main codebase starting 0.58.0 (via [this commit](https://github.com/facebook/react-native/commit/0df92afc1caf96100013935d50bdde359b688658)); it is now deprecated

### Updating to this version

1. Upgrade the version of React Native in the `package.json` from `0.56.0` to `0.57.0`, and the React version to `16.5`
2. Change the babel-preset dependency from `"babel-preset-react-native": "^5",` to `"metro-react-native-babel-preset": "^0.45.0",`, then change the `.babelrc` configuration to:

   ```JSON
     {
       "presets": ["module:metro-react-native-babel-preset"]
     }
   ```

3. Ensure that you have all the babel dependencies to version `^7.0.0` (you may also need to add `"babel-core": "7.0.0-bridge.0"` as a yarn resolution to ensure retro-compatibility). The Babel team has released a tool, [babel-upgrade](https://github.com/babel/babel-upgrade), that should help you in this migration.
4. Upgrading android gradle version to 4.4
   1. In your project's `android/gradle/wrapper/gradle-wrapper.properties` file, change the `distributionUrl` to `https\://services.gradle.org/distributions/gradle-4.4-all.zip`
   2. In `android/build.gradle` file add `google()` right above `jcenter()` in both `buildscript` and `allprojects` repositories. Then change Android build tools to version 3.1.4 `classpath 'com.android.tools.build:gradle:3.1.4'`
   3. In `android/app/build.gradle` file update all your `compile` statements to be `implementation`, e.g. `implementation 'com.facebook.fresco:animated-gif:1.10.0'`
   4. Do note that when running your app from within Android Studio, you may encounter `Missing Byte Code` errors. This is due to [a known issue](https://issuetracker.google.com/issues/72811718) with version 3.1.x of the android tools plugin. You'll need to disable Instant Run to get past this error.
5. If you have a custom packager configuration via `rn-cli.config.js`, you probably need to update it to work with the updated Metro configuration structure (for full detail refer to Metro's [documentation](https://facebook.github.io/metro/docs/en/configuration)); here are some commonly encountered changes to `rn-cli.config.js`:

   ```diff
   -const blacklist = require('metro/src/blacklist')
   +const blacklist = require('metro-config/src/defaults/blacklist')

   // ...

   module.exports = {
   +  watchFolders: alternateRoots,
   +  resolver: {
   +    blacklistRE: blacklist
   +  },
   +  transformer: {
   +    babelTransformerPath: require.resolve('./scripts/transformer.js'),
   +  },
   -  getProjectRoots() {
   -    return [
   -      path.resolve(__dirname),
   -    ].concat(alternateRoots)
   -  },
   -  getBlacklistRE() {
   -    return blacklist;
   -  },
   -  transformModulePath: require.resolve('./scripts/transformer.js'),
   }
   ```

6. Run `yarn` to ensure that all the new dependencies have been installed

### Added: new features

- Add .nvmrc and ensure node version required is compatible with ESLint 5 ([30b9d81087](https://github.com/facebook/react-native/commit/30b9d81087cb86f5fb272d00bfee63a0632009f5) by [@slorber](https://github.com/slorber))
- Major improvements to accessibility features ([48b3d1322b](https://github.com/facebook/react-native/commit/48b3d1322b884f62eb5aeb36136bcd76c502e42d), [b5b704dc19](https://github.com/facebook/react-native/commit/b5b704dc19b80a1909d66adcd617220a98c7aace), [c36e8b3307](https://github.com/facebook/react-native/commit/c36e8b3307295690cddf74e3a41ca0ac11ac4c6b), [40f6998b67](https://github.com/facebook/react-native/commit/40f6998b6766e8aa3c038a1416e5c62cbafca109), [c1d0ccde0f](https://github.com/facebook/react-native/commit/c1d0ccde0f6f8615fce077ef7ee0867a14ca0fb7), [5eaa2d29c0](https://github.com/facebook/react-native/commit/5eaa2d29c0c4c633a40f7241408737c754edea84), [10b603fdd3](https://github.com/facebook/react-native/commit/10b603fdd34919f72304720c25d1420668a6213a), [d9eeae91a0](https://github.com/facebook/react-native/commit/d9eeae91a08123c3a458704869acd6f637fc4c53), [3cfa7ae698](https://github.com/facebook/react-native/commit/3cfa7ae69847cc3b687930346016b248f2427864), [5acb7211bb](https://github.com/facebook/react-native/commit/5acb7211bb211e0ef48334630ddccbb3f0ffa2da), [5741f77156](https://github.com/facebook/react-native/commit/5741f771562962110e105114a2c65def4baa805b), [d0b86ecb4f](https://github.com/facebook/react-native/commit/d0b86ecb4f33d6b10a99062f050a4d659db4ddfc), [e739143809](https://github.com/facebook/react-native/commit/e7391438093cd5dd5033204cdce62e66509e66e1), [c27b495a89](https://github.com/facebook/react-native/commit/c27b495a89e71ff13959eb4c34605a527514fa1e), [5aa040dfb7](https://github.com/facebook/react-native/commit/5aa040dfb780c09a6efa5d3072232dea775d432f), [03036f79f7](https://github.com/facebook/react-native/commit/03036f79f7b062ae11015b33cca3dd7e4e67dda6), [3bedc78a35](https://github.com/facebook/react-native/commit/3bedc78a35b9efc259299744f4134ac0e880d1ea), [ca01290d8e](https://github.com/facebook/react-native/commit/ca01290d8e8fe73494f317ed9f81d339e65fdea0), [121e2e5ca6](https://github.com/facebook/react-native/commit/121e2e5ca6cdb17051c6d8072072f7f480ac2015), [1bc52267f5](https://github.com/facebook/react-native/commit/1bc52267f504eb02c8744c380fa2de878b0ab79f), [48b3d1322b](https://github.com/facebook/react-native/commit/48b3d1322b884f62eb5aeb36136bcd76c502e42d), [ef3d8b23c3](https://github.com/facebook/react-native/commit/ef3d8b23c35246d4e088d532c41723e06b688f1b), [ef3d8b23c3](https://github.com/facebook/react-native/commit/ef3d8b23c35246d4e088d532c41723e06b688f1b), [50e400128e](https://github.com/facebook/react-native/commit/50e400128eba554af5de4ca267430524e3eff107), and [f39d0923c7](https://github.com/facebook/react-native/commit/f39d0923c78686118a5d268c0e659d2608d28df0) by [@ziqichen6](https://github.com/ziqichen6))
- Add `YogaNodeProperties` implementation based on `ByteBuffer` ([0c97e75dfe](https://github.com/facebook/react-native/commit/0c97e75dfeec831abb6cb39889309d8299cdce9f) and [23657ccf5b](https://github.com/facebook/react-native/commit/23657ccf5bcab6c511903660b3c617c3b8248f20) by [@davidaurelio](https://github.com/davidaurelio))
- Add `FlatList` and `SectionList` to Animated exports ([daa7c78055](https://github.com/facebook/react-native/commit/daa7c78055857cd2d9ea650de0c4b0f72d3f2acf) by [@yunyu](https://github.com/yunyu))
- Adding new styling props to `FlatList`/`VirtualizedList` for `ListHeaderComponent` and `ListFooterComponent` ([a2675ced4e](https://github.com/facebook/react-native/commit/a2675ced4efe0df7745bf38908efa41d4d7a9841))
- Added more info to Module Registry systraces ([c7fdd2701f](https://github.com/facebook/react-native/commit/c7fdd2701f7edc1a771a04c890da4d742dca6ffb) by [@axe-fb](https://github.com/axe-fb))
- Added support for out-of-tree platform plugins via a new `haste` field in `package.json`; read more in the [docs entry](https://reactnative.dev/docs/out-of-tree-platforms) ([03476a225e](https://github.com/facebook/react-native/commit/03476a225e012a0285650780430d64fc79674f0f) by [@empyrical](https://github.com/empyrical))
- Added `snapToOffsets` to `ScrollView` and made a number of fixes to `snapToInterval` as well ([fd744dd56c](https://github.com/facebook/react-native/commit/fd744dd56ca183933a67e8398e1d20da14a31aab) by [@olegbl](https://github.com/olegbl))

#### Android specific additions

- Allow registering custom packager command handlers ([b3ef1c3a56](https://github.com/facebook/react-native/commit/b3ef1c3a5645793ef42d25bb16ef023a743a1f9f) by [@fkgozali](https://github.com/fkgozali))
- Implement `AccessibilityInfo.setAccessibilityFocus` for Android ([be715ec705](https://github.com/facebook/react-native/commit/be715ec7053a77fa6c9087990a493d17c1155de2) by [@draperunner](https://github.com/draperunner))
- Add Support for `overflow` style property ([b81c8b51fc](https://github.com/facebook/react-native/commit/b81c8b51fc6fe3c2dece72e3fe500e175613c5d4) and [bbdc12eda7](https://github.com/facebook/react-native/commit/bbdc12eda7dec135799b7f4c41fe678180970dd2)by [@yungsters](https://github.com/yungsters))

#### iOS specific additions

- `WebView` can now use `WKWebView` internally if you pass `useWebKit={true}` ([7062e5bdb5](https://github.com/facebook/react-native/commit/7062e5bdb5582bb21d1ef890965f08cc20d292b7), [1442c265da](https://github.com/facebook/react-native/commit/1442c265da36601114ce184cd5bc322f45dc1b44), [3703927e7e](https://github.com/facebook/react-native/commit/3703927e7e12ffc8922644ea251cd6f7a384570c), [7a6dd9807c](https://github.com/facebook/react-native/commit/7a6dd9807cda45c2d60641864f2d6c8d401e8ae3), [e5f95aba9b](https://github.com/facebook/react-native/commit/e5f95aba9b23376de498456282ad17113ef44cd9), [1741fe9571](https://github.com/facebook/react-native/commit/1741fe95710556f30dc2442aaaae23e31dad4cc0), [90e85a4adc](https://github.com/facebook/react-native/commit/90e85a4adc749666f81034119f281ac54840e7df), [0022354525](https://github.com/facebook/react-native/commit/0022354525eae0a368704da65c9d0f85f33ba5fb), [03b57d9db6](https://github.com/facebook/react-native/commit/03b57d9db6509fa3e715f23c8270caf6ca091acd), [1584108805](https://github.com/facebook/react-native/commit/1584108805ca6c8eff7a77e15c8553028665b53f), [a997c0ac16](https://github.com/facebook/react-native/commit/a997c0ac16d8863333d057269a8b5e28994b84eb), [4ca949b46e](https://github.com/facebook/react-native/commit/4ca949b46ec8fd72b5305daa06fac3ef58a8fa5f), [721763020a](https://github.com/facebook/react-native/commit/721763020a4a7b4b3cad1a9c074ec2e51a8d840b), [1af17f1648](https://github.com/facebook/react-native/commit/1af17f164828b6d6fa0450af46baf945745363e7), [215fa14efc](https://github.com/facebook/react-native/commit/215fa14efc2a817c7e038075163491c8d21526fd), [bacfd92976](https://github.com/facebook/react-native/commit/bacfd9297657569006bab2b1f024ad1f289b1b27), [95801f1eda](https://github.com/facebook/react-native/commit/95801f1eda2d723d9b87760d88fa9f1a1bb33ab1), [b18fddadfe](https://github.com/facebook/react-native/commit/b18fddadfeae5512690a0a059a4fa80c864f43a3), [28b058c341](https://github.com/facebook/react-native/commit/28b058c341690bd35e1d59885762ec29614a3d45), and [78fcf7c559](https://github.com/facebook/react-native/commit/78fcf7c5598ce7f5d0d62110eb34fe5a4b962e71) by [@rsnara](https://github.com/rsnara))
- Add `accessibilityHint` for iOS ([253b29dbd8](https://github.com/facebook/react-native/commit/253b29dbd8ddb11824866e423c00a4a68bb856f3) by [@draperunner](https://github.com/draperunner))

### Changes: existing functionality that is now different

- _[BREAKING]_ In the CLI, `unbundle` is now `ram-bundle` ([ebf5aeab28](https://github.com/facebook/react-native/commit/ebf5aeab280f2ebc439ec39d25c48fdf1980cf73) by [@jeanlauliac](https://github.com/jeanlauliac))
- Bump minimum Node version to 8.3 (#20236) ([e64e13fce3](https://github.com/facebook/react-native/commit/e64e13fce394332ce609f0def35fa573f30138e9) by [@hramos](https://github.com/hramos))
- Updated React ([70913a4623](https://github.com/facebook/react-native/commit/70913a4623c53db8a0db578eec30cad8671f8319), [b7bb25fe4c](https://github.com/facebook/react-native/commit/b7bb25fe4c1bfbedb5b8c75725721cf901dc54b0), and [672528ffde](https://github.com/facebook/react-native/commit/672528ffde3b467ccdfd6b1ce0352f150b20c922) by [@acdlite](https://github.com/acdlite), [@hramos](https://github.com/hramos), and [@yungsters](https://github.com/yungsters))
- Upgrade Flow to v0.76.0 ([eac34e3021](https://github.com/facebook/react-native/commit/eac34e30215d88b5fe9056f9678275b894032636) by [@gabelevi](https://github.com/gabelevi))
- Upgrade jest to 23.4.1 ([51cf9eb3e8](https://github.com/facebook/react-native/commit/51cf9eb3e823a13304570b352b81734f069c18c3) by [@rafeca](https://github.com/rafeca))
- Upgrade babel-eslint to v9.0.0-beta.2 with better support for Flow ([abf1188de2](https://github.com/facebook/react-native/commit/abf1188de225e4b7d36ecbad316af92ca29c85c2) by [@rubennorte](https://github.com/rubennorte))
- Upgrade ESLint to 5.1.0 ([0f2f0cad41](https://github.com/facebook/react-native/commit/0f2f0cad41f632d1dbb0c676d5edea5db62eb01c) by [@rubennorte](https://github.com/rubennorte))
- Upgrade Babel to v7.0.0 ([b9d1c832b0](https://github.com/facebook/react-native/commit/b9d1c832b0bb7161bcec48d655e878af609b8350), [724c7498b6](https://github.com/facebook/react-native/commit/724c7498b6f10f6fd03eb217160508001fb1c5b3) by Peter van der Zee, and [bf8e1b4ffa](https://github.com/facebook/react-native/commit/bf8e1b4ffab4958587efdf3ce97e4ebdd887a20c) by [@rubennorte](https://github.com/rubennorte) and [@rafeca](https://github.com/rafeca))
- Metro is now at v0.45.0 ([169d6839bb](https://github.com/facebook/react-native/commit/169d6839bb32d0149036ab1641d13318c0eb6f9d), [bda84a32d0](https://github.com/facebook/react-native/commit/bda84a32d08d6de3849d6afac4cbbf309837b676), [877212e18c](https://github.com/facebook/react-native/commit/877212e18c86905feda9faa1b2508c0c39396227), [169812f9ce](https://github.com/facebook/react-native/commit/169812f9ce60317dd7320384007879be16278678), [cfeb60c19b](https://github.com/facebook/react-native/commit/cfeb60c19bd23e683f1809f6535439c81e8ed166) by [@CompuIves](https://github.com/CompuIves) and [@rafeca](https://github.com/rafeca))
- Hide pre-bundled notification when not on dev mode ([edf71005b5](https://github.com/facebook/react-native/commit/edf71005b5a4d7cfb09eae14f5765d30b9c5704e) by [@yancouto](https://github.com/yancouto))
- Refined `StyleSheet.compose` Flow Type ([50a481d23a](https://github.com/facebook/react-native/commit/50a481d23ae72a434849d2c85007e411b0c2bb1f) by [@yungsters](https://github.com/yungsters))
- Catch JS bundle load failure and prevent calls to JS after that ([201ba8c69d](https://github.com/facebook/react-native/commit/201ba8c69d2defc284a04acadcd13df001028ada) by [@fkgozali](https://github.com/fkgozali))
- Use new Metro configuration in react-native cli ([a32620dc3b](https://github.com/facebook/react-native/commit/a32620dc3b7a0ebd53feeaf7794051705d80f49e) and [aaf797ad67](https://github.com/facebook/react-native/commit/aaf797ad67b965f64450b199c554c65ad8dad351) by [@CompuIves](https://github.com/CompuIves))
- Whitelist `react-native-dom` in haste/cli config defaults ([c4bcca6685](https://github.com/facebook/react-native/commit/c4bcca66853cd231486de61f11cbcec42427b7b2) by [@vincentriemer](https://github.com/vincentriemer))
- In the CLI, don't override `metro.config.js` settings ([c5297c75cb](https://github.com/facebook/react-native/commit/c5297c75cb6da58a241c8f91b0d2fefbc5835a46) by [@rozele](https://github.com/rozele))

#### Breaking Changes

- Public methods of Image (`blur`, `focus`, `measure`, `measureInWindow`, `measureLayout`, `setNativeProps`) are no longer bound to the image component instance. Therefore, it is unsafe to pass these methods by reference (i.e: as callbacks) to functions. So, things like `setTimeout(this._imgRef.focus, 1000)` will no longer work. Please instead do: `setTimout(() => this._imgRef.focus(), 1000)`.

#### Android specific changes

- `Image` source without a uri now returns null ([28c7ccf785](https://github.com/facebook/react-native/commit/28c7ccf785132458fce32c234ce777a6fe475c93) by [@himabindugadupudi](https://github.com/himabindugadupudi))
- `targetSdkVersion` is 26 ([bfb68c09ee](https://github.com/facebook/react-native/commit/bfb68c09ee88c6e1d91d3b54c01746f9a98c7c6c) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade NDK to r17b ([6117a6c720](https://github.com/facebook/react-native/commit/6117a6c7205c969f93d39ba02e0583881572d5fa) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade NDK toolchain to 4.9 ([ccdd450b12](https://github.com/facebook/react-native/commit/ccdd450b1284b73bee80a9709c864816cbfc1108) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade Android Support Library to version 27.1.1 and set compileSdkVersion to 27; buildToolsVersion comes along for the ride, too ([874cca1ac2](https://github.com/facebook/react-native/commit/874cca1ac258ec224bade999722d7a34c307def0) and [044b399e65](https://github.com/facebook/react-native/commit/044b399e6590d84065a9b186750f77bc9d851aac) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade Android gradle plugin to 3.1.4, Gradle wrapper to 4.4 ([6e356895e7](https://github.com/facebook/react-native/commit/6e356895e79fb92640295a14483af1a430732247) and [33d20da41b](https://github.com/facebook/react-native/commit/33d20da41b814a2fb9ba02cbab8b61a819cad95b) by [@gengjiawen](https://github.com/gengjiawen) and [@dulmandakh](https://github.com/dulmandakh))
- Upgrade to soloader 0.5.1 ([b6f2aad9c0](https://github.com/facebook/react-native/commit/b6f2aad9c0119d11e52978ff3fa9c6f269f04a14) by [@gengjiawen](https://github.com/gengjiawen))
- Upgrade mockito to 2.19.1 ([3ea803a814](https://github.com/facebook/react-native/commit/3ea803a814f43edb3ec256dd85d778c652ca99d1) by [@dulmandakh](https://github.com/dulmandakh))
- Upgrade glog to 0.3.5 ([b5fca80605](https://github.com/facebook/react-native/commit/b5fca806059e628edb504cb1bacf62e89ee6f102) by [@dulmandakh](https://github.com/dulmandakh))

### Fixed: bugs that have been resolved

- Fixed builds on Windows machines ([3ac86c366c](https://github.com/facebook/react-native/commit/3ac86c366c91f8d62f0128057019b94a783b4249) by [@rafeca](https://github.com/rafeca))
- Fixed building tvOS ([1f1ddd0261](https://github.com/facebook/react-native/commit/1f1ddd0261762bdeff3e747250400b208b18839b))
- Fixed `TextInputState`'s `currentlyFocusedField()` ([b4b594cec1](https://github.com/facebook/react-native/commit/b4b594cec1d91c38faac11a90a787ae692e35296) by [@janicduplessis](https://github.com/janicduplessis))
- `<VirtualizedList>` fix for jumpy content when `initialScrollIndex` specified ([e0c73633cf](https://github.com/facebook/react-native/commit/e0c73633cfc0a62df9d39991b0df65fa5875609a) by [@rbrosboel](https://github.com/rbrosboel))
- Fix local-cli assetRegistryPath and middlewares ([f05943de0a](https://github.com/facebook/react-native/commit/f05943de0abfc16da41163c6b91a04ecc8de8e67) by [@janicduplessis](https://github.com/janicduplessis))
- Fix issue with when all are `flexGrow` and `flexShrink` set to 0 except for one ([90a408ea6f](https://github.com/facebook/react-native/commit/90a408ea6ff7833e33b4058f490073e04460d00b) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix react-native CLI's debugger UI path and metro host/port arg usage ([5067540487](https://github.com/facebook/react-native/commit/50675404873c1ffac0deedc51fe745168051148b) by [@Kureev](https://github.com/Kureev))
- Hotfix to include `react-native-windows` in hasteImpl accepted paths ([54942746d4](https://github.com/facebook/react-native/commit/54942746d4037e1153e14fcfc95e4edc772d296a) by [@rubennorte](https://github.com/rubennorte))
- Fix some classes of incorrect Flow errors for `Animated` ([db2159d0b3](https://github.com/facebook/react-native/commit/db2159d0b3fd57556383eff68d32d32246dd9081) by [@yunyu](https://github.com/yunyu))
- Fixed a typo in DockerTests.md ([c1831d50cf](https://github.com/facebook/react-native/commit/c1831d50cfd35b7a7393e50bc71d8389b36021ce) by [@kant](https://github.com/kant))
- Fix invalid use of destructuring in jest preprocessor ([9d5bd50737](https://github.com/facebook/react-native/commit/9d5bd507372c7b63e59a94383c3e3091d96409de) by [@umairda](https://github.com/umairda))
- Fixed a CLI crash when using old versions of node ([e61176d650](https://github.com/facebook/react-native/commit/e61176d650e2b5fe51dd6cd4c429ff47a1a9b1dc) by [@keksipurkki](https://github.com/keksipurkki))

#### Android specific fixes

- Fix issue with AsyncStorage not behaving properly on Android 7+ ([1b09bd7fba](https://github.com/facebook/react-native/commit/1b09bd7fba92431d63d2cecb83565491e91db396))
- Fixed extreme `<TextInput>` slowness ([5017b86b52](https://github.com/facebook/react-native/commit/5017b86b525e3ef6023f0f8a88e6fd1cf98024e0) by [@gnprice](https://github.com/gnprice))
- Fixed `<TextInput>` placeholder not being completely visible ([84022321c4](https://github.com/facebook/react-native/commit/84022321c437e597660ecd8a773e51bdf8855f4e) and [86f24ccf71](https://github.com/facebook/react-native/commit/86f24ccf71f4c41904838c8c7e13268c300fd745) by [@jainkuniya](https://github.com/jainkuniya))
- Fix Horizontal `<ScrollView>`'s scroll position during layout changes with RTL content ([de573277bf](https://github.com/facebook/react-native/commit/de573277bf64703aefdeb52db2c2524b2c241bab))
- Fix Horizontal `<ScrollView>` overflow issue ([d5465a9a0a](https://github.com/facebook/react-native/commit/d5465a9a0a840f7e759bb8fb6679b01017eb3d05))
- Fixing crash on SDK 15 on ReactTextInputLocalData ([1bb2bead8b](https://github.com/facebook/react-native/commit/1bb2bead8bef850037c8b72209cd72a442572821))
- Fix Drawing Rect for ReactScrollView ([6a16bec882](https://github.com/facebook/react-native/commit/6a16bec882cba809bdf9027367b76f6543b6617d) by [@yungsters](https://github.com/yungsters))
- Fixed NoSuchKeyException Thrown From ReadableNativeMap bysafely unwrapping ReadableMap by defaulting to 0 if key not present ([1a6666a116](https://github.com/facebook/react-native/commit/1a6666a116fd8b9e8637956de2b41a1c315dd470) by [@Bhavik-P](https://github.com/Bhavik-P))
- Fixed runAndroid to enable the use of a package on port <> 8081 for Windows ([3cd0737fe2](https://github.com/facebook/react-native/commit/3cd0737fe2dce9df29822854bfbfaf2f22346c69) by [@ihenshaw](https://github.com/ihenshaw))
- Don't crash on upload retry when trying to fetch on a varying quality network ([79fe925f1d](https://github.com/facebook/react-native/commit/79fe925f1daa053d5a5d92a228e5c7beff565ab4) by [@dryganets](https://github.com/dryganets))

#### iOS specific fixes

- Fix `TextInput.clear()` and `TextInput.setNativeProps({text: ''})` to work ([2307ea60d0](https://github.com/facebook/react-native/commit/2307ea60d03edd234511bfe32474c453f30c1693) by [@magicien](https://github.com/magicien))
- Correct fishhook import in RCTReconnectingWebSocket ([75a0273de2](https://github.com/facebook/react-native/commit/75a0273de21948b0b959263100f09111f738ec35))
- Change in RCTImagePickerManager to handle crashes if height/width is nil ([82af7c989b](https://github.com/facebook/react-native/commit/82af7c989be42a516f438f162d21f699be297e79) by [@abhi06276](https://github.com/abhi06276))
- Fix controlled `<TextInput>` on iOS when inputting in Chinese/Japanese ([892212bad2](https://github.com/facebook/react-native/commit/892212bad2daadd373f4be241e4cd9889b0a1005) by [@mmmulani](https://github.com/mmmulani))
- Fixed `<ScrollView>` bug encountered with brownfield apps ([fab5fffbb3](https://github.com/facebook/react-native/commit/fab5fffbb3eb8668c9202dec5e770330d49880b0) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fixed missing selection indicator lines on `<PickerIOS>` ([e592d6f8c7](https://github.com/facebook/react-native/commit/e592d6f8c7b0409ab6f0a2dbf6ebe3cea28c3e79) by [@VSchlattinger](https://github.com/VSchlattinger))
- Fix crash in RCTImagePicker on iOS ([934c50fbe0](https://github.com/facebook/react-native/commit/934c50fbe07e49391ba27c3469f99bec65e48d39) by [@mmmulani](https://github.com/mmmulani))
- Fix `undefined_arch` error received when building in Xcode 10 beta ([e131fffb37](https://github.com/facebook/react-native/commit/e131fffb37a545363daf11735a0243165b57f63f) by [@futuun](https://github.com/futuun))
- Add support for connecting to the Packager when running the iOS app on device when using custom Debug configuration ([079bf3f206](https://github.com/facebook/react-native/commit/079bf3f2067cb268b60e75cd9e1bc51a9c85359c))
- Fixed RCTAnimation import for integrating with cocoapods ([eef8d47a37](https://github.com/facebook/react-native/commit/eef8d47a37211bf7d4978db75df1fedd9cacbde8) by [@LukeDurrant](https://github.com/LukeDurrant))

### Removed: features that have been removed; these are breaking

- _[BREAKING]_ Removed `ScrollView.propTypes`; use flow or typescript for verifying correct prop usage instead ([5b6ff01764](https://github.com/facebook/react-native/commit/5b6ff01764502c88848867c7e04cab969da384a2) by [@sahrens](https://github.com/sahrens))

#### Android specific removals

- `ReactInstancePackage` is now deprecated; use `@link ReactPackage` or `@link LazyReactPackage` ([b938cd524a](https://github.com/facebook/react-native/commit/b938cd524a20c239a5d67e4a1150cd19e00e45ba) by [@axe-fb](https://github.com/axe-fb))

## v0.56.0

Welcome to the June 2018 release of React Native!
Over 60 contributors made [821 commits](https://github.com/facebook/react-native/compare/0.55-stable...0.56-stable) since March - and we are extremely grateful to every single one of you.

As you'll see in a second, this new version has some important **breaking changes** that required a lot of extra efforts to bring to a stable 0.56. This was the main reason behind skipping April and May from the monthly release cycle, but looking forward we are planning on going back to do a rollout every month.

### Highlights

#### React Native now uses **Babel 7**

When upgrading to 0.56, make sure to bump your `babel-preset-react-native` `package.json` dependency to `5.0.2` or newer (but still as _fixed_ value).

React Native library authors will need to update their libraries to make use of the updated Babel preset as Babel 7 is **not** backwards compatible.

If you have issues upgrading to Babel 7, please double check the [related documentation](https://new.babeljs.io/docs/en/next/v7-migration.html#versioning-dependencies-blog-2017-12-27-nearing-the-70-releasehtml-peer-dependencies-integrations), in particular the sections related to _Package Renames_ and _Scoped Packages_.

The [`babel-bridge`](https://github.com/babel/babel-bridge) library may be used if you need to use libraries that have not yet upgraded to Babel 7. You may also enforce the Babel 7 dependency via tools like [yarn resolutions](https://yarnpkg.com/lang/en/docs/selective-version-resolutions/). Overall, you need to ensure all the `@babel/*` deps are fixed at version `7.0.0-beta.47`.

#### **Node 8** is now the minimum required version

Trailing commas are now allowed.

#### **iOS 9** is now the minimum required version

Any device that can run iOS 8, can upgrade to iOS 9. Developers who support iOS 8 in their apps may continue doing so as this is a Xcode-level setting (`IPHONEOS_DEPLOYMENT_TARGET`).

#### **Xcode 9** is now the minimum required version

We recommend using Xcode 9.4 as that is what we use to run our tests.

#### **Android** projects are now compiled using the _Android 26 SDK_

The target API level is left unchanged in this release.

Starting August 2018, new apps submitted to the Play Store will need to target API 26 as a minimum. You can now opt your project in to use API 26 (or newer) as the target. Please let us know about any issues, as we'd like to finalize support for Android API 26 by the time `0.57.0` is released.

#### `WebView` will only load http(s) URLs by default

Geolocation is disabled by default.

#### Consistently Throw for `<Text><View /></Text>`

Removes a pitfall that people may run into when releasing an app for Android if the bulk of the testing has been performed on iOS only. Nesting a `<View>` within a `<Text>` component (e.g. `<Text><View /></Text>`) is unsupported on Android, but using this pattern on iOS has not thrown errors in the past. With this release, nesting a `<View>` inside a `<Text>` will now throw an error on iOS in order to reduce the parity gap between the platforms.

#### Flow improvements, migrating away from PropTypes

Added Flow types for several components.

We're migrating away from PropTypes and runtime checks and instead relying on **Flow**. You'll notice many improvements related to Flow in this release.

- Fix project settings warnings on newer Xcode versions, remove unnecessary console logging.
- Modernized `YellowBox`.
  Sort warnings by recency, group warnings by format string, present stack traces, show status of loading source maps, support inspecting each occurrence of a warning, and bug fixes.
- Prettier files!
- Lots of bug fixes.

#### State of React Native

Heads-up: the Facebook internal team is [currently working on a rewrite of some core architecture pieces](https://reactnative.dev/blog/2018/06/14/state-of-react-native-2018). This is a **work in progress** and we do not expect it to be ready for use in open source quite yet, but we felt the need to let you know what those commits mentioning Fabric are about.

---

### Added: new features

- Update `babelHelpers` with Babel 7 support ([fbd1beaf66](https://github.com/facebook/react-native/commit/fbd1beaf666be9c09a380784f8c0cd34ba083a6b))
- `FlatList` is now Strict Mode compliant ([a90d0e3614](https://github.com/facebook/react-native/commit/a90d0e3614c467c33cf85bcbe65be71903d5aecc))
- Enable `?.` optional chaining operator plugins ([aa6f394c42](https://github.com/facebook/react-native/commit/aa6f394c4236e5a4998c3be8ed61ec1bab950775))
- Support `flexWrap: 'wrap-reverse'` ([d69e55060f](https://github.com/facebook/react-native/commit/d69e55060fd76d91eccc45905d250a9fce4b2c49))
- Add prop type `accessibilityTraits` to `Text` ([654435d1ed](https://github.com/facebook/react-native/commit/654435d1ed9e584e65fff601e1fa50591e042664))
- Add devDependencies support for templates ([c4ab03a18e](https://github.com/facebook/react-native/commit/c4ab03a18e75e6ed55444b5d86f3ceee435b9a78))
- Add support for springDamping in `SpringInterpolator` ([1dde989919](https://github.com/facebook/react-native/commit/1dde989919d2c272ca7fcaa5c4b2d9ee02c490a0))

#### Android specific additions

- Add support for build.gradle with CRLF for use with `react-native link` ([843cfc3b20](https://github.com/facebook/react-native/commit/843cfc3b202433aad9a236b1b623da7c45e1ac15))
- add decimal pad to android ([75e49a0637](https://github.com/facebook/react-native/commit/75e49a0637eaa3bd3bb7e445648f084a42d9c8af))
- Add a way to dismiss PopupMenu elements ([353c070be9](https://github.com/facebook/react-native/commit/353c070be9e9a5528d2098db4df3f0dc02d758a9))
- Implement `Image.defaultSource` ([b0fa3228a7](https://github.com/facebook/react-native/commit/b0fa3228a77d89d6736da6fcae5dd32f74f3052c))
- Support Image resizeMode=repeat ([0459e4ffaa](https://github.com/facebook/react-native/commit/0459e4ffaadb161598ce1a5b14c08d49a9257c9c))
- Yoga: Add back deprecated `getParent` methods for non-breaking API change ([c3c5c3cbce](https://github.com/facebook/react-native/commit/c3c5c3cbce24a31f73ae6339e377ee76ca6401ad))

#### iOS specific additions

- Run tests using Xcode 9.4 and iOS 11.4 ([c55bcd6ea7](https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d))
- Add support for Homebrew-installed Node ([0964135a17](https://github.com/facebook/react-native/commit/0964135a178b459e06b44a49a4ecb0dd6c5bec9b))
- Add textTransform style support ([8621d4b797](https://github.com/facebook/react-native/commit/8621d4b79731e13a0c6e397abd93c193c6219000))
- Add docs for Swift usage to `RCTBridgeModule.h` ([ca898f4367](https://github.com/facebook/react-native/commit/ca898f4367083e0943603521a41c48dec403e6c9))

---

### Changes: existing functionality that is now different

- Upgrade React Native to Babel 7 ([f8d6b97140](https://github.com/facebook/react-native/commit/f8d6b97140cffe8d18b2558f94570c8d1b410d5c))
- New projects created using `react-native init` will use Babel 7 ([e315ec9891](https://github.com/facebook/react-native/commit/e315ec9891eb0bcb51afb0e797dbd49aa8f9ac71))
- Restrict `WebView` to only http(s) URLs: ([634e7e11e3](https://github.com/facebook/react-native/commit/634e7e11e3ad39e0b13bf20cc7722c0cfd3c3e28), [23f8f7aecb](https://github.com/facebook/react-native/commit/23f8f7aecb1f21f4f5e44fb9e4a7456ea97935c9))
- Node 8 is now the minimum required version ([c1e6f27823](https://github.com/facebook/react-native/commit/c1e6f278237e84c8ed26d3d2eb45035f250e2d40))
- Upgrade React to v16.4.1, sync React Renderer to revision ae14317 ([c749d951ad](https://github.com/facebook/react-native/commit/c749d951ada829c6f6fb76f35e68142e61054433))
- Update new project template's Flow config to fix `Cannot resolve module X` isse due to removal of `@providesModule` ([843a433e87](https://github.com/facebook/react-native/commit/843a433e87b0ccaa64ab70d07e22bffbabad8045))
- Upgrade Flow to v0.75 ([3bed272a62](https://github.com/facebook/react-native/commit/3bed272a620ac806a6142327013265ea8138641a), [bc2f12c68c](https://github.com/facebook/react-native/commit/bc2f12c68cf8cfdf8c060354e84392fd9a3645d8), [6264b6932a](https://github.com/facebook/react-native/commit/6264b6932a08e1cefd83c4536ff7839d91938730))
- Upgrade Flow definitions ([f8b4850425](https://github.com/facebook/react-native/commit/f8b4850425f115c8a23dead7ec0716b61663aed6))
- Upgrade Prettier to v1.13.6 ([29fb2a8e90](https://github.com/facebook/react-native/commit/29fb2a8e90fa3811f9485d4b89d9dbcfffea93a6), [bc2f12c68c](https://github.com/facebook/react-native/commit/bc2f12c68cf8cfdf8c060354e84392fd9a3645d8))
- Upgrade Jest to v23.2.0 ([536c937269](https://github.com/facebook/react-native/commit/536c9372692712b12317e657fc3e4263ecc70164), [bc2f12c68c](https://github.com/facebook/react-native/commit/bc2f12c68cf8cfdf8c060354e84392fd9a3645d8))
- Upgrade Metro to v0.38 ([d081f83a04](https://github.com/facebook/react-native/commit/d081f83a0487ffbc7d19f8edc7532611b359dfc6))
- Modernized `YellowBox` ([d0219a0301](https://github.com/facebook/react-native/commit/d0219a0301e59e8b0ef75dbd786318d4b4619f4c))
- Disallow requiring from invariant/warning ([521fb6d041](https://github.com/facebook/react-native/commit/521fb6d041167ec8a8d0e98ac606db1f27f0c5c8))
- Remove native prop type validation ([8dc3ba0444](https://github.com/facebook/react-native/commit/8dc3ba0444c94d9bbb66295b5af885bff9b9cd34))
- Add `$FlowFixMe` to invalid prop accesses where Flow wasn't complaining before ([f19ee28e7d](https://github.com/facebook/react-native/commit/f19ee28e7d896aaacf26c6f850230019bdef0d3d))
- Create Flow props for `Image` ([8bac869f5d](https://github.com/facebook/react-native/commit/8bac869f5d1f2ef42e707d0ec817afc6ac98b3b2))
- Flow type for `SegmentedControlIOS` ([113f009698](https://github.com/facebook/react-native/commit/113f009698dbd8f1b4c1048d77ff1eb373021083))
- Flow type for `ProgressViewIOS` ([c87701ba05](https://github.com/facebook/react-native/commit/c87701ba05a8524756e87c089eb92c8f3c81823e))
- Flow type for `PickerIOS` ([1c66cdc7e8](https://github.com/facebook/react-native/commit/1c66cdc7e8ce8190dfbef76629601497446b2b0a))
- Flow type for `Switch` ([06052a2330](https://github.com/facebook/react-native/commit/06052a2330fc9c1dd0d56c6bbe5a17703f80c6b9))
- Flow type for `Slider` ([cbe045a95f](https://github.com/facebook/react-native/commit/cbe045a95f1ca53d99ae521742a93299a53d6136))
- Flow type for `RefreshControl` ([891dfc3da4](https://github.com/facebook/react-native/commit/891dfc3da4b5825097aedf73ff04e8982c00aeff))
- Flow type for `ListView` ([4b1ecb6204](https://github.com/facebook/react-native/commit/4b1ecb62045fbb78764d1f51030f2253be705c5c))
- Flow type for `TextInput` ([c8bcda8150](https://github.com/facebook/react-native/commit/c8bcda8150278fde07331ca6958976b2b3395688))
- Flow type for `TouchableBounce` ([8454a36b0b](https://github.com/facebook/react-native/commit/8454a36b0bc54cb1e267bc264657cc693607da71))
- Flow type for `TouchableOpacity` ([44743c07ad](https://github.com/facebook/react-native/commit/44743c07ad672e39668f92a801578906ec92996a))
- Flow type for `TouchableHighlight` ([f0c18dc820](https://github.com/facebook/react-native/commit/f0c18dc820537892dcc33d5aebbf4f52cf299b95))
- Flow type for `TouchableWithoutFeedback` ([0b79d1faa2](https://github.com/facebook/react-native/commit/0b79d1faa21eb3c29aeeba08ee0fb2ed62e6cc54))
- Flow type for `ScrollView` ([b127662279](https://github.com/facebook/react-native/commit/b1276622791d5dbe4199bb075f473908c3e62b31))
- Flow type for `DatePickerIOS` ([97e572ea6d](https://github.com/facebook/react-native/commit/97e572ea6d7b1fd829ca20f5d5c8ff970d88e68b))
- Flow type for `KeyboardAvoidingView` ([188b118b60](https://github.com/facebook/react-native/commit/188b118b6075be1614c553596b85d430767f2dbc))
- Flow type for `ActivityIndicator` ([0b71d1ddb0](https://github.com/facebook/react-native/commit/0b71d1ddb03c036ed118574c105b0af505da19fc))
- Remove `$FlowFixMe` in `TouchableBounce` ([ffda017850](https://github.com/facebook/react-native/commit/ffda0178509ed92396f15db37a41d3d668ade4e6))
- Remove `$FlowFixMe` in `ScrollView` ([af6e2eb02d](https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0))
- Remove `$FlowFixMe` in `ListView` ([af6e2eb02d](https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0))
- Remove `$FlowFixMe` in `Text` ([6042592cf4](https://github.com/facebook/react-native/commit/6042592cf46787f089e76b661376705380607207))
- Remove `$FlowFixMe` in `RTLExample` ([206ef54aa4](https://github.com/facebook/react-native/commit/206ef54aa415e3e2bb0d48111104dfc372b97e0f))
- Remove `$FlowFixMe` in `AppContainer` ([a956551af7](https://github.com/facebook/react-native/commit/a956551af73cf785ee4345e92e71fd5b17c5644e))
- Remove `$FlowFixMe` in `Slider` ([1615f9d161](https://github.com/facebook/react-native/commit/1615f9d16149c7082ce0e1485aa04a6f2108f7ba))
- `StyleSheet`: Support animated values for border dimensions ([3e3b10f404](https://github.com/facebook/react-native/commit/3e3b10f4044ada7b523d363afb614720468c217f))
- Update `react-devtools-core` and `plist` to include security fixes reported by `npm audit` ([3a1d949906](https://github.com/facebook/react-native/commit/3a1d949906acb0c3b44d125d54d0c99305bbbb56))
- Update `Switch` to ES6 Class ([970caa4552](https://github.com/facebook/react-native/commit/970caa4552d4ba87c1a954391535ff42b00832e7))
- Update `Slider` to ES6 Class ([5259450c14](https://github.com/facebook/react-native/commit/5259450c143f71c65e157d6b7d3f0e1655eb7aa1))
- Update `ActivityIndicator` to ES6 Class ([edd7acbb1e](https://github.com/facebook/react-native/commit/edd7acbb1e6fe185600a19cc1cbb38feb16c85ad))
- Update `RefreshControl` to ES6 Class ([a35a238317](https://github.com/facebook/react-native/commit/a35a23831789030e17f766f72d307ae315be107d))
- Update `KeyboardAvoidingView` to ES6 Class ([c017dcb0f2](https://github.com/facebook/react-native/commit/c017dcb0f2903b49b2f21cc150226aeb7f5026ee))
- Update `DatePickerIOS` to ES6 Class ([f8c8231706](https://github.com/facebook/react-native/commit/f8c8231706492b588331354d45b833aa21434e13))
- Update `Text` to ES6 Class ([ab92c00245](https://github.com/facebook/react-native/commit/ab92c00245c0ce717819ddb0ab8b9204d4c13c34))
- Replace `context.isInAParentText` w/ `React.createContext` ([e1339bc183](https://github.com/facebook/react-native/commit/e1339bc18303ca5394cd0c9dc97cededb2261581))
- Cleanup `Text` implementation ([06c05e744d](https://github.com/facebook/react-native/commit/06c05e744d8af9582bde348210f254d76dae48b9))
- Switch `Text` to `React.forwardRef` ([e708010d18](https://github.com/facebook/react-native/commit/e708010d18f938e2d6b6424cfc9485d8e5dd2800))
- Switch `View` to `React.forwardRef` ([3e534b9aab](https://github.com/facebook/react-native/commit/3e534b9aab5156adac67762877b2457408fe8934))
- Update uses of `genMockFunction` and `genMockFn` to `fn` in tests ([390ded871c](https://github.com/facebook/react-native/commit/390ded871cb905d149e9c1f4a082e67a7ec7addb))
- Make `ViewProps` exact ([65c336f38f](https://github.com/facebook/react-native/commit/65c336f38f4afd43c8b5f81745abf38bd9b8ddbf))
- Spread `TVViewProps` into `ViewProps` instead of intersection ([bc658d3c44](https://github.com/facebook/react-native/commit/bc658d3c4405676643d952a126295dbc7fc26217))
- Allow trailing commas ([1e2de71290](https://github.com/facebook/react-native/commit/1e2de712907e5fe0d17648f0ff5c81d4384ca85b))
- Use `let`/`const` ([8f5ebe5952](https://github.com/facebook/react-native/commit/8f5ebe5952d0675b463137103a82f3fb0c26ae0d))
- Refactor `MockNativeMethods` in Jest ([5d4c542c58](https://github.com/facebook/react-native/commit/5d4c542c58d84bbe05f76bf01d9efdd9d438572c))
- Use app name from `app.json` after ejecting ([57774a4a98](https://github.com/facebook/react-native/commit/57774a4a981e2f12cfe9b029447e34f203221b18))
- Suggest `git apply --reject` for failed upgrades ([4fbd244b9a](https://github.com/facebook/react-native/commit/4fbd244b9a6b62e0efe1b4b5a7ec3de468f020f6))
- Moved `TouchHistoryMath` from React to React Native ([06085d3836](https://github.com/facebook/react-native/commit/06085d38366373f3135074dc14e2c9871ca4fe29))
- Refactor `RCTInputAccessoryView` ([c136c54ff0](https://github.com/facebook/react-native/commit/c136c54ff0211e2bf149fab600cd6e295f9d19dd))
- Don't wrap `ListEmptyComponent` in an extra view ([db061ea8c7](https://github.com/facebook/react-native/commit/db061ea8c7b78d7e9df4a450c9e7a24d9b2382b4))
- Move `Text` PropTypes to its own file ([cd8128b2ec](https://github.com/facebook/react-native/commit/cd8128b2eccf6898cdf798a1e1be1f7a5762a0d4))
- Mock `ReactNative.NativeComponent` native methods in Jest ([3e9a371ace](https://github.com/facebook/react-native/commit/3e9a371ace5f25b2eb7a0d30177251f8a0c10ed9))
- Tightening types for `View` and `VirtualizedList` ([5035af80ec](https://github.com/facebook/react-native/commit/5035af80ecddb44e2a8444780f25f336b760bf32))
- Make values optional in `ViewPropTypes` ([f1316cab6c](https://github.com/facebook/react-native/commit/f1316cab6c351852ef1da9939d4c8f0244fb8a6f))
- propTypes are optional for native components ([dbdf43b428](https://github.com/facebook/react-native/commit/dbdf43b428da19a9eba012753904bcf33339ea9a))
- Rename `Style` to `DangerouslyImpreciseStyle` ([4895c645ea](https://github.com/facebook/react-native/commit/4895c645ea17ff939811f3d5ec6218cd4e31c5fb))
- _[BREAKING]_ `requireNativeComponent`'s signature has been simplified to only take extraOptions ([820673e707](https://github.com/facebook/react-native/commit/820673e7076b5906ba50e09e40fb9a32cf500c1b), [b549e364e0](https://github.com/facebook/react-native/commit/b549e364e0025e0e1b4005f04a9de2d767006da1), [28d37781c6](https://github.com/facebook/react-native/commit/28d37781c6589574de1113bd12077f6d54053ffb), [1c90a2b47b](https://github.com/facebook/react-native/commit/1c90a2b47b420a4b6aa16a55a344cc08f0eacbe3), and [1ab7d49c2d](https://github.com/facebook/react-native/commit/1ab7d49c2df5673dd214eb8a9b7fd3defb0ff857) by [@yungsters](https://github.com/yungsters))

#### Breaking Changes

- Public methods of Text (`blur`, `focus`, `measure`, `measureInWindow`, `measureLayout`, `setNativeProps`) are no longer bound to the text component instance. It is therefore unsafe to pass these methods by reference (i.e: as callbacks) to functions. So, things like `setTimeout(this._txtRef.focus, 1000)` will no longer work. Please instead do: `setTimeout(() => this._txtRef.focus(), 1000)`.

### iOS specific changes

- _[BREAKING]_ WebViews now can only use https; do not use it for `file://` ([634e7e11e3](https://github.com/facebook/react-native/commit/634e7e11e3ad39e0b13bf20cc7722c0cfd3c3e28) by [@mmmulani](https://github.com/mmmulani))
- iOS 9 is now the minimum required version ([f50df4f5ec](https://github.com/facebook/react-native/commit/f50df4f5eca4b4324ff18a49dcf8be3694482b51))
- Update podspecs to target iOS 9 ([092103e752](https://github.com/facebook/react-native/commit/092103e7525e58e04346e0a1a16a67ca4f31c2e9))
- Xcode 9.4 is now used to run tests ([c55bcd6ea7](https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d))
- Prevent console logging on iOS 11.3+ within WebSocket ([8125be942b](https://github.com/facebook/react-native/commit/8125be942bd5fd8fe851bad04ae6b9bcb0af4727))
- Expose `RCTFont` size overrides ([6611fefef7](https://github.com/facebook/react-native/commit/6611fefef7559c4cd3d1824235d263bff210d5e2))

### Android specific changes

- Projects are now compiled using Android SDK 26 ([065c5b6590](https://github.com/facebook/react-native/commit/065c5b6590de18281a8c592a04240751c655c03c))
- Use Google Maven repo in new Android projects ([6d56a234e3](https://github.com/facebook/react-native/commit/6d56a234e3cf5984335ff2713236260fac977f5f))
- Upgrade Buck to v2018.03.26.01 ([1324e7b558](https://github.com/facebook/react-native/commit/1324e7b5580db815471172cf6dd140124bd2f11a))
- Upgrade gradle-plugin to 2.3.3, gradle to 3.5.1, gradle-download-task to 3.4.3 ([699e5eebe8](https://github.com/facebook/react-native/commit/699e5eebe807d1ced660d2d2f39b5679d26925da))
- Bump NDK APP_PLATFORM to android-16 ([b5dc45420a](https://github.com/facebook/react-native/commit/b5dc45420a0d3aa54d2d2075d7f14ff1835df78a))
- Bump glog to 0.3.5 (added libc++ support) ([b5fca80605](https://github.com/facebook/react-native/commit/b5fca806059e628edb504cb1bacf62e89ee6f102))
- `ReactFragmentActivity` deprecated as it's not necessary when targeting API level 14 and above ([77a02c0d83](https://github.com/facebook/react-native/commit/77a02c0d83dbfcd9a5397cf63e1ab2e6c94cfdde))
- Touchables now play a sound on press ([722f88ca90](https://github.com/facebook/react-native/commit/722f88ca9058c5d902c416b826a7a7ab347326b8))
- Default `underlineColorAndroid` to transparent ([a3a98eb1c7](https://github.com/facebook/react-native/commit/a3a98eb1c7fa0054a236d45421393874ce8ce558))
- Disable `WebView` geolocation by default ([23d61b35fb](https://github.com/facebook/react-native/commit/23d61b35fb6fdbfb84f77b6d99ff155a0ff868e6))
- Ensure cookies with illegal characters are not sent to okhttp ([04028bf216](https://github.com/facebook/react-native/commit/04028bf2169b01f79bd86ecd6b0d8aa5f99599f1))
- Update app icons to match recent Android releases ([94393f8652](https://github.com/facebook/react-native/commit/94393f8652c414806fc861c214ad36e9ac1b6114))
- Better error messages for `ReadableNativeMap` ([30d06b4286](https://github.com/facebook/react-native/commit/30d06b42862fc5e8704e109db652d62f86f8eabc))
- Update Fresco to v1.9.0, okhttp3 to v3.10.0 ([6b07602915](https://github.com/facebook/react-native/commit/6b07602915157f54c39adbf0f9746ac056ad2d13))
- Add tint color to inline icons ([e8e2a6e410](https://github.com/facebook/react-native/commit/e8e2a6e4102c1ba0ee3d068769e47fa61c160524))
- Fix antialiasing rounded background ([e4f88c66e3](https://github.com/facebook/react-native/commit/e4f88c66e300505d3c86329dacd84d84e8109837))
- `react-native link` will now replace '/' by '\_' when linking projects. If you previously linked scoped packages, they will get linked again. ([dbd47592a1](https://github.com/facebook/react-native/commit/dbd47592a18ed09ee6e94c79bed16d63be625af6))
- New project template now uses project-wide properties ([0a3055d98a](https://github.com/facebook/react-native/commit/0a3055d98a36e49746144e883edc7e20afec4fcb))

---

### Fixed: bugs that have been resolved

- `VirtualizedList` now accounts for `ListHeaderComponent` length when calculating offset ([604bcfa4a8](https://github.com/facebook/react-native/commit/604bcfa4a83396c402ba8beaa13f40d05d6e9f5c))
- Prevent showing a hidden status bar when opening modals ([076b1cea35](https://github.com/facebook/react-native/commit/076b1cea3563cae30e11d63cc100ceaed9082692))
- Fix crash when reloading while Perf Monitor is enabled ([4fcd9970bd](https://github.com/facebook/react-native/commit/4fcd9970bd2dfb24890bc87e9c82e16dab71ec09))
- Fixed concurrency issue in remote debugger ([578b0b2a51](https://github.com/facebook/react-native/commit/578b0b2a51fc0c2aba5d27cdd5335396d5351463))
- Fix `Modal` + `FlatList` scrolling ([45b0907f61](https://github.com/facebook/react-native/commit/45b0907f619f455825f459838615a5a7cc59a204))
- Fix bug in `RCTNetworking` where not all tasks/handlers were being cleared during invalidation ([b805172034](https://github.com/facebook/react-native/commit/b8051720344f3716e964eaf7cfdd2a91dc703602))
- Fix keyboard handling with `keyboardShouldPersistTaps: never` ([ffe6c110f7](https://github.com/facebook/react-native/commit/ffe6c110f7ce33460fe0399ccbda16a6adbe90ca))
- Fix Responder Logic in `Text` ([e2ce22b823](https://github.com/facebook/react-native/commit/e2ce22b823661a7dcf6b70a825921a2910383bd1))
- Fix `VirtualizedSectionList` lint warnings ([26a1eba1ce](https://github.com/facebook/react-native/commit/26a1eba1cef853b0dab7aad5731699c06d36b781))
- Fix `VirtualizedSectionList:ItemWithSeparators` ([488a4c7e1c](https://github.com/facebook/react-native/commit/488a4c7e1c86ac5900ff9194106511fbf5a8e3cb))
- Fix `TextInput`'s initial layout measurements ([c6b4f9f2ce](https://github.com/facebook/react-native/commit/c6b4f9f2ce59bc757d9e211f46294faa03df55c6))
- Fix `requireNativeComponent` check ([1c90a2b47b](https://github.com/facebook/react-native/commit/1c90a2b47b420a4b6aa16a55a344cc08f0eacbe3))
- Fix `TextInput` autocapitalization bug ([ff70ecf868](https://github.com/facebook/react-native/commit/ff70ecf868cf12fc66b45dc1496391d0a1e9011f))
- Add missing events to `ViewPropTypes` ([41a940392c](https://github.com/facebook/react-native/commit/41a940392cea497bc5eb627b24083d0211d1eb89))
- Add missing Jest mock in `StatusBarManager` ([4a2c560768](https://github.com/facebook/react-native/commit/4a2c560768abb2d8407900fdb2fbe4971ae00a1c))
- Add Flow declaration for Metro module ([1853e15190](https://github.com/facebook/react-native/commit/1853e1519030caaeeb7f31017d98823aa5696daf))
- Fix type for `ReactNative.NativeComponent` (1/2) ([de11ba2a5e](https://github.com/facebook/react-native/commit/de11ba2a5ee90929dbc67d914de59bdd2ebc29ca))
- Fix type for `ReactNative.NativeComponent` (2/2) ([752863629d](https://github.com/facebook/react-native/commit/752863629d63bca6d96a101bfeccc4e7ad3e953e))
- Move Image PropTypes to new file ([67656991b3](https://github.com/facebook/react-native/commit/67656991b32075e8b4a99c6409b0a131206c6941))
- Tests: Fix JUnit report location when running Jest ([85fc98d437](https://github.com/facebook/react-native/commit/85fc98d437c08cdec883a73161e120478737ba72))
- Tests: Fix ReactImagePropertyTest SoLoader failures (#19607) ([a52d84d7e1](https://github.com/facebook/react-native/commit/a52d84d7e1cdb287f2877c4d85f2e9866c248d43))
- Tests: Fix jest snapshot testing on Windows ([216bce3163](https://github.com/facebook/react-native/commit/216bce31632480ce70cc03b1b2a57ec12440afd7))
- Fixes "Cannot resolve module" errors in new `react-native init` projects ([843a433e87](https://github.com/facebook/react-native/commit/843a433e87b0ccaa64ab70d07e22bffbabad8045))
- Haste hotfix for `react-native-windows` ([54942746d4](https://github.com/facebook/react-native/commit/54942746d4037e1153e14fcfc95e4edc772d296a))

#### iOS specific fixes

- Fix undefined_arch error in Xcode 10 beta - e131fff
- Make `react-native run-ios` command play nicely with multiple Xcode versions ([a130239257](https://github.com/facebook/react-native/commit/a1302392577789faab79dad0cb39b147464e0e42))
- Correct fishhook import ([75a0273de2](https://github.com/facebook/react-native/commit/75a0273de21948b0b959263100f09111f738ec35))
- Fix bug where a Backspace event was emitted when entering characters after clearing a text in `TextInput` by an empty string ([1ffb2b63be](https://github.com/facebook/react-native/commit/1ffb2b63be4c4af331fece0b4286e5c92b1e575d))
- Expose `InputAccessoryView` so it can be imported ([80fc415cf1](https://github.com/facebook/react-native/commit/80fc415cf179ffe26d020bc8d6e4451352da94fd))
- Fix `InputAccessoryView` safe area conformance ([490f22ae72](https://github.com/facebook/react-native/commit/490f22ae72ba43fa9364ce0f6c238744c07ac830))
- Fix use of C++ syntax in header file ([bfcfe7961d](https://github.com/facebook/react-native/commit/bfcfe7961db0970e2575eafe2f3c9c668bd8940d))
- Fix install step when running `run-ios` ([0934c1778f](https://github.com/facebook/react-native/commit/0934c1778f0e3c0b691e1a3ca2df1d486eb905dd))
- Fix `run-ios` not turning on Simulator ([9736ddc061](https://github.com/facebook/react-native/commit/9736ddc061e9c4291df8a3185c7f9d6f73e435c7))
- Use correct library reference for Fishhook. This fixes the build for the new Xcode build system, on both Xcode 9 and Xcode 10 ([a8b74576da](https://github.com/facebook/react-native/commit/a8b74576da6f1a42fde4e39f97e88c8f45a3a51d))
- Add missing `onChange` event definition to `DatePickerIOS` ([3b53091869](https://github.com/facebook/react-native/commit/3b53091869b673ea33a4af34242e2227ca944768))
- Fix crash during Archive phase on Xcode 9.3 ([344c205070](https://github.com/facebook/react-native/commit/344c205070d5ad670c97984dd86ec9ac13c73f81))
- `RNTesterPods`: Add missing folly include ([128c9343c4](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: folly::Optional's `has_value()` to `hasValue()` until folly is upgraded ([128c9343c4](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: Fix import for `RCTTestAttributes.h` ([128c9343c4](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- `RNTesterPods`: Fix `conversions.h` to use namespaced includes ([128c9343c4](https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a))
- Fix or mark enum conversions surfaced by `-Wenum-conversion` ([b8f30db0ae](https://github.com/facebook/react-native/commit/b8f30db0ae21d5f96547702abbf50aefa93b1094))
- Fix CocoaPods integration without DevSupport subspec ([c09d509c2b](https://github.com/facebook/react-native/commit/c09d509c2b8a5a02701829e1f0ace8081ce64277))
- Update Yoga to handle being in a Xcode framework project ([cf036dbc7a](https://github.com/facebook/react-native/commit/cf036dbc7af16a8453c115372694dc51e8086fcf))
- Fix Blob memory leak ([122b3791ed](https://github.com/facebook/react-native/commit/122b3791ede095345f44666691aa9ce5aa7f725a))
- Avoid double reload event when reloading JS ([7b9b1559a7](https://github.com/facebook/react-native/commit/7b9b1559a7f6719c3c9ad8e894fcdd99ed109afe))
- Suppress spurious warning about RCTCxxModule ([569061dd83](https://github.com/facebook/react-native/commit/569061dd8384a86cd27719b8b068360d8379f4c3))

#### Android specific fixes

- Fix extreme `TextInput` slowness on Android ([5017b86b52](https://github.com/facebook/react-native/commit/5017b86b525e3ef6023f0f8a88e6fd1cf98024e0))
- Correct draw path dimensions while doing even border, fixes blurred borders ([c5ca26a0e5](https://github.com/facebook/react-native/commit/c5ca26a0e5c0660196300ee34d6007c63879611f))
- Don't pass additional arguments to `requireNativeComponent` in `.android.js` files ([a51e8b19cc](https://github.com/facebook/react-native/commit/a51e8b19cc4dc36dee42ac95278b883c06b2e40f))
- Prevent `RefreshControl` from getting stuck when a parent is scrolled horizontally ([33ffa79a51](https://github.com/facebook/react-native/commit/33ffa79a51d4db9ba69148861f2da304646175cd))
- Prevent crash due to unsupported ellipsize mode ([85e33aaf90](https://github.com/facebook/react-native/commit/85e33aaf908996e99220bff4a2bdbbdf7c0d12b0))
- Fix okhttp3 response handling in `DevServerHelper` ([56d48bd9ec](https://github.com/facebook/react-native/commit/56d48bd9ecd2d0f08625259121312531064a09f2))
- Fix `ReactInstanceManager` unmountApplication to support `ReactRootView` recycling ([4a9b2a7302](https://github.com/facebook/react-native/commit/4a9b2a73021fb547febe1fa193c3effb7ff8da4e))
- Fix `NullPointerException` when emitting event using `UIManagerModule` ([291c01f4ff](https://github.com/facebook/react-native/commit/291c01f4ffe614760852e36b05d78b42cb4271df))
- Fix link to Android build guide ([57e7556b8d](https://github.com/facebook/react-native/commit/57e7556b8db61e5fcc3ccea56c1b163b82a091a6))
- Fix Android open source test failures ([3e0ebc7663](https://github.com/facebook/react-native/commit/3e0ebc76632238f21c60caa92c7a2b5ee8102b71))
- Fix view indices with LayoutAnimation ([05b75b9ebf](https://github.com/facebook/react-native/commit/05b75b9ebfa3ce6d67b2a3aee446ff0cd515311b))
- Fix originalNode memory leak ([8102e35271](https://github.com/facebook/react-native/commit/8102e35271ab68e0525a9c60d86a855bbeef9c1a))
- Fix `ScrollView` with a `TextInput` ([2f1421dec7](https://github.com/facebook/react-native/commit/2f1421dec7cd3a35779caceac108e872033c7d72))
- Disable onKeyPRess logic when handler not defined ([41975f75d9](https://github.com/facebook/react-native/commit/41975f75d96ef4b606b4618461bf24d5db063b77))
- fix permission requests on pre-M android ([4e1abdd74d](https://github.com/facebook/react-native/commit/4e1abdd74dc4127a86d62e7750d01d39bb781c08))

---

### Removed: features that have been removed; these are breaking

- Deprecate `focusTextInput` and `blurTextInput` ([ce3b7b8204](https://github.com/facebook/react-native/commit/ce3b7b8204dad0fd62a76a0ce66472eca4b25bc8))
- _[BREAKING]_ `ImageResizeMode` on `Image` is no longer exposed; check your usage of `resizeMode`; the same resize modes exist, but pass them as strings instead ([870775ee73](https://github.com/facebook/react-native/commit/870775ee738e9405c6545500f9a637df9b513a02) by [@TheSavior](https://github.com/TheSavior))

#### Android specific removals

- Remove native extensions ([7c5845a5a2](https://github.com/facebook/react-native/commit/7c5845a5a26592598c9380df078766a680a23f06))
- Remove Fresco ProGuard rules ([07df36557c](https://github.com/facebook/react-native/commit/07df36557c8cbbaee5e870460162aa725a606ff4))

#### iOS specific removals

- Disallow nesting of `<View>` within `<Text>` (e.g. `<Text><View /></Text>`) ([6a1b41643a](https://github.com/facebook/react-native/commit/6a1b41643a5f5035c61a96263220d11d3462e8f2)
- Removed deprecated `UIActionSheetDelegate` methods ([5863b564f8](https://github.com/facebook/react-native/commit/5863b564f84b9fe97b256f8cde0f7f2e1db9b641))

---

### Known issues

During the RC testing of this version, a few issues that have been opened don't have yet a finalized solution ( [19827](https://github.com/facebook/react-native/issues/19827), [19763](https://github.com/facebook/react-native/issues/19763), [19859](https://github.com/facebook/react-native/issues/19859), [19955](https://github.com/facebook/react-native/issues/19955) ). We are aware of them and we hope that by releasing 0.56.0 the surface of developers interacting to find solutions to them will allow for faster resolution and an even better 0.56.1 release. So please check the already opened issues before submitting new ones.

If you are using Windows to develop React Native apps, we suggest you keep an eye on [this issue in particular](https://github.com/facebook/react-native/issues/19953) since there have been many reports of issues related to Win 10 and RN 0.56.

## v0.55.0

Welcome to the March 2018 release of React Native ! Over 81 contributors made 247 commits since February. Thanks for another exciting release.

Here are a few highlights:

- React Native is now using the MIT license
- Android TV device support

[![RNAndroidTVDemo](http://img.youtube.com/vi/EzIQErHhY20/0.jpg)](http://www.youtube.com/watch?v=EzIQErHhY20)

- Animated tracking with native driver - check out the [silky smooth framerate](https://t.co/dE1KST1i3g)
- Lots of Flow improvements
- Bugfixes

### Added: new features

- Added support for animated tracking to native driver. Now you can use `useNativeDriver` flag with animations that track other `Animated.Values` ([b48f7e5605](https://github.com/facebook/react-native/commit/b48f7e560545d53db7c906ced51a91c4cce6ee94) by [@kmagiera](https://github.com/kmagiera))
- There's a new UTFSequence module in the library for common Unicode sequences (Emoji!) ([54870e0c6c](https://github.com/facebook/react-native/commit/54870e0c6ca8611fed775e5ba12a0d6d9b1cdbd7) and [4761d5a83e](https://github.com/facebook/react-native/commit/4761d5a83e707e0ed651f02a9e02fc5d66b1869a) by [@sahrens](https://github.com/sahrens))
- Added `contextMenuHidden` property for **TextInput** ([2dd2529b3a](https://github.com/facebook/react-native/commit/2dd2529b3ab3ace39136a6e24c09f80ae421a17e) by [@amhinson](https://github.com/amhinson))
- Add `testOnly_pressed` to **TouchableHighlight** for snapshot tests ([3756d41de1](https://github.com/facebook/react-native/commit/3756d41de1feb167482f01b26f9a5f2563ef8bff) by [@sahrens](https://github.com/sahrens))

#### Android specific additions

- Added support for Android TV devices ([b7bb2e5745](https://github.com/facebook/react-native/commit/b7bb2e5745f2bdbfeeccef8d97d469730942e01c) by [@krzysztofciombor](https://github.com/krzysztofciombor))
- Implemented style `letterSpacing` for **Text** and **TextInput** ([5898817fc1](https://github.com/facebook/react-native/commit/5898817fc1a66bd317d65ce96520159df2f96045) by [@motiz88](https://github.com/motiz88))
- Bundle download progress is now shown [d06e143420](https://github.com/facebook/react-native/commit/d06e143420462344ea6fc21c0446db972f747404) by [@janicduplessis](https://github.com/janicduplessis))
- **AndroidInfoModule** now also returns Android ID ([216c8ec04b](https://github.com/facebook/react-native/commit/216c8ec04b22704f722ecaac4718157af4434a0c) by [@L33tcodex0r](https://github.com/L33tcodex0r))

#### iOS specific additions

- Introducing **InputAccessoryView**, "a component which enables customization of the keyboard input accessory view" ([38197c8230](https://github.com/facebook/react-native/commit/38197c8230657d567170cdaf8ff4bbb4aee732b8), [84ef7bc372](https://github.com/facebook/react-native/commit/84ef7bc372ad870127b3e1fb8c13399fe09ecd4d), and [6d9fe455dc](https://github.com/facebook/react-native/commit/6d9fe455dc815cdce86c00f81c71c9ca0c724964) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- `base-line` metric exposure for **Text** and **TextInput** ([51b3529f6c](https://github.com/facebook/react-native/commit/51b3529f6c2ca354800c0cf6ecb8eb3115eaa36e), [0dbe18375e](https://github.com/facebook/react-native/commit/0dbe18375ebb712be8bebd3b6592170f90f8b7bc), and [7630a614e4](https://github.com/facebook/react-native/commit/7630a614e4bd56c1a3ac728e1dfafd114340f2b7) by [@shergin](https://github.com/shergin))
- **DatePickerIOS** now has `initialDate` prop ([446ce49e9b](https://github.com/facebook/react-native/commit/446ce49e9b097d2a5e95b0f17aa23756733c27ec))
- Expose version via `RCTVersion.h`'s `RCTGetReactNativeVersion()` ([30469ed001](https://github.com/facebook/react-native/commit/30469ed00170a74743d2ba5aadce61aae742715c) by [@LeoNatan](https://github.com/LeoNatan))
- Allow running multiple simulators simultaneously with `react-native run-ios --simulator ...` ([2ad34075f1](https://github.com/facebook/react-native/commit/2ad34075f1d048bebb08ef30799ac0d081073150) by [@koenpunt](https://github.com/koenpunt))
- Introduced **RCTSurfaceHostingProxyRootView** for migration to **RCTSurfaceHostingView** ([34b8876ac6](https://github.com/facebook/react-native/commit/34b8876ac6510398e03a03c94f4ffb9aaa7519d3) by [@fkgozali](https://github.com/fkgozali))
- New UIManager API allowing intercept/delay mounting process ([402ae2f01f](https://github.com/facebook/react-native/commit/402ae2f01fd91051be5b717b0578e18b863854af) and [b90c1cf6c3](https://github.com/facebook/react-native/commit/b90c1cf6c30454859579278be18ac650c66f516b) by [@shergin](https://github.com/shergin))

### Changes: existing functionality that is now different

- React Native has now adopted the MIT license ([1490ab12ef](https://github.com/facebook/react-native/commit/1490ab12ef156bf3201882eeabfcac18a1210352) and [26684cf3ad](https://github.com/facebook/react-native/commit/26684cf3adf4094eb6c405d345a75bf8c7c0bf88) by [@sophiebits](https://github.com/sophiebits))
- The HelloWorld template now exclude `*.jsbundle` files from Git ([21231084db](https://github.com/facebook/react-native/commit/21231084dbccc8abe7823d4444a7e772c08e3e72) by [@aneophyte](https://github.com/aneophyte))
- `react-native-git-upgrade` now shows files merged with conflicts in red ([e53a8f7097](https://github.com/facebook/react-native/commit/e53a8f7097965f38d87eade1407661bc63adc68e) by [@alvinthen](https://github.com/alvinthen))
- `ResolvedAssetSource` type to have all read-only members ([4d0ee37293](https://github.com/facebook/react-native/commit/4d0ee37293b5e21fc3c7a8c6edd72c9ff899df7d) by [@sahrens](https://github.com/sahrens))
- Flow types improvements ([b6c7e551a9](https://github.com/facebook/react-native/commit/b6c7e551a91c406884cbbe8ee37c0038a1b7f0be), [b98bf1e097](https://github.com/facebook/react-native/commit/b98bf1e09739860d82e37225f1635bba3bc817b3), [80c18395e2](https://github.com/facebook/react-native/commit/80c18395e24760cd12b69592a10037f071255437), [70a3ececc3](https://github.com/facebook/react-native/commit/70a3ececc368a8d0fe4b57b13ac956ad99a637c7), [f7343576fc](https://github.com/facebook/react-native/commit/f7343576fc2ca941b03145d9e97208bcbc8c345b), [a817c64043](https://github.com/facebook/react-native/commit/a817c6404338b7b15aaeac5693ae3635a0a3dde0), [3fd82d3c89](https://github.com/facebook/react-native/commit/3fd82d3c89f2d7e5103b024b54250f2ded970d88), [cd8128b2ec](https://github.com/facebook/react-native/commit/cd8128b2eccf6898cdf798a1e1be1f7a5762a0d4), [5035af80ec](https://github.com/facebook/react-native/commit/5035af80ecddb44e2a8444780f25f336b760bf32), [26734a8473](https://github.com/facebook/react-native/commit/26734a8473ac2f5715f2b7a016f0cc8a15c6f073), [321ba067a8](https://github.com/facebook/react-native/commit/321ba067a8323c80262e51c94a931199d5ff5cd7), [b6b80f6a70](https://github.com/facebook/react-native/commit/b6b80f6a70c6d790c52b58453fefc2cea6cd06fe), [f1316cab6c](https://github.com/facebook/react-native/commit/f1316cab6c351852ef1da9939d4c8f0244fb8a6f), [2520c645f8](https://github.com/facebook/react-native/commit/2520c645f863c299e8dccb844bac3dc6a9d553e0), [214da52fe7](https://github.com/facebook/react-native/commit/214da52fe76c1688d0c1a402b3e6c4d0fc19d882), [dbdf43b428](https://github.com/facebook/react-native/commit/dbdf43b428da19a9eba012753904bcf33339ea9a), [49396aa78d](https://github.com/facebook/react-native/commit/49396aa78d218625c1933fa864acd70853faa9f9), [4895c645ea](https://github.com/facebook/react-native/commit/4895c645ea17ff939811f3d5ec6218cd4e31c5fb), [a3c07c95ef](https://github.com/facebook/react-native/commit/a3c07c95effd891c2bd5f3257efe5b24d85862be), [49ffc9fada](https://github.com/facebook/react-native/commit/49ffc9fada4266c3ba9751c5e8e4c475174c7e6c), and [c129457d3a](https://github.com/facebook/react-native/commit/c129457d3a6622d7c28e8b27829ffc2b0a03c5eb) by [@TheSavior](https://github.com/TheSavior), [@yungsters](https://github.com/yungsters), and [@alex288ms](https://github.com/alex288ms))
- Better enable cross-platform support of WebSocket.js ([b9be28915c](https://github.com/facebook/react-native/commit/b9be28915cf323eb36f1d7c77821cdf994954074) by [@rozele](https://github.com/rozele))
- Better error handling in the CLI around making directories ([d2817f48a1](https://github.com/facebook/react-native/commit/d2817f48a1146b469d544ee78015251551d358c3) by [@BridgeAR](https://github.com/BridgeAR))
- Verify that the component passed to createAnimatedComponent is not functional ([10b642a7af](https://github.com/facebook/react-native/commit/10b642a7af097bd508dab7b5d4723ccb4339d35f) by [@janicduplessis](https://github.com/janicduplessis))
- Don't truncate in the middle of an emoji ([9c8c597000](https://github.com/facebook/react-native/commit/9c8c5970002d048e8b18088f7c63b39431def50b) by [@Vince0613](https://github.com/Vince0613))
- Loosen Platform check to allow better code sharing for out-of-tree platforms ([84affbd6a3](https://github.com/facebook/react-native/commit/84affbd6a371dd865a3550b1fde1ebabee921341))
- In CLI, fix issue with `isInstalled` check for Android and references to unregister ([ec884890b1](https://github.com/facebook/react-native/commit/ec884890b1f40da42e84202e082b4cef2506bbfc) by [@rozele](https://github.com/rozele))

#### iOS specific changes

- tvOS `onPress` magnification animation now works via the `tvParallaxProperties` prop object taking `pressMagnification`, `pressDuration`, and `pressDelay` ([6c353fd7e9](https://github.com/facebook/react-native/commit/6c353fd7e9fd324717951ad62754d817537d7339) by [@JulienKode](https://github.com/JulienKode))

### Fixed: bugs that have been resolved

- In **TouchableOpacity**, trigger animation on `opacity` upon change in `disabled` prop ([9366ce416f](https://github.com/facebook/react-native/commit/9366ce416fbf015e4795987d39a65199b1b335c2) by [@maxkomarychev](https://github.com/maxkomarychev))
- Fixed an issue encountered when using `react-native-vector-icons` ([a759a44358](https://github.com/facebook/react-native/commit/a759a44358711180b37cf4ad25f28af47e3de298) and [54dc11a5fb](https://github.com/facebook/react-native/commit/54dc11a5fbafaccc9c0a781f1151225909717597) by [@jeanlauliac](https://github.com/jeanlauliac) and [@t4deu](https://github.com/t4deu)))
- Add missing mock for Jest for `removeEventListener` method ([59c7b2cfac](https://github.com/facebook/react-native/commit/59c7b2cfac534a79ff2461af5fd2034b280812a3) by [@MoOx](https://github.com/MoOx))
- Fix main size calculation from the aspect ratio ([f751c3460e](https://github.com/facebook/react-native/commit/f751c3460e5dc48c1f1a2d72a56173285899de21))
- Fix crash in Subscribable due to uglify-es ([b57a78c3de](https://github.com/facebook/react-native/commit/b57a78c3def50eda11e57542be0e5233a62d173b) by [@iMagdy](https://github.com/iMagdy))
- Update `node-notifier` dependency to fix memory leak ([860fcd458a](https://github.com/facebook/react-native/commit/860fcd458a1873ebcf977be01670be5912ae7104) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix issues with pollParams and link ([ca8ce83cc3](https://github.com/facebook/react-native/commit/ca8ce83cc3c38751604afce5a3e2f0473d9cba91) by [@grabbou](https://github.com/grabbou))

#### iOS specific fixes

- DevLoadingView now supports the iPhone X screen shape ([47b36d3ff0](https://github.com/facebook/react-native/commit/47b36d3ff0dbb99fd3fc98f6e981a38084dd4d2c) by [@mrtnrst](https://github.com/mrtnrst))
- Added bounds check to prevent ScrollView from scrolling to an offset which is out of bounds of the ScrollView ([16c9e5b715](https://github.com/facebook/react-native/commit/16c9e5b71500135a631480035af6cd2de3dafdc9) by [@siddhantsoni](https://github.com/siddhantsoni))
- **NetInfo** `isConnected` works again ([dbafc29e60](https://github.com/facebook/react-native/commit/dbafc29e60aba1d5b24c2b0d321834c40e0b9bca) by [@alburdette619](https://github.com/alburdette619))
- In **AlertIOS**, fix duplicate var name declaration ([6893a26bfb](https://github.com/facebook/react-native/commit/6893a26bfb06a2d8ad9d23a572f4d9143305d905))
- Permit `react-native run-ios --device [id]` by passing port when running on device ([f8fee0a631](https://github.com/facebook/react-native/commit/f8fee0a631d77313d7cb5e65a3dd04a5a8ba3d03) by [@jozan](https://github.com/jozan))
- Fixed issue with `run-ios` where `Entry, ":CFBundleIdentifier", Does Not Exist` was being received ([5447ca6707](https://github.com/facebook/react-native/commit/5447ca67076a110e2b0df03b014f53d1df4646ab) by [@blackneck](https://github.com/blackneck))
- Fixed problem in Text measurement on iOS ([a534672e13](https://github.com/facebook/react-native/commit/a534672e132136e7bbd17c94a7f4e67149bcc67a) by [@shergin](https://github.com/shergin))
- Fix crash when reloading in tvOS ([3a3d884df2](https://github.com/facebook/react-native/commit/3a3d884df253dbc1c02ffef33e99c4a91ea8751b) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- Fixed a bug with positioning of nested views inside **Text** ([7d20de412b](https://github.com/facebook/react-native/commit/7d20de412b37a35951e615d98509573dc1a24bcb) by [@shergin](https://github.com/shergin))
- Fix blob response parsing for empty body ([f5207ba9c7](https://github.com/facebook/react-native/commit/f5207ba9c764f33ef83fa897f6014d67193be0e2) by [@janicduplessis](https://github.com/janicduplessis))
- Fix tvOS react-native init release build ([3002c4eb98](https://github.com/facebook/react-native/commit/3002c4eb981d439f0ea304556d8dbd4ffd62a80b) by [@dlowder-salesforce](https://github.com/dlowder-salesforce)
- Fix RedBox from bridge reload due is not re-registering its root view ([2e51fa5f5d](https://github.com/facebook/react-native/commit/2e51fa5f5d4f229329ae457ab1a77ba5bcea0448) by [@fkgozali](https://github.com/fkgozali))

#### Android specific fixes

- Fix: incorrect line-height calculation ([74e54cbcc4](https://github.com/facebook/react-native/commit/74e54cbcc408a8bbdd70f47cc8728d30cdc0d299) by [@strindhaug](https://github.com/strindhaug))
- Fix crashes with TextInput introduced in 0.53 ([b60a727adb](https://github.com/facebook/react-native/commit/b60a727adbcfa785e3d1b13bf069b766216e60f8) by [@joshyhargreaves](https://github.com/joshyhargreaves))
- Update ReactAndroid build script to support gradle 2.3.0 ([d8bb990abc](https://github.com/facebook/react-native/commit/d8bb990abc226e778e2f32c2de3c6661c0aa64e5))
- Allow "unexpected URL" exception to be caught on Android when using fetch ([da84eba318](https://github.com/facebook/react-native/commit/da84eba318ae69fea28f40418178bdeb35c4a99b) by [@jcurtis](https://github.com/jcurtis))
- Fix `onLayout` prop for **TextInput** ([8a073c1d8b](https://github.com/facebook/react-native/commit/8a073c1d8b89305a9a2561a7c33740919730f408) by [@rozele](https://github.com/rozele))
- Fix ViewPager when using native navigation ([a1295e1707](https://github.com/facebook/react-native/commit/a1295e1707a856b9cd5c3129320d386aa9166310) by [@ruiaraujo](https://github.com/ruiaraujo))
- Fix localization crash in **DevSettingsActivity** ([427e464bb9](https://github.com/facebook/react-native/commit/427e464bb95e4e0ecc7455e71b5d477014618200) by [@ayc1](https://github.com/ayc1))
- Fix pinch crash in touch-responsive views ([67c3ad4e6a](https://github.com/facebook/react-native/commit/67c3ad4e6a1847cbac43115b01f72cc5c8932a61) by [@tobycox](https://github.com/tobycox))
- Fix IllegalStateException thrown in looped timing native animation ([ef9d1fba23](https://github.com/facebook/react-native/commit/ef9d1fba237c08a158c8f32e823f229921e7c052) by [@kmagiera](https://github.com/kmagiera))
- Workaround android-only js module resolution issue ([c20e0f94fe](https://github.com/facebook/react-native/commit/c20e0f94feb42a71633212114b42c62494fd4ff0) by [@fkgozali](https://github.com/fkgozali))
- Fix ReadableNativeMap.toHashMap() for nested maps and arrays ([15fa2250fd](https://github.com/facebook/react-native/commit/15fa2250fdd0865ce1d0c6ac13b817e7b2c7757a) by [@esamelson](https://github.com/esamelson))
- Fix Android Sanity Buck version check ([e0573225d5](https://github.com/facebook/react-native/commit/e0573225d5fe28e5ad61690eda3060289bdbf3a4) by [@hramos](https://github.com/hramos))
- Fixes the connection to Firestore by following whatwg.org's XMLHttpRequest send() method ([d52569c4a1](https://github.com/facebook/react-native/commit/d52569c4a1b6bd19792e4bda23e3a8c3ac4ad8df) by [@samsafay](https://github.com/samsafay))
- `invertStickyHeaders` can now be set from **SectionList** or **FlatList** ([dd479a9377](https://github.com/facebook/react-native/commit/dd479a93772c3a52561fc32ee84b25ce822a30fa) by [@dannycochran](https://github.com/dannycochran))

### Removed: features that have been removed; these are breaking

- Removed various types ([b58e377961](https://github.com/facebook/react-native/commit/b58e377961ddd278bfa36df0e15953f976875de6), [ee26d9bcb0](https://github.com/facebook/react-native/commit/ee26d9bcb0719246efa51af404aa7805404675cc), [d89517d60a](https://github.com/facebook/react-native/commit/d89517d60a8a6cabc9013b603fa3f63a1face6a2), [852084ad45](https://github.com/facebook/react-native/commit/852084ad454565bb856e85f09e098f1a4a0771a6) by [@TheSavior](https://github.com/TheSavior))
- Deleted `Systrace.swizzleJSON()` ([3e141cb6c9](https://github.com/facebook/react-native/commit/3e141cb6c957143e998bf2926b8fe1aabccbce2d) by [@yungsters](https://github.com/yungsters))

#### Android specific removals

- `ReactInstanceManager#registerAdditionalPackages` has been removed; Create UIManager interface and extract common classes in uimanager/common ([6b45fb2cb1](https://github.com/facebook/react-native/commit/6b45fb2cb1ca44fa7375bc7696bf90a68a85df3c) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific removals

- Remove callFunctionSync experimental APIs ([19a4a7d3cb](https://github.com/facebook/react-native/commit/19a4a7d3cb6d00780ccbbbd7b0062896f64ab24d) by [@danzimm](https://github.com/danzimm))

## v0.54.0

Welcome to the February 2018 release of React Native! This release includes work done by the React Native team and the community in January, and there are some big changes here after the holidays. Thanks for 270 commits from 87 contributors, you all are great! Here are a few highlights from the release:

- Long awaited **Blob** changes: upload, download, fetch locally, and more
- Sticky headers now work on inverted Lists
- Update to the newest React, which deprecated some lifecycle methods and added new ones – expect Yellowbox until React Native is updated
- `Space-evenly` is now there (sorry for the confusion with 0.52's release notes)
- A lot of under-the-covers work on Yoga, iOS's **Text** and **TextInput**, and a ton of other areas
- Multiple crash fixes

The changelog is arranged by the customary added, removed, changed, and fixed plus internal; the changes are also organized by platform.

### Added

- ✨ **Blob**s now can be: made from Strings, loaded by File using a FileReader API, uploaded and downloaded via `XMLHttpRequest#fetch`, and fetched on files to a local blob consistently ([be56a3efee](https://github.com/facebook/react-native/commit/be56a3efeefefa6dca816ca5149a3dabfa5164e2) and [854c2330eb](https://github.com/facebook/react-native/commit/854c2330ebe748eb0508bb788685232b6cff0022) by [@satya164](https://github.com/satya164) and [@fkgozali](https://github.com/fkgozali))
- Dynamic node_module dependencies are now supported ([b5e19adc02](https://github.com/facebook/react-native/commit/b5e19adc02a3293cd3fdbe54cc45adc78f94d325) by [@jeanlauliac](https://github.com/jeanlauliac))
- Support sticky headers for inverted Lists with `invertStickyHeaders` ([ecaca80d42](https://github.com/facebook/react-native/commit/ecaca80d42b686e4cf91aa4bb0c8fce69eba18bb) by [@janicduplessis](https://github.com/janicduplessis))
- `space-evenly` is now supported (sorry for the confusion with 0.52 notes) ([b1cdb7d553](https://github.com/facebook/react-native/commit/b1cdb7d553146160f99319f9dbe4083b18db60e4) by [@gedeagas](https://github.com/gedeagas))
- Platform plugins can participate in RNConfig, `link`, and `unlink` – keep an eye on [react-native-window's use of it](https://github.com/Microsoft/react-native-windows/pull/1601)! ([a40bfa730e](https://github.com/facebook/react-native/commit/a40bfa730e05c68da49e6f217ae0f161dcc7ba98) by [@rozele](https://github.com/rozele))
- Add `minify` flag to react-native bundle command ([3f969cb1db](https://github.com/facebook/react-native/commit/3f969cb1db3a39dd8a4fd622abbb7e4270a84216) by [@tomduncalf](https://github.com/tomduncalf))

#### VR Specific Additions

- Added **ScrollView** support ([6fa039dab0](https://github.com/facebook/react-native/commit/6fa039dab0b9f738a3cb464aeca378c6210a5747) by [@MartinSherburn](https://github.com/MartinSherburn))

#### Android Specific Additions

- Bundle download progress is now shown like iOS ([d06e143420](https://github.com/facebook/react-native/commit/d06e143420462344ea6fc21c0446db972f747404) by [@janicduplessis](https://github.com/janicduplessis))
- Add back ability to customise OkHttp client ([22efd95be1](https://github.com/facebook/react-native/commit/22efd95be1f0b236eeaaa8a8e6d01e89771c9543) by [@cdlewis](https://github.com/cdlewis))

#### iOS specific additions

- **ScrollView** now supports smooth bi-directional content loading and takes new prop `maintainVisibleContentPosition` ([cae7179c94](https://github.com/facebook/react-native/commit/cae7179c9459f12b1cb5e1a1d998a9dc45f927dc) and [65184ec6b0](https://github.com/facebook/react-native/commit/65184ec6b0ef2d136c0db239d65e0624efac8a2d) by [@sahrens](https://github.com/sahrens))
- Allow substituting a default font handler ([a9c684a0ff](https://github.com/facebook/react-native/commit/a9c684a0ff45852087310d5218062acfdab673f7) by [@mmmulani](https://github.com/mmmulani))
- Add `accessibilityElementsHidden` prop ([31288161e1](https://github.com/facebook/react-native/commit/31288161e188723456fdb336c494f3c8a3f5b0a8) by [@aputinski](https://github.com/aputinski))
- Add EXTRA_PACKAGER_ARGS extensibility point on `scripts/react-native-xcode.sh` (PR rev [0d4ff1b7ea](https://github.com/facebook/react-native/commit/0d4ff1b7ea768cceca0405c665e322c0d6b5ba20) by [@brunolemos](https://github.com/brunolemos) with landing assists [b8c86b8dec](https://github.com/facebook/react-native/commit/b8c86b8deced01027b609959576ffcf5d2d0f520) and [0d4ff1b7ea](https://github.com/facebook/react-native/commit/0d4ff1b7ea768cceca0405c665e322c0d6b5ba20))

### Removed

- Remove internal `utf8` utility - use the **utf8** package now instead ([431670f908](https://github.com/facebook/react-native/commit/431670f90860936c24260d36fc73e0c5fbf4e02a) by [@mathiasbynens](https://github.com/mathiasbynens))

#### iOS specific removals

- Removed outdated assertion in RCTShadowView related to breaking change in Yoga ([e3ff3cf6cb](https://github.com/facebook/react-native/commit/e3ff3cf6cbc137e315eff6ac8aed43954b3668eb) by [@shergin](https://github.com/shergin))

#### Android specific removals

- Fix an issue when swapping to and from the `visible-password` or `phone-pad` keyboard types. ([164f6b6afd](https://github.com/facebook/react-native/commit/164f6b6afd7e0050d63134fcdc65ec6969ab03a0) by [@BrandonWilliamsCS](https://github.com/BrandonWilliamsCS))
- Remove redundant config in AndroidManifest.xml ([d7a9ca2893](https://github.com/facebook/react-native/commit/d7a9ca2893fb240c25d1cd1e0778f6b93b1e3ded) by [@gengjiawen](https://github.com/gengjiawen))

#### iOS specific removals

- Delete RCTBatchedBridge ([816d417189](https://github.com/facebook/react-native/commit/816d41718998868f276d83b0c21e17d11ad392a2) by [@mhorowitz](https://github.com/mhorowitz))

### Changed

- Docs clarifications ([7abffc3f8c](https://github.com/facebook/react-native/commit/7abffc3f8ce69fab5bbb4147f9b8bcb85a7d2c38) by [@IgorGanapolsky](https://github.com/IgorGanapolsky))

#### iOS Specific Changes

- ⚡️ **Text** and **TextInput** have been re-implemented from the ground up for performance, flexibility, and reduced technical debt ([2716f53220](https://github.com/facebook/react-native/commit/2716f53220f947c690d5f627286aad51313256a0), [74963eb945](https://github.com/facebook/react-native/commit/74963eb945438a6fd269b5764a6cb251c86deda8), [d7fa81f181](https://github.com/facebook/react-native/commit/d7fa81f18110f0dc0f310a5c066d9a30020ca830), [74963eb945](https://github.com/facebook/react-native/commit/74963eb945438a6fd269b5764a6cb251c86deda8), [6c4ef287ad](https://github.com/facebook/react-native/commit/6c4ef287ad95eb14475a9f512487e5d05949309a), [ebc98840e9](https://github.com/facebook/react-native/commit/ebc98840e93c336e8c9e4a93c78e6ca03591f0ec), [d7fa81f181](https://github.com/facebook/react-native/commit/d7fa81f18110f0dc0f310a5c066d9a30020ca830), [7d1ec7a3dc](https://github.com/facebook/react-native/commit/7d1ec7a3dc66654b13a8e9cb3ddf912e92506f55), [52648326e6](https://github.com/facebook/react-native/commit/52648326e6ac4470eeffc0a56d91bc487bc1eae4), [6bb8617f3a](https://github.com/facebook/react-native/commit/6bb8617f3a2f3f80f89eb00595a621aec35aca83), [5dbb3c586c](https://github.com/facebook/react-native/commit/5dbb3c586c9e8483aa7e6f1edd35ffb12bd4305d), [7e7d00aebe](https://github.com/facebook/react-native/commit/7e7d00aebefd2416f948066c65c739581c6e3f54), [46fd864348](https://github.com/facebook/react-native/commit/46fd8643485b21147c780d22ee8cf751b2dc8750), [9dfa2e7f3c](https://github.com/facebook/react-native/commit/9dfa2e7f3cfa5009f6c54382e90681d99a9c3cb8), [8a882fe6d6](https://github.com/facebook/react-native/commit/8a882fe6d6bb35776551eb8b0cd6892f41cab492), and [0f9fc4b295](https://github.com/facebook/react-native/commit/0f9fc4b2953d52fa1754e786dc5c74bfecbeaaca) by [@shergin](https://github.com/shergin) and [@hovox](https://github.com/hovox))
- **Image**'s `resizeMode="center"` is now documented and has an example present ([be7037fd8e](https://github.com/facebook/react-native/commit/be7037fd8e1c4b92646caf7a70b9d6d28ef2c30a) by [@motiz88](https://github.com/motiz88))
- Geolocation API no longer timeouts when `skipPermissionRequests: true` ([5c17db8352](https://github.com/facebook/react-native/commit/5c17db8352abfd94f094deb9b550284ec17f1fcd) by [@ngandhy](https://github.com/ngandhy))
- Rounding pixels is now done with an algorithm from Yoga rather than React Native, reducing debt and improving performance ([ceb1d1ca5b](https://github.com/facebook/react-native/commit/ceb1d1ca5bc7c04b9d9ad16dcd9583f05b0ef498) and [114c258045](https://github.com/facebook/react-native/commit/114c258045ccca3a4433de206c7983b42d14c03b) by [@shergin](https://github.com/shergin))

#### Android specific changes

- Numerous refactors around bundle handling and the `DevServerHelper` ([644123aa6f](https://github.com/facebook/react-native/commit/644123aa6fc6132125f56b485e5ab3b16f28f666), [e756251413](https://github.com/facebook/react-native/commit/e7562514130f614a9f138c0b855bfe4516150add), [6e44356c9b](https://github.com/facebook/react-native/commit/6e44356c9bb364195280aafc69aae48cdcb2ab84), [1019bda930](https://github.com/facebook/react-native/commit/1019bda930fa4c26fc0006efa023ee2c586705c6), [06d8f96a64](https://github.com/facebook/react-native/commit/06d8f96a64f00a003e34b0c1e93033893173ccc8), [f88c9d6382](https://github.com/facebook/react-native/commit/f88c9d63828e975a9792969e27accd851ead3e86), and [108f9664bf](https://github.com/facebook/react-native/commit/108f9664bffd1a4e0a7b2c2da3dc3810f1b29de2) by [@davidaurelio](https://github.com/davidaurelio))

### Fixed

- Fix JS debugger issues related to CORS ([29f8354c19](https://github.com/facebook/react-native/commit/29f8354c1946a6325e9020b9ef5ee4ccdf0fa51f) by [@njbmartin](https://github.com/njbmartin))
- Keep the `.gitignore`d files during the `react-native-git-upgrade` process ([7492860ffb](https://github.com/facebook/react-native/commit/7492860ffb3a010ff2273abf45c7414c098bdc37) by [@ncuillery](https://github.com/ncuillery))
- Fix re-render case on SwipeableRow ([a580a44b0d](https://github.com/facebook/react-native/commit/a580a44b0d51ca7f33a4394b0a22d1c7d2234190))
- Fix display of syntax error messages when HMR is enabled ([2b80cdf1bb](https://github.com/facebook/react-native/commit/2b80cdf1bba3b756915117139474440c203cbd8d) by [@ide](https://github.com/ide))
- Add fixtures to metro blacklist in order to let build succeed ([54dc11a5fb](https://github.com/facebook/react-native/commit/54dc11a5fbafaccc9c0a781f1151225909717597) by [@t4deu](https://github.com/t4deu))

#### Android specific fixes

- Don't crash when using decimal `Animated.modulo` values with `useNativeDriver: true` ([6c38972327](https://github.com/facebook/react-native/commit/6c389723274712bc52d6642cc6c1907b5523726d) by [@motiz88](https://github.com/motiz88))
- Don't crash when receiving unknown websocket IDs ([1a790f8703](https://github.com/facebook/react-native/commit/1a790f8703d44c2322000dbf40a55678ca8a436a) by [@sunweiyang](https://github.com/sunweiyang))
- Dont crash when `NativeModules.UIManager.showPopupMenu` method calls error callback ([0c18ec5b9c](https://github.com/facebook/react-native/commit/0c18ec5b9c64613dbdcd4be9f80e470e9532483d) by [@dryganets](https://github.com/dryganets))
- Maintain cursor position when **TextInput**'s `secureTextEntry` changes ([09b43e479e](https://github.com/facebook/react-native/commit/09b43e479e97dfe31910503190b5d081c78e4ea2) by [@jainkuniya](https://github.com/jainkuniya))
- Race condition fix in Dialogs module ([d5e3f081c6](https://github.com/facebook/react-native/commit/d5e3f081c6b41697533775d378969fcf554c7290) by [@dryganets](https://github.com/dryganets))
- Fix NPE in Android Switch during measure ([7b1915e74d](https://github.com/facebook/react-native/commit/7b1915e74daa82d0a94e90ff266e9271bc43f4d8) by [@4ndroidev](https://github.com/4ndroidev))
- Fix initialScrollIndex ([ef596dec49](https://github.com/facebook/react-native/commit/ef596dec49975dd4f8860ad8adcd29dd23e04c14) by [@olegbl](https://github.com/olegbl))
- Fix redbox style ([f363dfe766](https://github.com/facebook/react-native/commit/f363dfe766244c8fc10eab3d2c4acdd8fc4b576b) by [@ayc1](https://github.com/ayc1))
- Fix crash due to mishandling of UTF-8 in progressive download. ([9024f56bda](https://github.com/facebook/react-native/commit/9024f56bda4186fbade7bbd1e61f8e0252585c02) by [@dryganets](https://github.com/dryganets))
- Fix crash because ClassCastException fix: getText() returns CharSequence not Spanned ([46cc4907e3](https://github.com/facebook/react-native/commit/46cc4907e3e49f5c7b1ac0a1088866f2958f43a1) by [@dryganets](https://github.com/dryganets))
- Fix and re-enable "view flattening" optimizations ([877f1cde2e](https://github.com/facebook/react-native/commit/877f1cde2ebe8f304d6fd0855fc4a874d1d5ee27) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific fixes

- Fix Crash when **CameraRoll** is getting assets from iCloud and no filename is provided ([2ae24361c5](https://github.com/facebook/react-native/commit/2ae24361c5e0fc4aed9a321123bba8ca416a35ff) by [@pentarex](https://github.com/pentarex))
- Fix Xcode Archive task failing if project path contains whitespace ([8aa568e867](https://github.com/facebook/react-native/commit/8aa568e867bbbe7e23ded3651f23581ff2753323) by [@jevakallio](https://github.com/jevakallio))
- `react-native link` has been fixed to correctly link iOS and tvOS targets ([a63fd378a4](https://github.com/facebook/react-native/commit/a63fd378a47173cc9f750e9980f18dc12dd7ea51) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- `GLog` fix on case sensitive APFS macOS ([2fef1bafc8](https://github.com/facebook/react-native/commit/2fef1bafc8bee33432486212caf4fef5c659dd37) by [@hovox](https://github.com/hovox))
- Fixed issue where you cannot launch tvOS app on Apple TV simulator ([afd988f85a](https://github.com/facebook/react-native/commit/afd988f85a8cf0980b5844cb88c1803e41502d03))

### Internal work

- A **massive** amount of Yoga optimizations, cleanups, refactors, and test fixes ([62d01006a1](https://github.com/facebook/react-native/commit/62d01006a125517c8991fa93979aaec6ccc18823), [1475fc4856](https://github.com/facebook/react-native/commit/1475fc4856d366f8ec2027374971ed5aefcdeafa), [9daa17458a](https://github.com/facebook/react-native/commit/9daa17458a5f4ab8ead4d7c29de331f08b1a4a46), [d4517ddb9f](https://github.com/facebook/react-native/commit/d4517ddb9f2ad6d6175cbe6a8be2b819e4aa2c29), [ca91f0e3ac](https://github.com/facebook/react-native/commit/ca91f0e3ac55cb1e7a0fa2399d594a47de80a100), [34b7ec82b5](https://github.com/facebook/react-native/commit/34b7ec82b5d22efbdaa8b74b930d3c4da87414ec), [fda861a889](https://github.com/facebook/react-native/commit/fda861a88914a008b94c12078c9e579a99929643), [9f7cedbe14](https://github.com/facebook/react-native/commit/9f7cedbe14321d24b7aee1ba969b3d23d5c9d204), [ac1c8c265e](https://github.com/facebook/react-native/commit/ac1c8c265e6030c52434f99e882639c67c8c175d), [fcf2c7cf61](https://github.com/facebook/react-native/commit/fcf2c7cf61ca454f10d398d57b78b5b29ed05ae2), [2b27f1aa19](https://github.com/facebook/react-native/commit/2b27f1aa1964eba749876100be1f3ac4c085fa8f), [210ae5b95a](https://github.com/facebook/react-native/commit/210ae5b95a9c94194e95a21fdb93f88ddfdc5ce2), [82088580ab](https://github.com/facebook/react-native/commit/82088580ab17417a51386722f98b83d6cad0a6a0), [7f94bff89a](https://github.com/facebook/react-native/commit/7f94bff89a09547e76b50ae4c96ec59de73a153a), [bd7bf94af9](https://github.com/facebook/react-native/commit/bd7bf94af9ddfc9221ac3f6f62821b7e53e9b0ea), [2fe65b032e](https://github.com/facebook/react-native/commit/2fe65b032e9ec3faf3cef31290372b9face2d3f1), [9658d9f82b](https://github.com/facebook/react-native/commit/9658d9f82ba536c2f39937d61b3954e3dcc6a54e), [ee5c91c031](https://github.com/facebook/react-native/commit/ee5c91c0317b0defbb8da21f7e6d8d3ac8967381), [64d530ba07](https://github.com/facebook/react-native/commit/64d530ba0785af21555d48ddc9e7d561af37db4c), [400a29e151](https://github.com/facebook/react-native/commit/400a29e15134f5264cc55b239bd2a18a107911dd), [f75e21f1ca](https://github.com/facebook/react-native/commit/f75e21f1caf9117ae3eda31c23e286116ebf586c), [528bbacf6b](https://github.com/facebook/react-native/commit/528bbacf6b8a5a62faf4db5bfc8dfe063f0b82a3), [be8e7c6e65](https://github.com/facebook/react-native/commit/be8e7c6e65724d4915862098238506172dbe9657), [d0f7d4d107](https://github.com/facebook/react-native/commit/d0f7d4d107a90fdfbf795d842f4bd4a81290ec62), [4b4959a21c](https://github.com/facebook/react-native/commit/4b4959a21cb1e9e356eab51bfba0f16b76e8ec7f), [fdef3784f0](https://github.com/facebook/react-native/commit/fdef3784f00e8c3233a30aa2e35aaaadaa867489), [831a1bb4b1](https://github.com/facebook/react-native/commit/831a1bb4b1cc201b53685874a9dbdd6c3c1615ad), [2a22d998f8](https://github.com/facebook/react-native/commit/2a22d998f8a7f896db6c0708ba92ed9c9082ee7c), [9f57dedc17](https://github.com/facebook/react-native/commit/9f57dedc1712733ce4a490121138a97917fd3a52), and [ff2658c3de](https://github.com/facebook/react-native/commit/ff2658c3de111ef745d9582c6863ab0d6c90f960) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), [@passy](https://github.com/passy), [@ryu2](https://github.com/ryu2), and others)
- 🚧 Lifecycle methods were renamed to be consistent with [React RFC6](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md) – note that there are Yellowbox warnings right now because of this, it's work-in-progress ([6f007e8957](https://github.com/facebook/react-native/commit/6f007e8957c9bf5652b0184cba65f385050a8236) by [@bvaughn](https://github.com/bvaughn))
- Some autogenerated mystery string files were added ([c7846c4bfb](https://github.com/facebook/react-native/commit/c7846c4bfb5b944714d95382210f83c83da1ac52), [bb6fceac27](https://github.com/facebook/react-native/commit/bb6fceac274422102b347ec7aedb36efd9b701cd), [8bd00a2361](https://github.com/facebook/react-native/commit/8bd00a2361bb39f1bda58a260b7ffd278a05d79d), [faa9519021](https://github.com/facebook/react-native/commit/faa951902161201846f20a4dc55950e8f96cb0ff), [f49f7932d5](https://github.com/facebook/react-native/commit/f49f7932d581fe1f9569fb460196801528cfb591))
- Improvements to the cli's implementation ([1673c570f9](https://github.com/facebook/react-native/commit/1673c570f984d86e88a3b6b44eb78f4848eb0515), [752427b7b8](https://github.com/facebook/react-native/commit/752427b7b8221bbb8304a158b2dad12b26afd7a5), and [619a8c9f29](https://github.com/facebook/react-native/commit/619a8c9f298356db68f8cd7e5d25e5bcf48bab05) by [@arcanis](https://github.com/arcanis), [@voideanvalue](https://github.com/voideanvalue), and [@rozele](https://github.com/rozele))
- Measure touch events from nearest "root view" ([a70fdac5bd](https://github.com/facebook/react-native/commit/a70fdac5bdd4500b4ca3074dac26d414bd931fb9) by [@mmmulani](https://github.com/mmmulani))
- Allow to attach the HMR server to an external http server ([8c6b816caa](https://github.com/facebook/react-native/commit/8c6b816caa908845471460f453f9d761bfba3f3d) by [@rafeca](https://github.com/rafeca))
- Split folly/Memory out from headers-only targets in Buck ([b8e79a7e8b](https://github.com/facebook/react-native/commit/b8e79a7e8be1f3db1482a849352fda6e23c1c78a) by [@mzlee](https://github.com/mzlee))
- Code cleanup of **ReactHorizontalScrollView** in Android ([71ec85f24c](https://github.com/facebook/react-native/commit/71ec85f24c3a1007a9e1f036a140cce43b38019f) by [@mdvacca](https://github.com/mdvacca))
- Always create a debugger websocket connection when in iOS dev builds ([fa334ce464](https://github.com/facebook/react-native/commit/fa334ce464da39625f4e4fbfee259e9dcea31abc) by [@bnham](https://github.com/bnham))
- Make the React Native HMR client extend from the generic metro HMR client ([9a19867798](https://github.com/facebook/react-native/commit/9a198677989930971912b98487ec68d162636411) by [@rafeca](https://github.com/rafeca))
- Removed use of xip.io ([40a8434bde](https://github.com/facebook/react-native/commit/40a8434bde855ecae42408ec1240622152432de7) by [@jvranish](https://github.com/jvranish))
- Fix Buck dependencies ([cec2e80fc2](https://github.com/facebook/react-native/commit/cec2e80fc251e4ea45ce1e446323716a3792390d), [4f6c157250](https://github.com/facebook/react-native/commit/4f6c157250676f07619af2a935bddd8301b50caa) by [@swolchok](https://github.com/swolchok))
- Fix permissions on test script ([42c410ac84](https://github.com/facebook/react-native/commit/42c410ac84619a3d12a4619e59a0a526a3ebdca9) by [@mzlee](https://github.com/mzlee))
- Better handling exception in loadScript() ([3fbf7856d9](https://github.com/facebook/react-native/commit/3fbf7856d9acb0909357d6b315388471a6b5a69c))
- Fix ESLint upgrade "parsing error" ([9d214967d2](https://github.com/facebook/react-native/commit/9d214967d2c8184ce26addec150e392e3b519fcd) by [@zertosh](https://github.com/zertosh))
- Fixing 🤡 in RCTSurfaceRootShadowView ([5fba82deff](https://github.com/facebook/react-native/commit/5fba82deffde731176e3e118193c212f5d2c2bca) by [@shergin](https://github.com/shergin))
- Handle invalidation error in RCTObjcExecutor ([493f3e8da5](https://github.com/facebook/react-native/commit/493f3e8da5a112e1b33bfb3e9f51e7a2bd7edc7a) by [@fromcelticpark](https://github.com/fromcelticpark))
- Check for nullptr when accessing isInspectable method ([70d23e82ad](https://github.com/facebook/react-native/commit/70d23e82ad21a4cfde1ce7c3b1c00fe7c7d5adbd) by [@fromcelticpark](https://github.com/fromcelticpark))
- Introduce new Fabric API in RNAndroid ([2d35bde101](https://github.com/facebook/react-native/commit/2d35bde10130167018791c1b2fe4fece27cefddc) by [@mdvacca](https://github.com/mdvacca))
- Fixing Prepack model for latest global.nativeExtensions changes. ([01a58d182a](https://github.com/facebook/react-native/commit/01a58d182abd19c9e089ec38b08ffd4b45e2076c) by [@NTillmann](https://github.com/NTillmann))
- General code cleanup: unused code and configurations ([e233646d09](https://github.com/facebook/react-native/commit/e233646d095a272091b07c29fa87b206831ad6e3) and [e7010348d8](https://github.com/facebook/react-native/commit/e7010348d8b2f703fcc057c2914bd45ca6238f98) by [@bvaughn](https://github.com/bvaughn) and others)
- Add support for finding multiple views with NativeIds using a single listener to Android ([f5efc460ad](https://github.com/facebook/react-native/commit/f5efc460ad30cc60a62edd540c3b0f45c67bcda3) by [@axe-fb](https://github.com/axe-fb))
- Add CountingOutputStream ([a5e135aed6](https://github.com/facebook/react-native/commit/a5e135aed6941772c663adffd67729f7a5026d08) by [@hramos](https://github.com/hramos))
- Changes from Prettier ([b815eb59be](https://github.com/facebook/react-native/commit/b815eb59bef7bed9825027adc676b8d09db463c6), [e758cb7f39](https://github.com/facebook/react-native/commit/e758cb7f397b37b5621a4e0afcabc1c74443bc06), [bf9cabb03c](https://github.com/facebook/react-native/commit/bf9cabb03c7245930c270a19816545eae1b9007d), and [a5af841d25](https://github.com/facebook/react-native/commit/a5af841d259b6b29d95a9fb346a0ffce9c6efbfe) by [@shergin](https://github.com/shergin))
- Typos in code ([8ffc16c6e7](https://github.com/facebook/react-native/commit/8ffc16c6e7d25dd434ca3fc7f9ffd6d5917f7bcd) by [@ss18](https://github.com/ss18))
- Support for inherited events in view managers ([2afe7d4765](https://github.com/facebook/react-native/commit/2afe7d4765ffc0d0c71d233211edd1d21972040e) by [@shergin](https://github.com/shergin))
- Flow types changes ([3fc33bb54f](https://github.com/facebook/react-native/commit/3fc33bb54fc5dcf7ef696fe245addc320f85a269), [e485cde187](https://github.com/facebook/react-native/commit/e485cde187e4cd92bc821e58047b149a789dd713), [83ed9d170b](https://github.com/facebook/react-native/commit/83ed9d170b8fd750a345fc608ec69db2fe3ca9b2), [52ffa5d13e](https://github.com/facebook/react-native/commit/52ffa5d13ef6fe2752bc8f838dc1c2dfe651bb64), [d37cdd97ae](https://github.com/facebook/react-native/commit/d37cdd97aee4c1bac864cb28b686f2d1a128128e), [6e7fb01c02](https://github.com/facebook/react-native/commit/6e7fb01c02f3e91777c8292389c09a15d24cf800), [d99ba70c49](https://github.com/facebook/react-native/commit/d99ba70c492d3cd15ef6aded3f8712976d251f88), [bcfbdf4fbe](https://github.com/facebook/react-native/commit/bcfbdf4fbec1a05da151a2255f44a87b651965d6), and [a1c479fb3b](https://github.com/facebook/react-native/commit/a1c479fb3be674511131b46f856bc9b197a38cda) by [@alexeylang](https://github.com/alexeylang), [@sahrens](https://github.com/sahrens), [@yungsters](https://github.com/yungsters), and [@zjj010104](https://github.com/zjj010104))
- Give IInspector a virtual destructor for correct InspectorImpl destruction ([2a3c37f424](https://github.com/facebook/react-native/commit/2a3c37f424a4d1b9f4c5a2960a1cbe3517eac007) by [@toulouse](https://github.com/toulouse))
- Migrated `SourceCode` and `DeviceInfoModule` out of Native Modules ([47fe52380a](https://github.com/facebook/react-native/commit/47fe52380a232a1c364e21f71e2644a5a3348366) and [429fcc8cab](https://github.com/facebook/react-native/commit/429fcc8cab3ca877275d7deb1040fdff17a414c7))
- Jest config change as part of bringing back support for the `assetPlugin` option in Metro ([af6450c660](https://github.com/facebook/react-native/commit/af6450c660d3055d9c5c70d200471541a1ce7e12) by [@ide](https://github.com/ide))
- Nested virtualized lists should receive recordInteration events ([ae2d5b1e68](https://github.com/facebook/react-native/commit/ae2d5b1e68a2207c27ef2f1b533f86c86d6d849b))
- Upgrade connect dependency ([709ede799c](https://github.com/facebook/react-native/commit/709ede799cc9820acadaf22aa84f0fe6dd2be319) by [@rafeca](https://github.com/rafeca))
- xplat/js: asyncRequire: redirect async modules to control modules ([5e11b8870a](https://github.com/facebook/react-native/commit/5e11b8870aa855a56cfafa6575aed5e33b272065) by [@jeanlauliac](https://github.com/jeanlauliac))
- More progress towards split bundle support ([1a1a956831](https://github.com/facebook/react-native/commit/1a1a956831aec93a4fe2c6e2f63f558271fb466b) and [9e34cbda9d](https://github.com/facebook/react-native/commit/9e34cbda9de8f7350cfb02c884fbef2da18e0e3a) by [@fromcelticpark](https://github.com/fromcelticpark))
- Implement bundle sync status ([88980f2ef7](https://github.com/facebook/react-native/commit/88980f2ef7331aa630ff19e54427cdc3b7510869))
- Various improvements to RCTSurface and RCTShadowView ([7d9e902d72](https://github.com/facebook/react-native/commit/7d9e902d72e240f54ea01225cc3272698ff70014), [06ebaf2205](https://github.com/facebook/react-native/commit/06ebaf2205f979b6e6595ec7985447a07d25c4d4), [6882132421](https://github.com/facebook/react-native/commit/688213242130536c5d4db8b9aa17dc418372aadf), and [193a2bd4cd](https://github.com/facebook/react-native/commit/193a2bd4cdffbbc79b69c067b31420663dc9b03a) by [@shergin](https://github.com/shergin))
- Progress towards experimental ReactFabric and FabricUIManager ([b1e5c01483](https://github.com/facebook/react-native/commit/b1e5c01483a69b181c75d242231077cb2f96e846), [fa0ac92b2c](https://github.com/facebook/react-native/commit/fa0ac92b2c9cfc302314ff18325a96354bb1f432), [94dac23583](https://github.com/facebook/react-native/commit/94dac23583dc6b693475769c196c4b51954e74f1) by [@fkgozali](https://github.com/fkgozali))
- (almost) kill fbjsc ([702b7e877e](https://github.com/facebook/react-native/commit/702b7e877e09afede0dcdc7f8c680be63e942153) by [@michalgr](https://github.com/michalgr))
- Refactored bridge ReadableNativeMap and ReadableNativeArray to add centralized accesses ([7891805d22](https://github.com/facebook/react-native/commit/7891805d22e3fdc821961ff0ccc5c450c3d625c8), [28be33ac34](https://github.com/facebook/react-native/commit/28be33ac34d9214ffd452f88a4d19468683a6a0d), and [5649aed6d3](https://github.com/facebook/react-native/commit/5649aed6d3223ec49c42416f242249eb0c4fd890))
- Removed unused core from Image.android.js ([ce3146a6f3](https://github.com/facebook/react-native/commit/ce3146a6f3162141c7dc06d2c91ec291d3756a92) by [@shergin](https://github.com/shergin))
- Capture StackOverflowExceptions triggered when drawing a ReactViewGroup or ReactRootView and log more debugging information for it ([1aac962378](https://github.com/facebook/react-native/commit/1aac9623789e3d2a428b51ae699d4c340b3afb99) and [4d3519cc6a](https://github.com/facebook/react-native/commit/4d3519cc6af5bb33c6f21d9392b82379780d79dc) by [@mdvacca](https://github.com/mdvacca))
- `babel-preset-react-native`: only require plugins once ([df6c48cf36](https://github.com/facebook/react-native/commit/df6c48cf36d39a75a6196462d661ce75c6aef104) by [@davidaurelio](https://github.com/davidaurelio))
- Report module id as string and as double, in case of invalid values are passed to nativeRequire ([8f358a2088](https://github.com/facebook/react-native/commit/8f358a20881b61cf3256fa1e404b86d5f104932d) by [@fromcelticpark](https://github.com/fromcelticpark))
- More work moving build configurations to Skylark ([d3db764f38](https://github.com/facebook/react-native/commit/d3db764f383fc588a87e0d1e4267b310d6188bc8), [869866cc5c](https://github.com/facebook/react-native/commit/869866cc5c639d8c0257c776368381987a7f7159), [a8c95d2417](https://github.com/facebook/react-native/commit/a8c95d241757fefaa06ff49193975f7c103a6418), and [79a63d040f](https://github.com/facebook/react-native/commit/79a63d040f1346a0e320104fb35da405502aae19) by [@mzlee](https://github.com/mzlee), [@ttsugriy](https://github.com/ttsugriy), and others)
- `[RCTShadowView isHidden]` was removed ([c19bc79688](https://github.com/facebook/react-native/commit/c19bc7968855e85758df9e1a47dc2a52e69668ed) by [@shergin](https://github.com/shergin))
- Remove unused `packagerInstance` option and rename it to `server` ([bbbc18c4ee](https://github.com/facebook/react-native/commit/bbbc18c4ee9b13a5aeca10edcb29694db3f15769))
- The blog has moved to [react-native-website](https://github.com/facebook/react-native-website/tree/master/website/blog) ([e16d67340e](https://github.com/facebook/react-native/commit/e16d67340e0ad1724afeee78f9d820177abbd8b6) by [@hramos](https://github.com/hramos))
- Remove SoLoaderShim, use SoLoader ([fc6dd78935](https://github.com/facebook/react-native/commit/fc6dd78935a41106aa6a44058c1abb7d0ba0fa24) by [@foghina](https://github.com/foghina))
- Removed broken link for 'Getting Help' in the README ([b3a306a667](https://github.com/facebook/react-native/commit/b3a306a66709a0ab0ff29151a38eaa3f8f845c1f) by [@rickydam](https://github.com/rickydam))
- Changed to use boost-for-react-native cocoapod, which speeds up `pod install` a ton; this was in 0.53 originally but had to be re-added ([d40db3a715](https://github.com/facebook/react-native/commit/d40db3a715afaf1cde4a5e231e96e46b2808bbef) by [@CFKevinRef](https://github.com/CFKevinRef))
- Remove fbobjc's RN copy ([af0c863570](https://github.com/facebook/react-native/commit/af0c8635709b8014c68ce88ebb1e9e94ec56768a))
- Measure time to create **ReactInstanceManager** ([6224ef5301](https://github.com/facebook/react-native/commit/6224ef5301d67266b28c77e5e46816f319122f38) by [@alexeylang](https://github.com/alexeylang))
- Upgrade create-react-class to v15.6.3 ([74f386633d](https://github.com/facebook/react-native/commit/74f386633d5e123b2ea73b4773d0ee7d83832fb5) by [@bvaughn](https://github.com/bvaughn))
- Upgrade react-devtools to v3.1.0 ([8235a49a33](https://github.com/facebook/react-native/commit/8235a49a33cc8e84cd4ba1cc15bc09eed6712b4c) by [@bvaughn](https://github.com/bvaughn))
- Upgrade flow to v0.65.0 ([7aba456b04](https://github.com/facebook/react-native/commit/7aba456b04ff6a4e4721bcf1064f22a8a87f90c7) and [298f3bb69a](https://github.com/facebook/react-native/commit/298f3bb69abecdcd83adb64e043a2974bd52b1ab) by [@avikchaudhuri](https://github.com/avikchaudhuri) and [@mroch](https://github.com/mroch))
- Upgrade Jest to v22.2.1 ([46f4d3e1bc](https://github.com/facebook/react-native/commit/46f4d3e1bc9340009c53f366ebd98600c485c993) and [24e521c063](https://github.com/facebook/react-native/commit/24e521c063035e470587bb279976a955ff03717a) by [@mjesun](https://github.com/mjesun))
- Upgrade ESLint to v4.17.0 (plus update related deps) ([bba19e846e](https://github.com/facebook/react-native/commit/bba19e846e377241826475906f642264409a3990) by [@zertosh](https://github.com/zertosh))
- Upgrade React to v16.3.0-alpha.1 ([03d7b2aa0e](https://github.com/facebook/react-native/commit/03d7b2aa0e7f239c78b6fe3a96c0ddf3de00a58b) and [5e80d95e03](https://github.com/facebook/react-native/commit/5e80d95e034259af8c41b50756a623756cc81a77) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))
- Synced React and ReactFabric render ([c7ed03a95c](https://github.com/facebook/react-native/commit/c7ed03a95c8c372c7631c11e0778cf9753afdabc), [13829751b1](https://github.com/facebook/react-native/commit/13829751b11330f8e1400c5c70c59c49ac2f091f), and [d676746f14](https://github.com/facebook/react-native/commit/d676746f14fb6d714d2576871655b13c005480e7) by [@bvaughn](https://github.com/bvaughn))
- Upgrade metro to v0.26.0 ([9e6f3b8aff](https://github.com/facebook/react-native/commit/9e6f3b8aff7572f5e9008a2641c70846da0817bb), [ce50f25d22](https://github.com/facebook/react-native/commit/ce50f25d22d56f24bdb7d80a3f9a279863d5dc2a), [e9b83e608e](https://github.com/facebook/react-native/commit/e9b83e608e8487ef8fcbfc956a52bfa7ee1d727f), [2fe7483c36](https://github.com/facebook/react-native/commit/2fe7483c36b10146f737f0a84799c2eb01aaba79), [0f96ebd93b](https://github.com/facebook/react-native/commit/0f96ebd93b634ec3fb0e6036a4960bb4af167e7b), [0de470ec19](https://github.com/facebook/react-native/commit/0de470ec19f2b9f3f4f3ab3dd4322c0f0ece2868), [e8893a021f](https://github.com/facebook/react-native/commit/e8893a021f60ffeea27443998b1716e9a1963d64), and [b1d8af48ae](https://github.com/facebook/react-native/commit/b1d8af48ae251f57bdcd55f89d8fc62aa9eca872) by [@rafeca](https://github.com/rafeca) and [@grabbou](https://github.com/grabbou))
- Add Context to Redbox report api ([e3c27f585a](https://github.com/facebook/react-native/commit/e3c27f585aaeb685e86250f45fc790c06932af0d) by [@ayc1](https://github.com/ayc1))
- GitHub bot commands have been disabled in the short term ([b973fe45bd](https://github.com/facebook/react-native/commit/b973fe45bdbc84e12fd0a3afbd6fdd327bcb9d02) by [@hramos](https://github.com/hramos))
- Various CI configuration changes ([17bd6c8e84](https://github.com/facebook/react-native/commit/17bd6c8e84d9f5d42767a6f42a9a2cf812aa778b), [51b6749c07](https://github.com/facebook/react-native/commit/51b6749c075bb87a340096a0dc06cd6cf9a19907), [a2f3ba864e](https://github.com/facebook/react-native/commit/a2f3ba864ed17ca32e71f15724a8ebf2b1e640c1), [2ef9b7f2da](https://github.com/facebook/react-native/commit/2ef9b7f2da5b875ac1a4fee0ade3cc16ad96772a), [40b17926bb](https://github.com/facebook/react-native/commit/40b17926bb2c724f1580b2eb0c30a37f5d48030a), [613afbab7f](https://github.com/facebook/react-native/commit/613afbab7f30748ba767b055f23d0d294562805f), [da8bec9f8b](https://github.com/facebook/react-native/commit/da8bec9f8b62b46e58e0e98413aa915ece05b71b), [fa11faecb6](https://github.com/facebook/react-native/commit/fa11faecb69f385a5c0aba60f4039612e46b87f3), [f50af7f8a4](https://github.com/facebook/react-native/commit/f50af7f8a48e9cae2cb512962870d5692da5aaf2), [9227ba73ab](https://github.com/facebook/react-native/commit/9227ba73ab8c2b8b8ce4086b5f4667a8a55cdcfa), [365a4d4b43](https://github.com/facebook/react-native/commit/365a4d4b4315d4ca7a0e1236012b763d7e5bb1fd), [b58d848d9c](https://github.com/facebook/react-native/commit/b58d848d9cf78d755fe38392e26826ed481175cd), [c8e98bbaf5](https://github.com/facebook/react-native/commit/c8e98bbaf58b7a7f866e831982355b78dfa43b9d), [f5975a97ad](https://github.com/facebook/react-native/commit/f5975a97adcf3ae9c2988d7e267947a84ab60cee), and [605a6e4031](https://github.com/facebook/react-native/commit/605a6e4031fc9b63edbb9120ffacf7b045dc9db8) by [@hramos](https://github.com/hramos), [@grabbou](https://github.com/grabbou), and [@dryganets](https://github.com/dryganets))
- Restore copyright header ([4f883bd0bc](https://github.com/facebook/react-native/commit/4f883bd0bcdc015e2cf70bcc29bbe05fd5b8a40b) by [@hramos](https://github.com/hramos))
- Trim docs that are already present in the open source docs site ([28d60b68ad](https://github.com/facebook/react-native/commit/28d60b68ad7bc5b7ebda6b720981feacd3bde337) by [@hramos](https://github.com/hramos))
- Fix obsolete instructions about editing docs ([2f46712074](https://github.com/facebook/react-native/commit/2f46712074d187f5456723499e6885bf0941cfbc) by [@ExplodingCabbage](https://github.com/ExplodingCabbage))
- Fix links to beginner friendly issues ([c355a34de1](https://github.com/facebook/react-native/commit/c355a34de107befd26bc495272b91c11957f3fd0) by [@hotchemi](https://github.com/hotchemi))
- Typos in comments and log messages ([d2c569795c](https://github.com/facebook/react-native/commit/d2c569795ca07b6b7c0227cfc6d0b3bf5dd23b99) by [@ss18](https://github.com/ss18))
- Don't run the Danger CI tool through Flow ([1ea3065feb](https://github.com/facebook/react-native/commit/1ea3065feb265bef738bd53e835567d595266725) by [@hramos](https://github.com/hramos))
- Namespace custom ESLint rules through eslint-plugin-lint ([488b6825c5](https://github.com/facebook/react-native/commit/488b6825c5fb4ec68a8b7315559c4d34e012de12) by [@zertosh](https://github.com/zertosh))

- ... and now we're at 0.54 🎉 ([67e67ec83c](https://github.com/facebook/react-native/commit/67e67ec83ce83d4a1a38bc29dd52bf5c28723752), [21dd3dd296](https://github.com/facebook/react-native/commit/21dd3dd296989f4de2d4e9b1ba0df88ea2d32413), [49e35bd939](https://github.com/facebook/react-native/commit/49e35bd9399716a2734e824bab14faf1683cdfdd), [829f675b8b](https://github.com/facebook/react-native/commit/829f675b8b4abae696151e404552af515a2da1ce), and [294d95a236](https://github.com/facebook/react-native/commit/294d95a23687b2e3155fe4ae1bc5e4a649e6b014) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))

## v0.53.0

Welcome to the January 2018 release of React Native. The CLI now supports `--port` for both platforms, a few components were made to support consistent props across both platforms, and various fixes were made. There was a lot of under-the-cover work done with more test improvements and dependency updates. 118 commits were made by 43 contributors 🎉.

### Added

- ✨ **Keyboard** events now include `easing` and `duration` ([4d33080f0f](https://github.com/facebook/react-native/commit/4d33080f0fa7b2eb7b0e9ff7bbd50c222f461786) by [@sahrens](https://github.com/sahrens))

#### iOS exclusive additions

- `react-native run-ios` now supports the `--port` argument for metro ([33d710e8c5](https://github.com/facebook/react-native/commit/33d710e8c58ef1dc69816a59ac1cf390894e7cb9))

#### Android exclusive additions

- On Android, **ScrollView** now takes `snapToInterval` like iOS ([ddd65f1ba9](https://github.com/facebook/react-native/commit/ddd65f1ba9cca945313d116c1dcf75f3a0556099) and [b2848a54b0](https://github.com/facebook/react-native/commit/b2848a54b05470b3e258c935dd33b8c11a31b3c3) )
- On Android, **TextInput** now takes `onKeyPress` like iOS ([c9ff0bc212](https://github.com/facebook/react-native/commit/c9ff0bc212b680232f7379fba7b9332927075c3c) by [@joshyhargreaves](https://github.com/joshyhargreaves))

### Changed

- ⬆️ Metro to v0.24.2 ([2e008bc464](https://github.com/facebook/react-native/commit/2e008bc464f94df013794d3da6e9d4e4722151a0) and [0b5e8b4852](https://github.com/facebook/react-native/commit/0b5e8b485229957086d416c307f07c75a4139ffa) by [@rafeca](https://github.com/rafeca))
- ⬆️ Flow to v0.63 ([6b95c4fb14](https://github.com/facebook/react-native/commit/6b95c4fb142a7015b2afca50cc19eec0b8913d8c) by [@gabelevi](https://github.com/gabelevi))
- ⬆️ Danger to v2.0 ([b750e3b21b](https://github.com/facebook/react-native/commit/b750e3b21bc5c135773e8de53c5663bdf6266951) by [@hramos](https://github.com/hramos))
- ⬆️ Jest to v22.0.0 ([4803419dc8](https://github.com/facebook/react-native/commit/4803419dc8406b6892f20cdfb448a01c16ad4338) by [@mjesun](https://github.com/mjesun))
- 💄 Bundler is now called Metro Bundler in the terminal ([654d7595fe](https://github.com/facebook/react-native/commit/654d7595fe5766667c015307129e75d8986482e1) by [@edcs](https://github.com/edcs))
- 📝 Update getting started url on Android CLI ([6661633390](https://github.com/facebook/react-native/commit/6661633390276f707faa60509b2805a83929e747))
- 🐳 Dockerfile uses newest Android SDK, Buck, and new Docker tags have been pushed ([4fbfbe6bb0](https://github.com/facebook/react-native/commit/4fbfbe6bb0e0eaaf12ec713888bf2c6a347f0f96) and [c547f783c4](https://github.com/facebook/react-native/commit/c547f783c440019a4a87ba55b668b3af5ff8fc91) by [@hramos](https://github.com/hramos))
- 📝 Update repo docs to use HTTPS ([33a2e533b7](https://github.com/facebook/react-native/commit/33a2e533b76d35c1b9fb32e926f7c2c27cb616e9) by [@him2him2](https://github.com/him2him2))
- 🎨 Make **ScrollResponder** follow code style ([45e6fcdba0](https://github.com/facebook/react-native/commit/45e6fcdba089900555faa63fe8e37b4bd4a7700a) by [@TheSavior](https://github.com/TheSavior))
- **VirtualizedList** now requires a windowSize greater than 0 ([3559e42c55](https://github.com/facebook/react-native/commit/3559e42c55366bacd9bb5178ecab64f95e9a8ea7))
- react-devtools works with emulator and real devices now without needing to tweak the devServer value ([fa574c6092](https://github.com/facebook/react-native/commit/fa574c60920588e29d7b642e547e240ac8655e66) by [@jhen0409](https://github.com/jhen0409))
- 📝 Clarify use of Flow props types in react-native-cli's template project ([9b147a53d1](https://github.com/facebook/react-native/commit/9b147a53d1ab1e14d7ef5b436f1e140a28a5d6a3) by [@hramos](https://github.com/hramos))
- 📝 Add docs for `isInspectable` ([59c7967627](https://github.com/facebook/react-native/commit/59c79676277abaaaf61388309429c77164c3de4b) by [@bnham](https://github.com/bnham))
- ✅ More Flow improvements (**Text**, **SectionList**, and others) ([f71f4e7906](https://github.com/facebook/react-native/commit/f71f4e7906648766e1a5b630abbad8935daef955), [632f1202ab](https://github.com/facebook/react-native/commit/632f1202ab3f9dd300a53f096bc15325e0d8f6c1), and [a8391bde7d](https://github.com/facebook/react-native/commit/a8391bde7d757d01521a6d12170fb9090c17a6a0) by [@yungsters](https://github.com/yungsters), [@samwgoldman](https://github.com/samwgoldman), and others)
- Various code cleanup to satisfy linting errors and standards ([b0319f3293](https://github.com/facebook/react-native/commit/b0319f3293b553c105b813dd12bff7d55940e60b), [dd4611721d](https://github.com/facebook/react-native/commit/dd4611721d0ad49ceaf4514df1b47cf2753b9ae6), and [7f58189605](https://github.com/facebook/react-native/commit/7f5818960596a2a18b7d427fd23d46396c05bee5) by [@ayc1](https://github.com/ayc1), [@grabbou](https://github.com/grabbou), and [@ide](https://github.com/ide))

#### iOS exclusive changes

- 🔥⚡️ iOS UI Manager cleanup and optimizations ([0ec1017660](https://github.com/facebook/react-native/commit/0ec1017660602d6b3ae84b4d7a444cbd49ba0d53), [0ae4c47daa](https://github.com/facebook/react-native/commit/0ae4c47daa6280d2931d8bbf89612b2f1cb106d4), [2679f3efb6](https://github.com/facebook/react-native/commit/2679f3efb69bc7b0db1840b4ea59ebe791a54dd2),and [d9e5b313bb](https://github.com/facebook/react-native/commit/d9e5b313bb63a1ec0d402a96539c6df29bc72c42) by [@shergin](https://github.com/shergin))
- If the inspector tries to handle a wrapped event but there is no connection, log a warning rather than a Redbox ([30da2622e2](https://github.com/facebook/react-native/commit/30da2622e222c338421508ce6e5663155fc874ef) by [@bnham](https://github.com/bnham))
- Various under-the-covers changes around the bridge, RCTShadowView, RCTSurface, and a few others ([c3139d798a](https://github.com/facebook/react-native/commit/c3139d798af633bb81bf0da6df05b3c0beb0ced4), [2789ba016b](https://github.com/facebook/react-native/commit/2789ba016bfddace1407473769e933795333cfab), [b8e60a3ca3](https://github.com/facebook/react-native/commit/b8e60a3ca3314d79e9c38ee8c7995df81a27624c), [099b28006b](https://github.com/facebook/react-native/commit/099b28006b59abb11eae1f27424566b280860b0d), [b263560c73](https://github.com/facebook/react-native/commit/b263560c73af5559fdc3bba411f16c588abbffef), [19a9c5e41d](https://github.com/facebook/react-native/commit/19a9c5e41da0aa6ee28a54772edcb92daa498561), [d3b41e0da3](https://github.com/facebook/react-native/commit/d3b41e0da37c08ab0637d9f70d612e50b6f5e63c), [b2a251948f](https://github.com/facebook/react-native/commit/b2a251948f3309d2b1d0d533fb2fa74d2f8a10b8), [870bc4807a](https://github.com/facebook/react-native/commit/870bc4807a8c3f90498cf4c2ed3c030cb7b43ef9), [176a578238](https://github.com/facebook/react-native/commit/176a578238566ad857c0911e127669f1ee82107d), [c491b22233](https://github.com/facebook/react-native/commit/c491b2223313676bd4900de7a8c70a10051fa9f0), [c75612219e](https://github.com/facebook/react-native/commit/c75612219ef0c99d1ddca0aadf354f20de27608c), and[c01a171ed8](https://github.com/facebook/react-native/commit/c01a171ed881fb91a972ed475011f85697a29341) by [@shergin](https://github.com/shergin))
- Changed to use _boost-for-react-native_ cocoapod, which speeds up `pod install` a ton ([d40db3a715](https://github.com/facebook/react-native/commit/d40db3a715afaf1cde4a5e231e96e46b2808bbef) by [@CFKevinRef](https://github.com/CFKevinRef))

#### Android exclusive changes

- Include scroll momentum info when there are scroll events from Android ([c49d249fd7](https://github.com/facebook/react-native/commit/c49d249fd7c274f02e6018892992bcd273d6a465) by [@wwalser](https://github.com/wwalser))
- Yoga's mkfile for Android now uses wildcard instead of manual file addition ([d89901fa60](https://github.com/facebook/react-native/commit/d89901fa6002802dc9d744bfe3e5e712d6a411a1) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))

### Removed

- **TextInput** no longer has the `autoGrow` prop, since this is platform-default behavior now ([dabb78b127](https://github.com/facebook/react-native/commit/dabb78b1278d922e18b2a84059460689da12578b) by [@shergin](https://github.com/shergin))

#### iOS exclusive removals

- Updates to the bridge in order to enable future rendering optimizations ([d2dc451407](https://github.com/facebook/react-native/commit/d2dc4514077ae868f85d45ccdcc7c69df7b7648b) by [@shergin](https://github.com/shergin))

### Fixed

- Do not set `minify=true` when calculating the list of dependencies for the CLI ([4a1bb8fe8d](https://github.com/facebook/react-native/commit/4a1bb8fe8dfd36ea207c0683d683bb8b22a282a5) by [@rafeca](https://github.com/rafeca))
- 👷 Update CODEOWNERS now that the docs are in a separate repository ([85ff264445](https://github.com/facebook/react-native/commit/85ff264445aa4b9cf0b91aaca5764bb56caba997) by [@hramos](https://github.com/hramos))
- Fixed a broken link in react-native-git-upgrade's readme ([bbedf2da9a](https://github.com/facebook/react-native/commit/bbedf2da9a3a091eeb687d43029f7d2450cf2612) by [@Taym95](https://github.com/Taym95))
- 🤡 Do not use Node 8.x specific Stream.final for FS mocks ([4216cdef13](https://github.com/facebook/react-native/commit/4216cdef13c9ed47b9c746b39a0ddfdaf846d495) by [@hramos](https://github.com/hramos))
- Fix virtualized cell keys for list headers and footers ([a010a0cebd](https://github.com/facebook/react-native/commit/a010a0cebd4afc0d88336c2c265a5d9dbb19918f))
- Fix warnings of casting and null pointer handling in Yoga ([a8d4666651](https://github.com/facebook/react-native/commit/a8d46666518944a178e85c179da8047234c2d8fb) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix broken buck failures on master ([4e767013ed](https://github.com/facebook/react-native/commit/4e767013ed73fb89f69f2e59626d6dcf3bb77684) by [@hramos](https://github.com/hramos))
- **RefreshControl** appears correctly when expected on initial render of a **FlatList** again ([ed5872e2cc](https://github.com/facebook/react-native/commit/ed5872e2cca955ee407e87e37e13c7fed182199a) by [@vonovak](https://github.com/vonovak))
- Fixed JS debugger CORS issue ([29f8354c19](https://github.com/facebook/react-native/commit/29f8354c1946a6325e9020b9ef5ee4ccdf0fa51f) by [@njbmartin](https://github.com/njbmartin))

#### Android exclusive fixes

- Fix position of dev loading view on Android API < 20 ([7ff6657985](https://github.com/facebook/react-native/commit/7ff6657985a09bd2572615d16403fba3af709859) by [@kmagiera](https://github.com/kmagiera))
- Fix Modal not disappearing when navigating from inside a Modal to another activity ([e5c2a66897](https://github.com/facebook/react-native/commit/e5c2a66897b9c562c549e63adcf70783ea34c418)

#### iOS exclusive fixes

- Fix regression introduced where layout wouldn't occur in some situations ([46be5bf71c](https://github.com/facebook/react-native/commit/46be5bf71c78d33cda5cb496c475dcfb8e229346) by [@shergin](https://github.com/shergin))
- Fixed double initial prop applying for newly created views ([0ec1017660](https://github.com/facebook/react-native/commit/0ec1017660602d6b3ae84b4d7a444cbd49ba0d53) by [@shergin](https://github.com/shergin))
- tvOS build now works again ([3bd89867d6](https://github.com/facebook/react-native/commit/3bd89867d6f23547f07b9b3a569d5a62971004f6) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))

### Other

Below is a list of the remaining, low-level changes that made it into this release of React Native.

- Remove "prepareReact" call from the bridge ([80f9e1f7de](https://github.com/facebook/react-native/commit/80f9e1f7de407ea417cecb04b3ba20b05696b478) and [56a42e57d0](https://github.com/facebook/react-native/commit/56a42e57d05ff609e8fce35dcb5e9db7938db801) by [@fromcelticpark](https://github.com/fromcelticpark))
- Add explicit componentControllerClass to CKComponent for RCTSurface ([ab972708a8](https://github.com/facebook/react-native/commit/ab972708a8dcc9b37c19843f2fe134928a7c7a3f))
- Changes to RCTShadowView to increase RCTSurface performance ([f96f9c5fd6](https://github.com/facebook/react-native/commit/f96f9c5fd692000f561e87cba68642ef7daf43e7) by [@shergin](https://github.com/shergin))
- Designated methods to control dirty propagation ([af226ef949](https://github.com/facebook/react-native/commit/af226ef949f3a21ef68a6e6b9fbd4cc06fa05152) by [@shergin](https://github.com/shergin))
- Add missing tvOS header ([49cbca7464](https://github.com/facebook/react-native/commit/49cbca7464e27c34105122459ae29cc3b1247513) by [@grabbou](https://github.com/grabbou))
- On Android, seperate logic to initialize JS from starting the app ([4996b9aeb4](https://github.com/facebook/react-native/commit/4996b9aeb4127892b7579b45927dec14833b8b4d) by [@axe-fb](https://github.com/axe-fb))
- ♻️ JS linting was cleaned up: removed unused libs, strengthened the rules, removed unneeded rules, prevent disabled tests, and more ([2815ada238](https://github.com/facebook/react-native/commit/2815ada23872fc28dc8dd5a9833962cb73f452eb), [183c316f4c](https://github.com/facebook/react-native/commit/183c316f4c869804b88cffe40614c84ac0a472d0), [9c67e749d8](https://github.com/facebook/react-native/commit/9c67e749d8f63cf14ece201ec19eee4676f96a85), [79902f99b8](https://github.com/facebook/react-native/commit/79902f99b81f538042b38a857182c2e5adbfd006), [9a36872f0c](https://github.com/facebook/react-native/commit/9a36872f0c7ba03a92fabf65e4d659d6861ea786), [67a3c42d1a](https://github.com/facebook/react-native/commit/67a3c42d1a29b6fa1375f7445d1c9b4429939bae), [b826596700](https://github.com/facebook/react-native/commit/b82659670041d0e472f68c0a14b3ef5b962db09b), [a1a0a69546](https://github.com/facebook/react-native/commit/a1a0a6954635141ce6c167816b67674aa5c31062), and [11a495cb32](https://github.com/facebook/react-native/commit/11a495cb3235ebbc2ad890e92ec612fd5316bffb) by [@TheSavior](https://github.com/TheSavior))
- 👷 Separate JS lint and flow checks from tests ([5ea5683d01](https://github.com/facebook/react-native/commit/5ea5683d01487b49c814fca6e11a818b9a777239) by [@hramos](https://github.com/hramos))
- 👷 Fix Buck in build config to enable CI ([796122d8f3](https://github.com/facebook/react-native/commit/796122d8f3b825c0bf0c138c662f3477f8bab123), [7c3a61f3b6](https://github.com/facebook/react-native/commit/7c3a61f3b610e219fd798eccd330deb9a2471253), [82b123e744](https://github.com/facebook/react-native/commit/82b123e744b87cc59c96b4e82af9ed03981b4f42) by [@grabbou](https://github.com/grabbou))
- ♻️ Various refactoring within the YGNode implementation ([28968e2c0b](https://github.com/facebook/react-native/commit/28968e2c0ba23db9af12b47681f165d29d0f132d), [0a9e652bdd](https://github.com/facebook/react-native/commit/0a9e652bdd031d53d712e2e9610fb608bfa54ff1), [6627d7723c](https://github.com/facebook/react-native/commit/6627d7723c2df244ccc8a462bd98499cc11da2e2), and [d85da86dc7](https://github.com/facebook/react-native/commit/d85da86dc7c7833e71099c6a621547bc3cec8d4f), [a163f70f87](https://github.com/facebook/react-native/commit/a163f70f875dff4428eebd989bfaf28dda6551bf) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Fix ReactLegacy and delete RCTViewControllerProtocol ([a0ff8c7706](https://github.com/facebook/react-native/commit/a0ff8c7706fc37bdce78c9ec51da320f78d16a24) by [@javache](https://github.com/javache))
- Define internal FB macro for OSS builds; remove some unused definitions ([077c3ab349](https://github.com/facebook/react-native/commit/077c3ab34952f4b442abdd7a47ab54ca4bd0ba2e) and ([a6a66c5b39](https://github.com/facebook/react-native/commit/a6a66c5b3943443e4016f32407e4a4f8d707e387) by [@ttsugriy](https://github.com/ttsugriy))
- RNTester: Relax Bridge Release Check ([e3c6f38773](https://github.com/facebook/react-native/commit/e3c6f38773d0b578794726033d4fabbfa48d1c7b) by [@yungsters](https://github.com/yungsters))
- Remove embeddedBundleURL from the asset resolver ([489b98bf10](https://github.com/facebook/react-native/commit/489b98bf1006818ba985e93478a088c0e1e1aae7))
- Do not set FB_ASSERTION_ENABLED ([4cdbb77c33](https://github.com/facebook/react-native/commit/4cdbb77c3363e120877ff66f39cdcf51d668df7d) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- JSBigString to MAP_PRIVATE not MAP_SHARED ([f9f40cd3e4](https://github.com/facebook/react-native/commit/f9f40cd3e486314cd75bda8722147f2f0f5b8fe1))
- Fixed black ARTSurfaceView ([5c8481e836](https://github.com/facebook/react-native/commit/5c8481e83646b9cae482a803c878fb007f370035) by [@shergin](https://github.com/shergin))
- Kill orphaned marker end in JSCExecutor ([6ad1f0957a](https://github.com/facebook/react-native/commit/6ad1f0957a020cb57b177ab015c17aa883e1f0ad) by [@michalgr](https://github.com/michalgr))
- Make YGNode as c++ struct with properties exposed through accessors ([f1055bcac8](https://github.com/facebook/react-native/commit/f1055bcac8b580c40f9646687e7a950fb6864c74) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- 🔖 ...and now we're at 0.53.0-rc.0 🎁 ([0b996577e3](https://github.com/facebook/react-native/commit/0b996577e321d439aa6ede4c7400ea76efb7816a) by [@grabbou](https://github.com/grabbou))

## v0.52.0

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
  ([164591218f](https://github.com/facebook/react-native/commit/164591218f5fab7d386e057e0d51b9c1fe30b0a9) by
  [@janicduplessis](https://github.com/janicduplessis))
- **Debug JS in Nuclide** is now an option in the dev menu 🐜
  ([7c7108a1e8](https://github.com/facebook/react-native/commit/7c7108a1e8e9354d8aeb2f0ff712561d8aa19408) and
  [de424cc291](https://github.com/facebook/react-native/commit/de424cc291523a8f4e3d33059b725d5b85f31611))
- Introducing **PlatformOS** – it looks a lot like **Platform**, but with a
  simplified API
  ([5ee27ff755](https://github.com/facebook/react-native/commit/5ee27ff7552a5707a6e6bdb3f23e7378f978a2f7) by
  [@brishin](https://github.com/brishin))
- New experimental _RCTSurface_: measure and layout a UI in a thread-safe and
  synchronous manner
  ([be6976d6fa](https://github.com/facebook/react-native/commit/be6976d6faa333311405bd6184300bbd8da6cbca),
  [7df58e23a3](https://github.com/facebook/react-native/commit/7df58e23a3a265b0df0edc753cc79a153fec90d8),
  [e75bd87a76](https://github.com/facebook/react-native/commit/e75bd87a76726a9b075061ef76156705b3c1e872),
  [aa83b5a0ca](https://github.com/facebook/react-native/commit/aa83b5a0ca30736b2800833bcc6149dcbe8436fa),
  [081f7d14ad](https://github.com/facebook/react-native/commit/081f7d14aded077a7627404e5e2d48163a5707ad),
  [da17b237e1](https://github.com/facebook/react-native/commit/da17b237e15e20adf20d6b917349d6389efb17fd),
  [e9e0cd7ab8](https://github.com/facebook/react-native/commit/e9e0cd7ab86c98bcd3201e306e96532685d8de1d),
  [43b2509320](https://github.com/facebook/react-native/commit/43b25093202472c5af07d4f393d831e4d1484b07),
  [ba6075120a](https://github.com/facebook/react-native/commit/ba6075120af9c0086b449aafa7420913fa58f746),
  [d71d28f094](https://github.com/facebook/react-native/commit/d71d28f09495a1e2802db169e2d0cd1ec5bd5973),
  [4d37cf0fbc](https://github.com/facebook/react-native/commit/4d37cf0fbcc529ad75eb4a04a185036a887e42c2), and
  [d021dd25da](https://github.com/facebook/react-native/commit/d021dd25da92d84c62c9a77049bb798e3b891447) by
  [@maicki](https://github.com/maicki) and
  [@shergin](https://github.com/shergin))
- Experimental **SwipeableRow**'s datasource now has a `getLastRowID` method
  ([d79e245d19](https://github.com/facebook/react-native/commit/d79e245d19f7f246322bc657b407198b15cb1b98))
- [React Native monthly
  #5](https://reactnative.dev/blog/2017/11/06/react-native-monthly-5.html)
  was added ([3c5a55ddc2](https://github.com/facebook/react-native/commit/3c5a55ddc21197cfa013dc6222e398138759b5d3)
  by [@tenodi](https://github.com/tenodi))

#### iOS Specific

- **DatePickerIOS** now takes **locale** 🌍
  ([fd9c3618fc](https://github.com/facebook/react-native/commit/fd9c3618fcd3dc80f9abf3da779627704c7350e4) by
  [@RobertPaul01](https://github.com/RobertPaul01))
- **CameraRoll** can now **deletePhotos** 📸
  ([554e873f58](https://github.com/facebook/react-native/commit/554e873f585ea05ce1e9fe4ff71173c47b3c259c) by
  [@fxfactorial](https://github.com/fxfactorial))
- There's now an API to specify a different directory for iOS image assets
  ([8f9b291224](https://github.com/facebook/react-native/commit/8f9b291224d1ca57a5f90200ec4687abb4706f4b))
- Support for [custom accessibility
  actions](https://developer.apple.com/documentation/uikit/uiaccessibilitycustomaction)
  on iOS ([36ad813899](https://github.com/facebook/react-native/commit/36ad8138997c195b8728906ceb51bd31338b6a24) by
  [@ericdavmsft](https://github.com/ericdavmsft))

### Deprecated

- Ignore YellowBox warnings with `YellowBox.ignoreWarnings([...])` rather than
  `console.ignoredYellowBox = [...]`
  ([26038f50bb](https://github.com/facebook/react-native/commit/26038f50bb003eec3770e2b66d428fbb739f1ce2) by
  [@wli](https://github.com/wli))

### Changed

- Metro-bundler is now metro, and it's v0.24.1; there were some performance
  increases at the cost of a few breaking changes; improved tests of the bundler
  too ([0bbd9f042a](https://github.com/facebook/react-native/commit/0bbd9f042a8ad7c7be094bd7636ca767c6f7b231),
  [a2fd3fcef8](https://github.com/facebook/react-native/commit/a2fd3fcef84e916b36ef7753dff69b7c1b307890),
  [503b4521a6](https://github.com/facebook/react-native/commit/503b4521a6ce6bb2282631df616440fa71416d25),
  [654fed46f4](https://github.com/facebook/react-native/commit/654fed46f49b5002096ff55c2e8523af48b22c24),
  [0091496891](https://github.com/facebook/react-native/commit/009149689119e180415f8138b2827366768fc1d3),
  [aba148f733](https://github.com/facebook/react-native/commit/aba148f733e85a88d4be07b3b8ca37c43cf6a51e),
  [3d5dc872a4](https://github.com/facebook/react-native/commit/3d5dc872a4eefa1557554b3b338227959d166370),
  [48019a0c2a](https://github.com/facebook/react-native/commit/48019a0c2a9a45d51a4faab1d5bef52949f4b5c5),
  [ecec4319c4](https://github.com/facebook/react-native/commit/ecec4319c4fda9bebc90216d5340442b2a5725df),
  [f4d627c8fa](https://github.com/facebook/react-native/commit/f4d627c8faeb034eac8053fd253f17e42b85f2f2),
  [f871d25eb4](https://github.com/facebook/react-native/commit/f871d25eb48dca224bb3796aa9cb5d714292662f),
  [a7b231a327](https://github.com/facebook/react-native/commit/a7b231a3278e4fc2d7e4269ce106f22712f2e5a8),
  [830b431453](https://github.com/facebook/react-native/commit/830b43145381e6e322569450affddba73f7dc2d1),
  [29dafa1a86](https://github.com/facebook/react-native/commit/29dafa1a8644f7a537499074df334bab8da4ad00),
  [7a5d5a4035](https://github.com/facebook/react-native/commit/7a5d5a40357bedfb24a01ff1160481656fda9554),
  [4cd685a1e0](https://github.com/facebook/react-native/commit/4cd685a1e0a2ae07df02702dbf4702e407773df5),
  [d326c86051](https://github.com/facebook/react-native/commit/d326c860519c5165c6e86fb4f3ce378ed055157c),
  [231c7a0304](https://github.com/facebook/react-native/commit/231c7a03043b9fb3c4bf81251ad099bab0ba05c2),
  [7d969a05de](https://github.com/facebook/react-native/commit/7d969a05de6a45543bc31a3b982828865bc57cdb),
  [ae517307e7](https://github.com/facebook/react-native/commit/ae517307e76d977f813e5b880f3b7f42a20f461d),
  [f587f8d51d](https://github.com/facebook/react-native/commit/f587f8d51dc57e6b9eb66edfbe58ee520a6cc568),
  [fbf0aed3ac](https://github.com/facebook/react-native/commit/fbf0aed3acc056b5fd069af75fcae14246439a48),
  [e9393f694d](https://github.com/facebook/react-native/commit/e9393f694d8f0d0190a3576fd65a65f747f8cce2), and
  [968c88d141](https://github.com/facebook/react-native/commit/968c88d1410eac5b793345bacce6052f518fda8f) by
  [@cpojer](https://github.com/cpojer), [@hramos](https://github.com/hramos),
  [@jeanlauliac](https://github.com/jeanlauliac), and
  [@rafeca](https://github.com/rafeca)
  )
- React is now v16.2.0, and it took react-test-renderer along with it; [now with
  more
  fragments!](https://reactjs.org/blog/2017/11/28/react-v16.2.0-fragment-support.html)
  🎉 ([c7f37074ac](https://github.com/facebook/react-native/commit/c7f37074ac89f7e568ca26a6bad3bdb02812c39f) and
  [cd938d731c](https://github.com/facebook/react-native/commit/cd938d731c7531a683c050cd829a543d145e3dc1) by
  [@bvaughn](https://github.com/bvaughn))
- Jest is now v21.3.0-beta.13
  ([16bbd908e7](https://github.com/facebook/react-native/commit/16bbd908e72577e7d109397916323a0eeffce8d4) and
  [ec2ea58e57](https://github.com/facebook/react-native/commit/ec2ea58e57872bfa077d9c9a5e1e8b253c6b37b3) by
  [@mjesun](https://github.com/mjesun))
- Flow is now v0.61.0, and there were a ton of Flow fixes/coverage improvements
  made ([914ae93336](https://github.com/facebook/react-native/commit/914ae9333678df4888e3c72898991c8430625cce),
  [eb0d6470e5](https://github.com/facebook/react-native/commit/eb0d6470e54663538610a70ab0bae9847eb33673),
  [c8e72bb8b8](https://github.com/facebook/react-native/commit/c8e72bb8b8317bcdcb4fe2ff85978c7db70f4461),
  [2d4bedba0f](https://github.com/facebook/react-native/commit/2d4bedba0f6a8f2cfe597a1044822eb635d5e243),
  [e0202e459f](https://github.com/facebook/react-native/commit/e0202e459fd0181db551d0025ef562d7998186b0),
  [2be3ae1ff2](https://github.com/facebook/react-native/commit/2be3ae1ff2441c0ee3f2b9255c23dc49ada852fe),
  [22a1419900](https://github.com/facebook/react-native/commit/22a14199000ea994f24f6fe387ea26647af3c128),
  [6ae0b344e5](https://github.com/facebook/react-native/commit/6ae0b344e5c221657287d1fc1511be520a6f6e58),
  [76a2ca4c9c](https://github.com/facebook/react-native/commit/76a2ca4c9c09c9bdf922154c28040138a44ae672),
  [3259353fce](https://github.com/facebook/react-native/commit/3259353fcec0dd9ea66de750a694c226f99f483d),
  [e6c1fb7212](https://github.com/facebook/react-native/commit/e6c1fb72128fb13436028c2df9cdccf6ccfccb67),
  [61d046be3c](https://github.com/facebook/react-native/commit/61d046be3c9b00f6a4d4f492d558a961a6d4210f),
  [820cfa1f3b](https://github.com/facebook/react-native/commit/820cfa1f3b79406e47cb873773cadafefe0effb1),
  [240039c6f2](https://github.com/facebook/react-native/commit/240039c6f2d8db700ebc15404b0acc2a49068249),
  [343c5a97a0](https://github.com/facebook/react-native/commit/343c5a97a013669745cf3938728539001d3076e6),
  [5f8d8e90c2](https://github.com/facebook/react-native/commit/5f8d8e90c2c43127b8a5d2fc5d18f16185c7a67e), and
  [da047966e4](https://github.com/facebook/react-native/commit/da047966e4c2064a48e02ff74830c99808d8194b) by
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
  ([a7d46ea970](https://github.com/facebook/react-native/commit/a7d46ea97012bdcc644e3397bbf60bd3cb37e9eb) by
  [@rsnara](https://github.com/rsnara))
- Split out docs to [their own
  repo](https://github.com/facebook/react-native-website/tree/master/docs) (and
  a few formatting fixes along the journey) 👋
  ([2d86618e7e](https://github.com/facebook/react-native/commit/2d86618e7ef477cdfc2ed510c7bc05d41dbfe972),
  [64d80b13db](https://github.com/facebook/react-native/commit/64d80b13db3dd28bb5d93cbedf511ae8f91e2127),
  [3362da421c](https://github.com/facebook/react-native/commit/3362da421ce919fc6f4f1bda29b59e2e3bfe02de),
  [75123c614b](https://github.com/facebook/react-native/commit/75123c614bb5a61c383cdc247230b3a76c76e14d), and
  [79e24ede40](https://github.com/facebook/react-native/commit/79e24ede40b2508aaa77b8ff3876d3dbf4cfe6d8) by
  [@hramos](https://github.com/hramos)).
- **TouchableHighlight** now has a default delayPressOut value of 100; it was
  also refactored a bit for style
  ([9a31fa5fd6](https://github.com/facebook/react-native/commit/9a31fa5fd62fa101b2a76c69b56248d7f5ba9876) by
  [@sahrens](https://github.com/sahrens))
- When in a dev build, more robustly validate arguments for native methods
  ([ea2e2c54cb](https://github.com/facebook/react-native/commit/ea2e2c54cb4d1a99b41aaa98eaf51696d34770dd) by
  [@mhorowitz](https://github.com/mhorowitz))
- On integration tests, report _all_ errors
  ([3bcb912786](https://github.com/facebook/react-native/commit/3bcb9127866ef60b3697553e98a3ae279d02290a) by
  [@sahrens](https://github.com/sahrens))
- Yoga has less technical debt, thanks to replacing _YGNodeList_ with vectors
  ([b08a912f11](https://github.com/facebook/react-native/commit/b08a912f11c729f3fe76700c6614f9e6165ae1a1) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Yoga is now cpp, compiled as _c++1y_
  ([d7ab9496bc](https://github.com/facebook/react-native/commit/d7ab9496bc95f7b720fd6db1ed503af1c461e84d) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Bundle segments are handled better and used more
  ([681278947e](https://github.com/facebook/react-native/commit/681278947eb4039a1d7a65f1edfeef25ae055a4f),
  [a47431ed74](https://github.com/facebook/react-native/commit/a47431ed74f0b7b2a03ca48e84f2243d08ef3bdd),
  [963c61d4d5](https://github.com/facebook/react-native/commit/963c61d4d546c94b689281ca1f5105ad050e10ff),
  [b9f21dc2be](https://github.com/facebook/react-native/commit/b9f21dc2be14cd51543e6b2d1e63a861e5f433d1),
  [f1258181ee](https://github.com/facebook/react-native/commit/f1258181eec84f73651d2fabd0d23764b8990ff8), and
  [1988ba1d79](https://github.com/facebook/react-native/commit/1988ba1d7967dca04376e7e631e8910e5e79a6a7) by
  [@fromcelticpark](https://github.com/fromcelticpark) and
  [@jeanlauliac](https://github.com/jeanlauliac))
- _packager-worker-for-buck_ has better tests
  ([7fd5aa84a1](https://github.com/facebook/react-native/commit/7fd5aa84a1ef1744d01e7e877183b1f004216d00) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- _RCTUIManager_ has less technical debt
  ([46be5bf71c](https://github.com/facebook/react-native/commit/46be5bf71c78d33cda5cb496c475dcfb8e229346),
  [60dc9bed00](https://github.com/facebook/react-native/commit/60dc9bed00cc13652752bf84f83c920ce66d5e39), and
  [21714fe197](https://github.com/facebook/react-native/commit/21714fe1979ccbd62d665f383625f4ece8cf888e) by
  [@shergin](https://github.com/shergin))
- Numerous bridge changes, especially around URL resolution
  ([e7bd0f056b](https://github.com/facebook/react-native/commit/e7bd0f056bf4edca1f0529d6eed03bbaaaca586a),
  [260e6d2355](https://github.com/facebook/react-native/commit/260e6d23554a8e7f1743263894c9ca9a0cfbf01e),
  [4894ac430d](https://github.com/facebook/react-native/commit/4894ac430d6df1118ce48f644fd8cf5bfce6344f),
  [b983de9c54](https://github.com/facebook/react-native/commit/b983de9c5460e24c95a9a67f02695cd1c5f31bc5),
  [b0193b098c](https://github.com/facebook/react-native/commit/b0193b098cdbd915bba90e1ab0b695ba44346f44),
  [ae5ef653cb](https://github.com/facebook/react-native/commit/ae5ef653cbc4c03fe5edb5d4b0002e38cbb6f458), and
  [1d6ce2311f](https://github.com/facebook/react-native/commit/1d6ce2311f6a51821b33c5473414d70c8bd34425) by
  [@fromcelticpark](https://github.com/fromcelticpark) and others)
- Various cleanup and refactoring
  ([053776338e](https://github.com/facebook/react-native/commit/053776338ea44c31f3671cb4502853da0c88e55a),
  [0984f29a32](https://github.com/facebook/react-native/commit/0984f29a320ce7e40e8bc2a6c78b080908fa1384),
  [6c70975689](https://github.com/facebook/react-native/commit/6c70975689d0f0839e6c2db9a9a25c3023f5be7b),
  [d950dc6a21](https://github.com/facebook/react-native/commit/d950dc6a21c5cc1e736993b2ecc16abae086389e),
  [70c359000a](https://github.com/facebook/react-native/commit/70c359000a2df091c3939f4c19db6024af992d43),
  [cfa2bbf2f6](https://github.com/facebook/react-native/commit/cfa2bbf2f692d0bc5600d7e369a9a91272930ca6), and
  [850efa8650](https://github.com/facebook/react-native/commit/850efa86508b19d800ff8cbdc725402c006db1a2) by
  [@bnham](https://github.com/bnham),
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), and others)
- Jest preprocessing now uses the AST from metro
  ([2ae255a6ea](https://github.com/facebook/react-native/commit/2ae255a6eaf820992bdf19799bb4403f3bbdcd5b) and
  [d5b59517c2](https://github.com/facebook/react-native/commit/d5b59517c274874d7ce21e5c26d28b42ae389723) by
  [@rafeca](https://github.com/rafeca))
- `renderApplication()` now supports async initial render
  ([1b22d49ae8](https://github.com/facebook/react-native/commit/1b22d49ae8945680dee4fd01e3fbb78b1e443e01) by
  [@bvaughn](https://github.com/bvaughn))
- Welcome [@lwinkyawmyat](https://github.com/lwinkyawmyat) to the React Native
  GitHub Issue Task Force
  ([4ebe76d559](https://github.com/facebook/react-native/commit/4ebe76d5598621160ffcf3ea8bc87c3ad1c1a2f8) by
  [@lwinkyawmyat](https://github.com/lwinkyawmyat))

#### Android exclusive changes

- Native components on Android register lazily rather than via ViewManager
  ([1b71e03932](https://github.com/facebook/react-native/commit/1b71e03932f44e212b297b2c1e02100b6de74b93))
- Android debug overlays (like **RedBox**, dev menu, loading) are no longer are
  system overlays; they're now part of the _currentActivity_
  ([d19afc73f5](https://github.com/facebook/react-native/commit/d19afc73f5048f81656d0b4424232ce6d69a6368) by
  [@kmagiera](https://github.com/kmagiera))

#### iOS exclusive changes

- Improve iOS's _accessibilityLabel_ performance by up to 20% 📈
  ([19b0a65c5e](https://github.com/facebook/react-native/commit/19b0a65c5ecc4f41fea98a1e752785d6dbb6ea05) by
  [@chendo](https://github.com/chendo))

### Fixed

- Fix `backgroundColor` on **TouchableHighlight**
  ([5a1171ebfa](https://github.com/facebook/react-native/commit/5a1171ebfaaedd9c7d5f1bfcf306049c3671a733) by
  [@sahrens](https://github.com/sahrens))
- Various corrections in messages, comments, and docblocks
  ([58c3bc4901](https://github.com/facebook/react-native/commit/58c3bc490143b8d7831a00289e2565f49f5389ef),
  [354e1cb508](https://github.com/facebook/react-native/commit/354e1cb5088a43fd4116504a34a65ca53c4de71b),
  [58edf024a1](https://github.com/facebook/react-native/commit/58edf024a1ed3a71ef04f124546ee97496b6502f),
  [b9e7006cc6](https://github.com/facebook/react-native/commit/b9e7006cc6dc2b0801ea0c776ba00cdea2204151),
  [d2f0abdf4e](https://github.com/facebook/react-native/commit/d2f0abdf4ea94fbb3e2a5c7fb53ff5d1cf6abede),
  [94cd9f5591](https://github.com/facebook/react-native/commit/94cd9f55915973355cdb63276b71f90df10281db),
  [8547b7e111](https://github.com/facebook/react-native/commit/8547b7e11163d545b7b99d4bdd063ef71129d62c),
  [44c16499fd](https://github.com/facebook/react-native/commit/44c16499fdc4665298f6c88b9ffee626fa1fc969),
  [c91d87213e](https://github.com/facebook/react-native/commit/c91d87213e6862019b9ef7df7c38551bd6d659fd),
  [85503a0612](https://github.com/facebook/react-native/commit/85503a0612b0c74b4d204e8748e9ed7010d838e4), and
  [5b83dbe25a](https://github.com/facebook/react-native/commit/5b83dbe25af151d183009006b1fe323b2658d025) by
  [@behrends](https://github.com/behrends),
  [@bvaughn](https://github.com/bvaughn),
  [@charpeni](https://github.com/charpeni),
  [@dsandmark](https://github.com/dsandmark),
  [@gusgard](https://github.com/gusgard),
  [@nkabrown](https://github.com/nkabrown),
  [@petterh](https://github.com/petterh), [@solon](https://github.com/solon),
  [@swashcap](https://github.com/swashcap), and others)
- Various dev doc and project doc fixes for correctness and completeness
  ([92c0980540](https://github.com/facebook/react-native/commit/92c0980540dde0053bad05fae6414cf8275a71b1),
  [3c9092acf3](https://github.com/facebook/react-native/commit/3c9092acf39ecdb7c137a3cb0d4282694e95cbf5),
  [e906525e84](https://github.com/facebook/react-native/commit/e906525e84f69a98de4d06ed1ec4c43d8589e350),
  [60828566a7](https://github.com/facebook/react-native/commit/60828566a759dc579dbae1d76a8426e1e479166e),
  [c49b97c4ef](https://github.com/facebook/react-native/commit/c49b97c4ef65a6351af437ef28033cb31ea0446f),
  [45ed142596](https://github.com/facebook/react-native/commit/45ed14259677cff4cbd133e705ec4f0ec84bc216),
  [cb6ec7c321](https://github.com/facebook/react-native/commit/cb6ec7c32141ef5bdde837d7f9d71b7adb83b751),
  [9ec9567390](https://github.com/facebook/react-native/commit/9ec95673909beac7798f589e0e9821b4225f8fa9),
  [e5a4ea97d9](https://github.com/facebook/react-native/commit/e5a4ea97d9e1b13509a3f36d0b469a6a88a90dc4),
  [c544c0d2dc](https://github.com/facebook/react-native/commit/c544c0d2dca1d0e9f0b2a5565e03676ad71a36f5),
  [33d5e5bd5a](https://github.com/facebook/react-native/commit/33d5e5bd5a5365ab712a2b9d33f33cbec305e128),
  [95dac8db60](https://github.com/facebook/react-native/commit/95dac8db601ba48fe03da52e1adbdef0cac23546),
  [6e1db1f1ee](https://github.com/facebook/react-native/commit/6e1db1f1ee263c3a8b68c3e1584e79ae86d5be86),
  [e11d496e9d](https://github.com/facebook/react-native/commit/e11d496e9d907abb5bf58a8300c5a8f85aa03bbb),
  [6da897945f](https://github.com/facebook/react-native/commit/6da897945f823728dbc82dd9f01c672354b1e76d),
  [0ff576081b](https://github.com/facebook/react-native/commit/0ff576081b156ea26c4e7886f7266f3e4d8e3d5e),
  [1ee64ccb8a](https://github.com/facebook/react-native/commit/1ee64ccb8a257210be3a74fb9b0adc83f2a8bb2b),
  [3aa38564f7](https://github.com/facebook/react-native/commit/3aa38564f7b91c8588c8484140bc4221d50d55e0),
  [6b26971a56](https://github.com/facebook/react-native/commit/6b26971a56fdd919d11cc338893d0b7a3f7a45ba), and
  [de3976a486](https://github.com/facebook/react-native/commit/de3976a48655a248a2417fcf2d3a511be02e1996) by
  [@adrianomelo](https://github.com/adrianomelo),
  [@blargity](https://github.com/blargity),
  [@charpeni](https://github.com/charpeni),
  [@garlic-rice-with-butter](https://github.com/garlic-rice-with-butter),
  [@gwmccull](https://github.com/gwmccull),
  [@harikrishnanp](https://github.com/harikrishnanp),
  [@hramos](https://github.com/hramos),
  [@johnthewilson](https://github.com/johnthewilson),
  [@jsdario](https://github.com/jsdario), [@kelset](https://github.com/kelset),
  [@patrickkempff](https://github.com/patrickkempff),
  [@ryanml](https://github.com/ryanml),
  [@tiagomoraismorgado88](https://github.com/tiagomoraismorgado88),
  [@timwangdev](https://github.com/timwangdev), and others)
- Stop `RCTRefreshControl` from jumping around
  ([2e1707d0e6](https://github.com/facebook/react-native/commit/2e1707d0e600a30057511390dd87c18c00f19a59) by
  [@sophiebits](https://github.com/sophiebits))
- Fix a race condition in the animation module
  ([515eb0e801](https://github.com/facebook/react-native/commit/515eb0e8012a7a8f085a8e410c6c694011fd8c1d) by
  [@mhorowitz](https://github.com/mhorowitz))
- Fix Windows local-cli's to not wrongfully identify as globally installed
  ([ca106043fc](https://github.com/facebook/react-native/commit/ca106043fc655a1c51332aedf9b001a512269550) by
  [@sballew](https://github.com/sballew))
- Fix Jest mocks for **NetInfo**, **Dimensions**, and **ScrollView** modules
  ([7fb3a9229d](https://github.com/facebook/react-native/commit/7fb3a9229df52bd45076470d059f245a8147cd2a),
  [11a2a35c63](https://github.com/facebook/react-native/commit/11a2a35c63ae68de46482f5cd25271f8b0fb5ad4), and
  [0c8a3e4f79](https://github.com/facebook/react-native/commit/0c8a3e4f797563c99e988ec2f42ec2a618a8b196) by
  [@alvaromb](https://github.com/alvaromb),
  [@timwangdev](https://github.com/timwangdev), and
  [@uk-ar](https://github.com/uk-ar))
- packager-worker-for-buck: `transformCommand`: add missing test
  ([73a01be9bc](https://github.com/facebook/react-native/commit/73a01be9bcd9059f3172987fd30d8b6dc0125759) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- Fixed issue where CLI wasn't following the config value for postMinifyProcess
  when its running with `dev=false`
  ([6d92046c56](https://github.com/facebook/react-native/commit/6d92046c56794a6a62bc07598545a23a7b53cdc0) by
  [@rafeca](https://github.com/rafeca))
- Fix asset resolver url handling
  ([28d5d6baf1](https://github.com/facebook/react-native/commit/28d5d6baf1e6ac52e8672a653f56c3898e4e11d2) by
  [@fkgozali](https://github.com/fkgozali))
- Fix crash when destroying catalyst
  ([f1015664e9](https://github.com/facebook/react-native/commit/f1015664e92f02c33417a591a2438db7c0cd3811))
- You can now `justifyContent` while you're `minWidth`ing and `marginLeft`ing;
  before the justification wasn't honored
  ([f5becebc07](https://github.com/facebook/react-native/commit/f5becebc0710d5bb875bb9c0a2d3809a00f62605) by
  [@woehrl01](https://github.com/woehrl01))
- `marginLeft: auto` and `alignItem: stretch` now play nicely together; before
  the width and height ended up incorrect
  ([5f99b1a55f](https://github.com/facebook/react-native/commit/5f99b1a55f4002c105a7005cabf720aad422b628) by
  [@woehrl01](https://github.com/woehrl01))
- Fix assertion preventing YGNodeLayoutGet\* with YGEdgeEnd
  ([a383b8ca05](https://github.com/facebook/react-native/commit/a383b8ca0545ba3704a51a78972107119f5683c0) by
  [@justjake](https://github.com/justjake))
- Fix shrinking in non-strech alignments
  ([1d62848535](https://github.com/facebook/react-native/commit/1d6284853514be4da2b68d45732386eb81cc4253) by
  [@woehrl01](https://github.com/woehrl01))
- Correctly calculate min/max percentage constraints
  ([4fdaf2de98](https://github.com/facebook/react-native/commit/4fdaf2de989c039a62681cc1f7a8407ec32b593e) by
  [@woehrl01](https://github.com/woehrl01))
- When running `react-native-git-upgrade`, don't execute git's hooks
  ([0182086350](https://github.com/facebook/react-native/commit/018208635069311c1a7c7776c6f359f7ded45362) by
  [@adrienthiery](https://github.com/adrienthiery))
- When running `react-native-git-upgrade` and failing with a signal, return that
  to the terminal
  ([b9a5862f67](https://github.com/facebook/react-native/commit/b9a5862f670f52d48f1d3789c3f08ec139368da4) by
  [@mateusz-](https://github.com/mateusz-))
- In **KeyboardAvoidingView**, don't mistakenly try to layout when a hardware
  keyboard changes
  ([ad4450ac13](https://github.com/facebook/react-native/commit/ad4450ac1364710f052a927ceda7ae353440f682) by
  [@koenpunt](https://github.com/koenpunt))
- Don't endlessly collect websockets when not connected to the packager (dev
  memory leak)
  ([1e1e491246](https://github.com/facebook/react-native/commit/1e1e49124678f447d980bb22891d25db60fa83b3) by
  [@mmmulani](https://github.com/mmmulani))
- Fixed a bug in the sample project random `selection` prop that made it
  not-so-random
  ([766f020e68](https://github.com/facebook/react-native/commit/766f020e68abfc121ea6a9f92e0640368d69dae7) by
  [@rozele](https://github.com/rozele))

#### Android exclusive fixes

- Explicitly `#define isnan __builtin_isnan` for Android _clang-5_ to mimic
  **gcc**'s default behavior
  ([f8fe6b0c70](https://github.com/facebook/react-native/commit/f8fe6b0c70d1b7b626d05d9675c16b2f89339e8c))
- Correctly update **NetInfo** on Android even if connection types change while
  the app is in the background
  ([e6f542d620](https://github.com/facebook/react-native/commit/e6f542d62037e9830c0ae5749a32874c44cf2334) by
  [@berickson1](https://github.com/berickson1))
- Direction-aware borders now work with Android APIs >= 17
  ([7170543e80](https://github.com/facebook/react-native/commit/7170543e8012250b7643a960b54cce7fd6d3a1e9) by
  [@rsnara](https://github.com/rsnara))
- Don't throw _BadTokenException_ and _IllegalArgmentException_ when showing or
  dismissing Modal on Android
  ([e57a43b97a](https://github.com/facebook/react-native/commit/e57a43b97ad24dc5b993753a45aa575b2a757b4f))
- Fix Android crash when blurRadius is between 0 and 1
  ([dc01eff72d](https://github.com/facebook/react-native/commit/dc01eff72d23e1dd3f7ecf30859992ee3bf7c664) by
  [@jamesreggio](https://github.com/jamesreggio))
- Fix `borderRadius` with Android API level < 18
  ([5aa1fb3ff3](https://github.com/facebook/react-native/commit/5aa1fb3ff326a429e33a443576da866f2a63c20c) and
  [ca7fe72c31](https://github.com/facebook/react-native/commit/ca7fe72c31fd7c7cbe4734118019f5808235560e) by
  [@rsnara](https://github.com/rsnara))
- Make Android `lineHeight` behavior match iOS's 📏
  ([3f1b021506](https://github.com/facebook/react-native/commit/3f1b0215060e4c27c286359cc90f3b2189956c4e))
- Fixed autoscroll to cursor on Android **TextInput**
  ([0bef872f3f](https://github.com/facebook/react-native/commit/0bef872f3fc8b1cd78c574d03eacc886bef4e239) by
  [@shergin](https://github.com/shergin))
- Fix logging unpacking time on Android when it happens concurrently with eager
  unpacking ([028b64bcd3](https://github.com/facebook/react-native/commit/028b64bcd36c1c8dd76c0de95eeff80cf660aa23)
  by [@alexeylang](https://github.com/alexeylang))
- Prevent an Android crash when **TextInput** has `selectionColor` defined but
  there is no drawable cursor
  ([1e18d907bf](https://github.com/facebook/react-native/commit/1e18d907bfb8cc5f4f2e1a1ede0dd98aec40ab11) by
  [@gpeal](https://github.com/gpeal))

#### iOS exclusive fixes

- Don't have Xcode warnings for _YGDefaultLog_ in newly created projects
  ([72e762d4bc](https://github.com/facebook/react-native/commit/72e762d4bca8d00cc2c73c390a654ae6143731bd) by
  [@woehrl01](https://github.com/woehrl01))
- iOS _RCTEventEmitter_ uses a `double` for count, not _NSInteger_
  ([eaa84997ce](https://github.com/facebook/react-native/commit/eaa84997cedc8dc4d46308e2217d2b094a51ed02))
- Fix `isNuclideDebuggingAvailable` on iOS
  ([59c3e33f63](https://github.com/facebook/react-native/commit/59c3e33f637d11e33204e8a912e98459ffad7fab))
- iOS ScrollView is now rendered correctly with RefreshControl
  ([75d62bf0a8](https://github.com/facebook/react-native/commit/75d62bf0a802b91a979d03ef497e84c3179e7767) by
  [@vonovak](https://github.com/vonovak))
- Fix a crash when keyboard is visible and bridge reload happens on iOS
  ([d9c658566a](https://github.com/facebook/react-native/commit/d9c658566a14ce8767d87435264997aa18dd08e4) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- **RedBox** now appears beneath the status bar on iOS
  ([33cefc1760](https://github.com/facebook/react-native/commit/33cefc176096e03a4b3c3130a70abfabe9d40f38) by
  [@adamjernst](https://github.com/adamjernst))
- Fractional border widths on iOS are now the right size, honoring insets
  ([15179f1798](https://github.com/facebook/react-native/commit/15179f1798b277c1836441fcf7f3b7f0bd5a4636) by
  [@Nikita2k](https://github.com/Nikita2k))
- Implement `requiresMainQueueSetup` in _RCTTVNavigationEventEmitter_ to satisfy
  Xcode warning
  ([ee3532b5c2](https://github.com/facebook/react-native/commit/ee3532b5c266d5ee7fb12920cb611a41b1daf750) by
  [@charpeni](https://github.com/charpeni))
- Support the iPhone X in the sample project's header
  ([ad4b124aa1](https://github.com/facebook/react-native/commit/ad4b124aa117483b4a0ec9dfa145b8e9a17f06c6) by
  [@vincentriemer](https://github.com/vincentriemer))
- `testID` works on **TabBarItem** on iOS
  ([e19d9dec9b](https://github.com/facebook/react-native/commit/e19d9dec9b3b257b5db3dc77ed8b95b93570f1e3))
- On iOS, don't error on the first live-reload of large codebases because of too
  little wait time
  ([b6f1a6085f](https://github.com/facebook/react-native/commit/b6f1a6085f7470c16ae8850e7da8f4f9ae5c23ee) by
  [@lelandrichardson](https://github.com/lelandrichardson))
- Prevent iOS crash on receiving bad unicode in _XMLHTTPRequest_
  ([1c04ceeb4b](https://github.com/facebook/react-native/commit/1c04ceeb4ba954eee7ab34fc5b6c660d9772d9f6) by
  [@cdlewis](https://github.com/cdlewis))
- Define `pod_target_xcconfig` for PrivateDatabase
  ([38b96cd7bb](https://github.com/facebook/react-native/commit/38b96cd7bb391f64066a6c91daa4173db1f33445) by
  [@ide](https://github.com/ide))
- Fixed podspec include/excludes around tvOS
  ([ba1d7e92e4](https://github.com/facebook/react-native/commit/ba1d7e92e4f251b90a96be192214b5015cf6244e) by
  [@yygene](https://github.com/yygene))
- Don't spam the logs for iOS when receiving `ECONNREFUSED` on connecting to
  packager ([b1701ccaef](https://github.com/facebook/react-native/commit/b1701ccaefa0c8cbb6d820b2ad07e0d911027d7c)
  and [ff3dc2ed19](https://github.com/facebook/react-native/commit/ff3dc2ed19cdd4137ae8092599b16c09d4e2c711) by
  [@adamjernst](https://github.com/adamjernst))
- Don't crash Systrace when debugging JS remotely on iOS
  ([e8eec24706](https://github.com/facebook/react-native/commit/e8eec24706e792314ee574bbf7f7c0066c4f3a7a) by
  [@alexeylang](https://github.com/alexeylang))

### Removed

- Removing `reactBridgeDidFinishTransaction` from _RCTScrollView_
  ([a255204e3e](https://github.com/facebook/react-native/commit/a255204e3e7fddefd2d7b0de224101768757ca7a) by
  [@shergin](https://github.com/shergin))
- Removing inherited background color optimization from _RCTText_ to reduce code
  complexity – please give feedback if you find performance differences!
  ([8c8944c10f](https://github.com/facebook/react-native/commit/8c8944c10fb7dc30ea99657225f25ea438cf6e14) by
  [@shergin](https://github.com/shergin))

### Other

Below is a list of the remaining, low-level changes that made it into this
release of React Native.

- Foundational work for a new justifyContent value **space-evenly**
  ([1050e0b476](https://github.com/facebook/react-native/commit/1050e0b47611602b758f73d99f51a1dd5ceabade) by
  [@woehrl01](https://github.com/woehrl01))
- Add Systrace-based telemetry to Hermes GC
  ([05e862d48d](https://github.com/facebook/react-native/commit/05e862d48d363a8af765b2f0283569419dbd2e5c))
- Unify Systrace native hook argument passing
  ([52e3ae9063](https://github.com/facebook/react-native/commit/52e3ae9063705bac53bad99ffe23976c29c8f1b2) by
  [@amnn](https://github.com/amnn))
- Use different symbols for SystraceSection depending on `WITH_FBYSTRACE`
  ([03956c4ecf](https://github.com/facebook/react-native/commit/03956c4ecfda381396336f725ea1c12d913df17d))
- Don't set global.performance to undefined if it was initialized already
  ([dfebcb70a5](https://github.com/facebook/react-native/commit/dfebcb70a5c948db94d1cd580bbcaa0aaa702349) by
  [@alexeylang](https://github.com/alexeylang))
- Autofixes for migrating to Buck's source-only ABI feature
  ([801cbdb047](https://github.com/facebook/react-native/commit/801cbdb04788403cee022dec688136540da36fc5) by
  [@jkeljo](https://github.com/jkeljo))
- Add remote API to uninstall the global error handler in RN
  ([1d16923063](https://github.com/facebook/react-native/commit/1d16923063940606dda89de94a83cbdf5f98e1f1))
- Add _RCTLibraryPathForURL_ in _RCTUtil_
  ([2fecbf6171](https://github.com/facebook/react-native/commit/2fecbf61711f610124fc2453a79120932024f613))
- Fix sections that come from React Fiber
  ([1f40c95076](https://github.com/facebook/react-native/commit/1f40c95076297258a4194fd9c1b5af7002187c99) by
  [@alexeylang](https://github.com/alexeylang))
- Fix boolean conversion in sync RN method calls.
  ([dd888d3346](https://github.com/facebook/react-native/commit/dd888d3346ef9477eae2cd2d29cef867467cb503))
- Fix `embeddedBundleURL` update situation
  ([d1fc8ef3a3](https://github.com/facebook/react-native/commit/d1fc8ef3a3cb3590b9cff4d1b3cc5d440b52ec8c))
- Remove `android_react_native_perf.use_separate_ui_bg_thread` experiment.
  ([4f886a29a1](https://github.com/facebook/react-native/commit/4f886a29a1234c967deae2354bbc5092e0e6595e))
- ScrollView related files were moved to dedicated folder
  ([098a63a1ce](https://github.com/facebook/react-native/commit/098a63a1cee1196a2f3eb5135eeb8fe59e7e8272) by
  [@shergin](https://github.com/shergin))
- move page registration logic in to jsinspector
  ([bef7967f9a](https://github.com/facebook/react-native/commit/bef7967f9a485dc136d2cb32f552b2199ae3e2b8) by
  [@bnham](https://github.com/bnham))
- Type global hooks as function pointers
  ([eca51eb46a](https://github.com/facebook/react-native/commit/eca51eb46a47112c8933d0a3b932f59008cadc78) by
  [@johnislarry](https://github.com/johnislarry))
- `std::string` to `const char*`
  ([b952365ba6](https://github.com/facebook/react-native/commit/b952365ba6bd86f0e80a24aedec1f447cb3ec566) by
  [@johnislarry](https://github.com/johnislarry))
- Allow extending props supported by native animations
  ([71751e9cc7](https://github.com/facebook/react-native/commit/71751e9cc7c67306ca038c5b254e6e81fe0aff1b) by
  [@andrewimm](https://github.com/andrewimm))
- Meyers singleton jsc error extractor
  ([434f432d5d](https://github.com/facebook/react-native/commit/434f432d5d5ea2756c1adac8b1c36e82e60a2b13) by
  [@johnislarry](https://github.com/johnislarry))
- Do not overwrite the same text in **TextInput**
  ([29f3f55298](https://github.com/facebook/react-native/commit/29f3f5529827579101f0d8bd6afe72f1cb0caeca))
- Renaming _uiManagerWillFlushUIBlocks_ -> _uiManagerWillPerformMounting_
  ([0a8721c340](https://github.com/facebook/react-native/commit/0a8721c340480a972bb597cacdbddd9eb2015716) by
  [@shergin](https://github.com/shergin))
- Skylarkify flags macros.
  ([ed2bfcb35a](https://github.com/facebook/react-native/commit/ed2bfcb35a2756eb700882ab8e21b6b273efa80a) by
  [@ttsugriy](https://github.com/ttsugriy))
- Skylarkify `config_utils_defs` macros.
  ([88f6f69152](https://github.com/facebook/react-native/commit/88f6f69152e4b68609f28e80ee70705969529af8) by
  [@ttsugriy](https://github.com/ttsugriy))
- Round size geometry for Button and RichText components.
  ([4034febb7e](https://github.com/facebook/react-native/commit/4034febb7ef9d9daa894a75b038226af74026163) by
  [@iaroslav-pavlov](https://github.com/iaroslav-pavlov)
- Temporarily patched Map/Set non-extensible check into RN dev renderer
  ([a99f0d6100](https://github.com/facebook/react-native/commit/a99f0d6100c9779f5f6df6008af54c06113355f6) by
  [@bvaughn](https://github.com/bvaughn))
- Run buildifier over all BUCK files
  ([d674d48a7b](https://github.com/facebook/react-native/commit/d674d48a7b9b71169af59ceb886529371c26a2e5) by
  [@zertosh](https://github.com/zertosh))
- Pass `scriptURL` to _RCTTestRunner_
  ([266ab7a006](https://github.com/facebook/react-native/commit/266ab7a0061c11c4da7ccde9e0d461c0d7331563))
- Make _RCTNativeModule::invokeInner_ explicitely return `folly::none` in case
  of error ([0ac5a5230c](https://github.com/facebook/react-native/commit/0ac5a5230c4b5dd44db6a8dd7bb7752aff64d71c)
  by [@fromcelticpark](https://github.com/fromcelticpark))
- Make _RCTPackagerConnection_ a singleton
  ([9180d4eb82](https://github.com/facebook/react-native/commit/9180d4eb82fb70a0fd396b15660c2ac6770183c9) by
  [@adamjernst](https://github.com/adamjernst))
- Register split segment paths with _RAMBundleRegistry_
  ([cff0d8e0e5](https://github.com/facebook/react-native/commit/cff0d8e0e599d1ab21b36779b41fbb26512874aa) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- check if listener is still in the set before calling `onHostResume`
  ([ad89ea7b50](https://github.com/facebook/react-native/commit/ad89ea7b5046c2cf9ca1cba88c387eb1db8dc042))
- export _SeparatorsObj_ type for re-use in **ListItem**s etc.
  ([c6fe101cdc](https://github.com/facebook/react-native/commit/c6fe101cdcc0b8d640a86108d8a76f7292b5f799) by
  [@sahrens](https://github.com/sahrens))
- Do not mark node as dirty if, new and old values are undefined
  ([41da6e3128](https://github.com/facebook/react-native/commit/41da6e31284d46bb1dd2053c3c3100c075ace019) by
  [@woehrl01](https://github.com/woehrl01))
- Remove _RAMBundleRegistry_ subclasses
  ([6ecae73fe5](https://github.com/facebook/react-native/commit/6ecae73fe5915863c27ac7e407f5b151fd0c5fc3) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- Fix `minimumViewTime` in _ViewabilityHelper_
  ([d19d137cc1](https://github.com/facebook/react-native/commit/d19d137cc18f10957b5ac64ac727d15fde57f018))

[0.56]: https://github.com/facebook/react-native/compare/0.55-stable...0.56-stable
[0.55]: https://github.com/facebook/react-native/compare/0.54-stable...0.55-stable
[0.54]: https://github.com/facebook/react-native/compare/0.53-stable...0.54-stable
[0.53]: https://github.com/facebook/react-native/compare/0.52-stable...0.53-stable
[0.52.0]: https://github.com/facebook/react-native/compare/0.51-stable...0.52-stable
