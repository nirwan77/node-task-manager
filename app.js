const express = require("express");
const app = express();
const task = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();

//middleware
app.use(express.static("./public"));
app.use(express.json());

//routes
app.use("/api/v1/tasks", task);

const port = 3000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server listening at ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

start();
