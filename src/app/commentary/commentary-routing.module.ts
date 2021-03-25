import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CommentaryListComponent } from './commentary-list/commentary-list.component';

const routes: Routes = [
  {
    path: '',
    component: CommentaryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommentaryPageRoutingModule {}
