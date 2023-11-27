import { Router } from 'express';
import { createLeilaoController, getAllLeiloesController } from '../controllers/leilaoController';

const router = Router();

router.post('/leiloes', createLeilaoController);
router.get('/leiloes', getAllLeiloesController);

export default router;