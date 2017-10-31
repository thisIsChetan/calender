import { Component } from '@angular/core';

/**
 * Generated class for the MenstrualCycleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'menstrual-cycle',
  templateUrl: 'menstrual-cycle.html'
})
export class MenstrualCycleComponent {

  text: string;

  constructor() {
    console.log('Hello MenstrualCycleComponent Component');
    this.text = 'Hello World';
  }

}
