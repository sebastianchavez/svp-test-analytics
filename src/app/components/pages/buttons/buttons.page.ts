import { Component, OnInit } from '@angular/core';
import { FirebaseAnalytics } from '@awesome-cordova-plugins/firebase-analytics/ngx';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.page.html',
  styleUrls: ['./buttons.page.scss'],
})
export class ButtonsPage implements OnInit {

  constructor(
    private firebaseAnalytics:FirebaseAnalytics
  ) { }

  async ngOnInit() {
    try {
      console.log('buttons')
      const response = await this.firebaseAnalytics.logEvent('into to buttons', {})
      console.log('firebase ok', response)
    } catch (error) {
      console.log('error:', error)
    }
  }

}
