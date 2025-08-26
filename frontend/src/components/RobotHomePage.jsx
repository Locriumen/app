import React, { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Monitor, Video, Palette, Share2, ArrowRight, Star, Users, Award, Zap, Cpu, Bot } from 'lucide-react';

const RobotHomePage = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [robotEyePos, setRobotEyePos] = useState({ x: 0, y: 0 });
  const [isRobotTalking, setIsRobotTalking] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    // Robot eye tracking mouse movement
    const handleMouseMove = (e) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const maxMove = 5; // Maximum eye movement in pixels
      
      const x = ((e.clientX - centerX) / centerX) * maxMove;
      const y = ((e.clientY - centerY) / centerY) * maxMove;
      
      setRobotEyePos({ x, y });
    };

    // Robot talking animation
    const talkingInterval = setInterval(() => {
      setIsRobotTalking(true);
      setTimeout(() => setIsRobotTalking(false), 2000);
    }, 8000);

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(talkingInterval);
    };
  }, []);

  const services = [
    {
      icon: Monitor,
      title: 'Website Development',
      description: 'Custom, responsive websites powered by cutting-edge technology',
      color: 'from-blue-50 to-blue-100',
      iconColor: 'text-blue-600',
      delay: '0s'
    },
    {
      icon: Video,
      title: 'Video Editing',
      description: 'AI-enhanced video editing with professional precision',
      color: 'from-emerald-50 to-emerald-100',
      iconColor: 'text-emerald-600',
      delay: '0.2s'
    },
    {
      icon: Palette,
      title: 'Graphic Design',
      description: 'Creative designs crafted with intelligent automation',
      color: 'from-orange-50 to-orange-100',
      iconColor: 'text-orange-600',
      delay: '0.4s'
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      description: 'Smart campaigns that connect and engage audiences',
      color: 'from-pink-50 to-pink-100',
      iconColor: 'text-pink-600',
      delay: '0.6s'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-gray-100 overflow-hidden">
      {/* Floating Tech Elements */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="floating-tech-1 absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"></div>
        <div className="floating-tech-2 absolute w-1 h-1 bg-green-400 rounded-full opacity-40"></div>
        <div className="floating-tech-3 absolute w-3 h-3 bg-purple-400 rounded-full opacity-50"></div>
        <div className="floating-tech-4 absolute w-1.5 h-1.5 bg-orange-400 rounded-full opacity-70"></div>
        <div className="floating-tech-5 absolute w-2.5 h-2.5 bg-pink-400 rounded-full opacity-50"></div>
      </div>

      {/* Header */}
      <header className="relative z-50 bg-white/90 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900">RoboStudio</div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section with Robot */}
      <section className="relative z-10 pt-8 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className={`transform transition-all duration-1000 ${isLoaded ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Future-Ready
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Digital</span>
                <br />
                Solutions
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Where artificial intelligence meets creative excellence. We build tomorrow's digital experiences today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="px-8 py-4 text-lg border-gray-300 hover:bg-gray-50">
                  Meet Our AI
                </Button>
              </div>
            </div>

            {/* Right Column - Animated Robot */}
            <div className="flex justify-center lg:justify-end">
              <div className="robot-container">
                {/* Robot Body */}
                <div className="robot-body">
                  {/* Head */}
                  <div className="robot-head">
                    {/* Eyes */}
                    <div className="robot-eyes">
                      <div 
                        className="robot-eye left-eye"
                        style={{
                          transform: `translate(${robotEyePos.x}px, ${robotEyePos.y}px)`
                        }}
                      ></div>
                      <div 
                        className="robot-eye right-eye"
                        style={{
                          transform: `translate(${robotEyePos.x}px, ${robotEyePos.y}px)`
                        }}
                      ></div>
                    </div>
                    
                    {/* Mouth */}
                    <div className={`robot-mouth ${isRobotTalking ? 'talking' : ''}`}></div>
                    
                    {/* Antenna */}
                    <div className="robot-antenna">
                      <div className="antenna-ball"></div>
                    </div>
                  </div>

                  {/* Torso */}
                  <div className="robot-torso">
                    <div className="robot-screen">
                      <div className="screen-content">
                        <div className="screen-line"></div>
                        <div className="screen-line"></div>
                        <div className="screen-line"></div>
                      </div>
                    </div>
                    
                    {/* Buttons */}
                    <div className="robot-buttons">
                      <div className="robot-button red"></div>
                      <div className="robot-button blue"></div>
                      <div className="robot-button green"></div>
                    </div>
                  </div>

                  {/* Arms */}
                  <div className="robot-arms">
                    <div className="robot-arm left-arm">
                      <div className="arm-upper"></div>
                      <div className="arm-lower"></div>
                      <div className="robot-hand"></div>
                    </div>
                    <div className="robot-arm right-arm">
                      <div className="arm-upper"></div>
                      <div className="arm-lower"></div>
                      <div className="robot-hand"></div>
                    </div>
                  </div>

                  {/* Legs */}
                  <div className="robot-legs">
                    <div className="robot-leg left-leg">
                      <div className="leg-upper"></div>
                      <div className="leg-lower"></div>
                      <div className="robot-foot"></div>
                    </div>
                    <div className="robot-leg right-leg">
                      <div className="leg-upper"></div>
                      <div className="leg-lower"></div>
                      <div className="robot-foot"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
      <section className="relative z-10 py-20 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Intelligence
            </h2>
            <p className="text-xl text-gray-600">
              Our AI-enhanced services deliver unprecedented results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lightning Fast</h3>
              <p className="text-gray-600">AI-optimized workflows deliver projects 3x faster</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-purple-50 to-purple-100 border-purple-200">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Automation</h3>
              <p className="text-gray-600">Intelligent systems handle complex tasks automatically</p>
            </Card>

            <Card className="p-6 text-center hover:shadow-lg transition-shadow bg-gradient-to-br from-green-50 to-green-100 border-green-200">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Bot className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Precision</h3>
              <p className="text-gray-600">Machine learning ensures perfect results every time</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative z-10 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced digital solutions enhanced by artificial intelligence for maximum impact
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className={`p-8 bg-gradient-to-br ${service.color} border-2 hover:shadow-2xl transform transition-all duration-500 hover:-translate-y-2 cursor-pointer group`}
                style={{
                  animationDelay: service.delay
                }}
              >
                <div className={`inline-flex items-center justify-center w-16 h-16 ${service.iconColor} bg-white rounded-full shadow-lg mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-700 mb-6 text-lg leading-relaxed">{service.description}</p>
                <Button variant="outline" className="group-hover:bg-white group-hover:text-gray-900 transition-colors">
                  Explore AI Features
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative z-10 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Go Robotic?
            </h2>
            <p className="text-xl mb-10 opacity-90 max-w-2xl mx-auto">
              Join the AI revolution and transform your digital presence with our intelligent solutions.
            </p>
            <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg">
              Launch Your AI Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center space-x-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-bold">RoboStudio</h3>
          </div>
          <p className="text-gray-400 mb-8">
            Pioneering the future of digital creativity with AI-powered solutions
          </p>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">&copy; 2025 RoboStudio. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RobotHomePage;