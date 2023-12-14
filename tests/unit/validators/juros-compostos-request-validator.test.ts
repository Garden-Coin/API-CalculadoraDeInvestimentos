import JurosCompostosRequestValidator from '@src/validators/juros-compostos-request-validator';
import jurosCompostosRequestBodyFactory from '../factories/requests/juros-compostos-request-body-factory';

const bodyValidator = JurosCompostosRequestValidator.body;
describe(
	'juros compostos request validator',
	()=>{
		describe(
			'period',
			()=>{
				it.each([0, -1])(
					'should not be zero or smaller',
					(period)=>{
						const body = jurosCompostosRequestBodyFactory({period});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"period" must be greater than or equal to 1');
					}
				);
			}
		);
		describe(
			'profitability',
			()=>{
				it(
					'should not smaller than zero',
					()=>{
						const body = jurosCompostosRequestBodyFactory({profitability: -1});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"profitability" must be greater than or equal to 0');
					}
				);
				it(
					'should not be bigger than one',
					()=>{
						const body = jurosCompostosRequestBodyFactory({profitability: 1.1});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"profitability" must be less than or equal to 1');
					}
				);
			}
		);
		describe(
			'profitabilityType',
			()=>{
				it.each([0,4,-1])(
					'should not be a number outside of ProfitabilityType enum',
					(type)=>{
						const body = jurosCompostosRequestBodyFactory({profitabilityType: type});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"profitabilityType" must be one of [1, 2]');
					}
				);
			}
		);
		describe(
			'periodType',
			()=>{
				it.each([0,4,-1])(
					'should not be a number outside of PeriodType enum',
					(type)=>{
						const body = jurosCompostosRequestBodyFactory({periodType: type});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"periodType" must be one of [1, 2]');
					}
				);
			}
		);
		describe(
			'initialValue',
			()=>{
				it.each([0, -1])(
					'should not be zero or smaller',
					()=>{
						const body = jurosCompostosRequestBodyFactory({initialValue: -1});
						const valid = bodyValidator.validate(body);

						expect(valid?.error?.message).toBe('"initialValue" must be greater than or equal to 0');
					}
				);
			}
		);
	}
);