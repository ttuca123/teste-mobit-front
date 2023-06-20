import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.dev';
import { HttpParams } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Contato } from '../dto/contato';
import { Params } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContatoService {
  URL_BASE = `${environment.url}/contatos`;

  constructor(private http: HttpClient) {}

  public novo(): Contato {
    let contato: Contato = {
      codigo: undefined,
      nome: '',
      sobrenome: '',
      cpf: '',
      email: '',
      enderecos: [] = []
    };

    return contato;
  }

  /**
   * ```
   * import { Contato } from '../dto/contato';
   *
   * Retorna um objeto Contato mapeado
   * ```
   *
   * @param parametros
   * @returns @see {contato}
   */
  public mapParams(parametros: Params): Contato {
    let contato: Contato = {
      codigo: parametros['codigo'],
      nome: parametros['nome'],
      sobrenome: parametros['sobrenome'],
      cpf: parametros['cpf'],
      email: parametros['email'],
    };

    return contato;
  }

  /**
   *
   * @param page
   * @param linesPerPage
   * @param obj
   * @returns Observable de Lista de Patchs paginado
   */
  public filter(    
    obj: Contato
  ): Observable<any> {
    
    let endpoint = `${this.URL_BASE}/filtros`;

    const params = new HttpParams()      
      .set('payload', JSON.stringify(obj));

    return this.http.get(endpoint, { params });
  }


  /**
   * ```
   * Recupera a lista com os 10 primeiros Contatos ordendo pelo Atributo nome
   *
   * ```
   * @param id
   * @returns Observable<any>
   *
   * @author Artur Cavalcante
   * @since 16-06-2023 14:36
   */
  public findDezContatosOrderByNome(): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.get(`${endpoint}/`);
  }



  /**
   * ```
   * Obtém um contato específico de acordo com o código enviado
   *
   * ```
   * @param id
   * @returns Observable<any>
   *
   * @author Artur Cavalcante
   * @since 16-06-2023 14:36
   */
  public findById(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.get(`${endpoint}/${id}`);
  }

  /**
   * ```
   * Envia uma requisição POST com um corpo JSON e retorna
   * uma resposta HTTP com o código 201.
   *  ```
   *
   * @param obj O objeto Contato.
   *
   * @return An `Observable` da resposta, com o status da resposta do servidor.
   */
  public save(obj?: Contato): Observable<any> {
    let endpoint = `${this.URL_BASE}`;

    return this.http.post(`${endpoint}`, obj);
  }


  /**
   * ```
   * Envia uma requisição UP com O id e um corpo JSON e retorna
   * uma resposta HTTP com o código 204.
   *  ```
   *
   * @param obj O objeto Contato.
   *
   * @return An `Observable` da resposta, com o status da resposta do servidor.
   */
  public update(id: number, obj?: Contato): Observable<any> {
    let endpoint = `${this.URL_BASE}/${id}`;

    return this.http.put(`${endpoint}`, obj);
  }


  /**
   * ```
   * Envia uma requisição DELETE  para remover contato
   *  ```
   *
   * @param id .
   *
   * @return An `Observable` da resposta.
   */
  public remover(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}/${id}`;

    return this.http.delete(`${endpoint}`);
  }


  /**
   * ```
   * Envia uma requisição DELETE  para remover endereço
   *  ```
   *
   * @param id .
   *
   * @return An `Observable` da resposta.
   */
  public removerEndereco(id: number): Observable<any> {
    let endpoint = `${this.URL_BASE}/enderecos/${id}`;

    return this.http.delete(`${endpoint}`);
  }
}
