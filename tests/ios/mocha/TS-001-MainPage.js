/* eslint-disable no-undef */
const allureReporter = require('@wdio/allure-reporter').default;
const expect = require('chai').expect; 
const mainMenu = require('../../../resources/ios/pages/main-page/action.js');
const assert = require('../../../resources/ios/pages/main-page/assert.js');

describe('TS-001 | Main Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const response = await mainMenu.checkContent();
		expect(response).equal(assert.attribute.pageTitleText, response);
	});

	it('TC-002 | The page is scrollable', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await mainMenu.scrollPage();
	});

	it('TC-003 | Check sort function is work', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const response = await mainMenu.checkSortButton();
		expect(response).equal(assert.attribute.sortDescText, response);
	});
});