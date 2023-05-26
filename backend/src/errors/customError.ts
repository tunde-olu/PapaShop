class CustomError extends Error {
	constructor(public message: string, protected statusCode: number) {
		super(message);
	}
}

export default CustomError;
