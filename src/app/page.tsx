// "use client"

// import { Zap, Activity, Gauge, Cpu, Eye, BarChart3, Shield, Cog, Factory, TrendingUp, Users, Database, Settings, Wrench, Cctv, Brain, Rocket, Hammer } from 'lucide-react';
// import { useState, useEffect } from 'react';

// export default function Home() {
//   const [isVisible, setIsVisible] = useState(false);
//   const [heroLoaded, setHeroLoaded] = useState(false);

//   useEffect(() => {
//     setIsVisible(true);
//     // Add a small delay for hero animation to create a dramatic entrance
//     const timer = setTimeout(() => {
//       setHeroLoaded(true);
//     }, 500);
//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
//       {/* Animated Mechanical Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
//       {/* Mechanical Elements Animation */}
//       <div className="absolute inset-0 overflow-hidden opacity-20">
//         {/* Your Gear Image with Rotation Animation */}
//         <div className="absolute top-1/4 left-1/4 animate-spin-slow">
//           <img 
//             src="/api/placeholder/80/80" 
//             alt="Gear" 
//             className="w-20 h-20 opacity-30"
//             onError={(e) => {
//               // Fallback if image doesn't load - create a CSS gear
//               e.target.style.display = 'none';
//               const fallbackGear = document.createElement('div');
//               fallbackGear.className = 'w-20 h-20 border-4 border-blue-400/30 rounded-full border-dashed';
//               fallbackGear.innerHTML = '<div class="absolute inset-2 border-2 border-blue-400/20 rounded-full"></div>';
//               e.target.parentNode.appendChild(fallbackGear);
//             }}
//           />
//         </div>
//         <div className="absolute top-1/3 right-1/4 animate-spin-reverse-slow">
//           <img 
//             src="/api/placeholder/64/64" 
//             alt="Gear" 
//             className="w-16 h-16 opacity-25"
//             onError={(e) => {
//               e.target.style.display = 'none';
//               const fallbackGear = document.createElement('div');
//               fallbackGear.className = 'w-16 h-16 border-4 border-cyan-400/30 rounded-full border-dashed';
//               fallbackGear.innerHTML = '<div class="absolute inset-2 border-2 border-cyan-400/20 rounded-full"></div>';
//               e.target.parentNode.appendChild(fallbackGear);
//             }}
//           />
//         </div>
//         <div className="absolute bottom-1/4 left-1/3 animate-spin-medium">
//           <img 
//             src="/api/placeholder/48/48" 
//             alt="Gear" 
//             className="w-12 h-12 opacity-20"
//             onError={(e) => {
//               e.target.style.display = 'none';
//               const fallbackGear = document.createElement('div');
//               fallbackGear.className = 'w-12 h-12 border-4 border-blue-400/20 rounded-full border-dashed';
//               fallbackGear.innerHTML = '<div class="absolute inset-1 border-1 border-blue-400/15 rounded-full"></div>';
//               e.target.parentNode.appendChild(fallbackGear);
//             }}
//           />
//         </div>

//         {/* Tools Animation */}
//         <div className="absolute top-1/6 right-1/6 animate-float-tool-1">
//           <div className="p-2 bg-yellow-500/10 rounded-lg rotate-45">
//             <Wrench className="w-6 h-6 text-yellow-400/40" />
//           </div>
//         </div>
//         <div className="absolute bottom-1/5 left-1/5 animate-float-tool-2">
//           <div className="p-2 bg-orange-500/10 rounded-lg -rotate-12">
//             <Hammer className="w-5 h-5 text-orange-400/40" />
//           </div>
//         </div>
//         <div className="absolute top-2/3 right-1/5 animate-float-tool-3">
//           <div className="p-2 bg-red-500/10 rounded-lg rotate-12">
//             <Cog className="w-4 h-4 text-red-400/40" />
//           </div>
//         </div>
//         <div className="absolute bottom-1/3 left-1/4 animate-float-tool-4">
//           <div className="p-2 bg-green-500/10 rounded-lg -rotate-45">
//             <Settings className="w-5 h-5 text-green-400/40" />
//           </div>
//         </div>

