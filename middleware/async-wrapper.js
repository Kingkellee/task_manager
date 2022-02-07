const asyncWrapper = (wrap) => {
  return async (req, res, next) => {
    try {
      await wrap(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

module.exports = asyncWrapper;
