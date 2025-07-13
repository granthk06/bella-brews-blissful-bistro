
import { Award, Heart, Users } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1493857671505-72967e2e2760?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Bella Brew's Interior"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-amber-100 p-6 rounded-xl shadow-lg">
              <Coffee className="h-8 w-8 text-amber-600 mb-2" />
              <p className="text-sm font-semibold text-gray-800">Est. 2018</p>
            </div>
          </div>
          
          {/* Content Side */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Story
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              At Bella Brew's, we believe that great coffee is more than just a beverage—it's a moment of connection, creativity, and comfort. Founded in 2018 by coffee enthusiasts Maria and Carlos, our cafe has become a beloved gathering place in the heart of the city.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We source our beans directly from sustainable farms around the world, ensuring every cup not only tastes exceptional but also supports the communities that grow our coffee.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-6">
              <div className="text-center">
                <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">15+</p>
                <p className="text-sm text-gray-600">Awards Won</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">50K+</p>
                <p className="text-sm text-gray-600">Happy Customers</p>
              </div>
              <div className="text-center">
                <Heart className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                <p className="text-2xl font-bold text-gray-900">100%</p>
                <p className="text-sm text-gray-600">Organic Beans</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
