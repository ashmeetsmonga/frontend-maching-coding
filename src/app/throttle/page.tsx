"use client";

import React, { useState } from "react";
import "./throttle.css";
import useThrottle from "./useThrottle";

const Throttle = () => {
  const [value, setValue] = useState("");
  const throttledValue = useThrottle(value, 1000);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">useThrottle Hook Example</h1>
        <div className="input-container">
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value to see throttling" />
        </div>
        <div className="output-container">
          <p>Value: {value}</p>
          <p>Throttled Value: {throttledValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Throttle;
