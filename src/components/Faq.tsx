
import { useState, useEffect } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      question: "Where are your servers located?",
      answer: "Our servers are located in Mumbai, India, providing optimal ping and connection stability for players throughout the country."
    },
    {
      question: "How quickly will my server be set up?",
      answer: "Your Minecraft server will be set up instantly after payment confirmation. You'll receive login details immediately."
    },
    {
      question: "Can I install mods and plugins on my server?",
      answer: "Yes, all our hosting plans support mods and plugins. Our Popular and Premium plans include plugin support assistance."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, credit/debit cards, NetBanking, and other popular Indian payment methods through our secure payment gateway."
    },
    {
      question: "Do you offer refunds?",
      answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with our service."
    },
    {
      question: "How do I contact support?",
      answer: "Our support team is available 24/7 via live chat on our website, email, or phone. Premium plans get priority support."
    }
  ];
  
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
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

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Everything you need to know about our Minecraft hosting service
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`mb-4 border rounded-lg overflow-hidden animate-on-scroll ${
                openIndex === index ? 'border-minecraft-green' : 'border-gray-200'
              }`}
              style={{ transitionDelay: `${0.1 * index}s` }}
            >
              <button
                className="w-full text-left p-4 flex justify-between items-center focus:outline-none"
                onClick={() => toggleFaq(index)}
              >
                <span className="font-medium text-lg">{faq.question}</span>
                {openIndex === index ? (
                  <ChevronUp className="text-minecraft-green" />
                ) : (
                  <ChevronDown />
                )}
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="p-4 pt-0 bg-gray-50">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
