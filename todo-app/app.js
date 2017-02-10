$(function () {

    const ENTER_KEY = 13;

    const service = {
        getTodos: function () {
            let todos = [];
            todos.push({
                id: 1,
                title: 'item-1',
                completed: true
            });
            return todos;
        }
    };


    // App

    const App = {

        init: function () {
            this.todos = service.getTodos();
            this.bindEvents();
            this.render();
        },
        bindEvents: function () {
            $('.new-todo').on('keyup', this.create.bind(this));
        },
        render: function () {
            let todos = this.todos;

            $('.main').toggle(todos.length > 0);
            var todoList = $('.todo-list');

            // todoList.children().remove();
            // todos.forEach(function (todo) {
            //     let todoTemplate = `
            //      <li>
            //         <div class="view">
            //             <input type="checkbox" class="toggle" ${todo.completed?'checked':''}/>
            //             <label>${todo.title}</label>
            //             <button class="destroy"></button>
            //         </div>
            //     </li>
            // `;
            //     todoList.append(todoTemplate);
            // });


        },
        create: function (event) {
            var $input = $(event.target);
            var val = $input.val().trim();
            if (event.which !== ENTER_KEY || !val) {
                return;
            }

            var newTodo = {
                id: this.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), 0) + 1,
                title: val,
                completed: false
            }

            this.todos.push(newTodo);
            console.log(this.todos);
            $input.val('');

            this.render();

        }


    };

    App.init();



});