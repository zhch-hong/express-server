var express = require('express');
var router = express.Router();

const SchoolHandle = require('@/controller/school/school');

router.get('/school-list', SchoolHandle.schoolList.bind(SchoolHandle));
router.get('/school-detail', SchoolHandle.schoolDetail.bind(SchoolHandle));
router.post('/create-school', SchoolHandle.createSchool.bind(SchoolHandle));

module.exports = router;
