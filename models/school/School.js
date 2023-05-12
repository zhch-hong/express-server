const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const School = sequelize.define(
  'school',
  {
    uuid: {
      primaryKey: true,
      type: DataTypes.STRING,
    },
    name: DataTypes.STRING,
    streetCode: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.NUMBER,
    longitude: DataTypes.NUMBER,
    level: DataTypes.NUMBER,
    type: DataTypes.NUMBER,
  },
  { freezeTableName: true, timestamps: false }
);

module.exports = { School };

