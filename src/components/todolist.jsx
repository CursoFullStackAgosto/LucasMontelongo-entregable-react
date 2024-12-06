import React, { useState } from "react";
import TaskForm from "./todoForm";
import TaskList from "./taskList";
import ProgressBar from "./progressBar";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  function addTask(task) {
    if (task.name.trim() !== "") {
      setTasks([...tasks, { ...task, completed: false }]);
    }
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function toggleTaskCompletion(index) {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  }

  function moveTaskUp(index) {
    if (index > 0) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  function moveTaskDown(index) {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];
      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  }

  const completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;

  return (
    <div className="to-do-list">
      <h1 className="tittle">To Do List</h1>
      <TaskForm addTask={addTask} />
      <ProgressBar completed={completedTasks} total={totalTasks} />
      {tasks.length > 0 ? (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ) : (
        <p className="no-tasks">
          No tienes tareas pendientes. ¡Añade una para comenzar!
        </p>
      )}
    </div>
  );
}

export default TodoList;
