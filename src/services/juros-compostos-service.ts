import ProfitabilityType from '@src/enums/profitability-type';
import { calcularCrescimento, calcularJurosCompostosMensais, normalizarRentabilidadeMensal } from '@src/utils/normalize-utils';

type JurosCompostosServiceProps = {
	period: number,
	periodType: ProfitabilityType,
	profitability: number,
	profitabilityType: ProfitabilityType,
	initialValue: number
};

export default {
	calcular: function (
		{
			period,
			periodType,
			profitability,
			profitabilityType,
			initialValue
		}: JurosCompostosServiceProps) {
		initialValue = parseFloat(initialValue.toFixed(2));

		const { montlhyProfitability, monthlyPeriod } = normalizarRentabilidadeMensal(profitability, period, periodType);
		const finalValue = calcularJurosCompostosMensais(initialValue, montlhyProfitability, monthlyPeriod);
		const realProfitability = calcularCrescimento(initialValue, finalValue);
		
		return {
			period: period,
			periodType: periodType,
			profitability: profitability,
			realProfitability: realProfitability,
			profitabilityType: profitabilityType,
			initialValue: initialValue,
			finalValue: finalValue
		};
	}
};