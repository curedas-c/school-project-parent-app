import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeriodSelectComponent } from './period-select.component';
import { NbSelectModule } from '@nebular/theme';



@NgModule({
  declarations: [PeriodSelectComponent],
  imports: [
    CommonModule,
    NbSelectModule
  ],
  exports: [PeriodSelectComponent]
})
export class PeriodSelectModule { }
