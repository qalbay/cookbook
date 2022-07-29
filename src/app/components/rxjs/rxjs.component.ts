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
  from,
  partition,
  fromEvent,
} from 'rxjs';
import {
  catchError,
  debounceTime,
  delay,
  filter,
  map,
  startWith,
  switchMap,
  take,
  takeWhile,
} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ajax } from 'rxjs/ajax';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.scss'],
})
export class RxjsComponent implements OnInit {
  mySubscription!: Subscription;
  isComponentAlive!: boolean;
  search = new FormControl('');

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.isComponentAlive = true;
    this.searchData();

    const source= of(1, 2, 3, 4, 5);

    source
      .pipe(takeWhile(val => val > 4))
      // log: 1,2,3,4
      .subscribe((val) => console.log(val));
  }

  searchData() {
    this.search.valueChanges.pipe(debounceTime(1000)).subscribe((res) => {
      console.log(res);
    });
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
    this.isComponentAlive = true;

    const mergeExample = merge(this.one, this.two, this.three);

    mergeExample
      .pipe(takeWhile(() => this.isComponentAlive))
      .subscribe((res) => {
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

  destroyComponent() {
    this.isComponentAlive = false;
  }
}
