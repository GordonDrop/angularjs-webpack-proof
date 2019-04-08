/* @ngInject */
export default function routesConfig($stateProvider) {
  $stateProvider.state('app.about', {
    url: '/about/:username',
    template: '<about></about>',
  });
}
