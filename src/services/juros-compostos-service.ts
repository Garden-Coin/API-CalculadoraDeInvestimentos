import ProfitabilityType from '@src/enums/profitability-type';
import { calcularJurosCompostosMensais, normalizarRentabilidadeMensal } from '@src/utils/normalize-utils';

type JurosCompostosServiceProps = {
	period: number,
	profitability: number,
	profitabilityType: ProfitabilityType,
	initialValue: number
};

export default {
	calcular: function (
		{
			period,
			profitability,
			profitabilityType,
			initialValue
		}: JurosCompostosServiceProps) {
		initialValue = parseFloat(initialValue.toFixed(2));

		const { montlhyProfitability, monthlyPeriod } = normalizarRentabilidadeMensal(profitability, period, profitabilityType);
		const finalValue = calcularJurosCompostosMensais(initialValue, montlhyProfitability, monthlyPeriod);
		
		return {
			period: period,
			profitability: profitability,
			realProfitability: profitability,
			profitabilityType: profitabilityType,
			initialValue: initialValue,
			finalValue: finalValue
		};
	}
};