//         {/* Bolts and Nuts */}
//         <div className="absolute top-1/5 right-1/5 animate-float-bolt">
//           <div className="w-4 h-8 bg-gradient-to-b from-blue-400/20 to-cyan-400/20 rounded-sm bolt"></div>
//         </div>
//         <div className="absolute bottom-1/3 right-1/6 animate-float-nut">
//           <div className="w-6 h-6 border-2 border-cyan-400/20 rounded-sm nut transform rotate-45"></div>
//         </div>
//         <div className="absolute top-2/3 left-1/6 animate-float-bolt-delayed">
//           <div className="w-3 h-6 bg-gradient-to-b from-blue-400/15 to-cyan-400/15 rounded-sm bolt-small"></div>
//         </div>

//         {/* Pulsing Motor Core */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-40 h-40 border-4 border-cyan-400/10 rounded-full animate-pulse-core"></div>
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-blue-400/15 rounded-full animate-pulse-core-delayed"></div>
//           {/* Rotor Bars */}
//           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//             {[...Array(6)].map((_, i) => (
//               <div
//                 key={i}
//                 className="absolute w-3 h-16 bg-gradient-to-b from-blue-400/10 to-cyan-400/10 rounded-sm animate-rotor-spin"
//                 style={{
//                   transform: `rotate(${i * 60}deg) translateY(-30px)`,
//                   animationDelay: `${i * 0.2}s`
//                 }}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Moving Lines - Magnetic Fields */}
//         <div className="absolute inset-0">
//           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-magnetic-field-1"></div>
//           <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-magnetic-field-2"></div>
//           <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-magnetic-field-3"></div>
//           <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-magnetic-field-4"></div>
//         </div>

//         {/* Stator Segments */}
//         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           {[...Array(8)].map((_, i) => (
//             <div
//               key={i}
//               className="absolute w-4 h-12 bg-gradient-to-b from-blue-400/5 to-cyan-400/5 rounded-sm animate-stator-pulse"
//               style={{
//                 transform: `rotate(${i * 45}deg) translateX(60px)`,
//                 animationDelay: `${i * 0.1}s`
//               }}
//             />
//           ))}
//         </div>

//         {/* Circuit Lines */}
//         <div className="absolute top-1/4 left-3/4">
//           <div className="w-16 h-1 bg-gradient-to-r from-blue-400/10 to-transparent animate-circuit-pulse-1"></div>
//           <div className="w-1 h-12 bg-gradient-to-b from-cyan-400/10 to-transparent animate-circuit-pulse-2 ml-8"></div>
//         </div>
//         <div className="absolute bottom-1/4 right-3/4">
//           <div className="w-12 h-1 bg-gradient-to-l from-purple-400/10 to-transparent animate-circuit-pulse-3"></div>
//           <div className="w-1 h-8 bg-gradient-to-t from-blue-400/10 to-transparent animate-circuit-pulse-4 mr-6"></div>
//         </div>
//       </div>
      
//       <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
//         {/* Hero Section with Enhanced Animations */}
//         <div className={`text-center mb-8 sm:mb-12 lg:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
//           {/* Animated CPU Icon with Mechanical Elements */}
//           <div className="relative inline-block mb-4 sm:mb-6">
//             <div className={`inline-flex items-center justify-center p-2 sm:p-3 bg-blue-500/20 rounded-full backdrop-blur-sm border border-blue-400/30 animate-pulse-glow ${heroLoaded ? 'scale-100 rotate-0' : 'scale-0 rotate-180'} transition-all duration-1000`}>
//               <Cpu className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-400" />
//             </div>
//             {/* Floating Tools around CPU */}
//             <div className={`absolute -top-3 -right-3 transition-all duration-700 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
//               <div className="p-1 bg-yellow-500/20 rounded-lg animate-tool-spin">
//                 <Wrench className="w-4 h-4 text-yellow-400" />
//               </div>
//             </div>
//             <div className={`absolute -bottom-3 -left-3 transition-all duration-700 delay-300 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
//               <div className="p-1 bg-orange-500/20 rounded-lg animate-tool-spin-reverse">
//                 <Hammer className="w-3 h-3 text-orange-400" />
//               </div>
//             </div>
//             <div className={`absolute -top-2 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-500 ${heroLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
//               <div className="p-1 bg-green-500/20 rounded-lg animate-tool-bounce">
//                 <Cog className="w-3 h-3 text-green-400" />
//               </div>
//             </div>
//           </div>
          
