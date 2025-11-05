"use client"

import { Eye, Activity, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Eye,
    title: "Real-Time Visualization",
    description: "Monitor motor operations with live 3D models and instant parameter updates for complete operational transparency",
    color: "blue",
    delay: "delay-100"
  },
  {
    icon: Activity,
    title: "Performance Monitoring",
    description: "Track critical parameters including speed, torque, temperature, and efficiency metrics across all operational states",
    color: "green",
    delay: "delay-200"
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Access comprehensive historical data analysis and predictive insights to optimize motor performance and lifespan",
    color: "purple",
    delay: "delay-300"
  }
];

export default function FeatureHighlights() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 w-full max-w-6xl px-2">
      {features.map((feature, index) => (
        <div
          key={index}
          className={`bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-${feature.color}-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color}-500/20 transition-all duration-500 text-center animate-slide-up ${feature.delay}`}
        >
          <div className={`inline-flex p-3 sm:p-4 bg-${feature.color}-500/20 rounded-full mb-3 sm:mb-4 animate-bounce-subtle`}>
            <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-${feature.color}-400`} />
          </div>
          <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
            {feature.title}
          </h3>
          <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
            {feature.description}
          </p>
        </div>
      ))}
    </div>
  );
}