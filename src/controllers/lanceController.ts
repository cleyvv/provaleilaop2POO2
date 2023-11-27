import { Request, Response } from 'express';
import { createLance, getAllLances } from '../services/lanceService';

export const createLanceController = (req: Request, res: Response): void => {
  try {
    const { valor, compradorId, leilaoId } = req.body;
    const newLance = createLance(valor, compradorId, leilaoId);
    res.status(201).json(newLance);
  } catch (error) {
    console.error('Erro ao criar lance:', error);
    res.status(500).send('Erro interno do servidor.');
  }
};

export const getAllLancesController = (req: Request, res: Response): void => {
  const lances = getAllLances();
  res.json(lances);
};