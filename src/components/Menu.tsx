
import { useState } from 'react';
import { Plus, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useCart } from '@/components/CartContext';

const menuData = {
  coffee: [
    {
      id: 'espresso',
      name: 'Classic Espresso',
      price: 3.50,
      description: 'Rich, bold shot of our signature blend',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cappuccino',
      name: 'Cappuccino',
      price: 4.75,
      description: 'Perfect balance of espresso, steamed milk, and foam',
      image: 'https://images.unsplash.com/photo-1572442388796-11668a67e53d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'latte',
      name: 'Vanilla Latte',
      price: 5.25,
      description: 'Smooth espresso with vanilla and steamed milk',
      image: 'https://images.unsplash.com/photo-1561882468-9110e03e0f78?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'cold-brew',
      name: 'Cold Brew',
      price: 4.25,
      description: 'Smooth, less acidic coffee brewed cold for 12 hours',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  pastries: [
    {
      id: 'croissant',
      name: 'Butter Croissant',
      price: 3.25,
      description: 'Flaky, buttery pastry baked fresh daily',
      image: 'https://images.unsplash.com/photo-1555507036-ab794f4fe65f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'muffin',
      name: 'Blueberry Muffin',
      price: 4.50,
      description: 'Moist muffin packed with fresh blueberries',
      image: 'https://images.unsplash.com/photo-1607958996333-41aef7caefaa?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'danish',
      name: 'Almond Danish',
      price: 4.75,
      description: 'Sweet pastry with almond filling and glaze',
      image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ],
  sandwiches: [
    {
      id: 'avocado-toast',
      name: 'Avocado Toast',
      price: 8.75,
      description: 'Smashed avocado on sourdough with tomato and feta',
      image: 'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'grilled-cheese',
      name: 'Grilled Cheese',
      price: 7.25,
      description: 'Three cheese blend on artisan bread',
      image: 'https://images.unsplash.com/photo-1528736235302-52922df5c122?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      id: 'turkey-club',
      name: 'Turkey Club',
      price: 11.50,
      description: 'Roasted turkey, bacon, lettuce, tomato on sourdough',
      image: 'https://images.unsplash.com/photo-1553909489-cd47e0ef937f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ]
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('coffee');
  const { addToCart, setIsCartOpen, itemCount } = useCart();

  const categories = [
    { id: 'coffee', name: 'Coffee', icon: '☕' },
    { id: 'pastries', name: 'Pastries', icon: '🥐' },
    { id: 'sandwiches', name: 'Sandwiches', icon: '🥪' }
  ];

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: activeCategory
    });
  };

  return (
    <section id="menu" className="py-20 bg-amber-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Menu
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Carefully crafted beverages and fresh food made with the finest ingredients
          </p>
        </div>

        {/* Cart Button */}
        <div className="fixed top-4 right-4 z-50">
          <Button
            onClick={() => setIsCartOpen(true)}
            className="bg-amber-600 hover:bg-amber-700 text-white rounded-full p-3 shadow-lg relative"
          >
            <ShoppingCart className="h-6 w-6" />
            {itemCount > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-red-500 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
                {itemCount}
              </Badge>
            )}
          </Button>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full p-2 shadow-lg">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-amber-600 text-white shadow-md'
                    : 'text-gray-600 hover:text-amber-600'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Menu Items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menuData[activeCategory as keyof typeof menuData].map((item) => (
            <Card key={item.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-white rounded-full px-3 py-1 shadow-md">
                  <span className="font-bold text-amber-600">${item.price.toFixed(2)}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <Button
                  onClick={() => handleAddToCart(item)}
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
