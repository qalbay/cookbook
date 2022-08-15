import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RxjsService {

  constructor() { }

  search(val:string){
    console.log(val)
  }
}
