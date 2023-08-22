const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const login = require('../../../resources/android/pages/login/action.js');
const assert = require('../../../resources/android/pages/login/assert.js');
const variable = require('../../../resources/shared/variable.js');

describe('TS-005 | Negative Case', function() {
	it('TC-001 | Failed Login - Invalid Credential', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await login.accessLoginPage();
		await login.fillUsername(variable.data.invalidUsername);
		await login.fillPassword(variable.data.invalidPassword);
		await login.clickLogin();
		const response = await login.checkLoginStateExpectErrorMessage();

		expect(response).equal(assert.attribute.invalidUserMessage);
	});

	it('TC-002 | Failed Login - Locked User', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await login.accessLoginPage();
		await login.fillUsername(variable.data.blockedUsername);
		await login.fillPassword(variable.data.password);
		await login.clickLogin();
		const response = await login.checkLoginStateExpectErrorMessage();

		expect(response).equal(assert.attribute.lockedUserMessage);
	});
});