import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';

class BadRequestError extends CustomError {
	constructor(public message: string) {
		const statusCode = StatusCodes.BAD_REQUEST;
		super(message, statusCode);
	}
}

export default BadRequestError;
