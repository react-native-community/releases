# Changelog

## [0.56]

Welcome to the July 2018 release of React Native!
Over 53 contributors made [768 commits](https://github.com/facebook/react-native/compare/0.55-stable...0.56-stable) since March - and we are extremely grateful to every single one of you.

As you'll see in a second, this new version has some important **breaking changes** that required a lot of extra efforts to bring to a stable 0.56. This was the main reason behind skipping June from the monthly release cycle, but looking forward we are planning on going back to do a rollout every month.

### Highlights

- React Native now uses **Babel 7**.
  When upgrading to 0.56, make sure to bump your `babel-preset-react-native` `package.json` dependency to `^5.0.1` or newer.
  If you have a library, please make sure that you update the preset there too as Babel 7 is not backwards compatible.
  Once 0.56 reaches stable, we will move the `babel-preset-react-native@latest` tag to `5.0.1`.
- **Node 8** is now the minimum required version. Trailing commas are now allowed.
- **iOS 9** is now the minimum required version.
  Any device that can run iOS 8, can upgrade to iOS 9. Developers who support iOS 8 in their apps may continue doing so as this is a Xcode-level setting (`IPHONEOS_DEPLOYMENT_TARGET`).
- **Xcode 9** is now the minimum required version. We recommend using Xcode 9.4 as that is what we use to run our tests.
- `WebView` will only load http(s) URLs by default, and geolocation is disabled by default.
- Added Flow types for several components.
  We're migrating away from PropTypes and runtime checks and instead relying on **Flow**. You'll notice many improvements related to Flow in this release.
- Fix project settings warnings on newer Xcode versions, remove unneccessary console logging.
- Prettier files!
- Lots of bug fixes.

Heads-up: the Facebook internal team is currently working on a rewrite of some core architecture pieces. This is a **work in progress** and we do not expect it to be ready for use in open source quite yet, but we felt the need to let you know what those commits mentioning Fabric are about.

---

### Added: new features

- Update `babelHelpers` with Babel 7 support - https://github.com/facebook/react-native/commit/fbd1beaf666be9c09a380784f8c0cd34ba083a6b
- `FlatList` is now Strict Mode compliant - https://github.com/facebook/react-native/commit/a90d0e3614c467c33cf85bcbe65be71903d5aecc
- Enable `?.` optional chaining operator plugins - https://github.com/facebook/react-native/commit/aa6f394c4236e5a4998c3be8ed61ec1bab950775
- Support `flexWrap: 'wrap-reverse'` - https://github.com/facebook/react-native/commit/d69e55060fd76d91eccc45905d250a9fce4b2c49
- Add prop type `accessibilityTraits` to `Text` - https://github.com/facebook/react-native/commit/654435d1ed9e584e65fff601e1fa50591e042664
- Add devDependencies support for templates - https://github.com/facebook/react-native/commit/c4ab03a18e75e6ed55444b5d86f3ceee435b9a78
- Add support for springDamping in `SpringInterpolator` - https://github.com/facebook/react-native/commit/1dde989919d2c272ca7fcaa5c4b2d9ee02c490a0

#### Android specific additions

- Add support for build.gradle with CRLF for use with `react-native link` - https://github.com/facebook/react-native/commit/843cfc3b202433aad9a236b1b623da7c45e1ac15
- Add a way to dismiss PopupMeny elements - https://github.com/facebook/react-native/commit/353c070be9e9a5528d2098db4df3f0dc02d758a9
- Implement `Image.defaultSource` - https://github.com/facebook/react-native/commit/b0fa3228a77d89d6736da6fcae5dd32f74f3052c
- Support Image resizeMode=repeat - https://github.com/facebook/react-native/commit/0459e4ffaadb161598ce1a5b14c08d49a9257c9c
- Yoga: Add back deprecated `getParent` methods for non-breaking API change - https://github.com/facebook/react-native/commit/c3c5c3cbce24a31f73ae6339e377ee76ca6401ad

#### iOS specific additions

- Run tests using Xcode 9.4 and iOS 11.4 - https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d
- Add support for Homebrew-installed Node - https://github.com/facebook/react-native/commit/0964135a178b459e06b44a49a4ecb0dd6c5bec9b
- Add textTransform style support - https://github.com/facebook/react-native/commit/8621d4b79731e13a0c6e397abd93c193c6219000
- Add docs for Swift usage to `RCTBridgeModule.h` - https://github.com/facebook/react-native/commit/ca898f4367083e0943603521a41c48dec403e6c9

---

### Changes: existing functionality that is now different

- Upgrade React Native to Babel 7 - https://github.com/facebook/react-native/commit/f8d6b97140cffe8d18b2558f94570c8d1b410d5c
- New projects created using `react-native init` will use Babel 7 - https://github.com/facebook/react-native/commit/e315ec9891eb0bcb51afb0e797dbd49aa8f9ac71
- Restrict `WebView` to only http(s) URLs: https://github.com/facebook/react-native/commit/634e7e11e3ad39e0b13bf20cc7722c0cfd3c3e28 https://github.com/facebook/react-native/commit/23f8f7aecb1f21f4f5e44fb9e4a7456ea97935c9
- Node 8 is now the minimum required version - https://github.com/facebook/react-native/commit/c1e6f278237e84c8ed26d3d2eb45035f250e2d40
- Sync React renderer to revision c0fe8d6 - https://github.com/facebook/react-native/commit/f59e5a8d28491c64e4d0c08fec3a2b0b3fabb38b
- Upgrade Flow to v0.74 - https://github.com/facebook/react-native/commit/3bed272a620ac806a6142327013265ea8138641a
- Upgrade Prettier to v1.13.4 - https://github.com/facebook/react-native/commit/29fb2a8e90fa3811f9485d4b89d9dbcfffea93a6
- Upgrade Jest to v23.1.0 - https://github.com/facebook/react-native/commit/536c9372692712b12317e657fc3e4263ecc70164
- Upgrade Metro to v0.38 - https://github.com/facebook/react-native/commit/d081f83a0487ffbc7d19f8edc7532611b359dfc6
- Upgrade Buck to v2018.03.26.01 - https://github.com/facebook/react-native/commit/1324e7b5580db815471172cf6dd140124bd2f11a
- Disallow requiring from invariant/warning - https://github.com/facebook/react-native/commit/521fb6d041167ec8a8d0e98ac606db1f27f0c5c8
- Remove native prop type validation - https://github.com/facebook/react-native/commit/8dc3ba0444c94d9bbb66295b5af885bff9b9cd34
- Add `$FlowFixMe` to invalid prop accesses where Flow wasn't complaining before - https://github.com/facebook/react-native/commit/f19ee28e7d896aaacf26c6f850230019bdef0d3d
- Create Flow props for `Image` - https://github.com/facebook/react-native/commit/8bac869f5d1f2ef42e707d0ec817afc6ac98b3b2
- Flow type for `SegmentedControlIOS` - https://github.com/facebook/react-native/commit/113f009698dbd8f1b4c1048d77ff1eb373021083
- Flow type for `ProgressViewIOS` - https://github.com/facebook/react-native/commit/c87701ba05a8524756e87c089eb92c8f3c81823e
- Flow type for `PickerIOS` - https://github.com/facebook/react-native/commit/1c66cdc7e8ce8190dfbef76629601497446b2b0a
- Flow type for `Switch` - https://github.com/facebook/react-native/commit/06052a2330fc9c1dd0d56c6bbe5a17703f80c6b9
- Flow type for `Slider` - https://github.com/facebook/react-native/commit/cbe045a95f1ca53d99ae521742a93299a53d6136
- Flow type for `RefreshControl` - https://github.com/facebook/react-native/commit/891dfc3da4b5825097aedf73ff04e8982c00aeff
- Flow type for `ListView` - https://github.com/facebook/react-native/commit/4b1ecb62045fbb78764d1f51030f2253be705c5c
- Flow type for `TextInput` - https://github.com/facebook/react-native/commit/c8bcda8150278fde07331ca6958976b2b3395688
- Flow type for `TouchableBounce` - https://github.com/facebook/react-native/commit/8454a36b0bc54cb1e267bc264657cc693607da71
- Flow type for `TouchableOpacity` - https://github.com/facebook/react-native/commit/44743c07ad672e39668f92a801578906ec92996a
- Flow type for `TouchableHighlight` - https://github.com/facebook/react-native/commit/f0c18dc820537892dcc33d5aebbf4f52cf299b95
- Flow type for `TouchableWithoutFeedback` - https://github.com/facebook/react-native/commit/0b79d1faa21eb3c29aeeba08ee0fb2ed62e6cc54
- Flow type for `ScrollView` - https://github.com/facebook/react-native/commit/b1276622791d5dbe4199bb075f473908c3e62b31
- Flow type for `DatePickerIOS` - https://github.com/facebook/react-native/commit/97e572ea6d7b1fd829ca20f5d5c8ff970d88e68b
- Flow type for `KeyboardAvoidingView` - https://github.com/facebook/react-native/commit/188b118b6075be1614c553596b85d430767f2dbc
- Flow type for `ActivityIndicator` - https://github.com/facebook/react-native/commit/0b71d1ddb03c036ed118574c105b0af505da19fc
- Remove `$FlowFixMe` in `TouchableBounce` - https://github.com/facebook/react-native/commit/ffda0178509ed92396f15db37a41d3d668ade4e6
- Remove `$FlowFixMe` in `ScrollView` - https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0
- Remove `$FlowFixMe` in `ListView` - https://github.com/facebook/react-native/commit/af6e2eb02d3651f869b5436e68e61ef3ab3405a0
- Remove `$FlowFixMe` in `Text` - https://github.com/facebook/react-native/commit/6042592cf46787f089e76b661376705380607207
- Remove `$FlowFixMe` in `RTLExample` - https://github.com/facebook/react-native/commit/206ef54aa415e3e2bb0d48111104dfc372b97e0f
- Remove `$FlowFixMe` in `AppContainer` - https://github.com/facebook/react-native/commit/a956551af73cf785ee4345e92e71fd5b17c5644e
- Remove `$FlowFixMe` in `Slider` - https://github.com/facebook/react-native/commit/1615f9d16149c7082ce0e1485aa04a6f2108f7ba
- Update `react-devtools-core` and `plist` to include security fixes reported by `npm audit` - https://github.com/facebook/react-native/commit/3a1d949906acb0c3b44d125d54d0c99305bbbb56
- Update `Switch` to ES6 Class - https://github.com/facebook/react-native/commit/970caa4552d4ba87c1a954391535ff42b00832e7
- Update `Slider` to ES6 Class - https://github.com/facebook/react-native/commit/5259450c143f71c65e157d6b7d3f0e1655eb7aa1
- Update `ActivityIndicator` to ES6 Class - https://github.com/facebook/react-native/commit/edd7acbb1e6fe185600a19cc1cbb38feb16c85ad
- Update `RefreshControl` to ES6 Class - https://github.com/facebook/react-native/commit/a35a23831789030e17f766f72d307ae315be107d
- Update `KeyboardAvoidingView` to ES6 Class - https://github.com/facebook/react-native/commit/c017dcb0f2903b49b2f21cc150226aeb7f5026ee
- Update `DatePickerIOS` to ES6 Class - https://github.com/facebook/react-native/commit/f8c8231706492b588331354d45b833aa21434e13
- Update `Text` to ES6 Class - https://github.com/facebook/react-native/commit/ab92c00245c0ce717819ddb0ab8b9204d4c13c34
- Replace `context.isInAParentText` w/ `React.createContext` - https://github.com/facebook/react-native/commit/e1339bc18303ca5394cd0c9dc97cededb2261581
- Cleanup `Text` implementation - https://github.com/facebook/react-native/commit/06c05e744d8af9582bde348210f254d76dae48b9
- Switch `Text` to `React.forwardRef` - https://github.com/facebook/react-native/commit/e708010d18f938e2d6b6424cfc9485d8e5dd2800
- Switch `View` to `React.forwardRef` - https://github.com/facebook/react-native/commit/3e534b9aab5156adac67762877b2457408fe8934
- Update uses of `genMockFunction` and `genMockFn` to `fn` in tests - https://github.com/facebook/react-native/commit/390ded871cb905d149e9c1f4a082e67a7ec7addb
- Make `ViewProps` exact - https://github.com/facebook/react-native/commit/65c336f38f4afd43c8b5f81745abf38bd9b8ddbf
- Spread `TVViewProps` into `ViewProps` instead of intersection - https://github.com/facebook/react-native/commit/bc658d3c4405676643d952a126295dbc7fc26217
- Allow trailing commas - https://github.com/facebook/react-native/commit/1e2de712907e5fe0d17648f0ff5c81d4384ca85b
- Use `let`/`const` - https://github.com/facebook/react-native/commit/8f5ebe5952d0675b463137103a82f3fb0c26ae0d
- Refactor `MockNativeMethods` in Jest - https://github.com/facebook/react-native/commit/5d4c542c58d84bbe05f76bf01d9efdd9d438572c
- Use app name from `app.json` after ejecting - https://github.com/facebook/react-native/commit/57774a4a981e2f12cfe9b029447e34f203221b18
- Suggest `git apply --reject` for failed upgrades - https://github.com/facebook/react-native/commit/4fbd244b9a6b62e0efe1b4b5a7ec3de468f020f6
- Moved `TouchHistoryMath` from React to React Native - https://github.com/facebook/react-native/commit/06085d38366373f3135074dc14e2c9871ca4fe29
- Refactor `RCTInputAccessoryView` - https://github.com/facebook/react-native/commit/c136c54ff0211e2bf149fab600cd6e295f9d19dd
- Don't wrap `ListEmptyComponent` in an extra view - https://github.com/facebook/react-native/commit/db061ea8c7b78d7e9df4a450c9e7a24d9b2382b4
- Move `Text` PropTypes to its own file - https://github.com/facebook/react-native/commit/cd8128b2eccf6898cdf798a1e1be1f7a5762a0d4
- Mock `ReactNative.NativeComponent` native methods in Jest - https://github.com/facebook/react-native/commit/3e9a371ace5f25b2eb7a0d30177251f8a0c10ed9
- Tightening types for `View` and `VirtualizedList` - https://github.com/facebook/react-native/commit/5035af80ecddb44e2a8444780f25f336b760bf32
- Make values optional in `ViewPropTypes` - https://github.com/facebook/react-native/commit/f1316cab6c351852ef1da9939d4c8f0244fb8a6f
- propTypes are optional for native components - https://github.com/facebook/react-native/commit/dbdf43b428da19a9eba012753904bcf33339ea9a
- Rename `Style` to `DangerouslyImpreciseStyle` - https://github.com/facebook/react-native/commit/4895c645ea17ff939811f3d5ec6218cd4e31c5fb

### iOS specific changes

- iOS 9 is now the minimum required version - https://github.com/facebook/react-native/commit/f50df4f5eca4b4324ff18a49dcf8be3694482b51
- Update podspecs to target iOS 9 - https://github.com/facebook/react-native/commit/092103e7525e58e04346e0a1a16a67ca4f31c2e9
- Xcode 9.4 is now used to run tests - https://github.com/facebook/react-native/commit/c55bcd6ea729cdf57fc14a5478b7c2e3f6b2a94d
- Prevent console logging on iOS 11.3+ within WebSocket - https://github.com/facebook/react-native/commit/8125be942bd5fd8fe851bad04ae6b9bcb0af4727
- Expose `RCTFont` size overrides - https://github.com/facebook/react-native/commit/6611fefef7559c4cd3d1824235d263bff210d5e2

### Android specific changes

- Touchables now play a sound on press - https://github.com/facebook/react-native/commit/722f88ca9058c5d902c416b826a7a7ab347326b8
- Default `underlineColorAndroid` to transparent - https://github.com/facebook/react-native/commit/a3a98eb1c7fa0054a236d45421393874ce8ce558
- Disable `WebView` geolocation by default - https://github.com/facebook/react-native/commit/23d61b35fb6fdbfb84f77b6d99ff155a0ff868e6
- Ensure cookies with illegal characters are not sent to okhttp - https://github.com/facebook/react-native/commit/04028bf2169b01f79bd86ecd6b0d8aa5f99599f1
- Update app icons to match recent Android releases - https://github.com/facebook/react-native/commit/94393f8652c414806fc861c214ad36e9ac1b6114
- Better error messages for `ReadableNativeMap` - https://github.com/facebook/react-native/commit/30d06b42862fc5e8704e109db652d62f86f8eabc
- Update Fresco to v1.9.0, okhttp3 to v3.10.0 - https://github.com/facebook/react-native/commit/6b07602915157f54c39adbf0f9746ac056ad2d13
- Add tint color to inline icons - https://github.com/facebook/react-native/commit/e8e2a6e4102c1ba0ee3d068769e47fa61c160524
- Fix antialiasing rounded background - https://github.com/facebook/react-native/commit/7500b3ec839ada6d8e1f7a88d30743dfb0ad7e70

---

### Fixed: bugs that have been resolved

- Prevent showing a hidden status bar when opening modals - https://github.com/facebook/react-native/commit/076b1cea3563cae30e11d63cc100ceaed9082692
- Fix crash when reloading while Perf Monitor is enabled - https://github.com/facebook/react-native/commit/4fcd9970bd2dfb24890bc87e9c82e16dab71ec09
- Fixed concurrency issue in remote debugger - https://github.com/facebook/react-native/commit/e5aa5b7c508c5e0e51f7abfcee350e27bef24ba2
- Fix `Modal` + `FlatList` scrolling - https://github.com/facebook/react-native/commit/8799047dd0bc8dd93f05fa97d4b9a59f7dfeb324
- Fix bug in `RCTNetworking` where not all tasks/handlers were being cleared during invalidation - https://github.com/facebook/react-native/commit/b8051720344f3716e964eaf7cfdd2a91dc703602
- Fix keyboard handling with `keyboardShouldPersistTaps: never` - https://github.com/facebook/react-native/commit/ffe6c110f7ce33460fe0399ccbda16a6adbe90ca
- Fix Responder Logic in `Text` - https://github.com/facebook/react-native/commit/e2ce22b823661a7dcf6b70a825921a2910383bd1
- Fix `VirtualizedSectionList` lint warnings - https://github.com/facebook/react-native/commit/26a1eba1cef853b0dab7aad5731699c06d36b781
- Fix `VirtualizedSectionList:ItemWithSeparators` - https://github.com/facebook/react-native/commit/488a4c7e1c86ac5900ff9194106511fbf5a8e3cb
- Fix `TextInput`'s initial layout measurements - https://github.com/facebook/react-native/commit/c6b4f9f2ce59bc757d9e211f46294faa03df55c6
- Fix `requireNativeComponent` check - https://github.com/facebook/react-native/commit/1c90a2b47b420a4b6aa16a55a344cc08f0eacbe3
- Fix `TextInput` autocapitalization bug - https://github.com/facebook/react-native/commit/ff70ecf868cf12fc66b45dc1496391d0a1e9011f
- Add missing events to `ViewPropTypes` - https://github.com/facebook/react-native/commit/41a940392cea497bc5eb627b24083d0211d1eb89
- Add missing Jest mock in `StatusBarManager` - https://github.com/facebook/react-native/commit/4a2c560768abb2d8407900fdb2fbe4971ae00a1c
- Add Flow declaration for Metro module - https://github.com/facebook/react-native/commit/1853e1519030caaeeb7f31017d98823aa5696daf
- Fix type for `ReactNative.NativeComponent` (1/2) - https://github.com/facebook/react-native/commit/de11ba2a5ee90929dbc67d914de59bdd2ebc29ca
- Fix type for `ReactNative.NativeComponent` (2/2) - https://github.com/facebook/react-native/commit/752863629d63bca6d96a101bfeccc4e7ad3e953e
- Move Image PropTypes to new file - https://github.com/facebook/react-native/commit/67656991b32075e8b4a99c6409b0a131206c6941
- Tests: Fix JUnit report location when running Jest - https://github.com/facebook/react-native/commit/85fc98d437c08cdec883a73161e120478737ba72
- Tests: Fix ReactImagePropertyTest SoLoader failures (#19607) - https://github.com/facebook/react-native/commit/a52d84d7e1cdb287f2877c4d85f2e9866c248d43
- Tests: Fix jest snapshot testing on Windows - https://github.com/facebook/react-native/commit/216bce31632480ce70cc03b1b2a57ec12440afd7

#### iOS specific fixes

- Fix `InputAccessoryView` safe area comformance - https://github.com/facebook/react-native/commit/490f22ae72ba43fa9364ce0f6c238744c07ac830
- Fix use of C++ syntax in header file - https://github.com/facebook/react-native/commit/bfcfe7961db0970e2575eafe2f3c9c668bd8940d
- Fix install step when running `run-ios` - https://github.com/facebook/react-native/commit/0934c1778f0e3c0b691e1a3ca2df1d486eb905dd
- Fix `run-ios` not turning on Simulator - https://github.com/facebook/react-native/commit/9736ddc061e9c4291df8a3185c7f9d6f73e435c7
- Use correct library reference for Fishhook. This fixes the build for the new Xcode build system, on both Xcode 9 and Xcode 10 - https://github.com/facebook/react-native/commit/a8b74576da6f1a42fde4e39f97e88c8f45a3a51d
- Add missing `onChange` event definition to `DatePickerIOS` - https://github.com/facebook/react-native/commit/3b53091869b673ea33a4af34242e2227ca944768
- Fix crash during Archive phase on Xcode 9.3 - https://github.com/facebook/react-native/commit/344c205070d5ad670c97984dd86ec9ac13c73f81
- `RNTesterPods`: Add missing folly include - https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a
- `RNTesterPods`: folly::Optional's `has_value()` to `hasValue()` until folly is upgraded - https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a
- `RNTesterPods`: Fix import for `RCTTestAttributes.h` - https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a
- `RNTesterPods`: Fix `conversions.h` to use namespaced includes - https://github.com/facebook/react-native/commit/128c9343c464f3e7898d6e245f135f8bdf6caa6a
- Fix or mark enum conversions surfaced by `-Wenum-conversion` - https://github.com/facebook/react-native/commit/b8f30db0ae21d5f96547702abbf50aefa93b1094
- Fix CocoaPods integration without DevSupport subspec - https://github.com/facebook/react-native/commit/c09d509c2b8a5a02701829e1f0ace8081ce64277
- Update Yoga to handle being in a Xcode framework project - https://github.com/facebook/react-native/commit/cf036dbc7af16a8453c115372694dc51e8086fcf
- Fix Blob memory leak - https://github.com/facebook/react-native/commit/122b3791ede095345f44666691aa9ce5aa7f725a

#### Android specific fixes

- Correct draw path dimensions while doing even border, fixes blurred borders - https://github.com/facebook/react-native/commit/c5ca26a0e5c0660196300ee34d6007c63879611f
- Don't pass additional arguments to `requireNativeComponent` in `.android.js` files - https://github.com/facebook/react-native/commit/a51e8b19cc4dc36dee42ac95278b883c06b2e40f
- Prevent `RefreshControl` from getting stuck when a parent is scrolled horizontally - https://github.com/facebook/react-native/commit/33ffa79a51d4db9ba69148861f2da304646175cd
- Prevent crash due to unsupported ellipsize mode - https://github.com/facebook/react-native/commit/85e33aaf908996e99220bff4a2bdbbdf7c0d12b0
- Fix okhttp3 response handling in `DevServerHelper` - https://github.com/facebook/react-native/commit/56d48bd9ecd2d0f08625259121312531064a09f2
- Fix `ReactInstanceManager` unmountApplication to support `ReactRootView` recycling - https://github.com/facebook/react-native/commit/4a9b2a73021fb547febe1fa193c3effb7ff8da4e
- Fix `NullPointerException` when emiting event using `UIManagerModule` - https://github.com/facebook/react-native/commit/291c01f4ffe614760852e36b05d78b42cb4271df
- Fix link to Android build guide - https://github.com/facebook/react-native/commit/57e7556b8db61e5fcc3ccea56c1b163b82a091a6
- Fix Android open source test failures - https://github.com/facebook/react-native/commit/3e0ebc76632238f21c60caa92c7a2b5ee8102b71
- Fix view indices with LayoutAnimation - https://github.com/facebook/react-native/commit/d8fcdb9bd7a308ed70caeac1b53da0a05abe452f
- Fix originalNode memory leak - https://github.com/facebook/react-native/commit/8102e35271ab68e0525a9c60d86a855bbeef9c1a
- Fix `ScrollView` with a `TextInput` - https://github.com/facebook/react-native/commit/2f1421dec7cd3a35779caceac108e872033c7d72
- Disable onKeyPRess logic when handler not defined - https://github.com/facebook/react-native/commit/41975f75d96ef4b606b4618461bf24d5db063b77

---

### Removed: features that have been removed; these are breaking

- Deprecate `focusTextInput` and `blurTextInput` - https://github.com/facebook/react-native/commit/ce3b7b8204dad0fd62a76a0ce66472eca4b25bc8

#### Android specific removals

- Remove native extensions - https://github.com/facebook/react-native/commit/7c5845a5a26592598c9380df078766a680a23f06
- Remove Fresco ProGuard rules - https://github.com/facebook/react-native/commit/07df36557c8cbbaee5e870460162aa725a606ff4

#### iOS specific removals

- Removed deprecated `UIActionSheetDelegate` methods - https://github.com/facebook/react-native/commit/5863b564f84b9fe97b256f8cde0f7f2e1db9b641

## [0.55]

Welcome to the March 2018 release of React Native ! Over 81 contributors made 247 commits since February. Thanks for another exciting release.

Here are a few highlights:

- React Native is now using the MIT license
- Android TV device support

[![RNAndroidTVDemo](http://img.youtube.com/vi/EzIQErHhY20/0.jpg)](http://www.youtube.com/watch?v=EzIQErHhY20)

- Animated tracking with native driver - check out the [silky smooth framerate](https://t.co/dE1KST1i3g)
- Lots of Flow improvements
- Bugfixes

### Added: new features

- Added support for animated tracking to native driver. Now you can use `useNativeDriver` flag with animations that track other `Animated.Values` ([b48f7e5](https://github.com/facebook/react-native/commit/b48f7e5) by [@kmagiera](https://github.com/kmagiera))
- There's a new UTFSequence module in the library for common Unicode sequences (Emoji!) ([54870e0](https://github.com/facebook/react-native/commit/54870e0) and [4761d5a](https://github.com/facebook/react-native/commit/4761d5a) by [@sahrens](https://github.com/sahrens))
- Added `contextMenuHidden` property for **TextInput** ([2dd2529](https://github.com/facebook/react-native/commit/2dd2529) by [@amhinson](https://github.com/amhinson))
- Add `testOnly_pressed` to **TouchableHighlight** for snapshot tests ([3756d41](https://github.com/facebook/react-native/commit/3756d41) by [@sahrens](https://github.com/sahrens))

#### Android specific additions

- Added support for Android TV devices ([b7bb2e5](https://github.com/facebook/react-native/commit/b7bb2e5) by [@krzysztofciombor](https://github.com/krzysztofciombor))
- Implemented style `letterSpacing` for **Text** and **TextInput** ([5898817](https://github.com/facebook/react-native/commit/5898817) by [@motiz88](https://github.com/motiz88))
- Bundle download progress is now shown [d06e143](https://github.com/facebook/react-native/commit/d06e143) by [@janicduplessis](https://github.com/janicduplessis))
- **AndroidInfoModule** now also returns Android ID ([216c8ec](https://github.com/facebook/react-native/commit/216c8ec) by [@L33tcodex0r](https://github.com/L33tcodex0r))

#### iOS specific additions

- Introducing **InputAccessoryView**, "a component which enables customization of the keyboard input accessory view" ([38197c8](https://github.com/facebook/react-native/commit/38197c8), [84ef7bc](https://github.com/facebook/react-native/commit/84ef7bc), and [6d9fe45](https://github.com/facebook/react-native/commit/6d9fe45) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- `base-line` metric exposure for **Text** and **TextInput** ([51b3529](https://github.com/facebook/react-native/commit/51b3529), [0dbe183](https://github.com/facebook/react-native/commit/0dbe183), and [7630a61](https://github.com/facebook/react-native/commit/7630a61) by [@shergin](https://github.com/shergin))
- **DatePickerIOS** now has `initialDate` prop ([446ce49](https://github.com/facebook/react-native/commit/446ce49))
- Expose version via `RCTVersion.h`'s `RCTGetReactNativeVersion()` ([30469ed](https://github.com/facebook/react-native/commit/30469ed) by [@LeoNatan](https://github.com/LeoNatan))
- Allow running multiple simulators simultaneously with `react-native run-ios --simulator ...` ([2ad3407](https://github.com/facebook/react-native/commit/2ad3407) by [@koenpunt](https://github.com/koenpunt))
- Introduced **RCTSurfaceHostingProxyRootView** for migration to **RCTSurfaceHostingView** ([34b8876](https://github.com/facebook/react-native/commit/34b8876) by [@fkgozali](https://github.com/fkgozali))
- New UIManager API allowing intercept/delay mounting process ([402ae2f](https://github.com/facebook/react-native/commit/402ae2f) and [b90c1cf](https://github.com/facebook/react-native/commit/b90c1cf) by [@shergin](https://github.com/shergin))

### Changes: existing functionality that is now different

- React Native has now adopted the MIT license ([1490ab1](https://github.com/facebook/react-native/commit/1490ab1) and [26684cf](https://github.com/facebook/react-native/commit/26684cf) by [@sophiebits](https://github.com/sophiebits))
- The HelloWorld template now exclude `*.jsbundle` files from Git ([2123108](https://github.com/facebook/react-native/commit/2123108) by [@aneophyte](https://github.com/aneophyte))
- `react-native-git-upgrade` now shows files merged with conflicts in red ([e53a8f7](https://github.com/facebook/react-native/commit/e53a8f7) by [@alvinthen](https://github.com/alvinthen))
- `ResolvedAssetSource` type to have all read-only members ([4d0ee37](https://github.com/facebook/react-native/commit/4d0ee37) by [@sahrens](https://github.com/sahrens))
- Flow types improvements ([b6c7e55](https://github.com/facebook/react-native/commit/b6c7e55), [b98bf1e](https://github.com/facebook/react-native/commit/b98bf1e), [80c1839](https://github.com/facebook/react-native/commit/80c1839), [70a3ece](https://github.com/facebook/react-native/commit/70a3ece), [f734357](https://github.com/facebook/react-native/commit/f734357), [a817c64](https://github.com/facebook/react-native/commit/a817c64), [3fd82d3](https://github.com/facebook/react-native/commit/3fd82d3), [cd8128b](https://github.com/facebook/react-native/commit/cd8128b), [5035af8](https://github.com/facebook/react-native/commit/5035af8), [26734a8](https://github.com/facebook/react-native/commit/26734a8), [321ba06](https://github.com/facebook/react-native/commit/321ba06), [b6b80f6](https://github.com/facebook/react-native/commit/b6b80f6), [f1316ca](https://github.com/facebook/react-native/commit/f1316ca), [2520c64](https://github.com/facebook/react-native/commit/2520c64), [214da52](https://github.com/facebook/react-native/commit/214da52), [dbdf43b](https://github.com/facebook/react-native/commit/dbdf43b), [49396aa](https://github.com/facebook/react-native/commit/49396aa), [4895c64](https://github.com/facebook/react-native/commit/4895c64), [a3c07c9](https://github.com/facebook/react-native/commit/a3c07c9), [49ffc9f](https://github.com/facebook/react-native/commit/49ffc9f), and [c129457](https://github.com/facebook/react-native/commit/c129457) by [@TheSavior](https://github.com/TheSavior), [@yungsters](https://github.com/yungsters), and [@alex288ms](https://github.com/alex288ms))
- Better enable cross-platform support of WebSocket.js ([b9be289](https://github.com/facebook/react-native/commit/b9be289) by [@rozele](https://github.com/rozele))
- Better error handling in the CLI around making directories ([d2817f4](https://github.com/facebook/react-native/commit/d2817f4) by [@BridgeAR](https://github.com/BridgeAR))
- Verify that the component passed to createAnimatedComponent is not functional ([10b642a](https://github.com/facebook/react-native/commit/10b642a) by [@janicduplessis](https://github.com/janicduplessis))
- Don't truncate in the middle of an emoji ([9c8c597](https://github.com/facebook/react-native/commit/9c8c597) by [@Vince0613](https://github.com/Vince0613))
- Loosen Platform check to allow better code sharing for out-of-tree platforms ([84affbd](https://github.com/facebook/react-native/commit/84affbd))
- In CLI, fix issue with `isInstalled` check for Android and references to unregister ([ec88489](https://github.com/facebook/react-native/commit/ec88489) by [@rozele](https://github.com/rozele))

#### iOS specific changes

- tvOS `onPress` magnification animation now works via the `tvParallaxProperties` prop object taking `pressMagnification`, `pressDuration`, and `pressDelay` ([6c353fd](https://github.com/facebook/react-native/commit/6c353fd) by [@JulienKode](https://github.com/JulienKode))

### Fixed: bugs that have been resolved

- In **TouchableOpacity**, trigger animation on `opacity` upon change in `disabled` prop ([9366ce4](https://github.com/facebook/react-native/commit/9366ce4) by [@maxkomarychev](https://github.com/maxkomarychev))
- Fixed an issue encountered when using `react-native-vector-icons` ([a759a44](https://github.com/facebook/react-native/commit/a759a44) and [54dc11a](https://github.com/facebook/react-native/commit/54dc11a) by [@jeanlauliac](https://github.com/jeanlauliac) and [@t4deu](https://github.com/t4deu)))
- Add missing mock for Jest for `removeEventListener` method ([59c7b2c](https://github.com/facebook/react-native/commit/59c7b2c) by [@MoOx](https://github.com/MoOx))
- Fix main size calculation from the aspect ratio ([f751c34](https://github.com/facebook/react-native/commit/f751c34))
- Fix crash in Subscribable due to uglify-es ([b57a78c](https://github.com/facebook/react-native/commit/b57a78c) by [@iMagdy](https://github.com/iMagdy))
- Update `node-notifier` dependency to fix memory leak ([860fcd4](https://github.com/facebook/react-native/commit/860fcd4) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix issues with pollParams and link ([ca8ce83](https://github.com/facebook/react-native/commit/ca8ce83) by [@grabbou](https://github.com/grabbou))

#### iOS specific fixes

- DevLoadingView now supports the iPhone X screen shape ([47b36d3](https://github.com/facebook/react-native/commit/47b36d3) by [@mrtnrst](https://github.com/mrtnrst))
- Added bounds check to prevent ScrollView from scrolling to an offset which is out of bounds of the ScrollView ([16c9e5b](https://github.com/facebook/react-native/commit/16c9e5b) by [@siddhantsoni](https://github.com/siddhantsoni))
- **NetInfo** `isConnected` works again ([dbafc29](https://github.com/facebook/react-native/commit/dbafc29) by [@alburdette619](https://github.com/alburdette619))
- In **AlertIOS**, fix duplicate var name declaration ([6893a26](https://github.com/facebook/react-native/commit/6893a26))
- Permit `react-native run-ios --device [id]` by passing port when running on device ([f8fee0a](https://github.com/facebook/react-native/commit/f8fee0a) by [@jozan](https://github.com/jozan))
- Fixed issue with `run-ios` where `Entry, ":CFBundleIdentifier", Does Not Exist` was being received ([5447ca6](https://github.com/facebook/react-native/commit/5447ca6) by [@blackneck](https://github.com/blackneck))
- Fixed problem in Text measurement on iOS ([a534672](https://github.com/facebook/react-native/commit/a534672) by [@shergin](https://github.com/shergin))
- Fix crash when reloading in tvOS ([3a3d884](https://github.com/facebook/react-native/commit/3a3d884) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- Fixed a bug with positioning of nested views inside **Text** ([7d20de4](https://github.com/facebook/react-native/commit/7d20de4) by [@shergin](https://github.com/shergin))
- Fix blob response parsing for empty body ([093a78d](https://github.com/facebook/react-native/commit/093a78d) by [@janicduplessis](https://github.com/janicduplessis))
- Fix tvOS react-native init release build ([3002c4e](https://github.com/facebook/react-native/commit/3002c4e) by [@dlowder-salesforce](https://github.com/dlowder-salesforce)
- Fix RedBox from bridge reload due is not re-registering its root view ([2e51fa5](https://github.com/facebook/react-native/commit/2e51fa5) by [@fkgozali](https://github.com/fkgozali))

#### Android specific fixes

- Fix: incorrect line-height calculation ([74e54cb](https://github.com/facebook/react-native/commit/74e54cb) by [@strindhaug](https://github.com/strindhaug))
- Fix crashes with TextInput introduced in 0.53 ([b60a727](https://github.com/facebook/react-native/commit/b60a727) by [@joshyhargreaves](https://github.com/joshyhargreaves))
- Update ReactAndroid build script to support gradle 2.3.0 ([d8bb990](https://github.com/facebook/react-native/commit/d8bb990))
- Allow "unexpected URL" exception to be caught on Android when using fetch ([da84eba](https://github.com/facebook/react-native/commit/da84eba) by [@jcurtis](https://github.com/jcurtis))
- Fix `onLayout` prop for **TextInput** ([8a073c1](https://github.com/facebook/react-native/commit/8a073c1) by [@rozele](https://github.com/rozele))
- Fix ViewPager when using native navigation ([a1295e1](https://github.com/facebook/react-native/commit/a1295e1) by [@ruiaraujo](https://github.com/ruiaraujo))
- Fix localization crash in **DevSettingsActivity** ([427e464](https://github.com/facebook/react-native/commit/427e464) by [@ayc1](https://github.com/ayc1))
- Fix pinch crash in touch-responsive views ([67c3ad4](https://github.com/facebook/react-native/commit/67c3ad4) by [@tobycox](https://github.com/tobycox))
- Fix IllegalStateException thrown in looped timing native animation ([ef9d1fb](https://github.com/facebook/react-native/commit/ef9d1fb) by [@kmagiera](https://github.com/kmagiera))
- Workaround android-only js module resolution issue ([c20e0f9](https://github.com/facebook/react-native/commit/c20e0f9) by [@fkgozali](https://github.com/fkgozali))
- Fix ReadableNativeMap.toHashMap() for nested maps and arrays ([8a6ab14](https://github.com/facebook/react-native/commit/8a6ab14) by [@esamelson](https://github.com/esamelson))
- Fix Android Sanity Buck version check ([e057322](https://github.com/facebook/react-native/commit/e057322) by [@hramos](https://github.com/hramos))
- Fixes the connection to Firestore by following whatwg.org's XMLHttpRequest send() method ([d52569c](https://github.com/facebook/react-native/commit/d52569c) by [@samsafay](https://github.com/samsafay))
- `invertStickyHeaders` can now be set from **SectionList** or **FlatList** ([3d69b5c](https://github.com/facebook/react-native/commit/3d69b5c) by [@dannycochran](https://github.com/dannycochran))

### Removed: features that have been removed; these are breaking

- Removed various types ([b58e377](https://github.com/facebook/react-native/commit/b58e377), [ee26d9b](https://github.com/facebook/react-native/commit/ee26d9b), [d89517d](https://github.com/facebook/react-native/commit/d89517d), [852084a](https://github.com/facebook/react-native/commit/852084a) by [@TheSavior](https://github.com/TheSavior))
- Deleted `Systrace.swizzleJSON()` ([3e141cb](https://github.com/facebook/react-native/commit/3e141cb) by [@yungsters](https://github.com/yungsters))

#### Android specific removals

- `ReactInstanceManager#registerAdditionalPackages` has been removed; Create UIManager interface and extract common classes in uimanager/common ([6b45fb2](https://github.com/facebook/react-native/commit/6b45fb2) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific removals

- Remove callFunctionSync experimental APIs ([19a4a7d](https://github.com/facebook/react-native/commit/19a4a7d) by [@danzimm](https://github.com/danzimm))

## [0.54]

Welcome to the February 2018 release of React Native! This release includes work done by the React Native team and the community in January, and there are some big changes here after the holidays. Thanks for 270 commits from 87 contributors, you all are great! Here are a few highlights from the release:

- Long awaited **Blob** changes: upload, download, fetch locally, and more
- Sticky headers now work on inverted Lists
- Update to the newest React, which deprecated some lifecycle methods and added new ones – expect Yellowbox until React Native is updated
- `Space-evenly` is now there (sorry for the confusion with 0.52's release notes)
- A lot of under-the-covers work on Yoga, iOS's **Text** and **TextInput**, and a ton of other areas
- Multiple crash fixes

The changelog is arranged by the customary added, removed, changed, and fixed plus internal; the changes are also organized by platform.

### Added

- ✨ **Blob**s now can be: made from Strings, loaded by File using a FileReader API, uploaded and downloaded via `XMLHttpRequest#fetch`, and fetched on files to a local blob consistently ([be56a3e](https://github.com/facebook/react-native/commit/be56a3e) and [854c233](https://github.com/facebook/react-native/commit/854c233) by [@satya164](https://github.com/satya164) and [@fkgozali](https://github.com/fkgozali))
- Dynamic node_module dependencies are now supported ([b5e19ad](https://github.com/facebook/react-native/commit/b5e19ad) by [@jeanlauliac](https://github.com/jeanlauliac))
- Support sticky headers for inverted Lists with `invertStickyHeaders` ([ecaca80](https://github.com/facebook/react-native/commit/ecaca80) by [@janicduplessis](https://github.com/janicduplessis))
- `space-evenly` is now supported (sorry for the confusion with 0.52 notes) ([b1cdb7d](https://github.com/facebook/react-native/commit/b1cdb7d) by [@gedeagas](https://github.com/gedeagas))
- Platform plugins can participate in RNConfig, `link`, and `unlink` – keep an eye on [react-native-window's use of it](https://github.com/Microsoft/react-native-windows/pull/1601)! ([a40bfa7](https://github.com/facebook/react-native/commit/a40bfa7) by [@rozele](https://github.com/rozele))
- Add `minify` flag to react-native bundle command ([3f969cb](https://github.com/facebook/react-native/commit/3f969cb) by [@tomduncalf](https://github.com/tomduncalf))

#### VR Specific Additions

- Added **ScrollView** support ([6fa039d](https://github.com/facebook/react-native/commit/6fa039d) by [@MartinSherburn](https://github.com/MartinSherburn))

#### Android Specific Additions

- Bundle download progress is now shown like iOS ([675f142](https://github.com/facebook/react-native/commit/675f142) by [@janicduplessis](https://github.com/janicduplessis))
- Add back ability to customise OkHttp client ([22efd95](https://github.com/facebook/react-native/commit/22efd95) by [@cdlewis](https://github.com/cdlewis))

#### iOS specific additions

- **ScrollView** now supports smooth bi-directional content loading and takes new prop `maintainVisibleContentPosition` ([cae7179](https://github.com/facebook/react-native/commit/cae7179) and [65184ec](https://github.com/facebook/react-native/commit/65184ec) by [@sahrens](https://github.com/sahrens))
- Allow substituting a default font handler ([a9c684a](https://github.com/facebook/react-native/commit/a9c684a) by [@mmmulani](https://github.com/mmmulani))
- Add `accessibilityElementsHidden` prop ([3128816](https://github.com/facebook/react-native/commit/3128816) by [@aputinski](https://github.com/aputinski))
- Add EXTRA_PACKAGER_ARGS extensibility point on `scripts/react-native-xcode.sh` (PR rev [2122140](https://github.com/facebook/react-native/commit/2122140) by [@brunolemos](https://github.com/brunolemos) with landing assists [b8c86b8](https://github.com/facebook/react-native/commit/b8c86b8) and [0d4ff1b](https://github.com/facebook/react-native/commit/0d4ff1b))

### Removed

- Remove internal `utf8` utility - use the **utf8** package now instead ([431670f](https://github.com/facebook/react-native/commit/431670f) by [@mathiasbynens](https://github.com/mathiasbynens))

#### iOS specific removals

- Removed outdated assertion in RCTShadowView related to breaking change in Yoga ([e3ff3cf](https://github.com/facebook/react-native/commit/e3ff3cf) by [@shergin](https://github.com/shergin))

#### Android specific removals

- Fix an issue when swapping to and from the `visible-password` or `phone-pad` keyboard types. ([164f6b6](https://github.com/facebook/react-native/commit/164f6b6) by [@BrandonWilliamsCS](https://github.com/BrandonWilliamsCS))
- Remove redundant config in AndroidManifest.xml ([d7a9ca2](https://github.com/facebook/react-native/commit/d7a9ca2) by [@gengjiawen](https://github.com/gengjiawen))

#### iOS specific removals

- Delete RCTBatchedBridge ([816d417](https://github.com/facebook/react-native/commit/816d417) by [@mhorowitz](https://github.com/mhorowitz))

### Changed

- Docs clarifications ([7abffc3](https://github.com/facebook/react-native/commit/7abffc3) by [@IgorGanapolsky](https://github.com/IgorGanapolsky))

#### iOS Specific Changes

- ⚡️ **Text** and **TextInput** have been re-implemented from the ground up for performance, flexibility, and reduced technical debt ([2716f53](https://github.com/facebook/react-native/commit/2716f53), [ef4214a](https://github.com/facebook/react-native/commit/ef4214a), [0009909](https://github.com/facebook/react-native/commit/0009909), [74963eb](https://github.com/facebook/react-native/commit/74963eb), [6c4ef28](https://github.com/facebook/react-native/commit/6c4ef28), [ebc9884](https://github.com/facebook/react-native/commit/ebc9884), [d7fa81f](https://github.com/facebook/react-native/commit/d7fa81f), [7d1ec7a](https://github.com/facebook/react-native/commit/7d1ec7a), [5264832](https://github.com/facebook/react-native/commit/5264832), [6bb8617](https://github.com/facebook/react-native/commit/6bb8617), [5dbb3c5](https://github.com/facebook/react-native/commit/5dbb3c5), [7e7d00a](https://github.com/facebook/react-native/commit/7e7d00a), [46fd864](https://github.com/facebook/react-native/commit/46fd864), [9dfa2e7](https://github.com/facebook/react-native/commit/9dfa2e7), [8a882fe](https://github.com/facebook/react-native/commit/8a882fe), and [0f9fc4b](https://github.com/facebook/react-native/commit/0f9fc4b) by [@shergin](https://github.com/shergin) and [@hovox](https://github.com/hovox))
- **Image**'s `resizeMode="center"` is now documented and has an example present ([be7037f](https://github.com/facebook/react-native/commit/be7037f) by [@motiz88](https://github.com/motiz88))
- Geolocation API no longer timeouts when `skipPermissionRequests: true` ([5c17db8](https://github.com/facebook/react-native/commit/5c17db8) by [@ngandhy](https://github.com/ngandhy))
- Rounding pixels is now done with an algorithm from Yoga rather than React Native, reducing debt and improving performance ([ceb1d1c](https://github.com/facebook/react-native/commit/ceb1d1c) and [114c258](https://github.com/facebook/react-native/commit/114c258) by [@shergin](https://github.com/shergin))

#### Android specific changes

- Numerous refactors around bundle handling and the `DevServerHelper` ([644123a](https://github.com/facebook/react-native/commit/644123a), [e756251](https://github.com/facebook/react-native/commit/e756251), [6e44356](https://github.com/facebook/react-native/commit/6e44356), [1019bda](https://github.com/facebook/react-native/commit/1019bda), [06d8f96](https://github.com/facebook/react-native/commit/06d8f96), [f88c9d6](https://github.com/facebook/react-native/commit/f88c9d6), and [108f966](https://github.com/facebook/react-native/commit/108f966) by [@davidaurelio](https://github.com/davidaurelio))

### Fixed

- Fix JS debugger issues related to CORS ([29f8354](https://github.com/facebook/react-native/commit/29f8354) by [@njbmartin](https://github.com/njbmartin))
- Keep the `.gitignore`d files during the `react-native-git-upgrade` process ([7492860](https://github.com/facebook/react-native/commit/7492860) by [@ncuillery](https://github.com/ncuillery))
- Fix re-render case on SwipeableRow ([a580a44](https://github.com/facebook/react-native/commit/a580a44))
- Fix display of syntax error messages when HMR is enabled ([2b80cdf](https://github.com/facebook/react-native/commit/2b80cdf) by [@ide](https://github.com/ide))
- Add fixtures to metro blacklist in order to let build succeed ([4194bb2](https://github.com/facebook/react-native/commit/4194bb2) by [@t4deu](https://github.com/t4deu))

#### Android specific fixes

- Don't crash when using decimal `Animated.modulo` values with `useNativeDriver: true` ([6c38972](https://github.com/facebook/react-native/commit/6c38972) by [@motiz88](https://github.com/motiz88))
- Don't crash when receiving unknown websocket IDs ([1a790f8](https://github.com/facebook/react-native/commit/1a790f8) by [@sunweiyang](https://github.com/sunweiyang))
- Dont crash when `NativeModules.UIManager.showPopupMenu` method calls error callback ([0c18ec5](https://github.com/facebook/react-native/commit/0c18ec5) by [@dryganets](https://github.com/dryganets))
- Maintain cursor position when **TextInput**'s `secureTextEntry` changes ([09b43e4](https://github.com/facebook/react-native/commit/09b43e4) by [@jainkuniya](https://github.com/jainkuniya))
- Race condition fix in Dialogs module ([d5e3f08](https://github.com/facebook/react-native/commit/d5e3f08) by [@dryganets](https://github.com/dryganets))
- Fix NPE in Android Switch during measure ([7b1915e](https://github.com/facebook/react-native/commit/7b1915e) by [@4ndroidev](https://github.com/4ndroidev))
- Fix initialScrollIndex ([ef596de](https://github.com/facebook/react-native/commit/ef596de) by [@olegbl](https://github.com/olegbl))
- Fix redbox style ([f363dfe](https://github.com/facebook/react-native/commit/f363dfe) by [@ayc1](https://github.com/ayc1))
- Fix crash due to mishandling of UTF-8 in progressive download. ([9024f56](https://github.com/facebook/react-native/commit/9024f56) by [@dryganets](https://github.com/dryganets))
- Fix crash because ClassCastException fix: getText() returns CharSequence not Spanned ([46cc490](https://github.com/facebook/react-native/commit/46cc490) by [@dryganets](https://github.com/dryganets))
- Fix and re-enable "view flattening" optimizations ([877f1cd](https://github.com/facebook/react-native/commit/877f1cd) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific fixes

- Fix Crash when **CameraRoll** is getting assets from iCloud and no filename is provided ([2ae2436](https://github.com/facebook/react-native/commit/2ae2436) by [@pentarex](https://github.com/pentarex))
- Fix Xcode Archive task failing if project path contains whitespace ([8aa568e](https://github.com/facebook/react-native/commit/8aa568e) by [@jevakallio](https://github.com/jevakallio))
- `react-native link` has been fixed to correctly link iOS and tvOS targets ([a63fd37](https://github.com/facebook/react-native/commit/a63fd37) by [@dlowder-salesforce](https://github.com/dlowder-salesforce))
- `GLog` fix on case sensitive APFS macOS ([2fef1ba](https://github.com/facebook/react-native/commit/2fef1ba) by [@hovox](https://github.com/hovox))
- Fixed issue where you cannot launch tvOS app on Apple TV simulator ([afd988f](https://github.com/facebook/react-native/commit/afd988f))

### Internal work

- A **massive** amount of Yoga optimizations, cleanups, refactors, and test fixes ([62d0100](https://github.com/facebook/react-native/commit/62d0100), [1475fc4](https://github.com/facebook/react-native/commit/1475fc4), [9daa174](https://github.com/facebook/react-native/commit/9daa174), [d4517dd](https://github.com/facebook/react-native/commit/d4517dd), [ca91f0e](https://github.com/facebook/react-native/commit/ca91f0e), [34b7ec8](https://github.com/facebook/react-native/commit/34b7ec8), [fda861a](https://github.com/facebook/react-native/commit/fda861a), [9f7cedb](https://github.com/facebook/react-native/commit/9f7cedb), [ac1c8c2](https://github.com/facebook/react-native/commit/ac1c8c2), [fcf2c7c](https://github.com/facebook/react-native/commit/fcf2c7c), [2b27f1a](https://github.com/facebook/react-native/commit/2b27f1a), [210ae5b](https://github.com/facebook/react-native/commit/210ae5b), [8208858](https://github.com/facebook/react-native/commit/8208858), [7f94bff](https://github.com/facebook/react-native/commit/7f94bff), [bd7bf94](https://github.com/facebook/react-native/commit/bd7bf94), [2fe65b0](https://github.com/facebook/react-native/commit/2fe65b0), [9658d9f](https://github.com/facebook/react-native/commit/9658d9f), [ee5c91c](https://github.com/facebook/react-native/commit/ee5c91c), [64d530b](https://github.com/facebook/react-native/commit/64d530b), [400a29e](https://github.com/facebook/react-native/commit/400a29e), [f75e21f](https://github.com/facebook/react-native/commit/f75e21f), [528bbac](https://github.com/facebook/react-native/commit/528bbac), [be8e7c6](https://github.com/facebook/react-native/commit/be8e7c6), [d0f7d4d](https://github.com/facebook/react-native/commit/d0f7d4d), [4b4959a](https://github.com/facebook/react-native/commit/4b4959a), [fdef378](https://github.com/facebook/react-native/commit/fdef378), [831a1bb](https://github.com/facebook/react-native/commit/831a1bb), ([2a22d99](https://github.com/facebook/react-native/commit/2a22d99), [9f57ded](https://github.com/facebook/react-native/commit/9f57ded), and [ff2658c](https://github.com/facebook/react-native/commit/ff2658c) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar), [@passy](https://github.com/passy), [@ryu2](https://github.com/ryu2)), and others)
- 🚧 Lifecycle methods were renamed to be consistent with [React RFC6](https://github.com/reactjs/rfcs/blob/master/text/0006-static-lifecycle-methods.md) – note that there are Yellowbox warnings right now because of this, it's work-in-progress ([6f007e8](https://github.com/facebook/react-native/commit/6f007e8) by [@bvaughn](https://github.com/bvaughn))
- Some autogenerated mystery string files were added ([c7846c4](https://github.com/facebook/react-native/commit/c7846c4), [bb6fcea](https://github.com/facebook/react-native/commit/bb6fcea), [8bd00a2](https://github.com/facebook/react-native/commit/8bd00a2), [faa9519](https://github.com/facebook/react-native/commit/faa9519), [f49f793](https://github.com/facebook/react-native/commit/f49f793))
- Improvements to the cli's implementation ([2c5fbd7](https://github.com/facebook/react-native/commit/2c5fbd7), [752427b](https://github.com/facebook/react-native/commit/752427b), and [619a8c9](https://github.com/facebook/react-native/commit/619a8c9) by [@arcanis](https://github.com/arcanis), [@voideanvalue](https://github.com/voideanvalue), and [@rozele](https://github.com/rozele))
- Measure touch events from nearest "root view" ([a70fdac](https://github.com/facebook/react-native/commit/a70fdac) by [@mmmulani](https://github.com/mmmulani))
- Allow to attach the HMR server to an external http server ([8c6b816](https://github.com/facebook/react-native/commit/8c6b816) by [@rafeca](https://github.com/rafeca))
- Split folly/Memory out from headers-only targets in Buck ([b8e79a7](https://github.com/facebook/react-native/commit/b8e79a7) by [@mzlee](https://github.com/mzlee))
- Code cleanup of **ReactHorizontalScrollView** in Android ([71ec85f](https://github.com/facebook/react-native/commit/71ec85f) by [@mdvacca](https://github.com/mdvacca))
- Always create a debugger websocket connection when in iOS dev builds ([fa334ce](https://github.com/facebook/react-native/commit/fa334ce) by [@bnham](https://github.com/bnham))
- Make the React Native HMR client extend from the generic metro HMR client ([9a19867](https://github.com/facebook/react-native/commit/9a19867) by [@rafeca](https://github.com/rafeca))
- Removed use of xip.io ([40a8434](https://github.com/facebook/react-native/commit/40a8434) by [@jvranish](https://github.com/jvranish))
- Fix Buck dependencies ([cec2e80](https://github.com/facebook/react-native/commit/cec2e80), [4f6c157](https://github.com/facebook/react-native/commit/4f6c157) by [@swolchok](https://github.com/swolchok))
- Fix permissions on test script ([42c410a](https://github.com/facebook/react-native/commit/42c410a) by [@mzlee](https://github.com/mzlee))
- Better handling exception in loadScript() ([3fbf785](https://github.com/facebook/react-native/commit/3fbf785))
- Fix ESLint upgrade "parsing error" ([9d21496](https://github.com/facebook/react-native/commit/9d21496) by [@zertosh](https://github.com/zertosh))
- Fixing 🤡 in RCTSurfaceRootShadowView ([5fba82d](https://github.com/facebook/react-native/commit/5fba82d) by [@shergin](https://github.com/shergin))
- Handle invalidation error in RCTObjcExecutor ([493f3e8](https://github.com/facebook/react-native/commit/493f3e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- Check for nullptr when accessing isInspectable method ([70d23e8](https://github.com/facebook/react-native/commit/70d23e8) by [@fromcelticpark](https://github.com/fromcelticpark))
- Introduce new Fabric API in RNAndroid ([2d35bde](https://github.com/facebook/react-native/commit/2d35bde) by [@mdvacca](https://github.com/mdvacca))
- Fixing Prepack model for latest global.nativeExtensions changes. ([01a58d1](https://github.com/facebook/react-native/commit/01a58d1) by [@NTillmann](https://github.com/NTillmann))
- General code cleanup: unused code and configurations ([e233646](https://github.com/facebook/react-native/commit/e233646) and [e701034](https://github.com/facebook/react-native/commit/e701034) by [@bvaughn](https://github.com/bvaughn) and others)
- Add support for finding multiple views with NativeIds using a single listener to Android ([f5efc46](https://github.com/facebook/react-native/commit/f5efc46) by [@axe-fb](https://github.com/axe-fb))
- Add CountingOutputStream ([a5e135a](https://github.com/facebook/react-native/commit/a5e135a) by [@hramos](https://github.com/hramos))
- Changes from Prettier ([b815eb5](https://github.com/facebook/react-native/commit/b815eb5), [e758cb7](https://github.com/facebook/react-native/commit/e758cb7), [bf9cabb](https://github.com/facebook/react-native/commit/bf9cabb), and [a5af841](https://github.com/facebook/react-native/commit/a5af841) by [@shergin](https://github.com/shergin))
- Typos in code ([8ffc16c](https://github.com/facebook/react-native/commit/8ffc16c) by [@ss18](https://github.com/ss18))
- Support for inherited events in view managers ([2afe7d4](https://github.com/facebook/react-native/commit/2afe7d4) by [@shergin](https://github.com/shergin))
- Flow types changes ([3fc33bb](https://github.com/facebook/react-native/commit/3fc33bb), [e485cde](https://github.com/facebook/react-native/commit/e485cde), [83ed9d1](https://github.com/facebook/react-native/commit/83ed9d1), [52ffa5d](https://github.com/facebook/react-native/commit/52ffa5d), [d37cdd9](https://github.com/facebook/react-native/commit/d37cdd9), [6e7fb01](https://github.com/facebook/react-native/commit/6e7fb01), [d99ba70](https://github.com/facebook/react-native/commit/d99ba70), [bcfbdf4](https://github.com/facebook/react-native/commit/bcfbdf4), and [a1c479f](https://github.com/facebook/react-native/commit/a1c479f) by [@alexeylang](https://github.com/alexeylang), [@sahrens](https://github.com/sahrens), [@yungsters](https://github.com/yungsters), and [@zjj010104](https://github.com/zjj010104))
- Give IInspector a virtual destructor for correct InspectorImpl destruction ([2a3c37f](https://github.com/facebook/react-native/commit/2a3c37f) by [@toulouse](https://github.com/toulouse))
- Migrated `SourceCode` and `DeviceInfoModule` out of Native Modules ([47fe523](https://github.com/facebook/react-native/commit/47fe523) and [429fcc8](https://github.com/facebook/react-native/commit/429fcc8))
- Jest config change as part of bringing back support for the `assetPlugin` option in Metro ([af6450c](https://github.com/facebook/react-native/commit/af6450c) by [@ide](https://github.com/ide))
- Nested virtualized lists should receive recordInteration events ([ae2d5b1](https://github.com/facebook/react-native/commit/ae2d5b1))
- Upgrade connect dependency ([709ede7](https://github.com/facebook/react-native/commit/709ede7) by [@rafeca](https://github.com/rafeca))
- xplat/js: asyncRequire: redirect async modules to control modules ([5e11b88](https://github.com/facebook/react-native/commit/5e11b88) by [@jeanlauliac](https://github.com/jeanlauliac))
- More progress towards split bundle support ([1a1a956](https://github.com/facebook/react-native/commit/1a1a956) and [9e34cbd](https://github.com/facebook/react-native/commit/9e34cbd) by [@fromcelticpark](https://github.com/fromcelticpark))
- Implement bundle sync status ([88980f2](https://github.com/facebook/react-native/commit/88980f2))
- Various improvements to RCTSurface and RCTShadowView ([7d9e902](https://github.com/facebook/react-native/commit/7d9e902), [06ebaf2](https://github.com/facebook/react-native/commit/06ebaf2), [6882132](https://github.com/facebook/react-native/commit/6882132), and [193a2bd](https://github.com/facebook/react-native/commit/193a2bd) by [@shergin](https://github.com/shergin))
- Progress towards experimental ReactFabric and FabricUIManager ([b1e5c01](https://github.com/facebook/react-native/commit/b1e5c01), [fa0ac92](https://github.com/facebook/react-native/commit/fa0ac92), [94dac23](https://github.com/facebook/react-native/commit/94dac23) by [@fkgozali](https://github.com/fkgozali))
- (almost) kill fbjsc ([702b7e8](https://github.com/facebook/react-native/commit/702b7e8) by [@michalgr](https://github.com/michalgr))
- Refactored bridge ReadableNativeMap and ReadableNativeArray to add centralized accesses ([7891805](https://github.com/facebook/react-native/commit/7891805), [28be33a](https://github.com/facebook/react-native/commit/28be33a), and [5649aed](https://github.com/facebook/react-native/commit/5649aed))
- Removed unused core from Image.android.js ([ce3146a](https://github.com/facebook/react-native/commit/ce3146a) by [@shergin](https://github.com/shergin))
- Capture StackOverflowExceptions triggered when drawing a ReactViewGroup or ReactRootView and log more debugging information for it ([1aac962](https://github.com/facebook/react-native/commit/1aac962) and [4d3519c](https://github.com/facebook/react-native/commit/4d3519c) by [@mdvacca](https://github.com/mdvacca))
- `babel-preset-react-native`: only require plugins once ([df6c48c](https://github.com/facebook/react-native/commit/df6c48c) by [@davidaurelio](https://github.com/davidaurelio))
- Report module id as string and as double, in case of invalid values are passed to nativeRequire ([8f358a2](https://github.com/facebook/react-native/commit/8f358a2) by [@fromcelticpark](https://github.com/fromcelticpark))
- More work moving build configurations to Skylark ([d3db764](https://github.com/facebook/react-native/commit/d3db764), [869866c](https://github.com/facebook/react-native/commit/869866c), [a8c95d2](https://github.com/facebook/react-native/commit/a8c95d2), and [79a63d0](https://github.com/facebook/react-native/commit/79a63d0) by [@mzlee](https://github.com/mzlee), [@ttsugriy](https://github.com/ttsugriy), and others)
- `[RCTShadowView isHidden]` was removed ([c19bc79](https://github.com/facebook/react-native/commit/c19bc79) by [@shergin](https://github.com/shergin))
- Remove unused `packagerInstance` option and rename it to `server` ([bbbc18c](https://github.com/facebook/react-native/commit/bbbc18c))
- The blog has moved to [react-native-website](https://github.com/facebook/react-native-website/tree/master/website/blog) ([e16d673](https://github.com/facebook/react-native/commit/e16d673) by [@hramos](https://github.com/hramos))
- Remove SoLoaderShim, use SoLoader ([fc6dd78](https://github.com/facebook/react-native/commit/fc6dd78) by [@foghina](https://github.com/foghina))
- Removed broken link for 'Getting Help' in the README ([b3a306a](https://github.com/facebook/react-native/commit/b3a306a) by [@rickydam](https://github.com/rickydam))
- Changed to use boost-for-react-native cocoapod, which speeds up `pod install` a ton; this was in 0.53 originally but had to be re-added ([d40db3a](https://github.com/facebook/react-native/commit/d40db3a) by [@CFKevinRef](https://github.com/CFKevinRef))
- Remove fbobjc's RN copy ([af0c863](https://github.com/facebook/react-native/commit/af0c863))
- Measure time to create **ReactInstanceManager** ([6224ef5](https://github.com/facebook/react-native/commit/6224ef5) by [@alexeylang](https://github.com/alexeylang))
- Upgrade create-react-class to v15.6.3 ([74f3866](https://github.com/facebook/react-native/commit/74f3866) by [@bvaughn](https://github.com/bvaughn))
- Upgrade react-devtools to v3.1.0 ([8235a49](https://github.com/facebook/react-native/commit/8235a49) by [@bvaughn](https://github.com/bvaughn))
- Upgrade flow to v0.65.0 ([7aba456](https://github.com/facebook/react-native/commit/7aba456) and [298f3bb](https://github.com/facebook/react-native/commit/298f3bb) by [@avikchaudhuri](https://github.com/avikchaudhuri) and [@mroch](https://github.com/mroch))
- Upgrade Jest to v22.2.1 ([46f4d3e](https://github.com/facebook/react-native/commit/46f4d3e) and [24e521c](https://github.com/facebook/react-native/commit/24e521c) by [@mjesun](https://github.com/mjesun))
- Upgrade ESLint to v4.17.0 (plus update related deps) ([bba19e8](https://github.com/facebook/react-native/commit/bba19e8) by [@zertosh](https://github.com/zertosh))
- Upgrade React to v16.3.0-alpha.1 ([03d7b2a](https://github.com/facebook/react-native/commit/03d7b2a) and [5e80d95](https://github.com/facebook/react-native/commit/5e80d95) by [@grabbou](https://github.com/grabbou) and [@hramos](https://github.com/hramos))
- Synced React and ReactFabric render ([c7ed03a](https://github.com/facebook/react-native/commit/c7ed03a), [1382975](https://github.com/facebook/react-native/commit/1382975), and [d676746](https://github.com/facebook/react-native/commit/d676746) by [@bvaughn](https://github.com/bvaughn))
- Upgrade metro to v0.26.0 ([9e6f3b8](https://github.com/facebook/react-native/commit/9e6f3b8), [ce50f25](https://github.com/facebook/react-native/commit/ce50f25), [e9b83e6](https://github.com/facebook/react-native/commit/e9b83e6), [2fe7483](https://github.com/facebook/react-native/commit/2fe7483), [0f96ebd](https://github.com/facebook/react-native/commit/0f96ebd), [0de470e](https://github.com/facebook/react-native/commit/0de470e), [e8893a0](https://github.com/facebook/react-native/commit/e8893a0), and [f4fde9d](https://github.com/facebook/react-native/commit/f4fde9d) by [@rafeca](https://github.com/rafeca) and [@grabbou](https://github.com/grabbou))
- Add Context to Redbox report api ([e3c27f5](https://github.com/facebook/react-native/commit/e3c27f5) by [@ayc1](https://github.com/ayc1))
- GitHub bot commands have been disabled in the short term ([b973fe4](https://github.com/facebook/react-native/commit/b973fe4) by [@hramos](https://github.com/hramos))
- Various CI configuration changes ([17bd6c8](https://github.com/facebook/react-native/commit/17bd6c8), [51b6749](https://github.com/facebook/react-native/commit/51b6749), [a2f3ba8](https://github.com/facebook/react-native/commit/a2f3ba8), [2ef9b7f](https://github.com/facebook/react-native/commit/2ef9b7f), [40b1792](https://github.com/facebook/react-native/commit/40b1792), [613afba](https://github.com/facebook/react-native/commit/613afba), [da8bec9](https://github.com/facebook/react-native/commit/da8bec9), [fa11fae](https://github.com/facebook/react-native/commit/fa11fae), [f50af7f](https://github.com/facebook/react-native/commit/f50af7f), [9227ba7](https://github.com/facebook/react-native/commit/9227ba7), [365a4d4](https://github.com/facebook/react-native/commit/365a4d4), [b58d848](https://github.com/facebook/react-native/commit/b58d848), [c8e98bb](https://github.com/facebook/react-native/commit/c8e98bb), [f5975a9](https://github.com/facebook/react-native/commit/f5975a9), and [605a6e4](https://github.com/facebook/react-native/commit/605a6e4) by [@hramos](https://github.com/hramos), [@grabbou](https://github.com/grabbou), and [@dryganets](https://github.com/dryganets))
- Restore copyright header ([4f883bd](https://github.com/facebook/react-native/commit/4f883bd) by [@hramos](https://github.com/hramos))
- Trim docs that are already present in the open source docs site ([28d60b6](https://github.com/facebook/react-native/commit/28d60b6) by [@hramos](https://github.com/hramos))
- Fix obsolete instructions about editing docs ([2f46712](https://github.com/facebook/react-native/commit/2f46712) by [@ExplodingCabbage](https://github.com/ExplodingCabbage))
- Fix links to beginner friendly issues ([c355a34](https://github.com/facebook/react-native/commit/c355a34) by [@hotchemi](https://github.com/hotchemi))
- Typos in comments and log messages ([d2c5697](https://github.com/facebook/react-native/commit/d2c5697) by [@ss18](https://github.com/ss18))
- Don't run the Danger CI tool through Flow ([1ea3065](https://github.com/facebook/react-native/commit/1ea3065) by [@hramos](https://github.com/hramos))
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
- Changed to use _boost-for-react-native_ cocoapod, which speeds up `pod install` a ton ([cf19833](https://github.com/facebook/react-native/commit/cf19833) by [@CFKevinRef](https://github.com/CFKevinRef))

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
- **Debug JS in Nuclide** is now an option in the dev menu 🐜
  ([7c7108a](https://github.com/facebook/react-native/commit/7c7108a) and
  [de424cc](https://github.com/facebook/react-native/commit/de424cc))
- Introducing **PlatformOS** – it looks a lot like **Platform**, but with a
  simplified API
  ([5ee27ff](https://github.com/facebook/react-native/commit/5ee27ff) by
  [@brishin](https://github.com/brishin))
- New experimental _RCTSurface_: measure and layout a UI in a thread-safe and
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
- On integration tests, report _all_ errors
  ([3bcb912](https://github.com/facebook/react-native/commit/3bcb912) by
  [@sahrens](https://github.com/sahrens))
- Yoga has less technical debt, thanks to replacing _YGNodeList_ with vectors
  ([b08a912](https://github.com/facebook/react-native/commit/b08a912) by
  [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Yoga is now cpp, compiled as _c++1y_
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
- _packager-worker-for-buck_ has better tests
  ([7fd5aa8](https://github.com/facebook/react-native/commit/7fd5aa8) by
  [@jeanlauliac](https://github.com/jeanlauliac))
- _RCTUIManager_ has less technical debt
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
  system overlays; they're now part of the _currentActivity_
  ([d19afc7](https://github.com/facebook/react-native/commit/d19afc7) by
  [@kmagiera](https://github.com/kmagiera))

#### iOS exclusive changes

- Improve iOS's _accessibilityLabel_ performance by up to 20% 📈
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
- Fix assertion preventing YGNodeLayoutGet\* with YGEdgeEnd
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

- Explicitly `#define isnan __builtin_isnan` for Android _clang-5_ to mimic
  **gcc**'s default behavior
  ([f8fe6b0](https://github.com/facebook/react-native/commit/f8fe6b0))
- Correctly update **NetInfo** on Android even if connection types change while
  the app is in the background
  ([e6f542d](https://github.com/facebook/react-native/commit/e6f542d) by
  [@berickson1](https://github.com/berickson1))
- Direction-aware borders now work with Android APIs >= 17
  ([7170543](https://github.com/facebook/react-native/commit/7170543) by
  [@rsnara](https://github.com/rsnara))
- Don't throw _BadTokenException_ and _IllegalArgmentException_ when showing or
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

- Don't have XCode warnings for _YGDefaultLog_ in newly created projects
  ([72e762d](https://github.com/facebook/react-native/commit/72e762d) by
  [@woehrl01](https://github.com/woehrl01))
- iOS _RCTEventEmitter_ uses a `double` for count, not _NSInteger_
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
- Implement `requiresMainQueueSetup` in _RCTTVNavigationEventEmitter_ to satisfy
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
- Prevent iOS crash on receiving bad unicode in _XMLHTTPRequest_
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

- Removing `reactBridgeDidFinishTransaction` from _RCTScrollView_
  ([a255204](https://github.com/facebook/react-native/commit/a255204) by
  [@shergin](https://github.com/shergin))
- Removing inherited background color optimization from _RCTText_ to reduce code
  complexity – please give feedback if you find performance differences!
  ([8c8944c](https://github.com/facebook/react-native/commit/8c8944c) by
  [@shergin](https://github.com/shergin))

### Other

Below is a list of the remaining, low-level changes that made it into this
release of React Native.

- Foundational work for a new justifyContent value **space-evenly**
  ([1050e0b](https://github.com/facebook/react-native/commit/1050e0b) by
  [@woehrl01](https://github.com/woehrl01))
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
- Add _RCTLibraryPathForURL_ in _RCTUtil_
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
- Renaming _uiManagerWillFlushUIBlocks_ -> _uiManagerWillPerformMounting_
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
- Pass `scriptURL` to _RCTTestRunner_
  ([266ab7a](https://github.com/facebook/react-native/commit/266ab7a))
- Make _RCTNativeModule::invokeInner_ explicitely return `folly::none` in case
  of error ([0ac5a52](https://github.com/facebook/react-native/commit/0ac5a52)
  by [@fromcelticpark](https://github.com/fromcelticpark))
- Make _RCTPackagerConnection_ a singleton
  ([9180d4e](https://github.com/facebook/react-native/commit/9180d4e) by
  [@adamjernst](https://github.com/adamjernst))
- Register split segment paths with _RAMBundleRegistry_
  ([cff0d8e](https://github.com/facebook/react-native/commit/cff0d8e) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- check if listener is still in the set before calling `onHostResume`
  ([ad89ea7](https://github.com/facebook/react-native/commit/ad89ea7))
- export _SeparatorsObj_ type for re-use in **ListItem**s etc.
  ([c6fe101](https://github.com/facebook/react-native/commit/c6fe101) by
  [@sahrens](https://github.com/sahrens))
- Do not mark node as dirty if, new and old values are undefined
  ([41da6e3](https://github.com/facebook/react-native/commit/41da6e3) by
  [@woehrl01](https://github.com/woehrl01))
- Remove _RAMBundleRegistry_ subclasses
  ([6ecae73](https://github.com/facebook/react-native/commit/6ecae73) by
  [@fromcelticpark](https://github.com/fromcelticpark))
- Fix `minimumViewTime` in _ViewabilityHelper_
  ([d19d137](https://github.com/facebook/react-native/commit/d19d137))
