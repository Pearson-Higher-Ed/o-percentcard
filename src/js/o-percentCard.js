/* jshint globalstrict: true */
/* global module */

"use strict";

function PercentCard(element, params) {
	if (!(this instanceof PercentCard)) {
		throw new TypeError("Constructor PercentCard requires \"new\"");
	}
	if (!element) {
		throw new TypeError("missing required argument: element");
	}
	if (typeof element === "string") {
		element = document.querySelector(element);
	}
	if (!element) {
		return;
	}


	var header = document.createElement("div");
	header.innerHTML = params.header;
	header.className = "o-percentcard-container__cardheader";

	var percent = document.createElement("div");
	percent.innerHTML = params.data + "%";

	var grade;
	if (params.data < 60) {
		grade = "F";
	} else if (params.data < 70) {
		grade = "D";
	} else if (params.data < 80) {
		grade = "C";
	} else if (params.data < 90) {
		grade = "B";
	} else {
		grade = "A";
	}
	percent.className = "o-percentcard-container__cardpercent o-perecentcard-container__" + grade.toLowerCase() + "grade";

	var footer = document.createElement("div");
	footer.innerHTML = params.footer;
	footer.className = "o-percentcard-container__cardfooter";

	this.card = document.createElement("div");
	this.card.appendChild(header);
	this.card.appendChild(percent);
	this.card.appendChild(footer);
	this.card.className = "o-card o-card--" + params.size + " o-percentcard-container";

	element.appendChild(this.card);
}

module.exports = PercentCard;
