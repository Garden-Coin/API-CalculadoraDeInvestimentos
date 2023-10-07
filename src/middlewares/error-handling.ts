import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

const errorHandling = function (err: Error, _req: Request, res: Response, _next: NextFunction) {
    if (err instanceof ValidationError) {
        return res.status(400).json(err)
    }

    return res.status(500).json(
        {
            message: err.message
        }
    )
};
export { errorHandling }