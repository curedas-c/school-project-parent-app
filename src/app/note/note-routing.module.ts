import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AverageListComponent } from './average-list/average-list.component';

const routes: Routes = [
  {
    path: '',
    component: AverageListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}
