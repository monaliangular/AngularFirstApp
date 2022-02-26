import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
   msg:string = '';
   signup = new FormGroup({
     'firstname': new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(15), Validators.pattern("^[a-zA-Z]*$")]),
     'lastname': new FormControl('', Validators.required),
     'city': new FormControl('',Validators.required)
   })
  constructor(private user:UserService) { }
  SendData(){
  if(this.signup.valid){
    this.user.getuserdata(this.signup.value)
  }else{
    this.msg = 'Invalid'
  }
  
  }

  ngOnInit(): void {
  }

}
