webpackJsonp([4],{

/***/ 103:
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
        selector: 'page-terms-and-condition',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/terms-and-condition/terms-and-condition.html"*/'<!--\n  Generated template for the TermsAndConditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terms and Condition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div >\n\n  </div>\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="agreeTerms()" >Agree</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/terms-and-condition/terms-and-condition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
], TermsAndConditionPage);

//# sourceMappingURL=terms-and-condition.js.map

/***/ }),

/***/ 112:
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
webpackEmptyAsyncContext.id = 112;

/***/ }),

/***/ 153:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/home/home.module": [
		388,
		3
	],
	"../pages/pre-settings/pre-settings.module": [
		390,
		2
	],
	"../pages/terms-and-condition/terms-and-condition.module": [
		389,
		1
	],
	"../pages/welcome/welcome.module": [
		391,
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
webpackAsyncContext.id = 153;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 315:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(334);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_components_module__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_welcome_welcome__ = __webpack_require__(52);
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
            __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-and-condition/terms-and-condition.module#TermsAndConditionPageModule', name: 'TermsAndConditionPage', segment: 'terms-and-condition', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pre-settings/pre-settings.module#PreSettingsPageModule', name: 'PreSettingsPage', segment: 'pre-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_8__components_components_module__["a" /* ComponentsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
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
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 383:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(103);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__ = __webpack_require__(385);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(25);
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
        declarations: [__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */]),],
        exports: [__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 385:
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

/***/ 387:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 197,
	"./af.js": 197,
	"./ar": 198,
	"./ar-dz": 199,
	"./ar-dz.js": 199,
	"./ar-kw": 200,
	"./ar-kw.js": 200,
	"./ar-ly": 201,
	"./ar-ly.js": 201,
	"./ar-ma": 202,
	"./ar-ma.js": 202,
	"./ar-sa": 203,
	"./ar-sa.js": 203,
	"./ar-tn": 204,
	"./ar-tn.js": 204,
	"./ar.js": 198,
	"./az": 205,
	"./az.js": 205,
	"./be": 206,
	"./be.js": 206,
	"./bg": 207,
	"./bg.js": 207,
	"./bm": 208,
	"./bm.js": 208,
	"./bn": 209,
	"./bn.js": 209,
	"./bo": 210,
	"./bo.js": 210,
	"./br": 211,
	"./br.js": 211,
	"./bs": 212,
	"./bs.js": 212,
	"./ca": 213,
	"./ca.js": 213,
	"./cs": 214,
	"./cs.js": 214,
	"./cv": 215,
	"./cv.js": 215,
	"./cy": 216,
	"./cy.js": 216,
	"./da": 217,
	"./da.js": 217,
	"./de": 218,
	"./de-at": 219,
	"./de-at.js": 219,
	"./de-ch": 220,
	"./de-ch.js": 220,
	"./de.js": 218,
	"./dv": 221,
	"./dv.js": 221,
	"./el": 222,
	"./el.js": 222,
	"./en-au": 223,
	"./en-au.js": 223,
	"./en-ca": 224,
	"./en-ca.js": 224,
	"./en-gb": 225,
	"./en-gb.js": 225,
	"./en-ie": 226,
	"./en-ie.js": 226,
	"./en-nz": 227,
	"./en-nz.js": 227,
	"./eo": 228,
	"./eo.js": 228,
	"./es": 229,
	"./es-do": 230,
	"./es-do.js": 230,
	"./es-us": 231,
	"./es-us.js": 231,
	"./es.js": 229,
	"./et": 232,
	"./et.js": 232,
	"./eu": 233,
	"./eu.js": 233,
	"./fa": 234,
	"./fa.js": 234,
	"./fi": 235,
	"./fi.js": 235,
	"./fo": 236,
	"./fo.js": 236,
	"./fr": 237,
	"./fr-ca": 238,
	"./fr-ca.js": 238,
	"./fr-ch": 239,
	"./fr-ch.js": 239,
	"./fr.js": 237,
	"./fy": 240,
	"./fy.js": 240,
	"./gd": 241,
	"./gd.js": 241,
	"./gl": 242,
	"./gl.js": 242,
	"./gom-latn": 243,
	"./gom-latn.js": 243,
	"./gu": 244,
	"./gu.js": 244,
	"./he": 245,
	"./he.js": 245,
	"./hi": 246,
	"./hi.js": 246,
	"./hr": 247,
	"./hr.js": 247,
	"./hu": 248,
	"./hu.js": 248,
	"./hy-am": 249,
	"./hy-am.js": 249,
	"./id": 250,
	"./id.js": 250,
	"./is": 251,
	"./is.js": 251,
	"./it": 252,
	"./it.js": 252,
	"./ja": 253,
	"./ja.js": 253,
	"./jv": 254,
	"./jv.js": 254,
	"./ka": 255,
	"./ka.js": 255,
	"./kk": 256,
	"./kk.js": 256,
	"./km": 257,
	"./km.js": 257,
	"./kn": 258,
	"./kn.js": 258,
	"./ko": 259,
	"./ko.js": 259,
	"./ky": 260,
	"./ky.js": 260,
	"./lb": 261,
	"./lb.js": 261,
	"./lo": 262,
	"./lo.js": 262,
	"./lt": 263,
	"./lt.js": 263,
	"./lv": 264,
	"./lv.js": 264,
	"./me": 265,
	"./me.js": 265,
	"./mi": 266,
	"./mi.js": 266,
	"./mk": 267,
	"./mk.js": 267,
	"./ml": 268,
	"./ml.js": 268,
	"./mr": 269,
	"./mr.js": 269,
	"./ms": 270,
	"./ms-my": 271,
	"./ms-my.js": 271,
	"./ms.js": 270,
	"./my": 272,
	"./my.js": 272,
	"./nb": 273,
	"./nb.js": 273,
	"./ne": 274,
	"./ne.js": 274,
	"./nl": 275,
	"./nl-be": 276,
	"./nl-be.js": 276,
	"./nl.js": 275,
	"./nn": 277,
	"./nn.js": 277,
	"./pa-in": 278,
	"./pa-in.js": 278,
	"./pl": 279,
	"./pl.js": 279,
	"./pt": 280,
	"./pt-br": 281,
	"./pt-br.js": 281,
	"./pt.js": 280,
	"./ro": 282,
	"./ro.js": 282,
	"./ru": 283,
	"./ru.js": 283,
	"./sd": 284,
	"./sd.js": 284,
	"./se": 285,
	"./se.js": 285,
	"./si": 286,
	"./si.js": 286,
	"./sk": 287,
	"./sk.js": 287,
	"./sl": 288,
	"./sl.js": 288,
	"./sq": 289,
	"./sq.js": 289,
	"./sr": 290,
	"./sr-cyrl": 291,
	"./sr-cyrl.js": 291,
	"./sr.js": 290,
	"./ss": 292,
	"./ss.js": 292,
	"./sv": 293,
	"./sv.js": 293,
	"./sw": 294,
	"./sw.js": 294,
	"./ta": 295,
	"./ta.js": 295,
	"./te": 296,
	"./te.js": 296,
	"./tet": 297,
	"./tet.js": 297,
	"./th": 298,
	"./th.js": 298,
	"./tl-ph": 299,
	"./tl-ph.js": 299,
	"./tlh": 300,
	"./tlh.js": 300,
	"./tr": 301,
	"./tr.js": 301,
	"./tzl": 302,
	"./tzl.js": 302,
	"./tzm": 303,
	"./tzm-latn": 304,
	"./tzm-latn.js": 304,
	"./tzm.js": 303,
	"./uk": 305,
	"./uk.js": 305,
	"./ur": 306,
	"./ur.js": 306,
	"./uz": 307,
	"./uz-latn": 308,
	"./uz-latn.js": 308,
	"./uz.js": 307,
	"./vi": 309,
	"./vi.js": 309,
	"./x-pseudo": 310,
	"./x-pseudo.js": 310,
	"./yo": 311,
	"./yo.js": 311,
	"./zh-cn": 312,
	"./zh-cn.js": 312,
	"./zh-hk": 313,
	"./zh-hk.js": 313,
	"./zh-tw": 314,
	"./zh-tw.js": 314
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
webpackContext.id = 387;

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
        selector: 'page-home',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\nhello\n\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* PickerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
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
        this.slides = ["slide1", "slide2", "slide3", "slide4", "slide5"];
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
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  \n  <ion-slides pager >\n    <ion-slide class="slide" *ngFor="let page of slides">\n      <img src="./assets/img/sample.png"/>\n      <h1>Ovulation Day</h1>\n      <p>d asdasdadsads asdasdasdasd asdasdasdasd asdasdasasd asd asdasd asdasdasd asdasdadasdasd asda copy</p>\n    </ion-slide>\n    \n  </ion-slides>\n\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="skip()" >Skip it, I know</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]])
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
    function PreSettingsPage(navCtrl, navParams, menu) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menu = menu;
        this.menu.enable(false);
        this.disableBtn = false;
        this.isActive = 1;
    }
    PreSettingsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PreSettingsPage');
        this.circleArray = [1, 2, 3, 4, 5];
    };
    PreSettingsPage.prototype.next = function () {
        this.isActive++;
    };
    PreSettingsPage.prototype.start = function () {
        localStorage.setItem("ROOTFLAG", "preSetting");
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    PreSettingsPage.prototype.slideChanged = function () {
        var currentIndex = this.slides.getActiveIndex() + 1;
        console.log('Current index is', currentIndex);
        if (currentIndex > 4) {
        }
    };
    return PreSettingsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Slides */]) === "function" && _a || Object)
], PreSettingsPage.prototype, "slides", void 0);
PreSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-settings',template:/*ion-inline-start:"/Users/aniruddha/Desktop/PAK/calender/src/pages/pre-settings/pre-settings.html"*/'<!--\n  Generated template for the PreSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>pre-settings</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n   <!-- <div class="flex-container">\n    <div class="status-line"></div>\n    <div class="flex-item">1</div>\n    <div class="flex-item">2</div>\n    <div class="flex-item">3</div>  \n    <div class="flex-item">4</div> \n    <div class="flex-item">5</div>\n  </div>  -->\n   <div class="status-bar">\n    <ul>\n      <li *ngFor="let circle of circleArray; let i=index"[ngClass]="{active: isActive==i+1}">{{i+1}}</li>\n    </ul>  \n  </div> \n\n  <ion-slides (ionSlideDidChange)="slideChanged()"> \n      <ion-slide>\n        <h1>Slide 1</h1>\n      </ion-slide>\n      \n      <ion-slide>\n        <h1>Slide 2</h1>\n      </ion-slide>\n      \n      <ion-slide>\n        <h1>Slide 3</h1>\n      </ion-slide>\n\n       <ion-slide>\n        <h1>Slide 4</h1>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n<ion-footer class="agree-div">\n  <button class="agree-btn" ion-button large full (click)="next()" >next</button>\n   <button class="agree-btn" ion-button large full (click)="start()" >Start</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/aniruddha/Desktop/PAK/calender/src/pages/pre-settings/pre-settings.html"*/,
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* MenuController */]) === "function" && _d || Object])
], PreSettingsPage);

var _a, _b, _c, _d;
//# sourceMappingURL=pre-settings.js.map

/***/ })

},[315]);
//# sourceMappingURL=main.js.map