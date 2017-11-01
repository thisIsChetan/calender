import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IndicationsPage } from './indications';

@NgModule({
  declarations: [
    IndicationsPage,
  ],
  imports: [
    IonicPageModule.forChild(IndicationsPage),
  ],
})
export class IndicationsPageModule {}
