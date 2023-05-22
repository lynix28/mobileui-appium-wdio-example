const expect = require('chai').expect; 
const mainMenu = require('../resources/pages/main-page/selector.js');
const assert = require('../resources/pages/main-page/assert.js');

describe('TS-002 | Main Menu', function() {
	it('TC-001 | Check all content is loaded', async function() {
		let displayed = 0;

		if (await mainMenu.appLogo.isDisplayed() == true) displayed = displayed + 1;
		if (await mainMenu.sideMenu.isDisplayed() == true) displayed = displayed + 1;
		if (await mainMenu.pageTitle.isDisplayed() == true) displayed = displayed + 1;

		expect(displayed).equal(3);

		const title = await mainMenu.pageTitle.getText();
		expect(title).equal(assert.attribute.pageTitleText, title);
	});
});