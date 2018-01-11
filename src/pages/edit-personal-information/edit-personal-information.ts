import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Storage } from '@ionic/storage';
import { UserPage } from '../user/user';


/**
 * Generated class for the EditPersonalInformationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-personal-information',
  templateUrl: 'edit-personal-information.html',
})
export class EditPersonalInformationPage {
  public username: string;
  id: number;
  firstName: string;
  responseData: any;
  lastName: string;
  phoneNumber: number;
  email: string;
  password: string;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    private _service: RemoteServiceProvider,
    private storage: Storage
  ) {



  }

  ionViewDidLoad() {
    //retrieve the username store in the browser
    this.storage.get('username').then((val) => {
      this.username = val;

      //debuging purpose
      console.log("this is the user name :" + this.username);

      //get all the information of the user
      this._service.getLogin(this.username).subscribe(data => {
        this.responseData = data;

        // placeholder
        this.firstName = this.responseData.firstName;
        this.lastName = this.responseData.lastName;
        this.phoneNumber = this.responseData.phoneNumber;
        this.email = this.responseData.email;

        //debuging purpose
        console.log(this.responseData);
      }, err => {

        //debuging purpose
        console.log(err);
      });
    });

   
     
 



  }

  onUpdate(signUp) {
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
    this.navCtrl.setRoot(UserPage);
  }
}

