"use client";
import React, { useState } from "react";
import "./selectable-grid.css";

const ROWS = 10;
const COLS = 10;

const SelectableGridPage = () => {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [startIdx, setStartIdx] = useState(-1);
  const [selectedStartIdx, setSelectedStartIdx] = useState<number>(-1);
  const [selectedEndIdx, setSelectedEndIdx] = useState<number>(-1);

  const handleMouseDown = (idx: number) => {
    setIsMouseDown(true);
    setSelectedStartIdx(idx);
    setSelectedEndIdx(idx);
    setStartIdx(idx);
  };

  const handleMouseEnter = (idx: number) => {
    if (isMouseDown) {
      if (idx >= startIdx) {
        setSelectedStartIdx(startIdx);
        setSelectedEndIdx(idx);
      } else if (idx < startIdx) {
        setSelectedEndIdx(startIdx);
        setSelectedStartIdx(idx);
      }
    }
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
  };

  return (
    <div className="container" onMouseUp={handleMouseUp}>
      <h2>Selectable Grid</h2>
      <div className="grid">
        {[...new Array(ROWS * COLS)].map((_, i) => (
          <div onMouseDown={() => handleMouseDown(i)} onMouseEnter={() => handleMouseEnter(i)} key={i} className={`box ${i >= selectedStartIdx && i <= selectedEndIdx ? "selectedBox" : " "}`}>
            {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SelectableGridPage;
