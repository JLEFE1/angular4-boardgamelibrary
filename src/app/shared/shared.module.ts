import {NgModule} from '@angular/core';

import {BoardgameService} from '../boardgames/shared/boardgame.service';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {InitCapsPipe} from './init-caps.pipe';
import {FilterTextComponent} from './filter-text/filter-text.component';
import {FilterTextService} from './filter-text/filter-text.service';


@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    FilterTextComponent,
    InitCapsPipe
  ],
  providers: [
    BoardgameService,
    FilterTextService
  ],
  exports: [
    CommonModule,
    FormsModule,
    FilterTextComponent,
    InitCapsPipe
  ]
})

export class SharedModule {
}
