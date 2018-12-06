var express = require('express')
var router = express.Router()
var ctrlLocations = require('../controllers/locations')
var crtlOthers = require('../controllers/others')

//Locations
router.get('/', ctrlLocations.homeList)
router.get('/location', ctrlLocations.locationInfo)
router.get('/location/review/new', ctrlLocations.addReview)
//Others

router.get('/about', crtlOthers.about)


module.exports = router
