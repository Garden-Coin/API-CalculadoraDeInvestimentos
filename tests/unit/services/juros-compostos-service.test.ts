import jurosCompostosService from '@src/services/juros-compostos-service';
import jurosCompostosRequestBodyFactory from '../factories/requests/juros-compostos-request-body-factory';
import ProfitabilityType from '@src/enums/profitability-type';

describe('juros compostos service', () => {
	describe('calcular', () => {
		describe('no initialValue', () => {
			describe.each(
				[
					['montlhy',ProfitabilityType.Monthly], 
					['anual',ProfitabilityType.Anual],
				]
			)('%s', (_,profitabilityType) => {
				it('should be zero', () => {
					const body = jurosCompostosRequestBodyFactory({ initialValue: 0, profitabilityType });

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(0);
					expect(result.finalValue).toBe(0);
				});
			});
		});
		describe('no profitability', () => {
			describe.each(
				[
					['montlhy',ProfitabilityType.Monthly], 
					['anual',ProfitabilityType.Anual],
				]
			)('%s', (_,profitabilityType) => {
				it('should be equal to initialValue', () => {
					const body = jurosCompostosRequestBodyFactory({ profitability: 0, profitabilityType });

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(result.initialValue);
				});
			});
		});
		describe('no period', () => {
			describe.each(
				[
					['montlhy',ProfitabilityType.Monthly], 
					['anual',ProfitabilityType.Anual],
				]
			)('%s', (_,profitabilityType) => {
				it('should be equal to initialValue', () => {
					const body = jurosCompostosRequestBodyFactory({ period: 0, profitabilityType });

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(result.initialValue);
				});
			});
		});
		describe('valid profitability', () => {
			describe('monthly', () => {
				it('should sum profitability\'s percentage to finalValue', () => {
					const body = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: ProfitabilityType.Monthly,
							periodType: ProfitabilityType.Monthly,
							initialValue: 1000,
							profitability: 0.01,
							period: 12
						}
					);

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(1126.83);
				});
				it('finalValue should be equivalent to Anual multiplied by 12.68', () => {
					const monthlyBody = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: ProfitabilityType.Monthly,
							periodType: ProfitabilityType.Monthly,
							period: 12
						}
					);
					const monthlyResult = jurosCompostosService.calcular(monthlyBody);

					const anualBody = jurosCompostosRequestBodyFactory(
						{
							initialValue: monthlyBody.initialValue,
							profitabilityType: ProfitabilityType.Anual,
							profitability: monthlyBody.profitability * 12.68,
							periodType: ProfitabilityType.Anual,
							period: monthlyBody.period / 12
						}
					);
					const anualResult = jurosCompostosService.calcular(anualBody);

					expect(monthlyResult.finalValue).toBe(anualResult.finalValue);
				});
			});
			describe('anual', () => {
				it('should sum profitability\'s percentage divided by 12 to finalValue', () => {
					const body = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: ProfitabilityType.Anual,
							initialValue: 1000,
							profitability: 0.1268,
							periodType: ProfitabilityType.Anual,
							period: 1
						}
					);

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(1126.83);
				});
			});
		});
		describe.skip('valid period', ()=>{
			describe.skip('monthly', () => {
				
			});
			describe.skip('anual', () => {
				
			});
		});
	});
});