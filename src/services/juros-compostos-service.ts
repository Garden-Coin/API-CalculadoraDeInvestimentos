import ProfitabilityType from '@src/enums/profitability-type';
import { calcularCrescimento, calcularJurosCompostosMensais } from '@src/utils/normalize-utils';

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
		}: JurosCompostosServiceProps
	) {
		initialValue = parseFloat(initialValue.toFixed(2));

		const monthlyPeriod = periodType == ProfitabilityType.Monthly? period : period * 12;
		const montlhyProfitability = profitabilityType == ProfitabilityType.Monthly? profitability : profitability / 12.68;

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