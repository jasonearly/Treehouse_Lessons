'use strict';
angular.module("todoListApp")
.directive('todos', function(){
  return {
    templateUrl: 'templates/todos.html',
    controller: 'mainCtrl',
    replace: true
    // replace gets rid of custom directives at load
  }
})
