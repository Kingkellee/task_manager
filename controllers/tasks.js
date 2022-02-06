const Task = require("../models/tasks");

const getAllTask = (req, res) => {
  res.send("All Task");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const UpdateTask = (req, res) => {
  res.json({ id: req.params.id });
};

const DeleteTask = (req, res) => {
  res.send("Your Task has been Deleted");
};

module.exports = {
  getAllTask,
  getTask,
  createTask,
  UpdateTask,
  DeleteTask,
};
