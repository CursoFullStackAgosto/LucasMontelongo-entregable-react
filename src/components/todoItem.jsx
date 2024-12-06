import React from 'react';

function TaskItem({ task, index, deleteTask, toggleTaskCompletion, moveTaskUp, moveTaskDown }) {
  return (
    <li>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(index)}
        />
        <strong>{task.name}</strong>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <button
        className="delete-button"
        onClick={() => deleteTask(index)}
        aria-label="Delete task"
      >
        Delete
      </button>
      <button
        className="move-button"
        onClick={() => moveTaskUp(index)}
        aria-label="Move task up"
      >
        👆
      </button>
      <button
        className="move-button"
        onClick={() => moveTaskDown(index)}
        aria-label="Move task down"
      >
        👇
      </button>
    </li>
  );
}

export default TaskItem;
