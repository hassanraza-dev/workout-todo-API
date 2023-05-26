require("dotenv").config();
const express = require("express");
const cors = require("cors");
const workoutRoutes = require("./routes/workouts");
const app = express();
const mongoose = require("mongoose");

// middleware
app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// connet to database

mongoose
  .connect(process.env.MONG_URI)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

app.use("/api/workouts", workoutRoutes);

app.listen(process.env.PORT, () => {
  console.log("server is running");
});
