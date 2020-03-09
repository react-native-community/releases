# Publish a release

_Point people: [@alloy](https://github.com/alloy), [@grabbou](https://github.com/grabbou), [@kelset](https://github.com/kelset)_

1. First cleanup your environment:

   - Remove the `RNTester` and `RNTestProject` apps from both the iOS simulator and Android emulator.
   - Then remove any build-artifacts:
     ```bash
     rm react-native-*.tgz
     rm -rf node_modules
     ./gradlew clean
     ./gradlew cleanBuildCache
     rm -rf /tmp/RNTestProject
     pushd RNTester
     rm -rf Pods
     xcodebuild -workspace RNTesterPods.xcworkspace -scheme RNTester clean
     popd
     ```

1. Ensure you have everything installed that’s required to cut a release:
   - The Android toolchain, as per the “Android development environment” section of [the react-native setup guide](https://reactnative.dev/docs/getting-started).
   - Download [Android NDK 21](https://developer.android.com/ndk/downloads) and place it at `~/Library/Android/android-ndk-r21`, then add the following environment setup:
     ```bash
     export ANDROID_NDK_HOME=$HOME/Library/Android/android-ndk-r21
     export PATH=$PATH:$ANDROID_NDK_HOME
     ```
   - Latest iOS
   - Latest yarn
   - Latest CocoaPods
   - Install dependencies:
     ```bash
     yarn install
     pushd RNTester
     pod install --repo-update
     popd
     ```
