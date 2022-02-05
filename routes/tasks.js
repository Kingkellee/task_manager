const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTask,
  createTask,
  UpdateTask,
  DeleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(UpdateTask).delete(DeleteTask);

module.exports = router;

// app.get('/api/v1/tasks') ---get all task
// app.get('/api/v1/tasks/:id') ---get single task
// app.post('/api/v1/tasks') ---post a task
// app.('/api/v1/tasks/:id') ---update a task
// app.delete('/api/v1/tasks/:id') ---delete a task
