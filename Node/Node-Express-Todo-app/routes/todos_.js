/**
 * New node file
 */

var express = require("express");
var router = express.Router();

var todos=[
           {id:1,title:'item-1',completed:true},
           {id:2,title:'item-2',completed:false}
           ];

router.route('/')
	.get(function(req, resp, next) {
		resp.json(todos);
	})
	.post(function(req,resp,next){
		var newTodo=req.body;
		todos.push(newTodo);
		resp.status(201).json('New todo created');
	});
router.route('/:id')
	.all(function(req,resp,next){
		req.todoId=req.params.id; 
		next();
	})
	.get(function(req,resp,next){
		todos.forEach(function(todo){
			if(todo.id===+req.todoId){
				resp.json(todo);
				return;
			}
		});
	})
	.put(function(req,resp,next){
		var recevivedTodo=req.body;
		todos=todos.map(function(todo){
			if(todo.id===+req.todoId){
				return recevivedTodo;
			}else{
				return todo;
			}
		});
		resp.status(200).json('Todo Updated');
	})
	.delete(function(req,resp,next){
		console.log(req.todoId);
		todos.forEach(function(todo,index){
			todos.splice(index,1);
			resp.status(200).json('todo deleted');
		});
	});


module.exports = router;