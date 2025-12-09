const router = require("express").Router();

const Court = require("../models/court");
const Equipment = require("../models/equipment");
const Coach = require("../models/coach");

router.get("/", async (req, res) => {
  try {
    const courts = await Court.findAll();
    const equipment = await Equipment.findAll();
    const coaches = await Coach.findAll();

    res.json({
      courts,
      equipment,
      coaches,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
