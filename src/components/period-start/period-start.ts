import { Component, EventEmitter, Output } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker';

/**
 * Generated class for the PeriodStartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'period-start',
  templateUrl: 'period-start.html'
})
export class PeriodStartComponent {

  text: string;
  @Output() checkValidation = new EventEmitter();

  constructor(private datePicker: DatePicker) {
    console.log('Hello PeriodStartComponent Component');
    this.text = 'Hello World';
  }

  selectDate(){
   this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
  }
//as per chetan recomendation ignore the 
  onChange(){
    console.log("event");
  }

}
