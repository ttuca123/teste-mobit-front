import {  
  Component,  
  Input  
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContatoService } from 'src/app/services/contato.service';
import { PageForm } from 'src/app/utils/page-form';
import { View } from 'src/app/utils/view';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.scss'],
})
export class ContatoListComponent extends View {
  @Input('pager') pager: PageForm = new PageForm();  
  
  displayedColumns: string[] = ['codigo', 'nome', 'sobrenome', 'cpf', 'email', 'update', 'remover'];

  constructor(public override loading: MatDialog, public contatoService: ContatoService ) {

    super('Lista de Contatos', loading);
  } 

  remover(id: number){
    this.exibirLoading('Removendo Contato');
    this.contatoService.remover(id).subscribe(_ => {
      this.pager.content = this.pager.content.filter(payload => payload.codigo!=id);
      this.fecharLoading();
    }, err=> {
      console.error(err);
      this.fecharLoading();
      alert('Ocorreu um erro!');
    });
  }
   
}
