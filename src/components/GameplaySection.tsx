import React, { useState, useRef } from 'react';
import mainBg2 from '@/assets/02b5992d-b5fa-4f13-b030-1facdfe4ca33-1.jpg';
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp';

const GameplaySection = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [showMagnifier, setShowMagnifier] = useState(false);
  const imgRef = useRef(null);

  const magnifierSize = 200;
  const zoom = 2;

  const handleMouseMove = (e) => {
    const { top, left } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    setPosition({ x, y });
  };

  return (
    <section
      id="gameplay-section"
      className="fade-bg flex items-center justify-center px-4"
      style={{
        width: '100vw',
        height: '100vh',
        backgroundImage: `url(${mainBg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center -160px', // Subimos el fondo
        backgroundRepeat: 'no-repeat',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className="relative flex items-center justify-center"
        style={{
          width: '100%',
          height: '100%',
          position: 'relative',
        }}
      >
        <img
          src={map}
          alt="Mapa"
          ref={imgRef}
          onMouseEnter={() => setShowMagnifier(true)}
          onMouseLeave={() => setShowMagnifier(false)}
          onMouseMove={handleMouseMove}
          onTouchStart={() => setShowMagnifier(true)}
          onTouchEnd={() => setShowMagnifier(false)}
          onTouchMove={(e) => {
            const touch = e.touches[0];
            const { top, left } = imgRef.current.getBoundingClientRect();
            const x = touch.clientX - left;
            const y = touch.clientY - top;
            setPosition({ x, y });
          }}
          style={{
            width: '100%',
            height: 'auto',
            maxWidth: '1200px',
            maxHeight: '900px',
            objectFit: 'cover',
            display: 'block',
          }}
        />

        {showMagnifier && (
          <div
            style={{
              position: 'absolute',
              top: `${position.y - magnifierSize / 3}px`,
              left: `${position.x - magnifierSize / 3}px`,
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              borderRadius: '50%',
              border: '2px solid white',
              backgroundImage: `url(${map})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: `${imgRef.current?.width * zoom}px ${imgRef.current?.height * zoom}px`,
              backgroundPosition: `-${position.x * zoom - magnifierSize / 2}px -${
                position.y * zoom - magnifierSize / 2
              }px`,
              pointerEvents: 'none',
              zIndex: 10,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default GameplaySection;
