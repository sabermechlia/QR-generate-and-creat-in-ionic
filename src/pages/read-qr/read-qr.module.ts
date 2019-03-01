import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ReadQrPage } from './read-qr';

@NgModule({
  declarations: [
    ReadQrPage,
  ],
  imports: [
    IonicPageModule.forChild(ReadQrPage),
  ],
})
export class ReadQrPageModule {}
