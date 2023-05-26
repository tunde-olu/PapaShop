import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';

class UnauthorizedError extends CustomError {
	constructor(public message: string) {
		const statusCode = StatusCodes.FORBIDDEN;
		super(message, statusCode);
	}
}

export default UnauthorizedError;
