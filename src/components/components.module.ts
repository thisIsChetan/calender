import { NgModule } from '@angular/core';
import { CdCalenderComponent } from './cd-calender/cd-calender';
import { IonicPageModule } from 'ionic-angular';


@NgModule({
	declarations: [CdCalenderComponent],
	imports: [IonicPageModule.forChild(CdCalenderComponent)],
	exports: [CdCalenderComponent]
})
export class ComponentsModule {}
