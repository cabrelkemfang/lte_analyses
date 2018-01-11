webpackJsonp([6],{

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPersonalInformationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(49);
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
    function EditPersonalInformationPage(navCtrl, navParams, toastCtrl, _service, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.toastCtrl = toastCtrl;
        this._service = _service;
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
                //debuging purpose
                console.log(_this.responseData);
            }, function (err) {
                //debuging purpose
                console.log(err);
            });
        });
    };
    EditPersonalInformationPage.prototype.onUpdate = function (signUp) {
        //debuging purpose
        console.log(JSON.stringify(signUp.value));
        console.log(this.username);
        this._service.updateUser(signUp.value, this.username);
        //reserting the form
        this.firstName = ' ';
        this.lastName = ' ';
        this.username = ' ';
        this.phoneNumber = null;
        this.email = ' ';
        this.password = ' ';
        //redirect to menu page
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */]);
    };
    EditPersonalInformationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-personal-information',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/'<!--\n  Generated template for the EditPersonalInformationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Edit Personal Information\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onUpdate(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="username">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.username && (signUp.controls.username.valid ||\n              (signUp.controls.username.pristine && !isSubmitted))" class="note danger">\n        The Username is required\n      </div>\n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label floating>Email</ion-label>\n        <ion-input type="email" name="email" required [(ngModel)]="email">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n        The Email is required\n      </div>\n\n    </ion-list>\n    <div class="center">\n      <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n    </div>\n\n  </form>\n  \n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/edit-personal-information/edit-personal-information.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], EditPersonalInformationPage);
    return EditPersonalInformationPage;
}());

//# sourceMappingURL=edit-personal-information.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ViewGraphPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(36);
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
    function ViewGraphPage(navCtrl, navParams, _service) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this._service = _service;
        this.Data2 = [];
        this.Data3 = [];
        this.Data4 = [];
        this.list = {};
        this.dat = [];
        this.lineChartData = [
            { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
            { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
            { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' },
            { data: [17, 4, 7, 9, 10, 27, 70], label: 'Series d' }
        ];
        // public lineChartData: Array<any> = [
        //   [65, 59, 80, 81, 56, 55, 40],
        //   [28, 48, 40, 19, 86, 27, 90],
        //   [18, 48, 77, 9, 100, 27, 40],
        //   [17, 4, 7, 9, 10, 27, 70],
        // ];
        this.label = ['Series 1', 'Series 2', 'Series 3', 'Series 4'];
        this.lineChartLabels = [0, 20, 25, 50, 55, 520, 875, 57544];
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
    // public randomize(): void {
    //   let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    //   for (let i = 0; i < this.lineChartData.length; i++) {
    //     //_lineChartData[i].push(new Array(this.lineChartData[i].length));
    //     for (let j = 0; j < this.lineChartData[i].length; j++) {
    //       this.lineChartData[i][j] = Math.floor((Math.random() * 100) + 1);
    //     }
    //   }
    //   //this.lineChartData = _lineChartData;
    // }
    // events
    ViewGraphPage.prototype.chartClicked = function (e) {
        console.log(e);
    };
    ViewGraphPage.prototype.chartHovered = function (e) {
        console.log(e);
    };
    ViewGraphPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        // this.lineChartData[0].prototype.dat = [65, 59, 80, -81, 56, 55, 0];
        console.log('ionViewDidLoad ViewGraphPage');
        console.log(typeof (this.list));
        console.log(this.list);
        this.Data4.push(this.list);
        console.log(this.lineChartData);
        //retrievind data fron the backend
        this._service.getData().subscribe(function (data) {
            _this.response = data;
            //debuging purpose
            console.log(_this.response);
            for (var _i = 0, _a = _this.response; _i < _a.length; _i++) {
                var list = _a[_i];
                console.log(list);
                console.log(list.id);
                console.log(list.startTime);
                var id = list.id;
                var startTime = list.startTime;
                _this.Data2.push(id);
                _this.Data3.push(startTime);
                console.log(_this.Data2);
                console.log(_this.Data3);
            }
            // this.response.forEach(element => {
            //   console.log(element);
            //   console.log(typeof(element));
            //   console.log(element.id);
            //   let data1 = element.id;
            //   this.Data2.push(data1);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
            //   this.Data2 = element.id;
            //   //this.Data2.push(2);
            // });
        }, function (err) {
            //debuging purpose
            console.log(err);
        });
    };
    ViewGraphPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-view-graph',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/view-graph/view-graph.html"*/'<!--\n  Generated template for the ViewGraphPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>view Graph</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-card>\n    <ion-card-content>\n      <div style="display: block;">\n        <canvas baseChart width="300" height="400" [datasets]="lineChartData" [labels]="lineChartLabels" [options]="lineChartOptions"\n          [colors]="lineChartColors" [legend]="lineChartLegend" [chartType]="lineChartType" (chartHover)="chartHovered($event)"\n          (chartClick)="chartClicked($event)"></canvas>\n      </div>\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/view-graph/view-graph.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], ViewGraphPage);
    return ViewGraphPage;
}());

