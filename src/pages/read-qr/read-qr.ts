import { QrscannerPage } from './../qrscanner/qrscanner';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';



@IonicPage()
@Component({
  selector: 'page-read-qr',
  templateUrl: 'read-qr.html',
})
export class ReadQrPage {

  constructor(public navCtrl: NavController,
    public androidpermissions: AndroidPermissions,
    public qrScanner: QRScanner) {
  }
  push() {
    this.navCtrl.push(QrscannerPage);
  }

  qrscanner() {

    // Optionally request the permission early
    this.qrScanner.prepare()
      .then((status: QRScannerStatus) => {
        if (status.authorized) {
          // camera permission was granted
          alert('authorized');

          // start scanning
          let scanSub = this.qrScanner.scan().subscribe((text: string) => {
            console.log('Scanned something', text);
            alert(text);
            this.qrScanner.hide(); // hide camera preview
            scanSub.unsubscribe(); // stop scanning
          });

          this.qrScanner.resumePreview();

          // show camera preview
          this.qrScanner.show()
          .then((data : QRScannerStatus)=> {
            alert(data.showing);
          },err => {
            alert(err);

          });

          // npm install ngx-qrcode2 --save

        } else if (status.denied) {
          alert('denied');
          // camera permission was permanently denied
          // you must use QRScanner.openSettings() method to guide the user to the settings page
          // then they can grant the permission from there
        } else {
          // permission was denied, but not permanently. You can ask for permission again at a later time.
          alert('else');
        }
      })
      .catch((e: any) => {
        alert('Error is' + e);
      });

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ReadQrPage');    
  }

}
