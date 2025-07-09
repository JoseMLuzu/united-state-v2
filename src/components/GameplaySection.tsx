import { Card, CardContent } from '@/components/ui/card';
import mainBg2 from '@/assets/02b5992d-b5fa-4f13-b030-1facdfe4ca33-1.jpg'; // Assuming you have a main background image
import map from '@/assets/MAP_JPG-e17429419701611-1-scaled.webp'; // Assuming you have a map image

const GameplaySection = () => {
  return (
    <section
      id="gameplay-section"
      className="flex items-center justify-center min-h-[120vh] bg-black"
      style={{
        backgroundImage: `url(${mainBg2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <img
        src={map}
        alt="Game Map"
        className="w-full h-full object-cover max-w-none max-h-none rounded-lg shadow-lg"
        style={{ minHeight: '80vh', minWidth: '80vw' }}
      />
    </section>
  );
};

export default GameplaySection;