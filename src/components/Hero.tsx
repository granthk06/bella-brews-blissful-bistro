
import { Coffee, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Hero = () => {
  const scrollToReservation = () => {
    document.getElementById('reservation')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 animate-fade-in">
        <div className="mb-6 animate-scale-in">
          <Coffee className="mx-auto mb-4 h-16 w-16 text-amber-300" />
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Bella Brew's
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed">
          Where every cup tells a story of passion, quality, and the perfect blend
        </p>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm md:text-base">
          <div className="flex items-center gap-2">
            <MapPin className="h-5 w-5 text-amber-300" />
            <span>Downtown Coffee District</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-5 w-5 text-amber-300" />
            <span>Open 6AM - 10PM</span>
          </div>
        </div>
        
        <Button 
          onClick={scrollToReservation}
          className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg"
        >
          Reserve Your Table
        </Button>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-amber-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-32 right-16 w-16 h-16 bg-amber-400 rounded-full opacity-30 animate-pulse delay-1000"></div>
    </section>
  );
};
