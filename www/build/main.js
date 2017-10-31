webpackJsonp([4],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TermsAndConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome_welcome__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TermsAndConditionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TermsAndConditionPage = (function () {
    function TermsAndConditionPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(false);
    }
    TermsAndConditionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad TermsAndConditionPage');
    };
    TermsAndConditionPage.prototype.agreeTerms = function () {
        localStorage.setItem("ROOTFLAG", "tnc");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__welcome_welcome__["a" /* WelcomePage */]);
    };
    return TermsAndConditionPage;
}());
TermsAndConditionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-terms-and-condition',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/terms-and-condition/terms-and-condition.html"*/'<!--\n  Generated template for the TermsAndConditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terms and Condition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div >\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis non ex eleifend ultrices at ac augue. Vestibulum iaculis velit non eros fringilla rutrum. Pellentesque vitae porta turpis, eget convallis metus. Donec in arcu vitae ipsum posuere rhoncus ut eu dui. Etiam elementum nibh tristique magna viverra placerat. Sed consequat erat ut velit fermentum, ut fringilla neque condimentum. Sed luctus dui odio, ac pulvinar leo dapibus non. Donec eget lorem nec neque vehicula posuere. Curabitur pulvinar nisi blandit, pulvinar mauris ut, iaculis turpis.\n\nInteger elit ligula, tempor vel viverra sed, interdum sit amet augue. Ut sit amet blandit magna. Vestibulum sagittis ac est ultrices sodales. Nam odio elit, tincidunt vel aliquam sed, aliquam id sem. Praesent fringilla consectetur auctor. Aliquam ligula odio, porta ac laoreet id, consectetur at risus. Morbi placerat libero ac lectus lobortis elementum. Donec vulputate iaculis justo, eget cursus neque pretium eu. Phasellus quis dictum erat. Pellentesque dapibus dui non arcu fringilla, sit amet efficitur nisl dignissim. Phasellus quis ultricies tellus, ac suscipit tellus. Donec sodales tincidunt ornare. Phasellus massa nunc, malesuada ornare velit et, consectetur tempor erat.\n\n\n  </div>\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="agreeTerms()" >Agree</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/terms-and-condition/terms-and-condition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], TermsAndConditionPage);

//# sourceMappingURL=terms-and-condition.js.map

/***/ }),

