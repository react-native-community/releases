# Release Testing

## Pre-requisites

- Have clone of `react-native` repo and be on the release candidate branch.
  ```
  react-native$ git checkout 0.66-stable
  ```
- Have Android and iOS development environment set-up. Follow instuctions for macOS/iOS and macOS/Android from [React Native docs](https://reactnative.dev/docs/environment-setup)
  - Android
    - Android emulator or device set up
    - Correct Android NDK. You can find out which version to use by looking in the [CI Android image dockerfile](https://github.com/react-native-community/docker-android/blob/master/Dockerfile#L12). Currently, it's NDK 21, which can be downloaded via Android Studio by following [this guide](https://developer.android.com/studio/projects/install-ndk#specific-version). After downloading/installing it, it will be placed at a path similar to `~/Library/Android/sdk/ndk/21.4.7075529`, then add the following environment setup:
    ```bash
    export ANDROID_NDK=$HOME/Library/Android/sdk/ndk/21.4.7075529
    ```
    - In case you are on macos Catalina (or higher), you might also need to run `sudo xattr -r -d com.apple.quarantine /path/to/ndk` to avoid the e2e script to fail. That said, this should not happen anymore since from NDK 21 and higher the Android team started signing the NDK.\*
  - iOS
    - Xcode
    - Cocoapods

## Test Dimensions

| Variant          | RNTester                 | Template App             |
| ---------------- | ------------------------ | ------------------------ |
| Android - JSC    | via `test-manual-e2e.sh` | via `test-manual-e2e.sh` |
| Android - Hermes | via `test-manual-e2e.sh` | manual                   |
| iOS - JSC        | via `test-manual-e2e.sh` | via `test-manual-e2e.sh` |
| iOS - Hermes     | via `test-manual-e2e.sh` | manual                   |

**Test Checklist:**

- [ ] Connect to debugger. Can attach a breakpoint and reload
  - JSC - use web debugging
  - Hermes - [use Flipper / Chrome devtools](https://reactnative.dev/docs/next/hermes#debugging-js-on-hermes-using-google-chromes-devtools)
- [ ] Make a JS change and reload the app
  - iOS/Android - double r

## Steps

1. Delete RNTester and RNTestProject from your Android emulator/ iOS simulator if leftover from previous test
2. Remove any build artefacts
   ```bash
    rm react-native-*.tgz
    ./gradlew clean
    ./gradlew cleanBuildCache
    rm -rf node_modules
    rm -rf /tmp/RNTestProject
    pushd packages/rn-tester
    rm -rf Pods
    xcodebuild -workspace RNTesterPods.xcworkspace -scheme RNTester clean
    popd
   ```
3. Install dependencies
   ```bash
    yarn install
    pushd packages/rn-tester
    pod install --repo-update
    popd
   ```
5. Go through **Test Checklist** for variants supported by `test-manual-e2e` script

```bash
# This will run you through the different variants in **Test Dimensions** table
react-native$ ./scripts/test-manual-e2e.sh
```

4. Go through **Test Checklist** for Hermes enabled template app.

- Note: script will install template app at `/tmp/RNTestProject`
- Enable Hermes for Android template app, clean, build and go through **Test Checklist**

  ```bash
  # Update `/tmp/RNTestProject/android/app/build.gradle` to `enableHermes`
  project.ext.react = [
     enableHermes: true,  // clean and rebuild if changing
  ]

  # Clean and rebuild
  /tmp/RNTestProject/android$ ./gradlew clean
  /tmp/RNTestProject$ npx react-native run-android
  ```

- Enable Hermes for iOS template app, clean, build and go through **Test Checklist**

  ```bash
  # Update `/tmp/RNTestProject/ios/Podfile` and then run `pod install`
  use_react_native!(
    :path => config[:reactNativePath],
    # to enable hermes on iOS, change `false` to `true` and then install pods
    :hermes_enabled => true
  )

  # Install pods and run
  /tmp/RNTestProject/ios$ pod install
  /tmp/RNTestProject$ npx react-native run-ios
  ```
