import { Component, ViewChild } from '@angular/core';
import { Nav, IonicPage, NavController, NavParams } from 'ionic-angular';
import { UploardFilePage } from '../uploard-file/uploard-file';
import { EditPersonalInformationPage } from '../edit-personal-information/edit-personal-information';
import { HomePage } from '../home/home';
import { App, LoadingController, ToastController } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { ViewGraphPage } from '../view-graph/view-graph';
import { Storage } from '@ionic/storage';





/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {
  private rootPage;
  private uplorsFile;
  private editPersonalInformation;
  files: any;
  public username: string;
  public id: number;
  public file: any;


  loading: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, public app: App,
    public loadingCtrl: LoadingController,
    private toastCtrl: ToastController,
    private _service: RemoteServiceProvider,
    private storage: Storage) 
    {

    //retrieve the username store in the browser
    this.storage.get('username').then((val) => {
      this.username = val;

      //debuging purpose
      console.log("this is the user name :" + this.username);
      
        this._service.getFiles(this.username).subscribe(data => {
          this.files = data;
          console.log(this.files);
        },
          err => {
            //debuging purpose
            console.log(err);
          });
      });
    }
  

  ionViewDidLoad() {

    //this._service.postFile("/home/admin123/lte-analyses/package-lock.json");   
  }

  //get all files from the backend
 


  viewGraaph() {
    this.navCtrl.push(ViewGraphPage);
  }
  
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
  onFile(file) {
    console.log(file.value);

  }
}
