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

        /*this.viewChangedState = function (checkedTodo){
            var todoDom = todoToDomEelement(checkedTodo);
            var title = todoDom.getElementsByTagName('h4');
            title.style.textDecoration = 'line-through';
            var description = todoDom.getElementsByTagName('p');
            description.style.textDecoration = 'line-through';
            return todoDom;
        }*/

        function createCheckBox(id){
            var checkBox = document.createElement('input');
            checkBox.type = 'checkbox';
            checkBox.classList.add('m-r-5px');
            //checkBox.onclick(controller.checkedOptionClickListener(id));
            return checkBox;
        }
        function createEditButton(id){
            var editButton = document.createElement('button');
            editButton.classList.add('m-r-5px');

            var fontEdit = document.createElement('i');
            fontEdit.classList.add('fa');
            fontEdit.classList.add('fa-pencil-square-o');
            fontEdit.setAttribute('aria-hidden', true);

            editButton.appendChild(fontEdit);
            return editButton;
        }

        function createDeleteButton(id){
            var deleteButton = document.createElement('button');
            deleteButton.classList.add('m-r-5px');

            var fontDelete = document.createElement('i');
            fontDelete.classList.add('fa');
            fontDelete.classList.add('fa-trash-o');
            fontDelete.setAttribute('aria-hidden', true);

            deleteButton.appendChild(fontDelete);
            return deleteButton;
        }
        function createDivButtons(id){
            var divButtons = document.createElement('div');
            divButtons.classList.add('position-top-right');
            divButtons.classList.add('item_option');

            divButtons.appendChild(createCheckBox(id));
            divButtons.appendChild(createEditButton(id));
            divButtons.appendChild(createDeleteButton(id));
            return divButtons;
        }

        function todoToDomEelement(todo){
            var todoDiv = document.createElement('div');
            todoDiv.classList.add('todo-item');
            todoDiv.classList.add('p-10px');
            todoDiv.classList.add('box-shadow');
            todoDiv.classList.add('m-b-15px');
            todoDiv.classList.add('position-relative');

            var titleText = document.createElement('h4');
            titleText.innerText = todo.title;

            var descriptionText = document.createElement('p');
            descriptionText.innerText = todo.description;
            todoDiv.appendChild(createDivButtons(todo.id));
            todoDiv.appendChild(titleText);
            todoDiv.appendChild(descriptionText);

            todoDiv.id = todo.id;

            return todoDiv;
        }
        this.allTodoView = function(allTodo) {
            var listContainer = document.getElementById('todos-view');
            listContainer.innerHTML = '';

            for (var i= 0; i<allTodo.length; i++){
                var domElement = todoToDomEelement(allTodo[i]);
                listContainer.appendChild(domElement);
            }
        }
    }
    window.view = new View();
})(window);
/*


'<div class="todo-item p-10px box-shadow m-b-15px position-relative">' +
'<div class="position-top-right item_option">' +
'<input type="checkbox" id="' + temp + '"class="m-r-5px" onclick="markItem(' + data[i].id + ')">' + '</input>' +
'<button id="' + temp1 + '"class="m-r-5px" onclick="editItem(' + data[i].id + ')"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>' +
'<button id="' + temp2 + '"class="m-r-5px" onclick="deleteItem(' + data[i].id + ')"><i class="fa fa-trash-o" aria-hidden="true"></i></button>' +
'</div>' +
'<h4>' + data[i].title + '</h4>' +
'<p>' + data[i].description + '</p>' +
'</div>' +

    */
