import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {BoardgameModule} from '../boardgames/boardgame.module';


@NgModule({
  imports: [
      BoardgameModule
    ],
  exports: [
    HomeComponent
  ],
  declarations: [
    HomeComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class HomeModule {}
