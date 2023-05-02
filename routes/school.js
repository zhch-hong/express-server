var express = require('express');
var router = express.Router();

const KindergartenHandle = require('@/controller/school/kindergarten');

router.get('/read-kindergarten', KindergartenHandle.readKindergarten.bind(KindergartenHandle));
router.post('/create-kindergarten', KindergartenHandle.createKindergarten.bind(KindergartenHandle));

module.exports = router;
