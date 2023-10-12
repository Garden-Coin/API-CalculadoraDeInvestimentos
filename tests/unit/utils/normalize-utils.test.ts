import ProfitabilityType from '@src/enums/profitability-type';
import { calcularJurosCompostosMensais, normalizarRentabilidadeMensal } from '@src/utils/normalize-utils';

const profitabilityTestCaseArray = [0.001, 0.01, 0.05, 0.1, 0.15, 0.2, 0.5, 0.8];
const periodTestCaseArray = [12, 36, 108, 360, 696, 1200];
describe('normalizarRentabilidadeMensal', () => {
	describe('Anual Profitability', () => {
		it.each(profitabilityTestCaseArray)('should multiply profitability of %s by 12.68', (profitability) => {
			const { montlhyProfitability } = normalizarRentabilidadeMensal(profitability, 12, ProfitabilityType.Anual);

			expect(montlhyProfitability).toBe(profitability * 12.68);
		});

		it.each(periodTestCaseArray)('should divide period of %s by 12', (period) => {
			const { monthlyPeriod } = normalizarRentabilidadeMensal(0.05, period, ProfitabilityType.Anual);

			expect(monthlyPeriod).toBe(period / 12);
		});
	});
	describe('Monthly Profitability', () => {
		it.each(profitabilityTestCaseArray)('should not change profitability %s', (profitability) => {
			const { montlhyProfitability } = normalizarRentabilidadeMensal(profitability, 12, ProfitabilityType.Monthly);

			expect(montlhyProfitability).toBe(profitability);
		});

		it.each(periodTestCaseArray)('should not change period %s', (period) => {
			const { monthlyPeriod } = normalizarRentabilidadeMensal(0.05, period, ProfitabilityType.Monthly);

			expect(monthlyPeriod).toBe(period);
		});
	});
});

describe('calcularJurosCompostosMensais', () => {
	describe('no initialValue', () => {
		describe.each(periodTestCaseArray)('with period %s should be zero', (period) =>{
			it('with no profitability should be zero', () =>{
				const result = calcularJurosCompostosMensais(0, 0, period);

				expect(result).toBe(0);
			});
			it.each(profitabilityTestCaseArray)('with profitability %s', (profitability) => {
				const result = calcularJurosCompostosMensais(0, profitability, period);

				expect(result).toBe(0);
			});
		});
	});
});