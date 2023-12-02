import { JurosCompostosRequestBody } from '@src/requests/juros-compostos-request';
import { faker } from '@faker-js/faker';
import ProfitabilityType from '@src/enums/profitability-type';

type JurosCompostosRequestBodyFactoryProps = {
    period?: number,
    periodType?: number,
    profitability?: number,
    profitabilityType?: number
    initialValue?: number   
}

export default function(body? :JurosCompostosRequestBodyFactoryProps): JurosCompostosRequestBody {
	return {
		period:             body?.period ?? faker.number.int({min: 1, max: 100}),
		periodType:  		body?.periodType ?? faker.helpers.enumValue(ProfitabilityType),
		profitability:      body?.profitability ?? faker.number.float({min: 0.1, max: 1.0}),
		profitabilityType:  body?.profitabilityType ?? faker.helpers.enumValue(ProfitabilityType),
		initialValue:       body?.initialValue ?? faker.number.float({min: 1000, max: 10000})
	} as JurosCompostosRequestBody;
}