//           {/* Main Title with Mechanical Typography */}
//           <div className={`relative ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} transition-all duration-700 delay-200`}>
//             <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 tracking-tight px-2 relative">
//               <span className="relative inline-block">
//                 Digital Twin
//                 <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 animate-title-underline"></span>
//               </span>
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mt-1 sm:mt-2 animate-gradient mechanical-text">
//                 Induction Motor
//               </span>
//             </h1>
//           </div>
          
//           <p className={`text-base sm:text-lg lg:text-xl text-blue-200 mb-3 sm:mb-4 max-w-3xl mx-auto leading-relaxed px-4 transition-all duration-700 delay-400 ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             Experience real-time visualization and monitoring of industrial induction motors through advanced digital twin technology
//           </p>
          
//           <p className={`text-sm sm:text-base text-blue-300/80 max-w-2xl mx-auto px-4 transition-all duration-700 delay-600 ${heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
//             Simulate, analyze, and optimize motor performance with comprehensive data insights and predictive maintenance capabilities
//           </p>
//         </div>

//         {/* Main Feature Highlights */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 w-full max-w-6xl px-2">
//           {[
//             {
//               icon: Eye,
//               title: "Real-Time Visualization",
//               description: "Monitor motor operations with live 3D models and instant parameter updates for complete operational transparency",
//               color: "blue",
//               delay: "delay-100"
//             },
//             {
//               icon: Activity,
//               title: "Performance Monitoring",
//               description: "Track critical parameters including speed, torque, temperature, and efficiency metrics across all operational states",
//               color: "green",
//               delay: "delay-200"
//             },
//             {
//               icon: BarChart3,
//               title: "Data Analytics",
//               description: "Access comprehensive historical data analysis and predictive insights to optimize motor performance and lifespan",
//               color: "purple",
//               delay: "delay-300"
//             }
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className={`bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 lg:p-8 border border-white/10 hover:border-${feature.color}-400/50 hover:scale-105 hover:shadow-2xl hover:shadow-${feature.color}-500/20 transition-all duration-500 text-center animate-slide-up ${feature.delay}`}
//             >
//               <div className={`inline-flex p-3 sm:p-4 bg-${feature.color}-500/20 rounded-full mb-3 sm:mb-4 animate-bounce-subtle`}>
//                 <feature.icon className={`w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-${feature.color}-400`} />
//               </div>
//               <h3 className="text-lg sm:text-xl font-semibold text-white mb-2 sm:mb-3">
//                 {feature.title}
//               </h3>
//               <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
//                 {feature.description}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* What You Can Do Section */}
//         <div className={`w-full max-w-6xl mb-8 sm:mb-12 px-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-400`}>
//           <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in-up">
//             Explore Motor Operations
//           </h2>
          
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
//             {[
//               {
//                 icon: Gauge,
//                 title: "Interactive Simulation",
//                 description: "Control motor parameters and observe immediate responses in a safe virtual environment without physical equipment",
//                 color: "blue",
//                 delay: "delay-500"
//               },
//               {
//                 icon: Zap,
//                 title: "Electrical Analysis",
//                 description: "Examine voltage, current, power factor, and efficiency with detailed electrical characteristic visualizations",
//                 color: "yellow",
//                 delay: "delay-600"
//               },
//               {
//                 icon: Activity,
//                 title: "Mechanical Dynamics",
//                 description: "Study torque-speed relationships, load variations, and mechanical stress patterns during different operating conditions",
//                 color: "green",
//                 delay: "delay-700"
//               },
//               {
//                 icon: BarChart3,
//                 title: "Thermal Management",
//                 description: "Monitor temperature distribution and cooling efficiency to prevent overheating and extend motor operational life",
//                 color: "red",
//                 delay: "delay-800"
//               }
//             ].map((item, index) => (
//               <div
//                 key={index}
//                 className={`bg-white/5 backdrop-blur-md rounded-xl p-4 sm:p-6 border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-500 animate-slide-up ${item.delay} group`}
//               >
//                 <div className="flex items-start gap-3 sm:gap-4">
//                   <div className={`p-2 sm:p-3 bg-${item.color}-500/20 rounded-lg mt-1 group-hover:scale-110 transition-transform duration-300`}>
//                     <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 text-${item.color}-400`} />
//                   </div>
//                   <div className="flex-1">
//                     <h4 className="text-base sm:text-lg font-semibold text-white mb-1 sm:mb-2">
//                       {item.title}
//                     </h4>
//                     <p className="text-blue-200 text-xs sm:text-sm leading-relaxed">
//                       {item.description}
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Enhanced Key Benefits Section */}
//         <div className={`w-full max-w-6xl mb-8 sm:mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} delay-900`}>
//           <h2 className="text-2xl sm:text-3xl font-bold text-white text-center mb-6 sm:mb-8 animate-fade-in-up">
//             Key Benefits of Digital Twin Technology
//           </h2>
          
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
//             {/* Left Column - Main Benefits */}
//             <div className="space-y-6">
//               {[
//                 {
//                   icon: Cog,
//                   title: "Predictive Maintenance",
//                   description: "Identify potential failures before they occur with AI-powered anomaly detection",
//                   stats: "99.8% Accuracy",
//                   color: "blue",
//                   delay: "delay-1000"
//                 },
//                 {
//                   icon: Rocket,
//                   title: "Performance Optimization",
//                   description: "Maximize motor efficiency and reduce energy consumption by up to 25%",
//                   stats: "25% Energy Saved",
//                   color: "green",
//                   delay: "delay-1100"
//                 },
//                 {
//                   icon: Brain,
//                   title: "AI-Powered Insights",
//                   description: "Get intelligent recommendations based on machine learning algorithms",
//                   stats: "Smart Analytics",
//                   color: "purple",
//                   delay: "delay-1200"
//                 }
//               ].map((benefit, index) => (
//                 <div
//                   key={index}
//                   className={`bg-gradient-to-br from-slate-800/50 to-blue-900/30 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:border-${benefit.color}-400/50 hover:scale-105 transition-all duration-500 group animate-slide-up ${benefit.delay}`}
//                 >
//                   <div className="flex items-start gap-4">
//                     <div className={`p-3 bg-${benefit.color}-500/20 rounded-xl group-hover:scale-110 transition-transform duration-300`}>
//                       <benefit.icon className={`w-6 h-6 sm:w-7 sm:h-7 text-${benefit.color}-400`} />
//                     </div>
//                     <div className="flex-1">
//                       <div className="flex justify-between items-start mb-2">
//                         <h3 className="text-lg sm:text-xl font-bold text-white">{benefit.title}</h3>
//                         <span className={`text-xs font-semibold text-${benefit.color}-400 bg-${benefit.color}-500/20 px-2 py-1 rounded-full`}>
//                           {benefit.stats}
//                         </span>
//                       </div>
//                       <p className="text-blue-200 text-sm leading-relaxed">
//                         {benefit.description}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {/* Right Column - Additional Benefits with Icons */}
//             <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-blue-400/30 h-full">
//               <h3 className="text-xl font-bold text-white text-center mb-6">Operational Excellence</h3>
//               <div className="grid grid-cols-2 gap-4">
//                 {[
//                   { icon: Settings, label: "Real-time Monitoring", value: "24/7", color: "cyan" },
//                   { icon: Wrench, label: "Maintenance Cost", value: "-40%", color: "green" },
//                   { icon: Cctv, label: "Uptime", value: "99.9%", color: "blue" },
//                   { icon: TrendingUp, label: "Efficiency", value: "+18%", color: "purple" }
//                 ].map((item, index) => (
//                   <div
//                     key={index}
//                     className="bg-white/5 rounded-xl p-4 text-center hover:scale-105 transition-transform duration-300 animate-bounce-in"
//                     style={{ animationDelay: `${1300 + index * 100}ms` }}
//                   >
//                     <div className={`inline-flex p-2 bg-${item.color}-500/20 rounded-lg mb-2`}>
//                       <item.icon className={`w-5 h-5 text-${item.color}-400`} />
//                     </div>
//                     <div className={`text-2xl font-bold text-${item.color}-400 mb-1`}>{item.value}</div>
//                     <div className="text-xs text-blue-200">{item.label}</div>
//                   </div>
//                 ))}
//               </div>
              
