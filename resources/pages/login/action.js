const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('../sidemenu/selector.js'),
	login: require('./selector.js')
};

module.exports = {
	accessLoginPage: async function () {
		await selector.mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await selector.mainMenu.sideMenu.touchAction('tap');

		await selector.sideMenu.login.waitForExist({ timeout: 30000 });
		await selector.sideMenu.login.touchAction('tap');
	},
	
	checkContent: async function () {
		await selector.login.pageTitle.waitForExist({ timeout: 30000 });
		await selector.login.loginButton.waitForExist({ timeout: 30000 });
		await selector.login.pageDescription.waitForExist({ timeout: 30000 });
		await selector.login.usernameInputField.waitForExist({ timeout: 30000 });
		await selector.login.passwordInputField.waitForExist({ timeout: 30000 });

		const pageTitle = await selector.login.pageTitle.getText();
		const pageDesc = await selector.login.pageDescription.getText();
		const loginBtn = await selector.login.loginButtonTextView.getText();

		return {
			pageTitle, pageDesc, loginBtn
		};
	},

	fillUsername: async function (username) {
		await selector.login.usernameInputField.waitForExist({ timeout: 30000 });
		await selector.login.usernameInputField.clearValue();
		await selector.login.usernameInputField.addValue(username);
	},

	fillPassword: async function (password) {
		await selector.login.passwordInputField.waitForExist({ timeout: 30000 });
		await selector.login.passwordInputField.clearValue();
		await selector.login.passwordInputField.addValue(password);
	},

	clickLogin: async function () {
		await selector.login.loginButton.waitForExist({ timeout: 30000 });
		await selector.login.loginButton.touchAction('tap');
	},

	checkLoginState: async function () {
		await selector.mainMenu.pageTitle.waitForExist({ timeout: 30000 });
		const response = await selector.mainMenu.pageTitle.getText();

		return response;
	},

	checkLoginStateExpectErrorMessage: async function () {
		await selector.login.errorMessageField.waitForExist({ timeout: 30000 });
		const errorText = await selector.login.errorMessageField.getText();

		return errorText;
	}
};