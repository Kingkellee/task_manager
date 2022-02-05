const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

// middleware

app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

// Connect MongoDB and Server
const port = 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Application now Listening on Port ${port}...`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

// app.get('/api/v1/tasks') ---get all task
// app.get('/api/v1/tasks/:id') ---get single task
// app.post('/api/v1/tasks') ---post a task
// app.('/api/v1/tasks/:id') ---update a task
// app.delete('/api/v1/tasks/:id') ---delete a task
