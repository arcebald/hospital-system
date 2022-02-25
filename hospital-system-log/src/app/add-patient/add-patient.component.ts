import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.scss']
})
export class AddPatientComponent implements OnInit {
   patientForm!: FormGroup;
  constructor(private formBuilder: FormBuilder, private api : ApiService) { }

  ngOnInit(): void {
    this.patientForm = this.formBuilder.group({
      patientName :['', Validators.required],
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
        },
        error:()=>{
          alert("Error while adding the patient")
        }
      })
    }
  }

}
