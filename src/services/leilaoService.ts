import { Leilao } from '../models/leilao';
import { Usuario } from '../models/usuario';

const leiloes: Leilao[] = [];

export const createLeilao = (produto: string, preco: number, dataLimite: Date, donoId: number): Leilao => {
  const leilao: Leilao = { produto, preco, dataLimite, donoId };
  leiloes.push(leilao);
  return leilao;
};

export const getAllLeiloes = (): Leilao[] => {
  return leiloes;
};