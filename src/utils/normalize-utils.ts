import ProfitabilityType from '@src/enums/profitability-type';

export function normalizarRentabilidadeMensal(profitability: number, period: number, profitabilityType: ProfitabilityType) {
	if (profitabilityType == ProfitabilityType.Anual) {
		return {
			montlhyProfitability: profitability / 12.68,
			monthlyPeriod: period * 12
		};
	}

	return {
		montlhyProfitability: profitability,
		monthlyPeriod: period
	};
}

export function calcularJurosCompostosMensais(initialValue: number, montlhyProfitability: number, monthlyPeriod: number){
	const finalValue = 
		initialValue + (
			initialValue * (
				Math.pow(1 + montlhyProfitability, monthlyPeriod) - 1
			)
		);
	return parseFloat(finalValue.toFixed(2));
}

export function calcularCrescimento(initialValue: number, finalValue: number){
	const result = (finalValue - initialValue) / initialValue;

	if(isNaN(result) || !isFinite(result)){
		return 0.0;
	}

	return parseFloat(result.toFixed(2));
}