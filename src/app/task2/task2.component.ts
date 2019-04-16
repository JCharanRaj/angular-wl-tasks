import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  @Input('userData') public userData:any[];
  @Output() public message= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  sendMessage(){
    this.message.emit("Message from Tsak2 Component....");
  }

}