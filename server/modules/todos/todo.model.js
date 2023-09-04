const mongoose = require("mongoose");
const commonSchema = require("../../utils/commonSchema");
const TodoSchema = new mongoose.Schema({
  title: String,
  status: { type: String, enum: ["pending", "completed"] },
  ...commonSchema,
});

module.exports = new mongoose.model("Todo", TodoSchema);
