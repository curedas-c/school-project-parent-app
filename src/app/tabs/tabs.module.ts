import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';
import { NbLayoutModule } from '@nebular/theme';
import { HeaderModule } from '../@shared/components/header/header.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabsPageRoutingModule,
    NbLayoutModule,
    HeaderModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
