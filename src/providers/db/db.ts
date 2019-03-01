import { histo } from './../../interface/histo.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable, } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { ToastController } from 'ionic-angular';

const DATA_BASE_FILE_NAME: string = 'histo.db';
/*
  Generated class for the DbProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DbProvider {
  private db: SQLiteObject;
  resultat;
  histo:histo
  tab:histo[]=[];
  constructor(public http: HttpClient,public sqlite: SQLite,private toastController:ToastController ) {
    console.log('Hello DbProvider Provider');
  }
  public initMaBase(): void {
    this.sqlite.create({
      name: DATA_BASE_FILE_NAME,
      location: 'default'
    })
      .then((db: SQLiteObject) => {
        this.db = db;
        
        this.CreateTables();
      })
      .catch(e => console.log(e));
  }
  async presentToast(msg:string) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    });
    toast.present();
  }
  private CreateTables(): void {
    
    this.db.executeSql(' CREATE TABLE IF NOT EXISTS `histo` ( `id` INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT UNIQUE, `text` TEXT, `datehisto` TEXT )', [])
      .then(() => {
       this.presentToast("table created");
      })
      .catch(e => this.presentToast("table created "+e));

  }
  public InsertInto(text: string) {
    var currentTime = new Date();
    this.db.executeSql('INSERT INTO `histo` (text,datehisto) VALUES(\'' + text + '\',\'' + currentTime + '\')', [])
      .then(() => {
        this.presentToast("insert");
      })
      .catch(e => {this.presentToast("insert "+e);} );

  }
  public SelectAll():histo[]{
    if(this.db!=null)
   this.db.executeSql('SELECT * FROM histo ORDER BY datehisto DESC', [])
      .then(data =>{
        this.resultat=data.rows;
        this.presentToast("select" +this.resultat.length);
        for (let i = 0; i < this.resultat.length; i++) {

          let item = this.resultat.item(i);
          this.tab.push(item);
        }
        }
        )
      .catch(e => console.log(e));
      return this.tab;
    }

     
  
}
