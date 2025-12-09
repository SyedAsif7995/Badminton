const router = require("express").Router();

router.use("/availability", require("./availabilityRoutes"));
router.use("/pricing", require("./pricingRoutes"));
router.use("/bookings", require("./bookingRoutes"));

module.exports = router;
