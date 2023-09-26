import { Request, Response, NextFunction } from 'express';
import { ValidationError } from 'express-validation';

module.exports =  
    function(err: Error, _req: Request, res: Response, _next: NextFunction){
        if (err instanceof ValidationError) {
            return res.status(res.statusCode).json(err)
        }

        return res.status(500).json(err)
    }