// // "use client"

// // import { Wrench, Hammer, Cog, Settings } from 'lucide-react';

// // export default function MechanicalBackground() {
// //   return (
// //     <>
// //       {/* Animated Mechanical Background */}
// //       <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
// //       {/* Mechanical Elements Animation */}
// //       <div className="absolute inset-0 overflow-hidden opacity-20">
// //         {/* Your Gear Image with Rotation Animation */}
// //         <div className="absolute top-1/4 left-1/4 animate-spin-slow">
// //           <img 
// //             src="/api/placeholder/80/80" 
// //             alt="Gear" 
// //             className="w-20 h-20 opacity-30"
// //             onError={(e) => {
// //               e.target.style.display = 'none';
// //               const fallbackGear = document.createElement('div');
// //               fallbackGear.className = 'w-20 h-20 border-4 border-blue-400/30 rounded-full border-dashed';
// //               fallbackGear.innerHTML = '<div class="absolute inset-2 border-2 border-blue-400/20 rounded-full"></div>';
// //               e.target.parentNode.appendChild(fallbackGear);
// //             }}
// //           />
// //         </div>
// //         <div className="absolute top-1/3 right-1/4 animate-spin-reverse-slow">
// //           <img 
// //             src="/api/placeholder/64/64" 
// //             alt="Gear" 
// //             className="w-16 h-16 opacity-25"
// //             onError={(e) => {
// //               e.target.style.display = 'none';
// //               const fallbackGear = document.createElement('div');
// //               fallbackGear.className = 'w-16 h-16 border-4 border-cyan-400/30 rounded-full border-dashed';
// //               fallbackGear.innerHTML = '<div class="absolute inset-2 border-2 border-cyan-400/20 rounded-full"></div>';
// //               e.target.parentNode.appendChild(fallbackGear);
// //             }}
// //           />
// //         </div>
// //         <div className="absolute bottom-1/4 left-1/3 animate-spin-medium">
// //           <img 
// //             src="/api/placeholder/48/48" 
// //             alt="Gear" 
// //             className="w-12 h-12 opacity-20"
// //             onError={(e) => {
// //               e.target.style.display = 'none';
// //               const fallbackGear = document.createElement('div');
// //               fallbackGear.className = 'w-12 h-12 border-4 border-blue-400/20 rounded-full border-dashed';
// //               fallbackGear.innerHTML = '<div class="absolute inset-1 border-1 border-blue-400/15 rounded-full"></div>';
// //               e.target.parentNode.appendChild(fallbackGear);
// //             }}
// //           />
// //         </div>

// //         {/* Tools Animation */}
// //         <div className="absolute top-1/6 right-1/6 animate-float-tool-1">
// //           <div className="p-2 bg-yellow-500/10 rounded-lg rotate-45">
// //             <Wrench className="w-6 h-6 text-yellow-400/40" />
// //           </div>
// //         </div>
// //         <div className="absolute bottom-1/5 left-1/5 animate-float-tool-2">
// //           <div className="p-2 bg-orange-500/10 rounded-lg -rotate-12">
// //             <Hammer className="w-5 h-5 text-orange-400/40" />
// //           </div>
// //         </div>
// //         <div className="absolute top-2/3 right-1/5 animate-float-tool-3">
// //           <div className="p-2 bg-red-500/10 rounded-lg rotate-12">
// //             <Cog className="w-4 h-4 text-red-400/40" />
// //           </div>
// //         </div>
// //         <div className="absolute bottom-1/3 left-1/4 animate-float-tool-4">
// //           <div className="p-2 bg-green-500/10 rounded-lg -rotate-45">
// //             <Settings className="w-5 h-5 text-green-400/40" />
// //           </div>
// //         </div>

// //         {/* Bolts and Nuts */}
// //         <div className="absolute top-1/5 right-1/5 animate-float-bolt">
// //           <div className="w-4 h-8 bg-gradient-to-b from-blue-400/20 to-cyan-400/20 rounded-sm bolt"></div>
// //         </div>
// //         <div className="absolute bottom-1/3 right-1/6 animate-float-nut">
// //           <div className="w-6 h-6 border-2 border-cyan-400/20 rounded-sm nut transform rotate-45"></div>
// //         </div>
// //         <div className="absolute top-2/3 left-1/6 animate-float-bolt-delayed">
// //           <div className="w-3 h-6 bg-gradient-to-b from-blue-400/15 to-cyan-400/15 rounded-sm bolt-small"></div>
// //         </div>

