import { RouterModule } from '@angular/router';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SocialCardModule } from './components/social-card/social-card.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { routes } from './app-routing.module';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, RxjsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SocialCardModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
