export default function routesConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      abstract: true,
      template: '<app></app>',
    })
    .state('app.home', {
      url: '/',
      template: `
        <div><h1>Home</h1></div>
        <div>Hello, {{$ctrl.username}}</div>      
      `,
      controllerAs: '$ctrl',
      controller: function HomeController() {
        const $ctrl = this;
        $ctrl.username = 'User';
      },
    })
    .state('app.about', {
      url: '/about',
      controllerAs: '$ctrl',
      controller: function AboutController() {
        const $ctrl = this;
        $ctrl.username = 'User';
      },
      template: `
        <div><h1>About</h1></div>
        <div>Hello, {{$ctrl.username}}</div>`,
    });

  $urlRouterProvider.otherwise('/');
}

routesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
