import React, { useState } from "react";
import { Task, useTasks } from "../context/TaskContext";
import { Button, Card, CardContent, Typography, Box, TextField } from "@mui/material";

const TaskItem: React.FC<{ task: Task }> = ({ task }) => {
    const { updateTaskStatus, updateTask, deleteTask } = useTasks();
    const [isEditing, setIsEditing] = useState(false);
    const [title, setTitle] = useState(task.title);
    const [description, setDescription] = useState(task.description);

    const handleSave = () => {
        updateTask(task.id, title, description, task.status);
        setIsEditing(false);
    };

    const statusColors = {
        "To Do": "gray",
        "In Progress": "#3874CB",
        "Completed": "green",
    };

    return (
        <Card style={{ margin: "10px 0", padding: "10px" }}>
            <CardContent>
                {isEditing ? (
                    <>
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
                        <Button onClick={handleSave} color="primary" variant="contained">
                            Save
                        </Button>
                    </>
                ) : (
                    <>
                        <Typography variant="h6">{task.title}</Typography>
                        <Typography variant="body2" paragraph>{task.description}</Typography>
                        <Typography>Status: <Typography variant="caption" style={{ color: statusColors[task.status], fontSize: 16 }}>{task.status}</Typography></Typography>
                        <Box display="flex" justifyContent="space-between" marginTop={2}>
                            <Button size="small" color="inherit" variant="contained" onClick={() => setIsEditing(true)}>
                                Edit
                            </Button>
                            <Button size="small" variant="contained" onClick={() => updateTaskStatus(task.id, "In Progress")}>
                                Start
                            </Button>
                            <Button size="small" color="success" variant="contained" onClick={() => updateTaskStatus(task.id, "Completed")}>
                                Complete
                            </Button>
                            <Button size="small" variant="contained" onClick={() => deleteTask(task.id)} color="error">
                                Delete
                            </Button>
                        </Box>
                    </>
                )}
            </CardContent>
        </Card>
    );
};

export default TaskItem;