/**
 * New node file
 */

var mongoose = require('mongoose');

var TodoSchema = mongoose.Schema({
	title : String,
	completed : Boolean
});

var Todo = mongoose.model('Todo', TodoSchema, "todos");

module.exports = Todo;