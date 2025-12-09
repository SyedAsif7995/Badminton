const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Court = sequelize.define("Court", {
  name: { type: DataTypes.STRING, allowNull: false },
  type: { type: DataTypes.ENUM("indoor", "outdoor"), allowNull: false },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true }
});

module.exports = Court;
