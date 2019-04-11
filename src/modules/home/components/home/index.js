import template from './home.template.html';

class HomeController {
  num1 = null;

  num2 = null;

  result = null;

  username = 'User';

  /* @ngInject */
  constructor(AdderFactory) {
    this.AdderFactory = AdderFactory;
  }

  add() {
    this.result = this.AdderFactory.add(this.num1, this.num2);
  }
}

export default {
  template,
  selector: 'home',
  controller: HomeController,
};
