const app = require("./app");
const { PORT } = require("./config");
const sequelize = require("./db");


const seed = require("../seed"); 

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Database connected.");

    await sequelize.sync({ force: true }); 
    console.log("Models synced.");

  
    await seed();  
    console.log("Seed executed successfully.");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("Error starting server:", error);
  }
})();
