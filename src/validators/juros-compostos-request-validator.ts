import Joi from 'joi';
import PeriodType from '@src/enums/period-type';

export default {
	body: Joi.object().keys(
		{
			period: Joi.number().integer().min(1).required(),
			periodType: Joi.number().valid(PeriodType.Monthly, PeriodType.Anual).required(),
			profitability: Joi.number().min(0.0).max(1.0).required(),
			profitabilityType: Joi.number().valid(PeriodType.Monthly, PeriodType.Anual).required(),
			initialValue: Joi.number().min(0).required() 
		}
	)
};