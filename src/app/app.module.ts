import { SharedModule } from 'src/app/shared/shared.module';
import { SocialCardModule } from './components/social-card/social-card.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { FormarrrayComponent } from './components/formarrray/formarrray.component';


@NgModule({
  declarations: [AppComponent, RxjsComponent, FormarrrayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    SocialCardModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}),
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
