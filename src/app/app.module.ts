import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { FilterPipe } from './pipes/filter.pipe';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TabsComponent } from './tabs/tabs.component';
import { SelectComponent } from './select/select.component';
import { TableItemComponent } from './table-item/table-item.component';
import { ModalComponent } from './modal/modal.component';
import { ModalSelectComponent } from './modal-select/modal-select.component';
import { ModalUsersComponent } from './modal-users/modal-users.component';
import { SettingsMenuComponent } from './settings-menu/settings-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    FilterPipe,
    HeaderComponent,
    TabsComponent,
    SelectComponent,
    TableItemComponent,
    ModalComponent,
    ModalSelectComponent,
    ModalUsersComponent,
    SettingsMenuComponent,
  ],
  imports: [BrowserModule, FormsModule, DragDropModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
