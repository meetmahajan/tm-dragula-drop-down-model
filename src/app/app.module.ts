import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DragAndDropTableModule } from './drag-and-drop-table/drag-and-drop-table.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    DragAndDropTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
