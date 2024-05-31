import React, { FC, useEffect, useState } from "react";

import "./progress-bar.css";

interface ProgressBarProps {
  value: number;
}

const ProgressBar: FC<ProgressBarProps> = ({ value = 0 }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(0, value)));
  }, [value]);

  return (
    <div className="progress-bar-container">
      <span style={{ color: percent < 51 ? "white" : "black" }}>{percent}%</span>
      <span className="progress-bar" style={{ transform: `scaleX(${value / 100})` }}></span>
    </div>
  );
};

export default ProgressBar;
