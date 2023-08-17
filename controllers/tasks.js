const task = require("../models/task");
const Task = require("../models/task");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find({});

    res.status(200).json({ tasks });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);

    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json(error);
  }
};

const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const task = await Task.findOne({ _id: taskID });

    if (!task) {
      return res.status(404).json({ msg: `no task with the id: ${taskID}` });
    }

    res.status(200).json({ task });
  } catch (err) {
    res.status(500).json(err);
  }
};

const upadteTask = async (req, res, next) => {
  const { id: taskID } = req.params;

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).json({ msg: `no task with the id: ${taskID}` });
  }

  res.status(200).json({ task });
};

const deleteTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;

    const tasks = await Task.findOneAndDelete({ _id: taskID });
    if (!tasks) {
      return res.status(404).json({ msg: `no task with the id: ${taskID}` });
    }

    res.status(200).json({ message: `succesfully deleted ${taskID}` });
  } catch (error) {
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTask,
  deleteTask,
  createTask,
  getTask,
  upadteTask,
};