//# sourceMappingURL=view-graph.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalInfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(92);
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
 * Generated class for the PersonalInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PersonalInfoPage = (function () {
    function PersonalInfoPage(navCtrl, navParams, transfer, toastCtrl, loadingCtrl, fileChooser, filePath) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
    }
    PersonalInfoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploardFilePage');
    };
    PersonalInfoPage.prototype.uploadFile = function () {
        var _this = this;
        //Choose the file using filechoose library
        this.fileChooser.open()
            .then(function (uri) {
            _this.uri = uri;
            return uri;
        })
            .then(function (uri) { return _this.filePath.resolveNativePath(uri); })
            .then(function (filePath) {
            var filename = filePath.split('/');
            filename = filename[filename.length - 1];
            return (filename);
        })
            .then(function (filename) {
            _this.fileName = filename;
            var loader = _this.loadingCtrl.create({
                content: "Uploading..."
            });
            loader.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: 'file',
                fileName: filename,
                chunkedMode: false,
                headers: {}
            };
            fileTransfer.upload(_this.uri, 'https://localhost/file/bill', options)
                .then(function (data) {
                _this.uploadStatus = data.responseCode;
                _this.uploadMessage = JSON.stringify(data.response);
                console.log(data + " Uploaded Successfully");
                alert(JSON.stringify(data.response));
                loader.dismiss();
                _this.presentToast("Image uploaded successfully");
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.presentToast(err);
            });
        })
            .catch(function (err) { return alert(err); });
    };
    PersonalInfoPage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    PersonalInfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-personal-info',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/personal-info/personal-info.html"*/'<!--\n  Generated template for the UploardFilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Uploarded Files\n    </ion-title>\n  </ion-navbar> \n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <button ion-button (click)="uploadFile()">Select File</button>\n  </ion-item>\n  <ion-item>\n    Filename: {{fileName}}\n  </ion-item>\n  <ion-item>\n    Status: {{uploadStatus}}\n  </ion-item>\n  <ion-item>\n    Response:\n    <div class="item">{{uploadMessage}}</div>\n  </ion-item>\n  \n    <ion-grid>\n        <ion-row >\n          <ion-col width-25>File name</ion-col>\n          <ion-col width-25>Description</ion-col>\n          <ion-col width-25>Edit</ion-col>\n          <ion-col width-25>Delete</ion-col>\n          <ion-col width-25>Plote</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-item>\n              <ion-col width-25>File name</ion-col>\n              <ion-col width-25>Description</ion-col>\n              <ion-col width-25><ion-icon name="create"></ion-icon></ion-col>\n              <ion-col width-25><ion-icon name="trash"></ion-icon></ion-col>\n              <ion-col width-25><ion-icon name="stats"></ion-icon></ion-col>\n          </ion-item>\n          <ion-item>\n              <ion-col width-40>File name</ion-col>\n              <ion-col width-40>Descriptio</ion-col>\n              <ion-col width-25><ion-icon name="create"></ion-icon></ion-col>\n              <ion-col width-25><ion-icon name="trash"></ion-icon></ion-col>\n              <ion-col width-25></ion-col><ion-icon name="stats"></ion-icon>\n          </ion-item>\n        </ion-row>\n      </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/personal-info/personal-info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */]])
    ], PersonalInfoPage);
    return PersonalInfoPage;
}());

