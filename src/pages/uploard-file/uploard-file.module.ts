import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { UploardFilePage } from './uploard-file';

@NgModule({
  declarations: [
    UploardFilePage,
  ],
  imports: [
    IonicPageModule.forChild(UploardFilePage),
  ],
})
export class UploardFilePageModule {}
