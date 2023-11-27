import { Router } from 'express';
import { createLanceController, getAllLancesController } from '../controllers/lanceController';

const router = Router();

router.post('/lances', createLanceController);
router.get('/lances', getAllLancesController);

export default router;