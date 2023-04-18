const { DataTypes } = require('sequelize');
const { sequelize } = require('@/mysql/sequelize');

const Provinces = sequelize.define(
  'provinces',
  {
    code: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true,
    },
    name: DataTypes.STRING,
  },
  { timestamps: false }
);

module.exports = { Provinces };
