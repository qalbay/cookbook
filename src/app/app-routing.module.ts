import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    data: {
      animation: 'DashboardPage',
    },
    loadChildren: () =>
      import('./components/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'social',
    data: {
      animation: 'SocialPage',
    },
    loadChildren: () =>
      import('./components/social-card/social-card.module').then(
        (m) => m.SocialCardModule
      ),
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
