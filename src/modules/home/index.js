import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routes from './routes';

import HomeComponent from './components/home';
import AdderFactory from './factory/adder.factory';

export default angular
  .module('app.home', [uirouter])
  .config(routes)
  .factory(...AdderFactory)
  .component(HomeComponent.selector, HomeComponent).name;
