This changelog is based on facebook/master.  Initial commit:  4ae2de211ee8435f1dfc6f2816c21d34ade0c1d7


## [f4815fbad3da368bead34c3b1c1391a83c983aae.0]

### Breaking

- [INTERNAL] Upgrade to Jest 26 ([1740233](https://github.com/facebook/react-native/commit/1740233) by [@cpojer](https://github.com/cpojer))
- [INTERMAL] Upgrade to Yargs 15 ([21d7a35](https://github.com/facebook/react-native/commit/21d7a35) by [@cpojer](https://github.com/cpojer))


#### Android specific



#### iOS specific



### Added

- Clarified the boundaries in error message of scrollToIndex ([78d2b3c](https://github.com/facebook/react-native/commit/78d2b3c) by [@sasurau4](https://github.com/sasurau4))
- Changelog: [General] [Added] - Add warning when scrollRef does not have a scrollTo method ([7f2515e](https://github.com/facebook/react-native/commit/7f2515e) by [@kacieb](https://github.com/kacieb))
- Differ: fix TinyMap to prevent possible crashes in `find()` and `begin()`, and prevent erased elements from being iterated over ([bb5d043](https://github.com/facebook/react-native/commit/bb5d043) by [@JoshuaGross](https://github.com/JoshuaGross))
- Changelog: [General] [Added] - Modified `renderApplication` to forward `initialProps` to `WrapperComponent` ([4f5a092](https://github.com/facebook/react-native/commit/4f5a092) by [@rubennorte](https://github.com/rubennorte))

#### Android specific

- Move DevSettingsActivity from main to debug ([d8e6c45](https://github.com/facebook/react-native/commit/d8e6c45) by [@invalid-email-address](https://github.com/invalid-email-address))
- Allow passing partial contentOffset to ScrollView on Android ([0348953](https://github.com/facebook/react-native/commit/0348953) by [@janicduplessis](https://github.com/janicduplessis))

#### iOS specific

- Changelog: [Added] [iOS] Added hostname to loading banner. ([9699933](https://github.com/facebook/react-native/commit/9699933) by [@rickhanlonii](https://github.com/rickhanlonii))
- Changelog: [Added] [iOS] Updated loading banner messages and color ([3729fe8](https://github.com/facebook/react-native/commit/3729fe8) by [@rickhanlonii](https://github.com/rickhanlonii))

### Changed

- Moves ART android files from RN to internal react shell. ([423b55b](https://github.com/facebook/react-native/commit/423b55b))
- Summary: Changelog: [Changed][General] Update react-native-community/eslint-config to 1.1.0, adding the new color rule ([780f06c](https://github.com/facebook/react-native/commit/780f06c) by [@TheSavior](https://github.com/TheSavior))
- Migrated `virtualizedList` legacy context to `React.Context`. ([7bd694f](https://github.com/facebook/react-native/commit/7bd694f) by [@yungsters](https://github.com/yungsters))

#### Android specific

- Make CatalystInstance.getNativeModule nullable ([1cef72a](https://github.com/facebook/react-native/commit/1cef72a) by [@RSNara](https://github.com/RSNara))
- Internal change to make `PlatformConstants` use the same method to determine `ServerHost` as other code paths ([d20ac69](https://github.com/facebook/react-native/commit/d20ac69) by [@ide](https://github.com/ide))

#### iOS specific



### Deprecated



#### Android specific



#### iOS specific

- iOS: Animated image should animate at the same speed regardless of framerate ([b0d0e51](https://github.com/facebook/react-native/commit/b0d0e51) by [@p-sun](https://github.com/p-sun))

### Removed



#### Android specific



#### iOS specific



### Fixed

- Fix Touchable{Opacity,Bounce,Highlight} being exported as `any` (Flow) ([de7f69a](https://github.com/facebook/react-native/commit/de7f69a) by [@draperunner](https://github.com/draperunner))

#### Android specific

- Calculating view position within the window in split-screen mode ([b020e7c](https://github.com/facebook/react-native/commit/b020e7c))
- Check if NativeModules returned from CatalystInstanceImpl.getNativeModule are null before using them. ([9263eb5](https://github.com/facebook/react-native/commit/9263eb5) by [@RSNara](https://github.com/RSNara))
- TurboModule cleanup ([e171c2b](https://github.com/facebook/react-native/commit/e171c2b) by [@RSNara](https://github.com/RSNara))

#### iOS specific

- Fix refreshControl messes up navigationBar largeTitles ([702ff6d](https://github.com/facebook/react-native/commit/702ff6d) by [@yogevbd](https://github.com/yogevbd))
- Search en0 through en8 for the Metro Bundler's IP address when generating iOS debug builds ([b2b23a2](https://github.com/facebook/react-native/commit/b2b23a2))
- TurboModule cleanup ([00b3cbf](https://github.com/facebook/react-native/commit/00b3cbf) by [@RSNara](https://github.com/RSNara))
- Changelog: [Fixed] [iOS] Do not update loading banner message while hiding ([131c497](https://github.com/facebook/react-native/commit/131c497) by [@rickhanlonii](https://github.com/rickhanlonii))
- Changelog: [Fixed] [iOS] Delay loading banner message to prevent flashing messages ([2b771b0](https://github.com/facebook/react-native/commit/2b771b0) by [@rickhanlonii](https://github.com/rickhanlonii))
- Changelog: [Fixed] [iOS] Cap loading bar percentage at 100% ([e27542b](https://github.com/facebook/react-native/commit/e27542b) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix duration calculation for RCTUIImageViewAnimated ([12f8b25](https://github.com/facebook/react-native/commit/12f8b25))
- Changelog: [iOS][Fixed] Update podfile for RNTester ([c25911b](https://github.com/facebook/react-native/commit/c25911b) by [@ejanzer](https://github.com/ejanzer))
- Changelog: [iOS] [Fixed] - Fix module lookup race condition on bridge invalidation. ([8ad8107](https://github.com/facebook/react-native/commit/8ad8107) by [@fkgozali](https://github.com/fkgozali))
- Fixes TextInput shaking when typing Chinese ([9cdc19a](https://github.com/facebook/react-native/commit/9cdc19a) by [@zhongwuzw](https://github.com/zhongwuzw))

### Security



#### Android specific



#### iOS specific



### Unknown

- Fix image instrumentation internal lifecycle ([e3e9008](https://github.com/facebook/react-native/commit/e3e9008) by [@p-sun](https://github.com/p-sun))
- Changelog: [General] [iOS] Speed up loading banner animations ([3fb37b4](https://github.com/facebook/react-native/commit/3fb37b4) by [@rickhanlonii](https://github.com/rickhanlonii))
- Guard all debug logs behind an MC ([97bc084](https://github.com/facebook/react-native/commit/97bc084) by [@RSNara](https://github.com/RSNara))
- Daily `arc lint --take GOOGLEJAVAFORMAT` ([673cbb3](https://github.com/facebook/react-native/commit/673cbb3))
- Changelog: [General] [iOS] Shrink loading bar down to not cover safe area. ([f0dfd35](https://github.com/facebook/react-native/commit/f0dfd35) by [@rickhanlonii](https://github.com/rickhanlonii))
- Update native module specs ([edfd965](https://github.com/facebook/react-native/commit/edfd965) by [@ejanzer](https://github.com/ejanzer))
- Cleanup unused dependencies ([530dffa](https://github.com/facebook/react-native/commit/530dffa) by [@cpojer](https://github.com/cpojer))

#### Android Unknown

- Smoother scrolling in ScrollView, HorizontalScrollView ([10314fe](https://github.com/facebook/react-native/commit/10314fe) by [@JoshuaGross](https://github.com/JoshuaGross))
- changelog: [Android] Fix measureLayout function for VirtualTexts ([5c48c94](https://github.com/facebook/react-native/commit/5c48c94) by [@mdvacca](https://github.com/mdvacca))

#### iOS Unknown



