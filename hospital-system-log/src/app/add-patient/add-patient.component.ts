import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
   patientForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api : ApiService, private dialogRef : MatDialogRef<AddPatientComponent>) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      name :['', Validators.required],
      insurance :['', Validators.required],
      dateAdmited :['', Validators.required]
    })
  }

  addPatient(){
    // console.log(this.patientForm.value);
    if(this.patientForm.valid){
      this.api.postPatient(this.patientForm.value)
      .subscribe({
        next:(res)=>{
          alert("Patient added succesfully!")
          this.patientForm.reset();
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("Error while adding the patient")
        }
      })
    }
  }

}
