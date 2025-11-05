"use client"

import { Cog, Rocket, Brain, Settings, Wrench, Cctv, TrendingUp } from 'lucide-react';

const mainBenefits = [
  {
    icon: Cog,
    title: "Predictive Maintenance",
    description: "Identify potential failures before they occur with AI-powered anomaly detection",
    stats: "99.8% Accuracy",
    color: "blue",
    delay: "delay-1000"
  },
  {
    icon: Rocket,
    title: "Performance Optimization",
    description: "Maximize motor efficiency and reduce energy consumption by up to 25%",
    stats: "25% Energy Saved",
    color: "green",
    delay: "delay-1100"
  },
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get intelligent recommendations based on machine learning algorithms",
    stats: "Smart Analytics",
    color: "purple",
    delay: "delay-1200"
  }
];

const additionalBenefits = [
  { icon: Settings, label: "Real-time Monitoring", value: "24/7", color: "cyan" },
  { icon: Wrench, label: "Maintenance Cost", value: "-40%", color: "green" },
  { icon: Cctv, label: "Uptime", value: "99.9%", color: "blue" },
  { icon: TrendingUp, label: "Efficiency", value: "+18%", color: "purple" }
];

export default function KeyBenefits({ isVisible }) {
  return (
    <div className={`w-full max-w-6xl mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} delay-900`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in-up">
        Key Benefits of Digital Twin Technology
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Left Column - Main Benefits */}
        <div className="space-y-6">
          {mainBenefits.map((benefit, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-${benefit.color}-400/50 hover:scale-105 transition-all duration-500 group animate-slide-up ${benefit.delay}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 bg-${benefit.color}-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${benefit.color}-400`} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-white">{benefit.title}</h3>
                    <span className={`text-xs font-semibold text-${benefit.color}-400 bg-${benefit.color}-500/20 px-2 py-1 rounded-full`}>
                      {benefit.stats}
                    </span>
                  </div>
                  <p className="text-blue-200 text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column - Additional Benefits with Icons */}
        <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-blue-400/30 h-full">
          <h3 className="text-xl font-bold text-white text-center mb-6">Operational Excellence</h3>
          <div className="grid grid-cols-2 gap-4">
            {additionalBenefits.map((item, index) => (
              <div
                key={index}
                className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 animate-bounce-in"
                style={{ animationDelay: `${1300 + index * 100}ms` }}
              >
                <div className={`inline-flex p-2 bg-${item.color}-500/20 rounded-lg mb-2`}>
                  <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                </div>
                <div className={`text-2xl font-bold text-${item.color}-400 mb-1`}>{item.value}</div>
                <div className="text-xs text-blue-200">{item.label}</div>
              </div>
            ))}
          </div>
          
          {/* Progress Bars */}
          <div className="mt-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-200">System Reliability</span>
                <span className="text-green-400 font-semibold">98%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-green-500 h-2 rounded-full animate-progress-width" style={{ width: '98%' }}></div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-blue-200">Data Accuracy</span>
                <span className="text-cyan-400 font-semibold">99.7%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-2">
                <div className="bg-cyan-500 h-2 rounded-full animate-progress-width-delayed" style={{ width: '99.7%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}