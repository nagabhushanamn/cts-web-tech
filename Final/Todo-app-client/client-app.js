$(function() {

	// ----------------------------------------------------------------
	const
	ENTER_KEY = 13;
	const
	ESC_KEY = 27;
	// ----------------------------------------------------------------

	Handlebars.registerHelper('eq', function(a, b, options) {
		return a === b ? options.fn(this) : options.inverse(this);
	});
	// ----------------------------------------------------------------

	var apiUrl = "http://localhost:3000/api/todos";

	const
	service = {
		getTodos : function() {
			var def = $.Deferred();
			$.ajax(apiUrl).done(function(resp) {
				def.resolve(resp);
			});
			return def;
		},
		addTodo : function(newTodo) {
			var promise = $.Deferred();
			$.ajax(apiUrl, {
				method : 'POST',
				data : newTodo
			}).done(function(resp) {
				promise.resolve(resp);
			});
			return promise;
		},
		deleteTodo : function(id) {
			var promise = $.Deferred();
			$.ajax(apiUrl + "/" + id, {
				method : 'DELETE',
			}).done(function(resp) {
				promise.resolve(resp);
			});
			return promise;
		},
		updateTodo : function(todo) {
			var promise = $.Deferred();
			$.ajax(apiUrl + "/" + todo._id, {
				method : 'PUT',
				data : todo
			}).done(function(resp) {
				promise.resolve(resp);
			});
			return promise;
		}
	};

	// ----------------------------------------------------------------

	// App

	var App = {
		init : function() {
			this.todos = [];
			var promise = service.getTodos();
			var self = this;
			promise.done(function(todos) {
				self.todos = todos;
				self.render();
			});
			this.todoTemplate = Handlebars.compile($('#todo-template').html());
			this.footerTemplate = Handlebars.compile($('#footer-template')
					.html());
			this.bindEvents();

			// var self=this;
			var router = new Router({
				'/todos/:filterBy' : function(filterBy) {
					this.filter = filterBy;
					this.render();
				}.bind(this)
			});
			router.init('/todos/all');

		},
		bindEvents : function() {
			$('.new-todo').on('keyup', this.create.bind(this));
			$('.toggle-all').on('change', this.toggleAll.bind(this));
			$('.footer').on('click', '.clear-completed',
					this.destroyCompleted.bind(this));
			$('.todo-list').on('change', '.toggle', this.toggle.bind(this)).on(
					'click', '.destroy', this.destroy.bind(this)).on(
					'dblclick', 'label', this.editingMode.bind(this)).on(
					'keyup', '.edit', this.editingKeyup.bind(this)).on(
					'focusout', '.edit', this.update.bind(this));
		},
		getFilteredTodos : function() {
			if (this.filter === 'active') {
				return this.getActiveTodos();
			}
			if (this.filter === 'completed') {
				return this.getCompletedTodos();
			}
			return this.todos;
		},
		getActiveTodos : function() {
			return this.todos.filter(function(todo) {
				return !todo.completed;
			});
		},
		getCompletedTodos : function() {
			return this.todos.filter(function(todo) {
				return todo.completed;
			});
		},
		render : function() {
			let
			todos = this.getFilteredTodos();
			$('.main').toggle(todos.length > 0);
			$('.todo-list').html(this.todoTemplate(todos));
			this.renderFooter();
		},
		renderFooter : function() {
			let
			todoCount = this.todos.length;
			let
			activeTodoCount = this.getActiveTodos().length;
			var template = this.footerTemplate({
				activeTodoCount : activeTodoCount,
				filter : this.filter,
				completedTodos : todoCount - activeTodoCount,
				pluralize : activeTodoCount == 1 ? 'item' : 'items'
			});
			$('.footer').toggle(todoCount > 0).html(template);
		},
		getIndexFromEl : function(el) {
			var todos = this.todos;
			var id = $(el).closest('li').data('id');
			var i = todos.length;
			while (i--) {
				if (todos[i].id == id) {
					return i;
				}
			}
		},
		toggle : function(event) {
			var index = this.getIndexFromEl(event.target);
			var self = this;
			self.todos[index].completed = !self.todos[index].completed;
			service.updateTodo(self.todos[index]).done(function(todo) {
				self.render();
			})
		},
		toggleAll : function(event) {
			var isChecked = $(event.target).prop('checked');
			this.todos.forEach(function(todo) {
				todo.completed = isChecked;
			});
			this.render();
		},
		create : function(event) {
			var $input = $(event.target);
			var val = $input.val().trim();
			if (event.which !== ENTER_KEY || !val) {
				return;
			}

			var newTodo = {
				title : val,
				completed : false
			}

			var self = this;
			service.addTodo(newTodo).done(function(todo) {
				self.todos.push(newTodo);
				$input.val('');
				self.render();
			});

		},
		update : function(event) {
			var el = event.target;
			var $el = $(el);
			var val = $el.val().trim();

			if (!val) {
				this.destroy(el);
				return;
			}
			if ($el.data('abort')) {
				$el.data('abort', false);
			} else {
				var self = this;
				self.todos[self.getIndexFromEl(el)].title = val;
				service.updateTodo(self.todos[self.getIndexFromEl(el)]).done(
						function() {
							self.render();
						});
			}

		},
		editingMode : function(event) {
			var $input = $(event.target).closest('li').addClass('editing')
					.find('.edit');
			$input.val($input.val()).focus();
		},
		editingKeyup : function(event) {
			if (event.which === ENTER_KEY) {
				event.target.blur();
			}
			if (event.which === ESC_KEY) {
				$(event.target).data('abort', true).blur();
			}
		},
		destroy : function(event) {
			var id = $(event.target).closest('li').data('id');
			console.log(id);
			var self = this;
			service.deleteTodo(id).done(function() {
				var index = self.getIndexFromEl(event.target);
				self.todos.splice(index, 1);
				self.render();
			});
		},
		destroyCompleted : function() {
			this.todos = this.todos.filter(function(todo) {
				return !todo.completed;
			});
			console.dir(this.todos);
			this.render();
		}

	};

	App.init();

});