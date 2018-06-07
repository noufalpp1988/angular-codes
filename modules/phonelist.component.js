(function (angular) {
  'use strict';
  angular.module('phonecatApp')
    .component('phonelist', {
      template:
        '<ul>' +
        '<li ng-repeat="phone in $ctrl.phones">' + // $ctrl used instead of $scope for avoiding any conflicts
        '<span>{{phone.name}}</span>' +
        '<p>{{phone.rate}}</p>' +
        '</li>' +
        '</ul>',
      controller: function PhoneListController() {
        this.phones = [
          {
            name: 'sony',
            rate: 23232
          },
          {
            name: 'redmi',
            rate: 10000
          },
          {
            name: 'lg',
            rate: 3433
          }
        ];
      }
    });
})(window.angular);