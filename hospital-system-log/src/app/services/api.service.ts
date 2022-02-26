import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  postPatient(data : any){
    return this.http.post<any>("http://localhost:9092/api/patients/", data);
  }
  getPatient(){
    return this.http.get<any>("http://localhost:9092/api/patients/");
  }
  putPatient(data: any, id : number){
    return this.http.put<any>("http://localhost:9092/api/patients/"+id, data);
  }
  deletePatient(id:number){
  return this.http.delete<any>("http://localhost:9092/api/patients/"+id);
}
}
