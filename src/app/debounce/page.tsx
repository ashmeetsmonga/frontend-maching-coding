"use client";

import React, { useState } from "react";
import "./debounce.css";
import useDebounce from "./useDebounce";

const Debounce = () => {
  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value, 1000);

  return (
    <div className="wrapper">
      <div className="container">
        <h1 className="title">useDebounce Hook Example</h1>
        <div className="input-container">
          <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Enter value to see debouncing" />
        </div>
        <div className="output-container">
          <p>Value: {value}</p>
          <p>Debounced Value: {debouncedValue}</p>
        </div>
      </div>
    </div>
  );
};

export default Debounce;
