/**
 * Created by JUBU on 2/19/2017.
 */

(function (window) {
    'use strict';
    function Controller() {
        this.addButtonClickEvent = function(){
            view.viewDivToAddTodo();
            init();
        }

        function init(){
            var checkBoxElem=document.getElementsByClassName('checkbox');
            [].forEach.call(checkBoxElem, function(element) {
                element.addEventListener('click', clickCheckBox);
            });
        }

        function clickCheckBox(){
            return this.id;
        }

        this.saveTaskButtonClickEvent = function(){
            var todo = view.getInputData();
            todo.status = 'pending';
            model.repository.addTodo(todo);
            view.hideDivToAddTodo();

            refreshView();
        }

        this.searchButtonClickEvent = function search() {
            var content = view.searchContent();
            var state = view.getState();
            var matchedTodos = model.repository.searchText(content);
            console.log(matchedTodos);
            var expectedTodos = model.repository.filterTodos(state, matchedTodos);
            filteredView(expectedTodos);
        }

        this.editOptionClickListener = function (){
            var editId = view.getEditTodoId();
            var editTodo = model.repository.getSingleTodo(editId);
            view.updateTodo(editTodo);
        }

        this.deleteOptionClickListener = function (){
            var deleteTodoId = view.getDeleteTodoId();
            model.repository.deleteTodo(deleteTodoId);
            refreshView();
        }

        this.checkedOptionClickListener = function (){
            var checkedTodoId = clickCheckBox();
            model.repository.updateStatus(checkedTodoId);
            refreshView();
        }

        function filteredView(expectedTodos){
            view.allTodoView(expectedTodos);
        }

        function refreshView(){
            var todoList = model.repository.sortAllTodo();
            view.allTodoView(todoList);
            init();
        }
        refreshView();
    }

    window.controller = new Controller();
})(window);