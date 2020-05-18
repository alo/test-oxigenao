import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', redirectTo: '/moduloa', pathMatch: 'full' },
  {
    path: 'moduloa',
    loadChildren: () => import('./modulo-a/modulo-a.module').then(m => m.ModuloAModule)
  },
  {
    path: 'modulob',
    loadChildren: () => import('./modulo-b/modulo-b.module').then(m => m.ModuloBModule)
  },
  {
    path: 'moduloc',
    loadChildren: () => import('./modulo-c/modulo-c.module').then(m => m.ModuloCModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
