
import { useEffect, useRef } from 'react';
import { Server, Shield, Globe, Clock, Cpu, UserCheck } from 'lucide-react';

const Features = () => {
  const featuresRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));
    
    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
  
  const features = [
    {
      title: "Powerful Hardware",
      description: "Latest-gen CPUs and NVMe SSDs for lightning-fast performance and minimal lag.",
      icon: Cpu,
      delay: 0.1
    },
    {
      title: "Mumbai Data Center",
      description: "Strategically located servers in Mumbai for the lowest possible ping across India.",
      icon: Globe,
      delay: 0.3
    },
    {
      title: "DDoS Protection",
      description: "Enterprise-grade security keeping your server safe from attacks 24/7.",
      icon: Shield,
      delay: 0.5
    },
    {
      title: "24/7 Support",
      description: "Our dedicated Indian support team is available round the clock to help you.",
      icon: UserCheck,
      delay: 0.7
    },
    {
      title: "99.9% Uptime",
      description: "We guarantee your Minecraft server will be online when you need it.",
      icon: Server,
      delay: 0.9
    },
    {
      title: "Instant Setup",
      description: "Get your Minecraft server up and running in minutes, not hours.",
      icon: Clock,
      delay: 1.1
    }
  ];

  return (
    <section id="features" className="py-24 bg-secondary" ref={featuresRef}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose <span className="text-gradient">InfinityHQ</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the best Minecraft hosting service in India with our premium features
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="feature-card bg-white rounded-lg p-6 shadow-md animate-on-scroll"
              style={{ transitionDelay: `${feature.delay}s` }}
            >
              <div className="mb-4 p-3 bg-minecraft-green/10 rounded-full w-16 h-16 flex items-center justify-center">
                <feature.icon size={32} className="text-minecraft-green feature-icon" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
