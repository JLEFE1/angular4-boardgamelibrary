import { Component } from '@angular/core';

import 'rxjs/add/operator/map'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Boardgame library!';
  private menuItems= ['attachment','cloud_download'];

  constructor() {
    console.log('Called constructor of app.component');
  }


}
