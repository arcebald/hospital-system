import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorsComponent } from './doctors/doctors.component';
import { ImageComponent } from './image/image.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PatientTestsComponent } from './patient-tests/patient-tests.component';
import { PatientsComponent } from './patients/patients.component';

const routes: Routes = [
  {path: "", component: ImageComponent},
  {path: "patients", component: PatientsComponent},
  {path: "doctors", component: DoctorsComponent},
  {path: "patients/:id", component: PatientTestsComponent},
  {path: '', redirectTo: '', pathMatch:'full'},
  {path: "**", component: PageNotFoundComponent},
  
  // {path: '', redirectTo: 'patients', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
