(function (){
'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController)
  .filter('loves', LovesFilter);

  MsgController.$inject = ['$scope', '$filter', 'lovesFilter'];

  function MsgController($scope, $filter, lovesFilter) {
    $scope.name = "Allan";
    $scope.stateOfBeing = "hungry";
    $scope.cost = .45;

    $scope.feedAllan = function(){
      $scope.stateOfBeing = "fed";
    }
    $scope.sayMessage = function (){
      var msg = "Allan likes to eat cookies as snacks";
      var output = $filter('uppercase')(msg);
      return output;
    };

    $scope.sayLovesMessage = function (){
      var msg = "Allan likes to eat cookies as snacks";
      msg = lovesFilter(msg);
      return msg;
    };
  }

  function LovesFilter(){
    return function (input){
      input = input || "";
      input = input.replace("likes","loves");
      return input;
    };
  }
})();
