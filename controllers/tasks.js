const getAllTask = (req, res) => {
  res.send("All Task");
};

const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const createTask = (req, res) => {
  res.json(req.body);
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