//               {/* Progress Bars */}
//               <div className="mt-6 space-y-4">
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-blue-200">System Reliability</span>
//                     <span className="text-green-400 font-semibold">98%</span>
//                   </div>
//                   <div className="w-full bg-white/10 rounded-full h-2">
//                     <div className="bg-green-500 h-2 rounded-full animate-progress-width" style={{ width: '98%' }}></div>
//                   </div>
//                 </div>
//                 <div className="space-y-2">
//                   <div className="flex justify-between text-sm">
//                     <span className="text-blue-200">Data Accuracy</span>
//                     <span className="text-cyan-400 font-semibold">99.7%</span>
//                   </div>
//                   <div className="w-full bg-white/10 rounded-full h-2">
//                     <div className="bg-cyan-500 h-2 rounded-full animate-progress-width-delayed" style={{ width: '99.7%' }}></div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Professional Footer */}
//         <footer className={`w-full max-w-6xl mt-12 sm:mt-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} delay-1300`}>
//           <div className="bg-gradient-to-r from-slate-800/50 to-blue-900/50 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 hover:border-blue-400/30 transition-all duration-500">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
//               {/* Company Info */}
//               <div className="animate-slide-up delay-1400">
//                 <div className="flex items-center gap-3 mb-4">
//                   <div className="p-2 bg-blue-500/20 rounded-lg">
//                     <Factory className="w-6 h-6 text-blue-400" />
//                   </div>
//                   <h3 className="text-lg font-bold text-white">MotorTech Digital</h3>
//                 </div>
//                 <p className="text-blue-200 text-sm leading-relaxed mb-4">
//                   Leading provider of industrial digital twin solutions for motor optimization and predictive maintenance.
//                 </p>
//                 <div className="flex gap-3">
//                   {[Shield, TrendingUp, Users].map((Icon, index) => (
//                     <div key={index} className="p-2 bg-white/5 rounded-lg hover:bg-blue-500/20 transition-colors duration-300 cursor-pointer">
//                       <Icon className="w-4 h-4 text-blue-300" />
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               {/* Quick Links */}
//               <div className="animate-slide-up delay-1500">
//                 <h4 className="text-white font-semibold mb-4 text-lg">Quick Links</h4>
//                 <ul className="space-y-2">
//                   {['Dashboard', 'Simulations', 'Analytics', 'Documentation'].map((link, index) => (
//                     <li key={index}>
//                       <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
//                         <div className="w-1 h-1 bg-blue-400 rounded-full"></div>
//                         {link}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Features */}
//               <div className="animate-slide-up delay-1600">
//                 <h4 className="text-white font-semibold mb-4 text-lg">Features</h4>
//                 <ul className="space-y-2">
//                   {['Real-time Monitoring', '3D Visualization', 'Predictive Analytics', 'Performance Reports'].map((feature, index) => (
//                     <li key={index}>
//                       <a href="#" className="text-blue-200 hover:text-white text-sm transition-colors duration-300 flex items-center gap-2">
//                         <div className="w-1 h-1 bg-cyan-400 rounded-full"></div>
//                         {feature}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               {/* Contact Info */}
//               <div className="animate-slide-up delay-1700">
//                 <h4 className="text-white font-semibold mb-4 text-lg">Contact</h4>
//                 <div className="space-y-3">
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-green-500/20 rounded-lg">
//                       <Cog className="w-4 h-4 text-green-400" />
//                     </div>
//                     <div>
//                       <p className="text-white text-sm font-medium">Support</p>
//                       <p className="text-blue-200 text-xs">support@motortech.com</p>
//                     </div>
//                   </div>
//                   <div className="flex items-center gap-3">
//                     <div className="p-2 bg-purple-500/20 rounded-lg">
//                       <Database className="w-4 h-4 text-purple-400" />
//                     </div>
//                     <div>
//                       <p className="text-white text-sm font-medium">Sales</p>
//                       <p className="text-blue-200 text-xs">sales@motortech.com</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </footer>
//       </div>

