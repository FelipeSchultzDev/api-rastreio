import { Router } from 'express';

import IndexValidation from 'validations/index.validation';
import IndexController from '../controller/index.controller';


const router = Router();

router.get('/', IndexValidation.index, IndexController.index);

export default router;
