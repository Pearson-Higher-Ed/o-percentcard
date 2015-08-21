"use strict";

var PercentCard = require("../../main.js");

var json = {
		"data":100,
		"header":"Average Grade to Date",
		"footer":"Class Avg 79%"
};
var cardInstance = new PercentCard(json);
var targetElement = document.querySelector("#card");
targetElement.appendChild(cardInstance.getDomNode());
