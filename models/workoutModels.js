const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutsSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    reps: {
      type: String,
      required: true,
    },
    load: {
      type: Number,
      required: true,
    },
    isCompleted: {
      type: Boolean,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Workout", workoutsSchema);
