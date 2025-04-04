import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const Register: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleRegister = async () => {
        if (!email || !password) {
            alert("Email and password are required");
            return;
        }

        try {
            const response = await fetch("http://127.0.0.1:8000/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                throw new Error("Registration failed");
            }

            const data = await response.json();
            localStorage.setItem("userId", data.id); // Guarda el id en localStorage

            navigate("/login");
        } catch (error) {
            alert(error);
        }
    };

    const handleBack = () => {
        navigate("/login");
    }

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h5" gutterBottom>Register</Typography>
                <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>
                <Button style={{ marginTop: 15 }} variant="contained" color="primary" fullWidth onClick={handleBack}>
                    Back to Login
                </Button>
            </Paper>
        </Container>
    );
};

export default Register;