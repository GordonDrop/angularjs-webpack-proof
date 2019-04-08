import '@babel/polyfill';
import angular from 'angular';
import AppCore from './modules/core';
import Home from './modules/home';
import About from './modules/about';

angular.module('app', [AppCore, Home, About]);
