webpackJsonp([12],{

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
        selector: 'page-terms-and-condition',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/terms-and-condition/terms-and-condition.html"*/'<!--\n  Generated template for the TermsAndConditionPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Terms and Condition</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <div >\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget turpis non ex eleifend ultrices at ac augue. Vestibulum iaculis velit non eros fringilla rutrum. Pellentesque vitae porta turpis, eget convallis metus. Donec in arcu vitae ipsum posuere rhoncus ut eu dui. Etiam elementum nibh tristique magna viverra placerat. Sed consequat erat ut velit fermentum, ut fringilla neque condimentum. Sed luctus dui odio, ac pulvinar leo dapibus non. Donec eget lorem nec neque vehicula posuere. Curabitur pulvinar nisi blandit, pulvinar mauris ut, iaculis turpis.\n\nInteger elit ligula, tempor vel viverra sed, interdum sit amet augue. Ut sit amet blandit magna. Vestibulum sagittis ac est ultrices sodales. Nam odio elit, tincidunt vel aliquam sed, aliquam id sem. Praesent fringilla consectetur auctor. Aliquam ligula odio, porta ac laoreet id, consectetur at risus. Morbi placerat libero ac lectus lobortis elementum. Donec vulputate iaculis justo, eget cursus neque pretium eu. Phasellus quis dictum erat. Pellentesque dapibus dui non arcu fringilla, sit amet efficitur nisl dignissim. Phasellus quis ultricies tellus, ac suscipit tellus. Donec sodales tincidunt ornare. Phasellus massa nunc, malesuada ornare velit et, consectetur tempor erat.\n\n\n  </div>\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="agreeTerms()" >Agree</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/terms-and-condition/terms-and-condition.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
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
	"../pages/faqs/faqs.module": [
		389,
		7
	],
	"../pages/home/home.module": [
		390,
		11
	],
	"../pages/indications/indications.module": [
		391,
		6
	],
	"../pages/period-logs/period-logs.module": [
		392,
		5
	],
	"../pages/pre-settings/pre-settings.module": [
		393,
		10
	],
	"../pages/privacy-policy/privacy-policy.module": [
		394,
		4
	],
	"../pages/profile/profile.module": [
		395,
		3
	],
	"../pages/settings/settings.module": [
		396,
		2
	],
	"../pages/share-history/share-history.module": [
		397,
		1
	],
	"../pages/terms-and-condition/terms-and-condition.module": [
		398,
		9
	],
	"../pages/terms-of-use/terms-of-use.module": [
		399,
		0
	],
	"../pages/welcome/welcome.module": [
		400,
		8
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
        selector: 'page-home',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/home/home.html"*/'<!--\n  Generated template for the HomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle icon-only>\n        <ion-icon name=\'menu\'></ion-icon>\n      </button>    \n    <ion-title>Home</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n</ion-content>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/home/home.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PickerController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], HomePage);

//# sourceMappingURL=home.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(386);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_components_module__ = __webpack_require__(387);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__ = __webpack_require__(154);
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
            __WEBPACK_IMPORTED_MODULE_8__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/faqs/faqs.module#FaqsPageModule', name: 'FaqsPage', segment: 'faqs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/indications/indications.module#IndicationsPageModule', name: 'IndicationsPage', segment: 'indications', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/period-logs/period-logs.module#PeriodLogsPageModule', name: 'PeriodLogsPage', segment: 'period-logs', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/pre-settings/pre-settings.module#PreSettingsPageModule', name: 'PreSettingsPage', segment: 'pre-settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/privacy-policy/privacy-policy.module#PrivacyPolicyPageModule', name: 'PrivacyPolicyPage', segment: 'privacy-policy', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/share-history/share-history.module#ShareHistoryPageModule', name: 'ShareHistoryPage', segment: 'share-history', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-and-condition/terms-and-condition.module#TermsAndConditionPageModule', name: 'TermsAndConditionPage', segment: 'terms-and-condition', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/terms-of-use/terms-of-use.module#TermsOfUsePageModule', name: 'TermsOfUsePage', segment: 'terms-of-use', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_7__components_components_module__["a" /* ComponentsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_welcome_welcome__["a" /* WelcomePage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_date_picker__["a" /* DatePicker */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 368:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 156,
	"./af.js": 156,
	"./ar": 157,
	"./ar-dz": 158,
	"./ar-dz.js": 158,
	"./ar-kw": 159,
	"./ar-kw.js": 159,
	"./ar-ly": 160,
	"./ar-ly.js": 160,
	"./ar-ma": 161,
	"./ar-ma.js": 161,
	"./ar-sa": 162,
	"./ar-sa.js": 162,
	"./ar-tn": 163,
	"./ar-tn.js": 163,
	"./ar.js": 157,
	"./az": 164,
	"./az.js": 164,
	"./be": 165,
	"./be.js": 165,
	"./bg": 166,
	"./bg.js": 166,
	"./bm": 167,
	"./bm.js": 167,
	"./bn": 168,
	"./bn.js": 168,
	"./bo": 169,
	"./bo.js": 169,
	"./br": 170,
	"./br.js": 170,
	"./bs": 171,
	"./bs.js": 171,
	"./ca": 172,
	"./ca.js": 172,
	"./cs": 173,
	"./cs.js": 173,
	"./cv": 174,
	"./cv.js": 174,
	"./cy": 175,
	"./cy.js": 175,
	"./da": 176,
	"./da.js": 176,
	"./de": 177,
	"./de-at": 178,
	"./de-at.js": 178,
	"./de-ch": 179,
	"./de-ch.js": 179,
	"./de.js": 177,
	"./dv": 180,
	"./dv.js": 180,
	"./el": 181,
	"./el.js": 181,
	"./en-au": 182,
	"./en-au.js": 182,
	"./en-ca": 183,
	"./en-ca.js": 183,
	"./en-gb": 184,
	"./en-gb.js": 184,
	"./en-ie": 185,
	"./en-ie.js": 185,
	"./en-nz": 186,
	"./en-nz.js": 186,
	"./eo": 187,
	"./eo.js": 187,
	"./es": 188,
	"./es-do": 189,
	"./es-do.js": 189,
	"./es-us": 190,
	"./es-us.js": 190,
	"./es.js": 188,
	"./et": 191,
	"./et.js": 191,
	"./eu": 192,
	"./eu.js": 192,
	"./fa": 193,
	"./fa.js": 193,
	"./fi": 194,
	"./fi.js": 194,
	"./fo": 195,
	"./fo.js": 195,
	"./fr": 196,
	"./fr-ca": 197,
	"./fr-ca.js": 197,
	"./fr-ch": 198,
	"./fr-ch.js": 198,
	"./fr.js": 196,
	"./fy": 199,
	"./fy.js": 199,
	"./gd": 200,
	"./gd.js": 200,
	"./gl": 201,
	"./gl.js": 201,
	"./gom-latn": 202,
	"./gom-latn.js": 202,
	"./gu": 203,
	"./gu.js": 203,
	"./he": 204,
	"./he.js": 204,
	"./hi": 205,
	"./hi.js": 205,
	"./hr": 206,
	"./hr.js": 206,
	"./hu": 207,
	"./hu.js": 207,
	"./hy-am": 208,
	"./hy-am.js": 208,
	"./id": 209,
	"./id.js": 209,
	"./is": 210,
	"./is.js": 210,
	"./it": 211,
	"./it.js": 211,
	"./ja": 212,
	"./ja.js": 212,
	"./jv": 213,
	"./jv.js": 213,
	"./ka": 214,
	"./ka.js": 214,
	"./kk": 215,
	"./kk.js": 215,
	"./km": 216,
	"./km.js": 216,
	"./kn": 217,
	"./kn.js": 217,
	"./ko": 218,
	"./ko.js": 218,
	"./ky": 219,
	"./ky.js": 219,
	"./lb": 220,
	"./lb.js": 220,
	"./lo": 221,
	"./lo.js": 221,
	"./lt": 222,
	"./lt.js": 222,
	"./lv": 223,
	"./lv.js": 223,
	"./me": 224,
	"./me.js": 224,
	"./mi": 225,
	"./mi.js": 225,
	"./mk": 226,
	"./mk.js": 226,
	"./ml": 227,
	"./ml.js": 227,
	"./mr": 228,
	"./mr.js": 228,
	"./ms": 229,
	"./ms-my": 230,
	"./ms-my.js": 230,
	"./ms.js": 229,
	"./my": 231,
	"./my.js": 231,
	"./nb": 232,
	"./nb.js": 232,
	"./ne": 233,
	"./ne.js": 233,
	"./nl": 234,
	"./nl-be": 235,
	"./nl-be.js": 235,
	"./nl.js": 234,
	"./nn": 236,
	"./nn.js": 236,
	"./pa-in": 237,
	"./pa-in.js": 237,
	"./pl": 238,
	"./pl.js": 238,
	"./pt": 239,
	"./pt-br": 240,
	"./pt-br.js": 240,
	"./pt.js": 239,
	"./ro": 241,
	"./ro.js": 241,
	"./ru": 242,
	"./ru.js": 242,
	"./sd": 243,
	"./sd.js": 243,
	"./se": 244,
	"./se.js": 244,
	"./si": 245,
	"./si.js": 245,
	"./sk": 246,
	"./sk.js": 246,
	"./sl": 247,
	"./sl.js": 247,
	"./sq": 248,
	"./sq.js": 248,
	"./sr": 249,
	"./sr-cyrl": 250,
	"./sr-cyrl.js": 250,
	"./sr.js": 249,
	"./ss": 251,
	"./ss.js": 251,
	"./sv": 252,
	"./sv.js": 252,
	"./sw": 253,
	"./sw.js": 253,
	"./ta": 254,
	"./ta.js": 254,
	"./te": 255,
	"./te.js": 255,
	"./tet": 256,
	"./tet.js": 256,
	"./th": 257,
	"./th.js": 257,
	"./tl-ph": 258,
	"./tl-ph.js": 258,
	"./tlh": 259,
	"./tlh.js": 259,
	"./tr": 260,
	"./tr.js": 260,
	"./tzl": 261,
	"./tzl.js": 261,
	"./tzm": 262,
	"./tzm-latn": 263,
	"./tzm-latn.js": 263,
	"./tzm.js": 262,
	"./uk": 264,
	"./uk.js": 264,
	"./ur": 265,
	"./ur.js": 265,
	"./uz": 266,
	"./uz-latn": 267,
	"./uz-latn.js": 267,
	"./uz.js": 266,
	"./vi": 268,
	"./vi.js": 268,
	"./x-pseudo": 269,
	"./x-pseudo.js": 269,
	"./yo": 270,
	"./yo.js": 270,
	"./zh-cn": 271,
	"./zh-cn.js": 271,
	"./zh-hk": 272,
	"./zh-hk.js": 272,
	"./zh-tw": 273,
	"./zh-tw.js": 273
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
webpackContext.id = 368;

/***/ }),

/***/ 386:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(314);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_terms_and_condition_terms_and_condition__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_pre_settings_pre_settings__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// import { HomePage } from '../pages/home/home';



var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, menu) {
        this.menu = menu;
        this.sideMenuList = [
            {
                icon: "home",
                tittle: "MENU.HOME",
                page: "HomePage"
            },
            {
                icon: "home",
                tittle: "MENU.PERIOD_LOGS",
                page: "PeriodLogsPage"
            },
            {
                icon: "home",
                tittle: "MENU.INDICATIONS",
                page: "IndicationsPage"
            },
            {
                icon: "home",
                tittle: "MENU.SHARE_HISTORY",
                page: "ShareHistoryPage"
            },
            {
                icon: "home",
                tittle: "MENU.FAQS",
                page: "FaqsPage"
            },
            {
                icon: "home",
                tittle: "MENU.PRIVACY_POLICY",
                page: "PrivacyPolicyPage"
            },
            {
                icon: "home",
                tittle: "MENU.TERMS",
                page: "TermsOfUsePage"
            },
            {
                icon: "home",
                tittle: "MENU.SHARE_APP",
                page: "SHARE_APP"
            },
            {
                icon: "home",
                tittle: "MENU.SETTINGS",
                page: "SettingsPage"
            }
        ];
        //CONTROLLING THE ROOT PAGE FOR THE APP
        this.rootFlag = localStorage.getItem("ROOTFLAG");
        console.log(this.rootFlag);
        console.log(typeof this.rootFlag);
        switch (this.rootFlag) {
            case null:
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */];
                break;
            case "null":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_terms_and_condition_terms_and_condition__["a" /* TermsAndConditionPage */];
                break;
            case "tnc":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_welcome_welcome__["a" /* WelcomePage */];
                break;
            case "welcome":
                this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_pre_settings_pre_settings__["a" /* PreSettingsPage */];
                break;
            case "preSetting":
                this.rootPage = "HomePage";
                break;
        }
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        console.log("navifating to " + page);
        if (page == "SHARE_APP") {
            alert("Sharing App...");
        }
        else {
            this.nav.setRoot(page);
        }
    };
    return MyApp;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
], MyApp.prototype, "nav", void 0);
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/app/app.html"*/'<ion-menu [content]="content">\n\n  <ion-content>\n    <section>\n        <ion-grid>\n            <ion-row>\n              <ion-col col-4>\n                <div class="img-holder">\n                    <img src="assets/img/sample.png">\n                </div>\n              </ion-col>\n              <ion-col col-8>\n                <h1>Ameena</h1>\n                <h2>email:</h2>\n                <h3>ameena@gmail.com</h3>\n              </ion-col>\n            </ion-row>\n          </ion-grid>\n    </section>\n      <ion-list>\n        <ion-item *ngFor="let item of sideMenuList" menuClose (click)="openPage(item.page)" >\n          <ion-icon [name]="item.icon" item-start ></ion-icon>\n            {{item.tittle}}\n        </ion-item>\n      </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 387:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__ = __webpack_require__(388);
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
        imports: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */])],
        exports: [__WEBPACK_IMPORTED_MODULE_1__cd_calender_cd_calender__["a" /* CdCalenderComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 388:
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
        selector: 'cd-calender',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/components/cd-calender/cd-calender.html"*/'<!-- Generated template for the CdCalenderComponent component -->\n<ion-grid *ngFor="let month of calenderData; let i = index">\n  <div>{{month[2][0].format(\'MMMM YYYY\')}}</div>\n  <ion-row class="week-label">\n      <ion-col col  >SUN</ion-col>\n      <ion-col col  >MON</ion-col>\n      <ion-col col  >TUE</ion-col>\n      <ion-col col  >WED</ion-col>\n      <ion-col col  >THU</ion-col>\n      <ion-col col  >FRI</ion-col>\n      <ion-col col  >SAT</ion-col>\n    </ion-row>\n  <ion-row *ngFor="let week of month">\n    <ion-col col *ngFor="let day of week"  [ngClass]="(month[2][0].month() == day.month())?\'bold\':\'fade\'">{{day.format(\'D\')}}</ion-col>\n  </ion-row>\n</ion-grid>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/components/cd-calender/cd-calender.html"*/
    }),
    __metadata("design:paramtypes", [])
], CdCalenderComponent);

