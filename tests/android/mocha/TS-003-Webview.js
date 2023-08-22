const expect = require('chai').expect;
const allureReporter = require('@wdio/allure-reporter').default;
const webview = require('../../../resources/android/pages/webview/action.js');
const assert = require('../../../resources/android/pages/webview/assert.js');
const variable = require('../../../resources/shared/variable.js');

describe('TS-003 | Webview', function() {
	it('TC-001 | Check all content is loaded', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		await webview.accessWebviewPage();
		const response = await webview.checkContent();

		expect(response.pageTitle).equal(assert.attribute.pageTitleText, response.pageTitle);
		expect(response.goToSiteBtn).equal(assert.attribute.goToSiteBtnText, response.goToSiteBtn);
	});

	it('TC-002 | Access "Google Site"', async function() {
		allureReporter.addTag('Sanity Test');
		allureReporter.addSeverity('normal');

		const response = await webview.useWebview(variable.data.webviewUrl);
		
		expect(response).equal(true, response);
	});
});