//       <style jsx>{`
//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes slide-up {
//           from {
//             opacity: 0;
//             transform: translateY(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }

//         @keyframes pulse-glow {
//           0%, 100% {
//             box-shadow: 0 0 20px rgba(59, 130, 246, 0.4);
//           }
//           50% {
//             box-shadow: 0 0 40px rgba(59, 130, 246, 0.6);
//           }
//         }

//         @keyframes bounce-subtle {
//           0%, 100% {
//             transform: translateY(0);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes gradient {
//           0%, 100% {
//             background-position: 0% 50%;
//           }
//           50% {
//             background-position: 100% 50%;
//           }
//         }

//         @keyframes spin-slow {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse-slow {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         @keyframes spin-medium {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(-360deg);
//           }
//         }

//         @keyframes spin-fast {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes spin-reverse-medium {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         @keyframes pulse-core {
//           0%, 100% {
//             opacity: 0.1;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.2;
//             transform: scale(1.05);
//           }
//         }

//         @keyframes pulse-core-delayed {
//           0%, 100% {
//             opacity: 0.15;
//             transform: scale(1);
//           }
//           50% {
//             opacity: 0.25;
//             transform: scale(1.03);
//           }
//         }

//         @keyframes magnetic-field-1 {
//           0% {
//             transform: translateX(-100%);
//           }
//           100% {
//             transform: translateX(100%);
//           }
//         }

