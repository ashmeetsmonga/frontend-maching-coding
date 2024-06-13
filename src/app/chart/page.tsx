"use client";
import React, { useMemo, useState } from "react";

import "./chart.css";

const CHART_DATA = [
  { id: "dep-1", name: "Legal", ticketCount: 32, colour: "#3F888F" },
  { id: "dep-2", name: "Sales", ticketCount: 20, colour: "#FFA420" },
  { id: "dep-3", name: "Engineering", ticketCount: 60, colour: "#287233" },
  { id: "dep-4", name: "Manufacturing", ticketCount: 5, colour: "#4E5452" },
  { id: "dep-5", name: "Maintenance", ticketCount: 14, colour: "#642424" },
  {
    id: "dep-6",
    name: "Human Resourcing",
    ticketCount: 35,
    colour: "#1D1E33",
  },
  { id: "dep-7", name: "Events", ticketCount: 43, colour: "#E1CC4F" },
];

const ChartPage = () => {
  const maxValue = useMemo(() => {
    let maxValue = -Infinity;
    CHART_DATA.forEach((bar) => (maxValue = Math.max(maxValue, bar.ticketCount)));
    return maxValue;
  }, [CHART_DATA]);

  const [showChart, setShowChart] = useState<boolean>(false);

  const getValue = (ticketCount: number) => (ticketCount / maxValue) * 100;

  return (
    <div className="chart">
      <button onClick={() => setShowChart((prev) => !prev)}>Toggle Chart</button>
      {true && (
        <div className="container">
          <div className="bars">
            {CHART_DATA.map((bar) => (
              <div
                key={bar.id}
                style={{ height: showChart ? `${getValue(bar.ticketCount)}%` : 0, backgroundColor: bar.colour }}
                data-tooltip={`${bar.name} - ${bar.ticketCount}`}
                className="bar"
              ></div>
            ))}
          </div>
          <p className="x-axis-title">Departments</p>
          <p className="y-axis-title">Number Of Tickets</p>
        </div>
      )}
    </div>
  );
};

export default ChartPage;

// Draw Bars - Done
// Draw Axis - Done
// Tooltip - Done
// Toggle Chart Button
// Animation
