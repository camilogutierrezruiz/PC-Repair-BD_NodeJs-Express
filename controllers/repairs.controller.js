const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

// Get All Appointments
const getAllAppointments = async (req, res) => {
  try {

    const appointment = await Repair.findAll({
      where: { status: 'pending' },
      include: [
        { model: User }
      ]
    });
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

    const { date, userId } = req.body;
    const newAppointment = await Repair.create({ date, userId });
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

    const { id } = req.params;
    const appointment = await Repair.findOne({ where: { id } });
    if (!appointment) {
      return res.status(404).json({
        status: 'error',
        message: 'Appointment no found'
      });
    };
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

    const { id } = req.params;
    const { status } = req.body;
    const appointment = await Repair.findOne({ where: { id } });
    if (!appointment) {
      return res.status(404).json({
        status: 'error',
        message: 'Appointment cannot be found'
      });
    };
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

    const { id } = req.params;
    const appointment = await Repair.findOne({ where: { id } });
    if (!appointment) {
      return res.status(404).json({
        status: 'error',
        message: 'Cannot cancell this appointment'
      });
    };
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