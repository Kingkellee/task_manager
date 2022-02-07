const { CustomErrorHandler } = require("../errors/custom-error");
const errorHandler = (err, req, res, next) => {
  if (err instanceof CustomErrorHandler) {
    return res.status(err.statusCode).json({ msg: err.message });
  }
  return res
    .status(500)
    .json({ msg: "OOPS!! Something went Wrong, please try again later" });
};

module.exports = errorHandler;
