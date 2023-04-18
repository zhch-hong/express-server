const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const Streets = sequelize.define(
  'streets',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    areaCode: DataTypes.STRING,
    cityCode: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = { Streets };
