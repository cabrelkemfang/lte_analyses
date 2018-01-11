import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditPersonalInformationPage } from './edit-personal-information';

@NgModule({
  declarations: [
    EditPersonalInformationPage,
  ],
  imports: [
    IonicPageModule.forChild(EditPersonalInformationPage),
  ],
})
export class EditPersonalInformationPageModule {}
