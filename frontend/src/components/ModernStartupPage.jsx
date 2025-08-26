import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Monitor, 
  Video, 
  Palette, 
  Share2, 
  ArrowRight, 
  Star, 
  Users, 
  Award,
  Mail,
  Phone,
  MapPin,
  Send,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Menu,
  X,
  CheckCircle,
  Zap,
  Target,
  Lightbulb
} from 'lucide-react';

const ModernStartupPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  useEffect(() => {
    setIsLoaded(true);
    
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom, responsive websites built with cutting-edge technologies and optimized for performance.',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'CMS Integration'],
      color: 'from-blue-500/10 to-blue-600/10',
      iconColor: 'text-blue-600',
      borderColor: 'border-blue-200'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative visual solutions that capture your brand essence and communicate your message effectively.',
      features: ['Brand Identity', 'Print Design', 'Digital Assets', 'UI/UX Design'],
      color: 'from-purple-500/10 to-purple-600/10',
      iconColor: 'text-purple-600',
      borderColor: 'border-purple-200'
    },
    {
      icon: Video,
      title: 'Video & Photo Editing',
      description: 'Professional video production and photo editing services that tell your story beautifully.',
      features: ['Video Production', 'Photo Retouching', 'Motion Graphics', 'Color Grading'],
      color: 'from-emerald-500/10 to-emerald-600/10',
      iconColor: 'text-emerald-600',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Strategic social media campaigns that build communities and drive meaningful engagement.',
      features: ['Content Strategy', 'Community Management', 'Analytics', 'Paid Advertising'],
      color: 'from-pink-500/10 to-pink-600/10',
      iconColor: 'text-pink-600',
      borderColor: 'border-pink-200'
    }
  ];

  const portfolioItems = [
    {
      title: 'E-commerce Platform',
      category: 'Website Development',
      image: '/api/placeholder/400/300',
      description: 'Modern e-commerce solution with advanced features'
    },
    {
      title: 'Brand Identity',
      category: 'Graphic Design',
      image: '/api/placeholder/400/300',
      description: 'Complete brand identity for tech startup'
    },
    {
      title: 'Product Video',
      category: 'Video Editing',
      image: '/api/placeholder/400/300',
      description: 'Engaging product demonstration video'
    },
    {
      title: 'Social Campaign',
      category: 'Social Media',
      image: '/api/placeholder/400/300',
      description: 'Viral social media marketing campaign'
    }
  ];

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white relative">
      {/* Transparent Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrollY > 50 ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div className={`text-2xl font-bold transition-colors ${
                scrollY > 50 ? 'text-gray-900' : 'text-white'
              }`}>
                InnovaStudio
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className={`transition-colors hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white/90'
              }`}>Home</a>
              <a href="#about" className={`transition-colors hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white/90'
              }`}>About</a>
              <a href="#services" className={`transition-colors hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white/90'
              }`}>Services</a>
              <a href="#portfolio" className={`transition-colors hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white/90'
              }`}>Portfolio</a>
              <a href="#contact" className={`transition-colors hover:text-blue-600 ${
                scrollY > 50 ? 'text-gray-700' : 'text-white/90'
              }`}>Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className={`md:hidden p-2 ${scrollY > 50 ? 'text-gray-900' : 'text-white'}`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t">
              <nav className="flex flex-col p-6 space-y-4">
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
                <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
                <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
                <a href="#portfolio" className="text-gray-700 hover:text-blue-600 transition-colors">Portfolio</a>
                <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white w-full">
                  Get Started
                </Button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 flex items-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="floating-orb-1 absolute w-64 h-64 bg-blue-500/20 rounded-full blur-3xl"></div>
          <div className="floating-orb-2 absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"></div>
          <div className="floating-orb-3 absolute w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column - Content */}
          <div className={`transform transition-all duration-1000 delay-300 ${
            isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
            <h1 className="text-6xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Shape the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Future</span>
              <br />
              of Digital
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-lg">
              We transform ideas into extraordinary digital experiences through innovative design, 
              cutting-edge development, and strategic marketing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
                Start Your Journey
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-white/30 text-white hover:bg-white/10">
                View Our Work
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Model */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* 3D Geometric Shape */}
              <div className="floating-3d-container">
                <div className="floating-3d-shape">
                  {/* Outer Ring */}
                  <div className="shape-ring outer-ring">
                    <div className="ring-segment segment-1"></div>
                    <div className="ring-segment segment-2"></div>
                    <div className="ring-segment segment-3"></div>
                    <div className="ring-segment segment-4"></div>
                  </div>
                  
                  {/* Middle Ring */}
                  <div className="shape-ring middle-ring">
                    <div className="ring-segment segment-1"></div>
                    <div className="ring-segment segment-2"></div>
                    <div className="ring-segment segment-3"></div>
                  </div>
                  
                  {/* Inner Core */}
                  <div className="shape-core">
                    <div className="core-face face-front"></div>
                    <div className="core-face face-back"></div>
                    <div className="core-face face-left"></div>
                    <div className="core-face face-right"></div>
                    <div className="core-face face-top"></div>
                    <div className="core-face face-bottom"></div>
                  </div>
                  
                  {/* Floating Particles */}
                  <div className="floating-particle particle-1"></div>
                  <div className="floating-particle particle-2"></div>
                  <div className="floating-particle particle-3"></div>
                  <div className="floating-particle particle-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About InnovaStudio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a forward-thinking startup dedicated to bringing cutting-edge digital solutions 
              to businesses ready to make their mark in the digital world.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower businesses with innovative digital solutions that drive growth and create lasting impact.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the leading creative studio that bridges the gap between imagination and digital reality.
              </p>
            </Card>

            <Card className="p-8 text-center hover:shadow-xl transition-shadow bg-white border border-gray-200">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Values</h3>
              <p className="text-gray-600 leading-relaxed">
                Innovation, quality, and client success drive everything we do, ensuring exceptional results every time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive digital solutions tailored to elevate your business and captivate your audience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 bg-gradient-to-br ${service.color} ${service.borderColor} border-2 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconColor} bg-white rounded-2xl shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
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
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Portfolio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our latest projects and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {portfolioItems.map((item, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                <div className="aspect-[4/3] bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:opacity-75 transition-opacity"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-8 h-8 text-gray-700" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{item.category}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Let's Work Together
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Ready to bring your vision to life? Get in touch and let's create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 bg-gray-50 border border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Send us a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select a service</option>
                    <option value="website">Website Development</option>
                    <option value="design">Graphic Design</option>
                    <option value="video">Video & Photo Editing</option>
                    <option value="marketing">Social Media Marketing</option>
                  </select>
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full"
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                  Send Message
                  <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in touch</h3>
                <p className="text-gray-600 mb-8">
                  We'd love to hear from you. Choose the way that works best for you.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@innovastudio.com</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">+1 (555) 123-4567</div>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">123 Innovation Street<br />Digital City, DC 12345</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold">InnovaStudio</div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Transforming ideas into extraordinary digital experiences through innovation, creativity, and cutting-edge technology.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Services</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#services" className="hover:text-white transition-colors">Website Development</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Graphic Design</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Video & Photo Editing</a></li>
                <li><a href="#services" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-6">Company</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#portfolio" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 InnovaStudio. All rights reserved. Built with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ModernStartupPage;