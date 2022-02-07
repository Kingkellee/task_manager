class CustomErrorHandler extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
  }
}

const createCustomError = (msg, statusCode) => {
  return new CustomErrorHandler(msg, statusCode);
};

module.exports = { createCustomError, CustomErrorHandler };
