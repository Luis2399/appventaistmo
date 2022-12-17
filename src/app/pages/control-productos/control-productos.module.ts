import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlProductosPageRoutingModule } from './control-productos-routing.module';

import { ControlProductosPage } from './control-productos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ControlProductosPageRoutingModule
  ],
  declarations: [ControlProductosPage]
})
export class ControlProductosPageModule {}
