import { Router } from 'express';
import { JurosCompostosRequest } from '../requests/juros-compostos-request';
import { JurosCompostosResponse } from '../responses/juros-compostos-response';

const router = Router();

router.post('/juros-compostos',
    (req : JurosCompostosRequest, res: JurosCompostosResponse) => {
        const { body } = req;
        res.status(200).json({
            startDate: body.startDate,
            endDate: body.endDate,
            profitability: body.profitability,
            realProfitability: body.profitability,
            profitabilityType: body.profitabilityType,
            initialValue: body.initialValue,
            finalValue: body.initialValue + (body.initialValue * body.profitability)
        });
    }
)

module.exports = router;