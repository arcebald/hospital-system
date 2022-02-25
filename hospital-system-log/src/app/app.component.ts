import { Component, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ApiService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hospital-system-log';

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
