import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PickerController, PickerColumn, PickerColumnOption, MenuController } from 'ionic-angular';

/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items:any = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public picker: PickerController, public menu:MenuController) {
      this.menu.enable(true);
  }

  ionViewDidLoad() {
   
    console.log('ionViewDidLoad HomePage');
  
    
  }

}
