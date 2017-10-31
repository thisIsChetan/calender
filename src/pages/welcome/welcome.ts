import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';

import { PreSettingsPage } from '../pre-settings/pre-settings';
/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  slides:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(false);
    this.slides = ["slide1","slide2","slide3","slide4"];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }

  skip(){
   localStorage.setItem("ROOTFLAG","welcome");
    this.navCtrl.setRoot(PreSettingsPage);
  }

}
