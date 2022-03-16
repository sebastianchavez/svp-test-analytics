import { Component } from '@angular/core';
import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'mail' },
    { title: 'Buttons', url: '/buttons', icon: 'paper-plane' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor(
    private firebaseAnalytics: FirebaseAnalytics,
    private plaform: Platform  
) {

  plaform.ready().then(() => {
    this.init()
  })
  }

  init(){
    this.firebaseAnalytics.setUserId('schavez@yopmail.com')
  }
}