//# sourceMappingURL=personal-info.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(36);
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
        console.log(JSON.stringify(signUp.value));
        //suging up request
        this._service.signUpRequest(signUp.value);
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
            selector: 'page-sign-up',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/sign-up/sign-up.html"*/'<!--\n  Generated template for the SignUpPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Sign-up Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="people"></ion-icon>\n  </p>\n  <form #signUp="ngForm" novalidate (ngSubmit)="onSubmit(signUp)">\n    <ion-list>\n\n      <ion-item>\n        <ion-label floating>First Name</ion-label>\n        <ion-input type="text" name="firstName" required [(ngModel)]="firstName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.firstName && (signUp.controls.firstName.valid ||\n(signUp.controls.firstName.pristine && !isSubmitted))" class="note danger">\n        The First Name  is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Last Name</ion-label>\n        <ion-input type="text" name="lastName" required [(ngModel)]="lastName">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.lastName && (signUp.controls.lastName.valid ||\n      (signUp.controls.lastName.pristine && !isSubmitted))" class="note danger">\n        The Last Name is required\n      </div>\n\n      <ion-item>\n        <ion-label floating>Username</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="username">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="signUp.controls.username && (signUp.controls.username.valid ||\n            (signUp.controls.username.pristine && !isSubmitted))" class="note danger">\n        The Username is required\n      </div>\n \n      <ion-item>\n        <ion-label floating>Phone Number</ion-label>\n        <ion-input type="number" name="phoneNumber" required [(ngModel)]="phoneNumber">\n        </ion-input>\n      </ion-item>\n      \n       \n        <ion-item>\n          <ion-label floating>Email</ion-label>\n          <ion-input type="email" name="email" required [(ngModel)]="email">\n          </ion-input>\n        </ion-item>\n        <div [hidden]="signUp.controls.email && (signUp.controls.email.valid ||\n(signUp.controls.email.pristine && !isSubmitted))" class="note danger">\n          The Email is required\n        </div>\n        <ion-item>\n          <ion-label floating>Password</ion-label>\n\n          <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n        </ion-item>\n        <div *ngIf="(isSubmitted && signUp.controls.password &&\nsignUp.controls.password.pristine) || ((signUp.controls.password) &&\n(signUp.controls.password.dirty && signUp.controls.password.errors))" class="note danger">\n          Please enter {{ 5 - (signUp.controls.password.errors.minlength ? signUp.controls.password.errors.minlength.actualLength : 0) }} more\n          characters\n        </div>\n      </ion-list>\n      <div class="center">\n        <button ion-button type="submit" round outline [disabled]="!signUp.form.valid"> Save</button>\n      </div>\n\n  </form>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/sign-up/sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 127:
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
webpackEmptyAsyncContext.id = 127;

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/edit-personal-information/edit-personal-information.module": [
		476,
		5
	],
	"../pages/personal-info/personal-info.module": [
		477,
		4
	],
	"../pages/sign-up/sign-up.module": [
		478,
		3
	],
	"../pages/uploard-file/uploard-file.module": [
		479,
		2
	],
	"../pages/user/user.module": [
		481,
		1
	],
	"../pages/view-graph/view-graph.module": [
		480,
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
webpackAsyncContext.id = 169;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_base_64__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_base_64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_base_64__);
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
    function HomePage(navCtrl, loadingCtrl, toastCtrl, _service, storage) {
        // //get the value of the status store 
        // this.storage.get('token').then((val) => {
        //   this.resp = val;
        //   //debuging purpose
        //   console.log("this is the modificatin inside" + this.resp);
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this.storage = storage;
        //});
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignUpPage');
        //initialize the token to be empty
        //this.storage.remove('token');
        //console.log("the Header is :"+this.resp);
    };
    HomePage.prototype.signUp = function () {
        //redirect to the sign up page
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sign_up_sign_up__["a" /* SignUpPage */]);
    };
    HomePage.prototype.onSubmit = function (login) {
        var _this = this;
        console.log(JSON.stringify(login.value));
        var username = login.value.username;
        var password = login.value.password;
        //generation of the token
        var token = __WEBPACK_IMPORTED_MODULE_8_base_64__["encode"](username + ':' + password);
        //deburging purpose
        console.log("the token is +", token);
        //send post to a backend
        //this._service.login(login.value);
        //store user name  and password  in the browser
        this.storage.set('username', username);
        this.storage.set('password', password);
        // this.storage.set('token', token);
        //respond of the backend
        this.showLoader();
        this._service.getLogin(username).subscribe(function (res) {
            _this.loading.dismiss();
            _this.responseData = res;
            //debrging purpose
            console.log(_this.responseData);
            console.log(_this.resp);
            // check if the status code is correct
            if (_this.responseData) {
                //deleting the status code store
                _this.storage.remove('resS');
                // go to user page
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__user_user__["a" /* UserPage */]);
            }
            else {
                _this.presentToast("The username or Password are not correct");
                _this.storage.remove('resS');
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
            selector: 'page-home',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Contact Form\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content>\n  <p class="center">\n    <ion-icon class="large lighter" primary name="contact"></ion-icon>\n  </p>\n  <form #login="ngForm" novalidate (ngSubmit)="onSubmit(login)">\n    <ion-list>\n      <ion-item>\n        <ion-label floating>User Name</ion-label>\n        <ion-input type="text" name="username" required [(ngModel)]="email">\n        </ion-input>\n      </ion-item>\n      <div [hidden]="login.controls.username && (login.controls.username.valid ||\n(login.controls.username.pristine && !isSubmitted))" class="note danger">\n        The User Name is required\n      </div>\n      <ion-item>\n        <ion-label floating>Password</ion-label>\n\n        <ion-input type="password" required minlength=5 name="password" [(ngModel)]="password"></ion-input>\n      </ion-item>\n      <div *ngIf="(isSubmitted && f.controls.password &&\nlogin.controls.password.pristine) || ((login.controls.password) &&\n(login.controls.password.dirty && login.controls.password.errors))" class="note danger">\n        Please enter {{ 5 - (login.controls.password.errors.minlength ? login.controls.password.errors.minlength.actualLength : 0) }} more\n        characters\n      </div>\n    </ion-list>\n    <div class="center">\n      <button ion-button type="submit" round outline [disabled]="!login.form.valid"><ion-icon name="send"> </ion-icon> Login</button>\n    </div>\n\n  </form>\n  <div class="padding">\n    <ion-navbar color="light">\n      <h3 class="center">\n        <button ion-button (click)="signUp()">Sign-Up</button>\n\n      </h3>\n    </ion-navbar>\n\n  </div>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 339:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploardFilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__ = __webpack_require__(92);
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
    function UploardFilePage(navCtrl, navParams, transfer, toastCtrl, loadingCtrl, fileChooser, filePath, storage) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.transfer = transfer;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.fileChooser = fileChooser;
        this.filePath = filePath;
        this.storage = storage;
    }
    UploardFilePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UploardFilePage');
    };
    UploardFilePage.prototype.uploadFile = function () {
        var _this = this;
        //Choose the file using filechoose library
        this.fileChooser.open()
            .then(function (uri) {
            _this.uri = uri;
            return uri;
        })
            .then(function (uri) { return _this.filePath.resolveNativePath(uri); })
            .then(function (filePath) {
            var filename = filePath.split('/');
            filename = filename[filename.length - 1];
            return (filename);
        })
            .then(function (filename) {
            _this.fileName = filename;
            var loader = _this.loadingCtrl.create({
                content: "Uploading..."
            });
            loader.present();
            var fileTransfer = _this.transfer.create();
            var options = {
                fileKey: 'file',
                fileName: filename,
                chunkedMode: false,
                headers: {}
            };
            fileTransfer.upload(_this.uri, 'https://localhost/file/bill', options)
                .then(function (data) {
                _this.uploadStatus = data.responseCode;
                _this.uploadMessage = JSON.stringify(data.response);
                console.log(data + " Uploaded Successfully");
                alert(JSON.stringify(data.response));
                loader.dismiss();
                _this.presentToast("Image uploaded successfully");
            }, function (err) {
                console.log(err);
                loader.dismiss();
                _this.presentToast(err);
            });
        })
            .catch(function (err) { return alert(err); });
    };
    UploardFilePage.prototype.presentToast = function (msg) {
        var toast = this.toastCtrl.create({
            message: msg,
            duration: 6000,
            position: 'bottom'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    UploardFilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-uploard-file',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/uploard-file/uploard-file.html"*/'<!--\n  Generated template for the UploardFilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      Uploarded Files\n    </ion-title>\n  </ion-navbar> \n</ion-header>\n\n\n<ion-content padding>\n  <ion-item>\n    <button ion-button (click)="uploadFile()">Select File</button>\n  </ion-item>\n  <ion-item>\n    Filename: {{fileName}}\n  </ion-item>\n  <ion-item>\n    Status: {{uploadStatus}}\n  </ion-item>\n  <ion-item>\n    Response:\n    <div class="item">{{uploadMessage}}</div>\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/uploard-file/uploard-file.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_file_transfer__["a" /* FileTransfer */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_file_chooser__["a" /* FileChooser */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_file_path__["a" /* FilePath */],
            Storage])
    ], UploardFilePage);
    return UploardFilePage;
}());

