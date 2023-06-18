import { MatDialog } from '@angular/material/dialog';
import { LoadingComponent } from '../components/dialogs/loading/loading.component';
import { isCPF } from 'brazilian-values';

/**
 * ```
 *  Classe responsável por conter variáveis e funções úteis para
 *  os componentes
 * ```
 */

export class View {
  pagina = 1;
  submitted = false;
  error = false;
  cpfValido = false;
  lblBtnSalvar = 'Salvar';
  lblBtnNovo = 'Novo';
  mascaraCPF = "000.000.000-00";

  constructor(public tela: string, public loading: MatDialog) {}

  exibirLoading() {
    this.loading.open(LoadingComponent, {
      width: '150px',
      disableClose: true,
    });
  }

  fecharLoading() {
    this.loading.closeAll();
  }

  /**
   * ```
   * Controla a exibição das mensagens na tela
   * ```
   * @since 16-06-2023
   * @author Artur Cavalcante
   *
   */
  exibirSucesso() {
    this.submitted = true;
    this.error = false;
  }
   

  /**
   * ```
   * Limpar mensagens exibidas na tela de ações do usuário
   * ```
   * @since 16-06-2023
   * @author Artur Cavalcante
   *
   */
  limpar() {
    this.submitted = false;
    this.error = false;
  }

  formatarCpfSomenteDigitos(valor: string): string {

    return valor.replaceAll('.', '').replaceAll('-', '').replaceAll(' ', '');
  }

 
}
