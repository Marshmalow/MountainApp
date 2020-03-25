import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {
  
constructor(private http: HttpClient) { }
ngOnInit() {
    let resp = this.http.get("https://api.unsplash.com/");
    resp.subscribe((data)=>console.log(data));
  }
}
