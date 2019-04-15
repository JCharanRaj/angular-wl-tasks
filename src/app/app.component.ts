import { Component } from '@angular/core';
import {Students} from './students';
import { TestService } from './test.service';
import { StudnetInterface} from './studnetInterface';
import {Observable, of} from 'rxjs';
import {SqrtPipe}from 'sqrt.pipe';
import 'rxjs/add/operator/map';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  fname = "Wave";
  lname = "Labs";
  public name ="Task2 from App Component";
  checkBox:boolean;
  taskDes:string;
  task:any={};
  addTaskName:string;
  tasks=[{taskName:"Task1", taskDesc:"Task1 about adding elemantes dyamically!!"},
  {taskName:"Task2", taskDesc:"Task2 about Angular Routing!!"},
  {taskName:"Task3", taskDesc:"Task2 about some Angular concepts!!"}];
  stdObj = new Students();
  getStudentName(){
    this.stdObj.setName(this.fname,this.lname);
    alert(this.stdObj.getName());
  }
  addTask(){
    
    this.task.taskName=this.addTaskName;
    this.task.taskDes=this.taskDes;
    this.tasks.push(this.task);
    
  }
  constructor(private http: HttpClient) { }
  testService: TestService;
  students:[];
  
  ngOnInit() {
       this.http.get("http://jsonplaceholder.typicode.com/users");
   }
   
  getStudentData(data){
    this.students = data;
    
  }
}
