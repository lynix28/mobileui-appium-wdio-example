/* eslint-disable no-undef */
class Logout {
	get logoutPopUp() { return $('//XCUIElementTypeAlert[@name="Log Out"]/XCUIElementTypeOther/XCUIElementTypeOther/XCUIElementTypeOther[2]');}
	// eslint-disable-next-line no-useless-escape
	get logoutBtn() { return $('//XCUIElementTypeButton[@name=\"Log Out\"]');}
	get logoutInfo() { return $('//XCUIElementTypeStaticText[@name="You are successfully logged out."]');}
	get successLogoutPrompt() { return $('~OK');}
}

module.exports = new Logout();