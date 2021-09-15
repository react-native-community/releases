# Release Process

<img src="https://user-images.githubusercontent.com/1309636/133347830-022daacf-9de2-4a9e-a7c9-048a789126ee.png" width="600"/>

We will be using this process and describing the **actions** (1, 2, ...) and **triggers** (a, b, ...)

## Pre-requisites
* Have write access to react-native repo


## Actions

### 1. Branch cut
* Create the stable branch in `react-native` repo with the appropriate name. Usually `0.X-stable`
    ```bash
    git checkout master
    git pull
    git checkout -b 0.42-stable
    git push origin 0.42-stable # your remote alias might be different
    ```  
* Create a changelog of the release branch. [Instructions here](https://github.com/react-native-community/releases/blob/master/docs/generate-changelog.md). Example of [0.66 changelog](https://github.com/react-native-community/releases/pull/247)
* Create a [new tracking issue](https://github.com/react-native-community/releases/issues/new?assignees=&labels=pre-release%2C+rc&template=new_release.md&title=Road+to+v0.X.0) and update to new target release. This is now where we’ll track incoming cherry-pick requests and update to any release-blocking issues. See [0.66 issue](https://github.com/react-native-community/releases/issues/246) as reference
* Ask the contributors involved in the highlights of this version to start preparing a blog-post to accompany the release. Can use Google Doc for collaboration at first, then convert to PR against react-native-website

### 2. Test

* See [instructions for release testing](./release-testing.md)

### 3. Create release issue

* Ask people to [create release-blocking issues](https://github.com/react-native-community/releases/issues/new?assignees=&labels=triage%2Cpre-release&template=release_blocker_form.yml) when something comes up. 
* Add the “Needs: React Native Attention” label if needs FB attention. 

### 4. Publish Release Candidate

* On your local checkout of the release branch, **make sure you have no local changes** and run `scripts/bump-oss-version` . 
  * This script will update the version, commit, and push those changes to the remote branch.
  * It will also create a tag of the version you supply. 
    ```bash
    react-native$ ./scripts/bump-oss-version.js 0.X.0-rc.Y # ex. 0.66.0-rc.2
    ```
* Once those changes have been pushed, CircleCI will start a job to publish the release via npm.
  <img width="400" alt="CircleCI showing publish release" src="https://user-images.githubusercontent.com/1309636/133348479-74f4664d-fa3c-4add-be79-e54d66c54fbe.png">
  * Note: Look under “All Branches” to find the publish job. CircleCI does not give a way to search for these jobs.
  * Once complete you should be able to run `npm view react-native` and verify `next` is expected release version
    ```bash
    $ npm view react-native
    ....
    dist-tags:
    latest: 0.65.1            next: 0.66.0-rc.2         nightly: 0.0.0-f617e022c
    ```
* After publishing, [create a “Github Release”.](https://github.com/facebook/react-native/releases/new)
    * Select the tag you just created
    * Check the `pre-release` checkbox.
    * You can copy the template used for this [release candidate patch](https://github.com/facebook/react-native/releases/tag/v0.66.0-rc.2)
    <img width="400" alt="Create a Github Release" src="https://user-images.githubusercontent.com/1309636/133348648-c33f82b8-b8d2-474a-a06e-35a1fb8d18de.png">
* After creating Github release, update the upgrade-helper. TODO
* Share on Twitter that you've made the release. TODO

### 5. Publish Release
* Publish the stable branch as a stable version. TODO instructions
* Get the Changelog PR merged
* Finalize the blog post and get the PR against `react-native-website` merged. 
* Create a Github Release for the stable version and include the highlights of this release, along with links to the changelog, the blogpost and the patch-release-issue (described in the previous points).
* Make a PR with the new release of the website documentation by following the steps in [their guide](https://github.com/facebook/react-native-website#cutting-a-new-version), then merge it so it will show show the new version as the currently available version.
  * You can verify that it's defaulting correctly by checking the [website-config](https://github.com/facebook/react-native-website/blob/master/website/docusaurus.config.js) file.

### 6, 7, 8
* TODO

## Triggers
### a. release-blocking issue from test
* TODO - describe how to determine if something is a release-blocking issue

### b. fixed, cherry-pick in
* TODO - describe how to cherry-pick in, and to update the tracking release issue

### c, d, e, f, g, h i
* TODO
