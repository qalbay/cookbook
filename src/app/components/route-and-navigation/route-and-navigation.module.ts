import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouteAndNavigationRoutingModule } from './route-and-navigation-routing.module';
import { RouteAndNavigationComponent } from './route-and-navigation.component';


@NgModule({
  declarations: [
    RouteAndNavigationComponent
  ],
  imports: [
    CommonModule,
    RouteAndNavigationRoutingModule,
    ReactiveFormsModule
  ]
})
export class RouteAndNavigationModule { }
