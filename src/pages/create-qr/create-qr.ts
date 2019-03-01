import { DbProvider } from './../../providers/db/db';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';


@IonicPage()
@Component({
  selector: 'page-create-qr',
  templateUrl: 'create-qr.html',
})
export class CreateQrPage {
  qrData = null;
  createdCode = null;
  constructor(public navCtrl: NavController,
    public androidpermissions: AndroidPermissions,
    public qrScanner: QRScanner,private db:DbProvider,
    private socialSharing: SocialSharing) {
    this.db.initMaBase();
}
share(){
  this.socialSharing.share(this.qrData).then(() => {
    // Sharing via email is possible
  }).catch(() => {
    // Sharing via email is not possible
  });
}
createCode() { 
this.db.InsertInto(this.qrData);
this.createdCode = this.qrData;
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateQrPage');
  }

}
