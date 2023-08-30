# MobileUI Automation Test Project Example with Appium & WebdriverIO
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/lynix28/mobileui-appium-wdio-example/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/lynix28/android-mobileui-appium-wdio-example/tree/master)
[![SauceLabs](https://img.shields.io/badge/integrated%20to-SauceLabs-red)](https://app.saucelabs.com/u/oauth-lynixizunia-7ba4e)

<h3><ins>Description:</h3>

An example project about Mobile automation (Android & iOS) testing using WebdriverIO. The test examples are created in Mocha Framework and Cucumber Framework.

<h3><ins>Requirements</h3>
  
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- Android Studio (for device emulator)
- Xcode (for iOS Simulator)
- Demo App (for testing sample) by Sauce Labs

<h3><ins>Inside the project:</h3>

- <b>WebdriverIO Packages</b>
    - Mocha and Cucumber as Test Framework
    - Allure as Test Reporter
    - Appium Server as a service to run the test
    - Appium Driver (`uiautomator2` & `xcuitest`)
    - `sauce-service` to run the test on Sauce Labs cloud service

<h3><ins>How to setup:</h3>

- Clone the project \
  Run `npm install`

<h3><ins>How to run the test:</h3>
        
<h4>Android:</h4>

- all the test
    - `npm run test-android` \
    or
    - `npm run test-android-bdd`
- specific spec / test file
    - `npm run test-android -- --spec ./to/file/location.js` \
    or
    - `npm run test-android-bdd -- --spec ./to/file/location.feature`
- specific suite / test suite
    - `npm run test-android -- --suite "suiteName"`
- specific test case
    - `npm run test-android -- --spec ./to/file/location.js --mochaOpts.grep "testcase name or testing tag"`
    - `npm run test-android -- --suite "suiteName" --mochaOpts.grep "testcase name or testing tag"`

<h4>iOS</h4>

- all the test
    - `npm run test-ios`
- specific spec / test file
    - `npm run test-ios -- --spec ./to/file/location.js`
- specific suite / test suite
    - `npm run test-ios -- --suite "suiteName"`
- specific test case
    - `npm run test-ios -- --spec ./to/file/location.js --mochaOpts.grep "testcase name or testing tag"`
    - `npm run test-ios -- --suite "suiteName" --mochaOpts.grep "testcase name or testing tag"`

<h3><ins>Common issue might happen:</h3>

- Appium doesn't start automatically during the test (in local)
    
    - to solve the issue, just run the Appium server manually and re-run your test.

- WDA (web driver agent) is not installed in iOS Simultor when tried to run the test

    - to solve the issue, try to run Appium Inspector and access the Simulator, It might take some time for the first time but once the WDA is installed, the test / inspection will run normal.

<h3><ins>How the report look like?</h3>

<h4>Allure Report</h4>

use `npm run report` to open the test report

<img width="1435" alt="image" src="https://github.com/lynix28/android-mobileui-appium-wdio-example/assets/102797648/47ad7431-58e5-4dc8-ae5c-43212c9487ea">
  
<h4>SauceLabs Build & Test Status</h4>
<img width="1164" alt="image" src="https://github.com/lynix28/android-mobileui-appium-wdio-example/assets/102797648/dcb28ea8-0abb-4696-a313-14adc177b369">
