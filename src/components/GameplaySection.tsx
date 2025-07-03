import { Card, CardContent } from '@/components/ui/card';

const GameplaySection = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        {/* Game Screenshots/Media Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {/* Main Screenshot */}
          <Card className="lg:col-span-2 lg:row-span-2 group overflow-hidden">
            <CardContent className="p-0 relative h-80 lg:h-full">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-muted rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold mb-2">Tactical Combat</h3>
                  <p className="text-sm opacity-90">Experience intense 4v4 battles in dynamic environments</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          {/* Secondary Screenshots */}
          <Card className="group overflow-hidden">
            <CardContent className="p-0 relative h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-secondary/20 to-secondary rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="font-semibold text-sm">Weapons</h4>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <CardContent className="p-0 relative h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-danger/20 to-secondary rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="font-semibold text-sm">Maps</h4>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>

          <Card className="group overflow-hidden">
            <CardContent className="p-0 relative h-40">
              <div className="absolute inset-0 bg-gradient-to-br from-gaming-success/20 to-secondary rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                <div className="absolute bottom-2 left-2 text-white">
                  <h4 className="font-semibold text-sm">Characters</h4>
                </div>
              </div>
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </CardContent>
          </Card>
        </div>

        {/* Game Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center group">
            <div className="w-16 h-16 bg-gaming-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gaming-primary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-gaming-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Fast-Paced Action</h3>
            <p className="text-muted-foreground">Experience lightning-fast tactical combat with precise gunplay and strategic teamwork</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gaming-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gaming-secondary/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-gaming-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Team-Based</h3>
            <p className="text-muted-foreground">Coordinate with your squad in intense 4v4 matches that demand teamwork and strategy</p>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 bg-gaming-danger/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-gaming-danger/20 transition-colors duration-300">
              <svg className="w-8 h-8 text-gaming-danger" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-2 text-primary">Competitive</h3>
            <p className="text-muted-foreground">Climb the ranks in a skill-based matchmaking system designed for competitive play</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GameplaySection;