'use strict';
// this is the dataService
angular.module("todoListApp")
.service('dataService', function($http){
  this.helloWorld = function (){
    console.log('this is the data service method!');
  };

  this.getTodos = function(callback){
    $http.get('mock/todos.json')
    .then(callback)
  }


  this.deleteTodo = function(todo){
    console.log("The " + todo.name + " has been deleted!")
    //other logic
  };

  this.saveTodos = function(todos){
    console.log(todos.length + " todos have been saved!")
    //other logic
  };
});
