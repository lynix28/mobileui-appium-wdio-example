const path = '../tests/android/mocha/';

const testSuite = {
	SanityTest: [
		path + 'TS-001-MainMenu.js',
		path + 'TS-002-SideMenu.js',
		path + 'TS-003-Webview.js',
		path + 'TS-004-LoginLogout.js'
	],
	NegativeTest: path + 'TS-005-NegativeCase.js'
};

module.exports = { testSuite };