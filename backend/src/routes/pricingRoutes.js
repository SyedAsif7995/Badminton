const router = require("express").Router();
const PricingRule = require("../models/pricingRule");

router.post("/preview", async (req, res) => {
  const { courtType, isWeekend, isPeak } = req.body;

  let base = courtType === "indoor" ? 4000 :5000;
  let rules = await PricingRule.findAll();

  rules.forEach(r => {
    if ((r.condition === "peak_hours" && isPeak) ||
        (r.condition === "weekend" && isWeekend) ||
        (r.condition === "indoor" && courtType === "indoor")) {
      
      base += r.type === "percentage" ? base * r.value : r.value;
    }
  });

  res.json({ price: base });
});

module.exports = router;
