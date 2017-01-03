(function (){
'use strict';

  angular.module('MsgApp',[])
  .controller('MsgController', MsgController);

  MsgController.$inject = ['$scope', '$filter'];

  function MsgController($scope, $filter) {
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

  }
})();
