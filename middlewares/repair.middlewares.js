const { Repair } = require('../models/repair.model');
const { User } = require('../models/user.model');

const repairPendindExist = async (req, res, next) => {

  try {

    const appointment = await Repair.findAll({
      where: {
        status: 'pending'
      },
      include: {
        model: User
      }
    });

    if (appointment.length === 0) {
      return res.status(404).json({
        status: 'error',
        message: `There aren't pending repairs`
      });
    };

    req.appointment = appointment;

  } catch (error) {
    console.log(error);
  }

  next();
};

const repairByIdExist = async (req, res, next) => {
  try {

    const { id } = req.params;

    const appointment = await Repair.findOne({
      where: { id },
      include: {
        model: User
      }
    });

    if (!appointment) {
      return res.status(404).json({
        status: 'error',
        message: `Appointment hasn't been found`
      });
    };

    req.appointment = appointment;

  } catch (error) {
    console.log(error);
  }

  next();
};

module.exports = {
  repairPendindExist,
  repairByIdExist
};