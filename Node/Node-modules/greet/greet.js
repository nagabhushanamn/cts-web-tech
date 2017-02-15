/**
 * New node file
 */

// console.log('hello');
var en = require('./en');
var es = require('./es');
//
// var message="Hello..";
// function greet(){
// console.log(message);
// }

function greet(lang) {
	if (lang === 'en') {
		en();
	}
	if (lang === 'es') {
		es();
	}
}

// greet();

module.exports = greet;