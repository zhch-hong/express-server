const { Areas } = require('@/models/administrative/Areas');

class AreasHandle {
  async getCities(req, res) {
    const cityCode = this.getCityCode(req);
    const data = await Areas.findAll({ where: { cityCode } });
    res.send(JSON.stringify(data, null, 2));
  }

  getCityCode(req) {
    return req.query.cityCode;
  }
}

module.exports = new AreasHandle();
