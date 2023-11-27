import { Lance } from './lance';
import { Leilao } from './leilao';

export interface Usuario {
  id?: number;
  nome: string;
  email: string;
  lances?: Lance[];
  leiloes?: Leilao[];
}