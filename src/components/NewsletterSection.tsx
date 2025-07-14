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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive exclusive updates about United State.",
      });
    }
  };

  return (
    <section className="py-20 px-4 bg-black">
        <div className="container mx-auto max-w-2xl flex flex-col items-center text-center">
        {/* Logo grande */}
        <img src={albatrossLogo} alt="Albatross Interactive" className="w-80 mb-40" />
        {/* Contact */}
        <div className="mb-10">
          <h3 className="text-2xl font-bold mb-2">CONTACT US</h3>
          <div className="text-lg">contact@unitedstategame.com</div>
        </div>
        {/* Newsletter */}
        <div className="mb-8 w-full max-w-md">
          <h3 className="text-xl font-bold mb-4">SIGN UP FOR EXCLUSIVE UPDATES</h3>
          <form className="flex flex-row items-center justify-center gap-0 w-full">
            <input type="email" placeholder="Enter your email address" className="px-4 py-2 rounded-l bg-black/40 text-white border border-white/20 w-full min-w-[300px]" />
            <button type="submit" className="h-12 bg-gray-300 text-black rounded-r font-bold text-lg border border-white/20 w-24 -ml-1">SIGN UP</button>
          </form>
        </div>
        {/* Social Icons */}
        <div className="mb-8">
          <div className="mb-4 font-semibold">FOLLOW US</div>
          <div className="flex justify-center items-center gap-6">
            <img src={tiktokIcon} alt="TikTok" className="w-12 h-12" />
            <img src={instagramIcon} alt="Instagram" className="w-12 h-12" />
            <img src={discordIcon} alt="Discord" className="w-12 h-12" />
            <img src={xIcon} alt="X" className="w-12 h-12" />
            <img src={youtubeIcon} alt="YouTube" className="w-12 h-12" />
            <img src={steamIcon} alt="Steam" className="w-12 h-12" />
          </div>
        </div>
        {/* Copyright */}
        <div className="text-lg mb-4 mt-8">
          © 2025 ALBATROSS INTERACTIVE LLC, All rights reserved.
        </div>
        {/* United State Logo */}
        <img src={unitedStateLogo} alt="United State" className="w-96 mt-2 mb-2" />
      </div>
    </section>
  );
};

export default NewsletterSection;