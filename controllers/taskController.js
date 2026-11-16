const tasks = require("../data/tasks");

function getTaskId(value) {
  return Number(value);
}

function getAllTasks(req, res) {
  res.json(tasks);
}

function getTaskById(req, res) {
  const taskId = getTaskId(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  res.json(task);
}

function createTask(req, res) {
  const now = new Date().toISOString();
  const task = {
    id: tasks.length === 0 ? 1 : Math.max(...tasks.map((item) => item.id)) + 1,
    title: req.body.title,
    description: req.body.description,
    status: req.body.status || "pending",
    priority: req.body.priority || "medium",
    assignee: req.body.assignee,
    createdAt: now,
    updatedAt: now
  };

  tasks.push(task);
  res.status(201).json(task);
}

function updateTask(req, res) {
  const taskId = getTaskId(req.params.id);
  const task = tasks.find((item) => item.id === taskId);

  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }

  const allowedFields = ["title", "description", "status", "priority", "assignee"];

  allowedFields.forEach((field) => {
    if (req.body[field] !== undefined) {
      task[field] = req.body[field];
    }
  });

  task.updatedAt = new Date().toISOString();
  res.json(task);
}

function deleteTask(req, res) {
  const taskId = getTaskId(req.params.id);
  const taskIndex = tasks.findIndex((item) => item.id === taskId);

  if (taskIndex === -1) {
    return res.status(404).json({ message: "Task not found" });
  }

  const deletedTask = tasks.splice(taskIndex, 1)[0];
  res.json({
    message: "Task deleted successfully",
    task: deletedTask
  });
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
