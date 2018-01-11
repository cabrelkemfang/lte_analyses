import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { SignUpPage } from '../sign-up/sign-up';
import { UserPage } from '../user/user';
import { LoadingController } from 'ionic-angular';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Storage } from '@ionic/storage';
import * as base64 from "base-64";



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  loading: any;
  data: any;
  value: any[];
  responseData: {};
  email: string;
  resp: number;


  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private _service: RemoteServiceProvider,
    private storage: Storage
  ) {
// //get the value of the status store 
// this.storage.get('token').then((val) => {
//   this.resp = val;
//   //debuging purpose
//   console.log("this is the modificatin inside" + this.resp);

//});

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');

    //initialize the token to be empty
    //this.storage.remove('token');
    //console.log("the Header is :"+this.resp);

    
  }

  signUp() {
    //redirect to the sign up page
    this.navCtrl.push(SignUpPage);
  }

  onSubmit(login) {

    console.log(JSON.stringify(login.value));

    let username = login.value.username;
    let password = login.value.password;

    //generation of the token
    let token = base64.encode(username + ':' + password);

    //deburging purpose
    console.log("the token is +",token);


    //send post to a backend
    //this._service.login(login.value);

    //store user name  and password  in the browser
    this.storage.set('username', username);
    this.storage.set('password', password);
    // this.storage.set('token', token);

    //respond of the backend
    this.showLoader();
    this._service.getLogin(username).subscribe(res => {
      this.loading.dismiss();
      this.responseData = res;
      //debrging purpose
      console.log(this.responseData);
      console.log(this.resp );


      // check if the status code is correct
      if (this.responseData) {
        //deleting the status code store
        this.storage.remove('resS');

        // go to user page
        this.navCtrl.setRoot(UserPage);
      } else {
        this.presentToast("The username or Password are not correct");
        this.storage.remove('resS');
        
      }

    },
      err => {
        this.loading.dismiss();
        this.presentToast("No internet connection");
      });
  }

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

  showLoader() {
    this.loading = this.loadingCtrl.create({
      content: 'Authenticating...'
    });

    this.loading.present();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

}
