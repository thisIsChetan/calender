import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import * as moment from 'moment';
import { CalenderProvider } from '../../providers/calender/calender';

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
  calenderData:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private calenderProvider:CalenderProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    let now = moment();
    let next = moment().add(2,'year');
    this.calenderData = this.calenderProvider.getMonthsBetween(now,next);
    console.log(this.calenderData);
  }

}
