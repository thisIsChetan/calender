import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { PreSettingsPage } from '../pages/pre-settings/pre-settings';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';
import { TermsAndConditionPage } from '../pages/terms-and-condition/terms-and-condition';
import { WelcomePage } from '../pages/welcome/welcome';

import { DatePicker } from '@ionic-native/date-picker';

@NgModule({
  declarations: [
    MyApp,
    TermsAndConditionPage,
    WelcomePage,
    PreSettingsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TermsAndConditionPage,
    WelcomePage,
    PreSettingsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DatePicker,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
