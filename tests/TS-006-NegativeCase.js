const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/sidemenu/selector.js');
const login = require('../resources/pages/login/selector.js');
const loginAssert = require('../resources/pages/login/assert.js');
const variable = require('../resources/shared/variable.js');

describe('TS-006 | Negative Case', function() {
	it('TC-001 | Failed Login - Invalid Credential', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');
		
		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.clearValue();
		await login.usernameInputField.addValue(variable.data.invalidUsername);

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.addValue(variable.data.invalidPassword);

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await login.errorMessageField.getText();
		expect(errorText).equal(loginAssert.attribute.invalidUserMessage);
	});

	it('TC-002 | Failed Login - Locked User', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.login.waitForExist({ timeout: 30000 });
		await sideMenu.login.touchAction('tap');
		
		await login.usernameInputField.waitForExist({ timeout: 30000 });
		await login.usernameInputField.clearValue();
		await login.usernameInputField.addValue(variable.data.blockedUsername);

		await login.passwordInputField.waitForExist({ timeout: 30000 });
		await login.passwordInputField.clearValue();
		await login.passwordInputField.addValue(variable.data.password);

		await login.loginButton.waitForExist({ timeout: 30000 });
		await login.loginButton.touchAction('tap');

		await login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await login.errorMessageField.getText();
		expect(errorText).equal(loginAssert.attribute.lockedUserMessage);
	});
});