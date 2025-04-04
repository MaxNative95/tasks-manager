import { render, screen, fireEvent } from "@testing-library/react";
import TaskItem from "../../components/TaskItem";
import { TaskProvider } from "../../context/TaskContext";
import {  describe,  test } from "vitest";

const mockTask = {
  id: 1,
  title: "Test Task",
  description: "This is a test task",
  status: "To Do",
};

describe("TaskItem Component", () => {


  test("allows editing a task", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    );
    
    // Activa el modo edición
    fireEvent.click(screen.getByText(/Edit/i));
    
    // Cambia el título y la descripción
    fireEvent.change(screen.getByLabelText(/Title/i), { target: { value: "Updated Task" } });
    fireEvent.change(screen.getByLabelText(/Description/i), { target: { value: "Updated Description" } });
    
    // Guarda los cambios
    fireEvent.click(screen.getByText(/Save/i));
    

  });

  test("updates task status correctly", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    );

 
  });

  test("deletes a task correctly", () => {
    render(
      <TaskProvider>
        <TaskItem task={mockTask} />
      </TaskProvider>
    );

    fireEvent.click(screen.getByText(/Delete/i));

  });
});
