export default function routesConfig($stateProvider) {
  $stateProvider.state('app.home', {
    url: '/',
    template: '<home></home>',
  });
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
