import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { LoadingController } from 'ionic-angular';


/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  constructor(
    public navCtrl: NavController,
     public navParams: NavParams, 
    public toastCtrl: ToastController, 
    private _service: RemoteServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
  }
  onSubmit(signUp){
    //deburging purpose
    console.log(JSON.stringify(signUp.value));

   //suging up request
    this._service.signUpRequest(signUp.value);
    

  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 4000,
      position: 'bottom',
      dismissOnPageChange: true
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}

