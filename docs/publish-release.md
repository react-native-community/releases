# Publish a release

_Point people: [@alloy](https://github.com/alloy), [@grabbou](https://github.com/grabbou), [@kelset](https://github.com/kelset)_

ℹ️ _Note that some of these steps rely on Xcode and thus the usage of a Mac._

1. All of these steps assume your working directory is an up-to-date checkout of the stable branch of the react-native repo:

   ```bash
   cd /path/to/clone/of/react-native
   git checkout 0.42-stable
   git pull
   ```

1. Now, assuming you have built react-native previously, cleanup your environment:

   - Remove the `RNTester` and `RNTestProject` apps from both the iOS simulator and Android emulator.
   - Then remove any build-artifacts:
     ```bash
     rm react-native-*.tgz
     ./gradlew clean
     ./gradlew cleanBuildCache
     rm -rf node_modules
     rm -rf /tmp/RNTestProject
     pushd RNTester
     rm -rf Pods
     xcodebuild -workspace RNTesterPods.xcworkspace -scheme RNTester clean
     popd
     ```

1. Ensure you have everything installed that’s required to cut a release:

   - You have push access to the stable branch on the react-native repo.
   - The Android toolchain, as per the “Android development environment” section of [the react-native setup guide](https://reactnative.dev/docs/getting-started).
   - Download [Android NDK 21](https://developer.android.com/ndk/downloads) and place it at `~/Library/Android/android-ndk-r21`, then add the following environment setup:
     ```bash
     export ANDROID_NDK_HOME=$HOME/Library/Android/android-ndk-r21
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

1. Launch the Android emulator, which you can do from the ‘AVD Manager’ of Android Studio.

1. Run the script that will guide you through manually testing whether `RNTester` and new applications work on both iOS and Android:

   ```bash
   ./scripts/test-manual-e2e.sh
   ```

1. In case your local branch has changes that do not yet exist on the remote, push them now and make not of possible deterioration of CI status.

1. Bump the version numbers, which should also push the change to the remote:

   ```bash
   ./scripts/bump-oss-version.js [VERSION]
   ```

1. Pushing the changed version numbers will eventually kickoff the `publish_npm_package` workflow on CI, keep an eye on it.

1. Test that npmjs.com returns the correct results:

   ```bash
   npm view react-native
   ```

1. Once more test that creating a new application works as expected:

   ```bash
   npx react-native init TestRelease --version [VERSION]
   ```

1. Communicate the release as per the instructions in the release-process doc. [Read more ⇒](./release-process.md)
