import { Request } from 'express';
import { validationHandling } from '@src/middlewares/validation-handling';
import responseFactory from '../factories/express/response-factory';
import validationErrorFactory from '../factories/express/validation-error-factory';

describe(
	'validation handling',
	() => {
		describe(
			'validation error',
			() => {
				it(
					'should return validation errors',
					() => {
						const bodyError = [
							{
								field: 'field',
								message: '"field" has an error'
							}
						];
						const error = validationErrorFactory({
							body: bodyError as []
						});
						const mockResponse = responseFactory();
						jest.spyOn(mockResponse, 'json');

						const response = validationHandling(
							error,
							jest.mocked<Request>({} as Request),
							mockResponse,
							jest.fn()
						);

						expect(response.json).toBeCalledWith(
							{
								title: error.message,
								code: error.error,
								errors: bodyError
							}
						);
					}
				);
				it(
					'should return http 400 bad request',
					() => {
						const error = validationErrorFactory();
						const mockResponse = responseFactory();
						jest.spyOn(mockResponse, 'status');

						const response = validationHandling(
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
	}
);