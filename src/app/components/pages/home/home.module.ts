import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import { HeaderModule } from '../../common/header/header.module';
// import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';
// import {Firebase } from '@ionic-native/firebase/ngx'

@NgModule({
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  declarations: [HomePage],
  // providers:[
  //   FirebaseAnalytics,
  //   Firebase
  // ]
})
export class HomePageModule {}
