/* eslint-disable no-undef */
class SideMenu {
	get catalog() { return $('//android.view.ViewGroup[@content-desc="menu item catalog"]');}
	get catalogTextView() { return $('//android.view.ViewGroup[@content-desc="menu item catalog"]/android.widget.TextView');}
	get webview() { return $('//android.view.ViewGroup[@content-desc="menu item webview"]');}
	get webviewTextView() { return $('//android.view.ViewGroup[@content-desc="menu item webview"]/android.widget.TextView');}
	get about() { return $('//android.view.ViewGroup[@content-desc="menu item about"]');}
	get aboutTextView() { return $('//android.view.ViewGroup[@content-desc="menu item about"]/android.widget.TextView');}
}

module.exports = new SideMenu();