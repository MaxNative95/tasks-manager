import React from "react";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { Typography, Box, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  const goToCharts = () => {
    navigate("/chart")
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Task Manager
      </Typography>
      <TaskForm />
      <TaskList />
      <Button style={{ marginTop: 15 }} variant="contained" color="primary" fullWidth onClick={handleLogout}>
        Logout
      </Button>
      <Button style={{ marginTop: 15 }} variant="contained" color="primary" fullWidth onClick={goToCharts}>
        Charts/Report
      </Button>
    </Box>
  );
};

export default Home;