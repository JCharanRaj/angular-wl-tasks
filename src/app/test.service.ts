import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable()
export class TestService {
  url='./studentdata.json';
  constructor( private http: HttpClient) { 
    
  }
  getData(): Observable<any> {
   return this.http.get(this.url);
  }

}