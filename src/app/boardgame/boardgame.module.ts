import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {BoardgameComponent} from './boardgame/boardgame.component';
import {BoardgamesComponent} from './boardgames/boardgames.component';
import {CommonModule} from '@angular/common';
import {MdButton, MdCardModule, MdChipsModule} from '@angular/material';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MdCardModule,
    MdChipsModule,
    MdButton
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
