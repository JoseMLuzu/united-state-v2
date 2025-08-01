import React, { useState, useRef } from "react";
import map from "@/assets/MAP_JPG-e17429419701611-1-scaled.webp";

const Magnifier = () => {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [magnifierPosition, setMagnifierPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const { top, left, width, height } = imgRef.current.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    setMagnifierPosition({ x, y });
  };

  return (
    <div
      style={{ position: "relative", width: "100%", margin: "0 auto" }}
      onMouseEnter={() => setShowMagnifier(true)}
      onMouseLeave={() => setShowMagnifier(false)}
      onMouseMove={handleMouseMove}
    >
      <img
        ref={imgRef}
        src={map}
        alt="Mapa"
        style={{ width: "100%", display: "block" }}
      />

      {showMagnifier && (
        <div
          style={{
            position: "absolute",
            pointerEvents: "none",
            top: `${magnifierPosition.y - 75}px`,
            left: `${magnifierPosition.x - 75}px`,
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            boxShadow: "0 0 8px rgba(0,0,0,0.4)",
            backgroundImage: `url(${map})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: `${imgRef.current.width * 2}px auto`,
            backgroundPosition: `-${magnifierPosition.x * 2 - 75}px -${magnifierPosition.y * 2 - 75}px`,
            border: "2px solid white",
            zIndex: 10,
          }}
        />
      )}
    </div>
  );
};

export default Magnifier;
