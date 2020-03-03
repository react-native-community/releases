# Changelog

## [v0.62.0]

### Breaking

- Removing <TextInput>'s `onTextInput` event ([3f7e0a2c96](https://github.com/facebook/react-native/commit/3f7e0a2c9601fc186f25bfd794cd0008ac3983ab) by [@shergin](https://github.com/shergin))
- Remove TextInput's `inputView` prop ([1804e7cbea](https://github.com/facebook/react-native/commit/1804e7cbea707a35046118090966a54031edfae8) by [@TheSavior](https://github.com/TheSavior))
- Animated: Remove `defaultProps` Parameter ([a70987cee2](https://github.com/facebook/react-native/commit/a70987cee24bcd027b9c4a5aa85dfd6a1aab74b3) by [@yungsters](https://github.com/yungsters))
- RN: Delete `TextInput.selectionState` Prop ([2becdfd404](https://github.com/facebook/react-native/commit/2becdfd4041f7f28138ba3a61c03e17c06dc2e50) by [@yungsters](https://github.com/yungsters))

#### Android specific

- BREAKING: rm YogaNode parameter from YogaLogger#log ([94e8ccf9c0](https://github.com/facebook/react-native/commit/94e8ccf9c02318eb407d3ce58e5e14a273967375) by [@usikder](https://github.com/usikder))

#### iOS specific

- React DevTools v4 integration ([92a3c9da0a](https://github.com/facebook/react-native/commit/92a3c9da0a38870a8bad7c91bdc3ddb494f6e5f2) by [@bvaughn](https://github.com/bvaughn))

### Added

- Add test for the `processColorArray` to make sure it maps correctly ([3c4b1d6c4f](https://github.com/facebook/react-native/commit/3c4b1d6c4faad30110a0cc7a5025715a5da44ec7) by [@talhaazhar](https://github.com/talhaazhar))
- Clean up unused functions on ReactContext ([3963c7aa56](https://github.com/facebook/react-native/commit/3963c7aa56ee54614aff77dd7f7250b227159192) by [@ejanzer](https://github.com/ejanzer))
- Add getNativeScrollRef method to FlatList component ([bde1d63c85](https://github.com/facebook/react-native/commit/bde1d63c853630609b22c87121c125775dd1f5cb) by [@kacieb](https://github.com/kacieb))
- Add missing accessibility props on Touchables ([8c0c860e38](https://github.com/facebook/react-native/commit/8c0c860e38f57e18296f689e47dfb4a54088c260) by [@xuelgong](https://github.com/xuelgong))
- Added missing `console` polyfills in release builds. ([b7ab922bb3](https://github.com/facebook/react-native/commit/b7ab922bb3fd4f9f103e583bed9e9295a9521578) by [@yungsters](https://github.com/yungsters))
- Added RCTUtilsUIOverride as a way to shortcut obtaining presentedViewController from sharedApplication to a supplied view controller for extensions. ([2968450195](https://github.com/facebook/react-native/commit/29684501952c9c1b7577009fc7caf1449c96f434))
- Platform.select now supports native as an option. ([a6fc0898de](https://github.com/facebook/react-native/commit/a6fc0898de990959d201b9665501deda215e41a4) by [@koke](https://github.com/koke))
- Update README.md ([5a4d68feb5](https://github.com/facebook/react-native/commit/5a4d68feb5be71173755a3f0b5e0a54ed5c8a581) by [@Priyanshu2001](https://github.com/Priyanshu2001))
- Add ProgressView to LegacyViewManagerInterop white list ([53f003f233](https://github.com/facebook/react-native/commit/53f003f233e323f3c75ecbd833da0e5ea3a4111e) by [@sammy-SC](https://github.com/sammy-SC))
- Add accessibilityValue prop on Touchables ([3042407f43](https://github.com/facebook/react-native/commit/3042407f43b69994abc00350681f1f0a79683bfd) by [@xuelgong](https://github.com/xuelgong))
- Partial React Sync ([90a9d59679](https://github.com/facebook/react-native/commit/90a9d59679bb955cc509938d5ef95f29346debbc) by [@rickhanlonii](https://github.com/rickhanlonii))
- Use volatile for sDidInit in ReactBridge ([c3a07b6dcc](https://github.com/facebook/react-native/commit/c3a07b6dcc56260b288dc11ed168fd723c7c4256) by [@ejanzer](https://github.com/ejanzer))
- Export props type for TextInput component ([9a2bc71064](https://github.com/facebook/react-native/commit/9a2bc7106415e09f23c9667dd8ec3dffec4e76a7) by [@vasilich6107](https://github.com/vasilich6107))
- Add separate classes to implement JNI methods suing vanilla JNI ([34b71e4fb4](https://github.com/facebook/react-native/commit/34b71e4fb4be461aa53c2b0de190f267567218d5) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Export the DevSettings module, add `addMenuItem` method ([cc068b0551](https://github.com/facebook/react-native/commit/cc068b055185e6fb7341bf945f69a74ed3ef4814) by [@janicduplessis](https://github.com/janicduplessis))
- Expose RCTNetworking as a public 'Networking' API ([42ee5ec934](https://github.com/facebook/react-native/commit/42ee5ec93425c95dee6125a6ff6864ec647636aa) by [@adamchel](https://github.com/adamchel))
- Reset sMatrixDecompositionContext before applying transformations ([bf01dfbc97](https://github.com/facebook/react-native/commit/bf01dfbc97ea8be9d88214ab31809f2f42d6c064) by [@makovkastar](https://github.com/makovkastar))
- UseColorScheme hook ([51681e80ab](https://github.com/facebook/react-native/commit/51681e80ab0d1efdaba684b626994b694d53d2a5) by [@hramos](https://github.com/hramos))
- Add recursive imports for Array types ([685a25ca2e](https://github.com/facebook/react-native/commit/685a25ca2ea5bfeeaef9802fd031e8a972561811) by [@TheSavior](https://github.com/TheSavior))
- Delete UIManagerStatTracker ([84f148ba44](https://github.com/facebook/react-native/commit/84f148ba440d6bfea56b77a10b4be4730a626d66) by [@TheSavior](https://github.com/TheSavior))

#### Android specific

- Implement `adjustsFontSizeToFit` on Android ([2c1913f0b3](https://github.com/facebook/react-native/commit/2c1913f0b3d12147654501f7ee43af1d313655d8) by [@janicduplessis](https://github.com/janicduplessis))
- Allow overriding `EditText` construction in `ReactTextInputShadowNode` ([a5b5d1a805](https://github.com/facebook/react-native/commit/a5b5d1a805a9c54d325763b432be1cf2c8811dc9) by [@mchowning](https://github.com/mchowning))
- Implement TurboModule eager initialization support ([b7f49a84d5](https://github.com/facebook/react-native/commit/b7f49a84d5dc17ce4d5591cd0b02c35479a99f7f) by [@RSNara](https://github.com/RSNara))
- Give ReactContextBaseJavaModule a 0 arg ctor ([e69be0ae55](https://github.com/facebook/react-native/commit/e69be0ae555dad2bdec0ea7e4fc62a4ee349cc2d) by [@RSNara](https://github.com/RSNara))
- Use generated Java delegate for setting properties on ReactViewPagerManager ([bca8fa5a16](https://github.com/facebook/react-native/commit/bca8fa5a16b1c0441145b1d10462b234b787c131) by [@makovkastar](https://github.com/makovkastar))
- Add setNativeSelectedPosition command to ReactPickerManager ([a62a685b14](https://github.com/facebook/react-native/commit/a62a685b1412d1c0eda036262af2ee97338aac40) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on ReactDialogPickerManager and ReactDropdownPickerManager ([e99b926d27](https://github.com/facebook/react-native/commit/e99b926d27fffe8d069f9af75b976845cc3ad43f) by [@makovkastar](https://github.com/makovkastar))
- Assert TurboModuleRegistry isn't null before using it in CatalystInstanceImpl ([56ad1bd38a](https://github.com/facebook/react-native/commit/56ad1bd38ac772f2a2335de5ac798eb8c3526f1e) by [@RSNara](https://github.com/RSNara))
- Add Android support for fontVariant prop ([c2c4b43dfe](https://github.com/facebook/react-native/commit/c2c4b43dfe098342a6958a20f6a1d841f7526e48) by [@mcuelenaere](https://github.com/mcuelenaere))
- Check in TurboModules codegen ([d3ac9fa0c3](https://github.com/facebook/react-native/commit/d3ac9fa0c3780b43b73de97831b75cf0a7efe9c4) by [@RSNara](https://github.com/RSNara))
- Custom entry file on android using `ENTRY_FILE` environment variable ([a0d8740878](https://github.com/facebook/react-native/commit/a0d87408782fcf191988612198493d9130736c72))
- Added statusBarTranslucent prop to Modal component, to indicate if StatusBar should appear translucent. ([c35a419e5d](https://github.com/facebook/react-native/commit/c35a419e5d2eca4fe9cd0939df085088fa88423b) by [@pfulop](https://github.com/pfulop))
- Limit size of video uploaded from camera roll in android ([d21f695edf](https://github.com/facebook/react-native/commit/d21f695edf367166a03af4c6e9376cd498b38665))
- New Appearance module exposes the user's current Night theme preference ([17862a78db](https://github.com/facebook/react-native/commit/17862a78db59d60fe316961f9111efc330ba2abd) by [@hramos](https://github.com/hramos))
- Fading edges props to the FlatList and ScrollView components ([51aacd5241](https://github.com/facebook/react-native/commit/51aacd5241c4b4c0b9b1e1b8f9dabac45e5b5291))
- Fading edges props to the FlatList and ScrollView components ([f8a64f9d61](https://github.com/facebook/react-native/commit/f8a64f9d61054046bffc286df3e9abf805aac0d4))

#### iOS specific

- Add support for onRequestClose prop to Modal on iOS 13+ ([ed11a12a7c](https://github.com/facebook/react-native/commit/ed11a12a7c831225d2725855e95bde1f93ea16b3
  8e5fac89bbdcc3028bb5d81a358969a235abf991) by [@koke](https://github.com/koke))
- Added web socket support for macOS (Catalyst), enabling debug builds and live reload ([f21fa4ecb7](https://github.com/facebook/react-native/commit/f21fa4ecb73551bdc4c3d70db9fc13e93b19b3a6) by [@andymatuschak](https://github.com/andymatuschak))
- Added Flipper to template app ([52cd9cd6fe](https://github.com/facebook/react-native/commit/52cd9cd6fec0866177aa02f7129a8b3d8b2bdbea) by [@safaiyeh](https://github.com/safaiyeh))
- Make RCTDevLoadingView TurboModule-compatible ([6a9a76e420](https://github.com/facebook/react-native/commit/6a9a76e4200d5ff12341d3487b6bff7c8a6dbc88
  1ad08623630ed5a9ed6973cab7aa5a177ae467a9
  294e31b7c258be636f3b5bc816228cd4339e1d0f) by [@RSNara](https://github.com/RSNara))
- Summary: Changelog: [iOS][changed] - Added another build flag for DevLoadingView ([3ceb95954a](https://github.com/facebook/react-native/commit/3ceb95954a5992f5af66e84a77906e0e41d82f46) by [@mmmulani](https://github.com/mmmulani))
- Make PushNotificationManager TurboModule-compatible ([861c860462](https://github.com/facebook/react-native/commit/861c8604627494262648074c07a1133a06b6c859) by [@RSNara](https://github.com/RSNara))
- Make RCTWebSocketModule TurboModule-compatible ([d73ae1baa3](https://github.com/facebook/react-native/commit/d73ae1baa39f025eee47ef869e7bc17ca8ef7ff2) by [@RSNara](https://github.com/RSNara))
- Make RCTLinkingManager TurboModule-compatible ([1b2992e8b3](https://github.com/facebook/react-native/commit/1b2992e8b35e500104d07d38adb2ea5a1d98d3ed) by [@RSNara](https://github.com/RSNara))
- Make RCTDataRequestHandler, RCTFileRequestHandler, and RCTHTTPRequestHandler TurboModule-compatible ([6f54f00e0d](https://github.com/facebook/react-native/commit/6f54f00e0d3f66d338068a7d2a5f192e87dcc0e7) by [@RSNara](https://github.com/RSNara))
- Make RCTNetworking TurboModule-compatible ([ffb8191a51](https://github.com/facebook/react-native/commit/ffb8191a51afef1959768e27b4bd347201308ac5) by [@RSNara](https://github.com/RSNara))
- Make RCTCameraRollManager TurboModule-compatible ([1d315608ef](https://github.com/facebook/react-native/commit/1d315608ef0f7e91809aef5a1fd8d1ad482dafcc) by [@RSNara](https://github.com/RSNara))
- Added RCTConvertOptionalVecToArray with default converter ([c29ec64d94](https://github.com/facebook/react-native/commit/c29ec64d94a0dc908e630fbe751cd5ed3d1699d9) by [@RSNara](https://github.com/RSNara))
- Make RCTTVNavigationEventEmitter TurboModule-compatible ([3beb8341fd](https://github.com/facebook/react-native/commit/3beb8341fd81c7a304d1f8149491f9c1b8faecd9) by [@RSNara](https://github.com/RSNara))
- Make RedBox TurboModule-compatible ([7e5de4e241](https://github.com/facebook/react-native/commit/7e5de4e2410d724e86f3e87cc8136bd4c78820c3) by [@RSNara](https://github.com/RSNara))
- Make RCTDevMenu and RCTDevSettings TurboModule-compatible ([8fe04cfd7e](https://github.com/facebook/react-native/commit/8fe04cfd7e54b4dc98b788823dcaf4afc415c697
  40c588e0dedb339f42f972424a4ca95fb3bc5708
  fe3ae9dce81084b9389d755381b9c6e4ce0f0e4c) by [@RSNara](https://github.com/RSNara))
- Make RCTPerfMonitor TurboModule-compatible ([809d01095e](https://github.com/facebook/react-native/commit/809d01095ed7ca65a6373f7ac1f93979ecde7e17) by [@RSNara](https://github.com/RSNara))
- Make RCTAppState TurboModule-compatible ([7233ae4f11](https://github.com/facebook/react-native/commit/7233ae4f114555241571f000f5177b17b5d074c4) by [@RSNara](https://github.com/RSNara))
- Make RCTKeyboardObserver TurboModule-compatible ([6481a124da](https://github.com/facebook/react-native/commit/6481a124dad70be133bfcfb77802502400677197) by [@RSNara](https://github.com/RSNara))
- Make RCTStatusBarManager TurboModule-compatible ([dc12676e3a](https://github.com/facebook/react-native/commit/dc12676e3a5bf6bda545fe7fafb1027d056b8dd2) by [@RSNara](https://github.com/RSNara))
- Make RCTImageEditingManager and RCTImageStoreManager TurboModule-compatible ([32b2020031](https://github.com/facebook/react-native/commit/32b2020031b82a1a961b522f60c5733bf0441316) by [@RSNara](https://github.com/RSNara))
- Make RCTLocalAssetImageLoader and RCTGIFImageDecoder TurboModule-compatible ([c8701b6b36](https://github.com/facebook/react-native/commit/c8701b6b36f3cc807678fc6f59308185f6f2edb9) by [@RSNara](https://github.com/RSNara))
- Summary: Changelog: [iOS][added] Make RCTTiming TurboModule-compatible ([2b5f4de7eb](https://github.com/facebook/react-native/commit/2b5f4de7eb4e5453e91d4956bcb0f58fe37b6562) by [@RSNara](https://github.com/RSNara))
- Make RCTNativeAnimatedMoudle TurboModule-compatible ([791931454e](https://github.com/facebook/react-native/commit/791931454e12f265d8aa12d85ba5e1ca3c2df539) by [@RSNara](https://github.com/RSNara))
- RCTRedBox ability to add extra buttons ([fc80a51457](https://github.com/facebook/react-native/commit/fc80a5145719ccecbefc25bfedbad6224b54efab) by [@mmmulani](https://github.com/mmmulani))
- Make RCTAsyncLocalStorage TurboModule-compatible ([2b62bd7695](https://github.com/facebook/react-native/commit/2b62bd7695e568ff97797f161ef9f75a063eece2) by [@RSNara](https://github.com/RSNara))
- Make RCTAlertManager TurboModule-compatible ([da6274ba76](https://github.com/facebook/react-native/commit/da6274ba76afaa271d6a74e4143479c93fa9bb14) by [@RSNara](https://github.com/RSNara))
- Add definition for `queryCache` in ImageLoader ([76ab5062e9](https://github.com/facebook/react-native/commit/76ab5062e973dd70d52ee5e9b0ed2a0cc1def323
  ea1e8bbd34b655a062ef13b6c2c76660ed43d31a) by [@lunaleaps](https://github.com/lunaleaps))
- Add `prefetchImage` to ImageLoader native module. ([0167dff209](https://github.com/facebook/react-native/commit/0167dff2094e1b1c42d981c0b97f9baf3707921f
  40667a814701cadae5493f599393ef94608c300f) by [@lunaleaps](https://github.com/lunaleaps))
- Add and use reloadWithReason to iOS ([2ccc8fbc28](https://github.com/facebook/react-native/commit/2ccc8fbc28ffcf05fdf058e2b330a15df0c8286f) by [@rickhanlonii](https://github.com/rickhanlonii))
- Added Warning message Linking API with Phones in iOS Simulator ([e1d89fbd9d](https://github.com/facebook/react-native/commit/e1d89fbd9df91679ec36e955a3d0f699c2d5e777) by [@espipj](https://github.com/espipj))
- The Appearance native module can be used to prepare your app for Dark Mode on iOS 13. ([63fa3f21c5](https://github.com/facebook/react-native/commit/63fa3f21c5ab308def450bffb22054241a8842ef) by [@hramos](https://github.com/hramos))
- IOS Pods: added missing deps for React-CoreModules ([15b2353382](https://github.com/facebook/react-native/commit/15b2353382c46dc5f0130ff44b9deb6a2361e3e5) by [@fkgozali](https://github.com/fkgozali))

### Changed

- TouchableHighlight overhauled as a class without propTypes. ([7c01172bef](https://github.com/facebook/react-native/commit/7c01172befd07f1d082b18993b87fc880e4b718f) by [@yungsters](https://github.com/yungsters))
- TouchableNativeFeedback overhauled as a class without propTypes. Also, replaced iOS error renderer. ([2185dd298a](https://github.com/facebook/react-native/commit/2185dd298a788c2b713ea17878fd36e06205b4da) by [@yungsters](https://github.com/yungsters))
- TouchableOpacity overhauled as a class without propTypes. ([88ae24f719](https://github.com/facebook/react-native/commit/88ae24f719d365b004696aff6461535188ca9f41) by [@yungsters](https://github.com/yungsters))
- TouchableWithoutFeedback overhauled as a class without propTypes. ([ebf7d75816](https://github.com/facebook/react-native/commit/ebf7d758164873169937321a4dccc3782359a0d3) by [@yungsters](https://github.com/yungsters))
- TextInput now properly sends native the end selection location on change ([dff490d140](https://github.com/facebook/react-native/commit/dff490d140010913d3209a2f3e987914b9c4eee4) by [@TheSavior](https://github.com/TheSavior))
- Partial React Sync from 6cff70a74...bb1853f73 ([390d0895ba](https://github.com/facebook/react-native/commit/390d0895ba1dd059ed65d8292c566bd2e46a9eba
  821166c1118edbeceb297ac78f2d2a7fb32036a0
  222a0895d9941635938738507fb4fa3b4231adbc) by [@TheSavior](https://github.com/TheSavior))
- Don't crash when pretty-format is not available ([25a21b8e49](https://github.com/facebook/react-native/commit/25a21b8e4984c27a28f3c3400479934014227163))
- React sync for revisions 0b61e2698...6cff70a74 (Includes React 16.11.0) ([1edce56a9d](https://github.com/facebook/react-native/commit/1edce56a9d6c0c6aa2ebc42200394e8f9ad88663) by [@gaearon](https://github.com/gaearon))
- TextInput now uses `forwardRef` allowing it to be used directly by new APIs requiring a host component. ([bbc5c35a61](https://github.com/facebook/react-native/commit/bbc5c35a61cd3af47ccb2dc62430e4b6a4d4e08f) by [@TheSavior](https://github.com/TheSavior))
- Split NativeImageLoader into NativeImageLoaderAndroid and NativeImageLoaderIOS ([d37baa78f1](https://github.com/facebook/react-native/commit/d37baa78f11f36aa5fb84307cc29ebe2bf444a33) by [@ejanzer](https://github.com/ejanzer))
- Update RNTester CocoaPods to 1.8.4 ([30197c3b85](https://github.com/facebook/react-native/commit/30197c3b850ce376f476fe358e014e28b32c55c1) by [@friederbluemle](https://github.com/friederbluemle))
- RNTester: Migrate TransformExample to hooks ([58726cee85](https://github.com/facebook/react-native/commit/58726cee8576af1beca23d02fb09c655ab3e1c84) by [@empyrical](https://github.com/empyrical))
- Update miscellaneous Metro packages to the latest version `v0.57.0` ([540a3b891e](https://github.com/facebook/react-native/commit/540a3b891ea12b5fae613d4da9d469351e4335bf) by [@EssamEmad](https://github.com/EssamEmad))
- Update RNTester Podfile.lock ([e660322cbd](https://github.com/facebook/react-native/commit/e660322cbdd21d9e6cb8fe66a3e218cac4f0ea7b) by [@friederbluemle](https://github.com/friederbluemle))
- TextInput no longer does an extra round trip to native on focus/blur ([e9b4928311](https://github.com/facebook/react-native/commit/e9b4928311513d3cbbd9d875827694eab6cfa932) by [@TheSavior](https://github.com/TheSavior))
- React partial sync for 15ed22757...2cfa5ea92 ([0799910705](https://github.com/facebook/react-native/commit/0799910705be868981b7cc9ddf03a2e82297031c) by [@TheSavior](https://github.com/TheSavior))
- Flow types for Animated components now validates prop names and yields the new component instance. ([e22946c25a](https://github.com/facebook/react-native/commit/e22946c25a91c8dcd15876495ded024b360163db) by [@yungsters](https://github.com/yungsters))
- Refs on an Animated component are now the internal component. The `getNode` call has been deprecated. ([66e72bb4e0](https://github.com/facebook/react-native/commit/66e72bb4e00aafbcb9f450ed5db261d98f99f82a) by [@yungsters](https://github.com/yungsters))
- RN: View Type Refinement for Events ([654d9d07c3](https://github.com/facebook/react-native/commit/654d9d07c3d5b556825f560be107f7d425ee5c0e) by [@yungsters](https://github.com/yungsters))
- Partial React Sync for revisions 4eeee358e12c...2b18a13d2bf ([bb29cd92cc](https://github.com/facebook/react-native/commit/bb29cd92cc96ee288c59e51689e6495c0c5ac895) by [@TheSavior](https://github.com/TheSavior))
- Render collapsed JavaScript frames in RedBox ([468d1a2d2e](https://github.com/facebook/react-native/commit/468d1a2d2e6c72d7c6d435ecaad8499997584de6) by [@motiz88](https://github.com/motiz88))
- React sync for revisions 85d05b3...4eeee35 ([a7e5a0a3dd](https://github.com/facebook/react-native/commit/a7e5a0a3dd50411a55acdb3627cbfd24a65177d9) by [@gaearon](https://github.com/gaearon))
- Make SafeAreView flow strict-local ([84915a2d68](https://github.com/facebook/react-native/commit/84915a2d68c2cb4cc17ca3a4651f33ba71a787ee) by [@TheSavior](https://github.com/TheSavior))
- Strengthen flowtype of measureLayout ([bcc58bce02](https://github.com/facebook/react-native/commit/bcc58bce02acf51f6d5cff6e5457f447f12b1e30) by [@TheSavior](https://github.com/TheSavior))
- Upgrade to latest dependencies in package.json template ([babf67f11c](https://github.com/facebook/react-native/commit/babf67f11c09397b11fa1dd8e82e3b5edddb8c25) by [@codler](https://github.com/codler))

#### Android specific

- Upgraded to Hermes 0.4.0 ([ab3c184555](https://github.com/facebook/react-native/commit/ab3c184555e382b8693cbfcdfe01ba89583ee726) by [@willholen](https://github.com/willholen))
- Expose addCookies method ([cc845ccfb4](https://github.com/facebook/react-native/commit/cc845ccfb4c0f841b876bca55c5f70efd72be538) by [@safaiyeh](https://github.com/safaiyeh))
- Upgrade Flipper version in default template ([939df8a01d](https://github.com/facebook/react-native/commit/939df8a01da09fd18baa4e66e2babd438db0ea8d) by [@passy](https://github.com/passy))
- Migrated from libfb to libfbjni for JNI calls ([9ad5e72b77](https://github.com/facebook/react-native/commit/9ad5e72b77013083f925108870ea6b17f4711a1d) by [@passy](https://github.com/passy))
- Formatted cpp/h code with clang-format ([d5ba113bb2](https://github.com/facebook/react-native/commit/d5ba113bb2cd839ea38768785e527fbbc9636e41) by [@passy](https://github.com/passy))
- Make DeviceInfo extend ReactContextBaseJavaModule ([5c6451247d](https://github.com/facebook/react-native/commit/5c6451247db725a213796b4d4d347178eaecf940) by [@RSNara](https://github.com/RSNara))
- Fix build failure due to duplicate libc++\_shared.so ([2fd50882b5](https://github.com/facebook/react-native/commit/2fd50882b56aa16befd5cfbc3c6b27e53c72474e) by [@dulmandakh](https://github.com/dulmandakh))
- MainActivity launchMode is singleTask ([7a42596438](https://github.com/facebook/react-native/commit/7a42596438018129d52ff04899ab4ddabd27cdcb) by [@dulmandakh](https://github.com/dulmandakh))
- Bump gradle-download-task to 4.0.2 ([088be260b6](https://github.com/facebook/react-native/commit/088be260b6727ba82167fe58cb1ee4410a6920b2) by [@dulmandakh](https://github.com/dulmandakh))
- Fix R8 warning ([bbb4e4480d](https://github.com/facebook/react-native/commit/bbb4e4480dc6727729431b8dbbc9f0982c63e77c) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Gradle to 6.0.1 ([701e66bde4](https://github.com/facebook/react-native/commit/701e66bde4ea0e404626c7805e2bcdfa0c129c05) by [@dulmandakh](https://github.com/dulmandakh))
- Changing method signatures for ImageLoaderModule to accept double for requestId ([641e9657dd](https://github.com/facebook/react-native/commit/641e9657ddab5d1b2676e98d86fd369372281d2c) by [@ejanzer](https://github.com/ejanzer))
- Update hermes-engine to newest version 0.3.0 ([61cb2686a2](https://github.com/facebook/react-native/commit/61cb2686a2e9b95ce3c6bb98807a671d5dd7240b) by [@mhorowitz](https://github.com/mhorowitz))
- Update Android Gradle plugin to 3.5.2 ([b41b5ce8ae](https://github.com/facebook/react-native/commit/b41b5ce8ae2902169ae58860da2c70a9233bea53) by [@friederbluemle](https://github.com/friederbluemle))
- Gradle wrapper 5.6.4 ([928f4434b9](https://github.com/facebook/react-native/commit/928f4434b9829c90098b1626b03938d932a9c1f6) by [@friederbluemle](https://github.com/friederbluemle))
- Fix specs Buck, thus Android CI ([fa0155d0ea](https://github.com/facebook/react-native/commit/fa0155d0ea45945380e1f1cd2d19ddff101ff08e) by [@dulmandakh](https://github.com/dulmandakh))
- Gradle wrapper 5.6.3 ([ff6b2ff325](https://github.com/facebook/react-native/commit/ff6b2ff325fb3b1d20fbba463ee2e87dfc474677) by [@friederbluemle](https://github.com/friederbluemle))
- ReactAndroid's Gradle file uses Node's module resolution algorithm to find JSC & Hermes ([fc25f288fe](https://github.com/facebook/react-native/commit/fc25f288fe553cb7e8f04b8ce4b56297b7fa40d5) by [@ide](https://github.com/ide))
- Update NativePermissionsAndroid.js to include ACCESS_BACKGROUND_LOCATION ([8fdf85685c](https://github.com/facebook/react-native/commit/8fdf85685c3f105d16c98cae8e1e864471340012) by [@dulmandakh](https://github.com/dulmandakh))
- Bump Soloader to 0.8.0 ([614039834b](https://github.com/facebook/react-native/commit/614039834bf255de096f8b1d168832f81b0cf3fa))
- Update Android Gradle plugin to 3.5.1 ([6aae8e0756](https://github.com/facebook/react-native/commit/6aae8e0756e20c20d591eaac863eaa9a27cf4439) by [@friederbluemle](https://github.com/friederbluemle))
- Add ACCESS_BACKGROUND_LOCATION to PermissionsAndroid ([8c099b5f53](https://github.com/facebook/react-native/commit/8c099b5f53405fe0806113ca7ccf0bbe1af92a21) by [@dulmandakh](https://github.com/dulmandakh))
- Cleanup DrawerLayoutAndroid ([60b57bad54](https://github.com/facebook/react-native/commit/60b57bad54e993c851df0e01ff42dd8aaaabff77) by [@dulmandakh](https://github.com/dulmandakh))
- Extract and reuse ANDROIDX_TEST_VERSION ([70b735c04a](https://github.com/facebook/react-native/commit/70b735c04ab580fd37ef20f12f03826b444211c0) by [@dulmandakh](https://github.com/dulmandakh))
- Lazily configure ReactAndroid gradle tasks ([7c8e266e39](https://github.com/facebook/react-native/commit/7c8e266e390de71ce39233b53a369b2c5e8a1c14) by [@dulmandakh](https://github.com/dulmandakh))
- Gradle wrapper 5.6.2 ([b1c954b1f1](https://github.com/facebook/react-native/commit/b1c954b1f1002168369ac2378135705acc38773b) by [@friederbluemle](https://github.com/friederbluemle))
- Bump android gradle plugin to 3.5.0 ([4763000554](https://github.com/facebook/react-native/commit/4763000554c71be40b82a740651706781acad2e3) by [@dulmandakh](https://github.com/dulmandakh))
- Gradle wrapper 5.6 ([be2a2529af](https://github.com/facebook/react-native/commit/be2a2529af21414e645f2b04c5a1c819828ecda6) by [@friederbluemle](https://github.com/friederbluemle))

#### iOS specific

- Remove the xcshareddata from .gitignore ([7980615d37](https://github.com/facebook/react-native/commit/7980615d371a7bf607a3787bca91cfde229c41dc) by [@pvinis](https://github.com/pvinis))
- Updated Flipper iOS integration to be included by default in the `Debug` configuration ([619d5d60df](https://github.com/facebook/react-native/commit/619d5d60dfa94966e7104febec08166c1b5eca49) by [@alloy](https://github.com/alloy))
- Changed doc. ([70ec7e2add](https://github.com/facebook/react-native/commit/70ec7e2add2b28ffcc68791b46a4848c482556c1) by [@jeswinsimon](https://github.com/jeswinsimon))
- New internal image attribution support, but files importing RCTImageLoader.h must be converted to ObjC++ ([fdcdca4cfa](https://github.com/facebook/react-native/commit/fdcdca4cfa5d6d5f03c34d274173ed7843ba91ea) by [@fkgozali](https://github.com/fkgozali))
- Make RCTTiming a regular NativeModule ([8797a5cfcb](https://github.com/facebook/react-native/commit/8797a5cfcb8a3dbd233408fb4ac86d78239f5e3f
  0ee1fd9e59362c9580011aaa1499c05378ef07af) by [@RSNara](https://github.com/RSNara))
- Separated NativeStatusBarManager into NativeStatusBarManager{IOS,Android} ([a257083d2b](https://github.com/facebook/react-native/commit/a257083d2bfeb6497dd5c2c99f2fe139a32c04e5) by [@RSNara](https://github.com/RSNara))
- Expose the isPackagerRunning methods on RCTBundleURLProvider ([fe9cba74fa](https://github.com/facebook/react-native/commit/fe9cba74fa6241b4c38a3df9481d3634ebd51bf9) by [@afoxman](https://github.com/afoxman))
- Refactor RCTRedBox button creation ([ef3f80abc1](https://github.com/facebook/react-native/commit/ef3f80abc16adda4cb8c3d11bf8d281af4b84611) by [@mmmulani](https://github.com/mmmulani))
- Remove ignored iOS schemes from template ([3e4c5c09c3](https://github.com/facebook/react-native/commit/3e4c5c09c37866ac3a711921a37136a392c618be) by [@friederbluemle](https://github.com/friederbluemle))
- Proper type for `RCTBackedTextInputViewProtocol::defaultTextAttributes` ([e271fa190d](https://github.com/facebook/react-native/commit/e271fa190d16e7d5d3bc8971c68e4797649d0057) by [@shergin](https://github.com/shergin))

### Deprecated

- Add deprecation warning to AccessibilityInfo.fetch ([523ab83338](https://github.com/facebook/react-native/commit/523ab8333800afbfb169c6fd70ab6611fe07cc2a) by [@TheSavior](https://github.com/TheSavior))
- Remove scrollWithoutAnimationTo from ScrollView ([c7e89909da](https://github.com/facebook/react-native/commit/c7e89909da70ac5290f9971080eb897567db3e43) by [@TheSavior](https://github.com/TheSavior))

#### Android specific

#### iOS specific

- Deprecate [bridge reload] API - prefer RCTReloadCommand ([ffe2306164](https://github.com/facebook/react-native/commit/ffe2306164ed7edfe5ab9d75b5122791037a852a) by [@PeteTheHeat](https://github.com/PeteTheHeat))

### Removed

- Removing experimental IncrementalPresenter component ([0ef0d3167e](https://github.com/facebook/react-native/commit/0ef0d3167e291f31ce01ceb729df77cc679d2330) by [@TheSavior](https://github.com/TheSavior))
- TouchableWithoutFeedback no longer exports Props. Use React.ElementConfig, instead. ([7bcae81299](https://github.com/facebook/react-native/commit/7bcae812997f669de5803cc781dcf3ea65baf0e9) by [@yungsters](https://github.com/yungsters))
- Upgrade yargs to 14.2.0 ([6c3d966477](https://github.com/facebook/react-native/commit/6c3d96647717d0b4356b84cefad4a14e09feed37) by [@sugarshin](https://github.com/sugarshin))
- Remove Sample and CrashyCrash ([8ec7e0966c](https://github.com/facebook/react-native/commit/8ec7e0966cf83ed29a39aab47c686bc60a124983) by [@RSNara](https://github.com/RSNara))
- Removed `propTypes` from Animated components. ([86d90c03eb](https://github.com/facebook/react-native/commit/86d90c03ebe39ebc4b2c6dcc0747b4f3a34f5f2f) by [@yungsters](https://github.com/yungsters))
- Removed `__skipSetNativeProps_FOR_TESTS_ONLY` from Animated components. ([dcd63078bd](https://github.com/facebook/react-native/commit/dcd63078bdab864830168005b940f638f1e08b23) by [@yungsters](https://github.com/yungsters))
- RN: Delete Apple TV Props ([548aad4ff1](https://github.com/facebook/react-native/commit/548aad4ff1dfef0d71bdd39aa83ad71e522a2546) by [@yungsters](https://github.com/yungsters))
- Remove support for framesToPop from ExceptionsManager ([8bc02fdd52](https://github.com/facebook/react-native/commit/8bc02fdd52124d0a24d96e4a61d7688328ef1660) by [@motiz88](https://github.com/motiz88))
- Remove framesToPop from YellowBox ([cf4d45ec2b](https://github.com/facebook/react-native/commit/cf4d45ec2bcd301be7793d5840de21ec7d02275b) by [@motiz88](https://github.com/motiz88))
- Fabirc: Improvements in `ImageResponseObserverCoordinator` ([69f9fd4f96](https://github.com/facebook/react-native/commit/69f9fd4f960cdfdf12fc9e30e7fd55f97cbbc2da) by [@shergin](https://github.com/shergin))
- Remove Flipper from RNTester ([ae5afaadcd](https://github.com/facebook/react-native/commit/ae5afaadcde03619cf9cf2b46b24d80e50b88e7a) by [@fkgozali](https://github.com/fkgozali))

#### Android specific

- NativeRunnableDeprecated ([973253af8a](https://github.com/facebook/react-native/commit/973253af8a47d9ebd137f554054e7a95f8ef2e45) by [@passy](https://github.com/passy))
- Delete com.facebook.react.modules.debug.NativeSourceCodeSpec ([4d9e5f8481](https://github.com/facebook/react-native/commit/4d9e5f8481531000380cf4d3d485fcde1321a37b) by [@RSNara](https://github.com/RSNara))
- Documentation Fix for the way to run RNTester Android ([4bda2dbbfc](https://github.com/facebook/react-native/commit/4bda2dbbfc1873b8355811af038e8fe8a2e2605a) by [@axe-fb](https://github.com/axe-fb))

#### iOS specific

- Remove copyright notices from iOS application template ([9c3fa57337](https://github.com/facebook/react-native/commit/9c3fa573379bb4824bbe02b5b5aa1ae3502772d8) by [@alloy](https://github.com/alloy))
- Stop using RCTConvert to convert between primitive types ([8797a5cfcb](https://github.com/facebook/react-native/commit/8797a5cfcb8a3dbd233408fb4ac86d78239f5e3f) by [@RSNara](https://github.com/RSNara))
- Picker: Add `warnOnce` saying, it has been moved to `@react-native-community/picker` ([9349313c99](https://github.com/facebook/react-native/commit/9349313c995a02b0a9de1e1692288dcd200a84b8) by [@jainkuniya](https://github.com/jainkuniya))
- Remove guard around isHotLoadingAvailable ([b070f05926](https://github.com/facebook/react-native/commit/b070f05926c1bb67ec6cf0e880fa51963775cc0e) by [@mmmulani](https://github.com/mmmulani))

### Fixed

- Remove Require cycle warning. ([674ac69cee](https://github.com/facebook/react-native/commit/674ac69cee7c1ce6096bee258880e79966322ee0) by [@Naturalclar](https://github.com/Naturalclar))
- RNTester instacrash from missing androidx dependency ([3797a6d464](https://github.com/facebook/react-native/commit/3797a6d464116454ab95848e7c62629d0bace424) by [@rickhanlonii](https://github.com/rickhanlonii))
- Restore behavior for `underlayColor={null}` in `TouchableHighlight`. ([37d8440a8e](https://github.com/facebook/react-native/commit/37d8440a8e35a53b81914e429502db527790b3cd) by [@yungsters](https://github.com/yungsters))
- Fix stack traces showing the wrong function name in some cases ([60b4ba16c0](https://github.com/facebook/react-native/commit/60b4ba16c008c23959ebd27ea7215f83878d1343) by [@motiz88](https://github.com/motiz88))
- Remove requestAnimationFrame when focusing input on mount ([5798cf2aa9](https://github.com/facebook/react-native/commit/5798cf2aa9b86bbcb40016aae14eca88fca19fde) by [@janicduplessis](https://github.com/janicduplessis))
- Reduce overhead of setting up timers in DEV ([75a154b449](https://github.com/facebook/react-native/commit/75a154b4499e44b4ab31ccf28f9eb1dbf21578ac) by [@motiz88](https://github.com/motiz88))
- : Fixed an issue where margin and padding were resolved incorrectly for leaf nodes (nodes with measure function set) if margin and padding are used in percentages. ([1d683faf1d](https://github.com/facebook/react-native/commit/1d683faf1dc89e4950e7e1f5c5a67f9a7ca1ee24) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Using width for calculating margin top percent ([0599af2282](https://github.com/facebook/react-native/commit/0599af2282ffbf636604bce1cb4c049201fed393) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Summary: Changelog: [General][fixed] - License header cleanup ([8c63dd3b1a](https://github.com/facebook/react-native/commit/8c63dd3b1a9008798f7a4432b1e1aec2f54a7eba) by [@zertosh](https://github.com/zertosh))
- RNTester: Add missing key attribute in NewAppScreen example ([75f853dd70](https://github.com/facebook/react-native/commit/75f853dd708be9c4f5eb11fa77019f92bce021ad) by [@empyrical](https://github.com/empyrical))
- NativeAnimated - Don't restore default values when components unmount ([686ab49107](https://github.com/facebook/react-native/commit/686ab49107df8ed20d4e810f1366715cd70b4a31) by [@janicduplessis](https://github.com/janicduplessis))
- Fix eslint-config peer dependency warnings ([1353da5a53](https://github.com/facebook/react-native/commit/1353da5a538d4a6f76fc9530711394cf981034a0) by [@friederbluemle](https://github.com/friederbluemle))
- Add WebSocket to eslint globals ([af8ea06bb4](https://github.com/facebook/react-native/commit/af8ea06bb44e84ce51d4ca4e76f0d66bf34323bd) by [@dr2009](https://github.com/dr2009))
- Fix link to SUPPORT in README.md ([b1455e84fa](https://github.com/facebook/react-native/commit/b1455e84fa55b1eb856dd48cf8979a510aa6245e) by [@AndreyAkinshin](https://github.com/AndreyAkinshin))
- Remove style rules from eslint config for prettier options ([55e974d9fa](https://github.com/facebook/react-native/commit/55e974d9faeae66d6ec5030ff23fa3e80e2097aa
  e4b62bb139c258b65a9ebf2a8ee692ea52c3afab) by [@iRoachie](https://github.com/iRoachie))
- Fix an internal thread safety issue in Yoga ([6c177d8332](https://github.com/facebook/react-native/commit/6c177d8332639dd9827d188d32ee7d6afc889472) by [@swolchok](https://github.com/swolchok))
- Fix separators displays in wrong places with the inverted list ([dfb4f4af68](https://github.com/facebook/react-native/commit/dfb4f4af68726d2e05f63689a9c74c9bb9a0611b) by [@dy93](https://github.com/dy93))
- Fix issue where we attempt to connect to React devtools every 2 seconds ([e7f6210d5d](https://github.com/facebook/react-native/commit/e7f6210d5d417c5b6d4ba7f5cf96b40dbf70b9cd) by [@ejanzer](https://github.com/ejanzer))
- Fix the flow type for NativeNetworkingModule ([c10c147bcc](https://github.com/facebook/react-native/commit/c10c147bccd001dcff152fb5c8ea9fd7f590c868) by [@ejanzer](https://github.com/ejanzer))
- Summary: Changelog: [General][fixed] - License header cleanup ([10f55e752d](https://github.com/facebook/react-native/commit/10f55e752d1b3e1fd9b993a72c692750118f0608) by [@zertosh](https://github.com/zertosh))
- Summary: Changelog: [General][fixed] - License header cleanup ([d8560a838b](https://github.com/facebook/react-native/commit/d8560a838b94e528e6199dc9b41f8f0c59530696) by [@zertosh](https://github.com/zertosh))
- Change default `accessibilityRole` of Switch component from `button` to `switch` ([36672c3851](https://github.com/facebook/react-native/commit/36672c3851a044a1ab0edcfaa2790c02f7909695) by [@alvinmatias69](https://github.com/alvinmatias69))
- Summary: Changelog: [General][fixed] - License header cleanup ([aee88b6843](https://github.com/facebook/react-native/commit/aee88b6843cea63d6aa0b5879ad6ef9da4701846) by [@zertosh](https://github.com/zertosh))
- Summary: Changelog: [General][fixed] - License header cleanup ([3b31e69e28](https://github.com/facebook/react-native/commit/3b31e69e284074da72108edfb11e41ee74d7100e) by [@zertosh](https://github.com/zertosh))
- Summary: Changelog: [General][fixed] - License header cleanup ([722feeb02b](https://github.com/facebook/react-native/commit/722feeb02b5dbc8aeb5d975feb61ccedf4d9e07e) by [@zertosh](https://github.com/zertosh))
- Early logs don't get dropped by Metro now ([4ed05ca241](https://github.com/facebook/react-native/commit/4ed05ca241b791ad629fd154429a4a53c7731556) by [@gaearon](https://github.com/gaearon))
- Summary: Changelog: [General][fixed] - License header cleanup ([e1cfeaddd4](https://github.com/facebook/react-native/commit/e1cfeaddd47149625cc8c76c9b50c09b4c19e296) by [@zertosh](https://github.com/zertosh))
- Announce accessibility state changes happening in the background ([f2d58483c2](https://github.com/facebook/react-native/commit/f2d58483c2aec689d7065eb68766a5aec7c96e97
  baa66f63d8af2b772dea8ff8eda50eba264c3faf) by [@xuelgong](https://github.com/xuelgong))
- Fixed `JSBigString` not compiling on Windows due to Unix-specific headers ([80857f295c](https://github.com/facebook/react-native/commit/80857f295c17e5f8966b3d1c1207d3c4570a1b26) by [@empyrical](https://github.com/empyrical))
- Lists: Change flow type to not allow rendering undefined ([55b32130bb](https://github.com/facebook/react-native/commit/55b32130bb9ccdba9d027fa8e15f5932d027a521) by [@TheSavior](https://github.com/TheSavior))
- Fix exception in scrollResponderScrollNativeHandleToKeyboard when ref is null ([da8ae011bb](https://github.com/facebook/react-native/commit/da8ae011bbabc8acb7ef7f6903f68dd60aaa1f9d) by [@TheSavior](https://github.com/TheSavior))
- Make RelativeImageStub regex match images in scoped packages ([46090b0e56](https://github.com/facebook/react-native/commit/46090b0e56eaed065f5aff8ef847107bc6d94290) by [@draperunner](https://github.com/draperunner))
- Fix printing of false boolean values in the style inspector ([d67c8d4dec](https://github.com/facebook/react-native/commit/d67c8d4deca70a404c53b3f723efdabb443c943b) by [@janicduplessis](https://github.com/janicduplessis))
- Fix excessive toggles on the Switch component ([b782934f3f](https://github.com/facebook/react-native/commit/b782934f3f2a80ae7e3872cc7d7a610aa6680ec4) by [@rurikoaraki](https://github.com/rurikoaraki))
- Fix Podfile for RNTester ([543420cf76](https://github.com/facebook/react-native/commit/543420cf76e5826b474ad7242f037831979216f3) by [@axe-fb](https://github.com/axe-fb))
- Support bare hosts. Add missing / between url ([20ab946f34](https://github.com/facebook/react-native/commit/20ab946f34b1d9727ff08c733b2006e84fd79349) by [@jeswinsimon](https://github.com/jeswinsimon))
- Removing the non-standard usage of ATOMIC_VAR_INIT macro from code with systrace enabled ([75a7a52db4](https://github.com/facebook/react-native/commit/75a7a52db496bd3892a367372eea25bf50840fc3))
- Fix flow test case input in react-native-codegen package ([d63c46de7e](https://github.com/facebook/react-native/commit/d63c46de7e2c8c270611e54300e2bc4f6ed9f403) by [@ZihanChen-MSFT](https://github.com/ZihanChen-MSFT))
- Mock createAnimatedComponent to fix snapshot with animated component ([a0996cd1ba](https://github.com/facebook/react-native/commit/a0996cd1ba079a7935449e9a7a7f3b0e3badcec5))
- To avoid using index as key ([36d4a969dd](https://github.com/facebook/react-native/commit/36d4a969dd2e1ecf75166b24b6b0af3f7a70e71f) by [@isaaclem](https://github.com/isaaclem))
- Improve Flow Type for ScrollResponder ([f8e5093823](https://github.com/facebook/react-native/commit/f8e509382315f84e3c29b07cc174093739ed980f) by [@TheSavior](https://github.com/TheSavior))
- Fix useWindowDimensions hook firing continuously after dimensions change ([3b3c95b017](https://github.com/facebook/react-native/commit/3b3c95b0170e60983eb6e89b910d100d08eee141) by [@dulmandakh](https://github.com/dulmandakh))
- Add broken fixture for objects with array props ([5f09a1733b](https://github.com/facebook/react-native/commit/5f09a1733b7c67ee9e761f029329a1be9ad808eb) by [@rickhanlonii](https://github.com/rickhanlonii))

#### Android specific

- Fix animations in OSS debug builds by modifying `Platform.isTesting()` behaviour ([1fbc6a7c17](https://github.com/facebook/react-native/commit/1fbc6a7c178d13421b0b84d6ea01f9174105325f) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Template instacrash from missing androidx dependency ([99ef72cad7](https://github.com/facebook/react-native/commit/99ef72cad73da25d76bf8177272724cfe6cece61) by [@alloy](https://github.com/alloy))
- Use modern Flipper SDK version for RNTester ([8259a9d369](https://github.com/facebook/react-native/commit/8259a9d369c310f4c31e50e2ad5157f5c5a8dc30) by [@passy](https://github.com/passy))
- RNTester Buck Build ([a3cb377645](https://github.com/facebook/react-native/commit/a3cb377645f2ccb7632ded73c230a41025d38f6f) by [@passy](https://github.com/passy))
- Fix android modal not disappear when reload ([5ddf00ee1a](https://github.com/facebook/react-native/commit/5ddf00ee1acbf66c7204227c398a58c13e4545cf) by [@sunnylqm](https://github.com/sunnylqm))
- Support nullable returns NativeModule methods returning Boxed Primitives ([f57b0caaa4](https://github.com/facebook/react-native/commit/f57b0caaa4452c64006c159cd28a1a562b332c21) by [@RSNara](https://github.com/RSNara))
- Refactor TurboModule filtering in NativeModuleRegistryBuilder ([d9deee20e7](https://github.com/facebook/react-native/commit/d9deee20e7bdc0766f5692dce396f94c037bbf32) by [@RSNara](https://github.com/RSNara))
- Make TurboModuleRegistry in CatalystInstanceImpl.java volatile ([29b99720b2](https://github.com/facebook/react-native/commit/29b99720b202c9d65e33643dfd056d35a9ce118f) by [@RSNara](https://github.com/RSNara))
- Make ReactFeatureFlags.useTurboModules volatile ([7f637139e7](https://github.com/facebook/react-native/commit/7f637139e746e0fd20963b8ea1a6e961d0e381fc) by [@RSNara](https://github.com/RSNara))
- Various bug fixes to the hermes inspector/debugger ([e27610819d](https://github.com/facebook/react-native/commit/e27610819d646ebad066e433866d437ff5e821c4) by [@mhorowitz](https://github.com/mhorowitz))
- Fix 'Could not create task ':app:bundleDebugJsAndAssets'.' error in project with no react config ([5df204b82d](https://github.com/facebook/react-native/commit/5df204b82dbc62ed7721ec87d7fce5ed47c920ac) by [@d4vidi](https://github.com/d4vidi))
- Crash in TextInput ([6ebd3b046e](https://github.com/facebook/react-native/commit/6ebd3b046e5b71130281f1a7dbe7220eff95d74a) by [@MarcoPolo](https://github.com/MarcoPolo))
- Updated template/android/build.gradle with a modified jitpack URL ([018b7485eb](https://github.com/facebook/react-native/commit/018b7485eb42d8e16c8c462ac4886f8286de2c1b) by [@AndrewBastin](https://github.com/AndrewBastin))
- Fix Android CI ([acd4a3b1d4](https://github.com/facebook/react-native/commit/acd4a3b1d4e1e07eb54c8f7565e55f4cb496aaa7) by [@dulmandakh](https://github.com/dulmandakh))
- View.getGlobalVisibleRect() clips result rect properly when overflow is 'hidden' ([9c61693c9e](https://github.com/facebook/react-native/commit/9c61693c9e4fbd2d0ac9ec56eb3aff71c49372e8
  df9abf798351c43253c449fe2c83c2cca0479d80) by [@davidbiedenbach](https://github.com/davidbiedenbach))
- Updated Appearance module to allow Android 9/P devices. ([8dcb6ee91f](https://github.com/facebook/react-native/commit/8dcb6ee91fc6bc4d2914046ce45b3bfa4ee364f4))
- Don't throw "Unknown array type" exception when passing serialized bundle arrays in ReactRootView.startReactApplication's initialProperties parameter ([4b9350061f](https://github.com/facebook/react-native/commit/4b9350061fa3d186fdd3a973e1b46f60a7ac03b9) by [@petterh](https://github.com/petterh))
- Fixed issue with refresh control not working properly on an inverted ScrollView ([0a282c42b4](https://github.com/facebook/react-native/commit/0a282c42b4d1c2316513cd5588a0a92b54db2991) by [@migbot](https://github.com/migbot))
- This branch checks also for `ACTION_NDEF_DISCOVERED` intent matches to send the url events ([8d8c3d4e1e](https://github.com/facebook/react-native/commit/8d8c3d4e1eb88366074e87385c4d96a46dfdd544) by [@cimitan](https://github.com/cimitan))
- Adds a not android check to the select case of the TVEventHandler callback in the TouchableMixin. ([21890e964d](https://github.com/facebook/react-native/commit/21890e964df7674fcf13cefc8cb939441f6eddef) by [@dbarr33](https://github.com/dbarr33))
- Fix `includeFontPadding` for `TextInput` placeholder ([211ea485cd](https://github.com/facebook/react-native/commit/211ea485cd993ca25d6640be41e54f327ca1629c) by [@janicduplessis](https://github.com/janicduplessis))
- Fix medium font weights for TextInput on Android ([8b9f790069](https://github.com/facebook/react-native/commit/8b9f7900697b2e4bb72b37ed2e6c3d113185d327) by [@janicduplessis](https://github.com/janicduplessis))
- Button click issue resolved ([f1c6029e48](https://github.com/facebook/react-native/commit/f1c6029e4868084e5a10d81c15ee3cc5e301599a) by [@saxenanickk](https://github.com/saxenanickk))
- Android 10: Prevent activity recreation on theme change ([83a16b16c9](https://github.com/facebook/react-native/commit/83a16b16c9afa0fe0328ab818470d4fce098876b) by [@Esemesek](https://github.com/Esemesek))
- The ReactCookieJarContainer/ForwardingCookieHandler now handles all the cases of missing WebView exceptions gracefully. ([314eba98b2](https://github.com/facebook/react-native/commit/314eba98b2f2755cb26ed7a268d3fe83a7626efa) by [@siddhantsoni](https://github.com/siddhantsoni))
- Skip lint check for dynamic react-native version ([87f94d5587](https://github.com/facebook/react-native/commit/87f94d5587ba90bb5a50254e32791f7505dd2b87) by [@friederbluemle](https://github.com/friederbluemle))
- Don't crash ReactInstanceManagerBuilder.build even if SoLoader has not been explicitly initialized ([60e00d9d96](https://github.com/facebook/react-native/commit/60e00d9d96d7b186c1d4c1542caddc1b74eeb3da) by [@petterh](https://github.com/petterh))
- Fixed RNTester instructions ([a31c76fbd3](https://github.com/facebook/react-native/commit/a31c76fbd309a3a051e7a2da1a7ff5a969fd35f7) by [@hramos](https://github.com/hramos))
- Fix RNTester Lint errors ([14375101ae](https://github.com/facebook/react-native/commit/14375101aebfe4440431831846b0fb67a554a8e8) by [@friederbluemle](https://github.com/friederbluemle))
- Fix compile error for native debug build ([962d9c9c1a](https://github.com/facebook/react-native/commit/962d9c9c1a27c56a749cd26008d7fb2ef7fccfbc) by [@Kudo](https://github.com/Kudo))
- Summary: [Android][fixed] - Make sure the default accessibility hint is read for buttons on Android. ([f8dff0bcb3](https://github.com/facebook/react-native/commit/f8dff0bcb3147b7a1aa8ac7159952d848e198e29))

#### iOS specific

- Resolve localization warnings ([0e4bcaa296](https://github.com/facebook/react-native/commit/0e4bcaa2960a2b1aa42dbe716fc6a35652aa7207) by [@safaiyeh](https://github.com/safaiyeh))
- Resolve React-RCTText Xcode warning ([04fed6508b](https://github.com/facebook/react-native/commit/04fed6508b74b23c954183af3f6121fb344d2138) by [@safaiyeh](https://github.com/safaiyeh))
- Add native support for TextInput autoFocus on iOS ([6adba409e6](https://github.com/facebook/react-native/commit/6adba409e6256fd2dcc27a4272edcedae89927af) by [@janicduplessis](https://github.com/janicduplessis))
- Resolve Xcode warnings from React-cxxreact. ([dc6c57ce0d](https://github.com/facebook/react-native/commit/dc6c57ce0d4f5424bfb047c51fee18eac381a98b) by [@safaiyeh](https://github.com/safaiyeh))
- ([cb80e3b599](https://github.com/facebook/react-native/commit/cb80e3b599d0a781af8ad2999c4f1b58a11de05f) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Make framework builds work again by making `RCTImageLoader` C++ requirement opt-in ([25571ec452](https://github.com/facebook/react-native/commit/25571ec4522931193b41723d3f80b3bced1fca3b) by [@alloy](https://github.com/alloy))
- Remove need for Swift file in the user’s project in order to use Flipper ([8f93dedc6a](https://github.com/facebook/react-native/commit/8f93dedc6a5653edd2220c65ccb4ff8736ee060c) by [@alloy](https://github.com/alloy))
- `Dimensions` module now updates on initial split screen ([7a72c35a20](https://github.com/facebook/react-native/commit/7a72c35a20a18c19bf6ab883cb2c53a85bd4c5c0) by [@sahrens](https://github.com/sahrens))
- Fix spinner visibility on beginRefreshingProgrammatically ([e341489521](https://github.com/facebook/react-native/commit/e341489521ad495e68e8aba01ff4dd25a5e4ff3e) by [@nnabinh](https://github.com/nnabinh))
- Fix Flipper integration on and update Flipper to 0.30.0 ([898b1db6d0](https://github.com/facebook/react-native/commit/898b1db6d0efa86a37af6eac46beb32c091d079d) by [@charpeni](https://github.com/charpeni))
- Reconnect to debugger websocket after metro is restarted. ([13992f90e4](https://github.com/facebook/react-native/commit/13992f90e48fc11e0b7217ee6d9413f97c32268a) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix iOS tests by using 12.4 iOS Simulator ([97dd8cedc5](https://github.com/facebook/react-native/commit/97dd8cedc5091d101117f3db141be2b6ed5ae990) by [@hramos](https://github.com/hramos))
- Slider is now disabled properly on iOS if the disabled prop is set. ([fa9ff07017](https://github.com/facebook/react-native/commit/fa9ff07017edbc76595fe2f2d964ee13c5f4088a))
- Remove \_\_unused annotation from ConcreteSystraceSection ctor args. ([8ac9b32779](https://github.com/facebook/react-native/commit/8ac9b32779001400d760d868df6cd49af343035a) by [@RSNara](https://github.com/RSNara))
- Fix potential assert firing in RCTReloadCommand ([7a1d96e8aa](https://github.com/facebook/react-native/commit/7a1d96e8aae45964cfbe8a1eb5237ba276aeb906) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix RCTNetwork podspec ([97a4b9b691](https://github.com/facebook/react-native/commit/97a4b9b6915343dd487cc98aaa5baf8a0aafd445) by [@RSNara](https://github.com/RSNara))
- Fix apps crashing on iOS 13.x when running timer in the background ([e1d03b4cc0](https://github.com/facebook/react-native/commit/e1d03b4cc00c361e10687eb4a9f902563cd1cbe1) by [@radko93](https://github.com/radko93))
- Fix all RN Podspecs ([38678f75b4](https://github.com/facebook/react-native/commit/38678f75b4dde9d238a19acbc28ed344a252a927) by [@RSNara](https://github.com/RSNara))
- TextInput blur when tabbing in iOS simulator. ([a7437710d2](https://github.com/facebook/react-native/commit/a7437710d25adfc9150fc079e4525ed59d5404e2) by [@fat](https://github.com/fat))
- Fix promised returned by `Share.share(content, options)` not resolving if share dialog dismissed ([7468a6c903](https://github.com/facebook/react-native/commit/7468a6c9033ffe8cc2315a3de3a759b8745fe43d) by [@v-fernandez](https://github.com/v-fernandez))
- Remove maximum searching depth while measuring layout. ([2f8328dbb0](https://github.com/facebook/react-native/commit/2f8328dbb0d9813c904c0b888b2b7500cf4a4bce) by [@dratwas](https://github.com/dratwas))
- SafeAreaInsets call would crash on older versions of iOS ([03acf57b76](https://github.com/facebook/react-native/commit/03acf57b767553acbee4ff589055fbd239ffffbb) by [@mmmulani](https://github.com/mmmulani))
- Retain cropData struct arg in ImageEditingManager.cropImage call ([002d3c179d](https://github.com/facebook/react-native/commit/002d3c179dd2515f0a4d894d9b7f70c4e538f728) by [@RSNara](https://github.com/RSNara))
- Move RCTImage NativeModules back to RCTImage ([d8fda74c24](https://github.com/facebook/react-native/commit/d8fda74c242a3e003f050260fbf4020f953bde3f) by [@RSNara](https://github.com/RSNara))
- Fixed bug rendering nested text on iOS13 ([7cf43afa8d](https://github.com/facebook/react-native/commit/7cf43afa8d6a03ccb4cfdc09f81891eabe8b8b70
  06599b3e594355a1d5062ede049ff3e333285516) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Set RCTWebSocketModule's methodQueue ([a7d55c9a2a](https://github.com/facebook/react-native/commit/a7d55c9a2acc7b0c1768129af250cbbb35349cd0) by [@mmmulani](https://github.com/mmmulani))
- Fixed longstanding bug where RCTNullIfNil() can return nil ([79b573511b](https://github.com/facebook/react-native/commit/79b573511bd55e6c82c0044e1930549ccfa8a923) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Summary: Changelog: [iOS][fixed] Fixed crash in TurboModules when bridge isn't set ([474f12e6fc](https://github.com/facebook/react-native/commit/474f12e6fc9d2628b1426030af59892a97db3b65) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fixed crash in RCTScrollViewComponentView ([2e864c176c](https://github.com/facebook/react-native/commit/2e864c176c9ff00ddfed2e0aded328c51c9ac26f
  e7ef9921d3f91b02cfec4bbfd88b4968434e201c) by [@shergin](https://github.com/shergin))
- Improve method argument RCTConvert logic ([63e58a375e](https://github.com/facebook/react-native/commit/63e58a375e59dbd97ab62bd280cdb9653c92b3ac) by [@RSNara](https://github.com/RSNara))
- TurboModule initialization on the main queue ([bec5b8711f](https://github.com/facebook/react-native/commit/bec5b8711fb6c27abdc5bbf04da5f6ab167aefb6) by [@RSNara](https://github.com/RSNara))
- Elements no longer focusable on tvOS ([b61583a780](https://github.com/facebook/react-native/commit/b61583a7803c7d3bbee3b22219571d71854f72c1) by [@pavjacko](https://github.com/pavjacko))
- Fix how the amount of free memory is calculated to mimic the logic Apple uses. ([b53d3d80f9](https://github.com/facebook/react-native/commit/b53d3d80f991937915a87ba8515f403551de139e))
- Give margin instead of padding to text in Button component ([9caf99162d](https://github.com/facebook/react-native/commit/9caf99162dcd1ee73c571c494ca3115540f45f69) by [@roshangm1](https://github.com/roshangm1))
- Template whitespace error ([d98ff02433](https://github.com/facebook/react-native/commit/d98ff02433d477707ae7aaf41bf2505c1544abe6) by [@friederbluemle](https://github.com/friederbluemle))
- Fix Yoga imports and includes ([ce48896e99](https://github.com/facebook/react-native/commit/ce48896e999b1833d4931cfa85c008f860721e62) by [@gabrielfurini](https://github.com/gabrielfurini))
- Make surface presenter manage start of surface ([607e258c6a](https://github.com/facebook/react-native/commit/607e258c6a26c31eebdf584e844a1e004c1b2f27) by [@zhongwuzw](https://github.com/zhongwuzw))
- Never call deleteTimer for setImmediate and requestIdleCallback ([4fc3e7ae71](https://github.com/facebook/react-native/commit/4fc3e7ae71ff643db730878b57a3ef5470a7e54d))
- CallIdleCallbacks deadline calculation ([021cbccbf2](https://github.com/facebook/react-native/commit/021cbccbf29265f9e4353c79408dacc6a30f8f4f))
- Fix Yoga.podspec case sensitivity ([9bc803f0ba](https://github.com/facebook/react-native/commit/9bc803f0ba188f8a6df9e3dc165619c470df1b13) by [@hassanbazzi](https://github.com/hassanbazzi))
- Remove cxx from iOS project ([46d6e2a600](https://github.com/facebook/react-native/commit/46d6e2a600f0a4b2a2b55d6f7639a5cfce6a798c) by [@zhongwuzw](https://github.com/zhongwuzw))
- Restore RCTText tvOS pod compatibility ([5f53cb0b85](https://github.com/facebook/react-native/commit/5f53cb0b8595d5b673dc22f3249960fd012dab18) by [@benoitdion](https://github.com/benoitdion))
- Fixes animated gifs incorrectly looping ([6f2e6f170e](https://github.com/facebook/react-native/commit/6f2e6f170e3ee785d1ba844971447ea24f91185e) by [@zhongwuzw](https://github.com/zhongwuzw))

### Security

#### Android specific

#### iOS specific

### Unknown

- Bump CLI to ^4.2.x ([be5088401f](https://github.com/facebook/react-native/commit/be5088401fd8e19d57adda42d275cab437448064) by [@alloy](https://github.com/alloy))
- Upgrade metro babel preset ([cef001713f](https://github.com/facebook/react-native/commit/cef001713fc6384353bbcb4d45645ceee44ed1a9) by [@alloy](https://github.com/alloy))
- Fix RNTester integration with Flipper ([68bf0e32e7](https://github.com/facebook/react-native/commit/68bf0e32e70db2ce28cc3c3d9d63f58900d1869d) by [@passy](https://github.com/passy))
- Unstable_enableLogBox ([dd8e5f468a](https://github.com/facebook/react-native/commit/dd8e5f468a29e299647ffbd0887f53afd24936e3) by [@rickhanlonii](https://github.com/rickhanlonii))
- Avoid throwing exceptions when the host activity is not FragmentActivity ([7cfabf42b8](https://github.com/facebook/react-native/commit/7cfabf42b816de758d8e52896bbab0c50e3a802a))
- Convert NetworkingModule to TurboModule ([476a336e36](https://github.com/facebook/react-native/commit/476a336e3613f90b76e3a91d5bffaa098bf4e6ff) by [@ejanzer](https://github.com/ejanzer))
- Create ReactFeatureFlag to enable / disable custom implementation of getChildVisibleRect ([9c61693c9e](https://github.com/facebook/react-native/commit/9c61693c9e4fbd2d0ac9ec56eb3aff71c49372e8) by [@mdvacca](https://github.com/mdvacca))
- Deprecate CallerContext from ReactImageManager ([8accd77c45](https://github.com/facebook/react-native/commit/8accd77c45a4b051bf02904c3485d6a0dcd27631) by [@mdvacca](https://github.com/mdvacca))
- Integrate ReactContextContainerFactory as part of ReactImageViewManager ([882e4a3f17](https://github.com/facebook/react-native/commit/882e4a3f17bdb893dd02eb6ac903673eb35a34b1) by [@mdvacca](https://github.com/mdvacca))
- Introducing ReactCallerContextFactory interface ([9713b63d9a](https://github.com/facebook/react-native/commit/9713b63d9ac1e1ae85accd86b78b351ac6295d01) by [@mdvacca](https://github.com/mdvacca))
- Use vanilla jni instead of fbjni for all the jni communication ([f0f83eb3b1](https://github.com/facebook/react-native/commit/f0f83eb3b13bdb6fdfb85b4859709b87d43cf5b6) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Add a field + getter for instanceKey to ReactContext ([6598292ede](https://github.com/facebook/react-native/commit/6598292edeee26a92c369080e6286713b4ffd96e) by [@ejanzer](https://github.com/ejanzer))
- Use commands instead of setNativeProps in DatePicker ([6fb5f81193](https://github.com/facebook/react-native/commit/6fb5f811932ae63778f177143f0d927a6faa13cd) by [@sammy-SC](https://github.com/sammy-SC))
- LogBox - hotfix for opening logs ([1fb815ed43](https://github.com/facebook/react-native/commit/1fb815ed4314c1396999e64354ca0b5d4ed83663) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add Intl to eslint globals. ([f6a62f9ae2](https://github.com/facebook/react-native/commit/f6a62f9ae2278c0f3a1e5c1a6ec3b7cca3421a41))
- Remove unused variable in ReactTextInputManager ([2afc4e2482](https://github.com/facebook/react-native/commit/2afc4e24824a2f949fed54ce879c9f46d3b4ebdb) by [@mdvacca](https://github.com/mdvacca))
- Upgrade metro version to 0.56.3 ([4b487ba500](https://github.com/facebook/react-native/commit/4b487ba50025becb6a83c805b99d45651db6b8c1) by [@EssamEmad](https://github.com/EssamEmad))
- Update integration snapshots ([2c7a907b08](https://github.com/facebook/react-native/commit/2c7a907b08fabcd774e037c8f8e5a9d56c1c57e9) by [@grabbou](https://github.com/grabbou))
- Update Broken Link #devcjog25 ([d7c222a6a7](https://github.com/facebook/react-native/commit/d7c222a6a70478af8026d5d4dc8b60629957c46d) by [@arioki1](https://github.com/arioki1))
- Add NonNull annotation to FabricUIManager API ([a1a56fe4e5](https://github.com/facebook/react-native/commit/a1a56fe4e5ca6214fe10a5925fcfb3222573206b) by [@mdvacca](https://github.com/mdvacca))
- Refactor the cancellation of DispatchUIFrameCallback ([c5321e8514](https://github.com/facebook/react-native/commit/c5321e85147b007dc810a1065b05b48dbe96769f) by [@mdvacca](https://github.com/mdvacca))
- Make sure MountItems use @NonNull annotation ([27d71fc725](https://github.com/facebook/react-native/commit/27d71fc725d4e1559a27983a67dabeda8b4f0723) by [@mdvacca](https://github.com/mdvacca))
- Refactor FabricSoLoader to ensure sDidInit is accessed correctly ([e21ed675ec](https://github.com/facebook/react-native/commit/e21ed675ec082b6d12b4201edd5b78708e951178) by [@mdvacca](https://github.com/mdvacca))
- Delete WindowedListView ([f12c0e7eb0](https://github.com/facebook/react-native/commit/f12c0e7eb0a97117dfa1cb46385f84c72da8a409) by [@TheSavior](https://github.com/TheSavior))
- Customize ExceptionHandler in ReactAppTestActivity ([3408dc0b3e](https://github.com/facebook/react-native/commit/3408dc0b3e37f9aaea9961103815c7799157927c) by [@mdvacca](https://github.com/mdvacca))
- Report Redbox error when a component is not implemented ([8425292eb4](https://github.com/facebook/react-native/commit/8425292eb4447c4e20ca1309d90b1fabd5454422) by [@mdvacca](https://github.com/mdvacca))
- Daily `arc lint --take BUCKFORMAT` ([9ce3588f1e](https://github.com/facebook/react-native/commit/9ce3588f1e0901d06effb97e0a9030903ba8f0e2))
- Use SoundManager in Pressability and Touchable ([ff03698f20](https://github.com/facebook/react-native/commit/ff03698f20a123ebac8584891579a21443285b35) by [@mdvacca](https://github.com/mdvacca))
- Allow update of state to receive null objects ([c65267ca6f](https://github.com/facebook/react-native/commit/c65267ca6ffdf68e9846c0cf912d23162e671758) by [@mdvacca](https://github.com/mdvacca))
- Tidy up license headers ([b7c14f29cf](https://github.com/facebook/react-native/commit/b7c14f29cf391ae9b35a2011dca4e631c881dfd7) by [@zertosh](https://github.com/zertosh))
- Add Landcastle job that requires changelog for React Native diffs ([082f293c85](https://github.com/facebook/react-native/commit/082f293c8518730451f3806dfb7e74fd3022e37e) by [@TheSavior](https://github.com/TheSavior))
- Improve return type for ScrollView getters ([db84ae8fb3](https://github.com/facebook/react-native/commit/db84ae8fb38a1e7afc0b4c9e87897bffd532e15d) by [@TheSavior](https://github.com/TheSavior))
- Fix ref type for Native Scroll View ([db662af5b2](https://github.com/facebook/react-native/commit/db662af5b28d0ad42abd1da67c32f2c38ff04900) by [@TheSavior](https://github.com/TheSavior))
- Slightly more aggressive FabricUIManager teardown ([fa1c2be387](https://github.com/facebook/react-native/commit/fa1c2be387a95d90d8fcdaabb88b1c4c61e0097b) by [@JoshuaGross](https://github.com/JoshuaGross))
- Nit change to VirtualizedSectionList callback flow type ([7a2e83dba5](https://github.com/facebook/react-native/commit/7a2e83dba5164445345c5b853436f97b11e0efb0) by [@TheSavior](https://github.com/TheSavior))
- VirtualizedList clean up prop flow definitions and comments ([8eea187085](https://github.com/facebook/react-native/commit/8eea187085d473c36af6bd6c2b447da9edc26a0e) by [@TheSavior](https://github.com/TheSavior))
- ScrollView: Fix flow type for StickyHeaderComponentType ([5d2de9e54e](https://github.com/facebook/react-native/commit/5d2de9e54e03373627428ba9511d9cbc616424bd) by [@TheSavior](https://github.com/TheSavior))
- Change ScrollView event flow types to support spreading ([dd3bf0545a](https://github.com/facebook/react-native/commit/dd3bf0545abf48f5abc471049e2ce2073ade1cd9) by [@TheSavior](https://github.com/TheSavior))
- Remove duplicate flow type for TouchableProps ([fb5276c189](https://github.com/facebook/react-native/commit/fb5276c1897982f0be96f2e7074d839ae8fffdc8) by [@TheSavior](https://github.com/TheSavior))
- Lists: Fix invalid prop usage in RNTesterExampleList ([da057749f8](https://github.com/facebook/react-native/commit/da057749f8be59516b7dcb5cb3a7bdb67c3d990c) by [@TheSavior](https://github.com/TheSavior))
- Enable no-useless-escape lint rule ([90977b0e00](https://github.com/facebook/react-native/commit/90977b0e00acc6b3263502017c27094392e89478) by [@motiz88](https://github.com/motiz88))
- Fix throttling in scroll view ([4159e20146](https://github.com/facebook/react-native/commit/4159e201462c346c456de1fa869d88a9cce7b6d4) by [@sammy-SC](https://github.com/sammy-SC))
- UseVanilla flag for measure and baseline methods as well ([93df73975e](https://github.com/facebook/react-native/commit/93df73975e8c9a9bb5a4a0b57a378e1b59954020) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Add asserts and annotations for FabricUIManager UI-thread methods ([7c20dc65d9](https://github.com/facebook/react-native/commit/7c20dc65d9092b21a2e0d85b641c8319c059357e) by [@JoshuaGross](https://github.com/JoshuaGross))
- Add UI thread assertions and annotations to ReactRootView ([c82e27030c](https://github.com/facebook/react-native/commit/c82e27030c20cfe12ab3f0f27022649fe48af5ae) by [@JoshuaGross](https://github.com/JoshuaGross))
- Copy jest flow declaration from www ([a494227d6c](https://github.com/facebook/react-native/commit/a494227d6cc9b8babcbf35632239d4bb76c042d1) by [@kassens](https://github.com/kassens))
- No need to pass env to ref method , we can directly use getCurrentEnv() ([b65870871f](https://github.com/facebook/react-native/commit/b65870871f52027d15d04f457deea9ebafb88887) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Rename PtrJNodeMap to PtrJNodeMapVanilla in yoga vanilla jni files ([65a2f15423](https://github.com/facebook/react-native/commit/65a2f154236c16e373c4b2440cff9e568094c20b) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Fix YGNodeJobject method ([76ce30fb33](https://github.com/facebook/react-native/commit/76ce30fb33daf3b601f1a991f615c28807f6ceec) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move JNI_OnLoad to separate file which registers both fbjni and jni methods ([9afc1bc2ed](https://github.com/facebook/react-native/commit/9afc1bc2ed6d1358f8ca8a4e6592dd81f428fdf5) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Set missing useVanillaJNI in constructor for YogaNode ([62649d31a4](https://github.com/facebook/react-native/commit/62649d31a4b5c91f7ea6e0f5ee99d6fa8914850d) by [@amir-shalem](https://github.com/amir-shalem))
- Expose Hermes Sampling Profiler in default react native templates ([15ecb60d6d](https://github.com/facebook/react-native/commit/15ecb60d6deb96fcb7b0ef70faccd10594ededa3) by [@axe-fb](https://github.com/axe-fb))
- Move error-subclass-name lint rule to GitHub ([6611c4b8f4](https://github.com/facebook/react-native/commit/6611c4b8f42520add983cc48fe4e14f7a02cc7cf) by [@motiz88](https://github.com/motiz88))
- Use TestParametrization for testing both fbjni and vanillaJNI version ([12eb44641f](https://github.com/facebook/react-native/commit/12eb44641fa205f56a3fcf8d8cb4a37ce0be43d2) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move YGSetLogger and YGConfigFree with global ref to vanilla jni ([6f0694ccbe](https://github.com/facebook/react-native/commit/6f0694ccbe5fe8524842535776a8c83a87536110) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Remove framesToPop from bridge ([a483f802fd](https://github.com/facebook/react-native/commit/a483f802fddfd927f2baa0d95e2b4094d452cddd) by [@motiz88](https://github.com/motiz88))
- Move measure and baseline methods ([86af90fac5](https://github.com/facebook/react-native/commit/86af90fac571afbd02948ee944b11b410b6929e5) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move yg node new and ygnode new with config ([b0b1666402](https://github.com/facebook/react-native/commit/b0b1666402f33ba92ee0ee194598fddaa19ca8e2) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move calculate layout method to vanilla JNI ([952076e2bf](https://github.com/facebook/react-native/commit/952076e2bf9c6dc7ead068a2b83fe78af8f92557) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Add Scoped Local and Global Ref ([4a69b3e636](https://github.com/facebook/react-native/commit/4a69b3e636c479f39a997aec37f716afb3ab6150) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move setStyleInputs to vanilla jni (YogaStyleProperties Part 5) ([67a3ad38e3](https://github.com/facebook/react-native/commit/67a3ad38e3cf1199d57fc9c4b3a9a4be762b8f07) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move config jni methods to vanilla jni ([e3919b5ebd](https://github.com/facebook/react-native/commit/e3919b5ebd83e37ea03717f1a09d59265e044cec) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move YGNode related methods to vanilla jni ([9ea8014cc0](https://github.com/facebook/react-native/commit/9ea8014cc00f7793a39b6cb39c0b966cfc7e549e) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move edge style properties to vanilla jni (YogaStyleProperties Part 4) ([76af8ee2ec](https://github.com/facebook/react-native/commit/76af8ee2ec7694e7fe413749dfbf66adfa867068) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move percent auto style properties to vanilla jni (YogaStyleProperties Part 3) ([abb77b34cc](https://github.com/facebook/react-native/commit/abb77b34cc4d45aa75fb91e00fa90b2469810756) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move common code to YGJNI.h header class ([69fb812c1d](https://github.com/facebook/react-native/commit/69fb812c1d54e2333c283b5e66334c22d766027d) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Migrate YGNodeStyleGetFlex method to vanilla jni (YogaStyleProperties Part 2) ([c15cefd3a8](https://github.com/facebook/react-native/commit/c15cefd3a8fd8ec26bbbed54c4d3a0578ad77be8) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Move style properties which accept one parameter to vanilla JNI (YogaStyleProperties Part 1) ([60973b52c7](https://github.com/facebook/react-native/commit/60973b52c7a6eae48c65ff80972bbdbbb8c9fefa) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Add support for commands ([1bf2f72abe](https://github.com/facebook/react-native/commit/1bf2f72abe7100b14df45e15e13924311369f4ff) by [@sammy-SC](https://github.com/sammy-SC))
- Add support for events ([5dbd62c7ff](https://github.com/facebook/react-native/commit/5dbd62c7ff32ed9ebf071b5b3c8dd5939bd2ed5d) by [@sammy-SC](https://github.com/sammy-SC))
- Fix TimingAnimation rounding error issue ([77b6e26538](https://github.com/facebook/react-native/commit/77b6e2653835af61b186903eae45d67f35351ade) by [@MartinSherburn](https://github.com/MartinSherburn))
- Move sDidInit to the end of ReactBridge.staticInit() ([b5ea49f132](https://github.com/facebook/react-native/commit/b5ea49f132ef58c0cb5061dead6cdc137780c7e1) by [@ejanzer](https://github.com/ejanzer))
- Ensure internal builds don't use plugin stubs ([021a63d4da](https://github.com/facebook/react-native/commit/021a63d4da29c2ab6f2f575761d97c1e3645adac) by [@RSNara](https://github.com/RSNara))
- Remove redundant props from Picker ([9cefc96e43](https://github.com/facebook/react-native/commit/9cefc96e43d2b9326b88c6aa19c3db2c58013ddf) by [@sammy-SC](https://github.com/sammy-SC))
- Implement setNativeSelectedIndex command for Picker component ([62cbdceedd](https://github.com/facebook/react-native/commit/62cbdceeddb63d41018be77f07b54d10355cad57) by [@sammy-SC](https://github.com/sammy-SC))
- Add setNativeValue command to ReactSwitchManager ([3560093115](https://github.com/facebook/react-native/commit/3560093115d1825e5e01ad0d8e65d5a90a35fe2c) by [@makovkastar](https://github.com/makovkastar))
- V0.109.0 in xplat ([b786cd6d69](https://github.com/facebook/react-native/commit/b786cd6d69ed42ebbd1a5a87b62f488704e040f3) by [@dsainati1](https://github.com/dsainati1))
- Throw a different exception when no ViewManager is found ([ad9b07d390](https://github.com/facebook/react-native/commit/ad9b07d390daa13067388d2fb75a7601f8df0d96) by [@ejanzer](https://github.com/ejanzer))
- Linking to the ReactJS code of conduct. ([cf7759e6e0](https://github.com/facebook/react-native/commit/cf7759e6e083fe0e7588c1e5ac93bb946bdc4a97) by [@rachelnabors](https://github.com/rachelnabors))
- Don't call ReactBridge.staticInit() on the main thread ([c3a07b6dcc](https://github.com/facebook/react-native/commit/c3a07b6dcc56260b288dc11ed168fd723c7c4256
  7d8b7ff3aa835c0e983a059f1f52f9c03ec68ef5) by [@ejanzer](https://github.com/ejanzer))
- React Native supermodule ([a45e6a8b5f](https://github.com/facebook/react-native/commit/a45e6a8b5f0fff338efc5ddf3d6eb7378655c058) by [@adamjernst](https://github.com/adamjernst))
- Support removeClippedSubviews for horizontal ScrollViews ([42152a3fa3](https://github.com/facebook/react-native/commit/42152a3fa3f949f5112461753eb44a436355dfb1))
- Remove unused code ([21f1cce148](https://github.com/facebook/react-native/commit/21f1cce148b64d9b261e9d95d18ba685f6963a4d) by [@TheSavior](https://github.com/TheSavior))
- Mark plugin function definitions used ([d7864d20d5](https://github.com/facebook/react-native/commit/d7864d20d5493f5cd7d9a39b267a9cd7753f91c9) by [@RSNara](https://github.com/RSNara))
- Apply props to Paper component ([e62a4c7988](https://github.com/facebook/react-native/commit/e62a4c79888a01a1b07369baf57b8c77e70b7510) by [@sammy-SC](https://github.com/sammy-SC))
- Add coordinator class ([3f8221ddd9](https://github.com/facebook/react-native/commit/3f8221ddd9390758d0312f5c231b9ff40bc3f067) by [@sammy-SC](https://github.com/sammy-SC))
- Stage 1: printing props to screen ([74608ee4ab](https://github.com/facebook/react-native/commit/74608ee4abbc676b83dd7b08d99ddc7b77f6fd0f) by [@sammy-SC](https://github.com/sammy-SC))
- Fix recycling of Switch ([a261e6dfb2](https://github.com/facebook/react-native/commit/a261e6dfb2680a955943db53c4b0a7bb887bfe22) by [@sammy-SC](https://github.com/sammy-SC))
- Fixing crash in ComponentDescriptorRegistry ([3e23a21025](https://github.com/facebook/react-native/commit/3e23a21025099e0f0ea464453772d5bbb3e19793) by [@shergin](https://github.com/shergin))
- Move reason to a constant ([d0324f693c](https://github.com/facebook/react-native/commit/d0324f693c6ba5cabc92902f801db8c55cf4200a) by [@rickhanlonii](https://github.com/rickhanlonii))
- Send fast refresh stats ([7e49a632c2](https://github.com/facebook/react-native/commit/7e49a632c27cf173365f11558477831c692d2b45) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add fastRefresh to NativeDevSettings ([2d95668aa8](https://github.com/facebook/react-native/commit/2d95668aa8d0f1713c7a39913d29a751b446b6d4) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add reloadWithReason to Fast Refresh ([4cea628e0c](https://github.com/facebook/react-native/commit/4cea628e0c215f2a13489022068f6e38cab5aaa4) by [@rickhanlonii](https://github.com/rickhanlonii))
- Update DevSettings.reload to accept a reason ([549cac63cb](https://github.com/facebook/react-native/commit/549cac63cb252037f73453c5d4e7ae5f15586607) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix crash in Paragraph component ([59b96fe9a3](https://github.com/facebook/react-native/commit/59b96fe9a3e89afc69725408b1bffa776ab9bd1e) by [@sammy-SC](https://github.com/sammy-SC))
- Call \_state.reset in prepareForRecycle ([3f9af02bd5](https://github.com/facebook/react-native/commit/3f9af02bd50f7ec87fd3bb36b9639d6b468d73b3) by [@sammy-SC](https://github.com/sammy-SC))
- Fix crash in ScrollView.scrollEventThrottle ([0d6c427517](https://github.com/facebook/react-native/commit/0d6c427517385ce30f2742d4a0e7d6cb2fbdd6bd) by [@sammy-SC](https://github.com/sammy-SC))
- Add onSlidingComplete callbacks when sliders adjusted via a11y. ([c7aa6dc827](https://github.com/facebook/react-native/commit/c7aa6dc8270c0eabc913fe6c617c8131e3f4b3c5))
- Make it possible for a Runtime to provide its own JSON parsing ([9e7e178a2d](https://github.com/facebook/react-native/commit/9e7e178a2dd3f8a126f9378754a2976e6ed1e084) by [@kodafb](https://github.com/kodafb))
- Native changes for ImageLoader native module ([7455ae48b3](https://github.com/facebook/react-native/commit/7455ae48b365af1d68964fdd4ab662a113ac1a4a
  06d3031281f87ae552abe57cc11868314ee1320e) by [@lunaleaps](https://github.com/lunaleaps))
- Add boolean flag to decide whether to use fbjni or jni ([8583d85de1](https://github.com/facebook/react-native/commit/8583d85de18f84d1ac51cc866d92f7061f837089) by [@SidharthGuglani](https://github.com/SidharthGuglani))
- Remove unused flow suppressions ([a2aa008b33](https://github.com/facebook/react-native/commit/a2aa008b33f9a62b0ed7c30e5c6908e1cc864163) by [@TheSavior](https://github.com/TheSavior))
- Add Flowtests for HostComponent ([79e08f3c15](https://github.com/facebook/react-native/commit/79e08f3c15e155ac077be1811c785d201df76a7f) by [@TheSavior](https://github.com/TheSavior))
- Upgrade eslint-plugin-relay to 1.3.12 ([f0bcfbe9be](https://github.com/facebook/react-native/commit/f0bcfbe9be0eb6a06d096a682717a23e43c39d52) by [@jstejada](https://github.com/jstejada))
- Re-land stack of D17563110: codemod xplat/js ([1bfd15ccb6](https://github.com/facebook/react-native/commit/1bfd15ccb687f14b7683b176adc28aea5acddf12) by [@logandaniels](https://github.com/logandaniels))
- Make setting useNativeDriver required. Add runtime warning if not specified ([5876052615](https://github.com/facebook/react-native/commit/5876052615f4858ed5fc32fa3da9b64695974238) by [@TheSavior](https://github.com/TheSavior))
- Upgrade nullthrows to ^1.1.1 ([89e3f70eab](https://github.com/facebook/react-native/commit/89e3f70eab74b722d517c9885ae52c366d0b2315) by [@logandaniels](https://github.com/logandaniels))
- Collect more information on Debug T48643168 ([fb90f64d9c](https://github.com/facebook/react-native/commit/fb90f64d9c5ead26e243a9a7bae80ba5487d1cff) by [@JoshuaGross](https://github.com/JoshuaGross))
- Export types so codemod can use them ([c16b219456](https://github.com/facebook/react-native/commit/c16b219456c65fd800e70b163c480fca518f58fe
  4f7659d6750e620552b55483c65361f1c9ac465e) by [@logandaniels](https://github.com/logandaniels))
- Remove bridge access from JavaTimerManager, again ([990c9ea5ec](https://github.com/facebook/react-native/commit/990c9ea5ec965dab06889d8ecdc93654d7d48746) by [@ejanzer](https://github.com/ejanzer))
- Create ScrollViewCommands ([9cd2a5f86e](https://github.com/facebook/react-native/commit/9cd2a5f86e8fd42a2ee67749e0a0503aa5b6e1cc) by [@lunaleaps](https://github.com/lunaleaps))
- Add codegen support for EdgeInsets ([845cbec5cf](https://github.com/facebook/react-native/commit/845cbec5cf328c56d208450b8cae1e6d2b95787c) by [@sammy-SC](https://github.com/sammy-SC))
- Allow null as default value for float props ([92f3b4a27f](https://github.com/facebook/react-native/commit/92f3b4a27f02d80f7c4c1f89419415b259b55cae) by [@makovkastar](https://github.com/makovkastar))
- Allow null as default value for boolean props ([bf89d1d536](https://github.com/facebook/react-native/commit/bf89d1d5365bdd723095dbf4432dee9812d33572) by [@makovkastar](https://github.com/makovkastar))
- Use direct access to YogaConfig mNativePointer parameter ([c205b1d391](https://github.com/facebook/react-native/commit/c205b1d39155d15a51274e0577593fbf743b7e57) by [@amir-shalem](https://github.com/amir-shalem))
- Enable metro ([3fd920583b](https://github.com/facebook/react-native/commit/3fd920583b931690f60b0c8adbf79e67ecc13643) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Remove timer proxy ([990c9ea5ec](https://github.com/facebook/react-native/commit/990c9ea5ec965dab06889d8ecdc93654d7d48746
  ed6a3a6c74e2abc3c6dc911aa354bcd38458cd32) by [@ejanzer](https://github.com/ejanzer))
- Upgrade to Flow v0.108.0 ([d34bc5fa64](https://github.com/facebook/react-native/commit/d34bc5fa64a54dfc2e780461ee2997a4b17f8c65) by [@mvitousek](https://github.com/mvitousek))
- Remove unused suppression comments ahead of v0.108.0 deploy ([e0ea5b3aeb](https://github.com/facebook/react-native/commit/e0ea5b3aeb91249349b55e1cc857da8fd7221deb) by [@mvitousek](https://github.com/mvitousek))
- Implement async method dispatch ([689233b018](https://github.com/facebook/react-native/commit/689233b018bd533a7eecd38e38a7fb84b849cf88) by [@RSNara](https://github.com/RSNara))
- Make TurboModuleManager accept a CallInvoker for the NativeModules thread ([43807f04fe](https://github.com/facebook/react-native/commit/43807f04fe2efa2653b647b25a3bc97225cbd669
  10d89b1effc365bf53ba4b27bd4daae45cf9ea3a) by [@RSNara](https://github.com/RSNara))
- Introduce CatalystInstance.getNativeCallInvokerHolder() ([43807f04fe](https://github.com/facebook/react-native/commit/43807f04fe2efa2653b647b25a3bc97225cbd669
  10d89b1effc365bf53ba4b27bd4daae45cf9ea3a
  77fe4f087df3a8bd90aa216126f35ab5ab57fdd9) by [@RSNara](https://github.com/RSNara))
- Introduce MessageQueueThreadCallInvoker ([43807f04fe](https://github.com/facebook/react-native/commit/43807f04fe2efa2653b647b25a3bc97225cbd669
  10d89b1effc365bf53ba4b27bd4daae45cf9ea3a
  1b91bfbf636dcd5c5fb02f96460f5378d054b192) by [@RSNara](https://github.com/RSNara))
- Generate doc info for RN components ([eb7dbc8532](https://github.com/facebook/react-native/commit/eb7dbc8532ce12d912c750c395ed555f444f436e) by [@TheSavior](https://github.com/TheSavior))
- Migrate scrollResponderScrollNativeHandleToKeyboard function to take nativeRef ([0baacbecf5](https://github.com/facebook/react-native/commit/0baacbecf59fd7033763ffabd7f98daa86128de3) by [@TheSavior](https://github.com/TheSavior))
- Split up createTimer into two methods, createTimer and createAndMaybeCallTimer ([f054928124](https://github.com/facebook/react-native/commit/f054928124a2308b2bd450acf8bb754a92ccb16a) by [@ejanzer](https://github.com/ejanzer))
- Remove bridge access from JavaTimerManager ([990c9ea5ec](https://github.com/facebook/react-native/commit/990c9ea5ec965dab06889d8ecdc93654d7d48746
  ed6a3a6c74e2abc3c6dc911aa354bcd38458cd32
  cc36b89b17d960f702ccab2b970817c4996a14ec) by [@ejanzer](https://github.com/ejanzer))
- Moving timing logic out of TimingModule and into a new class ([22764e6cdc](https://github.com/facebook/react-native/commit/22764e6cdcf45ca5930676f6e95f9ab2f82bc78d
  4d774bdc0db0547fec5123ebb88e1994b271271c) by [@ejanzer](https://github.com/ejanzer))
- Renaming Timing to TimingModule ([22764e6cdc](https://github.com/facebook/react-native/commit/22764e6cdcf45ca5930676f6e95f9ab2f82bc78d
  e9b50fa4ee087ea0f2f09c01a0a9c1d85a638f54) by [@ejanzer](https://github.com/ejanzer))
- RNTester Pods top-level subdirs ([de76e7c887](https://github.com/facebook/react-native/commit/de76e7c8871a4943ceb9efe83e325b8f3a349394) by [@fkgozali](https://github.com/fkgozali))
- React Partial Sync ([90a9d59679](https://github.com/facebook/react-native/commit/90a9d59679bb955cc509938d5ef95f29346debbc
  ee5cb5a880015c58a98f4cdcd3f3cc978196246d))
- Easy constant refactor in ReactEventEmitter ([2c87cf5594](https://github.com/facebook/react-native/commit/2c87cf55940e905eef9e53f2c6002fd50722762c) by [@mdvacca](https://github.com/mdvacca))
- Remove dead code of mYogaNodeCloneFunction ([d898574fb2](https://github.com/facebook/react-native/commit/d898574fb260258db923d81ab8bd6ee77fada5b1) by [@amir-shalem](https://github.com/amir-shalem))
- Add accessibilityValuedescription property. ([7df3eea1a7](https://github.com/facebook/react-native/commit/7df3eea1a79f12c2dfff1976d0cef605a83232ec))
- Remove YogaNode.create() from the abstract class ([97607ff175](https://github.com/facebook/react-native/commit/97607ff175db4af29276337832acd7a15bc237d9) by [@amir-shalem](https://github.com/amir-shalem))
- Split YogaConfig into interface and actual implementation ([1c1896f6eb](https://github.com/facebook/react-native/commit/1c1896f6eb34763ef868452343886613ee527c40) by [@amir-shalem](https://github.com/amir-shalem))
- Expose native pointer thru an interface function for YogaConfig ([487ff2acbc](https://github.com/facebook/react-native/commit/487ff2acbccb8b23424ef2dd86bdf4628455b8da) by [@amir-shalem](https://github.com/amir-shalem))
- Switch to YogaConfigFactory.create ([393b5f27d2](https://github.com/facebook/react-native/commit/393b5f27d2e93652c4dba5e525235fe78284014f) by [@amir-shalem](https://github.com/amir-shalem))
- Switch to YogaNodeFactory.create ([92fed269c2](https://github.com/facebook/react-native/commit/92fed269c225e9decef0ad1fd6a2237d1be5cf47) by [@amir-shalem](https://github.com/amir-shalem))
- Ensure callbacks can only be called once on the native side ([15343863b0](https://github.com/facebook/react-native/commit/15343863b0dbc81b5310f1cbfc06f2bbd9e37420) by [@RSNara](https://github.com/RSNara))
- Fix memory leak in experiment: JNI leak ([4b59360a59](https://github.com/facebook/react-native/commit/4b59360a59a8eb83bd6878559ef2b7a5392a8b10) by [@JoshuaGross](https://github.com/JoshuaGross))
- Refactor ReactEventEmitter to avoid using the method ReactContext.getJSModule() ([87af32a24c](https://github.com/facebook/react-native/commit/87af32a24c212407a8533af99954ae96c103c3f1) by [@mdvacca](https://github.com/mdvacca))
- Update Lean Core package names ([3666244a84](https://github.com/facebook/react-native/commit/3666244a8473448f7ce4b54841567800cc29031e) by [@cpojer](https://github.com/cpojer))
- Move ART JS files to FB internal ([9a0ebe0aba](https://github.com/facebook/react-native/commit/9a0ebe0abaec7b59bdefe63cd7d392737ab20160) by [@cpojer](https://github.com/cpojer))
- Combine rn_debug_flags and rn_feature_flags ([8831cc6ac2](https://github.com/facebook/react-native/commit/8831cc6ac23775ad568e776aa20a2b5b25abbc2a) by [@mmmulani](https://github.com/mmmulani))
- Make View Managers lazy ([3e02f1f929](https://github.com/facebook/react-native/commit/3e02f1f929340dc184607bf9b25aadd648a54668) by [@axe-fb](https://github.com/axe-fb))
- Include missing <cstdarg> ([91e35b24e3](https://github.com/facebook/react-native/commit/91e35b24e39c3740e60580577c3298fe27787cde) by [@kodafb](https://github.com/kodafb))
- Add standalone factory classes which generate YogaNode + YogaConfig ([b8d1dda57a](https://github.com/facebook/react-native/commit/b8d1dda57a8bd77e820465dab67bb95e7b87886f) by [@amir-shalem](https://github.com/amir-shalem))
- Reuse preprocessed exception message in redbox after symbolication ([5789e67760](https://github.com/facebook/react-native/commit/5789e6776019b2cc25e18709e372aca830bf495f) by [@motiz88](https://github.com/motiz88))
- Move `react-native-implementation.js` to `index.js` ([e54ecf907e](https://github.com/facebook/react-native/commit/e54ecf907e9f0660d05dc807ec0e67127143ebed) by [@cpojer](https://github.com/cpojer))
- Upgrade eslint-plugin-relay to 1.3.11 ([76ace4764b](https://github.com/facebook/react-native/commit/76ace4764b7d0f6ce960d21266e6bb1d5147d436) by [@tyao1](https://github.com/tyao1))
- Fix syntax errors in commands codegen ([c2d28074b3](https://github.com/facebook/react-native/commit/c2d28074b33316d62c753ba5e4665fea5ac8af5e) by [@sammy-SC](https://github.com/sammy-SC))
- Attempt to collate Remove/Delete mounting items ([27fca36a9a](https://github.com/facebook/react-native/commit/27fca36a9a177c8b232201b9673a933e15844710) by [@JoshuaGross](https://github.com/JoshuaGross))
- In Binding.cpp, retain reference to reactNativeConfig ([d7d848e824](https://github.com/facebook/react-native/commit/d7d848e8241ae430472ded5d428cacffe1e8bec7) by [@JoshuaGross](https://github.com/JoshuaGross))
- Move architecture indicator to internal only ([e92235ddf2](https://github.com/facebook/react-native/commit/e92235ddf2461d6f5fd799564125e9adca16484a) by [@fkgozali](https://github.com/fkgozali))
- Add prefix to the architecture overlay ([d0c618a1f1](https://github.com/facebook/react-native/commit/d0c618a1f16d7ea7155bd66524d1faf30f30f5a4) by [@fkgozali](https://github.com/fkgozali))
- RN: Improve `nativeImageSource` Return Type ([8924639613](https://github.com/facebook/react-native/commit/8924639613bc83703327db276052c5017df7295e) by [@yungsters](https://github.com/yungsters))
- Clean up local references created for method calls ([bd8e6cd2e4](https://github.com/facebook/react-native/commit/bd8e6cd2e4270981cd93c926cef062f4a302d45a
  1c2671c8c929e77618605c5564899d19569b20d1) by [@RSNara](https://github.com/RSNara))
- Add RNTester Pods to gitignore ([b584832ae9](https://github.com/facebook/react-native/commit/b584832ae97a63878a7ae546f8fc4baf489e765a) by [@friederbluemle](https://github.com/friederbluemle))
- Add React Dev tools to the default template ([e8541e03f4](https://github.com/facebook/react-native/commit/e8541e03f46f52b15fd8aecdb156e68d6a1262ea) by [@axe-fb](https://github.com/axe-fb))
- Add React Dev tools plugin to RNTester ([6a9ea48a8c](https://github.com/facebook/react-native/commit/6a9ea48a8cbd5a80d2d79c1c014fceb0b154d671) by [@axe-fb](https://github.com/axe-fb))
- Fix Imports in React Native template ([04a011236b](https://github.com/facebook/react-native/commit/04a011236b8f715ab7ee5dc15a0151151740cc87) by [@axe-fb](https://github.com/axe-fb))
- Convert NSNull and nil return value to JS null ([337ec88137](https://github.com/facebook/react-native/commit/337ec88137afd7b4fefaf32e585858d274f484ab) by [@RSNara](https://github.com/RSNara))
- Upgrade to v0.107.0 ([20a4ac9854](https://github.com/facebook/react-native/commit/20a4ac985444276970a0684d2dcef997750eb6df) by [@nmote](https://github.com/nmote))
- Fix the use_framework! error ([2510632997](https://github.com/facebook/react-native/commit/251063299771059697fe667a462b8ea785548357) by [@priteshrnandgaonkar](https://github.com/priteshrnandgaonkar))
- Remove BugReporting extraData log ([16eccf304e](https://github.com/facebook/react-native/commit/16eccf304e607684a7bc9be77ac9e59f6894dea8) by [@gaearon](https://github.com/gaearon))
- Add flow parser for array<array<object>> ([5048f02518](https://github.com/facebook/react-native/commit/5048f025184e10c689bef79e4cb7216c14249b9a) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add generator for array<array<object>> ([a7a1c8c5d3](https://github.com/facebook/react-native/commit/a7a1c8c5d362934eee0ba9cd43bc11b4f70d71fb) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add fixture for array<array<object>> ([588ece23a0](https://github.com/facebook/react-native/commit/588ece23a0e12d69d10af03369c6ad9039cd5eab) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add RawValue support for arrays of arrays ([91d59eb20b](https://github.com/facebook/react-native/commit/91d59eb20b2ce49e6fcc544473de76e313a8639b) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add e2e tests for int enums ([c232b5ae3b](https://github.com/facebook/react-native/commit/c232b5ae3bb77e39a75f9197af4db152e173d2da) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add parser support for number unions as Int32 enums ([6874bade43](https://github.com/facebook/react-native/commit/6874bade43207a26d464f278e66ce15e3dd3ee4e) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add support for int enum object properties ([e352edebeb](https://github.com/facebook/react-native/commit/e352edebeb3de06ce8cc87c345ce263ca135d191) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add basic support for Int32Enum in generators ([f4c6868fc2](https://github.com/facebook/react-native/commit/f4c6868fc28951f4b93f3e92b2ab42f3e66a1432) by [@rickhanlonii](https://github.com/rickhanlonii))
- Update unrelated Int32Enum snapshots ([c58106344e](https://github.com/facebook/react-native/commit/c58106344e89fd98edef16e7c445a087f09ad4da) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add Int32EnumTypeAnnotation to codegen schema ([e906c6f78f](https://github.com/facebook/react-native/commit/e906c6f78f94716946765eab6ac79d8a8ca72599) by [@rickhanlonii](https://github.com/rickhanlonii))
- Page reloads through execution context ([fa6add7d4b](https://github.com/facebook/react-native/commit/fa6add7d4bc68467862385f153915e4b4b713f83) by [@willholen](https://github.com/willholen))
- Add back accessibilityStates until next release ([69020a8e87](https://github.com/facebook/react-native/commit/69020a8e877d68af2fec0becd008f3a48c3af8e7) by [@rickhanlonii](https://github.com/rickhanlonii))
- Migrate FbReactTTRCStepRenderFlagManager to JS codegen ([7715d18e6e](https://github.com/facebook/react-native/commit/7715d18e6ed3bbc90942bba526cf563e5a15c9fa) by [@makovkastar](https://github.com/makovkastar))
- Use SoundManager in Pressability and Touchable ([1ee811c951](https://github.com/facebook/react-native/commit/1ee811c95114113acbcfa4d818ad38d4953aa815
  de2572ce12a1628e211dc6d9a7816eb1707f7a86) by [@mdvacca](https://github.com/mdvacca))
- Add type annotations to render method of react components ([f0cc7fb666](https://github.com/facebook/react-native/commit/f0cc7fb6662cd01cdce98bf1e224274596a43315) by [@logandaniels](https://github.com/logandaniels))
- Add Fresco Image Plugin ([24de443bac](https://github.com/facebook/react-native/commit/24de443bac9bede5c2a1667bf29db168830ab5b0) by [@axe-fb](https://github.com/axe-fb))
- Move ReactNativeFlipper class to template ([755ad3b33a](https://github.com/facebook/react-native/commit/755ad3b33a40bfb901d8b943c46c429433945713) by [@axe-fb](https://github.com/axe-fb))
- Handle empty string returned from NativeAppearance.getColorScheme() ([49f59a6b9e](https://github.com/facebook/react-native/commit/49f59a6b9e52add331ea1a43e7df3caa8e1d2906) by [@axe-fb](https://github.com/axe-fb))
- Remove accessibilityStates property. ([55276a9b10](https://github.com/facebook/react-native/commit/55276a9b104781b49b66938d71aac385bdd236e5
  7b35f427fd66cb0f36921b992095fe5b3c14d8b9))
- Fix some typing annotations ([2c9173365d](https://github.com/facebook/react-native/commit/2c9173365db8b590f3ecd15b248811ed351491b9))
- Unbreak master ([a1ee1d7698](https://github.com/facebook/react-native/commit/a1ee1d7698081e7882d2fc5f08d848f93623f1c4) by [@JoshuaGross](https://github.com/JoshuaGross))
- Partial RN sync ([42a385bddf](https://github.com/facebook/react-native/commit/42a385bddf895be5b00dd30f82396f0d8197cfc1) by [@gaearon](https://github.com/gaearon))
- Deploy v0.106.3 to xplat/js ([b31056d802](https://github.com/facebook/react-native/commit/b31056d802437d31c432e43bcd712b963f54116e) by [@gabelevi](https://github.com/gabelevi))
- Update the version of yoga podspec to match the actual version of Yoga published ([a58dd9683d](https://github.com/facebook/react-native/commit/a58dd9683da6135bca119a8b0ae5d0ea5382cf4c) by [@axe-fb](https://github.com/axe-fb))
- Adopt Contributor Covenant ([a939f8b317](https://github.com/facebook/react-native/commit/a939f8b31786055aba4a8284f2fc23e7f790cba3) by [@zpao](https://github.com/zpao))
- Generate OSS view manager interfaces and delegates ([3d3db71763](https://github.com/facebook/react-native/commit/3d3db71763342a7e62a2c54118dd65bd633f889f) by [@makovkastar](https://github.com/makovkastar))
- Improve UIManager QPL markers ([ed9ecb5d73](https://github.com/facebook/react-native/commit/ed9ecb5d73f9999af99145d992c2c0a43a17da41) by [@sahrens](https://github.com/sahrens))
- Support for UpdatePaddingMountItem ([769d51824e](https://github.com/facebook/react-native/commit/769d51824e212ed36098a61548470e45eb247f42
  44bfc4be447680096f01fd00a1344c2cd398a981) by [@JoshuaGross](https://github.com/JoshuaGross))
- Upgrade eslint-plugin-relay to 1.3.10 ([c9ff99f18e](https://github.com/facebook/react-native/commit/c9ff99f18e5b4e464d8299bcb4c4ebdc12445f29) by [@tyao1](https://github.com/tyao1))
- ZoomToRect convert to command ([25f6be109b](https://github.com/facebook/react-native/commit/25f6be109b930950b4e913bd992002405c12f4fa) by [@lunaleaps](https://github.com/lunaleaps))
- Apply BUCKFORMAT to all BUCK files ([5acb36483c](https://github.com/facebook/react-native/commit/5acb36483cefa1ec2fa11d08b6e6f7c86fa986a8) by [@zertosh](https://github.com/zertosh))
- Add unstable_setExceptionDecorator ([db9fab4473](https://github.com/facebook/react-native/commit/db9fab4473519c6dc6803cd8985239902742c4ce) by [@motiz88](https://github.com/motiz88))
- Final fixes and seal xplat/js/react-native-github ([b6333f79e1](https://github.com/facebook/react-native/commit/b6333f79e1194e2fa59709d6e32e9f080124fac7) by [@logandaniels](https://github.com/logandaniels))
- Deploy v0.106.0 to xplat/js ([97b42bb142](https://github.com/facebook/react-native/commit/97b42bb142f4f9d52af3f85e288ab7742b282fed) by [@gabelevi](https://github.com/gabelevi))
- Add annotations to ReactNativePrivateInterface ([08daad4427](https://github.com/facebook/react-native/commit/08daad44273f16ef513c3b9ab17da0efce334ee5) by [@logandaniels](https://github.com/logandaniels))
- Fix generated props CPP default values ([cafbf67d0d](https://github.com/facebook/react-native/commit/cafbf67d0dc8b3674c82b86c9e9724ee4363890e) by [@JoshuaGross](https://github.com/JoshuaGross))
- Define type signature for react-native-implementation ([d2213c75ff](https://github.com/facebook/react-native/commit/d2213c75ff38b517ba7656a52ec2df4ba57c807c) by [@rubennorte](https://github.com/rubennorte))
- Add tests for comparing old and new codegen ([17381f197f](https://github.com/facebook/react-native/commit/17381f197fd9f6f955ff8018b3e1288d1c78b743) by [@osdnk](https://github.com/osdnk))
- Bump eslint-plugin-react-hooks to 2.0.1 ([2dbf42b4a3](https://github.com/facebook/react-native/commit/2dbf42b4a3285c16fed7955e1e3d9bc770e85f61) by [@TheSavior](https://github.com/TheSavior))
- Remove ; from method implementation definition ([d8e335df0e](https://github.com/facebook/react-native/commit/d8e335df0e9148d5bcfd865cdbe6e33c1106709f))
- Adhere to main queue requirements of native modules ([e94f2c3625](https://github.com/facebook/react-native/commit/e94f2c362581c72e56a5436a2b9e67ca57901bda) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Clean-up $TEMPORARY$object in xplat/js/react-native-github ([92073d4a71](https://github.com/facebook/react-native/commit/92073d4a71d50a1ed80cf9cb063a6144fcc8cf19) by [@logandaniels](https://github.com/logandaniels))
- Remove hack in C++ that prevents any real TextInputs from being rendered ([219e1972d6](https://github.com/facebook/react-native/commit/219e1972d6f4ceeac4ffc41f8facc4205da78546) by [@JoshuaGross](https://github.com/JoshuaGross))
- Give a more explicit message about why `number` isn't supported ([11dc847ec9](https://github.com/facebook/react-native/commit/11dc847ec9c491f5a8eeff1300bca02e040f5889) by [@JoshuaGross](https://github.com/JoshuaGross))
- Work around crashing redbox ([43f042eb7d](https://github.com/facebook/react-native/commit/43f042eb7db0fe97265e05ff39a7af6781530680) by [@JoshuaGross](https://github.com/JoshuaGross))
- Fix bridge.imageLoader warning message ([5808973964](https://github.com/facebook/react-native/commit/5808973964b262ee3d4a8d68e0f01753efcac36c) by [@fatalsun](https://github.com/fatalsun))
- Also add in converstion imports for arrays of objects ([f0600e00dc](https://github.com/facebook/react-native/commit/f0600e00dc1c008b3f739c10de64655a7212f778) by [@rickhanlonii](https://github.com/rickhanlonii))
- Recursively visit all object properties to generate structs ([4bf5e63138](https://github.com/facebook/react-native/commit/4bf5e6313893c8eedb361484dd7a564c1a8d0ff1) by [@rickhanlonii](https://github.com/rickhanlonii))
- Fix nested array object structs ([3050ac2d2d](https://github.com/facebook/react-native/commit/3050ac2d2d926dc13e84b589912cda9cc5754871) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add broken generator fixtures for nested array props ([8c995a2a0d](https://github.com/facebook/react-native/commit/8c995a2a0dd13933c7572ffea12826809f69bbd3) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add new parser fixture for nested array objects ([1c67a94af9](https://github.com/facebook/react-native/commit/1c67a94af9f567a3c6eab8507f55331118c65978) by [@rickhanlonii](https://github.com/rickhanlonii))
- Cast double to float instead of .getFloat ([0df5e5016d](https://github.com/facebook/react-native/commit/0df5e5016da73c1d32ae73739e6669b06d399c0c) by [@TheSavior](https://github.com/TheSavior))
- Fix naming of nested structs ([b9899222a3](https://github.com/facebook/react-native/commit/b9899222a3f43fcdf84087529916ca9844a4583f) by [@TheSavior](https://github.com/TheSavior))
- Add fixture for nested objects ([e9ef560e87](https://github.com/facebook/react-native/commit/e9ef560e87eda386396f540c8a15c48fbb263e3b) by [@TheSavior](https://github.com/TheSavior))
- Add Fixture for Array with Primitives ([6ee5679582](https://github.com/facebook/react-native/commit/6ee56795820acab51805441fb3fc654312b883b2) by [@TheSavior](https://github.com/TheSavior))
- Add recursive types for Object types ([2d937c63e4](https://github.com/facebook/react-native/commit/2d937c63e4b25bcbf69a44937ae22beda6613361) by [@TheSavior](https://github.com/TheSavior))
- RN: Delete Long Press Error in Touchable ([9a3d722ccb](https://github.com/facebook/react-native/commit/9a3d722ccb523f227ffd7770a809996e6cfe75d9) by [@yungsters](https://github.com/yungsters))
- Metro Bundler -> Metro ([88d0ac17e8](https://github.com/facebook/react-native/commit/88d0ac17e8bf20c4134ba1b17827fa33eeec2ed2) by [@cpojer](https://github.com/cpojer))

#### Android Unknown

- Bump CLI to ^4.1.x to fix run-android ([26e7d6a062](https://github.com/facebook/react-native/commit/26e7d6a06211412a079af746750c5dd9edbfecbb) by [@alloy](https://github.com/alloy))
- Add extra logging information in RN Android animation system ([5ddbd5c54f](https://github.com/facebook/react-native/commit/5ddbd5c54fc89f4e7fac360f6c184c08801d6fc9) by [@mdvacca](https://github.com/mdvacca))
- Add extra logging in the Bridge exception handling ([4ad852c137](https://github.com/facebook/react-native/commit/4ad852c1376e268456cd6dcd0d240dd75d780df4) by [@mdvacca](https://github.com/mdvacca))
- Fix crash when using TextInput.FontVariant prop in Android API level < 26 ([e885ddedb9](https://github.com/facebook/react-native/commit/e885ddedb9b0a025cb8031414dcc4bd22744a0eb) by [@mdvacca](https://github.com/mdvacca))
- Add excludedPlatform option to CodeSchema ([b6a23d8793](https://github.com/facebook/react-native/commit/b6a23d87930cefef911e15a1da13580c84aa8b80) by [@sammy-SC](https://github.com/sammy-SC))
- Collapse Delete-Create mounting instructions ([894ee72278](https://github.com/facebook/react-native/commit/894ee722787b18cf2fdfc657781c917c737d37d8) by [@mdvacca](https://github.com/mdvacca))
- Add extra logging in FabricUIManager ([87e1734217](https://github.com/facebook/react-native/commit/87e1734217a7860ac81a1f255cad96d47ea1798d) by [@mdvacca](https://github.com/mdvacca))
- Enable AppearanceModule for all OS versions ([27d7d3fed5](https://github.com/facebook/react-native/commit/27d7d3fed550854d480fe0149b33f5aeb703459c))
- Explicitly set mBinding to null in FabricUIManager ([299eb9f440](https://github.com/facebook/react-native/commit/299eb9f440fff7c7330e40e9e927e50beab4b60e) by [@JoshuaGross](https://github.com/JoshuaGross))
- Ensure tests are running on the correct thread ([3b51499fc2](https://github.com/facebook/react-native/commit/3b51499fc232cd824d15bb72144cfc1d6b4fb5ad) by [@mdvacca](https://github.com/mdvacca))
- Fix ReactIdleDetection from Android X migration ([6166645560](https://github.com/facebook/react-native/commit/6166645560828831c73b7721fee3891c52b604f7) by [@JoshuaGross](https://github.com/JoshuaGross))
- Fix Switch measurement on Android ([bdb4278523](https://github.com/facebook/react-native/commit/bdb4278523141ad747c3555e0837bdf5ac612a2e) by [@makovkastar](https://github.com/makovkastar))
- Pass surface ID to measure function in Java to retrieve themed Context ([299c984964](https://github.com/facebook/react-native/commit/299c9849645c24c8ceb802893e5cdddd25413f1b) by [@makovkastar](https://github.com/makovkastar))
- Make update-plugins.js script support multiple libraries ([d8fda74c24](https://github.com/facebook/react-native/commit/d8fda74c242a3e003f050260fbf4020f953bde3f
  3aa8a406595251c6ca6c5f83cfc5df6d3185e007
  1d7de28379d3956bff06ba990ed6e5b35c197893) by [@RSNara](https://github.com/RSNara))
- Convert SourceCode module to TurboModule ([4d9e5f8481](https://github.com/facebook/react-native/commit/4d9e5f8481531000380cf4d3d485fcde1321a37b
  774502510b26632a0604e0694798f456aa4482d1) by [@ejanzer](https://github.com/ejanzer))
- Stop requiring TurboModuleManager JSIModule on CatalystInstance cleanup ([42dcfab2a9](https://github.com/facebook/react-native/commit/42dcfab2a93da27ab1fdbde9d236bf96039e65b8) by [@RSNara](https://github.com/RSNara))
- Migrate platform imports to platform_defs.bzl ([de17cdecd8](https://github.com/facebook/react-native/commit/de17cdecd8f106c0ae8f8d2ae2df6309bf28fe40) by [@marekcirkos](https://github.com/marekcirkos))
- Make TurboModuleProviderFunctionType not depend on TurboModuleManager instance ([5e68a98c3d](https://github.com/facebook/react-native/commit/5e68a98c3dd108b6db858c91e56a864423644b8e) by [@RSNara](https://github.com/RSNara))
- Split up createTimer into two methods, createTimer and createTimerForNextFrame ([a6a6dbe05c](https://github.com/facebook/react-native/commit/a6a6dbe05c1b02803afc2786a582384a36d04a1c) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Add @DoNotStrip to JavaScriptModule interfaces ([6464ef0a92](https://github.com/facebook/react-native/commit/6464ef0a924a6d36e4009053186a71e6a4d84908) by [@ejanzer](https://github.com/ejanzer))
- Use generated Java delegate for setting properties on ReactSwitchManager ([5cfe588993](https://github.com/facebook/react-native/commit/5cfe58899304c8276e1134fa61d31e491356b2ef) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on ReactDrawerLayoutManager ([81f567d4aa](https://github.com/facebook/react-native/commit/81f567d4aa3cf67c8ff5c55d16a14c77e4083122) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on ReactProgressBarViewManager ([2e7545cf7e](https://github.com/facebook/react-native/commit/2e7545cf7ec616b00047cbb2b5cb7126d9117e12) by [@makovkastar](https://github.com/makovkastar))
- Flow type AndroidSwitch and generate Android OSS classes ([23557d1f9a](https://github.com/facebook/react-native/commit/23557d1f9af33af315f52bde1c47ecaddcb9a856) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on SwipeRefreshLayoutManager ([ef3b16ef6d](https://github.com/facebook/react-native/commit/ef3b16ef6dc3908aaa55c04a9295a0ab044fffff) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on ReactModalHostManager ([1eb8ef59ad](https://github.com/facebook/react-native/commit/1eb8ef59ad7f88522936a732d2e191eaea913a29) by [@makovkastar](https://github.com/makovkastar))
- Use generated Java delegate for setting properties on ReactSliderManager ([5925b3d408](https://github.com/facebook/react-native/commit/5925b3d40828c0f33413bc52be729f8eede5e076) by [@makovkastar](https://github.com/makovkastar))
- Create a new Timers class to reuse old RCTTiming Native Module [2/N] ([33e65c6fd4](https://github.com/facebook/react-native/commit/33e65c6fd43234ec68a1aeda100736ef39be8a35) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Give TurboModules access to the native CallInvoker ([43807f04fe](https://github.com/facebook/react-native/commit/43807f04fe2efa2653b647b25a3bc97225cbd669) by [@RSNara](https://github.com/RSNara))
- Rename JSCallInvoker{,Holder} to CallInvoker{,Holder} ([4c998fd05d](https://github.com/facebook/react-native/commit/4c998fd05d9b7bad9b5db0fb48aba0e4d6f4fa7e) by [@RSNara](https://github.com/RSNara))
- Fix type mismatches in YogaLogger#log function ([94e8ccf9c0](https://github.com/facebook/react-native/commit/94e8ccf9c02318eb407d3ce58e5e14a273967375
  9b246d6185de77e82d62c063138393d786e77bd8) by [@usikder](https://github.com/usikder))
- Fix JNI local reference table overflow problem ([bd8e6cd2e4](https://github.com/facebook/react-native/commit/bd8e6cd2e4270981cd93c926cef062f4a302d45a) by [@RSNara](https://github.com/RSNara))
- Remove TimePickerAndroid from React Native ([dbf070c51e](https://github.com/facebook/react-native/commit/dbf070c51ecd14127a8317faa75cb661697b5a6b) by [@cpojer](https://github.com/cpojer))
- ReactNativeConfigHolder must retain underlying Java object as global_ref ([09aefa191b](https://github.com/facebook/react-native/commit/09aefa191b224f856c2a7ac5e4cee16a67f6a7a2) by [@JoshuaGross](https://github.com/JoshuaGross))
- Support light/dark themes ([fca49a9459](https://github.com/facebook/react-native/commit/fca49a9459041d6bbb824371dadb107419abfcd1) by [@mdvacca](https://github.com/mdvacca))
- Manage redbox updates by comparing exception IDs ([850a8352c9](https://github.com/facebook/react-native/commit/850a8352c91f10842d84c3e811cf6e2a0927f349) by [@motiz88](https://github.com/motiz88))
- Remove "Reload on JS change" from RN Android ([478df155e7](https://github.com/facebook/react-native/commit/478df155e70a4ce30219adcac6f0801c4e4d10ec) by [@cpojer](https://github.com/cpojer))
- AndroidTextInput: remove enum todos from flow typing ([e6b11e0953](https://github.com/facebook/react-native/commit/e6b11e0953bcba2d9a4f1ed339f9fb6cd859fb51) by [@JoshuaGross](https://github.com/JoshuaGross))
- Sanitize float value before calling setCameraDistance ([d69387dac8](https://github.com/facebook/react-native/commit/d69387dac83bdb2e9e21b1fc86caf10981e53790) by [@olegbl](https://github.com/olegbl))
- IOS Appearance: default to light ([67fe9b29e8](https://github.com/facebook/react-native/commit/67fe9b29e82cef0a12f87cf3976b1501bd7d288a) by [@fkgozali](https://github.com/fkgozali))
- Use interface instead of abstract class to reference view manager in generated delegate ([d38afb4a9d](https://github.com/facebook/react-native/commit/d38afb4a9d711b9308266d7cd6a3a39e713c5e36) by [@makovkastar](https://github.com/makovkastar))
- Make sure requests are sent in sequential order on iOS. ([e6d5f2e80d](https://github.com/facebook/react-native/commit/e6d5f2e80d5cbd6e54b8ffe99efe1e64ab490430) by [@amnn](https://github.com/amnn))
- Print stacktraces of exceptions thrown when creating NativeModules ([7756114250](https://github.com/facebook/react-native/commit/77561142505a1d4397f68ca662ca2b032dc49de9) by [@RSNara](https://github.com/RSNara))
- Enable Flipper on RNTester app (Android) ([adac04601e](https://github.com/facebook/react-native/commit/adac04601ec36d35eca42532ec824c5790dc71ed) by [@axe-fb](https://github.com/axe-fb))
- Bring back JS bundle loading progress bar on Android ([7b9d6d19e2](https://github.com/facebook/react-native/commit/7b9d6d19e2c0854aa53587ef68ce715fb7803e2a) by [@makovkastar](https://github.com/makovkastar))
- Sanitize float value before setting transform property ([d8d3ed508b](https://github.com/facebook/react-native/commit/d8d3ed508b928a7b6eb4f0dae88e1e2c7e7fb6dd) by [@makovkastar](https://github.com/makovkastar))
- Flow type and codegen for AndroidTextInput ([ba56fa43f0](https://github.com/facebook/react-native/commit/ba56fa43f0a89a7f2654d6ba9655356bb975f56d) by [@JoshuaGross](https://github.com/JoshuaGross))
- Fix compilation error in AndroidTextInputComponentDescriptor ([6c17780a6b](https://github.com/facebook/react-native/commit/6c17780a6bf7615d43e00e4e6c8e5fa4ddef0301))
- Remove RCT prefix from names of generated Java classes ([26a8d2e03a](https://github.com/facebook/react-native/commit/26a8d2e03ab4bba2dbdaae8d49397743c6a72859) by [@makovkastar](https://github.com/makovkastar))
- Fix tests for JS codegen by renaming conflicting props ([38089753ef](https://github.com/facebook/react-native/commit/38089753efdfa5736e119ef206ed4e8ccf37f730) by [@makovkastar](https://github.com/makovkastar))
- Add copyright header and @generated annotation to Android view manager interfaces and delegates ([9d5d2549e3](https://github.com/facebook/react-native/commit/9d5d2549e31dd96df6f3aae0c3f45849e3281157) by [@makovkastar](https://github.com/makovkastar))
- Android Q related NaN error fix - don't try to do math with NaN values ([db5994980d](https://github.com/facebook/react-native/commit/db5994980df136c5cce6cd90348b4bf18180562f))
- Fix typing for ProgressBarAndroid ([bc4825ee9d](https://github.com/facebook/react-native/commit/bc4825ee9d49d7c8044bd08ec3ca49050435e17c) by [@rubennorte](https://github.com/rubennorte))
- Flow type and codegen RCTFbMap ([b26acae6dd](https://github.com/facebook/react-native/commit/b26acae6dd81eda6f013343c8dd80139e6ff8097) by [@JoshuaGross](https://github.com/JoshuaGross))
- TextInput: include AndroidTextInputNativeComponent instead of calling requireNativeComponent directly ([1013a01049](https://github.com/facebook/react-native/commit/1013a010492a7bef5ff58073a088ac924a986e9e) by [@JoshuaGross](https://github.com/JoshuaGross))
- Fix Java compile errors in JS-generated receiveCommand method ([cddc2c6c72](https://github.com/facebook/react-native/commit/cddc2c6c72a3d6dc5cfe46d16fafa55a81b8f644) by [@TheSavior](https://github.com/TheSavior))
- Don't enable Flipper in React Native by default ([bb272bacca](https://github.com/facebook/react-native/commit/bb272baccaf6a3a9d0849478855ab17dd197e412) by [@axe-fb](https://github.com/axe-fb))
- Remove the native delta client from Android ([bb625e5238](https://github.com/facebook/react-native/commit/bb625e523867d3b8391a76e5aa7c22c081036835) by [@cpojer](https://github.com/cpojer))

#### iOS Unknown

- Make RCTNativeAnimatedModule a regular NativeModule ([a95184cbad](https://github.com/facebook/react-native/commit/a95184cbad4ac0896858f476cad3f4c147ea89f5) by [@RSNara](https://github.com/RSNara))
- Use Switch command from JavaScript ([4eb8a951ff](https://github.com/facebook/react-native/commit/4eb8a951ffd60dfdb4b05145d9d36a8b493a4cd7) by [@sammy-SC](https://github.com/sammy-SC))
- Deprecate RCTBridgeWillReloadNotification ([5ca0df64a1](https://github.com/facebook/react-native/commit/5ca0df64a1131bd4680cf4b225f090e070a1398b) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix unrecognized selector for iOS 9 ([35b8b06db9](https://github.com/facebook/react-native/commit/35b8b06db9ee55fcff780b02f002c15872d8f15e))
- Update iOS Simulator OS version to 12.4 ([cb1171b37a](https://github.com/facebook/react-native/commit/cb1171b37ae7e34fbcb608305d68f9e6ac601cde) by [@RSNara](https://github.com/RSNara))
- Fix unrecognised selector crash on iOS 9 ([4c4948b6e8](https://github.com/facebook/react-native/commit/4c4948b6e83208cd517dd977b3462b1959505e1d) by [@sammy-SC](https://github.com/sammy-SC))
- Forward subviews to Paper component from LegacyViewManagerInterop ([5327c3ed83](https://github.com/facebook/react-native/commit/5327c3ed8319171b1442f41686992584c9590253) by [@sammy-SC](https://github.com/sammy-SC))
- Fix tintColor in SegmentedControlIOS component ([be89e4d928](https://github.com/facebook/react-native/commit/be89e4d928a504de304f5afb19bd3cc15ae3eb7d) by [@sammy-SC](https://github.com/sammy-SC))
- Add support for ScrollView.onScroll animations ([ffc7ec992c](https://github.com/facebook/react-native/commit/ffc7ec992c66417039b0fa14f1afd54a9cd2f882) by [@sammy-SC](https://github.com/sammy-SC))
- Move RCTScrollEvent into separate file ([1ba67fd9a6](https://github.com/facebook/react-native/commit/1ba67fd9a6f0767a259556197669968cdeb1a52b) by [@sammy-SC](https://github.com/sammy-SC))
- IOS - clean up weakproxy gating ([abf612aecd](https://github.com/facebook/react-native/commit/abf612aecd7f1ce310d611501cdb946e8903fb4f) by [@fkgozali](https://github.com/fkgozali))
- Back out D17720575 -- D17724498 ([2b62bd7695](https://github.com/facebook/react-native/commit/2b62bd7695e568ff97797f161ef9f75a063eece2
  da6274ba76afaa271d6a74e4143479c93fa9bb14
  df96de78bb2706f923b6bd4f116fda7bd2f5a081) by [@amnn](https://github.com/amnn))
- Storing RCTBridge weakly inside ContextContainer ([38e36b7049](https://github.com/facebook/react-native/commit/38e36b704906621749fb95e61156d2bff0533fc3) by [@shergin](https://github.com/shergin))
- Allow enabling RCTDevSettings outside of dev mode ([c30f895da5](https://github.com/facebook/react-native/commit/c30f895da5477c649d01e634c0836e6aa7a68ddf) by [@mmmulani](https://github.com/mmmulani))
- Make RCTAsyncLocalStorage TurboModule-compatible ([2b62bd7695](https://github.com/facebook/react-native/commit/2b62bd7695e568ff97797f161ef9f75a063eece2
  df96de78bb2706f923b6bd4f116fda7bd2f5a081
  7eb7c84a09524b37d125b11c936997551f686384) by [@RSNara](https://github.com/RSNara))
- Make RCTAlertManager TurboModule-compatible ([da6274ba76](https://github.com/facebook/react-native/commit/da6274ba76afaa271d6a74e4143479c93fa9bb14
  60321a78ada4b38dbb3c24aac3f8df80dbef6274) by [@RSNara](https://github.com/RSNara))
- Make RCTLocalAssetImageLoader and RCTGIFImageDecoder TurboModule-compatible ([a7d2f0dc33](https://github.com/facebook/react-native/commit/a7d2f0dc33b1452d688c3ddd333259fcc5c3d9c4) by [@RSNara](https://github.com/RSNara))
- Move RCTImage NativeModules back to RCTImage ([df96de78bb](https://github.com/facebook/react-native/commit/df96de78bb2706f923b6bd4f116fda7bd2f5a081
  3aa8a406595251c6ca6c5f83cfc5df6d3185e007) by [@RSNara](https://github.com/RSNara))
- Try to lazily load RCTRedBox ([0a98be65e3](https://github.com/facebook/react-native/commit/0a98be65e3d3907e0135a81393a05cf33c3d7b0c) by [@mmmulani](https://github.com/mmmulani))
- Add debug message to RCTShadowView when we insert a subview incorrectly ([2a3fa968b4](https://github.com/facebook/react-native/commit/2a3fa968b441757df3e06bb78bf6b8c8cfb5bb3d
  72c03900d275c3bb43686a163e2628a6beabcdef) by [@mmmulani](https://github.com/mmmulani))
- Report logs in dev to server on iOS ([c71bbb0057](https://github.com/facebook/react-native/commit/c71bbb0057a5e540cd5d382711b277a6a87201c8) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add command to set date on RCTDatePickerManager ([f580409919](https://github.com/facebook/react-native/commit/f5804099197f6df6d4e352dbc06f600a0f5a13ae) by [@sammy-SC](https://github.com/sammy-SC))
- Add setValue command to RCTSwitchManager ([eb08b428b6](https://github.com/facebook/react-native/commit/eb08b428b613a5ae2a00a0d920a8451d7319d0fc) by [@sammy-SC](https://github.com/sammy-SC))
- IOS: Allow redbox to be toggled in debug builds ([12d60c1049](https://github.com/facebook/react-native/commit/12d60c1049d3ccc050676061f2a538ab5ad34394) by [@mmmulani](https://github.com/mmmulani))
- IOS: Change RCTLog red box behaviour to a runtime check ([7da85ef4cc](https://github.com/facebook/react-native/commit/7da85ef4cca5e4788578cc4c4fc265a8ba34c304) by [@mmmulani](https://github.com/mmmulani))
- Add getSizeWithHeaders to ImageLoader turbomodule ([92c14f1562](https://github.com/facebook/react-native/commit/92c14f15628ccde6d5f42bb1c62bee4836622021
  db20260b03187b507eacb231fbda0648ed85c0e4) by [@lunaleaps](https://github.com/lunaleaps))
- Refactor RCTActionSheetManager to use RCTConvertVecToArray and RCTConvertOptionalVecToArray ([de20eb7e11](https://github.com/facebook/react-native/commit/de20eb7e11b397393c319e4da987aaa5104c4acf) by [@RSNara](https://github.com/RSNara))
- Make RCTBridgingToOptionalVec understand kCFNull ([48653a2a63](https://github.com/facebook/react-native/commit/48653a2a63859a3c056b76ed6f334ea252307c8e) by [@RSNara](https://github.com/RSNara))
- Make CameraRoll NativeModules TurboModule-compatible ([601981a67d](https://github.com/facebook/react-native/commit/601981a67d2addc2d74034e89a0cc97aa92352fe) by [@RSNara](https://github.com/RSNara))
- Make RCTFileReaderModule and RCTBlobManager TurboModule-compatible ([3908702de9](https://github.com/facebook/react-native/commit/3908702de97c9530a5b470be4fae2c0454d02826) by [@RSNara](https://github.com/RSNara))
- Make RCTSettingsManager TurboModule-compatible ([bf063f425f](https://github.com/facebook/react-native/commit/bf063f425f744e5b86c26f4f621d361a2b5a0545) by [@RSNara](https://github.com/RSNara))
- Make RCTVibration TurboModule-compatible ([789e9fbff0](https://github.com/facebook/react-native/commit/789e9fbff0d2b88e7254c3abbe5511e6afa6c859) by [@RSNara](https://github.com/RSNara))
- Make RCTActionSheetManager TurboModule-compatible ([101125f891](https://github.com/facebook/react-native/commit/101125f891c94dc42b2f088c1d1d8d134fd02a82) by [@RSNara](https://github.com/RSNara))
- Add HostComponent to the public API of React Native ([a446a38aaa](https://github.com/facebook/react-native/commit/a446a38aaab5bea2e279f1958cfd90090bfd7e09) by [@TheSavior](https://github.com/TheSavior))
- Make NSData usage in RCTNetworkTask threadsafe ([2fbe956aac](https://github.com/facebook/react-native/commit/2fbe956aaceb7ba2356a2e28ad461c51c3e62a7f) by [@mmmulani](https://github.com/mmmulani))
- IOS Image: skip CADisplayLink optimization only when weakProxy is enabled ([bfc9839a63](https://github.com/facebook/react-native/commit/bfc9839a631a752db3109230ec729bde2e94212c) by [@fkgozali](https://github.com/fkgozali))
- Make RCTClipboard, RCTI18nManager, and RCTSourceCode TurboModule-compatible ([f5ab719445](https://github.com/facebook/react-native/commit/f5ab719445dde7fac0cdd383fea119b40c9eebe6) by [@RSNara](https://github.com/RSNara))
- Add new method jsBundleURLForBundleRoot with fallback block to RCTBundleURLProvider ([034a7d185f](https://github.com/facebook/react-native/commit/034a7d185f724b88a9ca4f39344b44f37b34ea7d) by [@apadalko](https://github.com/apadalko))
- Small adjustment in order of operations in RCTImageComponentView ([85575dd8e5](https://github.com/facebook/react-native/commit/85575dd8e5ddbb75254ed9bcb9784a9a6a79b75e) by [@sammy-SC](https://github.com/sammy-SC))
- Enable setTimeout [4/N] ([5a81a204c1](https://github.com/facebook/react-native/commit/5a81a204c1df53f8c9bf1933f433e8d51e132481) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Refactor RCTTiming to work without the bridge [1/N] ([77c9c95840](https://github.com/facebook/react-native/commit/77c9c95840db27ff6c5136ed246b7a27f93dee66) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- IOS Pods: use tar.gz offline mirrors instead of pods replica ([4856494d32](https://github.com/facebook/react-native/commit/4856494d323e69f93c430ddf2179a5818414e775) by [@fkgozali](https://github.com/fkgozali))
- Check for type before force conversion ([757966837a](https://github.com/facebook/react-native/commit/757966837ac5bdb65bec03009d7d52b1ee8e4022) by [@sammy-SC](https://github.com/sammy-SC))
- IOS Pods: introduced fb-only **generated** dir ([058404f11c](https://github.com/facebook/react-native/commit/058404f11cc5a7e5b8ea5dea27cd5efa88afa3ca) by [@fkgozali](https://github.com/fkgozali))
- Force ReactEventEmitter to use RCTEventEmitter as default event emitter class ([2c87cf5594](https://github.com/facebook/react-native/commit/2c87cf55940e905eef9e53f2c6002fd50722762c
  315759e1fcd024433ddaad35f91228767238e873) by [@mdvacca](https://github.com/mdvacca))
- Move RCTNetInfo iOS to Facebook internal ([56fb72b2c8](https://github.com/facebook/react-native/commit/56fb72b2c8ea4d506c78bfd751805f0f97f8c4a9) by [@cpojer](https://github.com/cpojer))
- Refactor Promise returns ([fc9c53d621](https://github.com/facebook/react-native/commit/fc9c53d62128ab19b8071859c0414681988fcfdb) by [@RSNara](https://github.com/RSNara))
- Implement RCTExceptionsManager.reportException on iOS ([9a57145f52](https://github.com/facebook/react-native/commit/9a57145f52a03678da02d5d00cbe11eed3f5a0fc) by [@motiz88](https://github.com/motiz88))
- Remove live reloading option from RN iOS ([90a8e3012c](https://github.com/facebook/react-native/commit/90a8e3012cc3d8d79a7fb3be8f2360393e9bd177) by [@cpojer](https://github.com/cpojer))
- Enable Flipper on RNTester (iOS) ([0a5c43fcc3](https://github.com/facebook/react-native/commit/0a5c43fcc37640e1568f2d04563d232db2f532d8) by [@axe-fb](https://github.com/axe-fb))
- Add code to enable Flipper in React Native iOS Template ([70274f4e91](https://github.com/facebook/react-native/commit/70274f4e9166dbe9da2d04953a95c2909b455d1d) by [@axe-fb](https://github.com/axe-fb))
- Allow RCTDevMenu to be enabled separately from RCT_DEV flag ([d2cb52beee](https://github.com/facebook/react-native/commit/d2cb52beee069005f56e3106f96d7b8e955b147f) by [@mmmulani](https://github.com/mmmulani))
- Fix codegen output ([55276a9b10](https://github.com/facebook/react-native/commit/55276a9b104781b49b66938d71aac385bdd236e5) by [@RSNara](https://github.com/RSNara))
- Support light and dark themes in RNTester ([a397d330a4](https://github.com/facebook/react-native/commit/a397d330a4cf7e08095faa0e751e38d5106ed5c7) by [@hramos](https://github.com/hramos))
- Fix Redbox on iOS ([f107d3b78c](https://github.com/facebook/react-native/commit/f107d3b78c95ed0313b39e55976cf6b6be36775e) by [@gaearon](https://github.com/gaearon))
- Allow for null bridge in RCTSurfacePresenter ([41525c02a2](https://github.com/facebook/react-native/commit/41525c02a26b36114063cccd8373141bff2603b9) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Make RCTAccessibilityManger a TurboModule ([f229d67498](https://github.com/facebook/react-native/commit/f229d674987f3e91f70a819cee80911e006ba2b0) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Don't allocate a CADisplayLink for static images ([2211eb5fe8](https://github.com/facebook/react-native/commit/2211eb5fe815cfaf967ff7b472c7d955a70b6427) by [@mmmulani](https://github.com/mmmulani))
- Remove RCTUIImageViewAnimated WeakProxy gating ([24ababc915](https://github.com/facebook/react-native/commit/24ababc9158849ecdfb8560c97eb2b8c0b675f76
  59f84ca1fd4a5700d67cc7c68194dd845a1ecfd6) by [@mmmulani](https://github.com/mmmulani))
- Ensure ImageLoader is lazily loaded as necessary ([80f64f1e5b](https://github.com/facebook/react-native/commit/80f64f1e5bddad6e4df88efa4c28e09db7462d04) by [@RSNara](https://github.com/RSNara))
- Make RCTDeviceInfo a TurboModule ([685c15a955](https://github.com/facebook/react-native/commit/685c15a9554b4a78c41e615e47ab2374c539c252) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Don't call sharedApplication in App Extension ([81733d9e15](https://github.com/facebook/react-native/commit/81733d9e15c84e99c783bb5b9c63a7e9f1213201) by [@ccorcos](https://github.com/ccorcos))

## 0.61.5

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/151) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

#### Android specific

- Fix bundling assets in monorepo ([a3b0804867](https://github.com/facebook/react-native/commit/a3b08048674e324dbe1f0ca816f35607e9e06a2f) by [@Esemesek](https://github.com/Esemesek))
- Fix multiple `set-cookie` not aggregated correctly in response headers ([1df8bd4932](https://github.com/facebook/react-native/commit/1df8bd4932f42958c01dccf44cee92b75a6988ed) by **Vincent Cheung**)

## 0.61.4

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/150) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixed

- Fix build with Hermes on Windows ([81a6b6ed3c](https://github.com/facebook/react-native/commit/81a6b6ed3c54498f6f2148c106846352405949bf) by [@B27](https://github.com/B27))
- Fix Chrome debugger showing console.logs at incorrect locations ([42ac240bce](https://github.com/facebook/react-native/commit/42ac240bceb104474494c6007df0089baec00f7a) by [@rickhanlonii](https://github.com/rickhanlonii))

#### iOS specific

- Fix bug in iOS 13 when application would be terminated immediately when in background ([d7c9173b07](https://github.com/facebook/react-native/commit/d7c9173b07171164bcadf73855454e90e07b31be) by [@radko93](https://github.com/radko93))

## 0.61.3

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/148) to improve the quality of the 0.61 release. Thanks to everyone who contributed!

### Fixed

- Fix bug where ScrollView contentInset top set to undefined wouldn't default to 0 ([d576a5bcc0](https://github.com/facebook/react-native/commit/d576a5bcc0e03dd9c4ccd982f723d6e376e5b680) by [TheSavior](https://github.com/TheSavior))
- Fix TimingAnimation rounding error issue ([bfd01552af](https://github.com/facebook/react-native/commit/bfd01552af6c074a425da2e7cc1a5908faba2644) by [MartinSherburn](https://github.com/MartinSherburn))

#### iOS specific

- Fix selecting videos from library in iOS 13 ([63769518e0](https://github.com/facebook/react-native/commit/63769518e0c7db60eb39bb5f47fe24f4bc664862) by [fatalsun](https://github.com/fatalsun))
- Fix bug in iOS13 nested text rendering ([7cf43afa8d](https://github.com/facebook/react-native/commit/7cf43afa8d6a03ccb4cfdc09f81891eabe8b8b70) by [PeteTheHeat](https://github.com/PeteTheHeat))

#### Android specific

- Release underlying resources when JS instance is GC'ed on Android try ([9b2374b542](https://github.com/facebook/react-native/commit/9b2374b542f87b7baefcfb4a3eb4f57029069b57) by [janicduplessis](https://github.com/janicduplessis))

## 0.61.2

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

## 0.61.1

This is a patch release that consist of a few commits requested in the [dedicated conversation](https://github.com/react-native-community/releases/issues/144) to improve the quality of the 0.60 release. Thanks to everyone who contributed!

### Fixed

#### iOS specific

- Fix ShareSheet crash on iOS 13 ([a4fbb8e75b](https://github.com/facebook/react-native/commit/a4fbb8e75bd9f521037926a68a8b75eaca2eca74) by [@tomtargosz](https://github.com/tomtargosz))

#### Android specific

- Allow again for injecting custom root view via ReactActivityDelegate ([9f0dede1c9](https://github.com/facebook/react-native/commit/9f0dede1c913612e1241432f4cbccdc74d23a1e4) by [@kmagiera](https://github.com/kmagiera))

## 0.61.0

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
- Update loading pre-bundled message ([eb92f8181f](https://github.com/facebook/react-native/commit/eb92f8181f3119bbc69ff7cb5aff2e03d993b8b3) by [@rickhanlonii](https://github.com/rickhanlonii)) [TODO] Andorid and iOS progress bar

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

## [v0.60.6]

This is a small patch release with a commit to fix the build break in MSVC to help the users of react-native-windows. ([9833ee7bc1](https://github.com/facebook/react-native/commit/9833ee7bc19982acd6ccaf6ac222bc24a97667a8) by [@acoates-ms](https://github.com/acoates-ms))

## [v0.60.5]

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

## [v0.60.4]

This is a patch release that contains two more Hermes related fixes, thanks to the contributors for helping improving the support!

### Fixed

#### Android specific

- Generate correct source map if hermes not enabled ([b1f81be4bc](https://github.com/facebook/react-native/commit/b1f81be4bc21eb9baa39dd7ef97709d9927ad407) by [@HazAT](https://github.com/HazAT))
- Generate source maps outside of assets/ ([60e75dc1ab](https://github.com/facebook/react-native/commit/60e75dc1ab73b2893ec2e25c0320f32b3cf12b80) by [@motiz88](https://github.com/motiz88))

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [v0.60.3]

This is a patch release that fixes the binary path to Hermes package, thanks to [@zoontek](https://github.com/zoontek)) for creating the PR!

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [v0.60.2]

This is a patch release that fixes the path to Hermes package.

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [v0.60.1]

This is a patch release that includes the Hermes JavaScript Engine announced at Chain React Conf 2019.

Check out the documentation to opt-in and give [Hermes a try](https://reactnative.dev/docs/hermes).

You can participate to the conversation for the next patch release in the dedicated [issue](https://github.com/react-native-community/react-native-releases/issues/130).

## [0.60]

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

- Add `announceForAccessibility` and `announcementFinished` APIs for making screen reader announcemenets ([cfe003238a](https://github.com/facebook/react-native/commit/cfe003238ab8c5686d185f6ce9e0776eeb4bb729) by [@rigdern](https://github.com/rigdern))
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
- Fix accesibility problem with **TextInput** Clear Button ([4e37d37cbf](https://github.com/facebook/react-native/commit/4e37d37cbff27e61659440094a662e00eafd8fc4) by [@shergin](https://github.com/shergin))
- Fix `renderingMode` not applied to GIF **Image**s ([75380aa329](https://github.com/facebook/react-native/commit/75380aa3296210777dc0be70a722701767276117) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix **ScrollView** `centerContent` not work in some cases ([2cdf9694b5](https://github.com/facebook/react-native/commit/2cdf9694b56e76477dde572eb3dc38be31361eab) by [@zhongwuzw](https://github.com/zhongwuzw))
- Fix crash on performance logger ([5d3d3987d8](https://github.com/facebook/react-native/commit/5d3d3987d8a81b84d43dc88808d7f50c7bf11d19) by [@zhigang1992](https://github.com/zhigang1992))
- Do not run packager in Release mode ([4ea6204111](https://github.com/facebook/react-native/commit/4ea62041118fb031d7540726df2d29185c6b130d) by [@lucasbento](https://github.com/lucasbento))
- Fix `code` and `reason` arguments being ignored when calling `WebSocket.close` ([0ac2171c54](https://github.com/facebook/react-native/commit/0ac2171c549b389228c4a37ae645eb0d9813b82d) by [@jeanregisser](https://github.com/jeanregisser))
- Fix return value of `Linking.openURL()` ([4a5d0bdbd7](https://github.com/facebook/react-native/commit/4a5d0bdbd75c433d2f51f160657a0ad91e440272) by [@thib92](https://github.com/thib92))
- When an accessibilityLabel can't be discerned, return `nil` instead of `@""` ([d4ff5ed258](https://github.com/facebook/react-native/commit/d4ff5ed258b75fe77c5d801af7b097b04fcd3690) by [@sammy-SC](https://github.com/sammy-SC))
- Fix Xcode build when the project's path contains whitespace ([f0770b6b37](https://github.com/facebook/react-native/commit/f0770b6b370f483fdd729bdba04069cc783353dc))
- Move accessibility props to UIView+React ([9261035c2b](https://github.com/facebook/react-native/commit/9261035c2bf2fe9522806fb1c535a1835e7acfa2) by [@janicduplessis](https://github.com/janicduplessis))

## [v0.59.10]

This is likely the last patch release for version 59 of React Native for the foreseeable future: it contains an important Android side update for the JavaScript Core, to prevent a great number of crashes mostly related to Samsung devices - thanks to [@Kudo](https://github.com/Kudo) for his work on fixing this via [557989a86f](https://github.com/facebook/react-native/commit/557989a86f8730113393ed229927d607a478e524)!

Thanks everyone who participated in the [discussion](https://github.com/react-native-community/releases/issues/127).

## [v0.59.9]

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

## [v0.59.8]

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

- Fix incorrect opacity behaviour for **Text** component ([f71357](https://github.com/facebook/react-native/commit/d99e657e3909ff14cd623d1df7d3d13056fdd851) by [@shergin](https://github.com/shergin))
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

## [v0.59.7]

This patch release was unpublished.

## [v0.59.6]

This patch release was unpublished.

## [v0.59.5]

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

## [v0.59.4]

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

## [v0.59.3]

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

## [0.59.2]

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

## [0.59.1]

This is a small patch release that addresses two critical issues from the 0.59.0 release.

### Fixed

#### Android specific

- Template build gradle error on x86_64 ([4b996da470](https://github.com/facebook/react-native/commit/4b996da470b43f97fd0426b54bda739d7717fb28) by [@grabbou](https://github.com/grabbou))

#### iOS specific

- Build error warning of **Text** module ([d834197746](https://github.com/facebook/react-native/commit/d834197746371b203bd7d7aaabdc2bc581acc867) by [@zhongwuzw](https://github.com/zhongwuzw))

## [0.59]

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
- Fix **TextView**'s `setAttrbutedText` for CJK languages on single-line text fields ([e38be82dfa](https://github.com/facebook/react-native/commit/e38be82dfa8b49385b990629318f027de26500cf) by [@mandrigin](https://github.com/mandrigin))
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

## [v0.58.6]

This release is fairly small, as we approach stable status for [0.59](https://github.com/react-native-community/react-native-releases/issues/79).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/95) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/97).

### Fixed

#### Android specific

- Fix Inverted Horizontal ScrollView on Android (#23233) ([32cb9ec49c](https://github.com/facebook/react-native/commit/32cb9ec49c801fcebe61486149134ab542d9364b) by [@dmainas](https://github.com/dmainas))

#### iOS specific

- Map TextInput textContentType strings to Objective-C constants (#22611) ([a89fe4165c](https://github.com/facebook/react-native/commit/a89fe4165c2a331a9d88636d89a5a48151ab8660) by [@levibuzolic](https://github.com/levibuzolic))
- Don't reconnect inspector if connection refused (#22625) ([d9489c4e9c](https://github.com/facebook/react-native/commit/d9489c4e9c646b79025f07635b840e9974be8cd5) by [@msand](https://github.com/msand))

## [v0.58.5]

This release resolves a few bugs and includes a few improvements, listed below.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/86) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/95).

### Removed

- Remove fallback cache ([9d60c20cb3](https://github.com/facebook/react-native/commit/9d60c20cb35074e92a90b803d3d6f420f6671635) by [@grabbou](https://github.com/grabbou))

### Fixed

- Fixes capitalized I's when emojiis are present after the text being edited. (#21951) ([f307ac7c5e](https://github.com/facebook/react-native/commit/f307ac7c5e3adb9b4c0f8b2e4b8cdc2f980c7733) by [@dchersey](https://github.com/dchersey))
- Fix broken jsiexecutor search path. (#23274) ([2aa2401766](https://github.com/facebook/react-native/commit/2aa24017667721ba17a859ca4e13d43e52d86bc5) by [@amccarri](https://github.com/amccarri))
- Fix duplicate symbols linker error in xcodeproj (#23284) ([9f72e6a5d0](https://github.com/facebook/react-native/commit/9f72e6a5d02d84fe8ed545e0c0904199b9cb3c7a) by [@tyrone-sudeium](https://github.com/tyrone-sudeium))
- apply Network Security Config file (fixes #22375) (part 2 of #23105) (#23135) ([84572c4051](https://github.com/facebook/react-native/commit/84572c4051f11f68ddf0928d2c3df5850ae15491) by [@Salakar](https://github.com/Salakar))
- Fix crash for web socket in some race conditions (#22439) ([dd209bb789](https://github.com/facebook/react-native/commit/dd209bb7891ed5f05b96a9922c7b0e39bf3ac9e9) by [@zhongwuzw](https://github.com/zhongwuzw))

#### iOS specific

- Don't attempt to load RCTDevLoadingView lazily ([a9dd828c68](https://github.com/facebook/react-native/commit/a9dd828c68338dbf0e55ffa1838bf8ff574f317d) by [@fkgozali](https://github.com/fkgozali))

### Security

#### Android specific

- improve Android Network Security config (#23429) ([5747094532](https://github.com/facebook/react-native/commit/5747094532bace3fe6b1ebdf55235e53189baa71) by [@dulmandakh](https://github.com/dulmandakh))

## [0.58.4]

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

## [0.58.3]

This release resolves a regression in **StatusBar** using [these fixes](https://github.com/facebook/react-native/compare/v0.58.2...v0.58.3).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58.2]

This release fixes an issue caused by a wrongly reverted merge commit, that caused a short timeframe of commits to not actually be in the original 0.58.0. Those commits have been added to the 0.58 changelog below, as many are intertwined with the original work.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate in the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58.1]

There were some regressions with developer tools that prevented `react-native run-ios` from working properly in 0.58.0; this patch fix addresses that.

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/81) for cherry-picking commits - you can participate to the decision process for the next patch release [here](https://github.com/react-native-community/react-native-releases/issues/81).

## [0.58]

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
- Native Modules can now reject a promise with an additional `WritableMap` arg for extra properties (`userInfo`). See the interface defined in [`Promise.java`](https://github.com/facebook/react-native/blob/60b3942/ReactAndroid/src/main/java/com/facebook/react/bridge/Promise.java) for available methods. This is accessible in JavaScript as `Error.userInfo`. This is to match iOS's existing `Error.userInfo` behaviour. See PR for examples. (#20940 by @Salakar)
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

## [0.57.8]

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

## [0.57.7]

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.

This patch release fixes version 0.57.6 about losing focus in `TextInput` because of [ada7089066](https://github.com/facebook/react-native/commit/ada70890663503b65b42bb5f6f98d3df412ecdc4).

Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

## [v0.57.6]

**INFO NOTE**: It's highly recommended that you skip this version and upgrade to 0.57.7.

**NOTE WELL**: when you upgrade to this version you **NEED** to upgrade `react` and `react-test-renderer` to version `"16.6.1"`.
This patch release fixes a number of crashes, resolves build issues (both for iOS and Android). Thanks everyone who contributed code or participated in the [discussion](https://github.com/react-native-community/react-native-releases/issues/64) for cherry-picking commits.

### Added

#### iOS specific

- Add iOS 12 textContentType options (#21079) ([644fc57fad](https://github.com/facebook/react-native/commit/644fc57fad4b163e96c3b3d6ec441c7b566d2d43) by [@ultramiraculous](https://github.com/ultramiraculous))

### Removed

- Remove useless additionnal blur call (#22156) ([ada7089066](https://github.com/facebook/react-native/commit/ada70890663503b65b42bb5f6f98d3df412ecdc4))

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

## [0.57.5]

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

## [0.57.4]

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

## [0.57.3]

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

## [0.57.2]

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

## [0.57.1]

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

## [0.57]

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

## [0.56]

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

- Public methods of Text (`blur`, `focus`, `measure`, `measureInWindow`, `measureLayout`, `setNativeProps`) are no longer bound to the text component instance. It is therefore unsafe to pass these methods by reference (i.e: as callbacks) to functions. So, things like `setTimeout(this._txtRef.focus, 1000)` will no longer work. Please instead do: `setTimout(() => this._txtRef.focus(), 1000)`.

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
- Fix `InputAccessoryView` safe area comformance ([490f22ae72](https://github.com/facebook/react-native/commit/490f22ae72ba43fa9364ce0f6c238744c07ac830))
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
- Fix `NullPointerException` when emiting event using `UIManagerModule` ([291c01f4ff](https://github.com/facebook/react-native/commit/291c01f4ffe614760852e36b05d78b42cb4271df))
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

## [0.53]

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
