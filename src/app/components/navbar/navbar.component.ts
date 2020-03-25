import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  date: Date = new Date();  
  time = moment().format(', HH:mm:ss');
  constructor(){
      window.setInterval(()=>{ this.time = moment().format(', HH:mm:ss')}, 1000 );
    };

  ngOnInit(): void {
  }

}