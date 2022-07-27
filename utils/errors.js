class ExpressError extends Error {
	constructor(message, statusCode) {
		super();
		this.message = message;
		this.statusCode = statusCode;
	}
}


class BadRequestError extends ExpressError {
	constructor(message = "Bad request.", messageDev = "Error function.") {
		super(message, 400);
		this.messageDev = messageDev;
	}
}


class UnauthorizedError extends ExpressError {
	constructor(message = "Unauthorized.", messageDev = "Error function.") {
		super(message, 401);
		this.messageDev = messageDev;
	}
}


class ForbiddenError extends ExpressError {
	constructor(message = "Forbidden.", messageDev = "Error function.") {
		super(message, 403);
		this.messageDev = messageDev;
	}
}


class NotFoundError extends ExpressError {
	constructor(message = "Not found.", messageDev = "Error function.") {
		super(message, 404);
		this.messageDev = messageDev;
	}
}

module.exports = {
	ExpressError,
	BadRequestError,
	UnauthorizedError,
	ForbiddenError,
	NotFoundError
}
