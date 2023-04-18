const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const Areas = sequelize.define(
  'areas',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
    cityCode: DataTypes.STRING,
    provinceCode: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = { Areas };
