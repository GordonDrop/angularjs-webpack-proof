import template from './navigation.template.html';

class NavigationController {
  constructor() {
    this.states = {
      'app.about': 'About',
      'app.home': 'Home',
    };
  }
}

export default {
  template,
  selector: 'navigation',
  controller: NavigationController,
};
