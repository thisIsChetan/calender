import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreSettingsPage } from './pre-settings';

@NgModule({
  declarations: [
    PreSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(PreSettingsPage),
  ],
})
export class PreSettingsPageModule {}
