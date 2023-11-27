import { Request, Response } from 'express';
import { createUser, getAllUsers } from '../services/usuarioService';

export const createUsuario = (req: Request, res: Response): void => {
  try {
    const { nome, email } = req.body;
    const newUser = createUser(nome, email);
    res.status(201).json(newUser);
  } catch (error) {
    console.error('Erro ao criar usuário:', error);
    res.status(500).send('Erro interno do servidor.');
  }
};

export const getAllUsuarios = (req: Request, res: Response): void => {
  const usuarios = getAllUsers();
  res.json(usuarios);
};