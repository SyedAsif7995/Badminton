const app = require("./app");
const { PORT } = require("./config");
const sequelize = require("./db");

// TEMP: import seed
const seed = require("../seed");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    // 🟢 FIXED: Do NOT use force: true
    await sequelize.sync();   
    console.log("Models synced.");

    // Run seed manually ONLY once
    await seed();
    console.log("Seed executed successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
