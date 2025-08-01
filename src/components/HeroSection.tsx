import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroBg from '@/assets/Faded_Image.jpg';
import principalIcon from '@/assets/main-title-transparent-V3-no-gradient-for-dark-background2-e1742786470534.png';
import discordIcon from '@/assets/discord.png'; //
import steamIcon from '@/assets/steam1.png'; // Assuming you have a Steam icon

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
      <div className="relative z-10 text-center px-0 max-w-6xl mx-auto animate-fade-in">
        {/* Main Title */}
        <img src={principalIcon} alt="Main Title" className="mx-auto max-w-full h-auto mb-0 mt-0 animate-fade-in" />

        {/* Subtitle */}
        <blockquote className="italic text-xl md:text-2xl text-white mt-0 mb-2 animate-fade-up" style={{ fontFamily: 'OCR A, monospace' }}>
          “one country, three flags”
        </blockquote>
        <p className="text-xl md:text-2xl text-white mt-0 mb-0 animate-fade-up" style={{ fontFamily: 'OCR A, monospace' }}>
          4v4 Competitive 3rd-Person Shooter
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col space-y-2 mt-0 buttonsSection">
          <a href="https://discord.com/invite/k3KyYGtvD8" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-none px-4 py-3 transition-colors duration-200 flex items-center justify-between w-56 mx-auto btn-animate-scale" >
              <span className="flex-1 text-left">JOIN OUR DISCORD</span>
              <img src={discordIcon} alt="Discord" className="w-6 h-6 ml-4" />
            </Button>
          </a>
          {/*
          <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-none px-4 py-3 transition-colors duration-200 flex items-center justify-between w-56 mx-auto btn-animate-scale">
            <span className="flex-1 text-left">WISHLIST NOW</span>
            <img src={steamIcon} alt="Steam" className="w-6 h-6 ml-4" />
          </Button>
          */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;