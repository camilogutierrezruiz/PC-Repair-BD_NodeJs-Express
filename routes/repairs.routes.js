const express = require('express');

const {
  getAllAppointments,
  scheduleAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} = require('../controllers/repairs.controller');

const router = express.Router();

// router.route('/')
//   .get(getAllAppointments)
//   .post(scheduleAppointment);

// router.route('/:id')
//   .get(getAppointmentById)
//   .patch(updateAppointment)
//   .delete(deleteAppointment);

module.exports = { repairsRouter: router };