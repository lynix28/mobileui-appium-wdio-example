const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('../sidemenu/selector.js'),
	webview: require('./selector.js')
};

module.exports = {
	accessWebviewPage: async function () {
		await selector.mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await selector.mainMenu.sideMenu.touchAction('tap');

		await selector.sideMenu.webview.waitForExist({ timeout: 30000 });
		await selector.sideMenu.webview.touchAction('tap');
	},
	
	checkContent: async function () {
		await selector.webview.appLogo.waitForExist({ timeout: 30000 });
		await selector.webview.sideMenu.waitForExist({ timeout: 30000 });
		await selector.webview.pageTitle.waitForExist({ timeout: 30000 });
		await selector.webview.urlInputField.waitForExist({ timeout: 30000 });
		await selector.webview.goToSiteBtn.waitForExist({ timeout: 30000 });

		const pageTitle = await selector.webview.pageTitle.getText();
		const goToSiteBtn = await selector.webview.goToSiteBtnTextView.getText();

		return {
			pageTitle, goToSiteBtn
		};
	},

	useWebview: async function (url) {
		await selector.webview.urlInputField.waitForExist({ timeout: 30000 });
		await selector.webview.urlInputField.addValue(url);
		
		await selector.webview.goToSiteBtn.waitForExist({ timeout: 30000 });
		await selector.webview.goToSiteBtn.touchAction('tap');

		const response = await selector.webview.webviewScreen.waitForExist({ timeout: 30000});

		return response;
	}
};