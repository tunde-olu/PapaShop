import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';

class UnauthenticatedError extends CustomError {
	constructor(public message: string) {
		const statusCode = StatusCodes.UNAUTHORIZED;
		super(message, statusCode);
	}
}

export default UnauthenticatedError;
