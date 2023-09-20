import { Router } from 'express';
import { JurosCompostosRequest } from '../requests/juros-compostos-request';
import { JurosCompostosResponse } from '../responses/juros-compostos-response';

const router = Router();

router.post('/juros-compostos',
    (_: JurosCompostosRequest, res: JurosCompostosResponse) => {
        res.status(200).json({
            'status': 200
        });
    }
)

module.exports = router;