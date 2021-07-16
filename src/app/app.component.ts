import { Component } from '@angular/core';

export interface SelectsData {
  title: string;
  options: { option1: string; option2: string };
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'planner';

  mainModalOpen = false;
  contentOne = true;
  contentTwo = false;
  isMenu = false;

  searchValue = '';
  isSorted = true;
  isMainSettingsMenu = true;

  items = [
    {
      id: 0,
      date: '23 дек, 9:00',
      name: 'Страхование с заботой о клиенте',
      partisipants: '12',
      coach: '',
      progress: 95,
      visible: false,
    },
    {
      id: 1,
      date: '14 ноя, 9:30',
      name: 'Главные правила продаж',
      partisipants: '10',
      coach: '',
      progress: 91,
      visible: false,
    },
    {
      id: 2,
      date: '19 окт, 14:30',
      name: 'Первичное обучение КС',
      partisipants: '8',
      coach: '',
      progress: 86,
      visible: false,
    },
    {
      id: 3,
      date: '10 окт, 16:00',
      name: 'Первичное обучение КС',
      partisipants: '18',
      coach: '',
      progress: 82,
      visible: false,
    },
    {
      id: 4,
      date: '5 окт, 15:00',
      name: 'Вклады: теория и практика',
      partisipants: '6',
      coach: '',
      progress: 79,
      visible: false,
    },
    {
      id: 5,
      date: '27 сен, 11:00',
      name: 'Очное обучение менеджеров',
      partisipants: '20',
      coach: '',
      progress: 73,
      visible: false,
    },
  ];

  mainSelects: SelectsData[] = [
    { title: 'Программа', options: { option1: 'Все', option2: 'option 2' } },
    { title: 'Период', options: { option1: 'Июнь 2019', option2: 'option 2' } },
    { title: 'Статус', options: { option1: 'Все', option2: 'option 2' } },
  ];

  showMenu(event: number) {
    const idx = event;
    const toggledItem = {
      ...this.items[idx],
      visible: !this.items[idx].visible,
    };
    this.items = [
      ...this.items.slice(0, idx),
      toggledItem,
      ...this.items.slice(idx + 1),
    ];
  }

  closeMenu(item: any) {
    const idx = this.items.indexOf(item);
    this.items = [
      ...this.items.slice(0, idx),
      { ...this.items[idx], visible: false },
      ...this.items.slice(idx + 1),
    ];
  }
  deleteItem(event: number) {
    const idx = event;
    this.items.splice(idx, 1);
  }

  showContentOne(event: boolean) {
    this.contentOne = event;
    this.contentTwo = false;
  }

  showContentTwo(event: boolean) {
    this.contentTwo = event;
    this.contentOne = false;
  }

  sortProgress() {
    this.isSorted = !this.isSorted;
    this.items.sort((a, b) =>
      this.isSorted ? b.progress - a.progress : a.progress - b.progress
    );
  }
  showMainSettingsMenu() {
    this.isMainSettingsMenu = !this.isMainSettingsMenu;
  }
  leaveMainSettingsMenu() {
    this.isMainSettingsMenu = true;
  }
  openMainModal(event: boolean) {
    this.mainModalOpen = event;
  }
  closeMainModal(event: boolean) {
    this.mainModalOpen = event;
  }
}
