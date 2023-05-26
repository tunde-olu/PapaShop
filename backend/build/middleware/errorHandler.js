import { StatusCodes } from 'http-status-codes';
const errorHandlerMiddleware = (err, req, res, next) => {
    let customError = {
        statusCode: StatusCodes.INTERNAL_SERVER_ERROR,
        // TODO: change msg: err to msg: err.message before deploy
        msg: err || 'Something went wrong, try again later',
        stack: process.env.NODE_ENV === 'development' ? err.stack : null,
    };
    if (err.name === 'CastError') {
        customError.msg = `No item found with id: ${err.value}`;
        customError.statusCode = StatusCodes.NOT_FOUND;
    }
    return res.status(customError.statusCode).json(customError);
};
export default errorHandlerMiddleware;
