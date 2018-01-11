webpackJsonp([5],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPersonalInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_user__ = __webpack_require__(47);
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
 * Generated class for the EditPersonalInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditPersonalInformationPage = (function () {
    function EditPersonalInformationPage(navCtrl, navParams, toastCtrl, _service, nativeStorage, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this.nativeStorage = nativeStorage;
        this.storage = storage;
    }
    EditPersonalInformationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //retrieve the username store in the browser
        this.storage.get('username').then(function (val) {
            _this.username = val;
            //debuging purpose
            console.log("this is the user name :" + _this.username);
            //get all the information of the user
            _this._service.getLogin(_this.username).subscribe(function (data) {
                _this.responseData = data;
                // placeholder
                _this.firstName = _this.responseData.firstName;
                _this.lastName = _this.responseData.lastName;
                _this.phoneNumber = _this.responseData.phoneNumber;
                _this.email = _this.responseData.email;
                _this.password = '';
                //debuging purpose
                console.log(_this.responseData);
            }, function (err) {
                //debuging purpose
                console.log(err);
            });
        });
        //retrieve the id store in the browser
        this.storage.get('id').then(function (val) {
            _this.id = val;
            //debuging purpose
            console.log(_this.id);
        });
    };
    EditPersonalInformationPage.prototype.onUpdate = function (signUp) {
        //debuging purpose
        console.log(JSON.stringify(signUp.value));
        console.log(this.username, this.id);
        this._service.updateUser(signUp.value, this.username, this.id);
        var toast = this.toastCtrl.create({
            message: 'Your account was Updated successfully',
            duration: 4000
        });
        toast.present();
        //reserting the form
        this.firstName = ' ';
        this.lastName = ' ';
        this.username = ' ';
        this.phoneNumber = null;
        this.email = ' ';
        this.password = ' ';
        //redirect to menu page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__user_user__["a" /* UserPage */]);
    };
    EditPersonalInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-personal-information',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/'<!--\n  Generated template for the EditPersonalInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Edit Personal Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onUpdate(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="username">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.username && (signUp.controls.username.valid ||\n              (signUp.controls.username.pristine && !isSubmitted))" class="note danger">\n        The Username is required\n      </div>\n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" name="email" required [(ngModel)]="email">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n        The Email is required\n      </div>\n\n    </ion-list>\n    <div class="center">\n      <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n    </div>\n\n  </form>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], EditPersonalInformationPage);
    return EditPersonalInformationPage;
}());

//# sourceMappingURL=edit-personal-information.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGraphPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the ViewGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ViewGraphPage = (function () {
    function ViewGraphPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' },
            { data: [17, 4, 7, 9, 10, 27, 70], label: 'Series d' }
        ];
        this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
        this.lineChartOptions = {
            responsive: true
        };
        this.lineChartColors = [
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'green',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: 'black',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(77,83,96,0.2)',
                borderColor: 'rgba(77,83,96,1)',
                pointBackgroundColor: 'rgba(77,83,96,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(77,83,96,1)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'blue',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            },
            {
                backgroundColor: 'rgba(148,159,177,0.2)',
                borderColor: 'red',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.lineChartLegend = true;
        this.lineChartType = 'line';
    }
    ViewGraphPage.prototype.randomize = function () {
        var _lineChartData = new Array(this.lineChartData.length);
        for (var i = 0; i < this.lineChartData.length; i++) {
            _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
            for (var j = 0; j < this.lineChartData[i].data.length; j++) {
                _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
            }
        }
        this.lineChartData = _lineChartData;
    };
    // events
    ViewGraphPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ViewGraphPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ViewGraphPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ViewGraphPage');
    };
    ViewGraphPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-graph',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/view-graph/view-graph.html"*/'<!--\n  Generated template for the ViewGraphPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view Graph</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n          <div style="display: block;">\n            <canvas baseChart width="300" height="400" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n              [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n              (chartClick)="chartClicked($event)"></canvas>\n          </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/view-graph/view-graph.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ViewGraphPage);
    return ViewGraphPage;
}());

