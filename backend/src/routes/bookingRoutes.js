const router = require("express").Router();
const Booking = require("../models/booking");

router.post("/", async (req, res) => {
  const booking = await Booking.create(req.body);
  res.json({ success: true, booking });
});

router.get("/", async (req, res) => {
  const bookings = await Booking.findAll();
  res.json(bookings);
});

module.exports = router;
