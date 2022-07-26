import { Component, OnInit } from '@angular/core';
import {
  Observable,
  Subject,
  Subscription,
  interval,
  BehaviorSubject,
  merge,
  forkJoin,
  throwError,
  of,
} from 'rxjs';
import { catchError, delay, map, startWith } from 'rxjs/operators';
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

  ngOnInit() {}

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

    subject.subscribe((res) => {
      console.log(res);
    });

    subject.subscribe((res) => {
      console.log(res);
    });

    subject.next(Math.random());

    subject.subscribe((res) => {
      console.log(res);
    });
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
      .pipe(map((res) => res))
      .subscribe((res) => {
        console.log(res);
      });
  }

  behaviourSubject() {
    const bsubject = new BehaviorSubject<number>(0);

    bsubject.subscribe((res) => {
      console.log(`sub 1: ${res}`);
    });

    bsubject.next(1);

    bsubject.subscribe((res) => {
      console.log(`sub 2: ${res}`);
    });
  }

  one = interval(500);
  two = interval(500);
  three = interval(500);

  merge() {
    const mergeExample = merge(this.one, this.two, this.three);

    mergeExample.subscribe((res) => {
      console.log(res);
    });
  }

  forkjoin() {
    const forkExample = forkJoin({
      google: ajax.getJSON('https://api.github.com/users/google'),
      microsoft: ajax.getJSON('https://api.github.com/users/microsoft'),
      users: ajax.getJSON('https://api.github.com/users'),
    }).pipe(catchError((error) => of(error)));

    forkExample.pipe(delay(1000)).subscribe((res) => {
      console.log(res);
    });
  }
}
