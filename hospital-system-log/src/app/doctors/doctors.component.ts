import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { AddDoctorComponent } from '../add-doctor/add-doctor.component';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.scss']
})
export class DoctorsComponent implements OnInit {

  displayedColumns: string[] = ['doctorName', 'specialization', 'action'];
  dataSource1!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api : ApiService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDoctors();
  }

  openDialog() {
    this.dialog.open(AddDoctorComponent, {
      width: '30%'
    }).afterClosed().subscribe(val=>{
      if(val ==='save'){
        this.getAllDoctors();
      }
    })
  }
  getAllDoctors(){
    this.api.getDoctor()
    .subscribe({
      next:(response)=>{
        console.log(response);
       this.dataSource1 = new MatTableDataSource(response);
        this.dataSource1.paginator = this.paginator;
        this.dataSource1.sort = this.sort;
      },
      error:(err)=>{
        alert("Error while fetching the records!");
      }
    })
   }
  viewDoctor(id: number){
    this.router.navigate(['doctors', id])
  }

  editDoctor(row: any){
    this.dialog.open(AddDoctorComponent, {
      width: '30%',
      data:row 
    }).afterClosed().subscribe(val=>{
      if(val ==='update'){
        this.getAllDoctors();
      }
    })
  }
  deleteDoctor(id : number){
    this.api.deleteDoctor(id)
    .subscribe({
      next:(res)=>{
        alert("Doctor deleted successfully!")
        this.getAllDoctors();
      },
      error:(err)=>{
        console.log(err);
        alert("Error while deleting the doctor!")
      }
    })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource1.filter = filterValue.trim().toLowerCase();

    if (this.dataSource1.paginator) {
      this.dataSource1.paginator.firstPage();
    }
  }
}