/***/ 114:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 155:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		393,
		3
	],
	"../pages/pre-settings/pre-settings.module": [
		395,
		2
	],
	"../pages/terms-and-condition/terms-and-condition.module": [
		394,
		1
	],
	"../pages/welcome/welcome.module": [
		396,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 155;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(335);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_period_start_period_start__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */],
            __WEBPACK_IMPORTED_MODULE_11__components_period_start_period_start__["a" /* PeriodStartComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-and-condition/terms-and-condition.module#TermsAndConditionPageModule', name: 'TermsAndConditionPage', segment: 'terms-and-condition', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pre-settings/pre-settings.module#PreSettingsPageModule', name: 'PreSettingsPage', segment: 'pre-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_date_picker__["a" /* DatePicker */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pre_settings_pre_settings__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.menu = menu;
        //CONTROLLING THE ROOT PAGE FOR THE APP
        this.rootFlag = localStorage.getItem("ROOTFLAG");
        switch (this.rootFlag) {
            case null:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */];
                break;
            case "null":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */];
                break;
            case "tnc":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_welcome_welcome__["a" /* WelcomePage */];
                break;
            case "welcome":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */];
                break;
            case "preSetting":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                break;
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 385:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__period_days_last_period_days_last__ = __webpack_require__(389);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__menstrual_cycle_menstrual_cycle__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__period_length_period_length__ = __webpack_require__(391);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__period_days_last_period_days_last__["a" /* PeriodDaysLastComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menstrual_cycle_menstrual_cycle__["a" /* MenstrualCycleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__period_length_period_length__["a" /* PeriodLengthComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */],
            __WEBPACK_IMPORTED_MODULE_3__period_days_last_period_days_last__["a" /* PeriodDaysLastComponent */],
            __WEBPACK_IMPORTED_MODULE_4__menstrual_cycle_menstrual_cycle__["a" /* MenstrualCycleComponent */],
            __WEBPACK_IMPORTED_MODULE_5__period_length_period_length__["a" /* PeriodLengthComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CdCalenderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the CdCalenderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var CdCalenderComponent = (function () {
    function CdCalenderComponent() {
        console.log('Hello CdCalenderComponent Component');
    }
    CdCalenderComponent.prototype.ngAfterViewInit = function () {
        var now = __WEBPACK_IMPORTED_MODULE_1_moment__();
        var next = __WEBPACK_IMPORTED_MODULE_1_moment__().add(2, 'year');
        this.calenderData = this.getMonthsBetween(now, next);
    };
    CdCalenderComponent.prototype.getWeek = function (moment_val) {
        var startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).startOf('week'), stopDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).endOf('week');
        var dateArray = new Array();
        var currentDate = startDate;
        while (!(currentDate.startOf('day').isAfter(stopDate.startOf('day')))) {
            dateArray.push(__WEBPACK_IMPORTED_MODULE_1_moment__(currentDate));
            currentDate = currentDate.add(1, 'days');
        }
        return dateArray;
    };
    CdCalenderComponent.prototype.getMonth = function (moment_val) {
        var startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).startOf('month'), stopDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).endOf('month');
        var weekArray = new Array();
        var currentDate = startDate;
        while (!(currentDate.startOf('week').isAfter(stopDate.startOf('week')))) {
            weekArray.push(this.getWeek(currentDate));
            currentDate = currentDate.add(1, 'week');
        }
        return weekArray;
    };
    CdCalenderComponent.prototype.getYear = function (moment_val) {
        var startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).startOf('year'), stopDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val).endOf('year');
        var monthArray = new Array();
        var currentDate = startDate;
        while (!(currentDate.startOf('month').isAfter(stopDate.startOf('month')))) {
            monthArray.push(this.getMonth(currentDate));
            currentDate = currentDate.add(1, 'month');
        }
        return monthArray;
    };
    CdCalenderComponent.prototype.getMonthsBetween = function (moment_val1, moment_val2) {
        var startDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val1).startOf('month'), stopDate = __WEBPACK_IMPORTED_MODULE_1_moment__(moment_val2).endOf('month');
        var monthArray = new Array();
        var currentDate = startDate;
        while (!(currentDate.startOf('month').isAfter(stopDate.startOf('month')))) {
            monthArray.push(this.getMonth(currentDate));
            currentDate = currentDate.add(1, 'month');
        }
        return monthArray;
    };
    return CdCalenderComponent;
}());
CdCalenderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'cd-calender',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/components/cd-calender/cd-calender.html"*/'<!-- Generated template for the CdCalenderComponent component -->\n<ion-grid *ngFor="let month of calenderData; let i = index">\n  <div>{{month[2][0].format(\'MMMM YYYY\')}}</div>\n  <ion-row class="week-label">\n      <ion-col col  >SUN</ion-col>\n      <ion-col col  >MON</ion-col>\n      <ion-col col  >TUE</ion-col>\n      <ion-col col  >WED</ion-col>\n      <ion-col col  >THU</ion-col>\n      <ion-col col  >FRI</ion-col>\n      <ion-col col  >SAT</ion-col>\n    </ion-row>\n  <ion-row *ngFor="let week of month">\n    <ion-col col *ngFor="let day of week"  [ngClass]="(month[2][0].month() == day.month())?\'bold\':\'fade\'">{{day.format(\'D\')}}</ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/components/cd-calender/cd-calender.html"*/
    }),
    __metadata("design:paramtypes", [])
], CdCalenderComponent);

//# sourceMappingURL=cd-calender.js.map

/***/ }),

