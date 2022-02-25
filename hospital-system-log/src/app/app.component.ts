import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ApiService } from './services/api.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hospital-system-log';
  
  displayedColumns: string[] = ['name', 'insurance', 'dateAdmited'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private dialog: MatDialog, private api : ApiService){

  }
  ngOnInit(): void {
    this.getAllPatients();
  }

  openDialog() {
    this.dialog.open(AddPatientComponent, {
      width: '30%'
    });
  }
  getAllPatients(){
   this.api.getPatient()
   .subscribe({
     next:(res)=>{
       console.log(res);
     },
     error:(err)=>{
       alert("Error while fetching the records!");
     }
   })
  }
}
