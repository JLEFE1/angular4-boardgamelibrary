import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import {MdMenuModule, MdToolbarModule} from '@angular/material';
import { SharedModule } from './shared/shared.module';
import { BoardgameModule } from './boardgames/boardgame.module';
import { SearchModule } from './search/search.module';
import {AppRoutingModule} from './app-routing.module';
import {HomeModule} from './home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    BoardgameModule,
    HomeModule,
    SearchModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MdToolbarModule,
    MdMenuModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }
