const app = require("./app");
const { PORT } = require("./config");
const sequelize = require("./db");

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync(); // DO NOT USE force:true
    console.log("Models synced.");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