// //         {/* Pulsing Motor Core */}
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //           <div className="w-40 h-40 border-4 border-cyan-400/10 rounded-full animate-pulse-core"></div>
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-4 border-blue-400/15 rounded-full animate-pulse-core-delayed"></div>
// //           {/* Rotor Bars */}
// //           <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //             {[...Array(6)].map((_, i) => (
// //               <div
// //                 key={i}
// //                 className="absolute w-3 h-16 bg-gradient-to-b from-blue-400/10 to-cyan-400/10 rounded-sm animate-rotor-spin"
// //                 style={{
// //                   transform: `rotate(${i * 60}deg) translateY(-30px)`,
// //                   animationDelay: `${i * 0.2}s`
// //                 }}
// //               />
// //             ))}
// //           </div>
// //         </div>

// //         {/* Moving Lines - Magnetic Fields */}
// //         <div className="absolute inset-0">
// //           <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-magnetic-field-1"></div>
// //           <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-magnetic-field-2"></div>
// //           <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-400/10 to-transparent animate-magnetic-field-3"></div>
// //           <div className="absolute top-3/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-magnetic-field-4"></div>
// //         </div>

// //         {/* Stator Segments */}
// //         <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
// //           {[...Array(8)].map((_, i) => (
// //             <div
// //               key={i}
// //               className="absolute w-4 h-12 bg-gradient-to-b from-blue-400/5 to-cyan-400/5 rounded-sm animate-stator-pulse"
// //               style={{
// //                 transform: `rotate(${i * 45}deg) translateX(60px)`,
// //                 animationDelay: `${i * 0.1}s`
// //               }}
// //             />
// //           ))}
// //         </div>

// //         {/* Circuit Lines */}
// //         <div className="absolute top-1/4 left-3/4">
// //           <div className="w-16 h-1 bg-gradient-to-r from-blue-400/10 to-transparent animate-circuit-pulse-1"></div>
// //           <div className="w-1 h-12 bg-gradient-to-b from-cyan-400/10 to-transparent animate-circuit-pulse-2 ml-8"></div>
// //         </div>
// //         <div className="absolute bottom-1/4 right-3/4">
// //           <div className="w-12 h-1 bg-gradient-to-l from-purple-400/10 to-transparent animate-circuit-pulse-3"></div>
// //           <div className="w-1 h-8 bg-gradient-to-t from-blue-400/10 to-transparent animate-circuit-pulse-4 mr-6"></div>
// //         </div>
// //       </div>
// //     </>
// //   );
// // }


// "use client"

// import { Wrench, Hammer, Cog, Settings } from 'lucide-react';

// export default function MechanicalBackground() {
//   return (
//     <>
//       {/* Animated Mechanical Background */}
//       <div className="absolute inset-0 bg-grid-pattern opacity-8"></div>
      
//       {/* Mechanical Elements Animation */}
//       <div className="absolute inset-0 overflow-hidden opacity-15">
//         {/* Settings Gears with Slow Rotation */}
//         <div className="absolute top-1/4 left-1/4 animate-settings-spin-1">
//           <div className="w-20 h-20 border-4 border-blue-400/20 rounded-full border-dashed relative">
//             <div className="absolute inset-3 border-2 border-blue-400/15 rounded-full"></div>
//             <Settings className="w-8 h-8 text-blue-400/30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//           </div>
//         </div>
        
//         <div className="absolute top-1/3 right-1/4 animate-settings-spin-2">
//           <div className="w-16 h-16 border-4 border-cyan-400/20 rounded-full border-dashed relative">
//             <div className="absolute inset-2 border-2 border-cyan-400/15 rounded-full"></div>
//             <Cog className="w-6 h-6 text-cyan-400/25 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//           </div>
//         </div>
        
//         <div className="absolute bottom-1/4 left-1/3 animate-settings-spin-3">
//           <div className="w-12 h-12 border-4 border-blue-400/15 rounded-full border-dashed relative">
//             <div className="absolute inset-1 border-1 border-blue-400/10 rounded-full"></div>
//             <Settings className="w-4 h-4 text-blue-400/20 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
//           </div>
//         </div>

