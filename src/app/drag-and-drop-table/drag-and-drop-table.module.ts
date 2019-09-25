import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropTableComponent } from './drag-and-drop-table/drag-and-drop-table.component';
import { OrderByPositionPipe } from './order-by-position.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DragAndDropTableComponent, OrderByPositionPipe],
  exports:[DragAndDropTableComponent]
})
export class DragAndDropTableModule { }