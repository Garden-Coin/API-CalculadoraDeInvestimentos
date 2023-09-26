import { JurosCompostosRequest } from "../requests/juros-compostos-request";
import { JurosCompostosResponse } from "../responses/juros-compostos-response";

export default {
    calcular: function(req : JurosCompostosRequest, res: JurosCompostosResponse){
        const { body } = req;
        res.status(200).json(
            {
                startDate: body.startDate,
                endDate: body.endDate,
                profitability: body.profitability,
                realProfitability: body.profitability,
                profitabilityType: body.profitabilityType,
                initialValue: body.initialValue,
                finalValue: body.initialValue + (body.initialValue * body.profitability)
            }
        );
    }
} 