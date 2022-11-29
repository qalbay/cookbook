import { FormarrrayComponent } from './components/formarrray/formarrray.component';
import { AuthGuard } from './guards/auth.guard';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NgModule, Component } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
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
    canActivate: [AuthGuard],
  },
  {
    path: 'navigation',
    data: {
      animation: 'NavigationPage',
    },
    loadChildren: () =>
      import(
        './components/route-and-navigation/route-and-navigation.module'
      ).then((m) => m.RouteAndNavigationModule),
  },
  {
    path: 'rxjs',
    component: RxjsComponent,
  },
  {
    path: 'formarray',
    component: FormarrrayComponent,
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