/***/ 388:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 198,
	"./af.js": 198,
	"./ar": 199,
	"./ar-dz": 200,
	"./ar-dz.js": 200,
	"./ar-kw": 201,
	"./ar-kw.js": 201,
	"./ar-ly": 202,
	"./ar-ly.js": 202,
	"./ar-ma": 203,
	"./ar-ma.js": 203,
	"./ar-sa": 204,
	"./ar-sa.js": 204,
	"./ar-tn": 205,
	"./ar-tn.js": 205,
	"./ar.js": 199,
	"./az": 206,
	"./az.js": 206,
	"./be": 207,
	"./be.js": 207,
	"./bg": 208,
	"./bg.js": 208,
	"./bm": 209,
	"./bm.js": 209,
	"./bn": 210,
	"./bn.js": 210,
	"./bo": 211,
	"./bo.js": 211,
	"./br": 212,
	"./br.js": 212,
	"./bs": 213,
	"./bs.js": 213,
	"./ca": 214,
	"./ca.js": 214,
	"./cs": 215,
	"./cs.js": 215,
	"./cv": 216,
	"./cv.js": 216,
	"./cy": 217,
	"./cy.js": 217,
	"./da": 218,
	"./da.js": 218,
	"./de": 219,
	"./de-at": 220,
	"./de-at.js": 220,
	"./de-ch": 221,
	"./de-ch.js": 221,
	"./de.js": 219,
	"./dv": 222,
	"./dv.js": 222,
	"./el": 223,
	"./el.js": 223,
	"./en-au": 224,
	"./en-au.js": 224,
	"./en-ca": 225,
	"./en-ca.js": 225,
	"./en-gb": 226,
	"./en-gb.js": 226,
	"./en-ie": 227,
	"./en-ie.js": 227,
	"./en-nz": 228,
	"./en-nz.js": 228,
	"./eo": 229,
	"./eo.js": 229,
	"./es": 230,
	"./es-do": 231,
	"./es-do.js": 231,
	"./es-us": 232,
	"./es-us.js": 232,
	"./es.js": 230,
	"./et": 233,
	"./et.js": 233,
	"./eu": 234,
	"./eu.js": 234,
	"./fa": 235,
	"./fa.js": 235,
	"./fi": 236,
	"./fi.js": 236,
	"./fo": 237,
	"./fo.js": 237,
	"./fr": 238,
	"./fr-ca": 239,
	"./fr-ca.js": 239,
	"./fr-ch": 240,
	"./fr-ch.js": 240,
	"./fr.js": 238,
	"./fy": 241,
	"./fy.js": 241,
	"./gd": 242,
	"./gd.js": 242,
	"./gl": 243,
	"./gl.js": 243,
	"./gom-latn": 244,
	"./gom-latn.js": 244,
	"./gu": 245,
	"./gu.js": 245,
	"./he": 246,
	"./he.js": 246,
	"./hi": 247,
	"./hi.js": 247,
	"./hr": 248,
	"./hr.js": 248,
	"./hu": 249,
	"./hu.js": 249,
	"./hy-am": 250,
	"./hy-am.js": 250,
	"./id": 251,
	"./id.js": 251,
	"./is": 252,
	"./is.js": 252,
	"./it": 253,
	"./it.js": 253,
	"./ja": 254,
	"./ja.js": 254,
	"./jv": 255,
	"./jv.js": 255,
	"./ka": 256,
	"./ka.js": 256,
	"./kk": 257,
	"./kk.js": 257,
	"./km": 258,
	"./km.js": 258,
	"./kn": 259,
	"./kn.js": 259,
	"./ko": 260,
	"./ko.js": 260,
	"./ky": 261,
	"./ky.js": 261,
	"./lb": 262,
	"./lb.js": 262,
	"./lo": 263,
	"./lo.js": 263,
	"./lt": 264,
	"./lt.js": 264,
	"./lv": 265,
	"./lv.js": 265,
	"./me": 266,
	"./me.js": 266,
	"./mi": 267,
	"./mi.js": 267,
	"./mk": 268,
	"./mk.js": 268,
	"./ml": 269,
	"./ml.js": 269,
	"./mr": 270,
	"./mr.js": 270,
	"./ms": 271,
	"./ms-my": 272,
	"./ms-my.js": 272,
	"./ms.js": 271,
	"./my": 273,
	"./my.js": 273,
	"./nb": 274,
	"./nb.js": 274,
	"./ne": 275,
	"./ne.js": 275,
	"./nl": 276,
	"./nl-be": 277,
	"./nl-be.js": 277,
	"./nl.js": 276,
	"./nn": 278,
	"./nn.js": 278,
	"./pa-in": 279,
	"./pa-in.js": 279,
	"./pl": 280,
	"./pl.js": 280,
	"./pt": 281,
	"./pt-br": 282,
	"./pt-br.js": 282,
	"./pt.js": 281,
	"./ro": 283,
	"./ro.js": 283,
	"./ru": 284,
	"./ru.js": 284,
	"./sd": 285,
	"./sd.js": 285,
	"./se": 286,
	"./se.js": 286,
	"./si": 287,
	"./si.js": 287,
	"./sk": 288,
	"./sk.js": 288,
	"./sl": 289,
	"./sl.js": 289,
	"./sq": 290,
	"./sq.js": 290,
	"./sr": 291,
	"./sr-cyrl": 292,
	"./sr-cyrl.js": 292,
	"./sr.js": 291,
	"./ss": 293,
	"./ss.js": 293,
	"./sv": 294,
	"./sv.js": 294,
	"./sw": 295,
	"./sw.js": 295,
	"./ta": 296,
	"./ta.js": 296,
	"./te": 297,
	"./te.js": 297,
	"./tet": 298,
	"./tet.js": 298,
	"./th": 299,
	"./th.js": 299,
	"./tl-ph": 300,
	"./tl-ph.js": 300,
	"./tlh": 301,
	"./tlh.js": 301,
	"./tr": 302,
	"./tr.js": 302,
	"./tzl": 303,
	"./tzl.js": 303,
	"./tzm": 304,
	"./tzm-latn": 305,
	"./tzm-latn.js": 305,
	"./tzm.js": 304,
	"./uk": 306,
	"./uk.js": 306,
	"./ur": 307,
	"./ur.js": 307,
	"./uz": 308,
	"./uz-latn": 309,
	"./uz-latn.js": 309,
	"./uz.js": 308,
	"./vi": 310,
	"./vi.js": 310,
	"./x-pseudo": 311,
	"./x-pseudo.js": 311,
	"./yo": 312,
	"./yo.js": 312,
	"./zh-cn": 313,
	"./zh-cn.js": 313,
	"./zh-hk": 314,
	"./zh-hk.js": 314,
	"./zh-tw": 315,
	"./zh-tw.js": 315
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 388;

