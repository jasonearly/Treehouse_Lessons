//directive structure
// called in HTML as <hello-word></hello-world> or <div hello-world></div>
angular.module('todoListApp')
.directive('helloWorld', function() {
  return {
    template: "This is the hello world directive!",
    restrict: "E" //as an element only
  };
});
