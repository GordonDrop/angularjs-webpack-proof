import angular from 'angular';
import uirouter from '@uirouter/angularjs';
import routes from './routes';
import clickableBtnDirective from './directives/clickable-btn';

import AboutComponent from './components/about';

export default angular
  .module('app.about', [uirouter])
  .config(routes)
  .component(AboutComponent.selector, AboutComponent)
  .directive(...clickableBtnDirective).name;
