const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

// Get All Appointments
const getAllAppointments = async (req, res) => {
  try {

    const { appointment } = req;

    res.status(200).json({
      appointment
    });

  } catch (error) {
    console.log(error);
  }
};

// Schedule new Appointment
const scheduleAppointment = async (req, res) => {
  try {

    const { date, computerNumber, comments, userId } = req.body;
    const newAppointment = await Repair.create({ date, computerNumber, comments, userId });
    res.status(201).json({
      newAppointment
    });

  } catch (error) {
    console.log(error);
  }
};

// Get Appointmet by ID
const getAppointmentById = async (req, res) => {
  try {

    const { appointment } = req;

    res.status(200).json({
      appointment
    });

  } catch (error) {
    console.log(error);
  }
};

// Update Appointment repair status (status from pending to completed)
const updateAppointment = async (req, res) => {
  try {

    const { appointment } = req;
    const { status } = req.body;

    await appointment.update({ status });
    res.status(200).json({
      status: 'success'
    });

  } catch (error) {
    console.log(error);
  }
};

// Delete Appointment (Change status from available to cancelled)
const deleteAppointment = async (req, res) => {
  try {

    const { appointment } = req;

    await appointment.update({ status: 'cancelled' });
    res.status(200).json({
      status: 'success'
    });

  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getAllAppointments,
  scheduleAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};