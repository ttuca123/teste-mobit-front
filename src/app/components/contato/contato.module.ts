import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContatoFilterComponent } from './contato-filter/contato-filter.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { MaterialModule } from 'src/app/modules/material.module';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule],
  declarations: [
    ContatoComponent,
    ContatoFilterComponent,
    ContatoListComponent,
    ContatoFormComponent,
  ],
  exports: [ContatoFilterComponent, ContatoListComponent, ContatoFormComponent],
})
export class ContatoModule {}
