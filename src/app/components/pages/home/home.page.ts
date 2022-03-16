import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private firebaseAnalytics: FirebaseAnalytics
  ) { }

  ngOnInit() {
      console.log('home')
      this.firebaseAnalytics.logEvent('into to home', {})
      .then(res => {
        console.log('SUCCESS:', res)
      })
      .catch(err => {
        console.log('ERROR:',err)
      })
  }

}
