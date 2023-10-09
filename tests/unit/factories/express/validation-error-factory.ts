import { ValidationError } from 'express-validation';

type ValidationErrorProps = {
    params?: [];
    headers?: [];
    query?: [];
    cookies?: [];
    signedCookies?: [];
    body?: [];
};
export default function(props?: ValidationErrorProps){    
	return new ValidationError(
		{...props},
		{ }
	);
}