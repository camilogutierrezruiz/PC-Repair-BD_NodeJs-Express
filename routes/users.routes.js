const express = require('express');
const { body } = require('express-validator');
const { userExist } = require('../middlewares/users.middlewares');

const {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} = require('../controllers/users.controller');

const router = express.Router();

router.route('/')
  .get(getAllUsers)
  .post(
    body('name')
      .notEmpty().withMessage('Name field cannot be empty'),
    body('email')
      .notEmpty().withMessage('Email filed cannot be empty')
      .isEmail().withMessage('Must be a valid email'),
    body('password')
      .notEmpty().withMessage('Password field cannot be empty')
      .isLength({ min: 8 }).withMessage('Password must be at least 8 characters long'),
    createUser
  );

router.route('/:id')
  .get(userExist, getUserById)
  .patch(userExist, updateUser)
  .delete(userExist, deleteUser);

module.exports = { usersRouter: router };