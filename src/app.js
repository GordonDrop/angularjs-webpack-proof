import angular from 'angular';

angular.module('app', [])
  .controller('HomeController', function () {
    var $ctrl = this;

    $ctrl.greeting = 'Hello world!';
    $ctrl.username = 'Username';
  });
