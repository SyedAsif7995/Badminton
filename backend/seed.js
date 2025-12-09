const sequelize = require("./src/db");
const Court = require("./src/models/court");
const Equipment = require("./src/models/equipment");
const Coach = require("./src/models/coach");
const PricingRule = require("./src/models/pricingRule");

(async () => {
  try {
    await sequelize.sync({ force: true });

    await Court.bulkCreate([
      { name: "Pawan Kalyan Court", type: "indoor" },
      { name: "Prabhas Court", type: "indoor" },
      { name: "Ramcharan Court", type: "outdoor" },
      { name: "NTR Court", type: "outdoor" },
    ]);

    await Equipment.bulkCreate([
      { name: "Racket", quantity: 20 },
      { name: "Shoes", quantity: 10 },
      { name: "Shuttlecocks", quantity: 4 },
      { name: "Badminton Bag", quantity: 1 },
      { name: "Ankle Support", quantity: 2 },
    ]);

    await Coach.bulkCreate([
      { name: "Ajay" },
      { name: "Hitesh" },
      { name: "Abdul" },
      { name: "Asif" },
    ]);

    await PricingRule.bulkCreate([
      { name: "Peak Hours", type: "percentage", value: 0.2, condition: "peak_hours" },
      { name: "Weekend", type: "percentage", value: 0.15, condition: "weekend" },
      { name: "Indoor Premium", type: "fixed", value: 50, condition: "indoor" },
    ]);

    console.log("Seed completed successfully.");
    process.exit();
  } catch (error) {
    console.error("Seed failed:", error);
    process.exit(1);
  }
})();
