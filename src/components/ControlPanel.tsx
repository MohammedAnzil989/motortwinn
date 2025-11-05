// "use client";
// import { useMotorStore } from "../app/store/useMotorStore";

// export default function ControlPanel() {
//   const { rpm, setRpm, setTemperature, running, toggleRunning } = useMotorStore();

//   return (
//     <div className="bg-white p-6 rounded-xl shadow-md max-w-lg space-y-4">
//       <div className="flex items-center justify-between">
//         <h2 className="text-lg font-semibold">Motor Control</h2>
//         <div className={`text-sm ${running ? "text-green-600" : "text-red-600"}`}>
//           {running ? "Running" : "Stopped"}
//         </div>
//       </div>

//       <button
//         onClick={toggleRunning}
//         className={`w-full py-2 rounded-lg text-white ${
//           running ? "bg-red-600 hover:bg-red-700" : "bg-green-600 hover:bg-green-700"
//         }`}
//       >
//         {running ? "Stop Motor" : "Start Motor"}
//       </button>

//       <div className="mt-4">
//         <label className="block font-semibold mb-1">Speed (RPM)</label>
//         <input
//           type="range"
//           min="0"
//           max="3000"
//           value={rpm}
//           onChange={(e) => setRpm(Number(e.target.value))}
//           className="w-full"
//         />
//         <div className="text-center text-sm text-gray-600 mt-1">{rpm} RPM</div>
//       </div>

//       <div className="mt-4">
//         <button
//           onClick={() => setTemperature((t) => t + 2)}
//           className="bg-yellow-500 hover:bg-yellow-600 text-white px-3 py-1 rounded"
//         >
//           Simulate Heat Increase
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";
import { useState } from 'react';
import { Power, Gauge, Thermometer, Play, Square } from 'lucide-react';

// Mock store for demo - replace with your actual store
const useMotorStore = () => {
  const [rpm, setRpm] = useState(1500);
  const [temperature, setTemperature] = useState(65);
  const [running, setRunning] = useState(false);
  
  return {
    rpm,
    setRpm,
    temperature,
    setTemperature,
    running,
    toggleRunning: () => setRunning(!running)
  };
};

export default function ControlPanel() {
  const { rpm, setRpm, temperature, setTemperature, running, toggleRunning } = useMotorStore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">Motor Control Panel</h1>
          <p className="text-slate-400">Real-time motor control and monitoring</p>
        </div>

        {/* Status Card */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 mb-6 border border-slate-700/50">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className={`p-3 rounded-xl ${running ? 'bg-green-500/20 ring-2 ring-green-500/50' : 'bg-red-500/20 ring-2 ring-red-500/50'}`}>
                <Power className={`w-6 h-6 ${running ? 'text-green-400' : 'text-red-400'}`} />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">Motor Status</h2>
                <p className="text-slate-400">System control interface</p>
              </div>
            </div>
            <div className={`px-6 py-3 rounded-full font-semibold text-sm ${
              running 
                ? 'bg-green-500/20 text-green-400 ring-2 ring-green-500/50' 
                : 'bg-red-500/20 text-red-400 ring-2 ring-red-500/50'
            }`}>
              {running ? '● Running' : '● Stopped'}
            </div>
          </div>

          {/* Control Button */}
          <button
            onClick={toggleRunning}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-3 ${
              running 
                ? 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white shadow-xl shadow-red-900/50' 
                : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-xl shadow-green-900/50'
            }`}
          >
            {running ? (
              <>
                <Square className="w-5 h-5" />
                Stop Motor
              </>
            ) : (
              <>
                <Play className="w-5 h-5 fill-white" />
                Start Motor
              </>
            )}
          </button>
        </div>

        {/* Control Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* RPM Control */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-blue-500/20 rounded-xl ring-2 ring-blue-500/50">
                <Gauge className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Speed Control</h3>
                <p className="text-slate-400 text-sm">Adjust motor RPM</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 rounded-xl p-6 border border-blue-500/30">
                <div className="text-center">
                  <div className="text-5xl font-bold text-blue-400 mb-1">{rpm}</div>
                  <div className="text-slate-300 font-medium">RPM</div>
                </div>
              </div>

              <div className="space-y-2">
                <input
                  type="range"
                  min="0"
                  max="3000"
                  step="50"
                  value={rpm}
                  onChange={(e) => setRpm(Number(e.target.value))}
                  className="w-full h-3 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                  style={{
                    background: `linear-gradient(to right, rgb(59, 130, 246) 0%, rgb(59, 130, 246) ${(rpm / 3000) * 100}%, rgb(51, 65, 85) ${(rpm / 3000) * 100}%, rgb(51, 65, 85) 100%)`
                  }}
                />
                <div className="flex justify-between text-xs text-slate-400 font-medium">
                  <span>0</span>
                  <span>1500</span>
                  <span>3000</span>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2 mt-4">
                <button
                  onClick={() => setRpm(500)}
                  className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm font-medium text-slate-300 transition-colors border border-slate-600/50"
                >
                  Low
                </button>
                <button
                  onClick={() => setRpm(1500)}
                  className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm font-medium text-slate-300 transition-colors border border-slate-600/50"
                >
                  Medium
                </button>
                <button
                  onClick={() => setRpm(2500)}
                  className="px-3 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg text-sm font-medium text-slate-300 transition-colors border border-slate-600/50"
                >
                  High
                </button>
              </div>
            </div>
          </div>

          {/* Temperature Simulation */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-slate-700/50">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 bg-orange-500/20 rounded-xl ring-2 ring-orange-500/50">
                <Thermometer className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Temperature</h3>
                <p className="text-slate-400 text-sm">Thermal simulation</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className={`rounded-xl p-6 border ${
                temperature > 80 
                  ? 'bg-gradient-to-r from-red-500/10 to-orange-500/10 border-red-500/30' 
                  : 'bg-gradient-to-r from-orange-500/10 to-yellow-500/10 border-orange-500/30'
              }`}>
                <div className="text-center">
                  <div className={`text-5xl font-bold mb-1 ${
                    temperature > 80 ? 'text-red-400' : 'text-orange-400'
                  }`}>
                    {temperature}°C
                  </div>
                  <div className="text-slate-300 font-medium">Current Temperature</div>
                </div>
              </div>

              {temperature > 80 && (
                <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-3 text-center">
                  <p className="text-red-400 text-sm font-medium">⚠️ High Temperature Warning</p>
                </div>
              )}

              <div className="space-y-2">
                <button
                  onClick={() => setTemperature(Math.min(temperature + 5, 120))}
                  className="w-full py-3 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white rounded-xl font-semibold transition-all shadow-xl shadow-orange-900/50"
                >
                  Increase Heat (+5°C)
                </button>
                <button
                  onClick={() => setTemperature(Math.max(temperature - 5, 20))}
                  className="w-full py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-xl font-semibold transition-all shadow-xl shadow-blue-900/50"
                >
                  Decrease Heat (-5°C)
                </button>
                <button
                  onClick={() => setTemperature(65)}
                  className="w-full py-3 bg-slate-700/50 hover:bg-slate-600/50 text-slate-300 rounded-xl font-semibold transition-all border border-slate-600/50"
                >
                  Reset to Normal
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Info Footer */}
        <div className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <p className="text-blue-300 text-sm text-center font-medium">
            💡 Tip: Monitor temperature levels to prevent overheating. Keep RPM within safe operating range.
          </p>
        </div>
      </div>
    </div>
  );
}