import Joi from 'joi';
import ProfitabilityType from '@src/enums/profitability-type';

export default {
    body: Joi.object().keys(
        {
            period: Joi.number().integer().min(1).required(),
            profitability: Joi.number().min(0.0).max(1.0).required(),
            profitabilityType: Joi.number().valid(ProfitabilityType.Monthly, ProfitabilityType.Anual).required(),
            initialValue: Joi.number().min(0).required() 
        }
    )
}