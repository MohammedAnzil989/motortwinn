"use client"

import { Factory, Shield, TrendingUp, Users, Cog, Database } from 'lucide-react';

export default function ProfessionalFooter({ isVisible }) {
  return (
    <footer className={`w-full max-w-6xl mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-1300`}>
      <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Company Info */}
          <div className="animate-slide-up delay-1400">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-500/20 rounded-lg">
                <Factory className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-bold text-white">MotorTech Digital</h3>
            </div>
            <p className="text-blue-200 text-sm leading-relaxed mb-4">
              Leading provider of industrial digital twin solutions for motor optimization and predictive maintenance.
            </p>
            <div className="flex gap-3">
              {[Shield, TrendingUp, Users].map((Icon, index) => (
                <div key={index} className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 transition-colors duration-300 cursor-pointer">
                  <Icon className="w-4 h-4 text-blue-300" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-slide-up delay-1500">
            <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2">
              {['Dashboard', 'Simulations', 'Analytics', 'Documentation'].map((link, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Features */}
          <div className="animate-slide-up delay-1600">
            <h4 className="text-white font-semibold mb-4 text-lg">Features</h4>
            <ul className="space-y-2">
              {['Real-time Monitoring', '3D Visualization', 'Predictive Analytics', 'Performance Reports'].map((feature, index) => (
                <li key={index}>
                  <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
                    <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
                    {feature}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-slide-up delay-1700">
            <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-500/20 rounded-lg">
                  <Cog className="w-4 h-4 text-green-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Support</p>
                  <p className="text-blue-200 text-xs">support@motortech.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-500/20 rounded-lg">
                  <Database className="w-4 h-4 text-purple-400" />
                </div>
                <div>
                  <p className="text-white text-sm font-medium">Sales</p>
                  <p className="text-blue-200 text-xs">sales@motortech.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}