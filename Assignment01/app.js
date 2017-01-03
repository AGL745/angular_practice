(function (){
'use strict';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController)
    //Prevents errors during code minification
  LunchCheckController.$inject = ['$scope'];

  //Binding to scope
  function LunchCheckController($scope){
  $scope.name = "";
  $scope.printValue = "";
  var messageOutput = "";

  $scope.checkEnteredItems = function() {
    stringSplitter($scope.name);
    $scope.printValue = messageOutput;
  }

  function stringSplitter(string){
    //Split input string in pieces
    //Iterate through string
    //Find the commas in the string
    //Track where commas exist
    //Join words at commas

    var newString = string.split("");
    var commaCount = 0;
    var item1 = "";
    console.log(string);
    console.log(newString);
    if (string == ""){
       messageOutput = "Please Input Your Items";
    }

    for (var i =0; i < newString.length; i++) {
      if (newString[i] == ","){
         commaCount += 1;
         if (commaCount == 1){
           item1 = newString.slice(0,i).join;
         }
         messageOutput = "Enjoy";
      }
      console.log(messageOutput);
      console.log(item1);
      return messageOutput;
    };
  }

  }
})();
