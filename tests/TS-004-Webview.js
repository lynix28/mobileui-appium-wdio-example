const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const mainMenu = require('../resources/pages/main-page/selector');
const sideMenu = require('../resources/pages/sidemenu/selector.js');
const webview = require('../resources/pages/webview/selector.js');
const assert = require('../resources/pages/webview/assert.js');
const variable = require('../resources/shared/variable.js');

describe('TS-004 | Webview', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await mainMenu.sideMenu.waitForExist({ timeout: 30000 });
		await mainMenu.sideMenu.touchAction('tap');

		await sideMenu.webview.waitForExist({ timeout: 30000 });
		await sideMenu.webview.touchAction('tap');

		await webview.appLogo.waitForExist({ timeout: 30000 });
		await webview.sideMenu.waitForExist({ timeout: 30000 });
		await webview.pageTitle.waitForExist({ timeout: 30000 });
		await webview.urlInputField.waitForExist({ timeout: 30000 });
		await webview.goToSiteBtn.waitForExist({ timeout: 30000 });

		const pageTitle = await webview.pageTitle.getText();
		const goToSiteBtn = await webview.goToSiteBtnTextView.getText();

		expect(pageTitle).equal(assert.attribute.pageTitleText, pageTitle);
		expect(goToSiteBtn).equal(assert.attribute.goToSiteBtnText, goToSiteBtn);
	});

	it('TC-002 | Access "Google Site"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await webview.urlInputField.waitForExist({ timeout: 30000 });
		await webview.urlInputField.addValue(variable.data.webviewUrl);
		
		await webview.goToSiteBtn.waitForExist({ timeout: 30000 });
		await webview.goToSiteBtn.touchAction('tap');

		const response = await webview.webviewScreen.waitForExist({ timeout: 30000});
		expect(response).equal(true, response);
	});
});