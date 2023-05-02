const { v4 } = require('uuid');
const { Kindergarten } = require('@/models/school/Kindergarten');

class KindergartenHandle {
  async createKindergarten(req, res) {
    const uuid = v4();
    await Kindergarten.create({
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

  async readKindergarten(req, res) {
    const uuid = req.query.uuid;
    const data = await Kindergarten.findAll({ where: { uuid } });
    res.send(JSON.stringify(data, null, 2));
  }
}

module.exports = new KindergartenHandle();

