/* jshint globalstrict: true */
/* global require, describe, it */

"use strict";

var assert = require("assert");
var PercentCard = require("../../src/js/o-percentCard.js");

describe("Percent Card", function () {
	describe("Static Methods", function(){
		it("will have a getName property", function() {
			assert.equal(PercentCard.hasOwnProperty("getName"), true);
		});
		it("will have a getSupportedSizes property", function() {
			assert.equal(PercentCard.hasOwnProperty("getSupportedSizes"), true);
		});
		it("will have a getPreferredSize property", function() {
			assert.equal(PercentCard.hasOwnProperty("getPreferredSize"), true);
		});
		it("will have a getDescription property", function() {
			assert.equal(PercentCard.hasOwnProperty("getDescription"), true);
		});
	});

	describe("New Object Instance", function(){
		it("should be created with just a data element in the json payload and will set defaults for all other values", function() {

			var json = {
				data:"10"
			};

			var sut = new PercentCard(json);

			assert.equal(sut._data === json.data, true);
			assert.equal(sut._classes === "cardContainer", true);
			assert.equal(sut._size === "1:1", true);
			assert.equal(sut._user === "", true);
		});
		it("should be created with a fully loaded json payload", function() {

			var json = {
				data:"0",
				classes:"card first",
				size:"1:1",
				user:"someUser"
			};

			var sut = new PercentCard(json);

			assert.equal(sut._data === json.data, true);
			assert.equal(sut._classes === json.classes, true);
			assert.equal(sut._size === json.size, true);
			assert.equal(sut._user === json.user, true);
		});
	});

	describe("Existing Object Instance", function(){
		it("should have the ability to have the data property changed", function() {
			var json = {
				data:"0"
			};

			var sut = new PercentCard(json);
			var newVal = "100";
			sut.setData(newVal);

			assert.equal(sut._data === newVal, true);
		});
		it("should have the ability to have the classes property changed", function() {
			var json = {
				data:"0"
			};

			var sut = new PercentCard(json);
			var newVal = "foo";
			sut.setClasses(newVal);

			assert.equal(sut._classes === newVal, true);
		});
		it("should have the ability to have the size property changed", function() {
			var json = {
				data:"0"
			};

			var sut = new PercentCard(json);
			var newVal = "foo";
			sut.setSize(newVal);

			assert.equal(sut._size === newVal, true);
		});
		it("should have the ability to have the user property changed", function() {
			var json = {
				data:"0"
			};

			var sut = new PercentCard(json),
				newVal = "foo";
			sut.setUser(newVal);

			assert.equal(sut._user === newVal, true);
		});
	});
});
