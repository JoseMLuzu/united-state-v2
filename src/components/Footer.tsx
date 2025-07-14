import albatrossLogo from '@/assets/Albatross_Interactive_Logo-1.png';
import unitedStateLogo from '@/assets/main-title-transparent-V3-no-gradient-for-dark-background2-e1742786470534.png';
import tiktokIcon from '@/assets/icons8-tiktok-50.png';
import instagramIcon from '@/assets/instagram-white-icon1.png';
import discordIcon from '@/assets/discord.png';
import xIcon from '@/assets/X.png';
import youtubeIcon from '@/assets/youtube.png';
import steamIcon from '@/assets/steam1.png';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white pt-10 pb-0 border-none" style={{marginBottom: 0, paddingBottom: 0, border: 'none'}}>
      <div className="flex flex-col items-center w-full max-w-2xl mx-auto">
        {/* Albatross Logo */}
        <img src={albatrossLogo} alt="Albatross Interactive" className="w-40 mb-6" />
        {/* Contact */}
        <div className="text-center mb-2">
          <div className="text-lg font-semibold">CONTACT US</div>
          <div className="text-base">contact@unitedstategame.com</div>
        </div>
        {/* Newsletter */}
        <div className="text-center mb-4">
          <div className="text-lg font-semibold">SIGN UP FOR EXCLUSIVE UPDATES</div>
          <form className="flex flex-col sm:flex-row items-center justify-center mt-2 gap-2 w-full max-w-md mx-auto">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded bg-black/40 text-white border border-white/20 w-full sm:w-64" />
            <button type="submit" className="px-6 py-2 bg-gray-300 text-black rounded font-semibold">SIGN UP</button>
          </form>
        </div>
        {/* Social Icons */}
        <div className="text-center mb-4">
          <div className="mb-2 font-semibold">FOLLOW US</div>
          <div className="flex justify-center items-center gap-6">
            {/* TikTok */}
            <img src={tiktokIcon} alt="TikTok" className="w-8 h-8" />
            {/* Instagram */}
            <img src={instagramIcon} alt="Instagram" className="w-8 h-8" />
            {/* Discord */}
            <img src={discordIcon} alt="Discord" className="w-8 h-8" />
            {/* X */}
            <img src={xIcon} alt="X" className="w-8 h-8" />
            {/* YouTube */}
            <img src={youtubeIcon} alt="YouTube" className="w-8 h-8" />
            {/* Steam */}
            <img src={steamIcon} alt="Steam" className="w-8 h-8" />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-center text-xs mb-2 mt-2">
          © 2025 ALBATROSS INTERACTIVE LLC, All rights reserved.
        </div>
        {/* United State Logo */}
        <img src={unitedStateLogo} alt="United State" className="w-48 mt-2 mb-2" />
      </div>
    </footer>
  );
};

export default Footer;