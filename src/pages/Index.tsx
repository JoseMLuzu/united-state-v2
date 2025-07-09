import { useEffect } from 'react';
import fullpage from 'fullpage.js';
import 'fullpage.js/dist/fullpage.css';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import GameplaySection from '@/components/GameplaySection';
import NewsletterSection from '@/components/NewsletterSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    if (typeof window !== 'undefined' && (window as any).fullpage_api) {
      (window as any).fullpage_api.destroy('all');
    }
    if (typeof window !== 'undefined') {
      // @ts-ignore
      new (fullpage as any)('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: false,
        navigation: false,
        anchors: ['hero', 'gameplay', 'newsletter', 'footer'],
        sectionSelector: '.section',
        fitToSection: true,
        scrollingSpeed: 700,
        credits: { enabled: false },
      });
    }
    return () => {
      if (typeof window !== 'undefined' && (window as any).fullpage_api) {
        (window as any).fullpage_api.destroy('all');
      }
    };
  }, []);

  return (
    <>
      <Header />
      <div id="fullpage">
        <div className="section"><HeroSection /></div>
        <div className="section"><GameplaySection /></div>
        <div className="section"><NewsletterSection /></div>
      </div>
      {/* <Footer /> */}
      <style>{`
        .fp-watermark { display: none !important; }
        html, body, #root, #fullpage {
          height: 100%;
          min-height: 100vh;
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        body {
          overflow-x: hidden;
        }
      `}</style>
    </>
  );
};

export default Index;
