"use strict";

module.exports = function (config) {
	config.set({
		browsers: [ "PhantomJS" ], //run in Chrome
		singleRun: true, //just run once by default
		frameworks: [ "mocha", "browserify", "commonjs"], //use the mocha test framework
		files: [
			"src/**/*.js",
			"test/*.test.js" //just load this file
		],
		preprocessors: {
			"src/**/*.js": ["commonjs", "coverage"],
		  	"test/**/*.test.js": [ "browserify" ]
		},
		// coverage reporter options
		coverageReporter: {
			type:"html",
			dir:"coverage"
		},
		// browserify preprocessor options
		browserify: {
			debug: true,
			transform: ["debowerify", require("browserify-istanbul")({
				ignore: ["node_modules/**", "test/**"]
			})]
		},
		reporters: [ "coverage", "dots" ] //report results in this format
	});
};
