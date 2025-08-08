import React, { useRef, useState } from 'react';
import mainBg2 from '@/assets/02b5992d-b5fa-4f13-b030-1facdfe4ca33-1.jpg';
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp';

const GameplaySection = () => {
  const wrapperRef = useRef(null);
  const imgRef = useRef(null);
  const rafRef = useRef(null);

  const [showMagnifier, setShowMagnifier] = useState(false);
  const [displayPos, setDisplayPos] = useState({ x: 0, y: 0 }); // pos en el wrapper (px) para top/left
  const [imgPos, setImgPos] = useState({ x: 0, y: 0 }); // pos relativa a la imagen (px) para background
  const [showModal, setShowModal] = useState(false);

  const magnifierSize = 220;
  const zoom = 3;

  const isMobile =
    typeof window !== 'undefined' && window.matchMedia('(max-width: 768px)').matches;

  const handleMouseMove = (e) => {
    if (isMobile) return;
    // cancel previous rAF
    if (rafRef.current) cancelAnimationFrame(rafRef.current);

    rafRef.current = requestAnimationFrame(() => {
      if (!imgRef.current || !wrapperRef.current) return;

      const imgRect = imgRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();

      // coordenadas relativas a la imagen (útiles para calcular background-position)
      const imgX = e.clientX - imgRect.left;
      const imgY = e.clientY - imgRect.top;

      // coordenadas para posicionar la lupa dentro del wrapper (top/left)
      // esto permite que el overlay se coloque exactamente donde está el cursor visible
      const displayX = e.clientX - wrapperRect.left;
      const displayY = e.clientY - wrapperRect.top;

      setImgPos({ x: imgX, y: imgY });
      setDisplayPos({ x: displayX, y: displayY });
    });
  };

  // limpiar RAF al desmontar
  React.useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
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
          onMouseEnter={() => !isMobile && setShowMagnifier(true)}
          onMouseLeave={() => !isMobile && setShowMagnifier(false)}
          onMouseMove={handleMouseMove}
          onClick={() => {
            if (isMobile) setShowModal(true);
          }}
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

        {/* Modal para móviles */}
        {isMobile && showModal && (
          <div className="fixed inset-0 bg-black/95 flex items-center justify-center z-50 p-0" onClick={() => setShowModal(false)}>
            <img
              src={map}
              alt="Mapa grande"
              className="rounded-lg shadow-2xl"
              style={{
                width: '100vw',
                height: '100vh',
                objectFit: 'contain',
                maxWidth: '100vw',
                maxHeight: '100vh',
                margin: 0,
                padding: 0,
                display: 'block',
                background: 'black',
              }}
            />
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold bg-black/60 rounded-full px-3 py-1"
              onClick={e => { e.stopPropagation(); setShowModal(false); }}
              aria-label="Cerrar"
            >
              ×
            </button>
          </div>
        )}

        {!isMobile && showMagnifier && imgRef.current && (
          <div
            aria-hidden
            style={{
              position: 'absolute',
              // colocamos la lupa en el wrapper usando displayPos (mismas coordenadas de referencia)
              top: `${displayPos.y}px`,
              left: `${displayPos.x}px`,
              width: `${magnifierSize}px`,
              height: `${magnifierSize}px`,
              borderRadius: '50%',
              border: '2px solid white',
              boxShadow: '0 2px 8px rgba(0,0,0,0.3)',
              transform: 'translate(-50%, -50%)', // centra exactamente la lupa en el punto del cursor
              pointerEvents: 'none',
              zIndex: 50,
              backgroundImage: `url(${map})`,
              backgroundRepeat: 'no-repeat',
              // backgroundSize: dimensiones mostradas * zoom
              backgroundSize: `${imgRef.current.getBoundingClientRect().width * zoom}px ${imgRef.current.getBoundingClientRect().height * zoom}px`,
              // backgroundPosition: colocar el punto imgPos.x,imgPos.y en el centro de la lupa
              backgroundPosition: `${-(imgPos.x * zoom - magnifierSize / 2)}px ${-(imgPos.y * zoom - magnifierSize / 2)}px`,
            }}
          />
        )}
      </div>
    </section>
  );
};

export default GameplaySection;
