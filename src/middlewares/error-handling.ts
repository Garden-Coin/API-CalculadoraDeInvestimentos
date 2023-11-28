/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from 'express';

const errorHandling = function (err: Error, _req: Request, res: Response, _next: NextFunction) {
	return res.status(500).json(
		{
			message: err.message
		}
	);
};
export { errorHandling };