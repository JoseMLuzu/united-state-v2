import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroBg from '@/assets/Faded_Image.jpg';
import principalIcon from '@/assets/main-title-transparent-V3-no-gradient-for-dark-background2-e1742786470534.png';
import psIcon from '@/assets/play-station.png';
import xboxIcon from '@/assets/xbox-1.png';
import steamIcon from '@/assets/steam1.png';
import epicIcon from '@/assets/epic-1.png';

// Ajusta la altura de la navbar aquí si cambia en el futuro
const NAVBAR_HEIGHT = 72; // px, ajusta si tu navbar es más alta o baja

const HeroSection = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden p-0 m-0"
      style={{
        marginTop: 0,
        paddingTop: 0,
        marginBottom: 0,
        paddingBottom: 0,
      }}
    >
      {/* Background Image extends visually behind navbar, but no margin/padding/top manipulation */}
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBg})`,
          zIndex: 0,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-0 max-w-6xl mx-auto">
        {/* Main Title */}
        <img src={principalIcon} alt="Main Title" className="mx-auto max-w-full h-auto mb-0 mt-0 animate-fade-in" />

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white mt-0 mb-0 animate-fade-in">
          4v4 Competitive 3rd-Person Shooter
        </p>

        {/* Platform Icons */}
        <div className="flex justify-center items-center space-x-8 opacity-80 mt-10 mb-0">
          {/* PlayStation */}
          <div className="platform-icon">
            <img src={psIcon} alt="PlayStation" className="object-contain" style={{ maxWidth: '50px', maxHeight: '50px', width: '100%', height: '100%' }} />
          </div>
          {/* Xbox */}
          <div className="platform-icon">
            <img src={xboxIcon} alt="Xbox" className="object-contain" style={{ maxWidth: '50px', maxHeight: '50px', width: '100%', height: '100%' }} />
          </div>
          {/* Steam */}
          <div className="platform-icon">
            <img src={steamIcon} alt="Steam" className="object-contain" style={{ maxWidth: '50px', maxHeight: '50px', width: '100%', height: '100%' }} />
          </div>
          {/* Epic Games */}
          <div className="platform-icon">
            <img src={epicIcon} alt="Epic Games" className="object-contain" style={{ maxWidth: '50px', maxHeight: '50px', width: '100%', height: '100%' }} />
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;