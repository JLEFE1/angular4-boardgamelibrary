import { NgModule } from '@angular/core';

import {BoardgameService} from './service/boardgame.service';


@NgModule({
    providers: [
      BoardgameService
    ]
})
export class SharedModule {}
