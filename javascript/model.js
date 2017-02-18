/**
 * Created by JUBU on 2/19/2017.
 */

/**
 * Created by jubair.mostafa on 2/14/2017.
 */

(function (window){

    function Model() {
        var idCounter = 1;
        this.Todo = function Todo(title, description, status) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.status = status;

            this.setTitle = function(title){
                this.title = title;
            }

            this.getTitle = function () {
                return this.title;
            }

            this.setDescription = function (description){
                this.description = description;
            }

            this.getDescription = function () {
                return this.description;
            }

            this.setStatus = function (status){
                this.status = status;
            }

            this.getStatus = function () {
                return this.status;
            }

            this.id = function getId(){
                var id = idCounter;
            }

            function incrementCounter() {
                idCounter++;
            }
        }

        this.Repository = function Repository() {
            this.initiate = function initiate() {
                var repository = [];

                setLocalStorageAllTodo(repository);
            }

            this.addTodo = function addTodo(singleTodo){
                var allTodo = getLocalStorageAllTodo();
                allTodo.push(singleTodo);
                setLocalStorageAllTodo(allTodo);
            }

            this.deleteTodo = function deleteTodo(id){
                var todos = getLocalStorageAllTodo();

                todos.forEach(function loop(item) {
                    if(item.id == id) {
                        delete item;
                        return;
                    }
                })
                setLocalStorageAllTodo(todos);
            }

            this.updateTodo = function updateTodo(id, updatedTodo){
                var todos = getLocalStorageAllTodo();

                todos.forEach(function loop(item) {
                    if(item.id == id) {
                        item = updatedTodo;
                        return;
                    }
                })
                setLocalStorageAllTodo(todos);
            }

            this.getSingleTodo = function getSingleTodo(id){
                var todos = getLocalStorageAllTodo();
                var currentTodo;
                todos.forEach(function (item) {
                    if(item.id == id) return item;
                })
            }
            this.getALlTodo = function getAllTodo(){
                return getLocalStorageAllTodo();
            }


            function getLocalStorageAllTodo() {
                return localStorage.getItem(JSON.parse('todoList'));
            }

            function setLocalStorageAllTodo(todoList) {
                localStorage.setItem('todoList', JSON.stringify('todoList'));
            }

            function sortTodos(allTodo){
                allTodo.sort(function (firstTodo, secondTodo){
                    return firstTodo.title.localeCompare(secondTodo.title);
                })
                return allTodo;
            }

            function markItem(id){
                var data = getLocalStorageData();
                data = JSON.parse(data);
                console.log("mark item id: " + id);
                data.forEach(function (item){
                    if(item.id == id) {
                        if(item.status == "pending") item.status = "done";
                        else item.status = "pending";
                    }
                })
                localStorage.setItem('todoList', JSON.stringify(data));
            }

            function deleteItem(id){
                var data = getLocalStorageData();
                data = JSON.parse(data);
                console.log("delete item id: " + id);

                data.forEach(function (item){
                    if(item.id == id) {
                        var temp = data.indexOf(item);
                        console.log(temp);
                        data.splice(temp, 1);
                    }
                })
                localStorage.setItem('todoList', JSON.stringify(data));
                viewTodo();
            }

            function search(){
                var search_item = document.getElementById('search_input').value;

                var todoList = JSON.parse(localStorage.getItem('todoList'));
                var matchingTodos = [];
                for(var i=0; i<todoList.length; i++){
                    var title = todoList[i].title;
                    var description = todoList[i].description;

                    console.log(typeof (title) + " " + typeof (description));
                    if(title.search(search_item) >= 0 || description.search(search_item) >= 0){
                        matchingTodos.push(todoList[i]);
                    }
                }
                viewTodos(matchingTodos);
            }

        }

    }

    window.model = new Model();

})(window);
