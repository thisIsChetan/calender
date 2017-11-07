import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShareHistoryPage } from './share-history';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ShareHistoryPage,
  ],
  imports: [
    IonicPageModule.forChild(ShareHistoryPage),
    TranslateModule.forChild()
  ],
})
export class ShareHistoryPageModule {}
