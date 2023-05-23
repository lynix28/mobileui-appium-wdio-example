/* eslint-disable no-undef */
class Login {
	get pageTitle() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
	get pageDescription() { return $('//android.view.ViewGroup[@content-desc="login screen"]/android.widget.ScrollView/android.view.ViewGroup/android.widget.TextView[1]');}
	get usernameInputField() { return $('//android.widget.EditText[@content-desc="Username input field"]');}
	get passwordInputField() { return $('//android.widget.EditText[@content-desc="Password input field"]');}
	get loginButton() { return $('//android.view.ViewGroup[@content-desc="Login button"]');}
	get loginButtonTextView() { return $('//android.view.ViewGroup[@content-desc="Login button"]/android.widget.TextView');}
	get errorMessageField() { return $('//android.view.ViewGroup[@content-desc="generic-error-message"]/android.widget.TextView');}
}

module.exports = new Login();