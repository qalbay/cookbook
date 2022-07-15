import { Component, OnInit, Output, ViewChild, ElementRef } from '@angular/core';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  title = "Dashboard"
  notificationCount = 10;
  constructor() { }

  ngOnInit(): void {
  }

  updateCount(count: number) {
    this.notificationCount = count
  }

  addItemInChildArray(navbar: NavbarComponent) {
    navbar.array.push(navbar.array.length + 1);
  }

  removeItemInChildArray(navbar: NavbarComponent) {
    if (navbar.array.length == 1) {
      return
    }
    navbar.array.pop();
  }
}
