import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, MenuController } from 'ionic-angular';
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
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  rootFlag: any;
  sideMenuList: any = [
    {
      icon:"home",
      tittle:"MENU.HOME",
      page:"HomePage"
    },
    {
      icon:"home",
      tittle:"MENU.PERIOD_LOGS",
      page:"PeriodLogsPage"
    },
    {
      icon:"home",
      tittle:"MENU.INDICATIONS",
      page:"IndicationsPage"
    },
    {
      icon:"home",
      tittle:"MENU.SHARE_HISTORY",
      page:"ShareHistoryPage"
    },
    {
      icon:"home",
      tittle:"MENU.FAQS",
      page:"FaqsPage"
    },
    {
      icon:"home",
      tittle:"MENU.PRIVACY_POLICY",
      page:"PrivacyPolicyPage"
    },
    {
      icon:"home",
      tittle:"MENU.TERMS",
      page:"TermsOfUsePage"
    },
    {
      icon:"home",
      tittle:"MENU.SHARE_APP",
      page:"SHARE_APP"
    },
    {
      icon:"home",
      tittle:"MENU.SETTINGS",
      page:"SettingsPage"
    }

  ] ; 

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menu:MenuController) {
    //CONTROLLING THE ROOT PAGE FOR THE APP
    this.rootFlag = localStorage.getItem("ROOTFLAG");
    console.log(this.rootFlag );
    console.log(typeof this.rootFlag)
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

  openPage(page: string) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    console.log("navifating to " + page)
    if(page == "SHARE_APP"){
      alert("Sharing App...")
    }else{
      this.nav.setRoot(page);
    }

  }
}

