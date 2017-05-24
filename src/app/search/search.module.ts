import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';

import {SearchComponent} from './search.component';


@NgModule({
  imports: [

    ],
  exports: [
    SearchComponent
  ],
  declarations: [
    SearchComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class SearchModule {}
