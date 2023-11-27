import { Router } from 'express';
import { createUsuario, getAllUsuarios } from '../controllers/usuarioController';

const router = Router();

router.post('/usuarios', createUsuario);
router.get('/usuarios', getAllUsuarios);

export default router;