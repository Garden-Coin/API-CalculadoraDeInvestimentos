import Joi from 'joi';

export default {
    body: Joi.object().keys(
        {
            startDate: Joi.date().required(),
            endDate: Joi.date().min(Joi.ref('startDate')).required(),
            profitability: Joi.number().min(0.0).max(1.0).required(),
            profitabilityType: Joi.number().required(),
            initialValue: Joi.number().min(0).required() 
        }
    )
}