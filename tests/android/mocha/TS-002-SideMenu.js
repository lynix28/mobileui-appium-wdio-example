const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const sideMenu = require('../../../resources/android/pages/sidemenu/action.js');
const assert = require('../../../resources/android/pages/sidemenu/assert.js');

describe('TS-002 | Side Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const response = await sideMenu.checkContent();

		expect(response.webviewText).equal(assert.attribute.webviewText, response.webviewText);
		expect(response.catalogText).equal(assert.attribute.catalogText, response.catalogText);
		expect(response.aboutText).equal(assert.attribute.aboutText, response.aboutText);
	});

	it('TC-002 | Access "About Page"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const response = await sideMenu.accessAboutPage();

		expect(response).equal(true, response);
	});
});