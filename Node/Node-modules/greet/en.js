/**
 * New node file
 */

var messages = require('./messages.json');
function greet() {
	console.log(messages.greet.en);
}


module.exports=greet;