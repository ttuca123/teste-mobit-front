import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ContatoFilterComponent } from './components/contato/contato-filter/contato-filter.component';
import { ContatoListComponent } from './components/contato/contato-list/contato-list.component';
import { ContatoFormComponent } from './components/contato/contato-form/contato-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ContatoComponent,
    ContatoFilterComponent,
    ContatoListComponent,
    ContatoFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
