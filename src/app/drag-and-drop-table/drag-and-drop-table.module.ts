import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropTableComponent } from './drag-and-drop-table/drag-and-drop-table.component';
import { DragulaModule } from 'ng2-dragula';
import { OrderByPositionPipe } from './order-by-position.pipe';

@NgModule({
  imports: [
    CommonModule,
    DragulaModule.forRoot()
  ],
  declarations: [DragAndDropTableComponent, OrderByPositionPipe],
  exports:[DragAndDropTableComponent]
})
export class DragAndDropTableModule { }