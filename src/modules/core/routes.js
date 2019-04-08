export default function routesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider.state('app', {
    abstract: true,
    template: '<app></app>',
  });

  $urlRouterProvider.otherwise('/');
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
