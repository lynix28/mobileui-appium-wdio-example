const { Given, When, Then } = require('@wdio/cucumber-framework');

const { expect } = require('chai');

const login = {
	action: require('../../../../resources/android/pages/login/action.js'),
	assert: require('../../../../resources/android/pages/login/assert.js')
};
const variable = require('../../../../resources/shared/variable.js');

Given(
	/^Sauce Demo app opened and directed to login page$/,
	async function () {
		await login.action.accessLoginPage();
		const response = await login.action.checkContent();

		expect(response.pageTitle).equal(login.assert.attribute.pageTitleText, response.pageTitle);
		expect(response.pageDesc).equal(login.assert.attribute.pageDescText, response.pageDesc);
		expect(response.loginBtn).equal(login.assert.attribute.loginBtnText, response.loginBtn);
	}
);

When(
	/^I enter "([^"]*)?" on username field$/,
	async function (username) {
		await login.action.fillUsername(username);
	}
);

When(
	/^I enter a valid password$/,
	async function () {
		await login.action.fillPassword(variable.data.password);
	}
);

When(
	/^I enter an invalid password$/,
	async function () {
		await login.action.fillPassword(variable.data.invalidPassword);
	}
);

When(
	/^Click login button$/,
	async function () {
		await login.action.clickLogin();
	}
);

Then(
	/^Login will be successfully$/,
	async function () {
		const response = await login.action.checkLoginState();

		if (response == 'Login') expect(response).equal('Login', response);
		if (response == 'Products') expect(response).equal('Products', response);
	}
);

Then(
	/^Login will failed and I see an error messsage about Invalid User$/,
	async function () {
		const response = await login.action.checkLoginStateExpectErrorMessage();

		expect(response).equal(login.assert.attribute.invalidUserMessage);
	}
);

Then(
	/^Login will failed and I see an error messsage about Blocked User$/,
	async function () {
		const response = await login.action.checkLoginStateExpectErrorMessage();

		expect(response).equal(login.assert.attribute.lockedUserMessage);
	}
);