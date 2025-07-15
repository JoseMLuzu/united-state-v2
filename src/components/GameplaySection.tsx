import { useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import mainBg2 from '@/assets/02b5992d-b5fa-4f13-b030-1facdfe4ca33-1.jpg'; // Assuming you have a main background image
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp'; // Assuming you have a map image

const GameplaySection = () => {
  const imgRef = useRef(null);

  return (
    <section
      id="gameplay-section"
      className="flex items-center justify-center min-h-[100vh] bg-black"
      style={{
        backgroundImage: `url(${mainBg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="w-full flex justify-center items-center">
        <div className="w-full max-w-[90vw] max-h-[90vh] relative" style={{ position: 'relative' }}>
          <img
            ref={imgRef}
            src={map}
            alt="Game Map"
            className="rounded-lg shadow-lg w-full"
            style={{ display: 'block', maxHeight: '90vh', minHeight: '40vh', minWidth: '40vw' }}
            onError={() => alert('No se pudo cargar la imagen del mapa.')}
          />
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;