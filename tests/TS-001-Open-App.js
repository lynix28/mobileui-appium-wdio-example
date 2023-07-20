const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const mainMenu = require('../resources/pages/main-page/action.js');
const variable = require('../resources/shared/variable.js');

describe('TS-001 | Smoke Test', function() {
	it('TC-001 | Opening application', async function() {
		allureReporter.addTag('Smoke Test');
		allureReporter.addSeverity('critical');

		const response = await mainMenu.checkPackage();
		expect(response).equal(variable.data.appPackage, response);
	});
});