
import { Button } from '@/components/ui/button';
import { Server, Globe, Shield } from 'lucide-react';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const blocks = heroRef.current.querySelectorAll('.floating-block');
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      blocks.forEach((block, index) => {
        const depth = 1 + index * 0.5;
        const moveX = (mouseX - 0.5) * depth * 20;
        const moveY = (mouseY - 0.5) * depth * 20;
        
        (block as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen pt-24 pb-16 overflow-hidden hero-section flex items-center">
      <div 
        ref={heroRef}
        className="container mx-auto px-4 relative z-10"
      >
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6 opacity-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
              Premium <span className="text-gradient">Minecraft</span> Hosting in India
            </h1>
            <p className="text-lg mb-8 text-gray-600 max-w-lg mx-auto lg:mx-0 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s' }}>
              Experience lag-free gaming with InfinityHQ's high-performance Minecraft servers based in Mumbai. Built by gamers, for gamers.
            </p>
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.9s' }}>
              <Button className="minecraft-btn text-lg px-8 py-6">Get Your Server</Button>
              <Button variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-minecraft-green/10">Learn More</Button>
            </div>
            
            <div className="flex justify-center lg:justify-start mt-12 space-x-8 opacity-0 animate-fade-in" style={{ animationDelay: '1.2s' }}>
              <div className="flex items-center">
                <Server className="text-minecraft-green mr-2" />
                <span className="text-sm">99.9% Uptime</span>
              </div>
              <div className="flex items-center">
                <Globe className="text-minecraft-green mr-2" />
                <span className="text-sm">Mumbai Servers</span>
              </div>
              <div className="flex items-center">
                <Shield className="text-minecraft-green mr-2" />
                <span className="text-sm">DDoS Protection</span>
              </div>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2 relative h-80 lg:h-[500px]">
            <div className="floating-block absolute w-20 h-20 md:w-32 md:h-32 bg-minecraft-green minecraft-block animate-minecraft-block top-0 left-[10%] opacity-0 animate-scale-in" style={{ animationDelay: '1.5s' }}></div>
            <div className="floating-block absolute w-16 h-16 md:w-24 md:h-24 bg-minecraft-earth minecraft-block animate-minecraft-block top-[40%] left-[20%] opacity-0 animate-scale-in" style={{ animationDelay: '1.8s' }}></div>
            <div className="floating-block absolute w-24 h-24 md:w-40 md:h-40 bg-minecraft-light-green minecraft-block animate-minecraft-block top-[10%] right-[15%] opacity-0 animate-scale-in" style={{ animationDelay: '2.1s' }}></div>
            <div className="floating-block absolute w-14 h-14 md:w-20 md:h-20 bg-minecraft-stone minecraft-block animate-minecraft-block bottom-[20%] right-[25%] opacity-0 animate-scale-in" style={{ animationDelay: '2.4s' }}></div>
            <div className="floating-block absolute w-12 h-12 md:w-16 md:h-16 bg-minecraft-dark-green minecraft-block animate-minecraft-block bottom-[10%] left-[30%] opacity-0 animate-scale-in" style={{ animationDelay: '2.7s' }}></div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default Hero;
