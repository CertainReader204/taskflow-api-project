const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const logger = require("./middleware/logger");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
  res.json({
    message: "TaskFlow API'ye hoş geldiniz",
    tasksEndpoint: "/api/tasks"
  });
});

app.use("/api/tasks", taskRoutes);

app.use((req, res) => {
  res.status(404).json({ message: "Route bulunamadı" });
});

app.listen(PORT, () => {
  console.log(`TaskFlow API is running on http://localhost:${PORT}`);
});
