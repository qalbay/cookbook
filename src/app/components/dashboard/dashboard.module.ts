import { ScrollToDirective } from './../../directives/scroll-to.directive';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';
import { ReadTimeDirective } from './../../directives/read-time.directive';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './../../directives/highlight.directive';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DashboardComponent,
    HighlightDirective,
    ReadTimeDirective,
    ScrollToDirective,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    SharedModule
  ],
})
export class DashboardModule {}
