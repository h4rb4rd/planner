import { Component, Input } from '@angular/core';
import { SelectsData } from '../app.component';
@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent {
  @Input() select!: SelectsData;
}
