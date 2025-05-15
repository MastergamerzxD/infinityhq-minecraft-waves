
import { Button } from '@/components/ui/button';
import { CheckIcon } from 'lucide-react';
import { useEffect } from 'react';

const Pricing = () => {
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
  
  const plans = [
    {
      name: "Starter",
      ram: "2GB",
      players: "10-20",
      price: "₹499",
      popular: false,
      features: [
        "2GB RAM",
        "1 vCPU Core",
        "20GB NVMe Storage",
        "10-20 Players",
        "Mumbai Location",
        "DDoS Protection",
        "24/7 Support"
      ]
    },
    {
      name: "Popular",
      ram: "4GB",
      players: "20-40",
      price: "₹899",
      popular: true,
      features: [
        "4GB RAM",
        "2 vCPU Cores",
        "50GB NVMe Storage",
        "20-40 Players",
        "Mumbai Location",
        "DDoS Protection",
        "Plugin Support",
        "Daily Backups",
        "24/7 Support"
      ]
    },
    {
      name: "Premium",
      ram: "8GB",
      players: "40-80",
      price: "₹1699",
      popular: false,
      features: [
        "8GB RAM",
        "4 vCPU Cores",
        "100GB NVMe Storage",
        "40-80 Players",
        "Mumbai Location",
        "DDoS Protection",
        "Plugin Support",
        "Hourly Backups",
        "Priority Support",
        "Custom Domain"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">
            Simple, Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Choose the perfect Minecraft hosting plan for your needs, with no hidden fees or surprises
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`w-full md:w-72 rounded-xl overflow-hidden animate-on-scroll ${
                plan.popular 
                  ? 'border-4 border-minecraft-green relative transform md:scale-110 shadow-xl' 
                  : 'border border-gray-200 shadow-md'
              }`}
              style={{ transitionDelay: `${0.2 * index}s` }}
            >
              {plan.popular && (
                <div className="bg-minecraft-green text-white py-1 px-3 text-sm font-semibold absolute top-0 right-0 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="bg-white p-6">
                <h3 className="text-2xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="flex justify-center items-baseline my-4">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                
                <div className="flex justify-center gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-minecraft-green">{plan.ram}</div>
                    <div className="text-xs text-gray-500">RAM</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-minecraft-green">{plan.players}</div>
                    <div className="text-xs text-gray-500">PLAYERS</div>
                  </div>
                </div>
                
                <Button className={`w-full minecraft-btn ${plan.popular ? 'bg-minecraft-green' : ''}`}>
                  Get Started
                </Button>
              </div>
              
              <div className="bg-gray-50 p-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckIcon className="h-5 w-5 text-minecraft-green flex-shrink-0 mr-2" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
