const selector = require('./selector.js');
const driver = require('@wdio/globals').driver;

module.exports = {
	checkPackage: async function () {
		await selector.appLogo.waitForExist({ timeout: 30000 });
		const appPackage = await selector.appLogo.getCurrentPackage();

		return appPackage;
	},

	checkAllContent: async function () {
		await selector.appLogo.waitForExist({ timeout: 30000 });
		await selector.sideMenu.waitForExist({ timeout: 30000 });
		await selector.pageTitle.waitForExist({ timeout: 30000 });

		const title = await selector.pageTitle.getText();

		return title;
	},

	scrollPage: async function () {
		await driver.touchAction([
			{ action: 'press', x: 520, y: 1200 },
			{ action: 'moveTo', x: 535, y: 226 },
			'release'
		]);

		await driver.touchAction([
			{ action: 'press', x: 535, y:226 },
			{ action: 'moveTo', x: 520, y:1200 },
			'release'
		]);
	},

	checkSortFunction: async function () {
		await selector.sortButton.touchAction('tap');
		await selector.sortDescBtn.waitForExist({ timeout: 30000 });

		const text = await selector.sortDescBtnTxt.getText();
		
		await selector.sortDescBtn.touchAction('tap');

		return text;
	}
};