// "use client";
// import { Canvas, useFrame, useThree } from "@react-three/fiber";
// import { OrbitControls, useGLTF, Html } from "@react-three/drei";
// import { useRef, useEffect, useState } from "react";
// import * as THREE from "three";
// import { GLTF } from "three-stdlib";
// import { useMotorStore } from "../app/store/useMotorStore";

// // Define proper type for GLTF result
// type GLTFResult = GLTF & {
//   nodes: Record<string, THREE.Mesh>;
//   materials: Record<string, THREE.Material>;
// };

// export default function MotorViewer() {
//   const {
//     isMotorRunning,
//     telemetry,
//     sensorFaults,
//     setIsMotorRunning,
//     fetchMotorData,
//     clearSensorFaults
//   } = useMotorStore();

//   // 📈 Fetch data periodically when motor is running
//   useEffect(() => {
//     let interval: NodeJS.Timeout | null = null;

//     if (isMotorRunning) {
//       fetchMotorData();
//       interval = setInterval(() => {
//         fetchMotorData();
//       }, 1000);
//     }

//     return () => {
//       if (interval) clearInterval(interval);
//     };
//   }, [isMotorRunning, fetchMotorData]);

//   const handleToggleMotor = () => {
//     setIsMotorRunning(!isMotorRunning);
//   };

//   const handleClearFaults = () => {
//     clearSensorFaults();
//   };

//   return (
//     <div className="w-full h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
//       {/* Animated background grid */}
//       <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

//       {/* 🎥 3D Scene */}
//       <div className="absolute inset-0">
//         <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
//           <ambientLight intensity={0.6} />
//           <directionalLight position={[5, 1, 5]} intensity={1.2} />
//           <OrbitControls />
//           <MotorModel 
//             isSpinning={isMotorRunning} 
//             currentSpeed={telemetry.speed}
//             currentTemperature={telemetry.temperature}
//             telemetry={telemetry}
//             sensorFaults={sensorFaults}
//           />
//         </Canvas>
//       </div>

//       {/* Top Control Bar - Responsive */}
//       <div className="absolute top-4 left-4 right-4 z-10">
//         <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
//           {/* Control Panel Card */}
//           <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl p-4 sm:p-5 flex-shrink-0">
//             <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
//               {/* Start/Stop Button */}
//               <button
//                 onClick={handleToggleMotor}
//                 className={`
//                   relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-sm
//                   transition-all duration-300 transform hover:scale-105 active:scale-95
//                   shadow-lg flex items-center justify-center gap-2 min-w-[140px]
//                   ${isMotorRunning 
//                     ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-red-500/50' 
//                     : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-green-500/50'
//                   }
//                 `}
//               >
//                 <span className={`w-2 h-2 rounded-full ${isMotorRunning ? 'bg-white animate-pulse' : 'bg-white'}`}></span>
//                 {isMotorRunning ? "Stop Motor" : "Start Motor"}
//               </button>

//               {/* Status Indicator */}
//               <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
//                 <div className={`w-3 h-3 rounded-full ${isMotorRunning ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
//                 <span className="text-xs text-slate-300 font-medium">
//                   {isMotorRunning ? 'Running' : 'Stopped'}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Telemetry Panel - Simple Small Cards */}
//       <div className="absolute top-20 left-4 z-10">
//         <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 rounded-xl shadow-2xl p-3">
//           <div className="space-y-2">
//             {/* Speed */}
//             <TelemetryCard
//               label="Speed"
//               value={`${telemetry.speed} RPM`}
//               color="blue"
//               hasFault={sensorFaults.some(f => f.sensor === 'speed')}
//             />
            
//             {/* Temperature */}
//             <TelemetryCard
//               label="Temperature"
//               value={`${telemetry.temperature}°C`}
//               color="orange"
//               hasFault={sensorFaults.some(f => f.sensor === 'temperature')}
//             />
            
//             {/* Pressure */}
//             <TelemetryCard
//               label="Pressure"
//               value={`${telemetry.pressure} bar`}
//               color="purple"
//               hasFault={sensorFaults.some(f => f.sensor === 'pressure')}
//             />
            
