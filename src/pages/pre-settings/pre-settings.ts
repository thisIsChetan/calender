import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController, Slides, App, PickerController, PickerColumn, PickerColumnOption } from 'ionic-angular';
import { HomePage } from '../home/home';
import * as moment from 'moment';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
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
  nextShow:boolean = true;
  backEnabled:boolean;
  simpleColumns:any;
  items:any;
  lastPeriodDay:any;
  cycleLength:any;
  periodLength:any;
  name:any;
  email:any;
  disabled:boolean;
  todayDate:String =  "2017-11-06";
  lastAllowedDate:String =  "2017-10-06";
  infoValidator: FormGroup;

  constructor(public picker: PickerController, 
              public navCtrl: NavController, 
              public navParams: NavParams, 
              public menu:MenuController, 
              public app:App,
              private formBuilder: FormBuilder) {
    this.menu.enable(false);
    this.disableBtn = false;
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
    this.cycleLength=""
    this.items = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30];
    //(this.name) ? this.disabled = false : this.disabled = true;
    console.log(this.isActive);
    setInterval(()=>{
      console.log(this.todayDate);
    },1000)
    
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
  }

   slideChanged() {
    let currentIndex = this.slides.getActiveIndex()+1;
    console.log('Current index is', currentIndex);
    // switch(this.isActive){
    //   case 1:
    //     break;
    //   case 2:
    //     this.selectPeriodDay();
    //     break;
    //   case 3:
    //     this.cycleLengthDay();
    //     break;
    //   case 4:
    //     this.periodLengthDay();
    //     break;

    // }
  }

  back(){
     this.isActive--;
    this.slides.lockSwipes(false); //unlock swipe
    this.slides.slideTo(this.isActive-1);
   
    this.slides.lockSwipes(true); //lock swipe
    (this.isActive>1)? this.backEnabled = true : this.backEnabled=false;
    (this.isActive == 4) ? this.nextShow = false : this.nextShow = true;

  }

    runTimeChange($event){
      console.log($event);
    }

    selectPeriodDay(){
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
                this.lastPeriodDay = data.name.text;
                console.log(data.name.text);
              }
            }
          ]
        });

         let colArray: PickerColumnOption[] = []
        for (let i = 0; i < this.items.length; i++) {
          let col: PickerColumnOption = {
            text: this.items[i],
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

    cycleLengthDay(){
      let selectedIndex = 7;
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
        for (let i = 0; i < this.items.length; i++) {
          let col: PickerColumnOption = {
            text: this.items[i],
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

    periodLengthDay(){
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
        for (let i = 0; i < this.items.length; i++) {
          let col: PickerColumnOption = {
            text: this.items[i],
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
