const { User } = require('../models/user.model');
const { catchAsync } = require('../utils/catchAsync');

// Get all Users
const getAllUsers = catchAsync(async (req, res, next) => {

  const users = await User.findAll();
  res.status(200).json({
    users
  });

});

// Create new User (client / employee)
const createUser = catchAsync(async (req, res, next) => {

  const { name, email, password, role } = req.body;

  const newUser = await User.create({ name, email, password, role });
  res.status(201).json({
    newUser
  });

});

// Get User by ID
const getUserById = async (req, res, next) => {
  try {

    const { user } = req;

    res.status(200).json({
      user
    });

  } catch (error) {
    console.log(error);
  }
};

// Update User (name / email) by ID
const updateUser = catchAsync(async (req, res, next) => {

  const { user } = req;
  const { name, email } = req.body;

  await user.update({ name, email });
  res.status(200).json({
    name,
    email
  });

});

// Delete User (change status from available to unavailable)
const deleteUser = catchAsync(async (req, res, next) => {

  const { user } = req;

  await user.update({ status: 'unavailable' });
  res.status(200).json({
    status: 'success'
  });

});

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};