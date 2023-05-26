import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';
class UnauthorizedError extends CustomError {
    constructor(message) {
        const statusCode = StatusCodes.FORBIDDEN;
        super(message, statusCode);
        this.message = message;
    }
}
export default UnauthorizedError;
