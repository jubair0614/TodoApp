/**
 * Created by JUBU on 2/19/2017.
 */

(function (window) {
    'use strict';
    function View() {
        this.viewDivToAddTodo = function() {
            var addTodoDiv = document.getElementById('todo-form');
            addTodoDiv.classList.remove('todo-hidden');
        }

        this.getInputData = function(){
            var title = document.getElementById('todo-title').value;
            var description = document.getElementById('todo-description').value;
            return {
                'title' : title,
                'description' : description
            };
        }

        this.hideDivToAddTodo = function() {
            var addTodoDiv = document.getElementById('todo-form');
            addTodoDiv.classList.add('todo-hidden');
            document.getElementById('todo-title').value = "";
            document.getElementById('todo-description').value = "";
            return addTodoDiv;
        }

        this.searchContent = function (){
            var searchText = document.getElementById('search_input').value;
            return searchText;
        }

        this.getState = function (){
            var allStatus = document.getElementsByName('status');
            for(var i=0; i<allStatus.length; i++){
                 if(allStatus[i].checked){
                     return allStatus[i].value;
                 }
            }
        }

        function createCheckBox(){
            var checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.classList.add('m-r-5px');
            checkBox.classList.add('checkbox');
            checkBox.onclick = function() {
                var dada = this.parentNode.parentNode;
                var id = dada.getAttribute("data-id");

                controller.checkedOptionClick(id);
            };

            return checkBox;
        }

        function createEditButton(){
            var editButton = document.createElement('button');
            editButton.classList.add('m-r-5px');

            var fontEdit = document.createElement('i');
            fontEdit.classList.add('fa');
            fontEdit.classList.add('fa-pencil-square-o');
            fontEdit.setAttribute('aria-hidden', true);

            editButton.appendChild(fontEdit);
            editButton.setAttribute('id', 'myBtn');

            editButton.onclick = function() {
                var dada = this.parentNode.parentNode;
                var id = dada.getAttribute("data-id");
                controller.editOptionClick(id);
            };

            return editButton;
        }

        function createDeleteButton(){
            var deleteButton = document.createElement('button');
            deleteButton.classList.add('m-r-5px');

            var fontDelete = document.createElement('i');
            fontDelete.classList.add('fa');
            fontDelete.classList.add('fa-trash-o');
            fontDelete.setAttribute('aria-hidden', true);

            deleteButton.appendChild(fontDelete);
            deleteButton.onclick = function() {
                var dada = this.parentNode.parentNode;
                var id = dada.getAttribute("data-id");
                controller.deleteOptionClick(id);
            };

            return deleteButton;
        }

        function createDivButtons(){
            var divButtons = document.createElement('div');
            divButtons.classList.add('position-top-right');
            divButtons.classList.add('item_option');

            divButtons.appendChild(createCheckBox());
            divButtons.appendChild(createEditButton());
            divButtons.appendChild(createDeleteButton());

            return divButtons;
        }

        function createSaveButton(){
            var saveButton = document.createElement('button');
            saveButton.classList.add('m-r-5px');
            saveButton.innerHTML = 'Save';

            return saveButton;
        }

        function createCancelButton(){
            var cancelButton = document.createElement('button');
            cancelButton.classList.add('m-r-5px');
            cancelButton.innerHTML = 'Cancel';

            return cancelButton;
        }

        function todoToDomElement(todo){
            var todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-item');
            todoDiv.classList.add('p-10px');
            todoDiv.classList.add('box-shadow');
            todoDiv.classList.add('m-b-15px');
            todoDiv.classList.add('position-relative');
            todoDiv.setAttribute("data-id", todo.id);
            if(todo.status == 'done') todoDiv.classList.add('done-todo');
            if(todo.status == 'pending' && todoDiv.classList.contains('done-todo')){
                todoDiv.classList.remove('done-todo');
            }
            var titleText = document.createElement('h4');

            titleText.innerText = todo.title;
            var descriptionText = document.createElement('p');
            descriptionText.innerText = todo.description;
            todoDiv.appendChild(createDivButtons());
            todoDiv.appendChild(titleText);
            todoDiv.appendChild(descriptionText);

            return todoDiv;
        }

        function updateTodo(todo){
            return updatedTodoView(todo);
        }

        this.allTodoView = function(allTodo) {
            var listContainer = document.getElementById('todos-view');
            listContainer.innerHTML = '';

            for (var i= 0; i<allTodo.length; i++){
                var domElement = todoToDomElement(allTodo[i]);
                listContainer.appendChild(domElement);
            }
        }
    }
    window.view = new View();
})(window);

