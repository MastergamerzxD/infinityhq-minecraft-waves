
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 ${
        isScrolled 
          ? 'bg-white/90 shadow-md backdrop-blur-sm py-2' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <img 
            src="/lovable-uploads/04af4392-04cd-4399-b70a-26857944c11a.png" 
            alt="InfinityHQ Logo" 
            className="w-12 h-12 object-contain"
          />
          <span className={`text-2xl font-bold ${isScrolled ? 'text-minecraft-dark' : 'text-white'}`}>
            <span className="text-blue-600">Infinity</span><span className="text-purple-600">HQ</span>
          </span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks isScrolled={isScrolled} />
        </div>
        
        <div className="hidden md:block">
          <Button 
            className="minecraft-btn"
            onClick={() => window.open("https://billing.infinityhq.shop/index.php?rp=/store/panel", "_blank")}
          >
            Get Started
          </Button>
        </div>
        
        <button 
          className="md:hidden text-minecraft-green"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <Menu size={24} />
        </button>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLinks isScrolled={true} mobile={true} />
            <Button 
              className="minecraft-btn w-full"
              onClick={() => window.open("https://billing.infinityhq.shop/index.php?rp=/store/panel", "_blank")}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ isScrolled, mobile = false }: { isScrolled: boolean; mobile?: boolean }) => {
  const linkStyle = `font-medium transition-colors duration-200 hover:text-minecraft-green ${
    isScrolled || mobile ? 'text-minecraft-dark' : 'text-white'
  }`;
  
  const containerStyle = mobile 
    ? "flex flex-col space-y-4" 
    : "flex items-center space-x-8";
    
  return (
    <div className={containerStyle}>
      <a href="#home" className={linkStyle}>Home</a>
      <a href="#features" className={linkStyle}>Features</a>
      <a href="#pricing" className={linkStyle}>Pricing</a>
      <a href="#testimonials" className={linkStyle}>Testimonials</a>
    </div>
  );
};

export default Navbar;
