import { Component } from '@angular/core';
import * as moment from 'moment';


/**
 * Generated class for the CdCalenderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'cd-calender',
  templateUrl: 'cd-calender.html'
})
export class CdCalenderComponent {

  calenderData: any;

  constructor() {
    console.log('Hello CdCalenderComponent Component');
  }

  ngAfterViewInit(){
    let now = moment();
    let next = moment().add(2,'year');
    this.calenderData = this.getMonthsBetween(now,next);
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