//# sourceMappingURL=uploard-file.js.map

/***/ }),

/***/ 340:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(364);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 36:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RemoteServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_timeout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(39);
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
    function RemoteServiceProvider(http, toastCtrl, storage, loadingCtrl) {
        var _this = this;
        this.http = http;
        this.toastCtrl = toastCtrl;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.url = "http://192.168.1.4:8080/";
        this.token = "a2F5OnBsZWFzZQ==";
        this.value = [];
        //retrieve the token store in the browser
        this.storage.get('token').then(function (val) {
            _this.tok = val;
            //debuging purpose
            console.log("this is the modificatin inside the constructor " + _this.tok);
        });
    }
    //login request
    RemoteServiceProvider.prototype.getLogin = function (username) {
        var _this = this;
        var timeoutMS = 10000;
        //generate a token
        //var token = require('basic-auth-token');
        //let tokens = token(this.info[0], this.info[1]);
        console.log("this is the modificatin outside the constructor  " + this.token);
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        //headers.append('Access-Control-Allow-Origin','*'); 
        // headers.append('Origin',this.url + "user/" +  username); 
        headers.append('Authorization', 'Basic ' + this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "user/" + username, options)
            .timeout(timeoutMS)
            .map(function (res) {
            console.log(res.status); // Print http header
            //store the status code in the browser
            _this.storage.set("resS", res);
            return res.json();
        });
    };
    // request to get all the files in the backend
    RemoteServiceProvider.prototype.getFiles = function (username) {
        var timeoutMS = 100000;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.url + "user/" + username + "/files", options)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); });
    };
    //request to get data fron the backend
    RemoteServiceProvider.prototype.getData = function () {
        var timeoutMS = 100000;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("http://localhost:8080/test2.json", options)
            .timeout(timeoutMS)
            .map(function (res) { return res.json(); });
    };
    // sign request 
    RemoteServiceProvider.prototype.signUpRequest = function (postParams) {
        var _this = this;
        this.showLoader();
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        this.http.post(this.url + "register", JSON.stringify(postParams), options)
            .subscribe(function (data) {
            console.log("this is the header " + data.status);
            _this.loading.dismiss();
            if (data.status == 200) {
                // this.navCtrl.pop();
                _this.presentToast("Your account has been successfully added");
            }
            else {
                _this.presentToast("the creation have fail");
            }
        }, function (error) {
            console.log(error); // Error getting the data
        });
    };
    // // update request
    RemoteServiceProvider.prototype.updateUser = function (params, username) {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(this.url + "user/" + username, params, options)
            .subscribe(function (success) {
            console.log(success['_body']);
            _this.loading.dismiss();
            if (success.status == 200) {
                // this.navCtrl.pop();
                _this.presentToast("Your account has been successfully updated");
            }
            else {
                _this.presentToast("the update faill");
            }
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
    //testing purpose 
    RemoteServiceProvider.prototype.getAllArticles = function () {
        return this.http.get("http://localhost:8080/test.json")
            .map(function (res) { return res.json(); });
    };
    //request for deleting aacount
    RemoteServiceProvider.prototype.deleteUser = function (username, param) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Basic ' + this.token);
        //let cpParams = new URLSearchParams();
        // cpParams.set('id', articleId);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers, });
        this.http.post(this.url + "user/" + username, JSON.stringify(param), options)
            .map(function (success) {
            var re = success;
            console.log(re);
            console.log("the status code is :" + success.status);
        });
    };
    RemoteServiceProvider.prototype.showLoader = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Authenticating...'
        });
        this.loading.present();
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
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], RemoteServiceProvider);
    return RemoteServiceProvider;
}());

