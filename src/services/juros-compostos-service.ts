import PeriodType from '@src/enums/period-type';
import { calcularCrescimento, calcularJurosCompostosMensais } from '@src/utils/normalize-utils';

type JurosCompostosServiceProps = {
	period: number,
	periodType: PeriodType,
	profitability: number,
	profitabilityType: PeriodType,
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

		const monthlyPeriod = periodType == PeriodType.Monthly? period : period * 12;
		const montlhyProfitability = profitabilityType == PeriodType.Monthly? profitability : profitability / 12.68;

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