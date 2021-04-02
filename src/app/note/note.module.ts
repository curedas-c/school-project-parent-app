import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { AverageListComponent } from './average-list/average-list.component';
import { AverageDetailsComponent } from './average-details/average-details.component';
import { NbCardModule, NbIconModule, NbListModule, NbTreeGridModule } from '@nebular/theme';
import { PeriodSelectModule } from '../@shared/components/period-select/period-select.module';
import { NoteTableComponent } from './@shared/components/note-table/note-table.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbListModule,
    NbIconModule,
    NbCardModule,
    NbTreeGridModule,
    PeriodSelectModule,
    NotePageRoutingModule
  ],
  declarations: [AverageListComponent, AverageDetailsComponent, NoteTableComponent]
})
export class NotePageModule {}
