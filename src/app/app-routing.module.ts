import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { ContatoFormComponent } from './components/contato/contato-form/contato-form.component';


export const routes: Routes = [
  {
    path: "",
    redirectTo: "contato",
    pathMatch: "full",
  },  
  {
    path: "contato",
    component: ContatoComponent,
    data: {
      title: "Contato Page",
    },    
  },   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
