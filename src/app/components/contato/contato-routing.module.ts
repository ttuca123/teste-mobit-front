import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoComponent } from './contato.component';

const routes: Routes = [
  {
    path: 'contrato/cadastro',
    redirectTo: 'cadastro',
  },
  {
    path: 'contrato/cadastro',
    component: ContatoFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'contrato-list',
    component: ContatoListComponent,
    pathMatch: 'full'
  },
  {
    path: 'contato/contato/:id',
    redirectTo: 'contato/:id',
  },
  { path: 'contato/:id',
    component: ContatoFormComponent,
    pathMatch: 'full'
  },
  {
    path: 'contato-form/contato',
    redirectTo: 'contato'
  },
  {
    path: 'contato/:id/contato',
    redirectTo: 'contato'
  },
  {
    path: 'contato',
    component: ContatoComponent,
  }
];
/**
 * Configuração de rotas para o contrato
 *
 * @export
 * @class ContratoRoutingModule
 */
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContatoRoutingModule {}
