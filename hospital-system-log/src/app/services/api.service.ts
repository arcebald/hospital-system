import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  postPatient(data: any) {
    return this.http.post<any>("https://hospitalapi-app.herokuapp.com/api/patients/", data);
  }
  getPatient() {
    return this.http.get<any>("https://hospitalapi-app.herokuapp.com/api/patients/");
  }
  putPatient(data: any, id: number) {
    return this.http.put<any>("https://hospitalapi-app.herokuapp.com/api/patients/" + id, data);
  }
  deletePatient(id: number) {
    return this.http.delete<any>("https://hospitalapi-app.herokuapp.com/api/patients/" + id);
  }

  getPatientTest(id: number){
     return this.http.get<any>(`https://hospitalapi-app.herokuapp.com/api/patients/${id}/tests/`);
  }

  postDoctor(data: any){
    return this.http.post<any>("https://hospitalapi-app.herokuapp.com/api/doctors/register/", data);
  }
  getDoctor(){
    return this.http.get<any>("https://hospitalapi-app.herokuapp.com/api/doctors/");
  }
  putDoctor(data: any, id: number){
    return this.http.put<any>("https://hospitalapi-app.herokuapp.com/api/doctors/" + id, data);
  }
  deleteDoctor(id: number) {
    return this.http.delete<any>("https://hospitalapi-app.herokuapp.com/api/doctors/" + id);
  }
  getDoctorPatient(id: number){
    return this.http.get<any>(`https://hospitalapi-app.herokuapp.com/api/doctors/${id}/patients/`);
  }
}
