import '@babel/polyfill';
import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routesConfig } from './app.routes';

angular.module('app', [uirouter]).config(routesConfig);