//         @keyframes magnetic-field-2 {
//           0% {
//             transform: translateX(100%);
//           }
//           100% {
//             transform: translateX(-100%);
//           }
//         }

//         @keyframes magnetic-field-3 {
//           0% {
//             transform: translateX(-100%);
//             opacity: 0.5;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(100%);
//             opacity: 0.5;
//           }
//         }

//         @keyframes magnetic-field-4 {
//           0% {
//             transform: translateX(100%);
//             opacity: 0.5;
//           }
//           50% {
//             opacity: 1;
//           }
//           100% {
//             transform: translateX(-100%);
//             opacity: 0.5;
//           }
//         }

//         @keyframes stator-pulse {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes count-up {
//           from {
//             transform: scale(0.5);
//             opacity: 0;
//           }
//           to {
//             transform: scale(1);
//             opacity: 1;
//           }
//         }

//         @keyframes title-underline {
//           from {
//             width: 0;
//           }
//           to {
//             width: 100%;
//           }
//         }

//         @keyframes float-bolt {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(180deg);
//           }
//         }

//         @keyframes float-nut {
//           0%, 100% {
//             transform: translateY(0px) rotate(45deg);
//           }
//           50% {
//             transform: translateY(-8px) rotate(225deg);
//           }
//         }

//         @keyframes float-bolt-delayed {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-6px) rotate(90deg);
//           }
//         }

//         @keyframes rotor-spin {
//           from {
//             transform: rotate(var(--start-rot)) translateY(-30px) rotate(0deg);
//           }
//           to {
//             transform: rotate(var(--start-rot)) translateY(-30px) rotate(360deg);
//           }
//         }

//         @keyframes progress-width {
//           from {
//             width: 0%;
//           }
//           to {
//             width: var(--target-width);
//           }
//         }

//         @keyframes float-tool-1 {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-15px) rotate(10deg);
//           }
//         }

//         @keyframes float-tool-2 {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-12px) rotate(-5deg);
//           }
//         }

//         @keyframes float-tool-3 {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-8px) rotate(8deg);
//           }
//         }

//         @keyframes float-tool-4 {
//           0%, 100% {
//             transform: translateY(0px) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-10px) rotate(-8deg);
//           }
//         }

//         @keyframes tool-spin {
//           from {
//             transform: rotate(0deg);
//           }
//           to {
//             transform: rotate(360deg);
//           }
//         }

//         @keyframes tool-spin-reverse {
//           from {
//             transform: rotate(360deg);
//           }
//           to {
//             transform: rotate(0deg);
//           }
//         }

