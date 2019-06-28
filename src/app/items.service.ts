import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  items = [];
  private counter = new Subject<any>();

  constructor() { }

  addItem(item) {
    this.items.push(item);
    this.counter.next({counter : this.items.length});
  }

  getItems(): Observable<any> {
    return this.counter.asObservable();
  }  
}
