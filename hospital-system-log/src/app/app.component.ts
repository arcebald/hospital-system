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
  
  displayedColumns: string[] = ['name', 'insurance', 'dateAdmited', 'action'];
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
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllPatients();
      }
    })
  }
  getAllPatients(){
   this.api.getPatient()
   .subscribe({
     next:(res)=>{
       console.log(res);
       this.dataSource = new MatTableDataSource(res);
       this.dataSource.paginator = this.paginator;
       this.dataSource.sort = this.sort;
     },
     error:(err)=>{
       alert("Error while fetching the records!");
     }
   })
  }

  editPatient(row: any){
    this.dialog.open(AddPatientComponent, {
      width: '30%',
      data:row 
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllPatients();
      }
    })
  }
  deletePatient(id : number){
    this.api.deletePatient(id)
    .subscribe({
      next:(res)=>{
        alert("Patient deleted successfully!")
        this.getAllPatients();
      },
      error:(err)=>{
        console.log(err);
        alert("Error while deleting the patient!")
      }
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
