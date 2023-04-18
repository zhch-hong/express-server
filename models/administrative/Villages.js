const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const Villages = sequelize.define(
  'villages',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    streetCode: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    cityCode: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = { Villages };
