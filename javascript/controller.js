/**
 * Created by JUBU on 2/19/2017.
 */


(function (window) {
    
    function Controller() {
        this.generateTodoAddDiv = function generateTodoAddDiv(){
            var addTodoDiv = todoForm;
            addTodoDiv.classList.remove('todo-hidden');
            return addTodoDiv;
        }

        this.allTodoView = function allTodoView() {

        }

        this.doneTodoView = function allTodoView() {

        }

        this.pendingTodoView = function allTodoView() {

        }

        this.search = function search() {

        }

        this.listener = function listerner() {
            todoForm = document.getElementById('todo-form');
        }
    }

    window.controller = new Controller();

    controller.listener();
})(window);