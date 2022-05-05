const { Repair } = require('../models/repair.model');
const { catchAsync } = require('../utils/catchAsync');

// Get All Appointments
const getAllAppointments = catchAsync(async (req, res, next) => {

  const { appointment } = req;

  res.status(200).json({
    appointment
  });

});

// Schedule new Appointment
const scheduleAppointment = catchAsync(async (req, res, next) => {

  const { date, computerNumber, comments, userId } = req.body;
  const newAppointment = await Repair.create({ date, computerNumber, comments, userId });
  res.status(201).json({
    newAppointment
  });

});

// Get Appointmet by ID
const getAppointmentById = catchAsync(async (req, res, next) => {

  const { appointment } = req;

  res.status(200).json({
    appointment
  });

});

// Update Appointment repair status (status from pending to completed)
const updateAppointment = catchAsync(async (req, res, next) => {

  const { appointment } = req;
  const { status } = req.body;

  await appointment.update({ status });
  res.status(200).json({
    status: 'success'
  });

});

// Delete Appointment (Change status from available to cancelled)
const deleteAppointment = catchAsync(async (req, res, next) => {

  const { appointment } = req;

  await appointment.update({ status: 'cancelled' });
  res.status(200).json({
    status: 'success'
  });

});

module.exports = {
  getAllAppointments,
  scheduleAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
};