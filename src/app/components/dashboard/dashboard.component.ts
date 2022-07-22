import {
  Component,
  OnInit,
  Output,
  ViewChild,
  ElementRef,
} from '@angular/core';
import { interval, Subscription, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { NavbarComponent } from 'src/app/shared/navbar/navbar.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  title = 'Dashboard';
  notificationCount = 10;
  search = '';
  readTime!: string;

  //this VewChild has nothing to do with tempelate variable
  @ViewChild(NavbarComponent) navbarr!: NavbarComponent;
  @ViewChild('content') content!: ElementRef;
  mySubscription!: Subscription;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.addItemInChildArrayUsingViewChild();

    console.log(this.content);
  }

  updateCount(count: number) {
    this.notificationCount = count;
  }

  addItemInChildArrayUsingTemplateVariable(navbar: NavbarComponent) {
    navbar.array.push(navbar.array.length + 1);
  }

  removeItemInChildArrayUsingTemplateVariable(navbar: NavbarComponent) {
    if (navbar.array.length == 1) {
      return;
    }
    navbar.array.pop();
  }

  addItemInChildArrayUsingViewChild() {
    console.log(this.navbarr);
    this.navbarr.array.push(this.navbarr.array.length + 1);
  }

  showReadTime(readTimeStr: string) {
    this.readTime = readTimeStr;
  }

  ngOnDestroy() {
    this.mySubscription.unsubscribe();
  }
}
