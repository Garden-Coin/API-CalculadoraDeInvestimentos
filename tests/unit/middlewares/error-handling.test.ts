import { Request } from 'express';
import { errorHandling } from "@src/middlewares/error-handling"
import responseFactory from "@unit-tests/factories/express/response-factory";
import validationErrorFactory from "../factories/express/validation-error-factory";

describe(
    "error handling",
    ()=>{
        describe(
            "validation error",
            ()=>{
                it(
                    "should return validation errors",
                    ()=>{
                        const error = validationErrorFactory();
                        const mockResponse = responseFactory();
                        jest.spyOn(mockResponse, "json");

                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request),
                            mockResponse,
                            jest.fn()
                        );
 
                        expect(response.json).toBeCalledWith(error);
                    }
                );
                it(
                    "should return http 400 bad request",
                    ()=>{
                        const error = validationErrorFactory();
                        const mockResponse = responseFactory();
                        jest.spyOn(mockResponse, "status");

                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            mockResponse, 
                            jest.fn()
                        );

                        expect(response.status).toBeCalledWith(400);
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
                        const mockResponse = responseFactory();
                        jest.spyOn(mockResponse, "json");

                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request), 
                            mockResponse, 
                            jest.fn()
                        );

                        expect(response.json).toBeCalledWith({message: error.message});
                    }
                );
                it(
                    "should return http 500 internal error",
                    ()=>{
                        const error = new Error("unhandled error");
                        const mockResponse = responseFactory();
                        jest.spyOn(mockResponse, "status");

                        const response = errorHandling(
                            error, 
                            jest.mocked<Request>({} as Request),
                            mockResponse, 
                            jest.fn()
                        );

                        expect(response.status).toBeCalledWith(500);
                    }
                );
            }
        );
    }
);