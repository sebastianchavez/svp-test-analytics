import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ButtonsPageRoutingModule } from './buttons-routing.module';

import { ButtonsPage } from './buttons.page';
import { HeaderModule } from '../../common/header/header.module';
// import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';
// import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';

@NgModule({
  imports: [
    HeaderModule,
    CommonModule,
    FormsModule,
    IonicModule,
    ButtonsPageRoutingModule
  ],
  declarations: [ButtonsPage],
  // providers:[
  //   FirebaseAnalytics,
  //   Firebase
  // ]
})
export class ButtonsPageModule {}
