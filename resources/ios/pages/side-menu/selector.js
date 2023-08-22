/* eslint-disable no-undef */
class SideMenu {
	get webview() { return $('//XCUIElementTypeOther[@name="menu item webview"]');}
	get about() { return $('//XCUIElementTypeOther[@name="menu item about"]');}
	get login() { return $('//XCUIElementTypeOther[@name="menu item log in"]');}
	get logout() { return $('//XCUIElementTypeOther[@name="menu item log out"]');}
}

module.exports = new SideMenu();