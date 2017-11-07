import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserInfoProvider } from '../../providers/user-info/user-info';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  alowEdit: boolean = false;
  userName: string;
  userEmail: string;
  partnerEmail: string;
  doctorEmail: string;
  doctorPhone: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private userInfo:UserInfoProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userName = this.userInfo.getName();
    this.userEmail = this.userInfo.getEmail();
    this.partnerEmail = this.userInfo.getPartnerEmail();
    this.doctorEmail = this.userInfo.getDoctorEmail();
    this.doctorPhone = this.userInfo.getDoctorPhone();
  }  
  edit() {
    this.alowEdit = true;
  }
  save() {
    this.userInfo.setName(this.userName);
    this.userInfo.setEmail(this.userEmail);
    this.userInfo.setPartnerEmail(this.partnerEmail);
    this.userInfo.setDoctorEmail(this.doctorEmail);
    this.userInfo.setDoctorPhone(this.doctorPhone);

    this.alowEdit = false;
  }
}
