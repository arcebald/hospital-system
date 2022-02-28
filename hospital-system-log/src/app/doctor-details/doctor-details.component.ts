import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.scss']
})
export class DoctorDetailsComponent implements OnInit {
  myParam: any;
  doctorPatients: any;

  displayedColumns: string[] = ['name', 'insurance', 'dateAdmited'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.myParam = this.route.snapshot.paramMap.get('id');
     console.log(this.myParam);
     this.getDoctorPatients(this.myParam);
  }

  getDoctorPatients(myParam: number){
    this.api.getDoctorPatient(myParam)
    .subscribe({
      next:(res)=>{
        this.doctorPatients = res;
        this.dataSource = res;
        console.log(res);
      },
      error:(err)=>{
        alert("Error while fetching test records!");
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
