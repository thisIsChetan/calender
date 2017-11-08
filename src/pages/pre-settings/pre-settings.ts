import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides, App, PickerController, PickerColumn, PickerColumnOption } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as moment from 'moment';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { PeriodDataProvider } from '../../providers/period-data/period-data';
import { UserInfoProvider } from '../../providers/user-info/user-info';
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
  circleArray:any;
  isActive:any;
  nextShow:boolean = true;
  backEnabled:boolean;
  cycleLength:string = "28";
  periodLength:string = "8";
  lastPeriodStart:string = moment().format("YYYY-MM-DD");
  lastAllowedDate:string = moment().subtract(45, 'days').format("YYYY-MM-DD");
  lastPeriodLength:string = "8";

  infoValidator: FormGroup;
  emailValidation:string = (new RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i)).toString().slice(2, -2);
  nameRegex:string = (new RegExp(/^([^0-9]*)$/)).toString().slice(2, -2);
  constructor(public picker: PickerController, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public menu:MenuController, 
              public app:App,
              private formBuilder: FormBuilder,
              private userInfo: UserInfoProvider,
              private periodData: PeriodDataProvider) {
    this.menu.enable(false);
    this.isActive = 1;
    this.infoValidator = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]]
    });
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PreSettingsPage');
    this.circleArray = [1,2,3,4];
    this.slides.lockSwipes(true);
  }

  next(){
    console.log(this.infoValidator);
    console.log(this.infoValidator.valid);
    this.isActive++;
    this.slides.lockSwipes(false); //unlock swipe
    this.slides.slideTo(this.isActive-1);
    (this.isActive == 4) ? this.nextShow = false : this.nextShow = true;
    this.slides.lockSwipes(true); //lock swipe
    (this.isActive>1)? this.backEnabled = true : this.backEnabled=false;
  }

  start(){
    localStorage.setItem("ROOTFLAG","preSetting");
    this.navCtrl.setRoot(HomePage);
    this.userInfo.setName(this.infoValidator.value.name);
    this.userInfo.setEmail(this.infoValidator.value.email);
    this.periodData.setFirstPeriodStart(this.lastPeriodStart);
    this.periodData.setFirstPeriodLength(this.lastPeriodLength);
    this.periodData.setDefaultCycleLength(this.cycleLength);
    this.periodData.setDefaultPeriodLength(this.periodLength);
  }

  back(){
    this.isActive--;
    this.slides.lockSwipes(false); //unlock swipe
    this.slides.slideTo(this.isActive-1);
   
    this.slides.lockSwipes(true); //lock swipe
    (this.isActive>1)? this.backEnabled = true : this.backEnabled=false;
    (this.isActive == 4) ? this.nextShow = false : this.nextShow = true;
  }

  selectLastPeriodLength(){
    let selectedIndex = 7;
    let picker1 = this.picker.create({
      buttons: [
        {
          text: "Cancel",
          role: 'cancel',
          handler: (data: any) => {
            
          }
        },
        {
          text: "Done",
          handler: (data: any) => {
            this.lastPeriodLength = data.name.text;
            console.log(data.name.text);
          }
        }
      ]
    });

      let colArray: PickerColumnOption[] = []
      for (let i = 1; i < 16; i++) {
        let col: PickerColumnOption = {
          text: i.toString(),
          value: i,
        }
        colArray.push(col)
      }

      let column: PickerColumn = {
        name: "name",
        columnWidth: '100%',
        selectedIndex: selectedIndex,
        options: colArray
      }

      picker1.addColumn(column);
      picker1.present(picker1);
  }

  selectCycleLength(){
    let selectedIndex = 13;
    let picker2= this.picker.create({
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            handler: (data: any) => {
              
            }
          },
          {
            text: "Done",
            handler: (data: any) => {
              this.cycleLength = data.name.text;
              console.log(data.name.text);
            }
          }
        ]
      });

        let colArray: PickerColumnOption[] = []
      for (let i = 15; i < 51; i++) {
        let col: PickerColumnOption = {
          text: i.toString(),
          value: i,
        }
        colArray.push(col)
      }

      let column: PickerColumn = {
        name: "name",
        columnWidth: '100%',
        selectedIndex: selectedIndex,
        options: colArray
      }

      picker2.addColumn(column);
      picker2.present(picker2);
  }

  selectLengthDay(){
    let selectedIndex = 7;
    let picker3 = this.picker.create({
        buttons: [
          {
            text: "Cancel",
            role: 'cancel',
            handler: (data: any) => {
              
            }
          },
          {
            text: "Done",
            handler: (data: any) => {
              this.periodLength = data.name.text;
              console.log(data.name.text);
            }
          }
        ]
      });

        let colArray: PickerColumnOption[] = []
      for (let i = 1; i < 16; i++) {
        let col: PickerColumnOption = {
          text: i.toString(),
          value: i,
        }
        colArray.push(col)
      }

      let column: PickerColumn = {
        name: "name",
        columnWidth: '100%',
        selectedIndex: selectedIndex,
        options: colArray
      }

      picker3.addColumn(column);
      picker3.present(picker3);
  }

}