//             {/* Vibration */}
//             <TelemetryCard
//               label="Vibration"
//               value={`${telemetry.vibration} mm/s`}
//               color="pink"
//               hasFault={sensorFaults.some(f => f.sensor === 'vibration')}
//             />
            
//             {/* Load */}
//             <TelemetryCard
//               label="Load"
//               value={`${telemetry.load}%`}
//               color="green"
//               hasFault={sensorFaults.some(f => f.sensor === 'load')}
//             />
//           </div>
//         </div>
//       </div>

//       {/* Fault Display Panel - Responsive */}
//       {sensorFaults.length > 0 && (
//         <div className="absolute  bottom-4 left-4 right-4 z-10">
//           <div className="max-w-7xl mx-auto">
//             <div className="backdrop-blur-xl bg-slate-900/95 border-2 border-red-500/50 rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[200px] sm:max-h-[250px] overflow-y-auto">
//               <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
//                 <h3 className="text-red-400 font-bold text-base sm:text-lg flex items-center gap-2">
//                   <span className="animate-pulse">🚨</span>
//                   SENSOR FAULTS DETECTED
//                 </h3>
//                 <div className="flex items-center gap-3">
//                   <span className="text-xs sm:text-sm text-red-300 bg-red-500/20 px-3 py-1 rounded-full">
//                     {sensorFaults.length} issue{sensorFaults.length > 1 ? 's' : ''}
//                   </span>
//                   <button
//                     onClick={handleClearFaults}
//                     className="px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-medium rounded-lg transition-colors"
//                   >
//                     Clear All
//                   </button>
//                 </div>
//               </div>
              
//               <div className="space-y-3">
//                 {sensorFaults.map((fault, index) => (
//                   <div
//                     key={index}
//                     className={`
//                       p-3 sm:p-4 rounded-xl border-l-4
//                       ${fault.level === "error" 
//                         ? 'bg-red-500/10 border-red-500' 
//                         : 'bg-orange-500/10 border-orange-500'
//                       }
//                     `}
//                   >
//                     <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
//                       <span className="text-sm font-bold text-white">
//                         {fault.level === "error" ? "❌ CRITICAL" : "⚠️ WARNING"}
//                       </span>
//                       <span className={`
//                         text-xs font-bold px-2 py-1 rounded-md w-fit
//                         ${fault.level === "error" ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'}
//                       `}>
//                         {fault.sensor.toUpperCase()}
//                       </span>
//                     </div>
//                     <div className="text-xs sm:text-sm text-slate-300">
//                       {fault.message}
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Connection Fault Overlay */}
//       {sensorFaults.some(f => f.sensor === 'connection') && (
//         <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4">
//           <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 sm:p-8 rounded-2xl border-4 border-white shadow-2xl max-w-md w-full text-center">
//             <div className="text-4xl sm:text-5xl mb-4 animate-pulse">🔴</div>
//             <div className="text-xl sm:text-2xl font-bold mb-2">CONNECTION LOST</div>
//             <div className="text-sm sm:text-base mb-4">Cannot connect to motor API server</div>
//             <div className="text-xs sm:text-sm opacity-80 bg-white/20 px-4 py-2 rounded-lg">
//               Check if server is running on port 3001
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// // Simple Telemetry Card Component
// interface TelemetryCardProps {
//   label: string;
//   value: string;
//   color: 'blue' | 'orange' | 'purple' | 'pink' | 'green';
//   hasFault: boolean;
// }

// function TelemetryCard({ label, value, color, hasFault }: TelemetryCardProps) {
//   const colorClasses = {
//     blue: 'border-blue-500/50',
//     orange: 'border-orange-500/50',
//     purple: 'border-purple-500/50',
//     pink: 'border-pink-500/50',
//     green: 'border-green-500/50',
//   };

//   const textColor = {
//     blue: 'text-blue-300',
//     orange: 'text-orange-300',
//     purple: 'text-purple-300',
//     pink: 'text-pink-300',
//     green: 'text-green-300',
//   };

