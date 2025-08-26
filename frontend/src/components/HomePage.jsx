import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Monitor, Video, Palette, Share2, ArrowRight, Star, Users, Award, CheckCircle } from 'lucide-react';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    setIsLoaded(true);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom, responsive websites that drive results and engage your audience',
      color: 'bg-gradient-to-br from-blue-50 to-indigo-100',
      borderColor: 'border-blue-200',
      iconColor: 'text-blue-600',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading']
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'Professional video editing that tells your story and captivates viewers',
      color: 'bg-gradient-to-br from-emerald-50 to-teal-100',
      borderColor: 'border-emerald-200',
      iconColor: 'text-emerald-600',
      features: ['4K Quality', 'Motion Graphics', 'Color Grading']
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Eye-catching visuals that represent your brand and leave lasting impressions',
      color: 'bg-gradient-to-br from-orange-50 to-amber-100',
      borderColor: 'border-orange-200',
      iconColor: 'text-orange-600',
      features: ['Brand Identity', 'Print Design', 'Digital Assets']
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic campaigns that grow your audience and boost engagement',
      color: 'bg-gradient-to-br from-pink-50 to-rose-100',
      borderColor: 'border-pink-200',
      iconColor: 'text-pink-600',
      features: ['Content Strategy', 'Community Management', 'Analytics']
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Award, number: '1000+', label: 'Projects Completed' },
    { icon: Star, number: '5.0', label: 'Average Rating' },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Startup',
      text: 'Amazing work on our website! The team delivered exactly what we needed.',
      rating: 5
    },
    {
      name: 'Mike Chen',
      company: 'Local Business',
      text: 'Their video editing skills are top-notch. Highly recommend!',
      rating: 5
    },
    {
      name: 'Emily Davis',
      company: 'E-commerce Brand',
      text: 'The social media strategy they created boosted our engagement by 300%.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Floating Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.01}%`,
            transform: `translate(-50%, -50%)`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-emerald-200/20 to-teal-200/20 rounded-full blur-3xl"
          style={{
            right: `${15 + mousePosition.x * 0.015}%`,
            top: `${30 + mousePosition.y * 0.02}%`,
            transform: `translate(50%, -50%)`,
            transition: 'all 0.4s ease-out'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-orange-200/25 to-yellow-200/25 rounded-full blur-3xl"
          style={{
            left: `${60 + mousePosition.x * 0.01}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            transform: `translate(-50%, 50%)`,
            transition: 'all 0.5s ease-out'
          }}
        />
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/80 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-gray-900">
              Creative Studio
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-gray-900 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-gray-900 transition-colors">About</a>
              <a href="#testimonials" className="text-gray-700 hover:text-gray-900 transition-colors">Testimonials</a>
              <Button className="bg-gray-900 hover:bg-gray-800 text-white">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Bring Your
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Vision</span>
              <br />
              To Life
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              We create stunning websites, captivating videos, beautiful designs, and powerful social media campaigns that drive real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg group">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className={`text-center transform transition-all duration-700 delay-${index * 100} ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-4">
                  <stat.icon className="h-8 w-8 text-gray-700" />
                </div>
                <div className="text-4xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we provide comprehensive digital solutions that help your business thrive in the modern world.
            </p>
          </div>

          {/* Floating Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 ${service.color} ${service.borderColor} border-2 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer group floating-card relative overflow-hidden`}
                style={{
                  transform: `translateY(${Math.sin((Date.now() / 3000) + index) * 5}px)`,
                  animation: `float-${index} 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="relative z-10">
                  <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconColor} bg-white rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center text-gray-700">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="group-hover:bg-white group-hover:text-gray-900 transition-colors">
                    Learn More
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-white/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative z-10 py-32 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Don't just take our word for it - hear from our satisfied clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card 
                key={index}
                className={`p-6 bg-white border border-gray-200 hover:shadow-xl transform transition-all duration-500 hover:-translate-y-1 delay-${index * 100}`}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <div className="text-sm">
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-600">{testimonial.company}</div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-white/80 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-gray-200/50">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Let's bring your vision to life. Contact us today for a free consultation and discover how we can help your business grow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-4 text-lg group">
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50">
                View Portfolio
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Creative Studio</h3>
              <p className="text-gray-400 mb-4">
                Your partner in digital excellence. We create, design, and deliver results that matter.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Video Editing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Graphic Design</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-400">
                <p>Email: hello@creativestudio.com</p>
                <p>Phone: (555) 123-4567</p>
                <p>Address: 123 Creative St, Design City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Creative Studio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;