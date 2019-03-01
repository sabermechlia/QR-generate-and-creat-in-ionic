import { ReadQrPage } from './../pages/read-qr/read-qr';
import { CreateQrPage } from './../pages/create-qr/create-qr';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { AndroidPermissions } from '@ionic-native/android-permissions';
import { SocialSharing } from '@ionic-native/social-sharing';
// import { BarcodeScanner } from '@ionic-native/barcode-scanner';
//import { QRCodeModule } from 'angularx-qrcode';
import { SplashScreen } from '@ionic-native/splash-screen';
import { QrCodeProvider } from '../providers/qr-code/qr-code';
import { HttpClientModule } from '@angular/common/http';
import { HistoriquePage } from '../pages/historique/historique';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { QRScanner } from '@ionic-native/qr-scanner';
import { DbProvider } from '../providers/db/db';
import { SQLite } from '@ionic-native/sqlite';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CreateQrPage,
    ReadQrPage,
    HistoriquePage,
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    NgxQRCodeModule
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CreateQrPage,
    ReadQrPage,
    HistoriquePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    QRScanner,
   AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    QrCodeProvider,
    SocialSharing,
    DbProvider
  ]
})
export class AppModule {}
