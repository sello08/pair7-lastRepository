import { CustomerState } from './../../store/customer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { Users } from 'src/libs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserModel$!: Observable<Users | null>
  userInfo!:Users
  userName!:string |undefined
  password!:string |undefined
  constructor(  private store:Store<CustomerState>) { }

  ngOnInit(): void {
this.getName();

  }


  getName(){
    
  this.UserModel$= this.store.select((s) => s.UserModel);
  console.log("dasdas",this.UserModel$);
  this.UserModel$.subscribe((s)=>{

  this.userName=s?.userName
  console.log("username:", this.userName);
  this.password=s?.password
}
  )
  }


}