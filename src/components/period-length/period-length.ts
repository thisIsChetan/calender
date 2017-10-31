import { Component } from '@angular/core';

/**
 * Generated class for the PeriodLengthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'period-length',
  templateUrl: 'period-length.html'
})
export class PeriodLengthComponent {

  text: string;

  constructor() {
    console.log('Hello PeriodLengthComponent Component');
    this.text = 'Hello World';
  }

}
