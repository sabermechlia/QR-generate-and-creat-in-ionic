import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreateQrPage } from './create-qr';

@NgModule({
  declarations: [
    CreateQrPage,
  ],
  imports: [
    IonicPageModule.forChild(CreateQrPage),
  ],
})
export class CreateQrPageModule {}