//   return (
//     <div className={`
//       border-l-2 px-2 py-1 bg-white/5 rounded
//       ${hasFault ? 'border-red-500 animate-pulse' : colorClasses[color]}
//       ${hasFault ? 'text-red-300' : textColor[color]}
//     `}>
//       <div className="flex items-center justify-between gap-2">
//         <span className="text-xs font-medium">{label}</span>
//         <span className="text-xs font-bold">
//           {value}
//           {hasFault && <span className="ml-1">⚠️</span>}
//         </span>
//       </div>
//     </div>
//   );
// }

// interface MotorModelProps {
//   isSpinning: boolean;
//   currentSpeed: number;
//   currentTemperature: number;
//   telemetry: any;
//   sensorFaults: any[];
// }

// function MotorModel({ isSpinning, currentSpeed, currentTemperature, telemetry, sensorFaults }: MotorModelProps) {
//   const { scene } = useGLTF("/models/electric_motor (1).glb") as unknown as GLTFResult;
//   const selectedMeshesRef = useRef<THREE.Mesh[]>([]);
//   const ventMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
//   const shaftMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
//   const groupRef = useRef<THREE.Group>(null);

//   useEffect(() => {
//     const targetMeshes = ["Shaft_Mat_0", "Vent_Mat2_0"];
//     const foundMeshes: THREE.Mesh[] = [];

//     scene.traverse((child) => {
//       if (child instanceof THREE.Mesh && targetMeshes.includes(child.name)) {
//         foundMeshes.push(child);
//         const mat = Array.isArray(child.material) ? child.material[0] : child.material;

//         if (child.name === "Vent_Mat2_0" && mat) {
//           ventMaterialRef.current = mat as THREE.MeshStandardMaterial;
//         }
        
//         if (child.name === "Shaft_Mat_0" && mat) {
//           shaftMaterialRef.current = mat as THREE.MeshStandardMaterial;
//         }
//       }
//     });

//     selectedMeshesRef.current = foundMeshes;
//   }, [scene]);

//   useEffect(() => {
//     if (ventMaterialRef.current) {
//       let ventColor = new THREE.Color(0.7, 0.8, 1.0);
      
//       if (currentTemperature > 50) {
//         const intensity = Math.min(1, (currentTemperature - 50) / 30);
//         ventColor = new THREE.Color(1.0, 0.5 - intensity * 0.3, 0.0);
//       } else if (currentTemperature > 40) {
//         const intensity = (currentTemperature - 40) / 10;
//         ventColor = new THREE.Color(1.0, 0.8 - intensity * 0.3, 0.3);
//       } else if (currentTemperature > 30) {
//         const intensity = (currentTemperature - 30) / 10;
//         ventColor = new THREE.Color(0.9, 0.9 - intensity * 0.1, 0.6 - intensity * 0.3);
//       }
      
//       ventMaterialRef.current.color = ventColor;
//       ventMaterialRef.current.needsUpdate = true;
//     }
//   }, [currentTemperature]);

//   useEffect(() => {
//     if (shaftMaterialRef.current) {
//       let shaftColor = new THREE.Color(0.7, 0.7, 0.7);
      
//       if (currentSpeed > 4000) {
//         const intensity = Math.min(1, (currentSpeed - 4000) / 2000);
//         shaftColor = new THREE.Color(1.0, 0.3 - intensity * 0.2, 0.0);
//       } else if (currentSpeed > 3000) {
//         const intensity = (currentSpeed - 3000) / 1000;
//         shaftColor = new THREE.Color(0.9 + intensity * 0.1, 0.6 - intensity * 0.3, 0.2);
//       } else if (currentSpeed > 2000) {
//         const intensity = (currentSpeed - 2000) / 1000;
//         shaftColor = new THREE.Color(0.8 + intensity * 0.1, 0.8 - intensity * 0.2, 0.4 - intensity * 0.2);
//       }
      
//       shaftMaterialRef.current.color = shaftColor;
//       shaftMaterialRef.current.needsUpdate = true;
//     }
//   }, [currentSpeed]);

