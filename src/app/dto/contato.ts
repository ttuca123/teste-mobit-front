import { Endereco } from "./endereco";

export interface Contato {
  codigo?: number;
  nome?: string;
  sobrenome?: string;
  cpf?: string;
  email?: string;
  enderecos?: Endereco[]
}
