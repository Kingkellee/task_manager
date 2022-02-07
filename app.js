const express = require("express");
const app = express();
const tasks = require("./routes/tasks");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
require("dotenv").config();

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.use("/api/v1/tasks", tasks);

app.use(notFound);
app.use(errorHandler);

// Connect MongoDB and Server
const port = process.env.PORT || 3000;
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