//# sourceMappingURL=view-graph.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(45);
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
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignUpPage = (function () {
    function SignUpPage(navCtrl, navParams, toastCtrl, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this._service = _service;
    }
    SignUpPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
    };
    SignUpPage.prototype.onSubmit = function (signUp) {
        //deburging purpose
        // console.log(JSON.stringify(signUp.value));
        //suging up request
        this._service.signUpRequest(signUp.value);
        this.presentToast("Your account has been successfully added");
        //re
        this.navCtrl.pop();
    };
    SignUpPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 4000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sign-up Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onSubmit(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name  is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="username">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.username && (signUp.controls.username.valid ||\n            (signUp.controls.username.pristine && !isSubmitted))" class="note danger">\n        The Username is required\n      </div>\n \n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n      \n       \n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" name="email" required [(ngModel)]="email">\n          </ion-input>\n        </ion-item>\n        <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n          The Email is required\n        </div>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <div *ngIf="(isSubmitted && signUp.controls.password &&\nsignUp.controls.password.pristine) || ((signUp.controls.password) &&\n(signUp.controls.password.dirty && signUp.controls.password.errors))" class="note danger">\n          Please enter {{ 5 - (signUp.controls.password.errors.minlength ? signUp.controls.password.errors.minlength.actualLength : 0) }} more\n          characters\n        </div>\n      </ion-list>\n      <div class="center">\n        <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n      </div>\n\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploardFilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
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
 * Generated class for the UploardFilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UploardFilePage = (function () {
    function UploardFilePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UploardFilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploardFilePage');
    };
    UploardFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uploard-file',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/uploard-file/uploard-file.html"*/'<!--\n  Generated template for the UploardFilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Uploarded Files\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/uploard-file/uploard-file.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], UploardFilePage);
    return UploardFilePage;
}());

//# sourceMappingURL=uploard-file.js.map

/***/ }),

