const selector = {
	mainMenu: require('../main-page/selector.js'),
	sideMenu: require('../sidemenu/selector.js'),
	logout: require('./selector.js')
};

module.exports = {
	clickLogout: async function () {
		await selector.mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await selector.mainMenu.sideMenu.touchAction('tap');

		await selector.sideMenu.logout.waitForExist({ timeout: 30000 });
		await selector.sideMenu.logout.touchAction('tap');

		await selector.logout.logoutPopUp.waitForExist({ timeout: 30000 });
		await selector.logout.logoutBtn.waitForExist({ timeout: 30000 });
		
		const logoutBtnText = await selector.logout.logoutBtn.getText();

		await selector.logout.logoutBtn.touchAction('tap');

		return logoutBtnText;
	},

	confirmationLogoutOk: async function () {
		await selector.logout.logoutInfo.waitForExist({ timeout: 30000 });
		const logoutSuccessText = await selector.logout.logoutInfo.getText();

		await selector.logout.successLogoutPrompt.touchAction('tap');

		return logoutSuccessText;
	}
};