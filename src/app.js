import '@babel/polyfill';
import angular from 'angular';

function HomeController() {
  const $ctrl = this;

  $ctrl.greeting = 'Hello world';
  $ctrl.username = 'Username';
}

angular.module('app', [])
  .controller('HomeController', HomeController);
