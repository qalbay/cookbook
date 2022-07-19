import { Component, OnInit } from '@angular/core';
import { socialCardType } from 'src/app/constants/cards';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  group,
} from '@angular/animations';

@Component({
  selector: 'app-social-card',
  templateUrl: './social-card.component.html',
  styleUrls: ['./social-card.component.scss'],
  animations: [
    trigger('socialBtnText', [
      state(
        'btn-active-text',
        style({
          width: '80px',
          visibility: 'visible',
        })
      ),
      state(
        'btn-inactive-text',
        style({
          width: '0px',
          visibility: 'hidden',
        })
      ),
      transition('btn-active-text =>btn-inactive-text', [
        group([
          animate(
            '0s',
            style({
              width: '80px',
            })
          ),
          animate(
            '0s',
            style({
              visibility: 'hidden',
            })
          ),
        ]),
      ]),

      transition('btn-inactive-text => btn-active-text', [
        group([
          animate(
            '0s',
            style({
              width: '80px',
            })
          ),
          animate(
            '0s',
            style({
              visibility: 'visible',
            })
          ),
        ]),
      ]),
    ]),
  ],
})
export class SocialCardComponent implements OnInit {
  cardType!: socialCardType;
  selectedCardType: socialCardType = 1;

  constructor() {}

  ngOnInit(): void {}

  setCardType(type: socialCardType) {
    this.selectedCardType = type;
  }
}
