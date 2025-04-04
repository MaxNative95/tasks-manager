import React, { createContext, useContext, useState, useEffect } from "react";
const API = import.meta.env.VITE_API; //go to env file and do the proper change to your local

export type Task = {
    id: number;
    title: string;
    description: string;
    status: "To Do" | "In Progress" | "Completed";
};

type TaskContextType = {
    tasks: Task[];
    loading: boolean;
    addTask: (task: Task) => void;
    updateTaskStatus: (id: number, status: Task["status"]) => void;
    updateTask: (id: number, title: string, description: string, status: Task["status"]) => void;
    deleteTask: (id: number) => void;
};

const TaskContext = createContext<TaskContextType | undefined>(undefined);

// const API_URL = "http://127.0.0.1:8000/tasks";

const getAuthHeaders = () => {
    const token = localStorage.getItem("token");
    return token ? { Authorization: `Bearer ${token}`, "Content-Type": "application/json" } : undefined;
};

export const TaskProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTasks = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                setLoading(false);
                return; // No token = no fetch
            }

            try {
                const res = await fetch(API, { method: "GET", headers: getAuthHeaders() });
                if (!res.ok) throw new Error("Error fetching tasks");
                const data = await res.json();
                setTasks(data);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        };

        fetchTasks();
    }, []);

    // Create new task
    const addTask = async (task: Task) => {
        try {
            const res = await fetch(API, { method: "POST", headers: getAuthHeaders(), body: JSON.stringify(task) });

            if (!res.ok) throw new Error("Error adding task");
            const newTask = await res.json();
            setTasks((prev) => [...prev, newTask]);
        } catch (error) {
            console.error(error);
        }
    };

    // Update the status of a task
    const updateTaskStatus = async (id: number, status: Task["status"]) => {
        try {
            const res = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: getAuthHeaders(),
                body: JSON.stringify({ status }),
            });
            if (!res.ok) throw new Error("Error updating task status");
            setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, status } : task)));
        } catch (error) {
            console.error(error);
        }
    };

    // Edit a task
    const updateTask = async (id: number, title: string, description: string, status: Task["status"]) => {
        try {
            const res = await fetch(`${API}/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", ...getAuthHeaders() },
                body: JSON.stringify({ title, description, status }),
            });
            if (!res.ok) throw new Error("Error updating task");
            setTasks((prev) => prev.map((task) => (task.id === id ? { ...task, title, description } : task)));
        } catch (error) {
            console.error(error);
        }
    };

    // Delete a task
    const deleteTask = async (id: number) => {
        try {
            const res = await fetch(`${API}/${id}`, { method: "DELETE", headers: getAuthHeaders() });
            if (!res.ok) throw new Error("Error deleting task");
            setTasks((prev) => prev.filter((task) => task.id !== id));
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, loading, addTask, updateTaskStatus, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TaskContext);
    if (!context) {
        throw new Error("useTasks must be used within a TaskProvider");
    }
    return context;
};
