/* jshint globalstrict: true */
/* global module */

"use strict";

/**
 * To use, create a new instance of the card with a JSON configuration payload.
 * The JSON paramaters are as follows:
 * data (required): The number to be displayed as a percent. Example: data:45 will display as 45%
 * header (optional): Allows you to set header text
 * footer (optional): Allows you to set footer text
 * classes (optional): Allows you to specify classes for the card. Used to override styles
 * headerClass (optional): Allows you to set a class for the header text. Used to override header text style.
 * percentClass (optional): Allows you to set a class for the percent text. Used to override percent text style.
 * footerClass (optional): Allows you to set a class for the footer text.  Used to override footer text style.
**/

function PercentCard(args) {
	if (!args) {
		throw "A valid JSON object must be provided";
	}

	this.setData(args.data);

	this.setHeader(args.header);
	this.setFooter(args.footer);
	this.setSize(args.size ? args.size : "1:1");
	this.setUser(args.user);
	this.setClasses(args.classes ? args.classes : "cardcontainer");
	this.setHeaderClass(args.headerClass ? args.headerClass : "cardheader");
	this.setFooterClass(args.footerClass ? args.footerClass : "cardfooter");
	this.setPercentClass(args.percentClass ? args.percentClass : "cardpercent");

	this._redrawCard = true;
}

/* Static Methods */

/**
  * Returns an array of sizes supported by this card
  */
PercentCard.getSupportedSizes = function() {
	return ["1:1", "2:1", "2:2", "2:4", "4:1", "4:2", "4:4", "4:8"];
};

/**
  * Returns the preferred size of this card
  */
PercentCard.getPreferredSize = function() {
	return "1:1";
};

/**
  * Returns a friendly name of the card
  */
PercentCard.getName = function() {
	return "A visualisation of a percent";
};

/**
  * Returns a discription of the card functionality
  */
PercentCard.getDescription = function() {
	return "A visualisation which accepts data as a single number.";
};

/* Instance Methods */

/**
  * Data as a number to be displayed as a percent
  */
PercentCard.prototype.setData = function(data) {
	if (data === undefined || (typeof data !== "number")) {
		throw "No data provided. Please provide a number to be displayed.";
	}
	this._redrawCard = true;
	this._data = data;
};

/**
 * A string representation of a space delimited list of class attributes to be associated with the div element used for the card being rendered.
 */
PercentCard.prototype.setClasses = function(classes) {
	this._redrawCard = true;
	this._classes = classes ? classes : "";
};

/**
  * Not implemented
  */
PercentCard.prototype.setSize = function(size) {
	this._redrawCard = true;
	this._size = size ? size : "";
};

/**
  * Not implemented
  */
PercentCard.prototype.setUser = function(user) {
	this._redrawCard = true;
	this._user = user ? user : "";
};

/**
 * Sets the header text for the card instance
 */
PercentCard.prototype.setHeader = function(header) {
	this._redrawCard = true;
	this._header = header ? header : "";
};

/**
 * Sets the footer text for the card instance
 */
PercentCard.prototype.setFooter = function(footer) {
	this._redrawCard = true;
	this._footer = footer ? footer : "";
};

PercentCard.prototype.setHeaderClass = function(headerClass) {
	this._redrawCard = true;
	this._headerClass = headerClass ? headerClass : "";
};

PercentCard.prototype.setPercentClass = function(percentClass) {
	this._redrawCard = true;
	this._percentClass = percentClass ? percentClass : "";
};

PercentCard.prototype.setFooterClass = function(footerClass) {
	this._redrawCard = true;
	this._footerClass = footerClass ? footerClass : "";
};

PercentCard.prototype._renderCard = function() {

	var header = document.createElement("p");
	header.innerHTML = this._header;
	header.className = this._headerClass;

	var percent = document.createElement("p");
	percent.innerHTML = this._data + "%";

	var grade;
	if (this._data < 60) {
		grade = "F";
	} else if (this._data < 70) {
		grade = "D";
	} else if (this._data < 80) {
		grade = "C";
	} else if (this._data < 90) {
		grade = "B";
	} else {
		grade = "A";
	}
	percent.className = this._percentClass + " " + grade.toLowerCase() + "grade";

	var footer = document.createElement("p");
	footer.innerHTML = this._footer;
	footer.className = this._footerClass;

	var newNode = document.createElement("div");
	newNode.appendChild(header);
	newNode.appendChild(percent);
	newNode.appendChild(footer);
	newNode.className = this._classes;

	return newNode;
};

/**
 * Creates a card if needed and returns the dom node
 */
PercentCard.prototype.getDomNode = function() {
	if (this._redrawCard) {
		this._cardDom = this._renderCard();
		this._redrawCard = false;
	}

	return this._cardDom;
};

module.exports = PercentCard;
