import template from './about.template.html';

class AboutController {
  constructor() {
    this.username = 'User';
  }
}

export default {
  template,
  selector: 'about',
  controller: AboutController,
};
