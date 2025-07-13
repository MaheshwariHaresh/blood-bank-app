const express = require("express");
const dotenv = require("dotenv");
const colors = require("colors");
const morgan = require("morgan");
const cors = require("cors");
const connectDB = require("./config/db");

console.log("✅ Server is starting...");
//dot config
dotenv.config();

// mongodb connection
connectDB();

// rest object
const app = express();

//moddlewares
app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
app.use("/api/v1/test", require("./routes/restRoutes"));
app.use("/api/v1/auth", require("./routes/authRoutes"));
app.use("/api/v1/inventory", require("./routes/inventoryRoutes"));

// handle unknown routes
app.use("*", (req, res) => {
  res.status(404).send("API route not found");
});
//port
const PORT = process.env.PORT || 5000;
//listen
app.listen(PORT, () => {
  console.log(
    `Node server Running In ${process.env.DEV_MODE} ModeOn Port ${process.env.PORT} `
      .bgBlue.white
  );
});
