"use client"

import { Gauge, Zap, Activity, BarChart3 } from 'lucide-react';

const operations = [
  {
    icon: Gauge,
    title: "Interactive Simulation",
    description: "Control motor parameters and observe immediate responses in a safe virtual environment without physical equipment",
    color: "blue",
    delay: "delay-500"
  },
  {
    icon: Zap,
    title: "Electrical Analysis",
    description: "Examine voltage, current, power factor, and efficiency with detailed electrical characteristic visualizations",
    color: "yellow",
    delay: "delay-600"
  },
  {
    icon: Activity,
    title: "Mechanical Dynamics",
    description: "Study torque-speed relationships, load variations, and mechanical stress patterns during different operating conditions",
    color: "green",
    delay: "delay-700"
  },
  {
    icon: BarChart3,
    title: "Thermal Management",
    description: "Monitor temperature distribution and cooling efficiency to prevent overheating and extend motor operational life",
    color: "red",
    delay: "delay-800"
  }
];

export default function OperationsSection({ isVisible }) {
  return (
    <div className={`w-full max-w-6xl mb-8 sm:mb-12 px-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-400`}>
      <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in-up">
        Explore Motor Operations
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        {operations.map((item, index) => (
          <div
            key={index}
            className={`bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 animate-slide-up ${item.delay} group`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className={`p-2 sm:p-3 bg-${item.color}-500/20 rounded-lg mt-1 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${item.color}-400`} />
              </div>
              <div className="flex-1">
                <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
                  {item.title}
                </h4>
                <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}