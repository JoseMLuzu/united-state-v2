import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/60 to-background/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <h1 className="title-distressed text-6xl md:text-8xl lg:text-9xl font-black text-primary mb-6 animate-fade-in">
          <span className="block tracking-wider">UNITED</span>
          <span className="block tracking-wider">STATE</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
          4v4 Competitive 3rd-Person Shooter
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-scale-in">
          <Button size="lg" className="btn-gaming text-lg px-8 py-3">
            WISHLIST NOW
          </Button>
          <Button size="lg" variant="outline" className="btn-outline-gaming text-lg px-8 py-3">
            <ExternalLink className="w-5 h-5 mr-2" />
            JOIN OUR DISCORD
          </Button>
        </div>

        {/* Platform Icons */}
        <div className="flex justify-center items-center space-x-8 opacity-80">
          {/* PlayStation */}
          <div className="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M8.985 2.596v17.548l3.915 1.261V6.688c0-.69.304-1.153.78-1.153.398 0 .74.342.74.78v14.077l3.945 1.245V5.502c0-1.946-.154-2.735-.533-3.347-.456-.732-1.265-1.014-2.32-1.014-1.006 0-1.896.256-3.058.763L8.985 2.596zM18.037 22.024c1.092 0 1.86-.297 2.316-.762.38-.387.562-.914.562-1.604v-3.062l-3.916 1.247v2.405c0 .456-.228.76-.608.76-.304 0-.532-.228-.532-.532V9.619l-3.915-1.223v11.108c0 .987.228 1.794.684 2.298.456.532 1.193.76 2.09.76l3.319-1.538zM4.096 16.981c.608 0 1.14-.304 1.52-.836.38-.532.57-1.3.57-2.298V3.832L2.27 2.596v11.566c0 .987.228 1.794.684 2.298.456.504 1.14.76 2.09.76l.532-.608c-.76-.456-1.368-1.283-1.368-2.631V5.502l1.888.76v8.017c0 1.223-.342 2.051-.912 2.583-.57.532-1.368.836-2.09.836-.722 0-1.52-.304-2.09-.836V19.24c.608.608 1.52.912 2.51.912z"/>
            </svg>
          </div>

          {/* Xbox */}
          <div className="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M4.102 21.033A11.956 11.956 0 0012 24c2.975 0 5.683-1.08 7.898-2.967-1.505-2.649-4.375-4.482-7.898-4.482s-6.393 1.833-7.898 4.482zM2.967 19.898A11.956 11.956 0 010 12c0-2.975 1.08-5.683 2.967-7.898 2.649 1.505 4.482 4.375 4.482 7.898s-1.833 6.393-4.482 7.898zM21.033 19.898C19.528 17.25 16.658 15.417 13.135 15.417s-6.393 1.833-7.898 4.482A11.956 11.956 0 0024 12c0-2.975-1.08-5.683-2.967-7.898z"/>
            </svg>
          </div>

          {/* Steam */}
          <div className="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M11.979 0C5.678 0 0.511 4.86 0.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142s0-.008 0-.012c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4h-.1l-4.061 2.9c0 .052.002.104.002.156 0 1.828-1.472 3.3-3.3 3.3s-3.3-1.472-3.3-3.3c0-.085.006-.168.014-.25L.123 11.799C.439 18.363 5.754 23.7 12.247 23.7c6.624 0 12-5.376 12-12s-5.376-12-12-12z"/>
            </svg>
          </div>

          {/* Epic Games */}
          <div className="platform-icon">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6 12c0 3.314-2.686 6-6 6s-6-2.686-6-6 2.686-6 6-6 6 2.686 6 6z"/>
            </svg>
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