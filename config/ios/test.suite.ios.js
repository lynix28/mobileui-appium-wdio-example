const path = '../tests/ios/mocha/';

const testSuite = {
	SanityTest: [
		path + 'TS-001-MainMenu.js',
		path + 'TS-002-SideMenu.js',
		path + 'TS-003-LoginLogout.js',
	],
	NegativeTest: path + 'TS-004-NegativeCase.js'
};

module.exports = { testSuite };