//   useFrame((_, delta) => {
//     if (isSpinning && currentSpeed > 0) {
//       const rotationSpeed = (currentSpeed / 3000) * 10;
//       selectedMeshesRef.current.forEach((mesh) => {
//         mesh.rotation.z += delta * rotationSpeed;
//       });
//     }
//   });

//   return (
//     <group ref={groupRef}>
//       <primitive object={scene} scale={1.2} />
//     </group>
//   );
// }



"use client";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { useMotorStore } from "../app/store/useMotorStore";

// Define proper type for GLTF result
type GLTFResult = GLTF & {
  nodes: Record<string, THREE.Mesh>;
  materials: Record<string, THREE.Material>;
};

export default function MotorViewer() {
  const {
    isMotorRunning,
    telemetry,
    sensorFaults,
    setIsMotorRunning,
    fetchMotorData,
    clearSensorFaults
  } = useMotorStore();

  // 📈 Fetch data periodically when motor is running
  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isMotorRunning) {
      fetchMotorData();
      interval = setInterval(() => {
        fetchMotorData();
      }, 1000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isMotorRunning, fetchMotorData]);

  const handleToggleMotor = () => {
    setIsMotorRunning(!isMotorRunning);
  };

  const handleClearFaults = () => {
    clearSensorFaults();
  };

  return (
    <div className="w-full h-screen relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* 🎥 3D Scene */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [5, 3, 5], fov: 50 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 1, 5]} intensity={1.2} />
          <OrbitControls />
          <MotorModel 
            isSpinning={isMotorRunning} 
            currentSpeed={telemetry.speed}
            currentTemperature={telemetry.temperature}
            telemetry={telemetry}
            sensorFaults={sensorFaults}
          />
        </Canvas>
      </div>

      {/* Top Control Bar - Responsive */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
          {/* Control Panel Card */}
          <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 rounded-2xl shadow-2xl p-4 sm:p-5 flex-shrink-0">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              {/* Start/Stop Button */}
              <button
                onClick={handleToggleMotor}
                className={`
                  relative overflow-hidden px-6 py-3 rounded-xl font-semibold text-sm
                  transition-all duration-300 transform hover:scale-105 active:scale-95
                  shadow-lg flex items-center justify-center gap-2 min-w-[140px]
                  ${isMotorRunning 
                    ? 'bg-gradient-to-r from-red-600 to-red-500 hover:from-red-500 hover:to-red-400 text-white shadow-red-500/50' 
                    : 'bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-500 hover:to-emerald-400 text-white shadow-green-500/50'
                  }
                `}
              >
                <span className={`w-2 h-2 rounded-full ${isMotorRunning ? 'bg-white animate-pulse' : 'bg-white'}`}></span>
                {isMotorRunning ? "Stop Motor" : "Start Motor"}
              </button>

              {/* Status Indicator */}
              <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 rounded-lg">
                <div className={`w-3 h-3 rounded-full ${isMotorRunning ? 'bg-green-400 animate-pulse' : 'bg-red-400'}`}></div>
                <span className="text-xs text-slate-300 font-medium">
                  {isMotorRunning ? 'Running' : 'Stopped'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

{/* Telemetry Panel - Right Side */}
<div className="absolute  pb-50 right-4 top-1/2 transform -translate-y-1/2 z-10">
  <div className="backdrop-blur-xl bg-slate-900/80 border border-slate-700/50 rounded-xl shadow-2xl p-3">
    <div className="space-y-2">
      {/* Speed */}
      <TelemetryCard
        label="Speed"
        value={`${telemetry.speed} RPM`}
        color="blue"
        hasFault={sensorFaults.some(f => f.sensor === 'speed')}
      />

      {/* Temperature */}
      <TelemetryCard
        label="Temperature"
        value={`${telemetry.temperature}°C`}
        color="orange"
        hasFault={sensorFaults.some(f => f.sensor === 'temperature')}
      />

      {/* Pressure */}
      <TelemetryCard
        label="Pressure"
        value={`${telemetry.pressure} bar`}
        color="purple"
        hasFault={sensorFaults.some(f => f.sensor === 'pressure')}
      />

      {/* Vibration */}
      <TelemetryCard
        label="Vibration"
        value={`${telemetry.vibration} mm/s`}
        color="pink"
        hasFault={sensorFaults.some(f => f.sensor === 'vibration')}
      />

      {/* Load */}
      <TelemetryCard
        label="Load"
        value={`${telemetry.load}%`}
        color="green"
        hasFault={sensorFaults.some(f => f.sensor === 'load')}
      />
    </div>
  </div>
</div>


      {/* Fault Display Panel - Responsive */}
      {sensorFaults.length > 0 && (
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="max-w-7xl mx-auto mt-4">
            <div className="backdrop-blur-xl bg-slate-900/95 border-2 border-red-500/50 rounded-2xl shadow-2xl p-4 sm:p-6 max-h-[200px] sm:max-h-[250px] overflow-y-auto">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4">
                <h3 className="text-red-400 font-bold text-base sm:text-lg flex items-center gap-2">
                  <span className="animate-pulse">🚨</span>
                  SENSOR FAULTS DETECTED
                </h3>
                <div className="flex items-center gap-3">
                  <span className="text-xs sm:text-sm text-red-300 bg-red-500/20 px-3 py-1 rounded-full">
                    {sensorFaults.length} issue{sensorFaults.length > 1 ? 's' : ''}
                  </span>
                  {/* <button
                    onClick={handleClearFaults}
                    className="px-4 py-1.5 bg-orange-500 hover:bg-orange-400 text-white text-xs font-medium rounded-lg transition-colors"
                  >
                    Clear All
                  </button> */}
                </div>
              </div>
              
              <div className="space-y-3">
                {sensorFaults.map((fault, index) => (
                  <div
                    key={index}
                    className={`
                      p-3 sm:p-4 rounded-xl border-l-4
                      ${fault.level === "error" 
                        ? 'bg-red-500/10 border-red-500' 
                        : 'bg-orange-500/10 border-orange-500'
                      }
                    `}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                      <span className="text-sm font-bold text-white">
                        {fault.level === "error" ? "❌ CRITICAL" : "⚠️ WARNING"}
                      </span>
                      <span className={`
                        text-xs font-bold px-2 py-1 rounded-md w-fit
                        ${fault.level === "error" ? 'bg-red-500 text-white' : 'bg-orange-500 text-white'}
                      `}>
                        {fault.sensor.toUpperCase()}
                      </span>
                    </div>
                    <div className="text-xs sm:text-sm text-slate-300">
                      {fault.message}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Connection Fault Overlay */}
      {sensorFaults.some(f => f.sensor === 'connection') && (
        <div className="absolute inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-gradient-to-br from-red-600 to-red-700 text-white p-6 sm:p-8 rounded-2xl border-4 border-white shadow-2xl max-w-md w-full text-center">
            <div className="text-4xl sm:text-5xl mb-4 animate-pulse">🔴</div>
            <div className="text-xl sm:text-2xl font-bold mb-2">CONNECTION LOST</div>
            <div className="text-sm sm:text-base mb-4">Cannot connect to motor API server</div>
            <div className="text-xs sm:text-sm opacity-80 bg-white/20 px-4 py-2 rounded-lg">
              Check if server is running on port 3001
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Simple Telemetry Card Component
interface TelemetryCardProps {
  label: string;
  value: string;
  color: 'blue' | 'orange' | 'purple' | 'pink' | 'green';
  hasFault: boolean;
}

function TelemetryCard({ label, value, color, hasFault }: TelemetryCardProps) {
  const colorClasses = {
    blue: 'border-blue-500/50',
    orange: 'border-orange-500/50',
    purple: 'border-purple-500/50',
    pink: 'border-pink-500/50',
    green: 'border-green-500/50',
  };

  const textColor = {
    blue: 'text-blue-300',
    orange: 'text-orange-300',
    purple: 'text-purple-300',
    pink: 'text-pink-300',
    green: 'text-green-300',
  };

  return (
    <div className={`
      border-l-2 px-2 py-1 bg-white/5 rounded
      ${hasFault ? 'border-red-500 animate-pulse' : colorClasses[color]}
      ${hasFault ? 'text-red-300' : textColor[color]}
    `}>
      <div className="flex items-center justify-between gap-2">
        <span className="text-xs font-medium">{label}</span>
        <span className="text-xs font-bold">
          {value}
          {hasFault && <span className="ml-1">⚠️</span>}
        </span>
      </div>
    </div>
  );
}

interface MotorModelProps {
  isSpinning: boolean;
  currentSpeed: number;
  currentTemperature: number;
  telemetry: any;
  sensorFaults: any[];
}

function MotorModel({ isSpinning, currentSpeed, currentTemperature, telemetry, sensorFaults }: MotorModelProps) {
  const { scene } = useGLTF("/models/electric_motor (1).glb") as unknown as GLTFResult;
  const selectedMeshesRef = useRef<THREE.Mesh[]>([]);
  const ventMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const shaftMaterialRef = useRef<THREE.MeshStandardMaterial | null>(null);
  const groupRef = useRef<THREE.Group>(null);

  useEffect(() => {
    const targetMeshes = ["Shaft_Mat_0", "Vent_Mat2_0"];
    const foundMeshes: THREE.Mesh[] = [];

    scene.traverse((child) => {
      if (child instanceof THREE.Mesh && targetMeshes.includes(child.name)) {
        foundMeshes.push(child);
        const mat = Array.isArray(child.material) ? child.material[0] : child.material;

        if (child.name === "Vent_Mat2_0" && mat) {
          ventMaterialRef.current = mat as THREE.MeshStandardMaterial;
        }
        
        if (child.name === "Shaft_Mat_0" && mat) {
          shaftMaterialRef.current = mat as THREE.MeshStandardMaterial;
        }
      }
    });

    selectedMeshesRef.current = foundMeshes;
  }, [scene]);

  useEffect(() => {
    if (ventMaterialRef.current) {
      let ventColor = new THREE.Color(0.7, 0.8, 1.0);
      
      if (currentTemperature > 50) {
        const intensity = Math.min(1, (currentTemperature - 50) / 30);
        ventColor = new THREE.Color(1.0, 0.5 - intensity * 0.3, 0.0);
      } else if (currentTemperature > 40) {
        const intensity = (currentTemperature - 40) / 10;
        ventColor = new THREE.Color(1.0, 0.8 - intensity * 0.3, 0.3);
      } else if (currentTemperature > 30) {
        const intensity = (currentTemperature - 30) / 10;
        ventColor = new THREE.Color(0.9, 0.9 - intensity * 0.1, 0.6 - intensity * 0.3);
      }
      
      ventMaterialRef.current.color = ventColor;
      ventMaterialRef.current.needsUpdate = true;
    }
  }, [currentTemperature]);

  useEffect(() => {
    if (shaftMaterialRef.current) {
      let shaftColor = new THREE.Color(0.7, 0.7, 0.7);
      
      if (currentSpeed > 4000) {
        const intensity = Math.min(1, (currentSpeed - 4000) / 2000);
        shaftColor = new THREE.Color(1.0, 0.3 - intensity * 0.2, 0.0);
      } else if (currentSpeed > 3000) {
        const intensity = (currentSpeed - 3000) / 1000;
        shaftColor = new THREE.Color(0.9 + intensity * 0.1, 0.6 - intensity * 0.3, 0.2);
      } else if (currentSpeed > 2000) {
        const intensity = (currentSpeed - 2000) / 1000;
        shaftColor = new THREE.Color(0.8 + intensity * 0.1, 0.8 - intensity * 0.2, 0.4 - intensity * 0.2);
      }
      
      shaftMaterialRef.current.color = shaftColor;
      shaftMaterialRef.current.needsUpdate = true;
    }
  }, [currentSpeed]);

  useFrame((_, delta) => {
    if (isSpinning && currentSpeed > 0) {
      const rotationSpeed = (currentSpeed / 3000) * 10;
      selectedMeshesRef.current.forEach((mesh) => {
        mesh.rotation.z += delta * rotationSpeed;
      });
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={1.2} />
    </group>
  );
}



