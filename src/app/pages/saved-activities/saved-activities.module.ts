import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedActivitiesPageRoutingModule } from './saved-activities-routing.module';

import { SavedActivitiesPage } from './saved-activities.page';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Ng2SearchPipeModule,
    SavedActivitiesPageRoutingModule
  ],
  declarations: [SavedActivitiesPage]
})
export class SavedActivitiesPageModule {}
