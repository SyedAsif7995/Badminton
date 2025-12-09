const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const PricingRule = sequelize.define("PricingRule", {
  name: DataTypes.STRING,
  type: DataTypes.ENUM("percentage", "fixed"),
  value: DataTypes.FLOAT,
  condition: DataTypes.STRING 
});

module.exports = PricingRule;
