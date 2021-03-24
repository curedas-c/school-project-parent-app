import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { NbUserModule } from '@nebular/theme';



@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    NbUserModule
  ],
  exports: [HeaderComponent]
})
export class HeaderModule { }
