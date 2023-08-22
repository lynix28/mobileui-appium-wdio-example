const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('./selector.js')
};
const driver = require('@wdio/globals').driver;

module.exports = {
	openSideMenu: async function () {
		await selector.mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await selector.mainMenu.sideMenu.touchAction('tap');
	},

	checkContent: async function () {
		await selector.sideMenu.webview.waitForExist({ timeout: 30000 });
		await selector.sideMenu.about.waitForExist({ timeout: 30000 });
		await selector.sideMenu.login.waitForExist({ timeout: 30000 });
		await selector.sideMenu.logout.waitForExist({ timeout: 30000 });

		const webviewText = await selector.sideMenu.webview.getText();
		const aboutText = await selector.sideMenu.about.getText();
		const loginText = await selector.sideMenu.login.getText();
		const logoutText = await selector.sideMenu.logout.getText();

		return {
			webviewText, aboutText, loginText, logoutText
		};
	},

	scrollPage: async function () {
		await driver.touchAction([
			{action: 'press', x: 170, y: 412},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 175, y: 189},
			'release'
		]);
		await driver.touchAction([
			{action: 'press', x: 210, y: 134},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 201, y: 385},
			'release'
		]);
	},

	accessAboutPage: async function () {
		await selector.sideMenu.about.waitForExist({ timeout: 30000 });
		await selector.sideMenu.about.touchAction('tap');
	}
};