import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import mainBg2 from '@/assets/02b5992d-b5fa-4f13-b030-1facdfe4ca33-1.jpg';
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp';

const GameplaySection = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const rafRef = useRef(null);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 });
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
  const [showMapPopup, setShowMapPopup] = useState(false);

  const magnifierSize = 220;
  const zoom = 3;

  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  const handleMouseMove = (e) => {
    if (isMobile) return;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!imgRef.current || !wrapperRef.current) return;

      const imgRect = imgRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      const imgX = e.clientX - imgRect.left;
      const imgY = e.clientY - imgRect.top;

      const displayX = e.clientX - wrapperRect.left;
      const displayY = e.clientY - wrapperRect.top;

      setImgPos({ x: imgX, y: imgY });
      setDisplayPos({ x: displayX, y: displayY });
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  // Bloqueo de scroll
  useEffect(() => {
    if (isMobile && showMapPopup) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobile, showMapPopup]);

  const popup = (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: 'rgba(0,0,0,0.95)',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <button
        onClick={() => setShowMapPopup(false)}
        style={{
          position: 'absolute',
          top: 24,
          right: 24,
          background: 'rgba(0,0,0,0.7)',
          color: 'white',
          border: 'none',
          borderRadius: '50%',
          width: 40,
          height: 40,
          fontSize: 28,
          zIndex: 100000,
          cursor: 'pointer',
        }}
      >
        ×
      </button>
      <img
        src={map}
        alt="Mapa grande"
        style={{
          width: '100%',
          height: 'auto',
          maxHeight: '90vh',
          objectFit: 'contain',
          borderRadius: 8,
          boxShadow: '0 4px 32px rgba(0,0,0,0.7)',
        }}
      />
    </div>
  );

  return (
    <>
      <section
        id="gameplay-section"
        className="fade-bg flex items-center justify-center px-4"
        style={{
          width: '100vw',
          height: '100vh',
          backgroundImage: `url(${mainBg2})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center -160px',
          backgroundRepeat: 'no-repeat',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          ref={wrapperRef}
          className="relative flex items-center justify-center"
          style={{ width: '100%', height: '100%' }}
        >
          <img
            src={map}
            alt="Mapa"
            ref={imgRef}
            onMouseEnter={() => !isMobile && setShowMagnifier(true)}
            onMouseLeave={() => !isMobile && setShowMagnifier(false)}
            onMouseMove={handleMouseMove}
            onClick={() => isMobile && setShowMapPopup(true)}
            style={{
              width: '100%',
              height: 'auto',
              maxWidth: '1200px',
              maxHeight: '900px',
              objectFit: 'cover',
              display: 'block',
              cursor: isMobile ? 'pointer' : 'none',
            }}
          />
        </div>
      </section>

      {/* Renderizamos popup fuera del flujo usando portal */}
      {isMobile && showMapPopup && ReactDOM.createPortal(popup, document.body)}
    </>
  );
};

export default GameplaySection;
