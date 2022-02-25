import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
   patientForm!: FormGroup;
   actionBtn : string = "Save";
  constructor(private formBuilder: FormBuilder, 
              private api : ApiService, 
              @Inject(MAT_DIALOG_DATA) public editData : any,
              private dialogRef : MatDialogRef<AddPatientComponent>) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      name :['', Validators.required],
      insurance :['', Validators.required],
      dateAdmited :['', Validators.required]
    });
     console.log(this.editData);
     if(this.editData){
       this.patientForm.controls['name'].setValue(this.editData.name);
       this.patientForm.controls['insurance'].setValue(this.editData.insurance);
       this.patientForm.controls['dateAdmited'].setValue(this.editData.dateAdmited);
     }
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
