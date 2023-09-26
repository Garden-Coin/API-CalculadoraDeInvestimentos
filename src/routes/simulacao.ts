import { Router } from 'express';
import { validate } from 'express-validation';

import JurosCompostosController from '../controllers/juros-compostos-controller';
import JurosCompostosRequestValidator from '../validators/juros-compostos-request-validator';

const router = Router();

router.post('/juros-compostos', validate(JurosCompostosRequestValidator), JurosCompostosController.calcular)

module.exports = router;