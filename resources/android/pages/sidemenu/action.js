const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('./selector.js')
};

module.exports = {
	checkContent: async function () {
		await selector.mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await selector.mainMenu.sideMenu.touchAction('tap');

		await selector.sideMenu.webview.waitForExist({ timeout: 30000 });
		await selector.sideMenu.catalog.waitForExist({ timeout: 30000 });
		await selector.sideMenu.about.waitForExist({ timeout: 30000 });

		const webviewText = await selector.sideMenu.webviewTextView.getText();
		const catalogText = await selector.sideMenu.catalogTextView.getText();
		const aboutText = await selector.sideMenu.aboutTextView.getText();

		return {
			webviewText, catalogText, aboutText
		};
	},

	accessAboutPage: async function () {
		await selector.sideMenu.about.waitForExist({ timeout: 30000 });
		await selector.sideMenu.about.touchAction('tap');

		const response = await selector.sideMenu.about.waitForExist({ timeout: 30000, reverse: true});

		return response;
	}
};