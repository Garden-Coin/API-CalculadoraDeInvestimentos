import { calcularCrescimento, calcularJurosCompostosMensais } from '@src/utils/normalize-utils';
import { randomFloat } from '@tests/shared/utils/faker-utils';

const profitabilityTestCaseArray = [0.001, 0.01, 0.05, 0.1, 0.15, 0.2, 0.5, 0.8];
const periodTestCaseArray = [12, 36, 108, 360, 696, 1200];

describe('calcularJurosCompostosMensais', () => {
	describe('no initialValue', () => {
		describe.each(periodTestCaseArray)('with period %s', (period) => {
			it('with no profitability should be zero', () => {
				const result = calcularJurosCompostosMensais(0, 0, period);

				expect(result).toBe(0);
			});
			it.each(profitabilityTestCaseArray)('with profitability %s should be zero', (profitability) => {
				const result = calcularJurosCompostosMensais(0, profitability, period);

				expect(result).toBe(0);
			});
		});
	});
	describe('valid initialValue', () => {
		it('three years with 3% profit should have a 134% growth', ()=>{
			const result = calcularJurosCompostosMensais(1_000, 0.03, 36);

			expect(result).toBe(2898.28);
		});
		
		it('one month with 100% profitability should double initial value', ()=>{
			const result = calcularJurosCompostosMensais(1_000, 1, 1);

			expect(result).toBe(2_000);
		});
	});
});

describe('calcularCrescimento', () =>{
	describe('zero values', ()=>{
		it('initial value should return zero', () =>{
			const result = calcularCrescimento(0, 100);
			expect(result).toBe(0);
		});
		it('final value should return -1', () =>{
			const result = calcularCrescimento(100, 0);
			expect(result).toBe(-1);
		});
	});
	describe('valid values', () =>{
		it('initialValue bigger than finalValue should return negative number', () => {
			const initialValue = randomFloat(1_000, 10_000);
			const finalValue = randomFloat(0, initialValue - 1);

			const result = calcularCrescimento(initialValue, finalValue);

			expect(result).toBeLessThan(0);
		});
		it('initialValue smaller than finalValue should return a number bigger than zero', () => {
			const initialValue = randomFloat(1_000, 10_000);
			const finalValue = randomFloat(initialValue + 1, initialValue + 10_000);

			const result = calcularCrescimento(initialValue, finalValue);

			expect(result).toBeGreaterThan(0);
		});
		it('initialValue equal to finalValue should return zero', () => {
			const initialValue = randomFloat(1_000, 10_000);
			const finalValue = initialValue;
			
			const result = calcularCrescimento(initialValue, finalValue);

			expect(result).toBe(0);
		});
	});
});