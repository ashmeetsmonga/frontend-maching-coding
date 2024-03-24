"use client";

import React, { useEffect, useState } from "react";
import "./infinite-scrolling.css";

const items = [...new Array(1000)].map((_, i) => `Item ${i + 1}`);

const InfiniteScrollingPage = () => {
  const [count, setCount] = useState(50);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.innerHeight + window.scrollY >= window.document.body.offsetHeight) {
        setLoading(true);
        setTimeout(() => {
          console.log("In SetTimeout");
          setLoading(false);
          setCount((prev) => (prev < items.length ? prev + 50 : prev));
        }, 2000);
      }
    };
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="container">
      {items.slice(0, count).map((item) => (
        <div className="item" key={item}>
          {item}
        </div>
      ))}
      {loading && <div style={{ paddingBottom: "20px" }}>Loading...</div>}
    </div>
  );
};

export default InfiniteScrollingPage;
