import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';

class NotFoundError extends CustomError {
	constructor(public message: string) {
		const statusCode = StatusCodes.NOT_FOUND;
		super(message, statusCode);
	}
}

export default NotFoundError;
