(function(angular){
  'use strict';
  angular.module('customDirectiveApp',[])
  .controller('customDirectiveCtrl',['$scope',function($scope){
    $scope.customer={
      name:"noufal",
      age:24
    };
  }])
  .directive('myCustomer',function(){
    return {
      template:'Name:{{customer.name}} - Age:{{customer.age}}'
    };
  });
})(window.angular);