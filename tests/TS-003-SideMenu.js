const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/sidemenu/selector.js');
const assert = require('../resources/pages/sidemenu/assert.js');

describe('TS-003 | Side Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.webview.waitForExist({ timeout: 30000 });
		await sideMenu.catalog.waitForExist({ timeout: 30000 });
		await sideMenu.about.waitForExist({ timeout: 30000 });

		const webviewText = await sideMenu.webviewTextView.getText();
		const catalogText = await sideMenu.catalogTextView.getText();
		const aboutText = await sideMenu.aboutTextView.getText();

		expect(webviewText).equal(assert.attribute.webviewText, webviewText);
		expect(catalogText).equal(assert.attribute.catalogText, catalogText);
		expect(aboutText).equal(assert.attribute.aboutText, aboutText);
	});

	it('TC-002 | Access "About Page"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await sideMenu.about.waitForExist({ timeout: 30000 });
		await sideMenu.about.touchAction('tap');

		const response = await sideMenu.about.waitForExist({ timeout: 30000, reverse: true});
		expect(response).equal(true, response);
	});
});