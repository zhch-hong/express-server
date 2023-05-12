const { v4 } = require('uuid');
const { School } = require('@/models/school/School');

class SchoolHandle {
  async createSchool(req, res) {
    const uuid = v4();
    await School.create({
      uuid,
      name: req.body.name,
      streetCode: req.body.streetCode,
      phone: req.body.phone,
      address: req.body.address,
      latitude: req.body.latitude,
      longitude: req.body.longitude,
      level: req.body.level,
      type: req.body.type,
    });
    res.send();
  }

  async schoolDetail(req, res) {
    const uuid = req.query.uuid;
    const data = await School.findAll({ where: { uuid } });
    res.send(JSON.stringify(data, null, 2));
  }

  async schoolList(req, res) {
    const data = await School.findAll();
    res.send(JSON.stringify(data, null, 2));
  }
}

module.exports = new SchoolHandle();

