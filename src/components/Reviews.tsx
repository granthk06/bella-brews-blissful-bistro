
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    id: 1,
    name: 'Sarah Johnson',
    rating: 5,
    comment: 'Absolutely love this place! The atmosphere is cozy and the coffee is exceptional. Their vanilla latte is my go-to order.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b1c5?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 2,
    name: 'Michael Chen',
    rating: 5,
    comment: 'Best coffee shop in the city! The staff is friendly and knowledgeable. I come here every morning before work.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    rating: 5,
    comment: 'Perfect spot for studying or meeting friends. Great wifi, comfortable seating, and amazing pastries!',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  },
  {
    id: 4,
    name: 'David Thompson',
    rating: 5,
    comment: 'The attention to detail here is incredible. From the coffee brewing to the latte art, everything is perfect.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80'
  }
];

export const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Customers Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-6 w-6 fill-amber-400 text-amber-400" />
            ))}
            <span className="text-lg font-semibold text-gray-700 ml-2">4.9/5 Rating</span>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Over 1,000 five-star reviews from our amazing community
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="h-8 w-8 text-amber-400 mb-2" />
                </div>
                
                <div className="flex items-center mb-3">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {review.comment}
                </p>
                
                <div className="flex items-center">
                  <img 
                    src={review.image} 
                    alt={review.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <p className="font-semibold text-gray-900">{review.name}</p>
                    <p className="text-sm text-gray-500">Verified Customer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-amber-50 rounded-2xl p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-amber-600">4.9</p>
              <p className="text-gray-600">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">1000+</p>
              <p className="text-gray-600">Happy Reviews</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">50K+</p>
              <p className="text-gray-600">Cups Served</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-amber-600">5</p>
              <p className="text-gray-600">Years of Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
