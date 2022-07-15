import { NotificationsService } from './../../services/notifications.service';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
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
  @ViewChild('input') input!: ElementRef;
  array=[1,2,3,4,5]

  constructor(
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.notificationCount$ = this.notificationsService.count$
  }

  ngAfterViewInit() {
    this.input.nativeElement.focus();
    this.input.nativeElement.classList="form-control w-25";
    this.input.nativeElement.value=this.title;
  }

  ngOnChanges(changes: SimpleChanges) {
    //to detect the @Input changes from parent.

    const currentNotifications = changes['countFromParent'].currentValue
    if (changes['countFromParent'].firstChange) {
      console.log('current count: ', currentNotifications)
    }
    else {
      console.log('count changed to: ', currentNotifications)
    }
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
