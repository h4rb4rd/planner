import { Component, Input, Output, EventEmitter } from '@angular/core';
import { moveItemInArray, copyArrayItem } from '@angular/cdk/drag-drop';

export interface ModalSelectsData {
  title: string;
  options: { option1: string; option2: string };
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() mainModalOpen: any;
  @Output() onModalClose: EventEmitter<boolean> = new EventEmitter<boolean>();

  isPointerOverContainer = false;
  isDropBg = true;
  isSettingsMenu = true;
  searchParticipant = '';
  modalContentOne = true;
  modalContentTwo = false;
  isCheckedAll = false;
  isDisabled = true;

  outgoingParticipants = [
    { name: 'Максим Вильниц', isChecked: false },
    { name: 'Ольга Крышкова', isChecked: false },
    { name: 'Юлия Грунина', isChecked: false },
    { name: 'Марат Большаков', isChecked: false },
    { name: 'Светлана Иванова', isChecked: false },
    { name: 'Данил Горбунов', isChecked: false },
    { name: 'Дарья Васильева', isChecked: false },
    { name: 'Владимир Силеванов', isChecked: false },
  ];
  // eventParticipants = [{ name: '', isChecked: false }];
  eventParticipants: any = [];

  modalSelects: ModalSelectsData[] = [
    {
      title: 'Группа',
      options: { option1: 'Администрирование', option2: 'option 2' },
    },
    {
      title: 'Должность',
      options: { option1: 'Менеджер по персоналу', option2: 'option 2' },
    },
    { title: 'Стаж', options: { option1: '3-10 лет', option2: 'option 2' } },
  ];

  eventSelectData = [
    {
      title: 'Дата',
      options: { option1: '28 Ноября', option2: 'option 2' },
    },
    {
      title: 'Время',
      options: { option1: '9:00', option2: 'option 2' },
    },
    {
      title: 'Тренер',
      options: { option1: 'Сергей Трофимов', option2: 'option 2' },
    },
  ];
  eventSelectDataDisabled = [
    {
      title: 'Дата',
      options: { option1: 'Дата', option2: 'option 2' },
    },
    {
      title: 'Время',
      options: { option1: 'Время', option2: 'option 2' },
    },
    {
      title: 'Тренер',
      options: { option1: 'Тренер', option2: 'option 2' },
    },
  ];

  movedItems() {
    const secondArr = this.outgoingParticipants.filter((el) => {
      return el.isChecked === true;
    });

    if (secondArr.length > 0) {
      this.eventParticipants = secondArr;
      this.isDropBg = false;
    }
  }

  checkIscheckedAll(arr: any) {
    arr.every((el: any) => {
      if (el.isChecked !== true) {
        this.isCheckedAll = false;
      }
    });
  }

  checkAll(arr: any) {
    if (this.isCheckedAll === false) {
      arr.forEach((el: any) => {
        el.isChecked = true;
        this.isCheckedAll = true;
      });
    } else if (this.isCheckedAll === true) {
      arr.forEach((el: any) => {
        el.isChecked = false;
        this.isCheckedAll = false;
      });
    }
    this.checkIscheckedAll(arr);
  }

  checkSingle(event: any) {
    const { arr, isChecked, id } = event;
    if (isChecked === false) {
      arr[id].isChecked = true;
    } else {
      arr[id].isChecked = false;
      this.isCheckedAll = false;
    }
    this.checkIscheckedAll(arr);
  }
  drop(event: any) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      let idx = event.container.data.indexOf(
        event.previousContainer.data[event.previousIndex]
      );
      if (idx != -1) {
        return;
      }
      copyArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  onDragEntered(event: any) {
    if ((event && this.isDropBg !== false) || this.eventParticipants.length > 1)
      this.isDropBg = false;
    else if (!event && this.eventParticipants.length <= 1) this.isDropBg = true;
  }

  showSettingsMenu() {
    this.isSettingsMenu = !this.isSettingsMenu;
  }
  leaveSettingsMenu() {
    this.isSettingsMenu = true;
  }
  deleteDroppedItem(item: any) {
    const idx = this.eventParticipants.indexOf(item);
    this.eventParticipants.splice(idx, 1);
  }

  showModalContentOne(event: boolean) {
    this.modalContentOne = event;
    this.modalContentTwo = false;
  }

  showModalContentTwo(event: boolean) {
    this.modalContentTwo = event;
    this.modalContentOne = false;
  }
  closeMainModal() {
    this.onModalClose.emit(false);
  }
}
