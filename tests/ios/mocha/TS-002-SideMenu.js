const allureReporter = require('@wdio/allure-reporter').default;
const expect = require('chai').expect;
const sideMenu = require('../../../resources/ios/pages/side-menu/action.js');
const assert = require('../../../resources/ios/pages/side-menu/assert.js');

describe('TS-002 | Side Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await sideMenu.openSideMenu();
		const response = await sideMenu.checkContent();

		expect(response.webviewText).equal(assert.attribute.webviewText, response.webviewText);
		expect(response.aboutText).equal(assert.attribute.aboutText, response.aboutText);
		expect(response.loginText).equal(assert.attribute.loginText, response.loginText);
		expect(response.logoutText).equal(assert.attribute.logoutText, response.logoutText);
	});

	it('TC-002 | The page is scrollable', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await sideMenu.scrollPage();		
	});

	it('TC-003 | Access "About Page"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await sideMenu.accessAboutPage();
	});
});