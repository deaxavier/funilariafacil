import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroclientePage } from './cadastrocliente.page';

const routes: Routes = [
  {
    path: '',
    component: CadastroclientePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastroclientePageRoutingModule {}
