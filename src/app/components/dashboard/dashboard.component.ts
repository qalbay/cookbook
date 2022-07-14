import { Component, OnInit, Output } from '@angular/core';

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
}
