import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PeriodLogsPage } from './period-logs';

@NgModule({
  declarations: [
    PeriodLogsPage,
  ],
  imports: [
    IonicPageModule.forChild(PeriodLogsPage),
  ],
})
export class PeriodLogsPageModule {}
