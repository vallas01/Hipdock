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
    check('address')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Please provide a longer address.'),
    check('city')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Please provide a longer city name.'),
    check('state')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 2})
      .withMessage('Enter state name or 2 letter abbreviation.'),
    check('cost')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isFloat({min: 0, max: 10})
      .withMessage('Cost must be between 0 and $10.00.'),
    check('description')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 4})
      .withMessage('Add at least a one word description.'),
    check('latitude')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isFloat({min: -90, max: 90})
      .withMessage('Latitude must be between -90 and 90.'),
    check('longitude')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isFloat({min: -90, max: 90})
      .withMessage('Longitude must be between -180 and 180.'),
    check('imagePath')
      .exists({ checkFalsy: true })
      .notEmpty()
      .isLength({min: 5})
      .withMessage('Add an image path.'),
      handleValidationErrors,
    ];

  //get all docks
router.get('/', asyncHandler(async function(req, res) {
    console.log("GOT HERE")
    const docks = await Dock.findAll();
    return res.json(docks);
}));

  //create a dock
router.post('/', validateDockForm, asyncHandler(async function(req,res){
  const newDock = await Dock.create(req.body);
  return res.json(newDock)
}))

  //update a dock
router.put('/:id(\\d+)', validateDockForm, asyncHandler(async function(req, res) {

  const dockToEdit = await Dock.findByPk(req.params.id);

  const {name, address, city, state, country, cost, description, longitude, latitude, imagePath}   = req.body
  await dockToEdit.update({
    name, address, city, state, country, cost, description, longitude, latitude, imagePath
  });
  const idDock = req.params.id
  const editedDock = await Dock.findByPk(idDock);

  res.json(editedDock);
}));


  //delete a marina
router.delete('/:id(\\d+)', asyncHandler(async function(req, res) {

  const dock = await Dock.findByPk(req.params.id)
  await dock.destroy();
  // const allMarinas = await Business.findAll();
  return res.json(req.params.id)
}));

module.exports = router;
