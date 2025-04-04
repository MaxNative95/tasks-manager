import React from "react";
import { useTasks } from "../context/TaskContext";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Typography, Paper } from "@mui/material";

const COLORS = ["#FF8042", "#0088FE", "#00C49F"];

const TaskChart: React.FC = () => {
  const { tasks } = useTasks();

  const data = [
    { name: "To Do", value: tasks.filter(task => task.status === "To Do").length },
    { name: "In Progress", value: tasks.filter(task => task.status === "In Progress").length },
    { name: "Completed", value: tasks.filter(task => task.status === "Completed").length },
  ];

  return (
    <Paper style={{ padding: "20px", textAlign: "center" }}>
      <Typography variant="h5" gutterBottom>Task Status Overview</Typography>
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={120}
          fill="#8884d8"
          dataKey="value"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </Paper>
  );
};

export default TaskChart;