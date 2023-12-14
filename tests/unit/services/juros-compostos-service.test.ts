import jurosCompostosService from '@src/services/juros-compostos-service';
import jurosCompostosRequestBodyFactory from '../factories/requests/juros-compostos-request-body-factory';
import PeriodType from '@src/enums/period-type';

describe('juros compostos service', () => {
	describe('calcular', () => {
		describe('no initialValue', () => {
			describe.each(
				[
					['montlhy',PeriodType.Monthly], 
					['anual',PeriodType.Anual],
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
					['montlhy',PeriodType.Monthly], 
					['anual',PeriodType.Anual],
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
					['montlhy',PeriodType.Monthly], 
					['anual',PeriodType.Anual],
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
							profitabilityType: PeriodType.Monthly,
							periodType: PeriodType.Monthly,
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
							profitabilityType: PeriodType.Monthly,
							periodType: PeriodType.Monthly,
							period: 12
						}
					);
					const monthlyResult = jurosCompostosService.calcular(monthlyBody);

					const anualBody = jurosCompostosRequestBodyFactory(
						{
							initialValue: monthlyBody.initialValue,
							profitabilityType: PeriodType.Anual,
							profitability: monthlyBody.profitability * 12.68,
							periodType: PeriodType.Anual,
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
							profitabilityType: PeriodType.Anual,
							initialValue: 1000,
							profitability: 0.1268,
							periodType: PeriodType.Anual,
							period: 1
						}
					);

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(1126.83);
				});
			});
		});
		describe('valid period', ()=>{
			describe('monthly', () => {
				it('should sum equivalent to anual / 12',() =>{
					const monthlyBody = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: PeriodType.Monthly,
							period: 12,
							initialValue: 1000
						}
					);
					const monthlyResult = jurosCompostosService.calcular(monthlyBody);
					
					const anualBody = jurosCompostosRequestBodyFactory(
						{
							profitability: monthlyBody.profitability,
							profitabilityType: monthlyBody.profitabilityType,
							period: 1,
							periodType: PeriodType.Anual,
							initialValue: 1000
						}
					);
					const anualResult = jurosCompostosService.calcular(anualBody);

					expect(monthlyResult.finalValue).toBe(anualResult.finalValue);
				});
				it('should sum profitability\'s percentage to finalValue', () => {
					const body = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: PeriodType.Anual,
							periodType: PeriodType.Monthly,
							initialValue: 1000,
							profitability: 0.05,
							period: 12
						}
					);

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(1050);
				});
			});
			describe('anual', () => {
				it('should sum equivalent to monthly * 12',() =>{
					const anualBody = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: PeriodType.Anual,
							period: 1,
							initialValue: 1000
						}
					);
					const anualResult = jurosCompostosService.calcular(anualBody);
					
					const mmonthlyBody = jurosCompostosRequestBodyFactory(
						{
							profitability: anualBody.profitability,
							profitabilityType: anualBody.profitabilityType,
							period: 12,
							periodType: PeriodType.Monthly,
							initialValue: 1000
						}
					);
					const mmonthlyResult = jurosCompostosService.calcular(mmonthlyBody);

					expect(anualResult.finalValue).toBe(mmonthlyResult.finalValue);
				});
				it('should sum profitability\'s percentage to finalValue', () => {
					const body = jurosCompostosRequestBodyFactory(
						{
							profitabilityType: PeriodType.Anual,
							periodType: PeriodType.Anual,
							initialValue: 1000,
							profitability: 0.05,
							period: 1
						}
					);

					const result = jurosCompostosService.calcular(body);

					expect(result.finalValue).toBe(1048.36);
				});
			});
		});
	});
});