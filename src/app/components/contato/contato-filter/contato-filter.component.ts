import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { isCPF } from 'brazilian-values';
import { Subscription } from 'rxjs';
import { PageForm } from 'src/app/utils/page-form';
import { Contato } from 'src/app/dto/contato';
import { ContatoService } from 'src/app/services/contato.service';
import { View } from 'src/app/utils/view';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-contato-filter',
  templateUrl: './contato-filter.component.html',
  styleUrls: ['./contato-filter.component.scss'],
})
export class ContatoFilterComponent extends View implements OnInit, OnDestroy {
  filtro: Contato;
  pager: PageForm = new PageForm();    
  

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
    public override loading: MatDialog
  ) {
    super('Cadastro de Contatos', loading);
  }

  

  ngOnInit() {
    this.filtro = this.contatoService.novo();
    this.pager = new PageForm();
    this.buscarDezContatos();    
  }

  public buscarDezContatos() {
    this.exibirLoading('Buscando Dez Contatos');
    this.subscription = this.contatoService.findDezContatosOrderByNome()
    .subscribe((payload: any)=> {
      this.fecharLoading();      
      this.pager.content = payload;      

    }, (err: any) => {
        this.fecharLoading();      
      
    });
  }
  

  public buscar() {    
    
    this.pager = new PageForm();
    
    this.exibirLoading('Filtrando Contatos');
    (this.subscription = this.contatoService
      .filter(this.filtro)
      .subscribe((payload: any) => {
        this.pager.content = payload;        
        this.fecharLoading();
      }, (err: any) => {
        console.error(err);
        this.fecharLoading();
      }));
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
