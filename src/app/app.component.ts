import { Component, ViewChild } from '@angular/core';
import { ChildrenOutletContexts, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterOutlet } from '@angular/router';
import { slideInAnimation } from './constants/animations';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [slideInAnimation],
})
export class AppComponent {
  @ViewChild(RouterOutlet) routerOutlet: any;
  isLoadingRoute = false;

  constructor(
    private contexts: ChildrenOutletContexts,
    private router: Router
  ) {
    this.showLoaderConditionally()
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }

  showLoaderConditionally() {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isLoadingRoute = true;
      }
      if (
        event instanceof NavigationEnd ||
        event instanceof NavigationError ||
        event instanceof NavigationCancel
      ) {
        this.isLoadingRoute = false;
      }
    });
  }
}
