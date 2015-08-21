'use strict';
module.exports = function (config) {
	config.set({
		browsers: [ 'PhantomJS' ], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: [ 'mocha' ], //use the mocha test framework
		files: [
			'PercentCardTest.js' //just load this file
		],
		reporters: [ 'dots' ] //report results in this format
	});
};