//         {/* Large Background Settings Circles */}
//         <div className="absolute top-1/6 left-1/6 animate-settings-orbital-1">
//           <div className="w-32 h-32 border-2 border-purple-400/10 rounded-full border-dotted">
//             <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
//               <Cog className="w-4 h-4 text-purple-400/20 animate-spin-slow" />
//             </div>
//           </div>
//         </div>
        
//         <div className="absolute bottom-1/6 right-1/6 animate-settings-orbital-2">
//           <div className="w-40 h-40 border-2 border-cyan-400/8 rounded-full border-dotted">
//             <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
//               <Settings className="w-5 h-5 text-cyan-400/15 animate-spin-reverse-slow" />
//             </div>
//           </div>
//         </div>

//         {/* Tools with Gentle Floating */}
//         <div className="absolute top-1/6 right-1/6 animate-settings-float-1">
//           <div className="p-2 bg-blue-500/5 rounded-lg">
//             <Wrench className="w-5 h-5 text-blue-400/25" />
//           </div>
//         </div>
        
//         <div className="absolute bottom-1/5 left-1/5 animate-settings-float-2">
//           <div className="p-2 bg-cyan-500/5 rounded-lg">
//             <Hammer className="w-4 h-4 text-cyan-400/25" />
//           </div>
//         </div>

//         {/* Configuration Dots and Lines */}
//         <div className="absolute top-1/2 left-1/4">
//           <div className="flex space-x-8 animate-pulse-slow">
//             <div className="w-2 h-2 bg-blue-400/20 rounded-full"></div>
//             <div className="w-2 h-2 bg-cyan-400/20 rounded-full"></div>
//             <div className="w-2 h-2 bg-blue-400/20 rounded-full"></div>
//           </div>
//         </div>

//         {/* Settings Panel Outline */}
//         <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
//           <div className="w-64 h-48 border-2 border-blue-400/10 rounded-xl border-dashed animate-panel-glow">
//             <div className="absolute inset-4 border border-cyan-400/5 rounded-lg"></div>
//             {/* Settings Grid */}
//             <div className="absolute inset-6 grid grid-cols-3 gap-4 opacity-30">
//               {[...Array(9)].map((_, i) => (
//                 <div key={i} className="flex items-center justify-center">
//                   <div className="w-3 h-3 border border-blue-400/20 rounded-sm animate-pulse-slow"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Rotating Settings Dial */}
//         <div className="absolute bottom-1/3 right-1/4 animate-dial-rotate">
//           <div className="w-16 h-16 border-2 border-cyan-400/15 rounded-full relative">
//             <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
//               <div className="w-1 h-3 bg-cyan-400/30 rounded-full"></div>
//             </div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-blue-400/10 rounded-full"></div>
//           </div>
//         </div>

//         {/* Slow Moving Waves */}
//         <div className="absolute bottom-0 left-0 w-full">
//           <div className="h-1 bg-gradient-to-r from-transparent via-blue-400/5 to-transparent animate-wave-slow"></div>
//         </div>

//         {/* Pulsing Control Points */}
//         <div className="absolute top-3/4 left-1/4">
//           <div className="flex space-x-4 animate-pulse-sequential">
//             <div className="w-3 h-3 border-2 border-blue-400/20 rounded-full"></div>
//             <div className="w-3 h-3 border-2 border-cyan-400/20 rounded-full"></div>
//             <div className="w-3 h-3 border-2 border-blue-400/20 rounded-full"></div>
//           </div>
//         </div>

//         {/* Configuration Lines */}
//         <div className="absolute top-1/4 right-1/3">
//           <div className="w-20 h-1 bg-gradient-to-l from-blue-400/10 to-transparent animate-line-pulse"></div>
//           <div className="w-1 h-12 bg-gradient-to-b from-cyan-400/10 to-transparent animate-line-pulse-delayed ml-4"></div>
//         </div>
//       </div>

//       {/* Add this to your CSS */}
//       <style jsx>{`
//         @keyframes settings-spin-1 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes settings-spin-2 {
//           from { transform: rotate(360deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes settings-spin-3 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(-360deg); }
//         }
        
//         @keyframes settings-orbital-1 {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(180deg); }
//         }
        
//         @keyframes settings-orbital-2 {
//           from { transform: rotate(180deg); }
//           to { transform: rotate(0deg); }
//         }
        
