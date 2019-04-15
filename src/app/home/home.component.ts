import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
  h1Style: boolean = true;

  ngOnInit() {
  }
  firstClick(){
    this.h1Style = !this.h1Style;
  }

}