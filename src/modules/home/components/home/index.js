import template from './home.template.html';

class HomeController {
  constructor() {
    this.username = 'User';
  }
}

export default {
  template,
  selector: 'home',
  controller: HomeController,
};
