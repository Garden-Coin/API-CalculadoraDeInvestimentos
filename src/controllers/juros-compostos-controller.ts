import { JurosCompostosRequest } from '@src/requests/juros-compostos-request';
import jurosCompostosService from '@src/services/juros-compostos-service';
import { JurosCompostosResponse } from '@src/responses/juros-compostos-response';

export default {
	calcular: function (req: JurosCompostosRequest, res: JurosCompostosResponse) {
		const response = jurosCompostosService.calcular(req.body);
		return res.status(200).json(response);
	}
}; 