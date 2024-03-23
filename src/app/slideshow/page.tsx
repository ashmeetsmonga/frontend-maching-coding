"use client";
import React, { useState } from "react";
import "./slideshow.css";

const images = ["img-01", "img-02", "img-03", "img-04", "img-05", "img-06"];

const Slideshow = () => {
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);

  return (
    <div className="container">
      <div className="selected-image-container">
        <div className="navigation-item" onClick={() => setSelectedImageIdx((prev) => (prev > 0 ? prev - 1 : images.length - 1))}>
          &lt;
        </div>
        {images.map((image, idx) => (
          <img className={selectedImageIdx === idx ? "show" : "hide"} key={image} src={`/images/${image}.jpg`} alt="Image" onClick={() => setSelectedImageIdx(idx)} />
        ))}
        <div className="navigation-item" onClick={() => setSelectedImageIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}>
          &gt;
        </div>
      </div>
      <div className="images-container">
        {images.map((image, idx) => (
          <img className={selectedImageIdx === idx ? "highlight" : ""} key={image} src={`/images/${image}.jpg`} alt="Image" onClick={() => setSelectedImageIdx(idx)} />
        ))}
      </div>
    </div>
  );
};

export default Slideshow;
