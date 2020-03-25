import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import { Rows } from './Rows';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.scss']
})
export class RankingComponent implements OnInit {
  constructor(private rs: RestService) {  } 

  @ViewChild(MatSort, { static:false }) sort: MatSort;

  columns = ["id", "name", "height", "continent", "country"];
  rows : Rows[] = [];

  dataSource: MatTableDataSource<Rows>;
  
  ngOnInit(): void {
    this.rs.getRows().subscribe
     (
       (response) => {
         this.rows = response;
         this.dataSource = new MatTableDataSource(this.rows);
         this.dataSource.sort = this.sort;
        },
       (error) => console.log(error)
     )
  }

  onFilterChange(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }
}
