import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'hospital-system-log';
  
  constructor(private router: Router){

  }
  ngOnInit(): void {
   
  }

  onSubmit(){
    this.router.navigate(['/patients'])

  }
  onSubmitDoctor(){
    this.router.navigate(['/doctors'])
  }
  homePage(){
    this.router.navigate(['/'])
  }
}
