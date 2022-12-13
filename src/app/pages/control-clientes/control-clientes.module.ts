import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ControlClientesPageRoutingModule } from './control-clientes-routing.module';

import { ControlClientesPage } from './control-clientes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    ControlClientesPageRoutingModule
  ],
  declarations: [ControlClientesPage]
})
export class ControlClientesPageModule {}
