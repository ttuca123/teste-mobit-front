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
export class ContatoFilterComponent extends View implements OnInit, OnDestroy, DoCheck {
  @Input() filtro: any;
  pager: PageForm = new PageForm();
  
  subscription?: Subscription;
  @Output() filtrar = new EventEmitter<any>();

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
    public override loading: MatDialog
  ) {
    super('Cadastro de Contatos', loading);
  }

  //Hook responsável por detectar mudanças nos valores dos campos
  ngDoCheck(): void {
    this.pager.filtrado = false;
  }

  ngOnInit() {
    this.filtro = this.contatoService.novo();
    this.pager = new PageForm();
    this.buscarDezContatos();    
  }

  public buscarDezContatos() {

    this.contatoService.findDezContatosOrderByNome()
    .subscribe((payload: [])=> {
      this.fecharLoading();
      console.log(JSON.stringify(payload));
      this.pager.content = payload;      

    }, (err: any) => {


    });
  }

  public paginar($event: any) {
    this.buscar();
  }

  public buscar() {
    (this.subscription = this.contatoService
      .filter(this.pager.pageable.pageNumber, this.pager.size, this.filtro)
      .subscribe((page: any) => {
        this.pager = page;
      })),
      (err: any) => {
        console.error(err);
      };
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
