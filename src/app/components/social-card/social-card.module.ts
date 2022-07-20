import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialCardRoutingModule } from './social-card-routing.module';
import { SocialCardComponent } from './social-card.component';
import { FacebookCardComponent } from './facebook-card/facebook-card.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@NgModule({
  declarations: [
    SocialCardComponent,
    FacebookCardComponent,
    TwitterCardComponent,
  ],
  imports: [
    CommonModule,
    SocialCardRoutingModule,
    SharedModule
  ],
})
export class SocialCardModule { }
