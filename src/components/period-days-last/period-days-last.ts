import { Component } from '@angular/core';

/**
 * Generated class for the PeriodDaysLastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'period-days-last',
  templateUrl: 'period-days-last.html'
})
export class PeriodDaysLastComponent {

  text: string;

  constructor() {
    console.log('Hello PeriodDaysLastComponent Component');
    this.text = 'Hello World';
  }

}
