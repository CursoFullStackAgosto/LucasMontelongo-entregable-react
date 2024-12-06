import React from "react";

function ProgressBar({ completed, total }) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="progress-bar-container">
      <div className="progress-bar" style={{ width: `${percentage}%` }} />
      <p>{percentage}% completed</p>
    </div>
  );
}

export default ProgressBar;
