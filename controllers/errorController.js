const AppError = require('../utils/appError');

const handleCastErrorDB = (err) => {
  const message = `Invalid ${err.path}: ${err.value}.`;
  return new AppError(message, 400);
};

const handleDuplicateFieldsDB = err => {
  const value = err.errmsg.match(/(["'])(\\?.)*?\1/)[0];
  console.log(value); 

  const message = `Duplicate field value: ${value}. Please use another value.`;
  return new AppError(message, 400);
}

const sendErrorDev = (err, res) => {
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    err,
  });
};

const sendErrorProd = (err, res) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }
  else {
    console.error('Error! ', err);
    res.status(err.statusCode).json({
      status: err.status, 
      message: "There was an error, it's a problem from the server side! :(",
    });
  }
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500; 
  err.status = err.status || 'error';

  if (process.env.NODE_ENV == 'development') sendErrorDev(err, res);

  else if (process.env.NODE_ENV == 'production') {
    let error = Object.create(err);

    if (err.name === 'CastError') error = handleCastErrorDB(err);
    if (err.code === 11000) error = handleDuplicateFieldsDB(err);

    sendErrorProd(error, res);
  }
};
