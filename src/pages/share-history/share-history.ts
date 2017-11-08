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

  range: boolean = false;
  month: boolean = false;
  cycle: boolean = false;

  rangeStart: string;
  rangeEnd: string;
  monthValue: string;
  cycleValue: string;


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

  changeSelection(ev, i) {
    
    switch (i) {
      case "RANGE":
        this.month = false;
        this.cycle = false;
        break;

      case "MONTH":
        this.range = false;
        this.cycle = false;
        break;

      case "CYCLE":
        this.month = false;
        this.range = false;
        break;
    }
    console.log(this.rangeEnd)
    console.log(this.rangeStart)
    console.log(this.monthValue)
    console.log(this.cycleValue)

  }

  /*
  *  ion-date change doesn't changes ngModel when used for only month,
  *  Hence this is a work around for it
  */
  monthChange(ev){
    console.log(ev);
    this.monthValue = ev.month;
    console.log(this.monthValue)
  }


}
