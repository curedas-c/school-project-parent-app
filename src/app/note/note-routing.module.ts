import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AverageListComponent } from './average-list/average-list.component';
import { AverageDetailsComponent } from './average-details/average-details.component';

const routes: Routes = [
  {
    path: '',
    component: AverageListComponent
  },
  {
    path: 'details',
    component: AverageDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NotePageRoutingModule {}
