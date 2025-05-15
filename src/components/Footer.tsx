
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Youtube, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-minecraft-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <img 
                src="/lovable-uploads/9dde4912-2dca-4020-94bb-a48921ea1388.png" 
                alt="InfinityHQ Logo" 
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold">
                Infinity<span className="text-purple-600">HQ</span>
              </span>
            </div>
            <p className="text-gray-300 mb-6">
              Premium Minecraft server hosting based in Mumbai, India. Built by gamers, for gamers.
            </p>
            <div className="flex space-x-6">
              <a 
                href="https://dsc.gg/ihq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                <span className="sr-only">Discord</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a 
                href="https://www.youtube.com/@infinityheadquarters2.0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
              <a 
                href="https://www.instagram.com/infinityhq_ihq" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                <span className="sr-only">Instagram</span>
                <Instagram className="h-6 w-6" />
              </a>
              <a 
                href="mailto:support@infinityhq.shop" 
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                <span className="sr-only">Email</span>
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#home" className="text-gray-300 hover:text-purple-500 transition-colors">Home</a></li>
              <li><a href="#features" className="text-gray-300 hover:text-purple-500 transition-colors">Features</a></li>
              <li><a href="#pricing" className="text-gray-300 hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-purple-500 transition-colors">Testimonials</a></li>
              <li>
                <a 
                  href="https://dsc.gg/ihq" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-purple-500 transition-colors"
                >
                  Join Our Discord
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 pt-8 mt-8">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 InfinityHQ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400">
              <a href="#" className="hover:text-purple-500 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-purple-500 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
