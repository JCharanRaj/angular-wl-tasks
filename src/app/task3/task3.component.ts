import { Component, OnInit } from '@angular/core';
import {Loginuser} from '../loginuser';

@Component({
  selector: 'app-task3',
  templateUrl: './task3.component.html',
  styleUrls: ['./task3.component.css']
})
export class Task3Component implements OnInit {
  firstName:string;
  lastName:string;
  password:string;
  email:string;
  constructor() { }

  ngOnInit() {
  }
  log= new Loginuser();
  setLogin(){

    this.log.setLoginUser(this.firstName, this.lastName, this.email, this.password);
    console.log(log.getLoginUser());
  }


}