import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Output() onModalOpen: EventEmitter<boolean> = new EventEmitter<boolean>();

  showMainModal() {
    this.onModalOpen.emit(true);
  }
}
