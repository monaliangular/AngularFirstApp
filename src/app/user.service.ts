import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  userdata:string ='';
  constructor() { }
  getuserdata(user:any){
   console.log(user);
  }
}
