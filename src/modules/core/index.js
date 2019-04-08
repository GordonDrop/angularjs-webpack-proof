import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routes from './routes';

import AppComponent from './components/app';
import NavComponent from './components/navigation';

export default angular
  .module('app.core', [uirouter])
  .config(routes)
  .component(AppComponent.selector, AppComponent)
  .component(NavComponent.selector, NavComponent).name;
