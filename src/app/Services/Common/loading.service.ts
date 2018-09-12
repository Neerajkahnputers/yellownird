import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { BoundCallbackObservable } from 'rxjs/observable/BoundCallbackObservable';

@Injectable()
export class LoadingService {

  constructor() { }
  loading:boolean = false;
  subject:BehaviorSubject<boolean> = new BehaviorSubject<boolean>(this.loading);
  loader$ : Observable<boolean>= this.subject.asObservable();
  toggleLoader(val:boolean){
     this.subject.next(val);
  }
}
