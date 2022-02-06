// defining our Schema
const mongoose = require("mongoose");
const { Schema } = mongoose;

const taskSchema = new Schema({
  task: {
    type: String,
    required: [true, "Task can not be empty"],
    trim: true,
    maxlength: [250, "Task can not be longer than 250 Characters"],
  },
  completed: {
    type: Boolean,
    default: false,
  },
});

// creating our modules
module.exports = mongoose.model("Task", taskSchema);
