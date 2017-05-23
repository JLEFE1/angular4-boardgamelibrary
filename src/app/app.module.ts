import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {MdMenuModule, MdToolbarModule} from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { BoardgameModule } from './boardgame/boardgame.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BoardgameModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MdToolbarModule,
    MdMenuModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
