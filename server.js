
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");

const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "FlameNodesX",
    status: "Online",
    message: "Welcome to FlameNodesX Hosting!"
  });
});

app.get("/api/servers", (req, res) => {
  res.json({
    servers: [],
    message: "Your SMP dashboard is ready."
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
  console.log(`FlameNodesX running on port ${PORT}`);
});
