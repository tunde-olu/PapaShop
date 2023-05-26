import { StatusCodes } from 'http-status-codes';
import CustomError from './customError.js';
class NotFoundError extends CustomError {
    constructor(message) {
        const statusCode = StatusCodes.NOT_FOUND;
        super(message, statusCode);
        this.message = message;
    }
}
export default NotFoundError;
