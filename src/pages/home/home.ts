import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
 
  constructor(public navCtrl: NavController) {

  }
  // scan() {
  //   this.options = {
  //     prompt: 'Scan your bar code'
  //   };
  //   this.scanner.scan(this.options).then(
  //     (data) => { 
  //       this.scanedData=data;
  //     }, (err) => { 
  //       console.log("scanner log "+err)
  //     });
  // }
  // encode() {
  //   this.scanner.encode(this.scanner.Encode.TEXT_TYPE, this.text).then(
  //     (data) => { 
  //       this.scanedData=data;
  //     }, (err) => { 
  //       console.log("scanner log "+err)
  //     });
  // }
}
