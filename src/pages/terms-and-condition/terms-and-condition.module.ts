import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TermsAndConditionPage } from './terms-and-condition';


@NgModule({
  declarations: [
    TermsAndConditionPage,
  ],
  imports: [
    IonicPageModule.forChild(TermsAndConditionPage),
  ],
  exports:[
    TermsAndConditionPage
  ],
  entryComponents:[
    TermsAndConditionPage

  ]
})
export class TermsAndConditionPageModule {}
