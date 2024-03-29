import React, { useEffect, useRef, useState } from "react";

function useDebounce<T>(value: T, delay = 500) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  const timer = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
  }, [value, delay]);

  return debouncedValue;
}

export default useDebounce;
