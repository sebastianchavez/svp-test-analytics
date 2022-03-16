import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from '../../common/header/header.module';
// import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';
// import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';
// import { Firebase } from '@ionic-native/firebase/ngx';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    HeaderModule
  ],
  providers: [
    // Firebase,
    // FirebaseAnalytics
  ],
  declarations: [HomePage]
})
export class HomePageModule { }
