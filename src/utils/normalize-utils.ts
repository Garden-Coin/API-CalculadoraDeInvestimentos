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