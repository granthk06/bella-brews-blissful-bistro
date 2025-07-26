
import { X, Minus, Plus, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/components/CartContext';

export const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
    isCartOpen,
    setIsCartOpen,
  } = useCart();

  if (!isCartOpen) return null;

  const handleCheckout = () => {
    alert('Checkout functionality would be implemented with your preferred payment provider!');
  };

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Cart Panel */}
      <div className="relative ml-auto bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
        {/* Header */}
        <div className="p-6 border-b">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Your Cart</h2>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsCartOpen(false)}
            >
              <X className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Cart Items */}
        <div className="flex-1 p-6">
          {cartItems.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Your cart is empty</p>
              <p className="text-gray-400 mt-2">Add some delicious items to get started!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex items-center space-x-4 bg-gray-50 rounded-lg p-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{item.name}</h3>
                    <p className="text-amber-600 font-bold">₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="w-8 text-center font-semibold">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500 hover:text-red-700 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center text-xl font-bold">
              <span>Total:</span>
              <span className="text-amber-600">₹{total.toFixed(2)}</span>
            </div>
            <div className="space-y-2">
              <Button
                onClick={handleCheckout}
                className="w-full bg-amber-600 hover:bg-amber-700 text-white py-3"
              >
                <CreditCard className="h-5 w-5 mr-2" />
                Checkout
              </Button>
              <Button
                variant="outline"
                onClick={clearCart}
                className="w-full"
              >
                Clear Cart
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
