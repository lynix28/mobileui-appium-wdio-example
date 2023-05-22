/* eslint-disable no-undef */
class MainMenu {
	get appLogo() { return $('//android.view.ViewGroup[@content-desc="longpress reset app"]');}
	get sideMenu() { return $('//android.view.ViewGroup[@content-desc="open menu"]');}
	get pageTitle() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
}

module.exports = new MainMenu();