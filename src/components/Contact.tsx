
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
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
    <section id="contact" className="py-24 bg-minecraft-green/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you get started with your Minecraft server
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="animate-on-scroll">
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium">Your Name</label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block mb-2 text-sm font-medium">Email Address</label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-sm font-medium">Message</label>
                <Textarea id="message" placeholder="Your message" rows={4} required />
              </div>
              
              <Button type="submit" className="minecraft-btn w-full">Send Message</Button>
            </form>
          </div>
          
          <div className="animate-on-scroll" style={{ transitionDelay: '0.3s' }}>
            <div className="bg-white p-8 rounded-lg shadow-lg h-full">
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-minecraft-green/10 p-3 rounded-full mr-4">
                    <Mail className="text-minecraft-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Email</h4>
                    <p className="text-gray-600">support@infinityhq.in</p>
                    <p className="text-gray-600">sales@infinityhq.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-minecraft-green/10 p-3 rounded-full mr-4">
                    <Phone className="text-minecraft-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Phone</h4>
                    <p className="text-gray-600">+91 98765 43210</p>
                    <p className="text-gray-600">+91 87654 32109</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-minecraft-green/10 p-3 rounded-full mr-4">
                    <MapPin className="text-minecraft-green" />
                  </div>
                  <div>
                    <h4 className="font-medium text-lg">Office</h4>
                    <p className="text-gray-600">
                      InfinityHQ, Tech Park Tower B<br />
                      Andheri East, Mumbai - 400059<br />
                      Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-lg mb-4">Operating Hours</h4>
                <p className="text-gray-600">
                  Monday - Friday: 9:00 AM - 8:00 PM<br />
                  Saturday: 10:00 AM - 6:00 PM<br />
                  Sunday: 10:00 AM - 4:00 PM
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  (Technical support available 24/7)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
