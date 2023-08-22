const selector = require('./selector.js');
const driver = require('@wdio/globals').driver;

module.exports = {
	checkContent: async function () {
		await selector.appLogo.waitForExist({ timeout: 30000 });
		await selector.sideMenu.waitForExist({ timeout: 30000 });
		await selector.pageTitle.waitForExist({ timeout: 30000 });

		const title = await selector.pageTitle.getText();

		return title;
	},

	scrollPage: async function () {
		await driver.touchAction([
			{action: 'press', x: 172, y: 548},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 190, y: 83},
			'release'
		]);
		await driver.touchAction([
			{action: 'press', x: 186, y: 83},
			{action: 'wait', ms: 500},
			{action: 'moveTo', x: 172, y: 548},
			'release'
		]);
	},

	checkSortButton: async function () {
		await selector.sortButton.touchAction('tap');
		await selector.sortDescBtn.waitForExist({ timeout: 30000 });
		
		const text = await selector.sortDescBtnTxt.getText();

		await selector.sortDescBtn.touchAction('tap');

		return text;
	}
};