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
            view.allTodoView(matchedTodos);
        }

        this.editOptionClick = function (id){
            var editTodo = model.repository.getSingleTodo(id);

            var modal = document.getElementById('myModal');

            // Get the button that opens the modal
            var btn = document.getElementById("myBtn");

            // Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];

            // When the user clicks the button, open the modal
            btn.onclick = function() {
                modal.style.display = "block";
            }

            // When the user clicks on <span> (x), close the modal
            span.onclick = function() {
                modal.style.display = "none";
            }

            // When the user clicks anywhere outside of the modal, close it
            window.onclick = function(event) {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            }

            view.updatedTodoView(editTodo);
        }

        this.deleteOptionClick = function (id){
            model.repository.deleteTodo(id);
            refreshView();
        }

        this.checkedOptionClick = function (id){
            model.repository.updateStatus(id);
            refreshView();
        }


        this.optionClickListener = function (){
            refreshView();
        }

        function refreshView(){
            var whichOption = view.getState();
            var selectedOptionData = model.repository.getFilterTodos(whichOption);
            view.allTodoView(selectedOptionData);
        }

        refreshView();
    }

    window.controller = new Controller();
})(window);
