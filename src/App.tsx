import React, { JSX } from "react";
import Home from "./pages/Home";
import TaskChart from "./pages/TaskChart";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";
import { Container } from "@mui/material";
import Register from "./pages/Register";
import Login from "./pages/LogIn";

const PrivateRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  return localStorage.getItem("token") ? children : <Navigate to="/login" />;
};

const App: React.FC = () => {
  return (
    <TaskProvider>
      <BrowserRouter>
        <Container>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/chart" element={<PrivateRoute><TaskChart /></PrivateRoute>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </TaskProvider>
  );
};

export default App;
