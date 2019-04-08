import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routes from './routes';

import HomeComponent from './components/home';

export default angular
  .module('app.home', [uirouter])
  .config(routes)
  .component(HomeComponent.selector, HomeComponent).name;
