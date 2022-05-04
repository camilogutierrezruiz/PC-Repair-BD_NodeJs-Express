const { body, validationResult } = require('express-validator');

const createUserValidations = [
  body('name')
    .notEmpty().withMessage('Name field cannot be empty'),
  body('email')
    .notEmpty().withMessage('Email filed cannot be empty')
    .isEmail().withMessage('Must be a valid email'),
  body('password')
    .notEmpty().withMessage('Password field cannot be empty')
    .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
  body('role')
    .notEmpty().withMessage('Role field cannot be empty')
];

const scheduleAppointmentValidations = [
  body('date')
    .notEmpty().withMessage('Date schedule must be specified'),
  body('computerNumber')
    .notEmpty().withMessage('Computer Number cannot be empty'),
  body('comments')
    .notEmpty().withMessage('Computer state description must be specified'),
  body('userId')
    .notEmpty().withMessage('Client that schedule appointment must be specified')
];

const checkValidations = (req, res, next) => {

  const error = validationResult(req);

  if (!error.isEmpty()) {

    const messages = error.array().map(err => {
      return err.msg;
    });

    const errMsgs = messages.join('. ');

    return res.status(400).json({
      status: 'error',
      message: errMsgs,
    });

  };

  next();
};

module.exports = {
  createUserValidations,
  scheduleAppointmentValidations,
  checkValidations
};