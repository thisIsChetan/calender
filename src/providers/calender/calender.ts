import { Injectable } from '@angular/core';
import * as moment from 'moment';


/*
  Generated class for the CalenderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CalenderProvider {

  constructor() {
    console.log('Hello CalenderProvider Provider');
  }

  getWeek(moment_val){
    let startDate = moment(moment_val).startOf('week'), stopDate = moment(moment_val).endOf('week');
      var dateArray = new Array();
      var currentDate = startDate;
      while (!(currentDate.startOf('day').isAfter(stopDate.startOf('day')))) {
          dateArray.push(moment(currentDate));
          currentDate = currentDate.add(1, 'days');
      }
      return dateArray;
  }

  getMonth(moment_val){
    let startDate = moment(moment_val).startOf('month'), stopDate = moment(moment_val).endOf('month');
      var weekArray = new Array();
      var currentDate = startDate;
      while (!(currentDate.startOf('week').isAfter(stopDate.startOf('week')))) {
        weekArray.push(this.getWeek(currentDate));
        currentDate = currentDate.add(1, 'week');
      }
      return weekArray;
  }
  getYear(moment_val){
    let startDate = moment(moment_val).startOf('year'), stopDate = moment(moment_val).endOf('year');
    var monthArray = new Array();
    var currentDate = startDate;
    while (!(currentDate.startOf('month').isAfter(stopDate.startOf('month')))) {
      monthArray.push(this.getMonth(currentDate));
      currentDate = currentDate.add(1, 'month');
    }
    return monthArray;
  }
  getMonthsBetween(moment_val1,moment_val2){
    let startDate = moment(moment_val1).startOf('month'), stopDate = moment(moment_val2).endOf('month');
    var monthArray = new Array();
    var currentDate = startDate;
    while (!(currentDate.startOf('month').isAfter(stopDate.startOf('month')))) {
      monthArray.push(this.getMonth(currentDate));
      currentDate = currentDate.add(1, 'month');
    }
    return monthArray;
  }

}
