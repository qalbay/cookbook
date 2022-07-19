import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialCardRoutingModule } from './social-card-routing.module';
import { SocialCardComponent } from './social-card.component';
import { FacebookCardComponent } from './facebook-card/facebook-card.component';
import { TwitterCardComponent } from './twitter-card/twitter-card.component';


@NgModule({
  declarations: [
    SocialCardComponent,
    FacebookCardComponent,
    TwitterCardComponent
  ],
  imports: [
    CommonModule,
    SocialCardRoutingModule
  ],
})
export class SocialCardModule { }