//         @keyframes settings-float-1 {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(-10px) translateX(5px); }
//         }
        
//         @keyframes settings-float-2 {
//           0%, 100% { transform: translateY(0px) translateX(0px); }
//           50% { transform: translateY(8px) translateX(-5px); }
//         }
        
//         @keyframes dial-rotate {
//           from { transform: rotate(0deg); }
//           to { transform: rotate(360deg); }
//         }
        
//         @keyframes panel-glow {
//           0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.05); }
//           50% { box-shadow: 0 0 30px rgba(34, 211, 238, 0.08); }
//         }
        
//         @keyframes wave-slow {
//           0% { transform: translateX(-100%); }
//           100% { transform: translateX(100%); }
//         }
        
//         @keyframes pulse-sequential {
//           0% { opacity: 0.3; }
//           33% { opacity: 0.6; }
//           66% { opacity: 0.3; }
//           100% { opacity: 0.3; }
//         }
        
//         @keyframes line-pulse {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.3; }
//         }
        
//         @keyframes line-pulse-delayed {
//           0%, 100% { opacity: 0.1; }
//           50% { opacity: 0.25; }
//         }

//         .animate-settings-spin-1 {
//           animation: settings-spin-1 25s linear infinite;
//         }
        
//         .animate-settings-spin-2 {
//           animation: settings-spin-2 30s linear infinite;
//         }
        
//         .animate-settings-spin-3 {
//           animation: settings-spin-3 20s linear infinite;
//         }
        
//         .animate-settings-orbital-1 {
//           animation: settings-orbital-1 40s linear infinite;
//         }
        
//         .animate-settings-orbital-2 {
//           animation: settings-orbital-2 35s linear infinite;
//         }
        
//         .animate-settings-float-1 {
//           animation: settings-float-1 8s ease-in-out infinite;
//         }
        
//         .animate-settings-float-2 {
//           animation: settings-float-2 10s ease-in-out infinite;
//         }
        
//         .animate-dial-rotate {
//           animation: dial-rotate 15s linear infinite;
//         }
        
//         .animate-panel-glow {
//           animation: panel-glow 6s ease-in-out infinite;
//         }
        
//         .animate-wave-slow {
//           animation: wave-slow 20s linear infinite;
//         }
        
//         .animate-pulse-sequential > div:nth-child(1) {
//           animation: pulse-sequential 3s ease-in-out infinite;
//         }
        
//         .animate-pulse-sequential > div:nth-child(2) {
//           animation: pulse-sequential 3s ease-in-out infinite 1s;
//         }
        
//         .animate-pulse-sequential > div:nth-child(3) {
//           animation: pulse-sequential 3s ease-in-out infinite 2s;
//         }
        
//         .animate-line-pulse {
//           animation: line-pulse 4s ease-in-out infinite;
//         }
        
//         .animate-line-pulse-delayed {
//           animation: line-pulse-delayed 4s ease-in-out infinite 2s;
//         }
        
//         .animate-pulse-slow {
//           animation: pulse 6s ease-in-out infinite;
//         }
        
//         @keyframes pulse {
//           0%, 100% { opacity: 0.2; }
//           50% { opacity: 0.4; }
//         }
//       `}</style>
//     </>
//   );
// }


"use client"

import { Wrench, Hammer, Cog, Settings } from 'lucide-react';

