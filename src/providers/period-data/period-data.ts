import { Injectable } from '@angular/core';


/*
  Generated class for the PeriodDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeriodDataProvider {

  constructor() {
    console.log('Hello PeriodDataProvider Provider');
  }

  getFirstPeriodStart(): string{
    return localStorage.getItem("FIRST_PERIOD_START");
  }

  setFirstPeriodStart(name: string){
    localStorage.setItem("FIRST_PERIOD_START",name);
  }

  getFirstPeriodLength(): string{
    return localStorage.getItem("FIRST_PERIOD_LENGTH");
  }

  setFirstPeriodLength(name: string){
    localStorage.setItem("FIRST_PERIOD_LENGTH",name);
  }

  getDefaultCycleLength(): string{
    return localStorage.getItem("DEFAULT_CYCLE_LENGTH");
  }

  setDefaultCycleLength(name: string){
    localStorage.setItem("DEFAULT_CYCLE_LENGTH",name);
  }

  getDefaultPeriodLength(): string{
    return localStorage.getItem("DEFAULT_PERIOD_LENGTH");
  }

  setDefaultPeriodLength(name: string){
    localStorage.setItem("DEFAULT_PERIOD_LENGTH",name);
  }

}
