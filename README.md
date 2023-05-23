# Android MobileUI Automation Test Project Example with Appium & WebdriverIO
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/lynix28/android-mobileui-appium-wdio-example/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/lynix28/android-mobileui-appium-wdio-example/tree/master)
[![Sauce Test Status](https://app.saucelabs.com/buildstatus/oauth-lynixizunia-7ba4e)](https://app.saucelabs.com/u/oauth-lynixizunia-7ba4e)

Requirement:
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- Android Studio (for device emulator)
- Demo App (for testing sample) by Sauce Labs

Node Module:
- WebdriverIO
- Mocha (for Test Framework)
- Allure (for Test Reporting)
- Chai (for Assessment)
- Sauce Labs (for Test on Cloud)
- Dotenv

Setup with `package.json`:
- `npm install`

Setup manually:
- `npm init -y`
- `npm install @wdio/cli`
- `./node_modules/.bin/wdio config` -> for quick setup or continue to install the following module below.
- `npm install @wdio/local-runner`
- `npm install @wdio/appium-service`
- `npm install @wdio/sauce-service`
- `npm install @wdio/mocha-framework`
- `npm install @wdio/allure-reporter`
- `npm install dotenv`
- `npm install chai`
- `npm install --save-dev appium`

To compile the test result
- `npm install --save-dev allure-commandline`
- `./node_modules/.bin/allure generate [allure_output_dir] && ./node_modules/.bin/allure open` (edit the 'allure_output_dir' with your directory)

or follow this instruction to make it automatically -> https://webdriver.io/docs/allure-reporter#autogenerate-report

To run the test
- `npm run test` | Run all tests
- `npm run test -- --suite SuiteName` | Run a specific Test Suite Bundle (need to define it inside 'wdio.conf.js')
- `npm run test -- --spec ./path/to/file/FileName` | Run a specific Test Case / Suite (need to define it inside 'wdio.conf.js')

To check the report
- `npm run report`