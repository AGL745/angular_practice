(function (){
'use strict';
  angular.module('myFirstApp', [])
  .controller('MyFirstController', function ($scope) {
    $scope.name = "Allan";
    $scope.sayHello = function() {
      return "Hello Coursera!";
    }
  })

  .controller('My2ndController', function($scope){
    $scope.application = "Current Input";
  });

})();
