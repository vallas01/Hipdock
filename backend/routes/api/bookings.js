const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Dock, Booking } = require('../../db/models');

const router = express.Router();

// const d = new Date();
// let today = d.toString();

const validateDockForm = [
    check('startDate')
      .exists({ checkFalsy: true })
      .notEmpty()
      // .isBefore(today)
      .withMessage('Please provide a longer name.'),
      handleValidationErrors,
    ];

//create a booking
router.post('/', validateDockForm, asyncHandler(async function(req,res){
  console.log(`********${req.body}`)
  const newBooking = await Booking.create(req.body);
  return res.json(newBooking)
}))

module.exports = router;
