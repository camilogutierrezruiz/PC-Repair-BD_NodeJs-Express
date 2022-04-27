const { User } = require('../models/user.model');

// Get all Users
const getAllUsers = async (req, res) => {
  try {

    const users = await User.findAll();
    res.status(200).json({
      users
    });

  } catch (error) {
    console.log(error);
  }
};

// Create new User (client / employee)
const createUser = async (req, res) => {
  try {

    const { name, email, password, role } = req.body;
    const newUser = await User.create({ name, email, password, role });
    res.status(201).json({
      newUser
    });

  } catch (error) {
    console.log(error);
  }
};

// Get User by ID
const getUserById = async (req, res) => {
  try {

    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User no found'
      });
    };
    res.status(200).json({
      user
    });

  } catch (error) {
    console.log(error);
  }
};

// Update User (name / email) by ID
const updateUser = async (req, res) => {
  try {

    const { id } = req.params;
    const { name, email } = req.body;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User no found'
      });
    };
    await user.update({ name, email });
    res.status(200).json({
      name,
      email
    });

  } catch (error) {
    console.log(error);
  }
};

// Delete User (change status from available to unavailable)
const deleteUser = async (req, res) => {
  try {

    const { id } = req.params;
    const user = await User.findOne({ where: { id } });
    if (!user) {
      return res.status(404).json({
        status: 'error',
        message: 'User no found'
      });
    }
    await user.update({ status: 'unavailable' });
    res.status(200).json({
      status: 'success'
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};