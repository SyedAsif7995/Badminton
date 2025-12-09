const app = require("./app");
const { PORT } = require("./config");
const sequelize = require("./db");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync();
    console.log("Models synced.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
