import { CustomerState } from './../../store/customer.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {  Observable } from 'rxjs';
import { Users } from 'src/libs';
import { userSelector } from 'src/app/store/customer.selector';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfo!:Users
  userName!: string | undefined
  password!:string |undefined
  constructor(  private store:Store<CustomerState>) { }

  ngOnInit(): void {
this.getName();

  }


  getName(){
  this.store.select(userSelector).subscribe(response => this.userName = response?.userName)}
}