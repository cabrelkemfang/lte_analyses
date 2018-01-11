//import { HttpClient } from '@angular/common/http';
import { Headers, Http, RequestOptions } from '@angular/http';
import { NavController, ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/timeout';
import { Observable } from 'rxjs/Observable';
import { Storage } from '@ionic/storage';
import * as base64 from "base-64";
import { LoadingController } from 'ionic-angular';

/*
  Generated class for the RemoteServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RemoteServiceProvider {
  loading: any;
  url: string = "http://192.168.1.4:8080/";
  username: string;
  public token: String= "a2F5OnBsZWFzZQ==";
  value: any[] = [];
  tok:string;


  constructor(
    public http: Http,
    private toastCtrl: ToastController,
    private storage: Storage,
    public loadingCtrl: LoadingController,
    // public navCtrl: NavController,
  ) {
    //retrieve the token store in the browser
    this.storage.get('token').then((val) => {
      this.tok = val;

      //debuging purpose
      console.log("this is the modificatin inside the constructor " + this.tok);

    });


  }

  //login request
  getLogin(username): Observable<any[]> {

    let timeoutMS = 10000;

    //generate a token
    //var token = require('basic-auth-token');
    //let tokens = token(this.info[0], this.info[1]);

    console.log("this is the modificatin outside the constructor  " + this.token);

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    //headers.append('Access-Control-Allow-Origin','*'); 
    // headers.append('Origin',this.url + "user/" +  username); 
    headers.append('Authorization', 'Basic ' + this.token);

    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + "user/" + username, options)
      .timeout(timeoutMS)
      .map(res => {
        console.log(res.status); // Print http header

        //store the status code in the browser
        this.storage.set("resS", res);
        return res.json();
      });
  }

  // request to get all the files in the backend
  getFiles(username): Observable<any[]> {
    let timeoutMS = 100000;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url + "user/" + username + "/files", options)
      .timeout(timeoutMS)
      .map(res => res.json());
  }

  //request to get data fron the backend
  getData(username): Observable<any[]> {
    let timeoutMS = 100000;
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.url+"user/"+username+"/files/"+"datafilter?fileName=JULY18-24-USN-CORRECT3.xls&start=2016-07-20 13:00:00&end=2016-07-20 19:30:00", options)
      .timeout(timeoutMS)
      .map(res => res.json());
  }


  // sign request 
  signUpRequest(postParams) {
    this.showLoader();
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.url + "register", JSON.stringify(postParams), options)
      .subscribe(data => {
        console.log("this is the header " + data.status);
        this.loading.dismiss();
        if (data.status == 200) {
          // this.navCtrl.pop();
          this.presentToast("Your account has been successfully added")
        } else {
          this.presentToast("the creation have fail")
        }


      }, error => {
        console.log(error);// Error getting the data
      });
  }

  // // update request
  updateUser(params, username) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.url + "user/" + username, params, options)
      .subscribe(success => {
        console.log(success['_body']);
        this.loading.dismiss();
        if (success.status == 200) {
          // this.navCtrl.pop();
          this.presentToast("Your account has been successfully updated")
        } else {
          this.presentToast("the update faill")
        }
      }, error => {
        console.log(error);// Error getting the data
      });
  }


  // file request
  postFile(postParams) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post("http://jsonplaceholder.typicode.com/posts", postParams, options)
      .subscribe(data => {
        console.log(data['_body']);
      }, error => {
        console.log(error);// Error getting the data
      });
  }

  //logout request
  logout() {
    return new Promise((resolve, reject) => {
      let headers = new Headers();
      headers.append('X-Auth-Token', localStorage.getItem('token'));
      this.http.post(this.url, {}, { headers: headers })
        .subscribe(res => {
          localStorage.clear();
        }, (err) => {
          reject(err);
        });
    });
  }

  // login request
  login(params) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
    this.http.post(this.url + "login", JSON.stringify(params), options)
      .subscribe(data => {
        console.log(data['_body'])
      }, error => {
        console.log(error);// Error getting the data
      });
  }


  //testing purpose 
  getAllArticles(): Observable<any[]> {
    return this.http.get("http://localhost:8080/test.json")
      .map(res => res.json());

  }

  //request for deleting aacount
  deleteUser(username,param) {
    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Basic ' + this.token);
    //let cpParams = new URLSearchParams();
    // cpParams.set('id', articleId);
    let options = new RequestOptions({ headers: headers, });
     this.http.post(this.url + "user/" + username, JSON.stringify(param),options)
      .map(success =>{
        let re = success;
        console.log(re);
        console.log("the status code is :"+success.status);
      } )

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
}
