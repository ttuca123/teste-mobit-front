import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { PageForm } from 'src/app/utils/page-form';

@Component({
  selector: 'app-contato-list',
  templateUrl: './contato-list.component.html',
  styleUrls: ['./contato-list.component.scss'],
})
export class ContatoListComponent implements OnInit {
  @Input('pager') pager: PageForm = new PageForm();
  @Input('filtrado') filtrado?: boolean;
  @Output('paginar') paginar: EventEmitter<any> = new EventEmitter();

  pageAtual = 1;
  displayedColumns: string[] = ['codigo', 'nome', 'sobrenome', 'cpf', 'email'];

  constructor() {}

  ngOnInit() {
    this.pager = new PageForm();
  }

  pageChanged(event: any): void {
    this.pager.pageable.pageNumber = event.pageIndex;
    this.pageAtual = event.pageIndex;
    this.paginar.emit();
  }
}
