import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the PreSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pre-settings',
  templateUrl: 'pre-settings.html',
})
export class PreSettingsPage {
  @ViewChild(Slides) slides: Slides;
  disableBtn: boolean;
  circleArray:any;
  isActive:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public menu:MenuController) {
    this.menu.enable(false);
    this.disableBtn = false;
    this.isActive = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreSettingsPage');
    this.circleArray = [1,2,3,4,5];
  }

  next(){
    this.isActive++;
  }

  start(){
    localStorage.setItem("ROOTFLAG","preSetting");
    this.navCtrl.setRoot(HomePage);
  }

   slideChanged() {
    let currentIndex = this.slides.getActiveIndex()+1;
    console.log('Current index is', currentIndex);
    if(currentIndex>4){

    }
  }

}
