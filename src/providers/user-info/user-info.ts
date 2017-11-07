import { Injectable } from '@angular/core';

/*
  Generated class for the UserInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserInfoProvider {

  constructor() {
    console.log('Hello UserInfoProvider Provider');
  }

  getName(): string{
    return localStorage.getItem("NAME");
  }

  setName(name: string){
    localStorage.setItem("NAME",name);
  }

  getEmail(): string{
    return localStorage.getItem("EMAIL");
  }

  setEmail(email: string){
    localStorage.setItem("EMAIL",email);
  }

  getPartnerEmail(): string{
    return localStorage.getItem("PARTNER_EMAIL");
  }

  setPartnerEmail(email: string){
    localStorage.setItem("PARTNER_EMAIL",email);
  }

  getDoctorEmail(): string{
    return localStorage.getItem("DOCTOR_EMAIL");
  }

  setDoctorEmail(email: string){
    localStorage.setItem("DOCTOR_EMAIL",email);
  }

  getDoctorPhone(): string{
    return localStorage.getItem("DOCTOR_PHONE");
  }

  setDoctorPhone(phone: string){
    localStorage.setItem("DOCTOR_PHONE",phone);
  }
  

}
