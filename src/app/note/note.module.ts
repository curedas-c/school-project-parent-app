import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NotePageRoutingModule } from './note-routing.module';

import { AverageListComponent } from './average-list/average-list.component';
import { NbIconModule, NbListModule } from '@nebular/theme';
import { PeriodSelectModule } from '../@shared/components/period-select/period-select.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NbListModule,
    NbIconModule,
    PeriodSelectModule,
    NotePageRoutingModule
  ],
  declarations: [AverageListComponent]
})
export class NotePageModule {}
