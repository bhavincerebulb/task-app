import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import TaskPage from "../pages/tasks";
import AddTaskForm from "../components/Tasks/AddTaskForm";
import TaskForm from "../components/Tasks/AddTaskForm";

const TaskRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        exact
        element={
          <Navigate to="/tasks" replace />
        }
      />
      <Route
        path="/tasks"
        element={
          <TaskPage />
        }
      />
        <Route
        path="/tasks/create"
        element={
          <TaskForm FormType={'create'} />
        }
      />
       <Route
        path="/tasks/edit/:id"
        element={
          <TaskForm formType={'edit'} />
        }
      />
    </Routes >
  );
};

export default TaskRoutes;