export default function MechanicalBackground() {
  return (
    <>
      {/* Animated Mechanical Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20"></div>
      
      {/* Mechanical Elements Animation */}
      <div className="absolute inset-0 overflow-hidden opacity-40">
        {/* Settings Gears with Slow Rotation - More Visible */}
        <div className="absolute top-1/4 left-1/4 animate-settings-spin-1">
          <div className="w-24 h-24 border-4 border-blue-400/40 rounded-full border-dashed relative">
            <div className="absolute inset-4 border-2 border-blue-400/30 rounded-full"></div>
            <Settings className="w-10 h-10 text-blue-400/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="absolute top-1/3 right-1/4 animate-settings-spin-2">
          <div className="w-20 h-20 border-4 border-cyan-400/40 rounded-full border-dashed relative">
            <div className="absolute inset-3 border-2 border-cyan-400/30 rounded-full"></div>
            <Cog className="w-8 h-8 text-cyan-400/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>
        
        <div className="absolute bottom-1/4 left-1/3 animate-settings-spin-3">
          <div className="w-16 h-16 border-4 border-blue-400/35 rounded-full border-dashed relative">
            <div className="absolute inset-2 border-2 border-blue-400/25 rounded-full"></div>
            <Settings className="w-6 h-6 text-blue-400/40 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Large Background Settings Circles - More Visible */}
        <div className="absolute top-1/6 left-1/6 animate-settings-orbital-1">
          <div className="w-40 h-40 border-3 border-purple-400/25 rounded-full border-dotted">
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
              <Cog className="w-6 h-6 text-purple-400/40 animate-spin-slow" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-1/6 right-1/6 animate-settings-orbital-2">
          <div className="w-48 h-48 border-3 border-cyan-400/20 rounded-full border-dotted">
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
              <Settings className="w-7 h-7 text-cyan-400/35 animate-spin-reverse-slow" />
            </div>
          </div>
        </div>

        {/* Tools with More Visible Floating */}
        <div className="absolute top-1/6 right-1/6 animate-settings-float-1">
          <div className="p-3 bg-blue-500/15 rounded-lg backdrop-blur-sm">
            <Wrench className="w-7 h-7 text-blue-400/60" />
          </div>
        </div>
        
        <div className="absolute bottom-1/5 left-1/5 animate-settings-float-2">
          <div className="p-3 bg-cyan-500/15 rounded-lg backdrop-blur-sm">
            <Hammer className="w-6 h-6 text-cyan-400/60" />
          </div>
        </div>

        {/* More Visible Configuration Dots and Lines */}
        <div className="absolute top-1/2 left-1/4">
          <div className="flex space-x-10 animate-pulse-slow">
            <div className="w-3 h-3 bg-blue-400/40 rounded-full shadow-lg shadow-blue-400/20"></div>
            <div className="w-3 h-3 bg-cyan-400/40 rounded-full shadow-lg shadow-cyan-400/20"></div>
            <div className="w-3 h-3 bg-blue-400/40 rounded-full shadow-lg shadow-blue-400/20"></div>
          </div>
        </div>

        {/* More Visible Settings Panel Outline */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-72 h-52 border-3 border-blue-400/25 rounded-xl border-dashed animate-panel-glow backdrop-blur-sm bg-blue-400/5">
            <div className="absolute inset-5 border-2 border-cyan-400/15 rounded-lg"></div>
            {/* Settings Grid */}
            <div className="absolute inset-8 grid grid-cols-3 gap-6 opacity-50">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="flex items-center justify-center">
                  <div className="w-4 h-4 border-2 border-blue-400/30 rounded-sm animate-pulse-slow bg-blue-400/10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More Visible Rotating Settings Dial */}
        <div className="absolute bottom-1/3 right-1/4 animate-dial-rotate">
          <div className="w-20 h-20 border-3 border-cyan-400/25 rounded-full relative backdrop-blur-sm bg-cyan-400/5">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1">
              <div className="w-2 h-4 bg-cyan-400/50 rounded-full shadow shadow-cyan-400/30"></div>
            </div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-blue-400/20 rounded-full"></div>
          </div>
        </div>

        {/* More Visible Slow Moving Waves */}
        <div className="absolute bottom-0 left-0 w-full">
          <div className="h-2 bg-gradient-to-r from-transparent via-blue-400/15 to-transparent animate-wave-slow"></div>
          <div className="h-1 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent animate-wave-slow mt-2" style={{animationDelay: '2s'}}></div>
        </div>

        {/* More Visible Pulsing Control Points */}
        <div className="absolute top-3/4 left-1/4">
          <div className="flex space-x-6 animate-pulse-sequential">
            <div className="w-4 h-4 border-2 border-blue-400/40 rounded-full bg-blue-400/10 shadow shadow-blue-400/20"></div>
            <div className="w-4 h-4 border-2 border-cyan-400/40 rounded-full bg-cyan-400/10 shadow shadow-cyan-400/20"></div>
            <div className="w-4 h-4 border-2 border-blue-400/40 rounded-full bg-blue-400/10 shadow shadow-blue-400/20"></div>
          </div>
        </div>

        {/* More Visible Configuration Lines */}
        <div className="absolute top-1/4 right-1/3">
          <div className="w-24 h-1.5 bg-gradient-to-l from-blue-400/25 to-transparent animate-line-pulse shadow shadow-blue-400/10"></div>
          <div className="w-1.5 h-16 bg-gradient-to-b from-cyan-400/25 to-transparent animate-line-pulse-delayed ml-6 shadow shadow-cyan-400/10"></div>
        </div>

        {/* Additional Visible Elements */}
        <div className="absolute top-2/3 right-1/3 animate-settings-float-3">
          <div className="p-3 bg-purple-500/15 rounded-lg backdrop-blur-sm">
            <Cog className="w-6 h-6 text-purple-400/60" />
          </div>
        </div>

        {/* Connection Lines */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-64 h-1 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 animate-connection-pulse rotate-45"></div>
          <div className="w-64 h-1 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 animate-connection-pulse -rotate-45 mt-4"></div>
        </div>
      </div>

      {/* Add this to your CSS */}
      <style jsx>{`
        @keyframes settings-spin-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes settings-spin-2 {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes settings-spin-3 {
          from { transform: rotate(0deg); }
          to { transform: rotate(-360deg); }
        }
        
        @keyframes settings-orbital-1 {
          from { transform: rotate(0deg); }
          to { transform: rotate(180deg); }
        }
        
        @keyframes settings-orbital-2 {
          from { transform: rotate(180deg); }
          to { transform: rotate(0deg); }
        }
        
        @keyframes settings-float-1 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-15px) translateX(8px) scale(1.1); }
        }
        
        @keyframes settings-float-2 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(12px) translateX(-8px) scale(1.1); }
        }
        
        @keyframes settings-float-3 {
          0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-10px) translateX(-10px) scale(1.05); }
        }
        
        @keyframes dial-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes panel-glow {
          0%, 100% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.15);
            border-color: rgba(59, 130, 246, 0.3);
          }
          50% { 
            box-shadow: 0 0 50px rgba(34, 211, 238, 0.2);
            border-color: rgba(34, 211, 238, 0.4);
          }
        }
        
        @keyframes wave-slow {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes pulse-sequential {
          0% { opacity: 0.4; transform: scale(1); }
          33% { opacity: 0.8; transform: scale(1.2); }
          66% { opacity: 0.4; transform: scale(1); }
          100% { opacity: 0.4; transform: scale(1); }
        }
        
        @keyframes line-pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.6; }
        }
        
        @keyframes line-pulse-delayed {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }
        
        @keyframes connection-pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.7; }
        }

        .animate-settings-spin-1 {
          animation: settings-spin-1 25s linear infinite;
        }
        
        .animate-settings-spin-2 {
          animation: settings-spin-2 30s linear infinite;
        }
        
        .animate-settings-spin-3 {
          animation: settings-spin-3 20s linear infinite;
        }
        
        .animate-settings-orbital-1 {
          animation: settings-orbital-1 40s linear infinite;
        }
        
        .animate-settings-orbital-2 {
          animation: settings-orbital-2 35s linear infinite;
        }
        
        .animate-settings-float-1 {
          animation: settings-float-1 6s ease-in-out infinite;
        }
        
        .animate-settings-float-2 {
          animation: settings-float-2 7s ease-in-out infinite;
        }
        
        .animate-settings-float-3 {
          animation: settings-float-3 8s ease-in-out infinite;
        }
        
        .animate-dial-rotate {
          animation: dial-rotate 15s linear infinite;
        }
        
        .animate-panel-glow {
          animation: panel-glow 4s ease-in-out infinite;
        }
        
        .animate-wave-slow {
          animation: wave-slow 15s linear infinite;
        }
        
        .animate-pulse-sequential > div:nth-child(1) {
          animation: pulse-sequential 3s ease-in-out infinite;
        }
        
        .animate-pulse-sequential > div:nth-child(2) {
          animation: pulse-sequential 3s ease-in-out infinite 1s;
        }
        
        .animate-pulse-sequential > div:nth-child(3) {
          animation: pulse-sequential 3s ease-in-out infinite 2s;
        }
        
        .animate-line-pulse {
          animation: line-pulse 3s ease-in-out infinite;
        }
        
        .animate-line-pulse-delayed {
          animation: line-pulse-delayed 3s ease-in-out infinite 1.5s;
        }
        
        .animate-connection-pulse {
          animation: connection-pulse 4s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse 4s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.4; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }
      `}</style>
    </>
  );
}