import React from "react";
import TaskItem from "./todoItem";

function TaskList({
  tasks,
  deleteTask,
  toggleTaskCompletion,
  moveTaskUp,
  moveTaskDown,
}) {
  return (
    <ol className="task-list">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          moveTaskUp={moveTaskUp}
          moveTaskDown={moveTaskDown}
        />
      ))}
    </ol>
  );
}

export default TaskList;
