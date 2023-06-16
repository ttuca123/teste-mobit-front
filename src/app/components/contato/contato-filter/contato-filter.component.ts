import { Component } from '@angular/core';
import { isCPF } from 'brazilian-values';

@Component({
  selector: 'app-contato-filter',
  templateUrl: './contato-filter.component.html',
  styleUrls: ['./contato-filter.component.scss']
})
export class ContatoFilterComponent {

  contato: any;
  cpfValido: boolean = false;


  atualizaCpf(cpf: string) {
    this.contato.cpf = cpf;

    this.cpfValido = isCPF(cpf);

    console.log(this.cpfValido);
  }
}
