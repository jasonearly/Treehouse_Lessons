angular.module("todoListApp", [])

.controller('mainCtrl', function($scope, dataService){
  $scope.addTodo = function(){
    var todo = {name: "This is a new todo."}
    $scope.todos.push(todo);
  };

  $scope.helloWorld = dataService.helloWorld;

  dataService.getTodos(function(response){
    console.log(response.data);
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    $scope.todos.splice($index, 1)
  };
  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  };



})

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

this.saveTodo = function(todo){
  console.log("The " + todo.name + " has been saved!")
  //other logic
};



// $scope.helloWorld = function() {
//   console.log("Hello there! this is the helloWorld controller function in the mainCtrl");
// };
});
