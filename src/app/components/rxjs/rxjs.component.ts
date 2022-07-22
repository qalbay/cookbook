import { Component, OnInit } from '@angular/core';
import { Observable, Subject, Subscription, interval } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  mySubscription!: Subscription;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.obs();
  }

  startInterval() {
    this.mySubscription = interval(1000).subscribe((x) => {
      console.log(x);
    });
  }

  stopInterval() {
    this.mySubscription.unsubscribe();
  }

  useObservable() {
    const myObservable = new Observable((obj) => obj.next(Math.random()));

    const a = myObservable.subscribe((a) => {
      console.log(a);
    });

    const b = myObservable.subscribe((b) => {
      console.log(b);
    });
  }

  useSubject() {
    const subject = new Subject();

    const c = subject.subscribe((c) => {
      console.log(c);
    });

    const d = subject.subscribe((d) => {
      console.log(d);
    });

    subject.next(Math.random());
  }

  fetchData() {
    this.getUsers();
    this.getUsers();
  }

  fetchDataBySubject() {
    const subject = new Subject();
    const data = ajax('https://jsonplaceholder.typicode.com/users');

    subject.subscribe((a) => {
      console.log(a);
    });
    subject.subscribe((a) => {
      console.log(a);
    });

    const result = data.subscribe(subject);
  }

  getUsers() {
    return this.http
      .get('https://jsonplaceholder.typicode.com/users')
      .subscribe((res) => {
        console.log(res);
      });
  }

  obs() {
    const subject=new Subject();

    subject.subscribe(a=>{
      console.log(a)
    })

    subject.subscribe(a=>{
      console.log(a)
    })

    subject.next(Math.random())
  }
}
