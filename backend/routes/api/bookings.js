const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Dock, Booking } = require('../../db/models');

const router = express.Router();


const validateDockForm = [
    check('endDate')
      .exists({ checkFalsy: true })
      .notEmpty()
      .withMessage('Please provide an end date.'),
      handleValidationErrors,
    ];

//create a booking
router.post('/', validateDockForm, asyncHandler(async function(req,res){
  const newBooking = await Booking.create(req.body);
  return res.json(newBooking)
}))

//get all bookings
router.get('/', asyncHandler(async function(req, res) {
  const bookings = await Booking.findAll({include: Dock});
  return res.json(bookings);
}));

//delete a booking
router.delete('/:id(\\d+)', asyncHandler(async function(req, res) {

  const booking = await Booking.findByPk(req.params.id)
  await booking.destroy();
  return res.json(req.params.id)
}));

module.exports = router;
