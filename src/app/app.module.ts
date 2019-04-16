import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { Task1Component } from './task1/task1.component';
import { Task2Component } from './task2/task2.component';
import { Task3Component } from './task3/task3.component';
import { TestService } from './test.service';
import { HomeComponent } from './home/home.component';
import { SqrtPipe } from './sqrt.pipe';


const routes: Routes=[
  {path:"", component: HomeComponent},
  {path:"task1", component: Task1Component},
  {path:"task2", component: Task2Component},
  {path:"task3", component: Task3Component},
  
];
@NgModule({
  imports:      [ BrowserModule,HttpClientModule, FormsModule, RouterModule.forRoot(routes) ],
  declarations: [ AppComponent, Task2Component, Task1Component, Task3Component, HomeComponent, SqrtPipe],
  bootstrap:    [ AppComponent ],
  providers: [TestService]
})
export class AppModule { }
