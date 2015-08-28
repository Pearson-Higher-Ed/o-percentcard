/* jshint globalstrict: true */
/* global require, describe, it */

"use strict";

var assert = require("assert");
var PercentCard = require("../src/js/o-percentCard.js");

describe("Percent Card", function () {
	var dom;
	before(function() {
		dom = document.createElement("div");
	});
	describe("New Object Instance", function(){
		it("Should create an element and assignt it to card", function() {

			var json = {
				data: 10,
				size: "small",
				header: "header",
				footer: "footer"
			};

			var sut = new PercentCard(dom, json);
			assert.equal(sut.card !== undefined, true);
			console.log(sut.card.childNodes.length);
			assert.equal(sut.card.childNodes.length === 3, true);//we should have 3 children nodes
		});
	});
});
