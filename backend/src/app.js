const express = require("express");
const cors = require("cors");
const env = require("./config/env");
const healthRoutes = require("./routes/healthRoutes");

const app = express();

app.use(cors({ origin: env.clientOrigin }));
app.use(express.json());

app.use("/api", healthRoutes);

app.get("/", (req, res) => {
  res.json({ message: "For Jojo backend is running." });
});

module.exports = app;