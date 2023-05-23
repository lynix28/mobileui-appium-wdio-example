/* eslint-disable no-undef */
class Webview {
	get appLogo() { return $('//android.view.ViewGroup[@content-desc="longpress reset app"]');}
	get sideMenu() { return $('//android.view.ViewGroup[@content-desc="open menu"]');}
	get pageTitle() { return $('//android.view.ViewGroup[@content-desc="container header"]/android.widget.TextView');}
	get urlInputField() { return $('//android.widget.EditText[@content-desc="URL input field"]');}
	get goToSiteBtn() { return $('//android.view.ViewGroup[@content-desc="Go To Site button"]');}
	get goToSiteBtnTextView() { return $('//android.view.ViewGroup[@content-desc="Go To Site button"]/android.widget.TextView');}
	get webviewScreen() { return $('//android.view.ViewGroup[@content-desc="webview screen"]');}
}

module.exports = new Webview();