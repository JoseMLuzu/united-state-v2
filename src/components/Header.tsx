import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, ExternalLink, Mail } from 'lucide-react';
import mainIcon from '@/assets/Albatross_Interactive_Logo-1.png'; // Assuming you have a main icon
import tiktokIcon from '@/assets/icons8-tiktok-50.png'; // Assuming you have a TikTok icon
import instagramIcon from '@/assets/instagram-white-icon1.png'; // Assuming you have an Instagram icon
import xIcon from '@/assets/X.png'; // Assuming you have an X icon
import youtubeIcon from '@/assets/youtube.png'; // Assuming you have a YouTube icon
import discordIcon from '@/assets/discord.png'; //
import principalIcon from '@/assets/main-title-transparent-V3-no-gradient-for-dark-background2-e1742786470534.png'; // Assuming you have a principal icon 
import steamIcon from '@/assets/steam1.png'; // Assuming you have a Steam icon
import emailIcon from '@/assets/icons8-email-64.png'; // Assuming you have an email icon

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    return () => {
      if (typeof window !== 'undefined' && (window as any).fullpage_api) {
        (window as any).fullpage_api.destroy('all');
      }
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent shadow-none">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={mainIcon} alt="Albatross Interactive Logo" className="h-10 sm:h-14 w-auto object-contain" />
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
            <div className="flex items-center space-x-2 sm:space-x-4">
              {/* Social Icons */}
              <a href="https://www.tiktok.com/@unitedstate_game" className="flex items-center social-icon" target="_blank" rel="noopener noreferrer">
                <img src={tiktokIcon} alt="TikTok" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.instagram.com/unitedstategame/" className="flex items-center social-icon" target="_blank" rel="noopener noreferrer">
                <img src={instagramIcon} alt="Instagram" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://x.com/UnitedStateGame" className="flex items-center social-icon" target="_blank" rel="noopener noreferrer">
                <img src={xIcon} alt="X" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://www.youtube.com/@UnitedStateGame" className="flex items-center social-icon" target="_blank" rel="noopener noreferrer">
                <img src={youtubeIcon} alt="YouTube" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
              <a href="https://discord.com/invite/k3KyYGtvD8" className="flex items-center social-icon" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} alt="Discord" className="w-6 h-6 sm:w-8 sm:h-8 object-contain" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          {/*
          <button
            className="md:hidden text-primary ml-8"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          */}
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-card/95 backdrop-blur-md">
            <div className="px-4 py-6 space-y-4">
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-none px-4 py-3 transition-colors duration-200 flex items-center justify-between w-full">
                <span className="flex-1 text-left">JOIN OUR DISCORD</span>
                <img src={discordIcon} alt="Discord" className="w-6 h-6 ml-4" />
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/10 rounded-none px-4 py-3 transition-colors duration-200 flex items-center justify-between w-full">
                <span className="flex-1 text-left">WISHLIST NOW</span>
                <img src={steamIcon} alt="Steam" className="w-6 h-6 ml-4" />
              </Button>
              
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;