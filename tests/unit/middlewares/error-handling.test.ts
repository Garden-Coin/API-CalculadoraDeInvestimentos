import { ValidationError } from "express-validation";
import { Request, Response } from 'express';
import { errorHandling } from "@src/middlewares/error-handling"

describe(
    "error handling",
    ()=>{
        describe(
            "validation error",
            ()=>{
                it(
                    "should return validation errors",
                    ()=>{
                        const error = new ValidationError(
                            {
                              params: [],
                              headers: [],
                              query: [],
                              cookies: [],
                              signedCookies: [],
                              body: []
                            },
                            { }
                        );
                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            jest.mocked<Response>({} as Response), 
                            jest.fn()
                        );
 
                        expect(response.json).toBeCalledWith(error);
                    }
                );
                it(
                    "should return http 404 not found",
                    ()=>{
                        const error = new ValidationError(
                            {
                              params: [],
                              headers: [],
                              query: [],
                              cookies: [],
                              signedCookies: [],
                              body: []
                            },
                            { }
                        );
                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            jest.mocked<Response>({} as Response), 
                            jest.fn()
                        );

                        expect(response.statusCode).toBe(404);
                    }
                );
            }
        );
        describe(
            "unhandled error",
            ()=>{
                it(
                    "should return only the error message",
                    ()=>{
                        const error = new Error("unhandled error");
                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            jest.mocked<Response>({} as Response), 
                            jest.fn()
                        );

                        expect(response.json).toBeCalledWith({message: error.message});
                    }
                );
                it(
                    "should return http 500 internal error",
                    ()=>{
                        const error = new Error("unhandled error");
                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            jest.mocked<Response>({} as Response), 
                            jest.fn()
                        );

                        expect(response.statusCode).toBe(500);
                    }
                );
            }
        );
    }
);