import { Usuario } from './usuario';
import { Leilao } from './leilao';

export interface Lance {
  id?: number;
  valor: number;
  compradorId: number;
  leilaoId: number;
  comprador?: Usuario;
  leilao?: Leilao;
}