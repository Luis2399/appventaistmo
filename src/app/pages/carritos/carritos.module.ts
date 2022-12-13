import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CarritosPageRoutingModule } from './carritos-routing.module';

import { CarritosPage } from './carritos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CarritosPageRoutingModule
  ],
  declarations: [CarritosPage]
})
export class CarritosPageModule {}
