import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameplaySection from '@/components/GameplaySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <GameplaySection />
      <NewsletterSection />
      <Footer />
    </div>
  );
};

export default Index;
