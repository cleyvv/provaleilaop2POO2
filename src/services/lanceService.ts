import { Lance } from '../models/lance';
import { Usuario } from '../models/usuario';

const lances: Lance[] = [];

export const createLance = (valor: number, compradorId: number, leilaoId: number): Lance => {
  const lance: Lance = { valor, compradorId, leilaoId };
  lances.push(lance);
  return lance;
};

export const getAllLances = (): Lance[] => {
  return lances;
};