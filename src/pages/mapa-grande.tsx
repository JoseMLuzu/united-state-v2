import React from 'react';
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp';

const MapaGrande = () => {
  return (
    <div
      className="flex items-center justify-center min-h-screen bg-black"
      style={{ width: '100vw', height: '100vh', overflow: 'auto' }}
    >
      <img
        src={map}
        alt="Mapa grande"
        style={{
          width: '100%',
          maxWidth: '1800px',
          height: 'auto',
          borderRadius: '12px',
          boxShadow: '0 4px 32px rgba(0,0,0,0.7)',
        }}
      />
    </div>
  );
};

export default MapaGrande;
