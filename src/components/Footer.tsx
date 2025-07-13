
import { Coffee, MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Coffee className="h-8 w-8 text-amber-400" />
              <h3 className="text-2xl font-bold">Bella Brew's</h3>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Your favorite coffee destination in Viman Nagar, Pune. Crafting perfect moments, one cup at a time.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-gray-400 hover:text-amber-400 cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-400">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  123 Coffee Street, Viman Nagar<br />
                  Pune, Maharashtra 411014
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <p className="text-gray-400">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <p className="text-gray-400">hello@bellabrews.com</p>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-400">Opening Hours</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400">Mon - Fri: 7:00 AM - 9:00 PM</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-amber-400" />
                <span className="text-gray-400">Sat - Sun: 8:00 AM - 10:00 PM</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-amber-400">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-amber-400 transition-colors">About Us</a>
              <a href="#menu" className="block text-gray-400 hover:text-amber-400 transition-colors">Menu</a>
              <a href="#reviews" className="block text-gray-400 hover:text-amber-400 transition-colors">Reviews</a>
              <a href="#reservation" className="block text-gray-400 hover:text-amber-400 transition-colors">Reservations</a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="block text-gray-400 hover:text-amber-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Bella Brew's. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 md:mt-0">
            Made with ❤️ in Pune, India
          </p>
        </div>
      </div>
    </footer>
  );
};
