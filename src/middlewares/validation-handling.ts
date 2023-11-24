/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

const validationHandling = function (err: ValidationError, _req: Request, res: Response, _next: NextFunction){
	return res.status(400).json({
		title: err.message,
		code: err.message,
		// errors: err.details.body.
	});
};

export { validationHandling };