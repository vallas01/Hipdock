const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const { setTokenCookie, requireAuth, restoreUser } = require('../../utils/auth');
const { User, Dock, Review } = require('../../db/models');

const router = express.Router();

const validateDockForm = [
    check('name')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Please provide a longer name.'),
      handleValidationErrors,
    ];


module.exports = router;
