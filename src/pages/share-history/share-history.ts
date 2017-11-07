import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/user-info/user-info';

/**
 * Generated class for the ShareHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share-history',
  templateUrl: 'share-history.html',
})
export class ShareHistoryPage {
  isPartnerSelected: boolean = false;
  isDoctorSelected: boolean = false;
  partnerEmail: string;
  doctorEmail: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private userInfo: UserInfoProvider) {
  }

  ionViewDidLoad() { }

  toggleDoctor() {
    this.isDoctorSelected = !this.isDoctorSelected;
    this.doctorEmail = this.userInfo.getDoctorEmail();
  }
  
  togglePartner() {
    this.isPartnerSelected = !this.isPartnerSelected;
    this.partnerEmail = this.userInfo.getPartnerEmail();
  }
}
