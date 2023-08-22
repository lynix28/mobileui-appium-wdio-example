const allureReporter = require('@wdio/allure-reporter').default;
const expect = require('chai').expect;
const login = require('../../../resources/ios/pages/login/action.js');
const assert = require('../../../resources/ios/pages/login/assert.js');
const variable = require('../../../resources/shared/variable.js');

describe('TS-004 | Negative Case', function() {
	it('TC-001 | Failed Login - Invalid Credential', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await login.goToLoginPage();
		await login.fillUsername(variable.data.invalidUsername);
		await login.fillPassword(variable.data.invalidPassword);
		await login.tapLogin();

		const response = await login.checkLoginStateExpectError();
		expect(response).equal(assert.attribute.invalidUserMessage, response);
	});

	it('TC-002 | Failed Login - Locked User', async function() {
		allureReporter.addTag('Negative Test');
		allureReporter.addSeverity('normal');

		await login.goToLoginPage();
		await login.fillUsername(variable.data.blockedUsername);
		await login.fillPassword(variable.data.password);
		await login.tapLogin();

		const response = await login.checkLoginStateExpectError();
		expect(response).equal(assert.attribute.lockedUserMessage);
	});
});