//         @keyframes tool-bounce {
//           0%, 100% {
//             transform: translateY(0px);
//           }
//           50% {
//             transform: translateY(-5px);
//           }
//         }

//         @keyframes circuit-pulse-1 {
//           0%, 100% {
//             opacity: 0.3;
//           }
//           50% {
//             opacity: 0.8;
//           }
//         }

//         @keyframes circuit-pulse-2 {
//           0%, 100% {
//             opacity: 0.4;
//           }
//           50% {
//             opacity: 0.9;
//           }
//         }

//         @keyframes circuit-pulse-3 {
//           0%, 100% {
//             opacity: 0.2;
//           }
//           50% {
//             opacity: 0.7;
//           }
//         }

//         @keyframes circuit-pulse-4 {
//           0%, 100% {
//             opacity: 0.5;
//           }
//           50% {
//             opacity: 1;
//           }
//         }
        
//         .animate-fade-in {
//           animation: fade-in 0.8s ease-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 0.8s ease-out backwards;
//         }

//         .animate-fade-in-up {
//           animation: fade-in 1s ease-out;
//         }

//         .animate-pulse-glow {
//           animation: pulse-glow 2s ease-in-out infinite;
//         }

//         .animate-bounce-subtle {
//           animation: bounce-subtle 2s ease-in-out infinite;
//         }

//         .animate-gradient {
//           background-size: 200% 200%;
//           animation: gradient 3s ease infinite;
//         }

//         .animate-spin-slow {
//           animation: spin-slow 20s linear infinite;
//         }

//         .animate-spin-reverse-slow {
//           animation: spin-reverse-slow 15s linear infinite;
//         }

//         .animate-spin-medium {
//           animation: spin-medium 12s linear infinite;
//         }

//         .animate-spin-fast {
//           animation: spin-fast 3s linear infinite;
//         }

//         .animate-spin-reverse-medium {
//           animation: spin-reverse-medium 5s linear infinite;
//         }

//         .animate-pulse-core {
//           animation: pulse-core 4s ease-in-out infinite;
//         }

//         .animate-pulse-core-delayed {
//           animation: pulse-core-delayed 3s ease-in-out infinite;
//         }

//         .animate-magnetic-field-1 {
//           animation: magnetic-field-1 8s linear infinite;
//         }

//         .animate-magnetic-field-2 {
//           animation: magnetic-field-2 6s linear infinite;
//         }

//         .animate-magnetic-field-3 {
//           animation: magnetic-field-3 10s linear infinite;
//         }

//         .animate-magnetic-field-4 {
//           animation: magnetic-field-4 7s linear infinite;
//         }

//         .animate-stator-pulse {
//           animation: stator-pulse 2s ease-in-out infinite;
//         }

//         .animate-count-up {
//           animation: count-up 0.6s ease-out backwards;
//         }

//         .animate-title-underline {
//           animation: title-underline 1s ease-out 0.5s forwards;
//         }

//         .animate-float-bolt {
//           animation: float-bolt 4s ease-in-out infinite;
//         }

//         .animate-float-nut {
//           animation: float-nut 5s ease-in-out infinite;
//         }

//         .animate-float-bolt-delayed {
//           animation: float-bolt-delayed 3s ease-in-out infinite;
//         }

//         .animate-rotor-spin {
//           animation: rotor-spin 8s linear infinite;
//         }

//         .animate-progress-width {
//           animation: progress-width 1.5s ease-out forwards;
//         }

//         .animate-progress-width-delayed {
//           animation: progress-width 1.5s ease-out 0.5s forwards;
//         }

//         .animate-float-tool-1 {
//           animation: float-tool-1 6s ease-in-out infinite;
//         }

//         .animate-float-tool-2 {
//           animation: float-tool-2 7s ease-in-out infinite;
//         }

//         .animate-float-tool-3 {
//           animation: float-tool-3 5s ease-in-out infinite;
//         }

//         .animate-float-tool-4 {
//           animation: float-tool-4 8s ease-in-out infinite;
//         }

//         .animate-tool-spin {
//           animation: tool-spin 4s linear infinite;
//         }

