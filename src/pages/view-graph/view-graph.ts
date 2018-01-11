import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RemoteServiceProvider } from '../../providers/remote-service/remote-service';
import { Response } from '@angular/http/src/static_response';
import { Storage } from '@ionic/storage';

/**
 * Generated class for the ViewGraphPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-view-graph',
  templateUrl: 'view-graph.html',
})
export class ViewGraphPage {

  username: string;
  public response: any;
  public Data1: any[] = [];
  public Data2: any[] = [];
  public Data3: any[] = [];
  public time: any[] = [];
  public lineChartData: Array<any> = [
    { data: [], label: 'S1 mode average bearer number ' },
    { data: [], label: 'S1 mode maximum bearer number' },
    { data: [], label: 'maximumAttachedUsers' },

  ];


  public lineChartLabels: Array<any> = []//[0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70]

  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // green
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'green',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: 'black',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'blue',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // blue
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'red',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor
    (public navCtrl: NavController,
    public navParams: NavParams,
    private _service: RemoteServiceProvider,
    private storage: Storage,
  ) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewGraphPage');

    //retrieve the token store in the browser
    this.storage.get('username').then((val) => {
      this.username = val;

      //debuging purpose
      console.log("this is the modificatin inside the constructor " + this.username);

      //retrievind data fron the backend

    });

    this._service.getData("kay").subscribe(
      data => {
        this.response = data;
        //debuging purpose
        console.log(this.response);
        var value1: any;
        var value2: any;
        var value3: any;
        var value4: any;

        for (let list of this.response) {
          value1 = Number(list.averageBearerNumber);
          this.Data1.push(value1);
          value2 = Number(list.maximumBearerNumber);
          this.Data2.push(value2);
          value3 = Number(list.maximumAttachedUsers);
          this.Data3.push(value3);
          value4 = list.startTime;

          var date = new Date(value4 * 1000);
          var formattedDate = ('0' + date.getDate()).slice(-2) + '/' + ('0' + (date.getMonth() + 1)).slice(-2) + '/' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
          console.log(formattedDate);

          this.time.push(formattedDate);

        }
        this.lineChartData[0].data = this.Data1;
        this.lineChartData[1].data = this.Data2;
        this.lineChartData[2].data = this.Data3;
        this.lineChartLabels = this.time;
        console.log(this.Data1);
        console.log(this.Data2);
        console.log(this.Data3);
        console.log(this.lineChartData);
        console.log(this.time);


      }, err => {
        //debuging purpose
        console.log(err);
      });
  }

}
