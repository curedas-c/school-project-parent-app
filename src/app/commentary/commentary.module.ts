import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CommentaryPageRoutingModule } from './commentary-routing.module';

import { CommentaryListComponent } from './commentary-list/commentary-list.component';
import { NbBadgeModule, NbButtonModule, NbCardModule, NbIconModule, NbListModule, NbUserModule } from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbListModule,
    NbCardModule,
    NbUserModule,
    NbBadgeModule,
    NbIconModule,
    NbButtonModule,
    CommentaryPageRoutingModule
  ],
  declarations: [CommentaryListComponent]
})
export class CommentaryPageModule {}
