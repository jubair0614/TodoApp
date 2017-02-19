/**
 * Created by JUBU on 2/19/2017.
 */


(function (window) {
    'use strict';
    function Controller() {
        this.addButtonClickEvent = function(){
            view.viewDivToAddTodo();
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

        this.optionClickListener = function (){
            this.searchButtonClickEvent();
        }

        this.editOptionClickListener = function (){

        }

        this.deleteOptionClickListener = function (){

        }

        /*this.checkedOptionClickListener = function (id){
            var checked = model.repository.changeStatus(id);
            var checkedTodo = model.repository.getSingleTodo(id);
            view.viewChangedState(checkedTodo);
            refreshView();
        }*/

        function filteredView(expectedTodos){
            view.allTodoView(expectedTodos);
        }

        function refreshView(){
            var todoList = model.repository.sortAllTodo();
            view.allTodoView(todoList);
        }
        refreshView();
    }

    window.controller = new Controller();
})(window);