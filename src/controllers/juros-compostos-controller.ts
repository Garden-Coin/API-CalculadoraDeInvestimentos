import { JurosCompostosRequest } from   '@src/requests/juros-compostos-request';
import { JurosCompostosResponse } from  '@src/responses/juros-compostos-response';

export default {
	calcular: function(req : JurosCompostosRequest, res: JurosCompostosResponse){
		const { body } = req;
		return res.status(200).json(
			{
				period: body.period,
				profitability: body.profitability,
				realProfitability: body.profitability,
				profitabilityType: body.profitabilityType,
				initialValue: body.initialValue,
				finalValue: body.initialValue + (body.initialValue * body.profitability)
			}
		);
	}
}; 