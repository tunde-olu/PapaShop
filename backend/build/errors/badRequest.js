import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';
class BadRequestError extends CustomError {
    constructor(message) {
        const statusCode = StatusCodes.BAD_REQUEST;
        super(message, statusCode);
        this.message = message;
    }
}
export default BadRequestError;
