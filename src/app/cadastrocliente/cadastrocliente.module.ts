import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadastroclientePageRoutingModule } from './cadastrocliente-routing.module';

import { CadastroclientePage } from './cadastrocliente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadastroclientePageRoutingModule
  ],
  declarations: [CadastroclientePage]
})
export class CadastroclientePageModule {}
