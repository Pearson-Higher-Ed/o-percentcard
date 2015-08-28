"use strict";

var PercentCard = require("../../main.js");


var json = {
		"size": "small",
		"data":75,
		"header":"Card Three Header",
		"footer":"Card Three Footer"
};
new PercentCard("#card1", json);

var json = {
		"size": "small",
		"data":65,
		"header":"Card Four Header",
		"footer":"Card Four Footer"
};
new PercentCard("#card2", json);

var json = {
		"size": "small",
		"data":55,
		"header":"Card Five Header",
		"footer":"Card Five Footer"
};
new PercentCard("#card3", json);
