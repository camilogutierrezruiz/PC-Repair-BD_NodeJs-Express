const express = require('express');
const {
  repairPendindExist,
  repairByIdExist
} = require('../middlewares/repair.middlewares');

const {
  scheduleAppointmentValidations,
  checkValidations
} = require('../middlewares/validations.middlewares');

const {
  getAllAppointments,
  scheduleAppointment,
  getAppointmentById,
  updateAppointment,
  deleteAppointment
} = require('../controllers/repairs.controller');

const router = express.Router();

router.route('/')
  .get(repairPendindExist, getAllAppointments)
  .post(
    scheduleAppointmentValidations,
    checkValidations,
    scheduleAppointment
  );

router
  .use('/:id', repairByIdExist)
  .route('/:id')
  .get(getAppointmentById)
  .patch(updateAppointment)
  .delete(deleteAppointment);

module.exports = {
  repairsRouter: router
};