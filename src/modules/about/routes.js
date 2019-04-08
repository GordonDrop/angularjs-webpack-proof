export default function routesConfig($stateProvider) {
  $stateProvider.state('app.about', {
    url: '/about',
    template: '<about></about>',
  });
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
