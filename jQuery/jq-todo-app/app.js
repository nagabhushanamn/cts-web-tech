$(function () {

    // ----------------------------------------------------------------    
    const ENTER_KEY = 13;
    const ESC_KEY = 27;
    // ----------------------------------------------------------------

    Handlebars.registerHelper('eq', function (a, b, options) {
        return a === b ? options.fn(this) : options.inverse(this);
    });
    // ----------------------------------------------------------------

    const service = {
        getTodos: function () {
            let todos = [];
            todos.push({
                id: 0,
                title: 'item-1',
                completed: true
            }, {
                id: 1,
                title: 'item-2',
                completed: false
            });
            return todos;
        }
    };
    // ----------------------------------------------------------------

    // App

    const App = {
        init: function () {
            this.todos = service.getTodos();
            this.todoTemplate = Handlebars.compile($('#todo-template').html());
            this.footerTemplate = Handlebars.compile($('#footer-template').html());
            this.bindEvents();

            // var self=this;            
            var router = new Router({
                '/todos/:filterBy': function (filterBy) {
                    this.filter = filterBy;
                    this.render();
                }.bind(this)
            });
            router.init('/todos/all');

        },
        bindEvents: function () {
            $('.new-todo').on('keyup', this.create.bind(this));
            $('.toggle-all').on('change', this.toggleAll.bind(this));
            $('.footer').on('click', '.clear-completed', this.destroyCompleted.bind(this));
            $('.todo-list')
                .on('change', '.toggle', this.toggle.bind(this))
                .on('click', '.destroy', this.destroy.bind(this))
                .on('dblclick', 'label', this.editingMode.bind(this))
                .on('keyup', '.edit', this.editingKeyup.bind(this))
                .on('focusout', '.edit', this.update.bind(this));
        },
        getFilteredTodos: function () {
            if (this.filter === 'active') {
                return this.getActiveTodos();
            }
            if (this.filter === 'completed') {
                return this.getCompletedTodos();
            }
            return this.todos;
        },
        getActiveTodos: function () {
            return this.todos.filter(function (todo) {
                return !todo.completed;
            });
        },
        getCompletedTodos: function () {
            return this.todos.filter(function (todo) {
                return todo.completed;
            });
        },
        render: function () {
            let todos = this.getFilteredTodos();
            $('.main').toggle(todos.length > 0);
            $('.todo-list').html(this.todoTemplate(todos));
            this.renderFooter();
        },
        renderFooter: function () {
            let todoCount = this.todos.length;
            let activeTodoCount = this.getActiveTodos().length;
            var template = this.footerTemplate({
                activeTodoCount,
                filter: this.filter,
                completedTodos: todoCount - activeTodoCount,
                pluralize: activeTodoCount == 1 ? 'item' : 'items'
            });
            $('.footer').toggle(todoCount > 0).html(template);
        },
        getIndexFromEl: function (el) {
            var todos = this.todos;
            var id = $(el).closest('li').data('id');
            var i = todos.length;
            while (i--) {
                if (todos[i].id == id) {
                    return i;
                }
            }
        },
        toggle: function (event) {
            var index = this.getIndexFromEl(event.target);
            this.todos[index].completed = !this.todos[index].completed;
            this.render();
        },
        toggleAll: function (event) {
            var isChecked = $(event.target).prop('checked');
            this.todos.forEach(function (todo) {
                todo.completed = isChecked;
            });
            this.render();
        },
        create: function (event) {
            var $input = $(event.target);
            var val = $input.val().trim();
            if (event.which !== ENTER_KEY || !val) {
                return;
            }

            var newTodo = {
                id: this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
                title: val,
                completed: false
            }

            this.todos.push(newTodo);
            console.log(this.todos);
            $input.val('');

            this.render();

        },
        update: function (event) {
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
                this.todos[this.getIndexFromEl(el)].title = val;
            }
            this.render();
        },
        editingMode: function (event) {
            var $input = $(event.target).closest('li').addClass('editing').find('.edit');
            $input.val($input.val()).focus();
        },
        editingKeyup: function (event) {
            if (event.which === ENTER_KEY) {
                event.target.blur();
            }
            if (event.which === ESC_KEY) {
                $(event.target).data('abort', true).blur();
            }
        },
        destroy: function (event) {
            var index = this.getIndexFromEl(event.target);
            this.todos.splice(index, 1);
            this.render();
        },
        destroyCompleted: function () {
            this.todos = this.todos.filter(function (todo) {
                return !todo.completed;
            });
            console.dir(this.todos);
            this.render();
        }

    };

    App.init();



});