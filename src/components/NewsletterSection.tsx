import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import albatrossLogo from '@/assets/Albatross_Interactive_Logo-1.png';
import unitedStateLogo from '@/assets/main-title-transparent-V3-no-gradient-for-dark-background2-e1742786470534.png';
import tiktokIcon from '@/assets/icons8-tiktok-50.png';
import instagramIcon from '@/assets/instagram-white-icon1.png';
import discordIcon from '@/assets/discord.png';
import xIcon from '@/assets/X.png';
import youtubeIcon from '@/assets/youtube.png';
import steamIcon from '@/assets/steam1.png';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      try {
        const response = await fetch('https://formspree.io/f/mjkoevrb', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        });
        if (response.ok) {
          setIsSubscribed(true);
          setEmail('');
          toast({
            title: "Successfully subscribed!",
            description: "You'll receive exclusive updates about United State.",
          });
        } else {
          toast({
            title: "Error subscribing",
            description: "Please try again later.",
            variant: "destructive",
          });
        }
      } catch {
        toast({
          title: "Network error",
          description: "Please check your connection and try again.",
          variant: "destructive",
        });
      }
    }
  };

  return (
    <section className="py-10 px-2 sm:py-16 sm:px-4 bg-black">
      <div className="container mx-auto max-w-full sm:max-w-2xl flex flex-col items-center text-center">
        {/* Logo de Albatross Interactive oculto por solicitud */}
        {false && (
          <img src={albatrossLogo} alt="Albatross Interactive" className="w-40 sm:w-80 mb-10 sm:mb-40" />
        )}
        {/* Contact */}
        <div className="mb-6 sm:mb-10">
          <h3 className="text-lg sm:text-2xl font-bold mb-2">CONTACT US</h3>
          <a
            href="mailto:contact@unitedstategame.com"
            className="text-base sm:text-lg break-all no-underline hover:text-gray-200 transition-colors duration-200"
            style={{ textDecoration: 'none' }}
          >
            contact@unitedstategame.com
          </a>
        </div>
        {/* Newsletter */}
        <div className="mb-6 sm:mb-8 w-full max-w-xs sm:max-w-md">
          <h3 className="text-base sm:text-xl font-bold mb-4">SIGN UP FOR EXCLUSIVE UPDATES</h3>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 w-full">
            <input
              type="email"
              placeholder="Enter your email address"
              className="px-3 py-2 rounded-l bg-black/40 text-white border border-white/20 w-full min-w-[180px] sm:min-w-[300px] focus:outline-none focus:ring-0"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="buttonNs  bg-gray-300 text-black rounded-r font-bold text-base sm:text-lg border border-white/20 w-full sm:w-32 sm:-ml-1 mt-2 sm:mt-0"
              disabled={isSubscribed}
            >
              {isSubscribed ? 'SUBSCRIBED' : 'SIGN UP'}
            </button>
          </form>
        </div>
        {/* Social Icons ocultos por solicitud */}
        {false && (
          <div className="mb-6 sm:mb-8">
            <div className="mb-4 font-semibold">FOLLOW US</div>
            <div className="flex justify-center items-center gap-4 sm:gap-6 flex-wrap">
              <img src={tiktokIcon} alt="TikTok" className="w-8 h-8 sm:w-12 sm:h-12" />
              <img src={instagramIcon} alt="Instagram" className="w-8 h-8 sm:w-12 sm:h-12" />
              <img src={discordIcon} alt="Discord" className="w-8 h-8 sm:w-12 sm:h-12" />
              <img src={xIcon} alt="X" className="w-8 h-8 sm:w-12 sm:h-12" />
              <img src={youtubeIcon} alt="YouTube" className="w-8 h-8 sm:w-12 sm:h-12" />
              <img src={steamIcon} alt="Steam" className="w-8 h-8 sm:w-12 sm:h-12" />
            </div>
          </div>
        )}
        {/* United State Logo oculto por solicitud */}
        {false && (
          <img src={unitedStateLogo} alt="United State" className="w-48 sm:w-96 mt-2 mb-2" />
        )}
      </div>
      <div className="text-base sm:text-lg mb-2 sm:mb-4 text-center px-2" style={{ position: 'absolute', bottom: 32, left: 0, width: '100%' }}>
        © 2025 ALBATROSS INTERACTIVE LLC, All rights reserved.
      </div>
    </section>
  );
};

export default NewsletterSection;