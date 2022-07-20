import { TwitterCardComponent } from './twitter-card/twitter-card.component';
import { FacebookCardComponent } from './facebook-card/facebook-card.component';
import { SocialCardComponent } from './social-card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: SocialCardComponent,
  },
  {
    path: 'facebook',
    component: FacebookCardComponent,
  },
  {
    path: 'twitter',
    component: TwitterCardComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SocialCardRoutingModule {}
