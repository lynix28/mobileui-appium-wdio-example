/* eslint-disable no-undef */
class MainMenu {
	get appLogo() { return $('//android.view.ViewGroup[@content-desc="longpress reset app"]');}
	get sideMenu() { return $('//android.view.ViewGroup[@content-desc="open menu"]');}
	get pageTitle() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
	get scrollView() { return $('//android.view.ViewGroup[@content-desc="products screen"]/android.widget.ScrollView');}
	get sortButton() { return $('//android.view.ViewGroup[@content-desc="sort button"]');}
	get sortDescBtn() { return $('//android.view.ViewGroup[@content-desc="nameDesc"]');}
	get sortDescBtnTxt() { return $('//android.view.ViewGroup[@content-desc="nameDesc"]/android.widget.TextView[2]');}
}

module.exports = new MainMenu();