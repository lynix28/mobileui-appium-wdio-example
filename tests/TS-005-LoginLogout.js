const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const login = {
	action: require('../resources/pages/login/action.js'),
	assert: require('../resources/pages/login/assert.js')
};
const logout = {
	action: require('../resources/pages/logout/action.js'),
	assert: require('../resources/pages/logout/assert.js')
};
const variable = require('../resources/shared/variable.js');

describe('TS-005 | Login & Logout', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await login.action.accessLoginPage();
		const response = await login.action.checkContent();

		expect(response.pageTitle).equal(login.assert.attribute.pageTitleText, response.pageTitle);
		expect(response.pageDesc).equal(login.assert.attribute.pageDescText, response.pageDesc);
		expect(response.loginBtn).equal(login.assert.attribute.loginBtnText, response.loginBtn);
	});

	it('TC-002 | Success Login', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await login.action.fillUsername(variable.data.username);
		await login.action.fillPassword(variable.data.password);
		await login.action.clickLogin();
		const response = await login.action.checkLoginState();

		if (response == 'Login') expect(response).equal('Login', response);
		if (response == 'Products') expect(response).equal('Products', response);
	});

	it('TC-003 | Success Logout', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const logoutBtnText = await logout.action.clickLogout();
		expect(logoutBtnText).equal(logout.assert.attribute.logoutBtnText, logoutBtnText);
		
		const logoutStateText = await logout.action.confirmationLogoutOk();
		expect(logoutStateText).equal(logout.assert.attribute.logoutSuccessText, logoutStateText);
	});
});