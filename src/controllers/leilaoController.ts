import { Request, Response } from 'express';
import { createLeilao, getAllLeiloes } from '../services/leilaoService';

export const createLeilaoController = (req: Request, res: Response): void => {
  try {
    const { produto, preco, dataLimite, donoId } = req.body;
    const newLeilao = createLeilao(produto, preco, new Date(dataLimite), donoId);
    res.status(201).json(newLeilao);
  } catch (error) {
    console.error('Erro ao criar leilao:', error);
    res.status(500).send('Erro interno do servidor.');
  }
};

export const getAllLeiloesController = (req: Request, res: Response): void => {
  const leiloes = getAllLeiloes();
  res.json(leiloes);
};