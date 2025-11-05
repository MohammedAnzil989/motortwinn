"use client"

import { Cpu, Wrench, Hammer, Cog } from 'lucide-react';

export default function HeroSection({ isVisible, heroLoaded }) {
  return (
    <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
      {/* Animated CPU Icon with Mechanical Elements */}
      <div className="relative inline-block mb-4 sm:mb-6">
        <div className={`inline-flex items-center justify-center p-2 sm:p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-pulse-glow ${heroLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-180'} transition-all duration-1000`}>
          <Cpu className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />
        </div>
        {/* Floating Tools around CPU */}
        {/* <div className={`absolute -top-3 -right-3 transition-all duration-700 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="p-1 bg-yellow-500/20 rounded-lg animate-tool-spin">
            <Wrench className="w-4 h-4 text-yellow-400" />
          </div>
        </div>
        <div className={`absolute -bottom-3 -left-3 transition-all duration-700 delay-300 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="p-1 bg-orange-500/20 rounded-lg animate-tool-spin-reverse">
            <Hammer className="w-3 h-3 text-orange-400" />
          </div>
        </div> */}
        <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
          <div className="p-1 bg-green-500/20 rounded-lg animate-tool-bounce">
            <Cog className="w-3 h-3 text-green-400" />
          </div>
        </div>
      </div>
      
      {/* Main Title with Mechanical Typography */}
      <div className={`relative ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-200`}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-2 relative">
          <span className="relative inline-block">
            Digital Twin
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-title-underline"></span>
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-1 sm:mt-2 animate-gradient mechanical-text">
            Induction Motor
          </span>
        </h1>
      </div>
      
      <p className={`text-base sm:text-lg lg:text-xl text-blue-200 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-400 ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        Experience real-time visualization and monitoring of industrial induction motors through advanced digital twin technology
      </p>
      
      <p className={`text-sm sm:text-base text-blue-300/80 max-w-2xl mx-auto px-4 transition-all duration-700 delay-600 ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
        Simulate, analyze, and optimize motor performance with comprehensive data insights and predictive maintenance capabilities
      </p>
    </div>
  );
}