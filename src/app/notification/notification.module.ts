import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotificationPageRoutingModule } from './notification-routing.module';

import { NotificationListComponent } from './notification-list/notification-list.component';
import { NbButtonModule, NbCardModule, NbListModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbListModule,
    NbCardModule,
    NbButtonModule,
    NotificationPageRoutingModule
  ],
  declarations: [NotificationListComponent]
})
export class NotificationPageModule {}
