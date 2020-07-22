## master

### Breaking

- : Pressable: Rename pressRectOffset to pressRetentionOffset to be consistent with other touchables ([66103277d2](https://github.com/facebook/react-native/commit/66103277d289da5ab2c68389b56327316e69dcb3) by [@TheSavior](https://github.com/TheSavior))

#### Android specific

- On `Image`, `onLoad` event objects' `source.url` is now renamed to `source.uri`. ([74ab8f6e5a](https://github.com/facebook/react-native/commit/74ab8f6e5a61999f1132351ff52df43c91360a09) by [@yungsters](https://github.com/yungsters))
- Deletes the method PlayTouchSound method from UIManagerModule, this method was moved to the SoundManagerModule class. ([d0c4c5eaf9](https://github.com/facebook/react-native/commit/d0c4c5eaf90430c7004621d1596c5f2a55ad03e0) by [@mdvacca](https://github.com/mdvacca))

#### iOS specific

- Remove CameraRoll from React Native ([824d3a9770](https://github.com/facebook/react-native/commit/824d3a977057b336d81237ec3cec3a49a9d5e34d) by [@seanyusa](https://github.com/seanyusa))

### Added

- Add mock for `DevSettings` to jest preset ([a50f736bb6](https://github.com/facebook/react-native/commit/a50f736bb6ade9ea9caae45e41ca4b92f6707b17) by [@MarcoScabbiolo](https://github.com/MarcoScabbiolo))
- Support `$ReadOnly` in object properties when defining native event types ([76fe94e8b0](https://github.com/facebook/react-native/commit/76fe94e8b00af3d2e4ad1648f70a196be1ccb4f5) by [@yungsters](https://github.com/yungsters))
- Added Inspector overlay support for Pressable ([8ac467c51b](https://github.com/facebook/react-native/commit/8ac467c51b94c82d81930b4802b2978c85539925) by [@yungsters](https://github.com/yungsters))
- Introduce NativeModulePerfLogger ([0486640571](https://github.com/facebook/react-native/commit/0486640571c89a0ce067c0437655a6b375308bcd) by [@RSNara](https://github.com/RSNara))
- Introduce `titlePlaceholder` for template configuration. ([8ffa180d80](https://github.com/facebook/react-native/commit/8ffa180d80b9c9acb76a0631b5a709d2c0adcd86) by [@Esemesek](https://github.com/Esemesek))
- Codegen: Add prepublish script to build Flow files ([c67e1fe42f](https://github.com/facebook/react-native/commit/c67e1fe42fe2b31eb37b8aee648269f176401c62) by [@empyrical](https://github.com/empyrical))
- Modified `renderApplication` to forward `initialProps` to `WrapperComponent` ([4f5a092bf6](https://github.com/facebook/react-native/commit/4f5a092bf68a0cd825328ce4a1e6bb41a8fad2e3) by [@rubennorte](https://github.com/rubennorte))
- Differ: fix TinyMap to prevent possible crashes in `find()` and `begin()`, and prevent erased elements from being iterated over ([bb5d04366a](https://github.com/facebook/react-native/commit/bb5d04366ad66273fd908586a9f4bc7513b4276c) by [@JoshuaGross](https://github.com/JoshuaGross))
- Add warning when scrollRef does not have a scrollTo method ([7f2515ece8](https://github.com/facebook/react-native/commit/7f2515ece8833f7a8adba025ef544013f89ae26f) by [@kacieb](https://github.com/kacieb))

#### Android specific

- Introduce JNativeModulePerfLogger ([c0dd11e532](https://github.com/facebook/react-native/commit/c0dd11e5326db15da2b84a21478eab1fc862a03b) by [@RSNara](https://github.com/RSNara))
- `[Android] [Added] - Add support for shadowColor on API level >= 28` ([cfa4260598](https://github.com/facebook/react-native/commit/cfa42605989eee5a9de42bdb1259fb7f4d9451fb) by [@IjzerenHein](https://github.com/IjzerenHein))
- Add accessibilityHint to TouchableNativeFeedback ([72285d808d](https://github.com/facebook/react-native/commit/72285d808dfce748287a19e2620d58517a5f76e7) by [@CMDadabo](https://github.com/CMDadabo))
- Adds support for the `onProgress` event on `Image` ([fa0e6f8051](https://github.com/facebook/react-native/commit/fa0e6f8051d2208af467b789a2a9306ec7ddad76) by [@yungsters](https://github.com/yungsters))
- Exposed getFlex method as part of ReactShadowNode API ([6570f7887b](https://github.com/facebook/react-native/commit/6570f7887b8824705ae09b5653d631428e17bc5f) by [@mdvacca](https://github.com/mdvacca))
- Add \*.hprof files to gitignore ([69ce9c21d4](https://github.com/facebook/react-native/commit/69ce9c21d433a23ffb9934062b46fa64277ee255) by [@enesozturk](https://github.com/enesozturk))
- Move DevSettingsActivity from main to debug ([d8e6c45782](https://github.com/facebook/react-native/commit/d8e6c45782a5c9132bb7ec315fe0b9ba3999e830) by [@invalid-email-address](https://github.com/invalid-email-address))

#### iOS specific

- Add `importantForAccessibility` to `AccessibilityProps` ([fd660fd0c5](https://github.com/facebook/react-native/commit/fd660fd0c50a0acca730bd1ecd427e574bbe81c7) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- `getRectWithAttributedString()` aims to get the rect of the fragment with embedded link, which is necessary when building the `accessibilityElement`. In this function, we first enumerate attributedString to find the range of fragments whose `accessibilityRole` is @"link". Then we calculate the rect of the fragment and send to the block and we would define what to do in the block in `RCTParagraphComponentAccessibilityProvider`. ([96708d58e4](https://github.com/facebook/react-native/commit/96708d58e4b413032f4e5ffcc71e8da67ef99ea0) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- This is the first step to build RCTParagraphComponentAccessibilityProvider. The main idea of RCTParagraphComponentAccessibilityProvider is to provide an array of accessible elements for the AttributedString in PCTParagraphComponentView. ([ffa07254de](https://github.com/facebook/react-native/commit/ffa07254de914f7876a17ec2d1ecac1dc10b116a) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- Allow hotkeys to be used without command key ([f2b9ec7981](https://github.com/facebook/react-native/commit/f2b9ec798172db76dfb55f390e1fcea90dd341da) by [@rickhanlonii](https://github.com/rickhanlonii))
- Add disableButtonsIndices option to ActionSheetIOS component ([f0bf4b0986](https://github.com/facebook/react-native/commit/f0bf4b09863f0426dd5f6753fb75a174c6c74cbd) by [@lukewalczak](https://github.com/lukewalczak))
- Add showSoftInputOnFocus to TextInput ([d54113d8c4](https://github.com/facebook/react-native/commit/d54113d8c4bcd0e0c7a09acca60819724eb69926) by [@gurs1kh](https://github.com/gurs1kh))
- Updated loading banner messages and color ([3729fe8de0](https://github.com/facebook/react-native/commit/3729fe8de0109c80014f6c20fae8b949b3628de2) by [@rickhanlonii](https://github.com/rickhanlonii))
- Added hostname to loading banner. ([96999339b6](https://github.com/facebook/react-native/commit/96999339b6a7aeabd0cd706ef7736fd91d9ecf80) by [@rickhanlonii](https://github.com/rickhanlonii))

### Changed

- Minor fix in Hermes Inspector cli tool help message ([6ffb983f83](https://github.com/facebook/react-native/commit/6ffb983f83afdee5d9290c683c5060d2a959818d))
- Updated the React Hooks ESLint Plugin ([ac87e90fa5](https://github.com/facebook/react-native/commit/ac87e90fa517676440c1adf9575cb48f90de8069) by [@gaearon](https://github.com/gaearon))
- Switched to es6 import for SafeAreaView ([a69bd9dadf](https://github.com/facebook/react-native/commit/a69bd9dadfd86afba4cbd88569d86abad9cd3071) by [@Naturalclar](https://github.com/Naturalclar))
- Don't scroll to initial item if ContentOffset is provided ([3346ac7f96](https://github.com/facebook/react-native/commit/3346ac7f96d2fd3f77dca5acb283b28e02ad21fa) by [@markv](https://github.com/markv))
- Migrate Android view managers to type-safe commands generated by JS codegen. ([63099c40e6](https://github.com/facebook/react-native/commit/63099c40e69f7439dace594bb95b5e87734b946c))
- Migrated `virtualizedList` legacy context to `React.Context`. ([7bd694fc6f](https://github.com/facebook/react-native/commit/7bd694fc6f4bb027b6d7ee04034cad41a43e5695) by [@yungsters](https://github.com/yungsters))
- Moves ART android files from RN to internal react shell. ([423b55b2d7](https://github.com/facebook/react-native/commit/423b55b2d7253fa1736c7f3e51fee1cc5c2e527d))
- Changed type of BackHandler to be more specific. ([a903d1b86a](https://github.com/facebook/react-native/commit/a903d1b86ab56163abcdcb584f335949ba0c85fc) by [@Naturalclar](https://github.com/Naturalclar))
- Updated transitive dependency kind-of to 6.0.3 to resolve vulnerability ([abde0154ba](https://github.com/facebook/react-native/commit/abde0154ba4247d2c9f1451b5de8b3cba1abd316) by [@TheSavior](https://github.com/TheSavior))

#### Android specific

- Update Android build tools to 29.0.3 ([e629e94b46](https://github.com/facebook/react-native/commit/e629e94b466ebbd5924b1d4493c026004dad707d) by [@friederbluemle](https://github.com/friederbluemle))
- Bump Gradle to 6.5 ([e559aee642](https://github.com/facebook/react-native/commit/e559aee64275126eaa135486e6bf09138be70f4d) by [@dulmandakh](https://github.com/dulmandakh))
- ViewCommands on Android now execute earlier, as a perf optimization. ([c6b9cc36da](https://github.com/facebook/react-native/commit/c6b9cc36da4f7d190d05122048aa4ada9c152b73) by [@JoshuaGross](https://github.com/JoshuaGross))
- Effect of `blurRadius` now more closely matches other platforms. ([64860972be](https://github.com/facebook/react-native/commit/64860972be828fb601acbef11b4c2dbc672dee8a) by [@yungsters](https://github.com/yungsters))
- Moved TimePickerAndroid to FB internal. ([c8fed9e385](https://github.com/facebook/react-native/commit/c8fed9e3858876c4e9cfe452a9f51c9241f82aad))
- Test Modernization ([6a78b32878](https://github.com/facebook/react-native/commit/6a78b32878aea1b0dac98ff36378fb9392d4aeb1))
- Renamed EventDispatcher to EventDispatcherImpl and created EventDispatcher interface; calls to EventDispatcher contstructor need to be updated ([68c0eddb71](https://github.com/facebook/react-native/commit/68c0eddb71a5bbc44da980b82c7e718b454f0267) by [@ejanzer](https://github.com/ejanzer))
- Get ripple drawables by id ([c8ed2dbbb2](https://github.com/facebook/react-native/commit/c8ed2dbbb287deed05a8782fb8665c1edf45bbac) by [@vonovak](https://github.com/vonovak))
- Internal change to make `PlatformConstants` use the same method to determine `ServerHost` as other code paths ([d20ac69fc8](https://github.com/facebook/react-native/commit/d20ac69fc87ef4f9f5921356c6bbfc0587a9375c) by [@ide](https://github.com/ide))
- Make CatalystInstance.getNativeModule nullable ([1cef72af04](https://github.com/facebook/react-native/commit/1cef72af047bd2e56d774858093f1ee6269c2d27) by [@RSNara](https://github.com/RSNara))
- ScrollView now supports `contentOffset` ([ed29ba13f9](https://github.com/facebook/react-native/commit/ed29ba13f97f240c91fdf6c0ef3fb601046697b9) by [@JoshuaGross](https://github.com/JoshuaGross))
- Update Gradle Wrapper to 6.3 ([8988a073b4](https://github.com/facebook/react-native/commit/8988a073b48df0f0cd4a7126edf1a421f4537d58) by [@friederbluemle](https://github.com/friederbluemle))

#### iOS specific

- Moved ART iOS files from React Native to Facebook internal ([b78d7051e5](https://github.com/facebook/react-native/commit/b78d7051e586760b494cf7a2ac36e289c647b066) by [@jayesh15111988](https://github.com/jayesh15111988))
- Allow iOS PlatformColor strings to be ObjC or Swift UIColor selectors ([25793eab56](https://github.com/facebook/react-native/commit/25793eab56217a9961620761ea65ec2fcb97dcb0) by [@tom-un](https://github.com/tom-un))
- Make RCTTurboModuleManagerDelegate create TurboModules via ObjCTurboModuleManager::InitParams ([d75401af96](https://github.com/facebook/react-native/commit/d75401af9651193d83a2b89518e13ee5f73ee783) by [@RSNara](https://github.com/RSNara))
- Make all ObjC NativeModules create TurboModules using ObjCTurboModule::Args ([03bd7d799e](https://github.com/facebook/react-native/commit/03bd7d799ef569b5c3a0fedfd229a1c6b0f0377f) by [@RSNara](https://github.com/RSNara))
- Update ObjCTurboModule to use ObjCTurboModule::InitParams ([251ff1bb0a](https://github.com/facebook/react-native/commit/251ff1bb0a3fb0169acc5a7425af1692340651b3) by [@RSNara](https://github.com/RSNara))

### Deprecated

#### Android specific

#### iOS specific

- IOS: Animated image should animate at the same speed regardless of framerate ([b0d0e51a77](https://github.com/facebook/react-native/commit/b0d0e51a7724dcefe3ce1c2dfb334a731b2a385c) by [@p-sun](https://github.com/p-sun))

### Removed

- Removed `once()` and `removeCurrentListener()` fom `DeviceEventEmitter` and `NativeEventEmitter`. ([87a2e29f59](https://github.com/facebook/react-native/commit/87a2e29f5928c2e09ac9a98c54732d5f697d8e61) by [@yungsters](https://github.com/yungsters))
- Removed tvOS related files from the template ([df03228a61](https://github.com/facebook/react-native/commit/df03228a61881cdfa520fa6d8a9d9cfb6e77fdde) by [@Naturalclar](https://github.com/Naturalclar))
- This diff removes the CheckBox export from React Native. Internally, we are requiring CheckBox directly now and externally people will have to use the community maintained module. ([dff17effe5](https://github.com/facebook/react-native/commit/dff17effe54dc58dda19fcc81ebacbd8f46e9005) by [@poteto](https://github.com/poteto))

#### Android specific

- Summary: Changelog: [Lean Core][android] Removed CameraRoll from RN Android ([1930039261](https://github.com/facebook/react-native/commit/193003926132407fdf65be1729b080db620548f2) by [@SantiagoMunoz](https://github.com/SantiagoMunoz))
- Summary: Changelog: [Android][removed] - Migrated ImageEditingManager to FB internal. ([0967e7b26d](https://github.com/facebook/react-native/commit/0967e7b26d27d5856e014bda8ed46f098922aeaf))
- This diff removes the CheckBox export from React Native. Internally, we are requiring CheckBox directly now and externally people will have to use the community maintained module. ([8c9c402baf](https://github.com/facebook/react-native/commit/8c9c402baf71f7a9aef9f7ebefcc4230054cc57e) by [@poteto](https://github.com/poteto))
- Remove ColorAndroid function as it adds no value over PlatfromColor ([411c344794](https://github.com/facebook/react-native/commit/411c3447946c18743476e7d613358233464d6f58) by [@tom-un](https://github.com/tom-un))

#### iOS specific

- Removed DEPRECATED_sendUpdatedChildFrames prop to ScrollView component because there are no callsites of it anymore ([345d0c1abb](https://github.com/facebook/react-native/commit/345d0c1abb1afe937a06982c4328caee57820832) by [@ZHUANGPP](https://github.com/ZHUANGPP))
- Main queue execution of constantsToExport in NativeModules requiring main queue setup ([d7ac21cec5](https://github.com/facebook/react-native/commit/d7ac21cec5492e180fbf3817af7be64ab121cb75) by [@RSNara](https://github.com/RSNara))

### Fixed

- Upgrade dependencies. ([93019dc190](https://github.com/facebook/react-native/commit/93019dc19072776053a88f9ab595e435b83fead0) by [@wcandillon](https://github.com/wcandillon))
- Make sure LogBox is not included in production bundles ([d3b937f990](https://github.com/facebook/react-native/commit/d3b937f990012a31b8d917e220f4ed2f0a4fd2d3) by [@janicduplessis](https://github.com/janicduplessis))
- Mark `force` as an optional property of the PressEvent object ([ad2f98df8f](https://github.com/facebook/react-native/commit/ad2f98df8f2ad8aff1dcdc11b187f35b372e3f0e) by [@Simek](https://github.com/Simek))
- Fix invalid `event` objects from `onPressOut` in certain cases ([2c600b7c5a](https://github.com/facebook/react-native/commit/2c600b7c5a0e79bfc632b39b471e6ba774d7b0b3) by [@yungsters](https://github.com/yungsters))
- When Hermes debugger is enabled continue to send log messages to the console ([77ef8f881f](https://github.com/facebook/react-native/commit/77ef8f881f2e4067894b412f308e2a80042c946f) by [@MartinSherburn](https://github.com/MartinSherburn))
- Message ([649e1b787f](https://github.com/facebook/react-native/commit/649e1b787fbf8d97b20adfaa03885906e616cb02) by [@potlov](https://github.com/potlov))
- Fixed license headers on some files ([e57a2d80a5](https://github.com/facebook/react-native/commit/e57a2d80a505971e926c2175158225d7968e8724) by [@fkgozali](https://github.com/fkgozali))
- Handle nullish `initialProps` correctly in `renderApplication` ([26c120c632](https://github.com/facebook/react-native/commit/26c120c6329d45e27318d82aaf5a50338bd6fa7d) by [@rubennorte](https://github.com/rubennorte))
- Fix Touchable{Opacity,Bounce,Highlight} being exported as `any` (Flow) ([de7f69a58e](https://github.com/facebook/react-native/commit/de7f69a58ed4e18887f4b9d4d853293fb136afb7) by [@draperunner](https://github.com/draperunner))
- Clarified the boundaries in error message of scrollToIndex ([78d2b3c813](https://github.com/facebook/react-native/commit/78d2b3c8138f54c2433958b0ad6b9f52ca59115a) by [@sasurau4](https://github.com/sasurau4))
- Fix jsi cmake include dirs ([f5d00e5a29](https://github.com/facebook/react-native/commit/f5d00e5a2922d35a0b44935592da5700518c422b) by [@ryantrem](https://github.com/ryantrem))

#### Android specific

- Fix NoSuchMethodException when calling DisplayMetricsHolder.initDisplayMetrics in Android API level <= 16 ([35128f45d1](https://github.com/facebook/react-native/commit/35128f45d1ba97010e437423d14fa5ea0faf5fa3) by [@mdvacca](https://github.com/mdvacca))
- KeyboardDidHide wrong screenY coordinates with windowTranslucentStatus=true ([45954ac5dc](https://github.com/facebook/react-native/commit/45954ac5dccdfe05de7553a0f08c4f0e66e3d62e) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Fixed error message in DebugCorePackage.getModule ([a71f37b951](https://github.com/facebook/react-native/commit/a71f37b951ca49c180b037ea8955851654b09afa) by [@TheWirv](https://github.com/TheWirv))
- Fix crash when enabling debug ([8c42c01977](https://github.com/facebook/react-native/commit/8c42c019772ba373030558fdbc15b2470f1d7137) by [@devon94](https://github.com/devon94))
- Do not call setHyphenationFrequency on AndroidSdk < 23 ([7d8aeb4955](https://github.com/facebook/react-native/commit/7d8aeb4955a4101ca7e8e486f935309c21ab76ff) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- ScrollView, HorizontalScrollView: do not ignore `null` `contentOffset` prop ([9e85b7ad88](https://github.com/facebook/react-native/commit/9e85b7ad889900cd57cd2f82286aa8e034b0a32b) by [@vonovak](https://github.com/vonovak))
- Adding Hyphenation Frequency prop for Text component ([0fda91ffff](https://github.com/facebook/react-native/commit/0fda91ffffa4972ebe58e3d0b610692a1286eaa1) by [@fabriziobertoglio1987](https://github.com/fabriziobertoglio1987))
- Picker - fix usage of setNativeSelectedPosition in onSelect ([078e386024](https://github.com/facebook/react-native/commit/078e386024474edc9b464f6c0fd8a1429e922289))
- Fix intermittent crash of ReactSlider on Android ([32888a8b4a](https://github.com/facebook/react-native/commit/32888a8b4a9d75b9d3f6cc4578ce6a6ccd932407) by [@mdvacca](https://github.com/mdvacca))
- Use actual constructor when throwing GradleScriptException ([8ef0f1d90b](https://github.com/facebook/react-native/commit/8ef0f1d90bbb2fa98e48ce89281718e5ac79365a))
- Move Size check before accessing type of transform ([4001966fb6](https://github.com/facebook/react-native/commit/4001966fb6599e908389fc5328c438ce4f1c4f79) by [@axe-fb](https://github.com/axe-fb))
- SkewX transforms ([797367c089](https://github.com/facebook/react-native/commit/797367c0890a38ec51cfaf7bd90b9cc7db0e97c7) by [@wcandillon](https://github.com/wcandillon))
- Allow passing partial contentOffset to ScrollView on Android ([0348953914](https://github.com/facebook/react-native/commit/03489539146556ec5ba6ba07ac338ce200f5b0f4) by [@janicduplessis](https://github.com/janicduplessis))
- TurboModule cleanup ([e171c2b92a](https://github.com/facebook/react-native/commit/e171c2b92aa5cfe4634edb64c3cd7c9ab6167ce7) by [@RSNara](https://github.com/RSNara))
- Check if NativeModules returned from CatalystInstanceImpl.getNativeModule are null before using them. ([9263eb5d38](https://github.com/facebook/react-native/commit/9263eb5d3864a42925b699343db2c09cc8934ed0) by [@RSNara](https://github.com/RSNara))
- Calculating view position within the window in split-screen mode ([b020e7c440](https://github.com/facebook/react-native/commit/b020e7c440f58dabd4cc64b72869f3ae9680ef30))
- Text layout no longer ignores parent bounds ([025be8148a](https://github.com/facebook/react-native/commit/025be8148a9abc533a8ae108e49cfd3f4512c581) by [@yungsters](https://github.com/yungsters))
- Fixed excessive space in Text view with word-wrapping ([dda7f82261](https://github.com/facebook/react-native/commit/dda7f82261cc5684564e2c67071c13e379985308) by [@yungsters](https://github.com/yungsters))
- Control concurrent calls into TMMDelegate from TurboModuleManager ([bc99a32e4d](https://github.com/facebook/react-native/commit/bc99a32e4d9a8db1d8e524fbdf1a8279a8525834) by [@RSNara](https://github.com/RSNara))
- Ripple should be applied even when borderless == false ([44ec762e41](https://github.com/facebook/react-native/commit/44ec762e41029bf43530b1ff9b36ca3512c526e2) by [@vonovak](https://github.com/vonovak))

#### iOS specific

- Fix multiline TextInput crash when inserting/removing lots of text ([15dda0ab5a](https://github.com/facebook/react-native/commit/15dda0ab5a491dcc83539f9ef32c9896be41074a) by [@tido64](https://github.com/tido64))
- Fix StatusBar showHideTransition flow type issue ([e5a8f4270e](https://github.com/facebook/react-native/commit/e5a8f4270ea71749a5ce6bd7ae198f695edb4307) by [@Simek](https://github.com/Simek))
- Fix TurboModule eager init race ([103c863eaa](https://github.com/facebook/react-native/commit/103c863eaa325b191107e58d59c64243f67d37cd) by [@RSNara](https://github.com/RSNara))
- Make RCTNativeAnimatedModule a regular NativeModule to unbreak animations with TurboModules on ([e6d7f4a153](https://github.com/facebook/react-native/commit/e6d7f4a1533f11f44247cf697072553a48df7476) by [@RSNara](https://github.com/RSNara))
- Better error message when missing entry file ([e73208e2ca](https://github.com/facebook/react-native/commit/e73208e2ca59a2cf6a8a9c5e4e5b33afb5131f09) by [@petrbela](https://github.com/petrbela))
- RNTester app builds in a path that contains a space ([3e5a7b2939](https://github.com/facebook/react-native/commit/3e5a7b29395913e812264e9aab36300be42aaaff) by [@richardgroves](https://github.com/richardgroves))
- Execute ObjC TurboModule async method calls on JS thread for sync modules ([976f51abd9](https://github.com/facebook/react-native/commit/976f51abd907cb2ff8c5fa8fffa1d0abd7cc7222) by [@RSNara](https://github.com/RSNara))
- Fix imports in `RCTUtilsUIOverride.h` ([b7e8f66795](https://github.com/facebook/react-native/commit/b7e8f667953c2bc65c25b00968051c063a684d01) by [@Fanghao](https://github.com/Fanghao))
- Bug with skewX/skewY/perspective/matrix transforms. ([4b956fe5a6](https://github.com/facebook/react-native/commit/4b956fe5a6b3a05b1c2883efc82a95c2524aeb56) by [@wcandillon](https://github.com/wcandillon))
- Fix module lookup race condition on bridge invalidation. ([8ad810717e](https://github.com/facebook/react-native/commit/8ad810717ee1769aa5ff6c73e0c9bfa8c43a3bac) by [@fkgozali](https://github.com/fkgozali))
- Update podfile for RNTester ([c25911bea8](https://github.com/facebook/react-native/commit/c25911bea8ed36617175588198bfb3aa147d7e58) by [@ejanzer](https://github.com/ejanzer))
- Fix duration calculation for RCTUIImageViewAnimated ([12f8b2598f](https://github.com/facebook/react-native/commit/12f8b2598fa46533ea59834a0225cc9e36b20111))
- Cap loading bar percentage at 100% ([e27542bb13](https://github.com/facebook/react-native/commit/e27542bb13d1f8f422cd307c4d43148c8bd82bc0) by [@rickhanlonii](https://github.com/rickhanlonii))
- Delay loading banner message to prevent flashing messages ([2b771b0129](https://github.com/facebook/react-native/commit/2b771b0129f2ef921c7cdb9c952e004f931927c3) by [@rickhanlonii](https://github.com/rickhanlonii))
- Do not update loading banner message while hiding ([131c497aa2](https://github.com/facebook/react-native/commit/131c497aa2c081f9dfd03e45b25fb7ae388b98bd) by [@rickhanlonii](https://github.com/rickhanlonii))
- TurboModule cleanup ([00b3cbfa97](https://github.com/facebook/react-native/commit/00b3cbfa9745b443443d536471f8598a685855b1) by [@RSNara](https://github.com/RSNara))
- Search en0 through en8 for the Metro Bundler's IP address when generating iOS debug builds ([b2b23a2017](https://github.com/facebook/react-native/commit/b2b23a20170d12f6d8bf2733b93d7f9ab9c6cb15))
- Fix refreshControl messes up navigationBar largeTitles ([702ff6d1cd](https://github.com/facebook/react-native/commit/702ff6d1cdc378815ff1beb563c2c8cc4f30585c) by [@yogevbd](https://github.com/yogevbd))
- Re-implement RCTTurboModuleManager provideRCTTurboModule: ([2c473e1a38](https://github.com/facebook/react-native/commit/2c473e1a38c35957fe80b6c334a1983c034c2bbc) by [@RSNara](https://github.com/RSNara))
- Migrate frameInterval to preferredFramesPerSecond ([335f3aabe2](https://github.com/facebook/react-native/commit/335f3aabe28ec8f9b96fd695edabf0d5ab0b402a) by [@safaiyeh](https://github.com/safaiyeh))

### Security

- Fix security issues with rnc cli by bumping version ([001eb7cbd6](https://github.com/facebook/react-native/commit/001eb7cbd66c7dc1a302ee2a638c1cfc164538f4) by [@alexbrazier](https://github.com/alexbrazier))

#### Android specific

#### iOS specific

### Unknown

- Build macOS framework and add CocoaPods podspec ([ffa3d7f638](https://github.com/facebook/react-native/commit/ffa3d7f638c820dc208320193e6ba65667d751eb) by [@alloy](https://github.com/alloy))
- Daily `arc lint --take GOOGLEJAVAFORMAT` ([df6d2c50ff](https://github.com/facebook/react-native/commit/df6d2c50ff639d220d3d1c723ad0cd9d82048321))
- Add native module for loading split JS bundles in development ([fca3a39da5](https://github.com/facebook/react-native/commit/fca3a39da5f1c31514e8969738e7b2c2d22bc230) by [@makovkastar](https://github.com/makovkastar))
- Move error handling with JSI into a separate helper function ([92630856c6](https://github.com/facebook/react-native/commit/92630856c6270bb48d2b640d87afce9f405ed424) by [@ejanzer](https://github.com/ejanzer))
- Prefetch images using a lower download priority ([058eeb43b4](https://github.com/facebook/react-native/commit/058eeb43b489f52183f081fb7232be683002a242) by [@p-sun](https://github.com/p-sun))
- Memoize repeated calls to getConstants() in MP Home, and Search ([6de3fffc37](https://github.com/facebook/react-native/commit/6de3fffc37af9b301b669ba183a7910bcc432b6e) by [@RSNara](https://github.com/RSNara))
- Cache constants for MP Search NativeModules ([96fdaa541e](https://github.com/facebook/react-native/commit/96fdaa541e30e1f52a4649e747f2372bac28b4cf) by [@RSNara](https://github.com/RSNara))
- Cache constants for MP Home NativeModules ([4e9c428328](https://github.com/facebook/react-native/commit/4e9c42832812decbd627e346a1f969502d0729d0) by [@RSNara](https://github.com/RSNara))
- Remove usage of legacy context API in modal ([29f0cedc0a](https://github.com/facebook/react-native/commit/29f0cedc0ad2a52b73f580cfb31dcb1efefefa85) by [@satya164](https://github.com/satya164))
- Update to eslint 6.8 ([a4757d2823](https://github.com/facebook/react-native/commit/a4757d28235617b6448ea962b66e2ee0c88ca331) by [@cpojer](https://github.com/cpojer))
- Always return an EventDispatcher in bridgeless mode ([0a12f3ea77](https://github.com/facebook/react-native/commit/0a12f3ea77840c218fd9d67d0e3f2ea068cb8c5f) by [@ejanzer](https://github.com/ejanzer))
- Annotate <Image> components in QPL logging using ImageAnalyticsTagContext ([60b7a3085c](https://github.com/facebook/react-native/commit/60b7a3085c0d83c126023b98e666ecda6f769454) by [@p-sun](https://github.com/p-sun))
- Daily `arc lint --take CLANGFORMAT` ([7e343c8d3a](https://github.com/facebook/react-native/commit/7e343c8d3a6865a6ec76449e7159133426743660))
- Daily `arc lint --take GOOGLEJAVAFORMAT` ([6b64810f33](https://github.com/facebook/react-native/commit/6b64810f33775628ae1cef4a56225182e1e04c9c))
- Switch TurboModules over to NativeModulePerfLogger ([c98f36c676](https://github.com/facebook/react-native/commit/c98f36c676c294949ae4914f9ed78bf1b9ac919a) by [@RSNara](https://github.com/RSNara))
- Get redbox working in bridgeless mode, disable logbox ([b01fcee4ce](https://github.com/facebook/react-native/commit/b01fcee4ce0386f16ce36efcd5f7180022968b0c) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Fix opacity not being animated on Text component ([43de8ea2ba](https://github.com/facebook/react-native/commit/43de8ea2ba3927cef5cd12c6cc35257907472a05) by [@sammy-SC](https://github.com/sammy-SC))
- Cleanup unused dependencies ([530dffa342](https://github.com/facebook/react-native/commit/530dffa342ee56e80cf8aa2d41a195b49c992b91) by [@cpojer](https://github.com/cpojer))
- Update native module specs ([edfd965c46](https://github.com/facebook/react-native/commit/edfd965c4654333edc55688b673a968fad2ddfc2) by [@ejanzer](https://github.com/ejanzer))
- Daily `arc lint --take GOOGLEJAVAFORMAT` ([673cbb3110](https://github.com/facebook/react-native/commit/673cbb3110855c45beb7e340b61e7daf927d9ade))
- Guard all debug logs behind an MC ([97bc0845ec](https://github.com/facebook/react-native/commit/97bc0845ecd588b587c7b7dad07c1475bcebf80b) by [@RSNara](https://github.com/RSNara))
- Fix image instrumentation internal lifecycle ([e3e900805b](https://github.com/facebook/react-native/commit/e3e900805b2857ac76b7e5eeb1489a9c0fa0da46) by [@p-sun](https://github.com/p-sun))
- Daily `arc lint --take CLANGFORMAT` ([ca162560af](https://github.com/facebook/react-native/commit/ca162560af851af8b04040c279a15a58329611e2))
- Daily `arc lint --take CLANGFORMAT` ([bf5f3c6a79](https://github.com/facebook/react-native/commit/bf5f3c6a79fba839225576da889d3b7f835a19f6))
- Daily `arc lint --take GOOGLEJAVAFORMAT` ([19658a1a60](https://github.com/facebook/react-native/commit/19658a1a60ce0408857338bc3a6bf1c05c50abeb))
- Switch over to JavaTurboModule::InitParams ([25ed045e36](https://github.com/facebook/react-native/commit/25ed045e36f0085f6609b69e5dedece9725c7fb2) by [@RSNara](https://github.com/RSNara))
- Update Babel to 7.8.x/7.9.x ([75a6178279](https://github.com/facebook/react-native/commit/75a617827963fd53f5f36987677a992e137eaebf) by [@cpojer](https://github.com/cpojer))

#### Android Unknown

- Fix Android diagnostic-debugging builds ([11ed9c2573](https://github.com/facebook/react-native/commit/11ed9c257326b96856a8ecdd5430189817b2ca8b) by [@JoshuaGross](https://github.com/JoshuaGross))
- Update loading banner text and colors ([6afc984e81](https://github.com/facebook/react-native/commit/6afc984e8187ac91f780f125dad4421576131c83) by [@makovkastar](https://github.com/makovkastar))
- Disable animations on Android again ([df08d65920](https://github.com/facebook/react-native/commit/df08d65920e7f27bc357758a304cbcb7541f1ee6) by [@ejanzer](https://github.com/ejanzer))
- Fix typo as there is no file called YGJNI.cpp ([04de69ab72](https://github.com/facebook/react-native/commit/04de69ab72cc2b961d269245d35953ca8e797b5b) by [@acton393](https://github.com/acton393))

#### iOS Unknown

- Correct JSRequireEnding marker start in RCTModuleData gatherConstants ([5c24746a48](https://github.com/facebook/react-native/commit/5c24746a4837b785fa18831a3740a3a5bdd1f304) by [@RSNara](https://github.com/RSNara))
- Remove NS_UNAVAILABLE constraint from RCTSurfaceHostingProxyRootView initializer ([7e300db703](https://github.com/facebook/react-native/commit/7e300db7035c98537e0719c88a7c1a451e59e250) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Add `RCTDevSplitBundleLoader` native module ([ad879e50bc](https://github.com/facebook/react-native/commit/ad879e50bcd51caca76b1073720f2b63df485ff1) by [@cpojer](https://github.com/cpojer))
- Convert JSEngineInstance into a runtime factory, move runtime ownership to ReactInstance ([5c474ac24c](https://github.com/facebook/react-native/commit/5c474ac24c86857ad2ff9d2444d3b82e171a7cee) by [@ejanzer](https://github.com/ejanzer))
- Add new bundle loading strategy in FBiOS behind GK ([34b23c1220](https://github.com/facebook/react-native/commit/34b23c122002b33cd893f7693992262698981d70) by [@rickhanlonii](https://github.com/rickhanlonii))
- IOS: Fix logging lifecycle when image is scrolled out and immediately back in ([1f95c9b62e](https://github.com/facebook/react-native/commit/1f95c9b62e306fdaf0ef351b02fb79713941259c) by [@p-sun](https://github.com/p-sun))
- IOS: Fix image instrumentation lifecycle on image cancel ([6cba4d2006](https://github.com/facebook/react-native/commit/6cba4d20068ef4ca9b9832e4c5cf71a7e361ddbe) by [@p-sun](https://github.com/p-sun))
- Break retain cycle in RCTLegacyViewManagerInteropCoordinator ([8f90ce26a5](https://github.com/facebook/react-native/commit/8f90ce26a55f2b1aab42d7c44b0d527321fa8c21) by [@sammy-SC](https://github.com/sammy-SC))
- Enable animations in bridgeless mode on iOS ([13ee5c4c16](https://github.com/facebook/react-native/commit/13ee5c4c166388dca126d5565e34a3671c724bc2) by [@PeteTheHeat](https://github.com/PeteTheHeat))

#### Failed to parse

- Remove unnecessary packager running check when saved JSLocation is empty ([bbb7bef539](https://github.com/facebook/react-native/commit/bbb7bef539f418bdb452e40987d399c9369df5a2) by [@jimmy623](https://github.com/jimmy623))
- Fix alert screen crash in android in RNTester app ([f898bb65fa](https://github.com/facebook/react-native/commit/f898bb65fac3f26944cbe1c47b87c63b2cd10e03) by [@anku255](https://github.com/anku255))
- Check whether packager is running in RCTBundleURLProvider for saved JSLocation ([3d882495d5](https://github.com/facebook/react-native/commit/3d882495d5e4415c2ebb8f4280e18e16025e0736) by [@jimmy623](https://github.com/jimmy623))
- Fix crash when updating RN dialog props after the activity disappeared ([7abcaafd66](https://github.com/facebook/react-native/commit/7abcaafd6600535825aa8330af7290ba8acea245) by [@mdvacca](https://github.com/mdvacca))
- Fix crash while measuring ReactSlider in Android API < 21 ([75e6f7961f](https://github.com/facebook/react-native/commit/75e6f7961fb3f6de6afbe79d49c42ad55fba1673) by [@mdvacca](https://github.com/mdvacca))
- Deprecate calculateChildFrames from RCTScrollView ([62aa84a325](https://github.com/facebook/react-native/commit/62aa84a3257bd3c513df3fcb4b4eaa350ecf77bb) by [@PeteTheHeat](https://github.com/PeteTheHeat))
- Move Collapsable into shared props ([851d01b0aa](https://github.com/facebook/react-native/commit/851d01b0aa45285bd6a52c89ab9c1b64a637258e) by [@sammy-SC](https://github.com/sammy-SC))
- Use React.Children.count for counting children ([92160f3144](https://github.com/facebook/react-native/commit/92160f3144dcfa510ff14b5f2eb231643f107af9) by [@vonovak](https://github.com/vonovak))
- Set `NSAllowsArbitraryLoads` to `false` by default in template ([7b61a968fd](https://github.com/facebook/react-native/commit/7b61a968fd774a6ca2196a731b6cec4282ab25cc) by [@wddwycc](https://github.com/wddwycc))
- Enabling [-Werror,-Wunused-property-ivar] ([c2c0581afb](https://github.com/facebook/react-native/commit/c2c0581afbb4f80c9e4c1bfe30be014e118ba6c8) by [@aditya7fb](https://github.com/aditya7fb))
- Update documentation of UIManagerModule methods ([0199a0392c](https://github.com/facebook/react-native/commit/0199a0392c65fa72d9599262ba1b4f8e14c0fc04) by [@mdvacca](https://github.com/mdvacca))
- Add dark mode support to loading banner ([94c45af136](https://github.com/facebook/react-native/commit/94c45af136f44245b5f2e56bded60c8ebd9b1235) by [@rickhanlonii](https://github.com/rickhanlonii))
- Forward URL parameters from main bundle to hot reloaded bundles ([b4785e5144](https://github.com/facebook/react-native/commit/b4785e514430dc3ba45ed6d136ec63574be88e26) by [@motiz88](https://github.com/motiz88))
- Add package name / bundle ID to bundle URL in development ([9b5359133b](https://github.com/facebook/react-native/commit/9b5359133b46b16be200e37dba0b03d82b73b4a0) by [@motiz88](https://github.com/motiz88))
- Fix measureLayout function for VirtualTexts ([5c48c94f8c](https://github.com/facebook/react-native/commit/5c48c94f8c0441bc78a007f0ea0c5b2763ff6875) by [@mdvacca](https://github.com/mdvacca))
- Smoother scrolling in ScrollView, HorizontalScrollView ([10314fe621](https://github.com/facebook/react-native/commit/10314fe621e1649654e83df197adf657e0ca8363) by [@JoshuaGross](https://github.com/JoshuaGross))
- Shrink loading bar down to not cover safe area. ([f0dfd35108](https://github.com/facebook/react-native/commit/f0dfd35108dd3f092d46b65e77560c35477bf6ba) by [@rickhanlonii](https://github.com/rickhanlonii))
- Speed up loading banner animations ([3fb37b4326](https://github.com/facebook/react-native/commit/3fb37b4326090def3aea43bd8189a0df648ccb34) by [@rickhanlonii](https://github.com/rickhanlonii))
- Update Jest ([f248ba1c8b](https://github.com/facebook/react-native/commit/f248ba1c8b15a12a0c590ce8211855cde31defe8) by [@cpojer](https://github.com/cpojer))
- Make ColorValue public in StyleSheet.js ([0a67133124](https://github.com/facebook/react-native/commit/0a6713312467d3f5b5dc993e91db9e7b1aa4fc8c))
- Fix crash inside RCTRedBox when trying to present same UIViewController twice ([46c77dc296](https://github.com/facebook/react-native/commit/46c77dc296dfab754356cd9346a01dae8d4869f4) by [@sammy-SC](https://github.com/sammy-SC))

Done in 41.05s.
