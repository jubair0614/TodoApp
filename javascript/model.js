/**
 * Created by JUBU on 2/19/2017.
 */

/**
 * Created by jubair.mostafa on 2/14/2017.
 */

(function (window){
    'use strict';


    function Model() {
        function Todo(title, description, status) {
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

        function Repository() {
            var idCounter = 0;
            this.initiate = function initiate() {
                var repository = [];

                setLocalStorageAllTodo(repository);
            }

            this.addTodo = function addTodo(singleTodo){
                singleTodo.id = idCounter+1;
                idCounter++;
                var allTodo = getLocalStorageAllTodo();
                allTodo.push(singleTodo);
                setLocalStorageAllTodo(allTodo);
            }
            setMaxId();

            this.deleteTodo = function (id){
                var todos = getLocalStorageAllTodo();
                var updatedTodos = [];
                for(var i=0; i <todos.length; i++) {
                    if (todos[i].id == id) {
                        console.log(todos[i]);
                        delete todos[i];
                    }
                    else updatedTodos.push(todos[i]);
                }
                setLocalStorageAllTodo(updatedTodos);
            }

            this.updateTodo = function updateTodo(id, updatedTodo){
                var todos = getLocalStorageAllTodo();

                todos.forEach(function loop(item) {
                    if(item.id == id) {
                        item.title = updatedTodo.title;
                        item.description = updatedTodo.description;
                        item.status = updatedTodo.status;
                    }
                })

                setLocalStorageAllTodo(todos);
            }

            this.getSingleTodo = function getSingleTodo(id){
                var todos = getLocalStorageAllTodo();
                var currentTodo;
                todos.forEach(function (item) {
                    if(item.id == id) currentTodo = item;
                })
                return currentTodo;
            }
            this.getALlTodo = function getAllTodo(){
                return getLocalStorageAllTodo();
            }


            function getLocalStorageAllTodo() {
                var data = JSON.parse(localStorage.getItem('todoList'));
                if(data == null) return [];
                else return data;
            }

            function setMaxId(){
                var allData = getLocalStorageAllTodo();
                allData.forEach(function (item){
                    if(item.id > idCounter) idCounter = item.id;
                });
            }

            function setLocalStorageAllTodo(todoList) {
                localStorage.setItem('todoList', JSON.stringify(todoList));
            }

            this.sortAllTodo = function (){
                var allTodo = getLocalStorageAllTodo();
                allTodo.sort(function (firstTodo, secondTodo){
                    return firstTodo.title.localeCompare(secondTodo.title);
                });
                return allTodo;
            }

            function sortSomeTodo(todos){
                todos.sort(function (firstTodo, secondTodo){
                    return firstTodo.title.localeCompare(secondTodo.title);
                })
                return todos;
            }

            this.searchText = function search(content){
                var matchingTodos = [];
                var todoList = getLocalStorageAllTodo();
                for(var i=0; i<todoList.length; i++){
                    var title = todoList[i].title;
                    var description = todoList[i].description;

                    if(title.search(content) >= 0 || description.search(content) >= 0){
                        matchingTodos.push(todoList[i]);
                    }
                }

                return matchingTodos;
            }

            this.updateStatus = function (id){
                var allTodo = getLocalStorageAllTodo();
                allTodo.forEach(function (item) {
                    if(item.id == id){
                        console.log("current status: " + item.status);
                        if(item.status == 'pending') item.status = 'done';
                        else item.status = 'pending';
                        console.log("updated status: " + item.status);
                    }
                })
                setLocalStorageAllTodo(allTodo);
            }

            this.getFilterTodos = function(state){
                var expectedTodos = [];
                if(state == 'all'){
                    return sortSomeTodo(getLocalStorageAllTodo());
                }
                else {
                    var allTodo = getLocalStorageAllTodo();
                    allTodo.forEach(function (item){
                        if(item.status == state){
                            expectedTodos.push(item);
                        }
                    })
                    return sortSomeTodo(expectedTodos);

                }
            }

        }

        this.repository = new Repository();
        this.Todo = Todo;

    }

    window.model = new Model();
    console.log(window.model);

})(window);
