import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
})
export class TableItemComponent {
  @Input() item: any;
  @Input() items: any;

  @Output() onItemIdx: EventEmitter<number> = new EventEmitter<number>();
  @Output() onDeleteItemIdx: EventEmitter<number> = new EventEmitter<number>();

  showMenu(item: any) {
    const idx = this.items.indexOf(item);
    this.onItemIdx.emit(idx);
  }
  deleteItem(item: any) {
    const idx = this.items.indexOf(item);
    this.onDeleteItemIdx.emit(idx);
  }
}
