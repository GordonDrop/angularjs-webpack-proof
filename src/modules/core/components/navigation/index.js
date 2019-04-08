import template from './navigation.template.html';

class NavigationController {
  constructor() {
    this.states = {
      'app.about({username: "Bob"})': 'About Bob',
      'app.about({username: "Alice"})': 'About Alice',
      'app.home': 'Home',
    };
  }
}

export default {
  template,
  selector: 'navigation',
  controller: NavigationController,
};
