/**
 * New node file
 */

// console.log('app.js');
var _ = require('lodash');
//var mocha = require('mocha');

// util
var util = {
	findMax : function(arr) {
		// logic....
		return _.max(arr);
	},
	findMin : function(arr) {
		return _.min(arr);
	}
};

 console.log(util.findMax([ 10, 20, 30 ]));

module.exports = util;
