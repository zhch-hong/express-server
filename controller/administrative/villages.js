const { Villages } = require('@/models/administrative/Villages');

class VillagesHandle {
  async getVillages(req, res) {
    const streetCode = this.getStreetCode(req);
    const data = await Villages.findAll({ where: { streetCode } });
    res.send(JSON.stringify(data, null, 2));
  }

  getStreetCode(req) {
    return req.query.streetCode;
  }
}

module.exports = new VillagesHandle();
