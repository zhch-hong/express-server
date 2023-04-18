var express = require('express');
var router = express.Router();

const ProvincesHandle = require('@/controller/administrative/provinces');
const CitiesHandle = require('@/controller/administrative/cities');
const AreasHandle = require('@/controller/administrative/areas');
const StreetsHandle = require('@/controller/administrative/streets');
const VillagesHandle = require('@/controller/administrative/villages');

router.get('/provinces', ProvincesHandle.getProvinces.bind(ProvincesHandle));
router.get('/cities', CitiesHandle.getCities.bind(CitiesHandle));
router.get('/areas', AreasHandle.getCities.bind(AreasHandle));
router.get('/streets', StreetsHandle.getStreets.bind(StreetsHandle));
router.get('/villages', VillagesHandle.getVillages.bind(VillagesHandle));

module.exports = router;
