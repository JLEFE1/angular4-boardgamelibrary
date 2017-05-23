import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {BoardgameComponent} from './boardgame/boardgame.component';
import {BoardgamesComponent} from './boardgames/boardgames.component';
import {CommonModule} from '@angular/common';


@NgModule({
  imports: [
    SharedModule,
    CommonModule
    ],
  exports:[
    BoardgameComponent,
    BoardgamesComponent
  ],
  declarations: [
    BoardgameComponent,
    BoardgamesComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BoardgameModule {}
