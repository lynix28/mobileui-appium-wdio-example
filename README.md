# Android MobileUI Automation Test Project Example with Appium & WebdriverIO
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/lynix28/android-mobileui-appium-wdio-example/tree/master.svg?style=shield)](https://dl.circleci.com/status-badge/redirect/gh/lynix28/android-mobileui-appium-wdio-example/tree/master)
[![SauceLabs](https://img.shields.io/badge/integrated%20to-SauceLabs-red)](https://app.saucelabs.com/u/oauth-lynixizunia-7ba4e)

<h3><ins>Requirements</h3>
  
- NodeJS
- Appium Server
- Appium Inspector (to find selector)
- Android Studio (for device emulator)
- Demo App (for testing sample) by Sauce Labs

<h3><ins>Node Modules</h3>
  
- WebdriverIO
- Mocha (for Test Framework)
- Allure (for Test Reporting)
- Chai (for Assessment)
- Sauce Labs (for Test on Cloud)
- Dotenv

<h3><ins>Setup with `package.json`</h3>
  
- `npm install`

<h3><ins>Setup manually</h3>
  
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

<h3><ins>To compile the test result</h3>
  
- `npm install --save-dev allure-commandline`
- `./node_modules/.bin/allure generate [allure_output_dir] && ./node_modules/.bin/allure open` (edit the 'allure_output_dir' with your directory)

or follow this instruction to make it automatically -> https://webdriver.io/docs/allure-reporter#autogenerate-report

<h3><ins>To run the test</h3>
  
| Command | Description |
| --- | --- |
| `npm run test` | Run all tests |
| `npm run test -- --suite SuiteName` | Run a specific Test Suite Bundle (need to define it inside 'wdio.conf.js') |
| `npm run test -- --spec ./path/to/file/FileName` | Run a specific Test Case / Suite (need to define it inside 'wdio.conf.js') |

<h3><ins>To check the report</h3>
  
- `npm run report`

<h3><ins>How the report look like?</h3>

<ins>Allure Report
<img width="1435" alt="image" src="https://github.com/lynix28/android-mobileui-appium-wdio-example/assets/102797648/47ad7431-58e5-4dc8-ae5c-43212c9487ea">
  
<ins>SauceLabs Build & Test Status
<img width="1164" alt="image" src="https://github.com/lynix28/android-mobileui-appium-wdio-example/assets/102797648/dcb28ea8-0abb-4696-a313-14adc177b369">
