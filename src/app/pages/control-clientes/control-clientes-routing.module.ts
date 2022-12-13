import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ControlClientesPage } from './control-clientes.page';

const routes: Routes = [
  {
    path: '',
    component: ControlClientesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ControlClientesPageRoutingModule {}
