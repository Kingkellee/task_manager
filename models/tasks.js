// defining our Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  task: String,
  completed: Boolean,
});

// creating our modules
module.exports = mongoose.model("Task", taskSchema);
