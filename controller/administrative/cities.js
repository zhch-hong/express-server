const { Cities } = require('@/models/administrative/Cities');

class CitiesHandle {
  async getCities(req, res) {
    const provinceCode = this.getProvinceCode(req);
    const data = await Cities.findAll({ where: { provinceCode } });
    res.send(JSON.stringify(data, null, 2));
  }

  getProvinceCode(req) {
    return req.query.provinceCode;
  }
}

module.exports = new CitiesHandle();
