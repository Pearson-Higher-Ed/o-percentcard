"use strict";

var PercentCard = require("../../main.js");


var json = {
		"data":75,
		"header":"Card Three Header",
		"footer":"Card Three Footer"
};
var card3DomNode = new PercentCard(json).getDomNode();
document.querySelector("#card").appendChild(card3DomNode);

var json = {
		"data":65,
		"header":"Card Four Header",
		"footer":"Card Four Footer"
};
document.querySelector("#card").appendChild(new PercentCard(json).getDomNode());

var json = {
		"data":55,
		"header":"Card Five Header",
		"footer":"Card Five Footer"
};
document.querySelector("#card").appendChild(new PercentCard(json).getDomNode());
