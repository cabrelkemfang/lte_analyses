import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SignUpPage} from '../pages/sign-up/sign-up';
import {UserPage } from '../pages/user/user';
import { RemoteServiceProvider } from '../providers/remote-service/remote-service';
import { HttpModule } from '@angular/http';
import { UploardFilePage } from '../pages/uploard-file/uploard-file';
import { EditPersonalInformationPage } from '../pages/edit-personal-information/edit-personal-information';
import { ViewGraphPage} from '../pages/view-graph/view-graph';
import {PersonalInfoPage} from '../pages/personal-info/personal-info';
import { ChartsModule } from 'ng2-charts';
import { NativeStorage } from '@ionic-native/native-storage';
import { IonicStorageModule } from '@ionic/storage';

import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';

  

//plugin to install
//import { Transfer } from '@ionic-native/transfer';
//import { FilePath } from '@ionic-native/file-path';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SignUpPage,
    UserPage,
    UploardFilePage,
    EditPersonalInformationPage,
    ViewGraphPage,
    PersonalInfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot({
      name: '__mydb',
      driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    HttpModule,
    ChartsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SignUpPage,
    UserPage,
    UploardFilePage,
    EditPersonalInformationPage,
    ViewGraphPage,
    PersonalInfoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RemoteServiceProvider,
    FileTransfer,
    FileTransferObject,
    File,
    FilePath,
    FileChooser
  
  ]
})
export class AppModule {}
