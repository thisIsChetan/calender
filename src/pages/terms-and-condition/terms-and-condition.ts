import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { WelcomePage } from '../welcome/welcome';
/**
 * Generated class for the TermsAndConditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-terms-and-condition',
  templateUrl: 'terms-and-condition.html',
})
export class TermsAndConditionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(false);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TermsAndConditionPage');
  }

  agreeTerms(){
    localStorage.setItem("ROOTFLAG","tnc");
    this.navCtrl.setRoot(WelcomePage);
  }

}
