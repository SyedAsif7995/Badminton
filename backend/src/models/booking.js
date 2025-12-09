const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Booking = sequelize.define("Booking", {
  date: DataTypes.STRING,
  startTime: DataTypes.STRING,
  duration: DataTypes.INTEGER,
  courtId: DataTypes.INTEGER,
  equipment: DataTypes.JSON,
  coachId: DataTypes.INTEGER,
  totalPrice: DataTypes.FLOAT
});

module.exports = Booking;
