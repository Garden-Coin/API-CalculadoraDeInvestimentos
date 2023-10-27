import { JurosCompostosRequest } from '@src/requests/juros-compostos-request';
import { JurosCompostosService } from '@src/services';
import { JurosCompostosResponse } from '@src/responses/juros-compostos-response';

export default {
	calcular: function (req: JurosCompostosRequest, res: JurosCompostosResponse) {
		const response = JurosCompostosService.calcular(req.body);
		return res.status(200).json(response);
	}
}; 