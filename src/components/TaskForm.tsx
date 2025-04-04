import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Button, TextField, Paper, Box } from "@mui/material";

const TaskForm: React.FC = () => {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    addTask({ id: Date.now(), title, description, status: "To Do" });
    setTitle("");
    setDescription("");
  };

  return (
    <Paper style={{ padding: "20px", marginBottom: "20px" }}>
      <form onSubmit={handleSubmit}>
        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          margin="normal"
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Box textAlign="right">
          <Button type="submit" variant="contained" color="primary">
            Add Task
          </Button>
        </Box>
      </form>
    </Paper>
  );
};

export default TaskForm;
