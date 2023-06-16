import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { isCPF } from 'brazilian-values';
import { Subscription } from 'rxjs';
import { PageForm } from 'src/app/utils/page-form';
import { Contato } from 'src/app/dto/contato';
import { ContatoService } from 'src/app/services/contato.service';

@Component({
  selector: 'app-contato-filter',
  templateUrl: './contato-filter.component.html',
  styleUrls: ['./contato-filter.component.scss'],
})
export class ContatoFilterComponent implements OnInit, OnDestroy, DoCheck {
  @Input() filtro: any;
  pager: PageForm = new PageForm();
  subscription?: Subscription;

  constructor(private contatoService: ContatoService) {}

  //Hook responsável por detectar mudanças nos valores dos campos
  ngDoCheck(): void {
    this.pager.filtrado = false;
  }

  ngOnInit() {
    this.filtro = this.contatoService.novo();
    this.pager = new PageForm();
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
