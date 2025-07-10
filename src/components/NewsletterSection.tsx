import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

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
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-primary">Stay Updated</h2>
        

        <Card className="max-w-md mx-auto bg-card/50 backdrop-blur-sm">
          <CardContent className="p-6">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
                <Button type="submit" className="w-full btn-gaming">
                  SIGN UP FOR UPDATES
                </Button>
              </form>
            ) : (
              <div className="text-center py-4">
                <CheckCircle className="w-12 h-12 text-gaming-success mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-primary mb-2">You're all set!</h3>
                <p className="text-muted-foreground">Thanks for subscribing to our newsletter.</p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <h3 className="text-xl font-semibold mb-4 text-primary">Contact Us</h3>
          <a 
            href="mailto:contact@unitedstategame.com" 
            className="text-gaming-primary hover:text-gaming-primary/80 transition-colors duration-300 text-lg"
          >
            contact@unitedstategame.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;