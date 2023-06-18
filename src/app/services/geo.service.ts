import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GeoService {

  constructor(private http: HttpClient) {}

  /**
   * ```
   * Obtém um logradouro de acordo com o cep informado
   *
   * ```
   * @param cep
   * @returns Observable<any>
   *
   * @author Artur Cavalcante
   * @since 18-06-2023 14:36
   */
  public findEnderecoByCep(cep: string): Observable<any> {
    let endpoint = `https://viacep.com.br/ws/${cep}/json/`;

    return this.http.get(endpoint);
  }

}
