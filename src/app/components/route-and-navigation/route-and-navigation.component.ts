import { socialCardType } from 'src/app/constants/cards';
import { regexes } from './../../constants/regexes';
import { FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { debounceTime, takeWhile } from 'rxjs';

@Component({
  selector: 'app-route-and-navigation',
  templateUrl: './route-and-navigation.component.html',
  styleUrls: ['./route-and-navigation.component.scss'],
})
export class RouteAndNavigationComponent implements OnInit {
  search = new FormControl();
  searchValue!: string;
  isComponentAlive: boolean = false;

  value = 2;
  hoveredRating = 2;
  isMouseOver = false;

  constructor() {}

  ngOnInit() {}

  onRatingMouseEnter(rating: number) {
    this.hoveredRating = rating;
    this.isMouseOver = true;
  }

  onRatingMouseLeave() {
    this.hoveredRating = 0;
    this.isMouseOver = false;
  }

  selectRating(rating: number) {
    this.value = rating;
  }
}
