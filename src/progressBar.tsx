import React from "react";

export const ProgressBar = () => {
  return (
    <div className="container">
      <div className="progress-bar">
        <div className="progress-bar-fill">progress bar</div>
      </div>
      <div className="progress-label">50%</div>
      <button>Progress</button>
      <button>Reset</button>
    </div>
  );
};
