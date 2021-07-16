import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
})
export class TabsComponent {
  @Input() tabOneTitle: any;
  @Input() tabTwoTitle: any;
  @Input() contentOne: any;
  @Input() contentTwo: any;

  @Output() isContentOne: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() isContentTwo: EventEmitter<boolean> = new EventEmitter<boolean>();

  showContentOne() {
    this.isContentOne.emit(true);
  }

  showContentTwo() {
    this.isContentTwo.emit(true);
  }
}
