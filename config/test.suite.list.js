const path = '../tests/';

const testSuite = {
	SmokeTest: path + 'TS-001-Open-App.js',
	SanityTest: [
		path + 'TS-002-MainMenu.js',
		path + 'TS-003-SideMenu.js',
		path + 'TS-004-Webview.js',
		path + 'TS-005-LoginLogout.js'
	],
	NegativeTest: path + 'TS-006-NegativeCase.js'
};

module.exports = { testSuite };