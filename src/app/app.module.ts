import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoComponent } from './components/contato/contato.component';
import { ContatoFilterComponent } from './components/contato/contato-filter/contato-filter.component';
import { ContatoListComponent } from './components/contato/contato-list/contato-list.component';
import { ContatoFormComponent } from './components/contato/contato-form/contato-form.component';
import { ContatoModule } from './components/contato/contato.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { LoadingComponent } from './components/dialogs/loading/loading.component';

@NgModule({
  declarations: [AppComponent, LoadingComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ContatoModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
