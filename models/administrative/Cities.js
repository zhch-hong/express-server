const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const Cities = sequelize.define(
  'cities',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = { Cities };
