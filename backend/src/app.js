const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(bodyParser.json());


app.get("/api/health", (req, res) => {
  res.json({ status: "ok" });
});

app.use("/api", routes);

module.exports = app;
