const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Coach = sequelize.define("Coach", {
  name: { type: DataTypes.STRING, allowNull: false },
  hourlyRate: { type: DataTypes.INTEGER, defaultValue: 200 }
});

module.exports = Coach;
