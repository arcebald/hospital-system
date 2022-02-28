import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatFormFieldModule} from '@angular/material/form-field';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import { AddPatientComponent } from './add-patient/add-patient.component';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { ImageComponent } from './image/image.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientTestsComponent } from './patient-tests/patient-tests.component';
import { PatientsComponent } from './patients/patients.component';
import { DoctorDetailsComponent } from './doctor-details/doctor-details.component';
@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    AddDoctorComponent,
    DoctorsComponent,
    ImageComponent,
    PageNotFoundComponent,
    PatientTestsComponent,
    PatientsComponent,
    DoctorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
