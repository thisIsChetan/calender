import { Component } from '@angular/core';
import { Platform, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { TermsAndConditionPage } from '../pages/terms-and-condition/terms-and-condition';
import { WelcomePage } from '../pages/welcome/welcome';
import { PreSettingsPage } from '../pages/pre-settings/pre-settings';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;
  rootFlag:any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu:MenuController) {
    //CONTROLLING THE ROOT PAGE FOR THE APP
    this.rootFlag = localStorage.getItem("ROOTFLAG");
    switch(this.rootFlag){
      case null:
        this.rootPage = TermsAndConditionPage;
        break;
      case "null":
        this.rootPage = TermsAndConditionPage;
        break;
      case "tnc":
        this.rootPage = WelcomePage;
        break;
      case "welcome":
        this.rootPage = PreSettingsPage;
        break;
      case "preSetting":
        this.rootPage = HomePage;
        break;
    }
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

