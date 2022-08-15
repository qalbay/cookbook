import { RouteAndNavigationComponent } from './route-and-navigation.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: RouteAndNavigationComponent,
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteAndNavigationRoutingModule { }
