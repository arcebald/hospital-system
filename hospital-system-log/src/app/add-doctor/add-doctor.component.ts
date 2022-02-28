import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {

  doctorForm!: FormGroup;
  actionBtn: string = "Save";
  constructor(private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<AddDoctorComponent>) { }

    ngOnInit(): void {
      this.doctorForm = this.formBuilder.group({
        doctorName: ['', Validators.required],
        specialization: ['', Validators.required]
      });
      console.log(this.editData);
  
      if (this.editData) {
        this.actionBtn = "Update";
        this.doctorForm.controls['doctorName'].setValue(this.editData.doctorName);
        this.doctorForm.controls['specialization'].setValue(this.editData.specialization);
      }
    }

    addDoctor() {
      if (!this.editData) {
        if (this.doctorForm.valid) {
          this.api.postDoctor(this.doctorForm.value)
            .subscribe({
              next: (res) => {
                alert("Doctor added succesfully!")
                this.doctorForm.reset();
                this.dialogRef.close('save');
              },
              error: () => {
                alert("Error while adding the doctor")
              }
            })
        }
      } else {
        this.updateDoctor()
  
        }
      }
      updateDoctor(){
      this.api.putDoctor(this.doctorForm.value, this.editData.id)
      .subscribe({
        next:(res)=>{
          alert("Doctor updated Successfully");
          this.doctorForm.reset();
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("Error while updating the doctor record!");
        }
      })
      
    }

}
