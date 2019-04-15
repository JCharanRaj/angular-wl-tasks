import { Component, OnInit, Renderer2, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'app-task1',
  templateUrl: './task1.component.html',
  styleUrls: ['./task1.component.css']
})
export class Task1Component implements OnInit {
  fnaame:string;
  lname:string;
  @ViewChild('div') div:  ElementRef;
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  count=1;
  addStudent(){
    const div: HTMLDivElement = this.renderer.createElement('div');
    div.innerHTML = "First Name <input class='form-control col-sm-4' [(ngModel)]='fname"+this.count+"' type='name' name='fname'"+this.count+"' /><br/>Last Name <input class='form-control col-sm-4' [(ngModel)]='lname"+this.count+"' type='name' name='lname'"+this.count+"' /><br/> ";

    this.renderer.appendChild(this.div.nativeElement, div);
    this.count+=1;
  }
  removeStudent(){
    
  }

}