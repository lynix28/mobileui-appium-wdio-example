/* eslint-disable no-undef */
class Login {
	get pageTitle() { return $('//XCUIElementTypeStaticText[@name="Login"]');}
	get pageDescription() { return $('//XCUIElementTypeStaticText[@name="Select a username and password from the list below, or click on the usernames to automatically populate the username and password."]');}
	get usernameInputField() { return $('//XCUIElementTypeTextField[@name="Username input field"]');}
	get passwordInputField() { return $('//XCUIElementTypeSecureTextField[@name="Password input field"]');}
	get loginButton() { return $('//XCUIElementTypeOther[@name="Login button"]');}
	get errorMessageField() { return $('//XCUIElementTypeOther[@name="generic-error-message"]');}
}

module.exports = new Login();