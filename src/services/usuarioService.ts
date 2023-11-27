import { Usuario } from '../models/usuario';

const usuarios: Usuario[] = [];

export const createUser = (nome: string, email: string): Usuario => {
  const newUser: Usuario = {
    id: usuarios.length + 1,
    nome,
    email,
  };
  usuarios.push(newUser);
  return newUser;
};

export const getAllUsers = (): Usuario[] => usuarios;