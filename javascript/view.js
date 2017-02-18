/**
 * Created by JUBU on 2/19/2017.
 */

(function (window) {
    function View() {
        this.viewDivToAddTodo = function viewDivToAddTodo() {
            var addTodoDiv = document.getElementById('todo-form');
            addTodoDiv.classList.remove('todo-hidden');
            return addTodoDiv;
        }

        this.hideDivToAddTodo = function hideDivToAddTodo() {
            var addTodoDiv = document.getElementById('todo-form');
            addTodoDiv.classList.add('todo-hidden');
            return addTodoDiv;
        }

        this.allTodoView = function allTodoView(allTodo) {
            var listContainer = document.getElementById('todos-view');
            for (var i= 0; i<allTodo.length; i++){
                var content = listContainer.appendChild('div');
                content.classList.add('todo-item p-10px box-shadow m-b-15px position-relative');

                var btns_div = content.appendChild('div');
                btns_div.classList.add('position-top-right item_option');

                var status_check = btns_div.appendChild('input');
                status_check.type = 'text';
                status_check.id = allTodo[i].id;
                status_check.classList.add('m-r-5px');

                var btn_edit = btns_div.appendChild('button');
                var btn_delete = btns_div.appendChild('button');
            }
        }
    }

    window.view = new View();
})();
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