/***/ 125:
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
webpackEmptyAsyncContext.id = 125;

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-personal-information/edit-personal-information.module": [
		471,
		4
	],
	"../pages/sign-up/sign-up.module": [
		472,
		3
	],
	"../pages/uploard-file/uploard-file.module": [
		473,
		2
	],
	"../pages/user/user.module": [
		474,
		1
	],
	"../pages/view-graph/view-graph.module": [
		475,
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
webpackAsyncContext.id = 167;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var HomePage = (function () {
    function HomePage(navCtrl, loadingCtrl, toastCtrl, _service, nativeStorage, storage) {
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this.nativeStorage = nativeStorage;
        this.storage = storage;
        this._service = _service;
    }
    HomePage.prototype.signUp = function () {
        //redirect to the sign up page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.onSubmit = function (login) {
        var _this = this;
        console.log(JSON.stringify(login.value));
        var username = login.value.username;
        //derbuging purpose 
        console.log(username);
        //send post to a backend
        this._service.login(login.value);
        //respond of the backend
        this.showLoader();
        this._service.getLogin(username).subscribe(function (data) {
            _this.loading.dismiss();
            _this.responseData = data;
            //check if the the user have 
            if (_this.responseData.login === true) {
                //store user name in the browser
                _this.storage.set('username', username);
                _this.storage.set('id', _this.responseData.connectionId);
                // go to user page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
            }
            else {
                _this.presentToast("The username or Password are not correct");
            }
        }, function (err) {
            _this.loading.dismiss();
            _this.presentToast("No internet connection");
        });
    };
    /* Submit(login) {
        this.showLoader();
       // this._service.login(login).then((result) => {
          this.loading.dismiss();
          this.data = result;
          localStorage.setItem('token', this.data.access_token);
          this.navCtrl.setRoot(UserPage);
        }, (err) => {
          this.loading.dismiss();
          this.presentToast(err);
        });
      }
     */
    HomePage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    HomePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="contact"></ion-icon>\n  </p>\n  <form #login="ngForm" novalidate (ngSubmit)="onSubmit(login)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>User Name</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="email">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="login.controls.username && (login.controls.username.valid ||\n(login.controls.username.pristine && !isSubmitted))" class="note danger">\n        The User Name is required\n      </div>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <div *ngIf="(isSubmitted && f.controls.password &&\nlogin.controls.password.pristine) || ((login.controls.password) &&\n(login.controls.password.dirty && login.controls.password.errors))" class="note danger">\n        Please enter {{ 5 - (login.controls.password.errors.minlength ? login.controls.password.errors.minlength.actualLength : 0) }} more\n        characters\n      </div>\n    </ion-list>\n    <div class="center">\n      <button ion-button type="submit" round outline [disabled]="!login.form.valid"><ion-icon name="send"> </ion-icon> Login</button>\n    </div>\n\n  </form>\n  <div class="padding">\n    <ion-navbar color="light">\n      <h3 class="center">\n        <button ion-button (click)="signUp()">Sign-Up</button>\n\n      </h3>\n    </ion-navbar>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_native_storage__["a" /* NativeStorage */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(359);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(54);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__["a" /* UploardFilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-personal-information/edit-personal-information.module#EditPersonalInformationPageModule', name: 'EditPersonalInformationPage', segment: 'edit-personal-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploard-file/uploard-file.module#UploardFilePageModule', name: 'UploardFilePage', segment: 'uploard-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-graph/view-graph.module#ViewGraphPageModule', name: 'ViewGraphPage', segment: 'view-graph', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_14_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__["a" /* UploardFilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_native_storage__["a" /* NativeStorage */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 420:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_uploard_file_uploard_file__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_user_user__ = __webpack_require__(47);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_user_user__["a" /* UserPage */] },
            { title: 'Uploarded Files', component: __WEBPACK_IMPORTED_MODULE_5__pages_uploard_file_uploard_file__["a" /* UploardFilePage */] },
            { title: 'Edit personal information', component: __WEBPACK_IMPORTED_MODULE_6__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    MyApp.prototype.logout = function () {
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/admin123/lte-analyses/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button >\n      <button menuClose ion-item (click)="logout()" >\n           Logout\n      </button>\n      <button menuClose ion-item (click)="logout()" color="danger">\n        Delete Account\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/admin123/lte-analyses/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//import { HttpClient } from '@angular/common/http';





/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RemoteServiceProvider = (function () {
    function RemoteServiceProvider(http, toastCtrl) {
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.url = "http://192.168.43.123:8080/";
    }
    //login request
    RemoteServiceProvider.prototype.getLogin = function (username) {
        var timeoutMS = 100000;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + username, options)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); });
    };
    // request to get all the files in the backend
    RemoteServiceProvider.prototype.getFiles = function (username, id) {
        var timeoutMS = 100000;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + username + "/" + id, options)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); });
    };
    // sign request 
    RemoteServiceProvider.prototype.signUpRequest = function (postParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.url, JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // // update request
    RemoteServiceProvider.prototype.updateUser = function (params, username, id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + username + '/' + id, params, options)
            .subscribe(function (success) {
            console.log(success['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // file request
    RemoteServiceProvider.prototype.postFile = function (postParams) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    //logout request
    RemoteServiceProvider.prototype.logout = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
            headers.append('X-Auth-Token', localStorage.getItem('token'));
            _this.http.post(_this.url, {}, { headers: headers })
                .subscribe(function (res) {
                localStorage.clear();
            }, function (err) {
                reject(err);
            });
        });
    };
    // login request
    RemoteServiceProvider.prototype.login = function (params) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.url + "login", JSON.stringify(params), options)
            .subscribe(function (data) {
            console.log(data['_body']);
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    RemoteServiceProvider.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    RemoteServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _b || Object])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
    var _a, _b;
}());

