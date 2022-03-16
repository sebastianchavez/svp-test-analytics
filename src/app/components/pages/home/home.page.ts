import { Component, OnInit } from '@angular/core';
// import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';
// import { Firebase } from '@ionic-native/firebase/ngx';
// import { FirebaseService } from '../../services/firebase.service';
// import { Firebase } from '@awesome-cordova-plugins/firebase/ngx';
// import { FirebaseAnalytics } from '@ionic-native/firebase-analytics/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    // private fb: FirebaseService
    // private firebase: Firebase,
    // private firebaseAnalytics: FirebaseAnalytics,
    // private firebaseAnalytics: FirebaseAnalytics
  ) { }

  async ngOnInit() {
    try {
      console.log('ngOnInit')
      // await this.firebaseAnalytics.logEvent('into in home', {})
      // await this.firebase.logEvent('into in home', { user: 'schavez@yopmail.com' })
      // await this.fb.login()
      // const response = await this.fb.logEvent('into in home', {})
      console.log('firebase ok')
    } catch (error) {
      console.log('firebase error', error)
    }
    // this.firebase.setUserId()
    // this.firebase.startTrace()
  }

}