/***/ }),

/***/ 389:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodDaysLastComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PeriodDaysLastComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PeriodDaysLastComponent = (function () {
    function PeriodDaysLastComponent() {
        console.log('Hello PeriodDaysLastComponent Component');
        this.text = 'Hello World';
    }
    return PeriodDaysLastComponent;
}());
PeriodDaysLastComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'period-days-last',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-days-last/period-days-last.html"*/'<!-- Generated template for the PeriodDaysLastComponent component -->\n<div class="top-margin">\n How many days it last?\n</div>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-days-last/period-days-last.html"*/
    }),
    __metadata("design:paramtypes", [])
], PeriodDaysLastComponent);

//# sourceMappingURL=period-days-last.js.map

/***/ }),

/***/ 390:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenstrualCycleComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the MenstrualCycleComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var MenstrualCycleComponent = (function () {
    function MenstrualCycleComponent() {
        console.log('Hello MenstrualCycleComponent Component');
        this.text = 'Hello World';
    }
    return MenstrualCycleComponent;
}());
MenstrualCycleComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'menstrual-cycle',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/components/menstrual-cycle/menstrual-cycle.html"*/'<!-- Generated template for the MenstrualCycleComponent component -->\n<div class="top-margin">\n  How long is your usual menstrual cycle?\n</div>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/components/menstrual-cycle/menstrual-cycle.html"*/
    }),
    __metadata("design:paramtypes", [])
], MenstrualCycleComponent);

//# sourceMappingURL=menstrual-cycle.js.map

/***/ }),

/***/ 391:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodLengthComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * Generated class for the PeriodLengthComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PeriodLengthComponent = (function () {
    function PeriodLengthComponent() {
        console.log('Hello PeriodLengthComponent Component');
        this.text = 'Hello World';
    }
    return PeriodLengthComponent;
}());
PeriodLengthComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'period-length',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-length/period-length.html"*/'<!-- Generated template for the PeriodLengthComponent component -->\n<div class="top-margin">\n  How many days are your usual period length?\n</div>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-length/period-length.html"*/
    }),
    __metadata("design:paramtypes", [])
], PeriodLengthComponent);

//# sourceMappingURL=period-length.js.map

/***/ }),

/***/ 392:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PeriodStartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the PeriodStartComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var PeriodStartComponent = (function () {
    function PeriodStartComponent(datePicker) {
        this.datePicker = datePicker;
        this.checkValidation = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        console.log('Hello PeriodStartComponent Component');
        this.text = 'Hello World';
    }
    PeriodStartComponent.prototype.selectDate = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
        }).then(function (date) { return console.log('Got date: ', date); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    //as per chetan recomendation ignore the 
    PeriodStartComponent.prototype.onChange = function () {
        console.log("event");
    };
    return PeriodStartComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["S" /* Output */])(),
    __metadata("design:type", Object)
], PeriodStartComponent.prototype, "checkValidation", void 0);
PeriodStartComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'period-start',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-start/period-start.html"*/'<!-- Generated template for the PeriodStartComponent component -->\n<div class="period-start-content">\n\n  <ion-list >\n    <ion-item class="first-item">\n       <ion-input type="text" placeholder="First Name"  (change)="onChange()"></ion-input>\n    </ion-item>\n\n    <ion-item>\n       <ion-input type="email" placeholder="Email"></ion-input>\n    </ion-item>\n\n    <ion-item class="last-item">\n    </ion-item>\n  </ion-list>\n\n  <label>When did you last period start?</label>\n  \n   <button (click)="selectDate()">click</button>\n</div>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/components/period-start/period-start.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_date_picker__["a" /* DatePicker */]])
], PeriodStartComponent);

