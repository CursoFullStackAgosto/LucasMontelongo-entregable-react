import React, { useState } from "react";

function TaskForm({ addTask }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState("low");

  function handleSubmit(event) {
    event.preventDefault();
    addTask({ name, description, priority });
    setName("");
    setDescription("");
    setPriority("low");
  }

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div>
        <label className="task-name-label">
          Task Name:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </label>
      </div>
      <div>
        <label className="task-description-label">
        Description:
          <textarea rows="1" cols="20"
            className="task-description-input"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
      </div>
      <div className="priority-select">
        <label>
          Priority:
          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </label>
      </div>
      <button type="submit" className="add-button">
        Add Task
      </button>
    </form>
  );
}

export default TaskForm;
