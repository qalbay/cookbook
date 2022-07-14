import { NotificationsService } from './../../services/notifications.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { first, Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() title = '';
  @Input() countFromParent = 0;
  @Output() changedCountFromChild = new EventEmitter<number>();
  notificationCount$!: Observable<number>

  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationCount$ = this.notificationsService.count$
  }

  addCount() {
    this.countFromParent++;
    this.changedCountFromChild.emit(this.countFromParent);
  }

  removeCount() {
    if (this.countFromParent == 0) {
      return
    }
    this.countFromParent--;
    this.changedCountFromChild.emit(this.countFromParent);
  }

  //service
  getCountValue(callback: any) {
    this.notificationCount$
      .pipe(
        first()
      ).subscribe(callback)
  }

  addServiceNotification() {
    this.getCountValue((countVal: number) => {
      this.notificationsService.setCount(++countVal)
    });
  }

  removeNotification() {
    this.getCountValue((countVal: number) => {
      if (countVal === 0) {
        return;
      }
      this.notificationsService.setCount(--countVal);
    })
  }

}
