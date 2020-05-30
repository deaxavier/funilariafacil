import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'cadastrocliente',
    loadChildren: () => import('./cadastrocliente/cadastrocliente.module').then( m => m.CadastroclientePageModule)
  },
  {
    path: 'cadastroveiculo',
    loadChildren: () => import('./cadastroveiculo/cadastroveiculo.module').then( m => m.CadastroveiculoPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
