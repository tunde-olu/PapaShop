import type { ErrorRequestHandler, RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

const notFound: RequestHandler = (req, res) => {
	return res.status(StatusCodes.NOT_FOUND).send(`Route does not exit - ${req.originalUrl}`);
};

export default notFound;
