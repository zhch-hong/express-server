const { Streets } = require('@/models/administrative/Streets');

class StreetsHandle {
  async getStreets(req, res) {
    const areaCode = this.getAreaCode(req);
    const data = await Streets.findAll({ where: { areaCode } });
    res.send(JSON.stringify(data, null, 2));
  }

  getAreaCode(req) {
    return req.query.areaCode;
  }
}

module.exports = new StreetsHandle();
