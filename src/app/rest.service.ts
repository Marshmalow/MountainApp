import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Rows } from './components/ranking/Rows';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
 constructor(private http: HttpClient) { } 
 
 url: string = "http://localhost:3000/rows/"; 
  
  
  getRows(): Observable<Rows[]> {
    return this.http.get<Rows[]>(this.url);
  }
}
