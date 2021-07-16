import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-users',
  templateUrl: './modal-users.component.html',
  styleUrls: ['./modal-users.component.scss'],
})
export class ModalUsersComponent {
  @Input() participant: any;
  @Input() outgoingParticipants: any;
  @Input() id: any;

  @Output() userObjData: EventEmitter<object> = new EventEmitter<object>();

  checkSingle() {
    const obj = {
      arr: this.outgoingParticipants,
      isChecked: this.participant.isChecked,
      id: this.id,
    };
    this.userObjData.emit(obj);
  }
}
