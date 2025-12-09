const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Equipment = sequelize.define("Equipment", {
  name: { type: DataTypes.STRING, allowNull: false },
  quantity: { type: DataTypes.INTEGER, allowNull: false }
});

module.exports = Equipment;
