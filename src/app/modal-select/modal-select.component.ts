import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal-select',
  templateUrl: './modal-select.component.html',
  styleUrls: ['./modal-select.component.scss'],
})
export class ModalSelectComponent {
  @Input() select: any;
  @Input() isDisabled: any;
}
