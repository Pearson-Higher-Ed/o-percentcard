"use strict";

module.exports = function (config) {
	config.set({
		browsers: [ "PhantomJS" ], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: [ "mocha", "browserify"], //use the mocha test framework
		files: [
			"test/PercentCard.test.js", //just load this file
		],
		preprocessors: {
		  "test/**/*.js": [ "browserify" ]
		},
		reporters: [ "dots" ] //report results in this format
	});
};
