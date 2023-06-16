import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contato } from 'src/app/dto/contato';
import { ContatoService } from 'src/app/services/contato.service';
import { View } from 'src/app/utils/view';

@Component({
  selector: 'app-contato-form',
  templateUrl: './contato-form.component.html',
  styleUrls: ['./contato-form.component.scss'],
})
/**
 * @author Artur Cavalcante
 * @since 16-06-2023
 */
export class ContatoFormComponent extends View implements OnInit {
  contato: Contato;
  contatoSub?: Subscription;

  cpfField = new FormControl('', [Validators.required]);
  email = new FormControl('', [Validators.required, Validators.email]);

  constructor(
    private contatoService: ContatoService,
    private route: ActivatedRoute,
    private router: Router,
    public override loading: MatDialog
  ) {
    super('Cadastro de Contatos', loading);
  }

  ngOnInit() {
    this.contato = this.contatoService.novo();
    this.route.params.subscribe((parametros: Params) => {
      const codigo = parametros['codigo'];

      if (codigo) {
        this.contatoService.mapParams(parametros);

        this.contatoService.findById(codigo).subscribe(
          (contato) => {
            this.contato = contato;
          },
          (err) => {
            console.error(err);
          }
        );
      }
    });
  }

  onSubmit() {
    if (
      this.contato != undefined &&
      (this.contato.codigo === null || this.contato.codigo === undefined)
    ) {
      this.inserir();
    }
  }

  /**
   * ```
   *  Inserir um novo contato
   * ```
   *
   */
  inserir() {
    this.contatoSub = this.contatoService
      .save(this.contato)
      .subscribe((payload) => {
        this.exibirSucesso();
        this.limpar();
      });
  }
}
