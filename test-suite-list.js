const testSuite = {
	smokeTest: [ // example to run it as a Test Suite
		[
			'./tests/TS-001-Open-App.js',
		]
	],
	sanityTest: [
		[
			'./tests/TS-002-MainMenu.js',
			'./tests/TS-003-SideMenu.js',
			'./tests/TS-004-Webview.js',
			'./tests/TS-005-LoginLogout.js'
		]
	],
	negativeTest: [
		[
			'./tests/TS-006-NegativeCase.js'
		]
	]
};

module.exports = { testSuite };