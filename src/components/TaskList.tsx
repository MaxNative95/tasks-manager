import React from "react";
import { useTasks } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList: React.FC = () => {
  const { tasks, loading } = useTasks();

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      {tasks?.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks?.map((task) => <TaskItem key={task.id} task={task} />)
      )}
    </div>
  );
};

export default TaskList;