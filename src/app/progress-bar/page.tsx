"use client";

import React, { useEffect, useState } from "react";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import "./page.css";

const ProgressBarPage = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => setValue((prev) => prev + 1), 100);
    if (value > 100) clearInterval(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="progress-bar-page-wrapper">
      <div className="container">
        <h1>Progress Bar</h1>
        <ProgressBar value={value} />
      </div>
    </div>
  );
};

export default ProgressBarPage;
