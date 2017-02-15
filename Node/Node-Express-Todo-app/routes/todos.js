/**
 * New node file
 */

var express = require("express");
var router = express.Router();

var Todo=require('../model/Todo');

router.route('/')
	.get(function(req, resp, next) {
		// IO ==> Non-blocking
		Todo.find(function(err,docs) {
			if(err){next(err);}
			resp.json(docs);
		});
	})
	.post(function(req,resp,next){
		var body=req.body;
		var todo=new Todo(body);
		todo.save(function(err, todo, numberAffected) {
			if(err){next(err);}
			resp.status(201).json(todo);
		});
		
	});
router.route('/:id')
	.all(function(req,resp,next){
		req.todoId=req.params.id; 
		next();
	})
	.get(function(req,resp,next){
		Todo.findOne({_id:req.todoId}, function(err,doc) {
			if(err){next(err);}
			resp.json(doc);
		});
	})
	.put(function(req,resp,next){
		var recevivedTodo=req.body;
		Todo.findOneAndUpdate({_id:req.todoId}, recevivedTodo, function(err,doc) {
			if(err){next(err);}
			resp.status(200).json(doc);
		});
		
	})
	.delete(function(req,resp,next){
		Todo.remove({_id:req.todoId}, function(err) {
			if(err){next(err);}
			resp.status(200).json('todo deleted');
		})
	});


module.exports = router;