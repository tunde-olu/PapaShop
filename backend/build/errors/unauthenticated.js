import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';
class UnauthenticatedError extends CustomError {
    constructor(message) {
        const statusCode = StatusCodes.UNAUTHORIZED;
        super(message, statusCode);
        this.message = message;
    }
}
export default UnauthenticatedError;
