const express = require("express");
const router = express.Router();

const {
  getAllTask,
  createTask,
  deleteTask,
  getTask,
  upadteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTask).patch(upadteTask).delete(deleteTask);

module.exports = router;
