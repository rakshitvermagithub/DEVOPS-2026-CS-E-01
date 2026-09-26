// Global/General error handler
// Recognized by express automatically due to its 4 parameters
export const errorHandler = (err, req, res, next) => {
  if (err instanceof AppError) {
    return res.status(err.statusCode). json({
      success: false,
      message: err.message,
    });
  }

  console.error(err);
  res.status(500).json({
    success: false,
    message: "Internal Server Error",
  });
};


// Class for custom errors
export class AppError extends Error {
  statusCode;
  isOperational;

  constructor(message, statusCode = 500, isOperational = true) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this, this.constructor);
  }
}

// Common custom error cases
export class NotFoundError extends AppError {
  constructor(message="Resource not found") {
    super(message, 404);
  }
}

export class UnauthorizedError extends AppError {
  constructor(message="Unauthorized") {
    super(message, 401);
  }
}

export class BadRequestError extends AppError {
  constructor(message="Bad request") {
    super(message, 400);
  }
}