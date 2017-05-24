import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SharedModule} from '../shared/shared.module';
import {BoardgameComponent} from './boardgame/boardgame.component';
import {CommonModule} from '@angular/common';
import { MdButtonModule, MdCardModule, MdChipsModule} from '@angular/material';
import {BoardgameListComponent} from './boardgame-list/boardgame-list.component';
import {BoardgamesComponent} from './boardgames.component';


@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    MdCardModule,
    MdChipsModule,
    MdButtonModule
    ],
  exports: [
    BoardgameComponent,
    BoardgamesComponent,
    BoardgameListComponent
  ],
  declarations: [
    BoardgameComponent,
    BoardgamesComponent,
    BoardgameListComponent

  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class BoardgameModule {}
