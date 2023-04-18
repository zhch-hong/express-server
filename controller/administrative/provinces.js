const { Provinces } = require('@/models/administrative/Provinces');

class ProvincesHandle {
  async getProvinces(req, res) {
    const data = await Provinces.findAll();
    res.send(JSON.stringify(data, null, 2));
  }
}

module.exports = new ProvincesHandle();
