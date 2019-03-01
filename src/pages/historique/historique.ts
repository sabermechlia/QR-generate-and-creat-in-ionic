import { histo } from './../../interface/histo.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DbProvider } from '../../providers/db/db';

/**
 * Generated class for the HistoriquePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-historique',
  templateUrl: 'historique.html',
})
export class HistoriquePage {
  resultat;
  histo:histo
  tab:histo[]=[];
  constructor(public navCtrl: NavController, public navParams: NavParams,private db:DbProvider) {
    this.db.initMaBase();
    this.tab=this.db.SelectAll()
    

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoriquePage');
  }

}
