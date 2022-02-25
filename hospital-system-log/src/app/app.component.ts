import { Component } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'hospital-system-log';

  constructor(private dialog: MatDialog){

  }

  openDialog() {
    this.dialog.open(AddPatientComponent, {
      width: '30%'
    });
  }
}
