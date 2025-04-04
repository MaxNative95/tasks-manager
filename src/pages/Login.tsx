import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Paper } from "@mui/material";

const Login: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: new URLSearchParams({
                    'username': email,
                    'password': password
                })
            });

            if (!response.ok) {
                throw new Error("Invalid credentials");
            }

            const data = await response.json();
            localStorage.setItem("token", data.access_token); // Guarda el token en localStorage

            navigate("/home");
        } catch (error) {
            alert(error);
        }
    };

    const handleRegister = () => {
        navigate("/register")
    };

    return (
        <Container maxWidth="sm">
            <Paper style={{ padding: "20px", marginTop: "20px" }}>
                <Typography variant="h5" gutterBottom>Login</Typography>
                <TextField label="Email" fullWidth margin="normal" value={email} onChange={(e) => setEmail(e.target.value)} />
                <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={(e) => setPassword(e.target.value)} />
                <Button variant="contained" color="primary" fullWidth onClick={handleLogin}>
                    Login
                </Button>
                <Button style={{ marginTop: 15 }} variant="contained" color="primary" fullWidth onClick={handleRegister}>
                    Register
                </Button>
            </Paper>
        </Container>
    );
};

export default Login;