import { Component, OnInit } from '@angular/core';
import {Loginuser} from '../loginuser';

@Component({
  selector: 'app-task3dashboard',
  templateUrl: './task3dashboard.component.html',
  styleUrls: ['./task3dashboard.component.css']
})
export class Task3dashboardComponent implements OnInit {
loginUser:{};
  constructor(log:Loginuser) { }

  ngOnInit() {
  
  }
  
  getUser(log:Loginuser){
    this.loginUser = log.getLoginUser();
  }
 

}