//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 220,
	"./af.js": 220,
	"./ar": 221,
	"./ar-dz": 222,
	"./ar-dz.js": 222,
	"./ar-kw": 223,
	"./ar-kw.js": 223,
	"./ar-ly": 224,
	"./ar-ly.js": 224,
	"./ar-ma": 225,
	"./ar-ma.js": 225,
	"./ar-sa": 226,
	"./ar-sa.js": 226,
	"./ar-tn": 227,
	"./ar-tn.js": 227,
	"./ar.js": 221,
	"./az": 228,
	"./az.js": 228,
	"./be": 229,
	"./be.js": 229,
	"./bg": 230,
	"./bg.js": 230,
	"./bn": 231,
	"./bn.js": 231,
	"./bo": 232,
	"./bo.js": 232,
	"./br": 233,
	"./br.js": 233,
	"./bs": 234,
	"./bs.js": 234,
	"./ca": 235,
	"./ca.js": 235,
	"./cs": 236,
	"./cs.js": 236,
	"./cv": 237,
	"./cv.js": 237,
	"./cy": 238,
	"./cy.js": 238,
	"./da": 239,
	"./da.js": 239,
	"./de": 240,
	"./de-at": 241,
	"./de-at.js": 241,
	"./de-ch": 242,
	"./de-ch.js": 242,
	"./de.js": 240,
	"./dv": 243,
	"./dv.js": 243,
	"./el": 244,
	"./el.js": 244,
	"./en-au": 245,
	"./en-au.js": 245,
	"./en-ca": 246,
	"./en-ca.js": 246,
	"./en-gb": 247,
	"./en-gb.js": 247,
	"./en-ie": 248,
	"./en-ie.js": 248,
	"./en-nz": 249,
	"./en-nz.js": 249,
	"./eo": 250,
	"./eo.js": 250,
	"./es": 251,
	"./es-do": 252,
	"./es-do.js": 252,
	"./es.js": 251,
	"./et": 253,
	"./et.js": 253,
	"./eu": 254,
	"./eu.js": 254,
	"./fa": 255,
	"./fa.js": 255,
	"./fi": 256,
	"./fi.js": 256,
	"./fo": 257,
	"./fo.js": 257,
	"./fr": 258,
	"./fr-ca": 259,
	"./fr-ca.js": 259,
	"./fr-ch": 260,
	"./fr-ch.js": 260,
	"./fr.js": 258,
	"./fy": 261,
	"./fy.js": 261,
	"./gd": 262,
	"./gd.js": 262,
	"./gl": 263,
	"./gl.js": 263,
	"./gom-latn": 264,
	"./gom-latn.js": 264,
	"./he": 265,
	"./he.js": 265,
	"./hi": 266,
	"./hi.js": 266,
	"./hr": 267,
	"./hr.js": 267,
	"./hu": 268,
	"./hu.js": 268,
	"./hy-am": 269,
	"./hy-am.js": 269,
	"./id": 270,
	"./id.js": 270,
	"./is": 271,
	"./is.js": 271,
	"./it": 272,
	"./it.js": 272,
	"./ja": 273,
	"./ja.js": 273,
	"./jv": 274,
	"./jv.js": 274,
	"./ka": 275,
	"./ka.js": 275,
	"./kk": 276,
	"./kk.js": 276,
	"./km": 277,
	"./km.js": 277,
	"./kn": 278,
	"./kn.js": 278,
	"./ko": 279,
	"./ko.js": 279,
	"./ky": 280,
	"./ky.js": 280,
	"./lb": 281,
	"./lb.js": 281,
	"./lo": 282,
	"./lo.js": 282,
	"./lt": 283,
	"./lt.js": 283,
	"./lv": 284,
	"./lv.js": 284,
	"./me": 285,
	"./me.js": 285,
	"./mi": 286,
	"./mi.js": 286,
	"./mk": 287,
	"./mk.js": 287,
	"./ml": 288,
	"./ml.js": 288,
	"./mr": 289,
	"./mr.js": 289,
	"./ms": 290,
	"./ms-my": 291,
	"./ms-my.js": 291,
	"./ms.js": 290,
	"./my": 292,
	"./my.js": 292,
	"./nb": 293,
	"./nb.js": 293,
	"./ne": 294,
	"./ne.js": 294,
	"./nl": 295,
	"./nl-be": 296,
	"./nl-be.js": 296,
	"./nl.js": 295,
	"./nn": 297,
	"./nn.js": 297,
	"./pa-in": 298,
	"./pa-in.js": 298,
	"./pl": 299,
	"./pl.js": 299,
	"./pt": 300,
	"./pt-br": 301,
	"./pt-br.js": 301,
	"./pt.js": 300,
	"./ro": 302,
	"./ro.js": 302,
	"./ru": 303,
	"./ru.js": 303,
	"./sd": 304,
	"./sd.js": 304,
	"./se": 305,
	"./se.js": 305,
	"./si": 306,
	"./si.js": 306,
	"./sk": 307,
	"./sk.js": 307,
	"./sl": 308,
	"./sl.js": 308,
	"./sq": 309,
	"./sq.js": 309,
	"./sr": 310,
	"./sr-cyrl": 311,
	"./sr-cyrl.js": 311,
	"./sr.js": 310,
	"./ss": 312,
	"./ss.js": 312,
	"./sv": 313,
	"./sv.js": 313,
	"./sw": 314,
	"./sw.js": 314,
	"./ta": 315,
	"./ta.js": 315,
	"./te": 316,
	"./te.js": 316,
	"./tet": 317,
	"./tet.js": 317,
	"./th": 318,
	"./th.js": 318,
	"./tl-ph": 319,
	"./tl-ph.js": 319,
	"./tlh": 320,
	"./tlh.js": 320,
	"./tr": 321,
	"./tr.js": 321,
	"./tzl": 322,
	"./tzl.js": 322,
	"./tzm": 323,
	"./tzm-latn": 324,
	"./tzm-latn.js": 324,
	"./tzm.js": 323,
	"./uk": 325,
	"./uk.js": 325,
	"./ur": 326,
	"./ur.js": 326,
	"./uz": 327,
	"./uz-latn": 328,
	"./uz-latn.js": 328,
	"./uz.js": 327,
	"./vi": 329,
	"./vi.js": 329,
	"./x-pseudo": 330,
	"./x-pseudo.js": 330,
	"./yo": 331,
	"./yo.js": 331,
	"./zh-cn": 332,
	"./zh-cn.js": 332,
	"./zh-hk": 333,
	"./zh-hk.js": 333,
	"./zh-tw": 334,
	"./zh-tw.js": 334
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
webpackContext.id = 453;

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_graph_view_graph__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(54);
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
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function () {
    function UserPage(navCtrl, navParams, app, loadingCtrl, toastCtrl, _service, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this.storage = storage;
        this.getFile();
    }
    UserPage.prototype.ionViewDidLoad = function () {
        //this._service.postFile("/home/admin123/lte-analyses/package-lock.json");
        var _this = this;
        //retrieve the username store in the browser
        this.storage.get('username').then(function (val) {
            _this.username = val;
            //debuging purpose
            console.log("this is the user name :" + _this.username);
        });
        //retrieve the id store in the browser
        this.storage.get('id').then(function (val) {
            _this.id = val;
            //debuging purpose
            console.log("the connetionId is:" + _this.id);
        });
    };
    //get all files from the backend
    UserPage.prototype.getFile = function () {
        var _this = this;
        this._service.getFiles(this.username, this.id).subscribe(function (data) {
            _this.files = data;
        }, function (err) {
            //debuging purpose
            console.log(err);
        });
    };
    UserPage.prototype.viewGraaph = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__view_graph_view_graph__["a" /* ViewGraphPage */]);
    };
    UserPage.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
    };
    UserPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: 'bottom',
            dismissOnPageChange: true
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UserPage.prototype.onFile = function (file) {
        console.log(file.value);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-user',template:/*ion-inline-start:"/home/admin123/lte-analyses/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      User Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="getting-started">\n  <p class="center" color="secondary">\n    <ion-icon class="large lighter" color="primary" name="document"></ion-icon>\n  </p>\n  <form #file="ngForm" (ngSubmit)="onFile(file)">\n    <ion-list>\n      <ion-item>\n        <label class="item item-input">\n          <input type="file" id="upimgfile" name="uploadfile">\n        </label>\n      </ion-item>\n    </ion-list>\n\n    <div class="center">\n      <button ion-button type="submit" round outline>\n        <ion-icon name="send"></ion-icon> Send</button>\n\n    </div>\n    <button ion-button full (click)="viewGraaph()"> View Graph</button>\n  </form>\n  <hr>\n  <ion-list>\n    <h1 class="center">list of files</h1>\n    <ion-item *ngFor="let lst of files">\n      lst\n    </ion-item>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/lte-analyses/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* App */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* LoadingController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]) === "function" && _g || Object])
    ], UserPage);
    return UserPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[335]);
//# sourceMappingURL=main.js.map