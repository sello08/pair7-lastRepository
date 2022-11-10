

import { Component, OnInit } from '@angular/core';
import {  LocalStorageService, Service, ServicesService } from 'src/libs';
import { Store } from '@ngrx/store';
import {  setService } from '../../../../store/customer.actions';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-create-customerstp2',
  templateUrl: './create-customerstp2.component.html',
  styleUrls: ['./create-customerstp2.component.css']
})
export class CreateCustomerstp2Component implements OnInit {


   selectedService !: Service ;
   services!:Service[];
   valid:boolean=false;


  constructor(
    private servicesService : ServicesService,
    private store : Store, 
    private router: Router, 
    private toastr :ToastrService,
    private localStorage:LocalStorageService
    ) { }
    ngOnInit(): void {
this.getService();
  }
 
getService(){
 
  this.servicesService.getServices().subscribe({
  next:(res)=>{
  this.services=res
  console.log(this.services,"servisler")
  },error:(err)=>{
    console.log(err);
  
  },
  complete:()=>{ }   
})
}

  selectedSer(s:Service){
    this.selectedService=s;
    this.toastr.success(this.selectedService.name, "seçildi");
    this.valid=true;

  }

   addService(){
    this.store.dispatch(setService({service: this.selectedService}));
     this.localStorage.setStep("stp2")
    this.router.navigate(['/customers/stp3']);
   }


  catchError(error: Error) {
    this.toastr.error('Bir hata olustu ' + error.message)
  }
  
}