//# sourceMappingURL=remote-service.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(425);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_http__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_ng2_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_ng2_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_chooser__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__ = __webpack_require__(92);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















//plugin to install
//import { Transfer } from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path';
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
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__["a" /* PersonalInfoPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/edit-personal-information/edit-personal-information.module#EditPersonalInformationPageModule', name: 'EditPersonalInformationPage', segment: 'edit-personal-information', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/personal-info/personal-info.module#PersonalInfoPageModule', name: 'PersonalInfoPage', segment: 'personal-info', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/uploard-file/uploard-file.module#UploardFilePageModule', name: 'UploardFilePage', segment: 'uploard-file', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/view-graph/view-graph.module#ViewGraphPageModule', name: 'ViewGraphPage', segment: 'view-graph', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_16__ionic_storage__["a" /* IonicStorageModule */].forRoot({
                    name: '__mydb',
                    driverOrder: ['indexeddb', 'sqlite', 'websql']
                }),
                __WEBPACK_IMPORTED_MODULE_10__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_15_ng2_charts__["ChartsModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_sign_up_sign_up__["a" /* SignUpPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_user_user__["a" /* UserPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_uploard_file_uploard_file__["a" /* UploardFilePage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_view_graph_view_graph__["a" /* ViewGraphPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_personal_info_personal_info__["a" /* PersonalInfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["a" /* FileTransfer */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_file_transfer__["b" /* FileTransferObject */],
                __WEBPACK_IMPORTED_MODULE_18__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_file_chooser__["a" /* FileChooser */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 425:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_edit_personal_information_edit_personal_information__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_user_user__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_personal_info_personal_info__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_base_64__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_base_64___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_base_64__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









// import { ViewGraphPage } from '../pages/view-graph/view-graph';





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen, storage, alertCtrl, _service, toastCtrl, loadingCtrl) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.storage = storage;
        this.alertCtrl = alertCtrl;
        this._service = _service;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.token = "a2F5OnBsZWFzZQ==";
        this.initializeApp();
        //  //retrieve the token store in the browser
        //  this.storage.get('token').then((val) => {
        //   this.token = val;
        //   //this.value.push(this.token);
        //   //debuging purpose
        //   console.log("this is the modificatin " + this.token);
        // });
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_6__pages_user_user__["a" /* UserPage */] },
            { title: 'Edit personal information', component: __WEBPACK_IMPORTED_MODULE_5__pages_edit_personal_information_edit_personal_information__["a" /* EditPersonalInformationPage */] },
            { title: 'file', component: __WEBPACK_IMPORTED_MODULE_8__pages_personal_info_personal_info__["a" /* PersonalInfoPage */] },
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
        this.storage.remove('username');
        this.storage.remove('token');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
    };
    MyApp.prototype.delete = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete the Account',
            message: 'Are you sure you want to Delete you account??',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        //deburging purpose
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Delete',
                    handler: function () {
                        //deburging purpose
                        console.log('Delete clicked');
                        //deleting the aacount
                        var alert = _this.alertCtrl.create({
                            title: 'Crudential',
                            inputs: [
                                {
                                    name: 'username',
                                    placeholder: 'Username'
                                },
                                {
                                    name: 'password',
                                    placeholder: 'Password',
                                    type: 'password'
                                }
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    handler: function (data) {
                                        console.log('Cancel clicked');
                                    }
                                },
                                {
                                    text: 'Ok',
                                    handler: function (data) {
                                        // send a response 
                                        //generation of the token
                                        var verificationtoken = __WEBPACK_IMPORTED_MODULE_10_base_64__["encode"](data.username + ':' + data.password);
                                        //debugind puporse
                                        console.log(verificationtoken);
                                        if (verificationtoken == _this.token) {
                                            console.log("ok");
                                            var response_1;
                                            _this._service.getLogin(data.username).subscribe(function (res) {
                                                response_1 = res;
                                                console.log(response_1);
                                            });
                                            // this.showLoader();
                                            _this._service.deleteUser(data.username, response_1);
                                            // this.loading.dismiss();
                                            // console.log(response.headers);
                                            if (true) {
                                                //redirect to home page
                                                _this.storage.remove('token');
                                                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
                                            }
                                            else {
                                                //console.log("erroe");
                                            }
                                            var toast = _this.toastCtrl.create({
                                                message: 'Account deleted',
                                                duration: 4000,
                                                position: 'top'
                                            });
                                            toast.onDidDismiss(function () {
                                                console.log('Dismissed toast');
                                            });
                                            toast.present();
                                        }
                                        else {
                                            var toast = _this.toastCtrl.create({
                                                message: 'The user name or the password are not correct',
                                                duration: 4000,
                                                position: 'top'
                                            });
                                            toast.onDidDismiss(function () {
                                                console.log('Dismissed toast');
                                            });
                                            toast.present();
                                        }
                                    }
                                }
                            ]
                        });
                        alert.present();
                    }
                }
            ]
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button >\n      <button menuClose ion-item (click)="logout()" >\n           Logout\n      </button>\n      <button menuClose ion-item (click)="delete()" color="danger">\n        Delete Account\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_9__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 457:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 224,
	"./af.js": 224,
	"./ar": 225,
	"./ar-dz": 226,
	"./ar-dz.js": 226,
	"./ar-kw": 227,
	"./ar-kw.js": 227,
	"./ar-ly": 228,
	"./ar-ly.js": 228,
	"./ar-ma": 229,
	"./ar-ma.js": 229,
	"./ar-sa": 230,
	"./ar-sa.js": 230,
	"./ar-tn": 231,
	"./ar-tn.js": 231,
	"./ar.js": 225,
	"./az": 232,
	"./az.js": 232,
	"./be": 233,
	"./be.js": 233,
	"./bg": 234,
	"./bg.js": 234,
	"./bn": 235,
	"./bn.js": 235,
	"./bo": 236,
	"./bo.js": 236,
	"./br": 237,
	"./br.js": 237,
	"./bs": 238,
	"./bs.js": 238,
	"./ca": 239,
	"./ca.js": 239,
	"./cs": 240,
	"./cs.js": 240,
	"./cv": 241,
	"./cv.js": 241,
	"./cy": 242,
	"./cy.js": 242,
	"./da": 243,
	"./da.js": 243,
	"./de": 244,
	"./de-at": 245,
	"./de-at.js": 245,
	"./de-ch": 246,
	"./de-ch.js": 246,
	"./de.js": 244,
	"./dv": 247,
	"./dv.js": 247,
	"./el": 248,
	"./el.js": 248,
	"./en-au": 249,
	"./en-au.js": 249,
	"./en-ca": 250,
	"./en-ca.js": 250,
	"./en-gb": 251,
	"./en-gb.js": 251,
	"./en-ie": 252,
	"./en-ie.js": 252,
	"./en-nz": 253,
	"./en-nz.js": 253,
	"./eo": 254,
	"./eo.js": 254,
	"./es": 255,
	"./es-do": 256,
	"./es-do.js": 256,
	"./es.js": 255,
	"./et": 257,
	"./et.js": 257,
	"./eu": 258,
	"./eu.js": 258,
	"./fa": 259,
	"./fa.js": 259,
	"./fi": 260,
	"./fi.js": 260,
	"./fo": 261,
	"./fo.js": 261,
	"./fr": 262,
	"./fr-ca": 263,
	"./fr-ca.js": 263,
	"./fr-ch": 264,
	"./fr-ch.js": 264,
	"./fr.js": 262,
	"./fy": 265,
	"./fy.js": 265,
	"./gd": 266,
	"./gd.js": 266,
	"./gl": 267,
	"./gl.js": 267,
	"./gom-latn": 268,
	"./gom-latn.js": 268,
	"./he": 269,
	"./he.js": 269,
	"./hi": 270,
	"./hi.js": 270,
	"./hr": 271,
	"./hr.js": 271,
	"./hu": 272,
	"./hu.js": 272,
	"./hy-am": 273,
	"./hy-am.js": 273,
	"./id": 274,
	"./id.js": 274,
	"./is": 275,
	"./is.js": 275,
	"./it": 276,
	"./it.js": 276,
	"./ja": 277,
	"./ja.js": 277,
	"./jv": 278,
	"./jv.js": 278,
	"./ka": 279,
	"./ka.js": 279,
	"./kk": 280,
	"./kk.js": 280,
	"./km": 281,
	"./km.js": 281,
	"./kn": 282,
	"./kn.js": 282,
	"./ko": 283,
	"./ko.js": 283,
	"./ky": 284,
	"./ky.js": 284,
	"./lb": 285,
	"./lb.js": 285,
	"./lo": 286,
	"./lo.js": 286,
	"./lt": 287,
	"./lt.js": 287,
	"./lv": 288,
	"./lv.js": 288,
	"./me": 289,
	"./me.js": 289,
	"./mi": 290,
	"./mi.js": 290,
	"./mk": 291,
	"./mk.js": 291,
	"./ml": 292,
	"./ml.js": 292,
	"./mr": 293,
	"./mr.js": 293,
	"./ms": 294,
	"./ms-my": 295,
	"./ms-my.js": 295,
	"./ms.js": 294,
	"./my": 296,
	"./my.js": 296,
	"./nb": 297,
	"./nb.js": 297,
	"./ne": 298,
	"./ne.js": 298,
	"./nl": 299,
	"./nl-be": 300,
	"./nl-be.js": 300,
	"./nl.js": 299,
	"./nn": 301,
	"./nn.js": 301,
	"./pa-in": 302,
	"./pa-in.js": 302,
	"./pl": 303,
	"./pl.js": 303,
	"./pt": 304,
	"./pt-br": 305,
	"./pt-br.js": 305,
	"./pt.js": 304,
	"./ro": 306,
	"./ro.js": 306,
	"./ru": 307,
	"./ru.js": 307,
	"./sd": 308,
	"./sd.js": 308,
	"./se": 309,
	"./se.js": 309,
	"./si": 310,
	"./si.js": 310,
	"./sk": 311,
	"./sk.js": 311,
	"./sl": 312,
	"./sl.js": 312,
	"./sq": 313,
	"./sq.js": 313,
	"./sr": 314,
	"./sr-cyrl": 315,
	"./sr-cyrl.js": 315,
	"./sr.js": 314,
	"./ss": 316,
	"./ss.js": 316,
	"./sv": 317,
	"./sv.js": 317,
	"./sw": 318,
	"./sw.js": 318,
	"./ta": 319,
	"./ta.js": 319,
	"./te": 320,
	"./te.js": 320,
	"./tet": 321,
	"./tet.js": 321,
	"./th": 322,
	"./th.js": 322,
	"./tl-ph": 323,
	"./tl-ph.js": 323,
	"./tlh": 324,
	"./tlh.js": 324,
	"./tr": 325,
	"./tr.js": 325,
	"./tzl": 326,
	"./tzl.js": 326,
	"./tzm": 327,
	"./tzm-latn": 328,
	"./tzm-latn.js": 328,
	"./tzm.js": 327,
	"./uk": 329,
	"./uk.js": 329,
	"./ur": 330,
	"./ur.js": 330,
	"./uz": 331,
	"./uz-latn": 332,
	"./uz-latn.js": 332,
	"./uz.js": 331,
	"./vi": 333,
	"./vi.js": 333,
	"./x-pseudo": 334,
	"./x-pseudo.js": 334,
	"./yo": 335,
	"./yo.js": 335,
	"./zh-cn": 336,
	"./zh-cn.js": 336,
	"./zh-hk": 337,
	"./zh-hk.js": 337,
	"./zh-tw": 338,
	"./zh-tw.js": 338
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
webpackContext.id = 457;

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__view_graph_view_graph__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(39);
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
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.app = app;
        this.loadingCtrl = loadingCtrl;
        this.toastCtrl = toastCtrl;
        this._service = _service;
        this.storage = storage;
        //retrieve the username store in the browser
        this.storage.get('username').then(function (val) {
            _this.username = val;
            //debuging purpose
            console.log("this is the user name :" + _this.username);
            _this._service.getFiles(_this.username).subscribe(function (data) {
                _this.files = data;
                console.log(_this.files);
            }, function (err) {
                //debuging purpose
                console.log(err);
            });
        });
    }
    UserPage.prototype.ionViewDidLoad = function () {
        //this._service.postFile("/home/admin123/lte-analyses/package-lock.json");   
    };
    //get all files from the backend
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
            selector: 'page-user',template:/*ion-inline-start:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/user/user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-icon name="menu" menuToggle left></ion-icon>\n    <ion-title>\n      User Page\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="getting-started">\n  <p class="center" color="secondary">\n    <ion-icon class="large lighter" color="primary" name="document"></ion-icon>\n  </p>\n  <form #file="ngForm" (ngSubmit)="onFile(file)">\n    <ion-list>\n      <ion-item>\n        <label class="item item-input">\n          <input type="file" id="upimgfile" name="uploadfile">\n        </label>\n      </ion-item>\n    </ion-list>\n\n    <div class="center">\n      <button ion-button type="submit" round outline>\n        <ion-icon name="send"></ion-icon> Send</button>\n\n    </div>\n    <button ion-button full (click)="viewGraaph()"> View Graph</button>\n  </form>\n  <hr>\n  <ion-list>\n    <h2 class="center">list of files</h2>\n    <ion-grid>\n        <ion-item *ngFor="let lst of files">\n            <ion-row >\n            <ion-col  width-80>{{lst.fileName}}</ion-col>\n\n            <ion-col width-10 ><ion-icon name="trash"></ion-icon></ion-col>\n            <ion-col width-10 ><ion-icon name="stats"></ion-icon></ion-col>\n            </ion-row>\n          </ion-item>\n         \n    </ion-grid>\n  </ion-list>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/admin123/Documents/Ionic project/lte-analyses/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_remote_service_remote_service__["a" /* RemoteServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ })

},[340]);
//# sourceMappingURL=main.js.map