//# sourceMappingURL=cd-calender.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreSettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__ = __webpack_require__(154);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* Slides */])
], PreSettingsPage.prototype, "slides", void 0);
PreSettingsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-pre-settings',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/pre-settings/pre-settings.html"*/'<!--\n  Generated template for the PreSettingsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n   \n  <ion-navbar>\n     <ion-buttons [hidden]="!backEnabled" left>\n          <button  ion-button (click)="back()">Back</button>\n      </ion-buttons>\n    <ion-title></ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n   <!-- <div class="flex-container">\n    <div class="status-line"></div>\n    <div class="flex-item">1</div>\n    <div class="flex-item">2</div>\n    <div class="flex-item">3</div>  \n    <div class="flex-item">4</div> \n    <div class="flex-item">5</div>\n  </div>  -->\n   <div class="status-bar">\n    <ul>\n      <li *ngFor="let circle of circleArray; let i=index" [ngClass]="{active: isActive==i+1}">{{i+1}}</li>\n    </ul>  \n  </div> \n\n  <ion-slides (ionSlideDidChange)="slideChanged()"> \n      <ion-slide>\n        <div class="slideForm">\n       <ion-list>\n         <ion-item no-lines>\n         </ion-item>\n        <ion-item class="first-item">\n          <ion-input [(ngModel)]="name" type="text" placeholder="First Name" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-input [(ngModel)]="email" type="email" placeholder="Email"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n        </ion-item>\n      </ion-list>\n        </div>\n\n        <label>When did you last period start?</label>\n        <br/>\n          \n     \n       <div class="parent">\n         <div class="child">\n            <span (click)="selectDate()"><label>{{month}} </label><label>{{day}} </label><label>{{year}} </label></span>\n         </div>\n       </div>\n         \n        \n\n      </ion-slide>\n      \n      <ion-slide>\n        <div class="days-label">How many days it last?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="selectPeriodDay()"><label>{{lastPeriodDay}} </label><label>Days </label></span>\n         </div>\n       </div>\n      </ion-slide>\n      \n      <ion-slide>\n          \n        <div class="days-label">How long is your usual menstrual cycle?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="cycleLengthDay()"><label>{{cycleLength}} </label>Days</span>\n         </div>\n        </div>\n      </ion-slide>\n\n       <ion-slide>\n       <div class="days-label">How many days are your usual period length?</div>\n        <div class="parent">\n         <div class="child">\n            <span (click)="periodLengthDay()"><label>{{periodLength}} </label>Days</span>\n         </div>\n       </div>\n      </ion-slide>\n\n  </ion-slides>\n</ion-content>\n\n<ion-footer class="agree-div">\n  <button class="agree-btn" [hidden]="nextShow == false" [disabled]="disabled" ionInput="runTimeChange($event)" ion-button large full (click)="next()" >Next</button>\n  <button class="agree-btn" [hidden]="nextShow == true" ion-button large full (click)="start()" >Start</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/pre-settings/pre-settings.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* PickerController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_date_picker__["a" /* DatePicker */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]])
], PreSettingsPage);

//# sourceMappingURL=pre-settings.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pre_settings_pre_settings__ = __webpack_require__(51);
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
        selector: 'page-welcome',template:/*ion-inline-start:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n\n<ion-content padding>\n  \n  <ion-slides pager >\n    <ion-slide class="slide" *ngFor="let page of slides">\n      <img src="./assets/img/welcome.jpg"/>\n      <h1>Ovulation Day</h1>\n      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer et tincidunt purus. Maecenas sodales luctus nibh vel molestie.</p>\n    </ion-slide>\n    \n  </ion-slides>\n\n</ion-content>\n\n<ion-footer class="agree-div">\n   <button class="agree-btn" ion-button large full (click)="skip()" >Skip it, I know</button>\n</ion-footer>\n'/*ion-inline-end:"/Users/pramodudakeri/Desktop/pakistan/Rohan/calender/src/pages/welcome/welcome.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* MenuController */]])
], WelcomePage);

//# sourceMappingURL=welcome.js.map

/***/ })

},[316]);
//# sourceMappingURL=main.js.map