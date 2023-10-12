import ProfitabilityType from '@src/enums/profitability-type';

type JurosCompostosServiceProps = {
	period: number,
	profitability: number,
	profitabilityType: ProfitabilityType,
	initialValue: number
};

function NormalizePeriodProfitability(profitability: number, period: number, profitabilityType: ProfitabilityType) {
	if (profitabilityType == ProfitabilityType.Anual) {
		return {
			montlhyProfitability: profitability * 12.68,
			monthlyPeriod: period * 12
		};
	}

	return {
		montlhyProfitability: profitability,
		monthlyPeriod: period
	};
}

function calcularJurosCompostosMensais(initialValue: number, montlhyProfitability: number, monthlyPeriod: number): number {
	const finalValue = 
		initialValue + (
			initialValue * (
				Math.pow(1 + montlhyProfitability, monthlyPeriod) - 1
			)
		);
	return parseFloat(finalValue.toFixed(2));
}

export default {
	calcular: function (
		{
			period,
			profitability,
			profitabilityType,
			initialValue
		}: JurosCompostosServiceProps) {
		initialValue = parseFloat(initialValue.toFixed(2));

		const { montlhyProfitability, monthlyPeriod } = NormalizePeriodProfitability(profitability, period, profitabilityType);

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