//# sourceMappingURL=period-start.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, picker, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.picker = picker;
        this.menu = menu;
        this.items = [];
        this.menu.enable(true);
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad HomePage');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PickerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_settings_pre_settings__ = __webpack_require__(53);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.slides = [];
        this.menu.enable(false);
        this.slides = ["slide1", "slide2", "slide3", "slide4"];
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    WelcomePage.prototype.skip = function () {
        localStorage.setItem("ROOTFLAG", "welcome");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__pre_settings_pre_settings__["a" /* PreSettingsPage */]);
    };
    return WelcomePage;
}());
WelcomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  \n  <ion-slides pager >\n    <ion-slide class="slide" *ngFor="let page of slides">\n      <img src="./assets/img/welcome.jpg"/>\n      <h1>Ovulation Day</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et tincidunt purus. Maecenas sodales luctus nibh vel molestie.</p>\n    </ion-slide>\n    \n  </ion-slides>\n\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="skip()" >Skip it, I know</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the PreSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PreSettingsPage = (function () {
    function PreSettingsPage(picker, datePicker, navCtrl, navParams, menu, app) {
        this.picker = picker;
        this.datePicker = datePicker;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.app = app;
        this.nextShow = true;
        this.menu.enable(false);
        this.disableBtn = false;
        this.isActive = 1;
    }
    PreSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreSettingsPage');
        this.circleArray = [1, 2, 3, 4];
        this.slides.lockSwipes(true);
        this.month = "October";
        this.day = "20";
        this.year = "2018";
        this.cycleLength = "";
        this.items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];
        //(this.name) ? this.disabled = false : this.disabled = true;
        console.log(this.isActive);
    };
    PreSettingsPage.prototype.next = function () {
        this.isActive++;
        this.slides.lockSwipes(false); //unlock swipe
        this.slides.slideTo(this.isActive - 1);
        (this.isActive == 4) ? this.nextShow = false : this.nextShow = true;
        this.slides.lockSwipes(true); //lock swipe
        (this.isActive > 1) ? this.backEnabled = true : this.backEnabled = false;
    };
    PreSettingsPage.prototype.start = function () {
        localStorage.setItem("ROOTFLAG", "preSetting");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PreSettingsPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex() + 1;
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
    };
    PreSettingsPage.prototype.back = function () {
        this.isActive--;
        this.slides.lockSwipes(false); //unlock swipe
        this.slides.slideTo(this.isActive - 1);
        this.slides.lockSwipes(true); //lock swipe
        (this.isActive > 1) ? this.backEnabled = true : this.backEnabled = false;
        (this.isActive == 4) ? this.nextShow = false : this.nextShow = true;
    };
    PreSettingsPage.prototype.selectDate = function () {
        this.datePicker.show({
            date: new Date(),
            mode: 'date'
        }).then(function (date) { return alert(__WEBPACK_IMPORTED_MODULE_4_moment__(date).month() + ": " + __WEBPACK_IMPORTED_MODULE_4_moment__(date).day() + ": " + __WEBPACK_IMPORTED_MODULE_4_moment__(date).year()); }, function (err) { return console.log('Error occurred while getting date: ', err); });
    };
    PreSettingsPage.prototype.runTimeChange = function ($event) {
        console.log($event);
    };
    PreSettingsPage.prototype.selectPeriodDay = function () {
        var _this = this;
        var selectedIndex = 7;
        var picker1 = this.picker.create({
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: "Done",
                    handler: function (data) {
                        _this.lastPeriodDay = data.name.text;
                        console.log(data.name.text);
                    }
                }
            ]
        });
        var colArray = [];
        for (var i = 0; i < this.items.length; i++) {
            var col = {
                text: this.items[i],
                value: i,
            };
            colArray.push(col);
        }
        var column = {
            name: "name",
            columnWidth: '100%',
            selectedIndex: selectedIndex,
            options: colArray
        };
        picker1.addColumn(column);
        picker1.present(picker1);
    };
    PreSettingsPage.prototype.cycleLengthDay = function () {
        var _this = this;
        var selectedIndex = 7;
        var picker2 = this.picker.create({
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: "Done",
                    handler: function (data) {
                        _this.cycleLength = data.name.text;
                        console.log(data.name.text);
                    }
                }
            ]
        });
        var colArray = [];
        for (var i = 0; i < this.items.length; i++) {
            var col = {
                text: this.items[i],
                value: i,
            };
            colArray.push(col);
        }
        var column = {
            name: "name",
            columnWidth: '100%',
            selectedIndex: selectedIndex,
            options: colArray
        };
        picker2.addColumn(column);
        picker2.present(picker2);
    };
    PreSettingsPage.prototype.periodLengthDay = function () {
        var _this = this;
        var selectedIndex = 7;
        var picker3 = this.picker.create({
            buttons: [
                {
                    text: "Cancel",
                    role: 'cancel',
                    handler: function (data) {
                    }
                },
                {
                    text: "Done",
                    handler: function (data) {
                        _this.periodLength = data.name.text;
                        console.log(data.name.text);
                    }
                }
            ]
        });
        var colArray = [];
        for (var i = 0; i < this.items.length; i++) {
            var col = {
                text: this.items[i],
                value: i,
            };
            colArray.push(col);
        }
        var column = {
            name: "name",
            columnWidth: '100%',
            selectedIndex: selectedIndex,
            options: colArray
        };
        picker3.addColumn(column);
        picker3.present(picker3);
    };
    return PreSettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Slides */]) === "function" && _a || Object)
], PreSettingsPage.prototype, "slides", void 0);
PreSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-settings',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/pre-settings/pre-settings.html"*/'<!--\n  Generated template for the PreSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   \n  <ion-navbar>\n     <ion-buttons [hidden]="!backEnabled" left>\n          <button  ion-button (click)="back()">Back</button>\n      </ion-buttons>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n   <!-- <div class="flex-container">\n    <div class="status-line"></div>\n    <div class="flex-item">1</div>\n    <div class="flex-item">2</div>\n    <div class="flex-item">3</div>  \n    <div class="flex-item">4</div> \n    <div class="flex-item">5</div>\n  </div>  -->\n   <div class="status-bar">\n    <ul>\n      <li *ngFor="let circle of circleArray; let i=index" [ngClass]="{active: isActive==i+1}">{{i+1}}</li>\n    </ul>  \n  </div> \n\n  <ion-slides (ionSlideDidChange)="slideChanged()"> \n      <ion-slide>\n        <div class="slideForm">\n       <ion-list>\n         <ion-item no-lines>\n         </ion-item>\n        <ion-item class="first-item">\n          <ion-input [(ngModel)]="name" type="text" placeholder="First Name" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="email" type="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n        </ion-item>\n      </ion-list>\n        </div>\n\n        <label>When did you last period start?</label>\n        <br/>\n          \n     \n       <div class="parent">\n         <div class="child">\n            <span (click)="selectDate()"><label>{{month}} </label><label>{{day}} </label><label>{{year}} </label></span>\n         </div>\n       </div>\n         \n        \n\n      </ion-slide>\n      \n      <ion-slide>\n        <div class="days-label">How many days it last?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="selectPeriodDay()"><label>{{lastPeriodDay}} </label><label>Days </label></span>\n         </div>\n       </div>\n      </ion-slide>\n      \n      <ion-slide>\n          \n        <div class="days-label">How long is your usual menstrual cycle?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="cycleLengthDay()"><label>{{cycleLength}} </label>Days</span>\n         </div>\n        </div>\n      </ion-slide>\n\n       <ion-slide>\n       <div class="days-label">How many days are your usual period length?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="periodLengthDay()"><label>{{periodLength}} </label>Days</span>\n         </div>\n       </div>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n<ion-footer class="agree-div">\n  <button class="agree-btn" [hidden]="nextShow == false" [disabled]="disabled" ionInput="runTimeChange($event)" ion-button large full (click)="next()" >Next</button>\n  <button class="agree-btn" [hidden]="nextShow == true" ion-button large full (click)="start()" >Start</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/pre-settings/pre-settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PickerController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* PickerController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _g || Object])
], PreSettingsPage);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=pre-settings.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map