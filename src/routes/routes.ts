import { Router } from 'express';

import RastreioValidation from 'validations/rastreio.validation';
import RastreioController from 'controllers/rastreio.controller';

const router = Router();

router.get('/:cod', RastreioValidation.get, RastreioController.get);

export default router;
