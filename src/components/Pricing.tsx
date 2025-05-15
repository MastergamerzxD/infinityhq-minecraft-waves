
import { Button } from '@/components/ui/button';
import { CheckIcon, XIcon } from 'lucide-react';
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
      name: "Ryzen 2GB",
      price: "₹199.00",
      popular: false,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (100%)",
          included: true
        },
        {
          name: "RAM: 2GB DDR5",
          included: true
        },
        {
          name: "Storage: 5GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: false
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: false,
          suffix: " + ₹50"
        }
      ]
    },
    {
      name: "Ryzen 4GB",
      price: "₹499.00",
      popular: true,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (100%)",
          included: true
        },
        {
          name: "RAM: 4GB DDR5",
          included: true
        },
        {
          name: "Storage: 10GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: false
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: false,
          suffix: " + ₹50"
        }
      ]
    },
    {
      name: "Ryzen 6GB",
      price: "₹699.00",
      popular: false,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (150%)",
          included: true
        },
        {
          name: "RAM: 6GB DDR5",
          included: true
        },
        {
          name: "Storage: 15GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: false
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: true
        }
      ]
    },
    {
      name: "Ryzen 8GB",
      price: "₹799.00",
      popular: false,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (200%)",
          included: true
        },
        {
          name: "RAM: 8GB DDR5",
          included: true
        },
        {
          name: "Storage: 15GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: true
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: true
        }
      ]
    },
    {
      name: "Ryzen 12GB",
      price: "₹1,299.00",
      popular: false,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (300%)",
          included: true
        },
        {
          name: "RAM: 12GB DDR5",
          included: true
        },
        {
          name: "Storage: 15GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: true
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: true
        }
      ]
    },
    {
      name: "Ryzen 16GB",
      price: "₹1,799.00",
      popular: false,
      features: [
        {
          name: "CPU: AMD EPYC 9354P (450%)",
          included: true
        },
        {
          name: "RAM: 16GB DDR5",
          included: true
        },
        {
          name: "Storage: 15GB NVMe SSD",
          included: true
        },
        {
          name: "DDoS Protection",
          included: true
        },
        {
          name: "Free Panel",
          included: true
        },
        {
          name: "Backups",
          included: true
        }
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
        
        <div className="flex flex-wrap justify-center gap-6">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`w-full md:w-[280px] rounded-xl overflow-hidden animate-on-scroll ${
                plan.popular 
                  ? 'border-4 border-purple-600 relative transform md:scale-105 shadow-xl' 
                  : 'border border-gray-200 shadow-md'
              }`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              {plan.popular && (
                <div className="bg-purple-600 text-white py-1 px-3 text-sm font-semibold absolute top-0 right-0 rounded-bl-lg">
                  MOST POPULAR
                </div>
              )}
              
              <div className="bg-white p-5">
                <h3 className="text-xl font-bold text-center mb-2">{plan.name}</h3>
                <div className="flex justify-center items-baseline my-3">
                  <span className="text-3xl font-extrabold">{plan.price}</span>
                  <span className="text-gray-500 ml-1">/month</span>
                </div>
                
                <Button 
                  className={`w-full minecraft-btn ${plan.popular ? 'bg-purple-600 hover:bg-purple-700' : ''}`}
                  onClick={() => window.open("https://billing.infinityhq.shop/index.php?rp=/store/panel", "_blank")}
                >
                  Get Started
                </Button>
              </div>
              
              <div className="bg-gray-50 p-5">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      {feature.included ? (
                        <CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mr-2 mt-0.5" />
                      ) : (
                        <XIcon className="h-5 w-5 text-red-500 flex-shrink-0 mr-2 mt-0.5" />
                      )}
                      <span className="text-sm">
                        {feature.name}
                        {feature.suffix && <span className="text-gray-500">{feature.suffix}</span>}
                      </span>
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
