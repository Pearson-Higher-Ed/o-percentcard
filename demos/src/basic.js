"use strict";

var PercentCard = require("../../main.js");

var json = {
		"size": "small",
		"data":100,
		"header":"Average Grade to Date",
		"footer":"Class Avg 79%"
};
new PercentCard("#card", json);
