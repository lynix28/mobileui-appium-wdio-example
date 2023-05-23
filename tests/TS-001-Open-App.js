const expect = require('chai').expect; 
const mainMenu = require('../resources/pages/main-page/selector.js');
const variable = require('../resources/shared/variable.js');

describe('TS-001 | Smoke Test', function() {
	it('TC-001 | Opening application', async function() {
		await mainMenu.appLogo.waitForExist({ timeout: 30000 });
		const appPackage = await mainMenu.appLogo.getCurrentPackage();
		expect(appPackage).equal(variable.data.appPackage, appPackage);
	});
});