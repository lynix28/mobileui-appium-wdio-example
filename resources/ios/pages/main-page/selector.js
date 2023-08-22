/* eslint-disable no-undef */
class MainMenu {
	get appLogo() { return $('//XCUIElementTypeOther[@name="longpress reset app"]');}
	get sideMenu() { return $('//XCUIElementTypeButton[@name="tab bar option menu"]');}
	get pageTitle() { return $('//XCUIElementTypeStaticText[@name="Products"]');}
	get sortButton() { return $('//XCUIElementTypeOther[@name="sort button"]');}
	get sortDescBtn() { return $('//XCUIElementTypeOther[@name="nameDesc"]');}
	get sortDescBtnTxt() { return $('//XCUIElementTypeStaticText[@name="Name - Descending"]');}
	get scrollView() { return $('(//XCUIElementTypeOther[@name="Products Sauce Labs Backpack $29.99 󰓏 󰓏 󰓏 󰓏 󰓏 Sauce Labs Bike Light $9.99 󰓏 󰓏 󰓏 󰓏 󰓏 Sauce Labs Bolt T-Shirt $15.99 󰓏 󰓏 󰓏 󰓏 󰓏 Sauce Labs Fleece Jacket $49.99 󰓏 󰓏 󰓏 󰓏 󰓏 Sauce Labs Onesie $7.99 󰓏 󰓏 󰓏 󰓏 󰓏 Test.allTheThings() T-Shirt $15.99 󰓏 󰓏 󰓏 󰓏 󰓏 © 2023 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy. Vertical scroll bar, 2 pages Horizontal scroll bar, 1 page"])[14]/XCUIElementTypeScrollView');}
}

module.exports = new MainMenu();