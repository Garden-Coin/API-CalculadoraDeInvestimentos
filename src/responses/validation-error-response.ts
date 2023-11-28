import { Response } from 'express';

export interface FieldValidationError{
	field: string,
	message: string,
}

export interface ValidationErrorResponseBody {
	title: string,
	code: string,
	errors: FieldValidationError[]
}

export interface ValidationErrorResponse extends Response<ValidationErrorResponseBody> {

}