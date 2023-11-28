/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

const validationHandling = function (err: ValidationError, _req: Request, res: Response, _next: NextFunction){
	return res.status(400).json({
		title: err.message,
		code: err.error,
		errors: err.details.body?.map(
			error => ({
				field: error.message.split('"')[1],
				message: error.message
			})
		)
	});
};

export { validationHandling };