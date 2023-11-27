import { Usuario } from './usuario';
import { Lance } from './lance';

export interface Leilao {
  id?: number;
  produto: string;
  preco: number;
  dataLimite: Date;
  donoId: number;
  dono?: Usuario;
  lances?: Lance[];
}