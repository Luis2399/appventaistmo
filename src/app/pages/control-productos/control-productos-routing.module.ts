import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlProductosPage } from './control-productos.page';

const routes: Routes = [
  {
    path: '',
    component: ControlProductosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlProductosPageRoutingModule {}
