import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductserService {

  constructor() { }

  sharedbehaiservice  = new BehaviorSubject('');
  sharedeleservice  = new BehaviorSubject('');
  sendtofashion(msg:any){
    this.sharedbehaiservice.next(msg);
  }
  sendtoelectronic(msg1:any){
    this.sharedeleservice.next(msg1);
  }
}
