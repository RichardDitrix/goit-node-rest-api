const validation = (schema) => {
  return (req, res, next) => {
    const { error } = schema.validate(req.body);

    if (error) {
     return res.status(400).send ({message: error.message});
    }

    next();
  };
};

module.exports = validation;
