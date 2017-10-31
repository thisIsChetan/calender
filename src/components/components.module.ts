import { NgModule } from '@angular/core';
import { CdCalenderComponent } from './cd-calender/cd-calender';
import { IonicPageModule } from 'ionic-angular';
import { PeriodDaysLastComponent } from './period-days-last/period-days-last';
import { MenstrualCycleComponent } from './menstrual-cycle/menstrual-cycle';
import { PeriodLengthComponent } from './period-length/period-length';

@NgModule({
	declarations: [CdCalenderComponent,
    PeriodDaysLastComponent,
    MenstrualCycleComponent,
    PeriodLengthComponent],
	imports: [IonicPageModule.forChild(CdCalenderComponent)],
	exports: [CdCalenderComponent,
    PeriodDaysLastComponent,
    MenstrualCycleComponent,
    PeriodLengthComponent]
})
export class ComponentsModule {}
