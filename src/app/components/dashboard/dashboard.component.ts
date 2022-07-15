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

  //this VewChild has nothing to do with tempelate variable
  @ViewChild(NavbarComponent) navbarr!: NavbarComponent;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.addItemInChildArrayUsingViewChild();
  }

  updateCount(count: number) {
    this.notificationCount = count
  }

  addItemInChildArrayUsingTemplateVariable(navbar: NavbarComponent) {
    navbar.array.push(navbar.array.length + 1);
  }

  removeItemInChildArrayUsingTemplateVariable(navbar: NavbarComponent) {
    if (navbar.array.length == 1) {
      return
    }
    navbar.array.pop();
  }

  addItemInChildArrayUsingViewChild() {
    console.log(this.navbarr)
    this.navbarr.array.push(this.navbarr.array.length + 1);
  }
}
