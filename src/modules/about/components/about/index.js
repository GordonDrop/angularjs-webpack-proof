import template from './about.template.html';

class AboutController {
  /* @ngInject */
  constructor($stateParams) {
    this.username = $stateParams.username;
  }
}

export default {
  template,
  selector: 'about',
  controller: AboutController,
};
