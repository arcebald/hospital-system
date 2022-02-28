import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-patient-tests',
  templateUrl: './patient-tests.component.html',
  styleUrls: ['./patient-tests.component.scss']
})
export class PatientTestsComponent implements OnInit {
  myParam: any;
  patientTests: any;

  displayedColumns: string[] = ['name', 'testDate', 'testTime', 'testResult'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private api : ApiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
     this.myParam = this.route.snapshot.paramMap.get('id');
     console.log(this.myParam);
     this.getPatientTests(this.myParam);
  }

  getPatientTests(myParam: number){
    this.api.getPatientTest(myParam)
    .subscribe({
      next:(res)=>{
        this.patientTests = res;
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