//         .animate-tool-spin-reverse {
//           animation: tool-spin-reverse 3s linear infinite;
//         }

//         .animate-tool-bounce {
//           animation: tool-bounce 2s ease-in-out infinite;
//         }

//         .animate-circuit-pulse-1 {
//           animation: circuit-pulse-1 3s ease-in-out infinite;
//         }

//         .animate-circuit-pulse-2 {
//           animation: circuit-pulse-2 4s ease-in-out infinite;
//         }

//         .animate-circuit-pulse-3 {
//           animation: circuit-pulse-3 5s ease-in-out infinite;
//         }

//         .animate-circuit-pulse-4 {
//           animation: circuit-pulse-4 6s ease-in-out infinite;
//         }

//         .delay-100 {
//           animation-delay: 0.1s;
//         }

//         .delay-200 {
//           animation-delay: 0.2s;
//         }

//         .delay-300 {
//           animation-delay: 0.3s;
//         }

//         .delay-400 {
//           animation-delay: 0.4s;
//         }

//         .delay-500 {
//           animation-delay: 0.5s;
//         }

//         .delay-600 {
//           animation-delay: 0.6s;
//         }

//         .delay-700 {
//           animation-delay: 0.7s;
//         }

//         .delay-800 {
//           animation-delay: 0.8s;
//         }

//         .delay-900 {
//           animation-delay: 0.9s;
//         }

//         .delay-1000 {
//           animation-delay: 1s;
//         }

//         .delay-1100 {
//           animation-delay: 1.1s;
//         }

//         .delay-1200 {
//           animation-delay: 1.2s;
//         }

//         .delay-1300 {
//           animation-delay: 1.3s;
//         }

//         .delay-1400 {
//           animation-delay: 1.4s;
//         }

//         .delay-1500 {
//           animation-delay: 1.5s;
//         }

//         .delay-1600 {
//           animation-delay: 1.6s;
//         }

//         .delay-1700 {
//           animation-delay: 1.7s;
//         }

//         .delay-1800 {
//           animation-delay: 1.8s;
//         }
        
//         .bg-grid-pattern {
//           background-image: 
//             linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
//             linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
//           background-size: 50px 50px;
//           animation: grid-move 20s linear infinite;
//         }

//         @keyframes grid-move {
//           0% {
//             background-position: 0 0;
//           }
//           100% {
//             background-position: 50px 50px;
//           }
//         }

//         .mechanical-text {
//           text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
//         }

//         @media (max-width: 640px) {
//           .bg-grid-pattern {
//             background-size: 30px 30px;
//           }
//         }
//       `}</style>
//     </div>
//   );
// }



"use client"

import { useState, useEffect } from 'react';
import MechanicalBackground from '../components/MechanicalBackground';
import HeroSection from '../components/HeroSection';
import FeatureHighlights from '../components/FeatureHighlights';
import OperationsSection from '../components/OperationsSection';
import KeyBenefits from '../components/KeyBenefits';
import ProfessionalFooter from '../components/ProfessionalFooter';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [heroLoaded, setHeroLoaded] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setHeroLoaded(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden">
      <MechanicalBackground />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8 py-12">
        <HeroSection isVisible={isVisible} heroLoaded={heroLoaded} />
        <FeatureHighlights />
        <OperationsSection isVisible={isVisible} />
        <KeyBenefits isVisible={isVisible} />
        <ProfessionalFooter isVisible={isVisible} />
      </div>

      <style jsx>{`
        /* Include all your CSS animations here */
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Add all other animation keyframes from your original code */
        /* ... (copy all the animation keyframes from your original code) ... */

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out backwards;
        }

        /* Add all other animation classes from your original code */
        /* ... (copy all the animation classes from your original code) ... */

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(59, 130, 246, 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(59, 130, 246, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: grid-move 20s linear infinite;
        }

        @keyframes grid-move {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }

        .mechanical-text {
          text-shadow: 0 0 20px rgba(59, 130, 246, 0.5);
        }

        @media (max-width: 640px) {
          .bg-grid-pattern {
            background-size: 30px 30px;
          }
        }
      `}</style>
    </div>
  );
}