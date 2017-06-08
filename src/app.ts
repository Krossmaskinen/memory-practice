import {autoinject} from 'aurelia-framework';
import {Router, RouterConfiguration} from 'aurelia-router';

@autoinject
export class App {
  public title = 'Memory Practice';

  constructor(private router: Router) {
  }

  public configureRouter(config: RouterConfiguration) {
    config.title = 'Memory Practice';

    config.map([
        { route: ['', 'home'], moduleId: 'home', title: 'Hem', nav: true }
    ]);

    console.log(this.router.routes);
  }
}
