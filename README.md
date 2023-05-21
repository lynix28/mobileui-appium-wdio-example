# IT'S STILL WIP

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

Setup with `package.json`:
- `npm install`

Setup manually:
- `npm init -y`
- `npm install @wdio/cli`
- `./node_modules/.bin/wdio config` -> for quick setup or continue to install the following module below.
- `npm install @wdio/local-runner`
- `npm install @wdio/appium-service`
- `npm install @wdio/mocha-framework`
- `npm install @wdio/allure-reporter`
- `npm install --save-dev appium`

To compile the test result
- `npm install --save-dev allure-commandline`
- `./node_modules/.bin/allure generate [allure_output_dir] && ./node_modules/.bin/allure open` (edit the 'allure_output_dir' with your directory)

or follow this instruction to make it automatically -> https://webdriver.io/docs/allure-reporter#autogenerate-report