import { Router } from 'express';

import IndexValidation from 'validation/index.validation';
import IndexController from '../controller/index.controller';


const router = Router();

router.get('/', IndexValidation.index, IndexController.index);

export default router;
