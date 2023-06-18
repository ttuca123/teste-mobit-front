import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContatoFilterComponent } from './contato-filter/contato-filter.component';
import { ContatoListComponent } from './contato-list/contato-list.component';
import { ContatoFormComponent } from './contato-form/contato-form.component';
import { FormsModule } from '@angular/forms';
import { ContatoComponent } from './contato.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { ContatoRoutingModule } from './contato-routing.module';
import { IConfig, NgxMaskDirective, provideEnvironmentNgxMask, provideNgxMask } from 'ngx-mask';
import { ContatoEnderecoFormComponent } from './contato-endereco-form/contato-endereco-form.component';

@NgModule({
  imports: [CommonModule, RouterModule, FormsModule, MaterialModule, ContatoRoutingModule, NgxMaskDirective],
  declarations: [
    ContatoComponent,
    ContatoFilterComponent,
    ContatoListComponent,
    ContatoFormComponent,
    ContatoEnderecoFormComponent,    
  ],
  exports: [],
  providers: [      
          provideNgxMask(),          
    ],
})
export class ContatoModule {}
