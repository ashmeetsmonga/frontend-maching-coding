"use client";
import React, { FC, useEffect, useRef, useState } from "react";

function useThrottle<T>(value: T, interval: number) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastExecutedTime = useRef<number>(Date.now());

  useEffect(() => {
    if (Date.now() >= lastExecutedTime.current + interval) {
      setThrottledValue(value);
      lastExecutedTime.current = Date.now();
    } else {
      const timerId = setTimeout(() => {
        setThrottledValue(value);
        lastExecutedTime.current = Date.now();
      }, interval);

      return () => clearTimeout(timerId);
    }
  }, [interval, value]);

  return throttledValue;
}

export default useThrottle;
