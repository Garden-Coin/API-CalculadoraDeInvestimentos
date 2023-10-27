import { Router } from 'express';
import { validate } from 'express-validation';

import { JurosCompostosController } from '@src/controllers';
import { JurosCompostosRequestValidator } from '@src/validators';

const router = Router();

router.post('/juros-compostos', validate(JurosCompostosRequestValidator), JurosCompostosController.calcular);

module.exports = router;