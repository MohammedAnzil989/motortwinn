// // // "use client";
// // // import { create } from "zustand";

// // // interface MotorState {
// // //   rpm: number;
// // //   temperature: number;
// // //   current: number;
// // //   vibration: number;
// // //   running: boolean;
// // //   setRpm: (rpm: number) => void;
// // //   setTemperature: (temp: number | ((prev: number) => number)) => void;
// // //   toggleRunning: () => void;
// // // }

// // // export const useMotorStore = create<MotorState>((set) => ({
// // //   rpm: 1200,
// // //   temperature: 35,
// // //   current: 2.3,
// // //   vibration: 0.8,
// // //   running: true,
// // //   setRpm: (rpm) => set({ rpm }),
// // //   setTemperature: (temp) =>
// // //     set((state) => ({
// // //       temperature: typeof temp === "function" ? temp(state.temperature) : temp,
// // //     })),
// // //   toggleRunning: () => set((state) => ({ running: !state.running })),
// // // }));


// // // app/store/useMotorStore.ts
// // import { create } from 'zustand';
// // import { persist } from 'zustand/middleware';

// // interface MotorData {
// //   speed: number;
// //   temperature: number;
// //   pressure: number;
// //   vibration: number;
// //   load: number;
// // }

// // interface MotorStore {
// //   isMotorRunning: boolean;
// //   telemetry: MotorData;
// //   apiEndpoint: string;
// //   setIsMotorRunning: (running: boolean) => void;
// //   setTelemetry: (data: MotorData) => void;
// //   setApiEndpoint: (endpoint: string) => void;
// //   fetchMotorData: () => Promise<void>;
// // }

// // export const useMotorStore = create<MotorStore>()(
// //   persist(
// //     (set, get) => ({
// //       isMotorRunning: false,
// //       telemetry: {
// //         speed: 0,
// //         temperature: 28,
// //         pressure: 1.0,
// //         vibration: 0.1,
// //         load: 0,
// //       },
// //       apiEndpoint: "http://localhost:3001/api/motor-data",
      
// //       setIsMotorRunning: (running: boolean) => set({ isMotorRunning: running }),
      
// //       setTelemetry: (data: MotorData) => set({ telemetry: data }),
      
// //       setApiEndpoint: (endpoint: string) => set({ apiEndpoint: endpoint }),
      
// //       fetchMotorData: async () => {
// //         const { apiEndpoint, isMotorRunning } = get();
        
// //         try {
// //           const response = await fetch(apiEndpoint);
// //           if (!response.ok) {
// //             throw new Error(`HTTP error! status: ${response.status}`);
// //           }
// //           const data: MotorData = await response.json();
          
// //           // Validate data types and ranges
// //           const validatedData: MotorData = {
// //             speed: Math.max(0, Number(data.speed) || 0),
// //             temperature: Math.max(0, Number(data.temperature) || 28),
// //             pressure: Math.max(0, Number(data.pressure) || 1.0),
// //             vibration: Math.max(0, Number(data.vibration) || 0.1),
// //             load: Math.max(0, Math.min(100, Number(data.load) || 0)),
// //           };
          
// //           set({ telemetry: validatedData });
// //           console.log("✅ Motor data fetched:", validatedData);
// //         } catch (error) {
// //           console.error("❌ Error fetching motor data:", error);
// //           // Fallback to simulated data if API fails
// //           if (isMotorRunning) {
// //             const simulatedData = {
// //               speed: Math.floor(1000 + Math.random() * 2000),
// //               temperature: +(28 + Math.random() * 20).toFixed(1),
// //               pressure: +(1 + Math.random() * 2).toFixed(2),
// //               vibration: +(Math.random() * 2).toFixed(2),
// //               load: Math.floor(Math.random() * 100),
// //             };
// //             set({ telemetry: simulatedData });
// //           }
// //         }
// //       },
// //     }),
// //     {
// //       name: 'motor-storage', // name for the persisted data
// //     }
// //   )
// // );


// // // app/store/useMotorStore.ts
// // import { create } from 'zustand';
// // import { persist } from 'zustand/middleware';

// // interface MotorData {
// //   speed: number;
// //   temperature: number;
// //   pressure: number;
// //   vibration: number;
// //   load: number;
// // }

// // interface MotorStore {
// //   isMotorRunning: boolean;
// //   telemetry: MotorData;
// //   apiEndpoint: string;
// //   setIsMotorRunning: (running: boolean) => void;
// //   setTelemetry: (data: MotorData) => void;
// //   setApiEndpoint: (endpoint: string) => void;
// //   fetchMotorData: () => Promise<void>;
// // }

// // export const useMotorStore = create<MotorStore>()(
// //   persist(
// //     (set, get) => ({
// //       isMotorRunning: false,
// //       telemetry: {
// //         speed: 0,
// //         temperature: 28,
// //         pressure: 1.0,
// //         vibration: 0.1,
// //         load: 0,
// //       },
// //       apiEndpoint: "http://localhost:3001/api/motor-data",
      
// //       setIsMotorRunning: (running: boolean) => set({ isMotorRunning: running }),
      
// //       setTelemetry: (data: MotorData) => set({ telemetry: data }),
      
// //       setApiEndpoint: (endpoint: string) => set({ apiEndpoint: endpoint }),
      
// //       fetchMotorData: async () => {
// //         const { apiEndpoint, isMotorRunning } = get();
        
// //         try {
// //           const response = await fetch(apiEndpoint);
// //           if (!response.ok) {
// //             throw new Error(`HTTP error! status: ${response.status}`);
// //           }
// //           const data: MotorData = await response.json();
          
// //           // Validate data types and ranges
// //           const validatedData: MotorData = {
// //             speed: Math.max(0, Number(data.speed) || 0),
// //             temperature: Math.max(0, Number(data.temperature) || 28),
// //             pressure: Math.max(0, Number(data.pressure) || 1.0),
// //             vibration: Math.max(0, Number(data.vibration) || 0.1),
// //             load: Math.max(0, Math.min(100, Number(data.load) || 0)),
// //           };
          
// //           set({ telemetry: validatedData });
// //           console.log("✅ Motor data fetched:", validatedData);
// //         } catch (error) {
// //           console.error("❌ Error fetching motor data:", error);
// //           // Fallback to simulated data if API fails
// //           if (isMotorRunning) {
// //             const simulatedData = {
// //               speed: Math.floor(1000 + Math.random() * 2000),
// //               temperature: +(28 + Math.random() * 20).toFixed(1),
// //               pressure: +(1 + Math.random() * 2).toFixed(2),
// //               vibration: +(Math.random() * 2).toFixed(2),
// //               load: Math.floor(Math.random() * 100),
// //             };
// //             set({ telemetry: simulatedData });
// //           }
// //         }
// //       },
// //     }),
// //     {
// //       name: 'motor-storage',
// //     }
// //   )
// // );








// // app/store/useMotorStore.ts
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface MotorData {
//   speed: number;
//   temperature: number;
//   pressure: number;
//   vibration: number;
//   load: number;
// }

// interface MotorStore {
//   isMotorRunning: boolean;
//   telemetry: MotorData;
//   apiEndpoint: string;
//   setIsMotorRunning: (running: boolean) => void;
//   setTelemetry: (data: MotorData) => void;
//   setApiEndpoint: (endpoint: string) => void;
//   fetchMotorData: () => Promise<void>;
//   resetToDefaultValues: () => void;
// }

// // Default normal values when motor is stopped
// const DEFAULT_VALUES: MotorData = {
//   speed: 0,
//   temperature: 28,
//   pressure: 1.0,
//   vibration: 0.1,
//   load: 0,
// };

// export const useMotorStore = create<MotorStore>()(
//   persist(
//     (set, get) => ({
//       isMotorRunning: false,
//       telemetry: DEFAULT_VALUES,
//       apiEndpoint: "http://localhost:3001/api/motor-data",
      
//       setIsMotorRunning: (running: boolean) => {
//         if (!running) {
//           // When stopping motor, reset to default values
//           set({ 
//             isMotorRunning: running,
//             telemetry: DEFAULT_VALUES 
//           });
//         } else {
//           set({ isMotorRunning: running });
//         }
//       },
      
//       setTelemetry: (data: MotorData) => set({ telemetry: data }),
      
//       setApiEndpoint: (endpoint: string) => set({ apiEndpoint: endpoint }),
      
//       fetchMotorData: async () => {
//         const { apiEndpoint, isMotorRunning } = get();
        
//         // Only fetch data if motor is running
//         if (!isMotorRunning) return;
        
//         try {
//           const response = await fetch(apiEndpoint);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data: MotorData = await response.json();
          
//           // Validate data types and ranges
//           const validatedData: MotorData = {
//             speed: Math.max(0, Number(data.speed) || 0),
//             temperature: Math.max(0, Number(data.temperature) || 28),
//             pressure: Math.max(0, Number(data.pressure) || 1.0),
//             vibration: Math.max(0, Number(data.vibration) || 0.1),
//             load: Math.max(0, Math.min(100, Number(data.load) || 0)),
//           };
          
//           set({ telemetry: validatedData });
//           console.log("✅ Motor data fetched:", validatedData);
//         } catch (error) {
//           console.error("❌ Error fetching motor data:", error);
//           // Fallback to simulated data if API fails
//           if (isMotorRunning) {
//             const simulatedData = {
//               speed: Math.floor(1000 + Math.random() * 2000),
//               temperature: +(28 + Math.random() * 20).toFixed(1),
//               pressure: +(1 + Math.random() * 2).toFixed(2),
//               vibration: +(Math.random() * 2).toFixed(2),
//               load: Math.floor(Math.random() * 100),
//             };
//             set({ telemetry: simulatedData });
//           }
//         }
//       },
      
//       resetToDefaultValues: () => set({ telemetry: DEFAULT_VALUES }),
//     }),
//     {
//       name: 'motor-storage',
//     }
//   )
// );





// app/store/useMotorStore.ts
// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface MotorData {
//   speed: number;
//   temperature: number;
//   pressure: number;
//   vibration: number;
//   load: number;
// }

// interface MotorHistory {
//   id: string;
//   action: 'start' | 'stop';
//   timestamp: number;
//   duration?: number; // For stop events, duration in seconds
//   telemetry?: MotorData; // Snapshot at the time of action
// }

// interface MotorStore {
//   isMotorRunning: boolean;
//   telemetry: MotorData;
//   apiEndpoint: string;
//   motorHistory: MotorHistory[];
//   lastStartTime: number | null;
//   setIsMotorRunning: (running: boolean) => void;
//   setTelemetry: (data: MotorData) => void;
//   setApiEndpoint: (endpoint: string) => void;
//   fetchMotorData: () => Promise<void>;
//   resetToDefaultValues: () => void;
//   addToHistory: (action: 'start' | 'stop') => void;
//   clearHistory: () => void;
// }

// // Default normal values when motor is stopped
// const DEFAULT_VALUES: MotorData = {
//   speed: 0,
//   temperature: 28,
//   pressure: 1.0,
//   vibration: 0.1,
//   load: 0,
// };

// export const useMotorStore = create<MotorStore>()(
//   persist(
//     (set, get) => ({
//       isMotorRunning: false,
//       telemetry: DEFAULT_VALUES,
//       apiEndpoint: "http://localhost:3001/api/motor-data",
//       motorHistory: [],
//       lastStartTime: null,
      
//       setIsMotorRunning: (running: boolean) => {
//         const state = get();
        
//         if (running && !state.isMotorRunning) {
//           // Starting the motor
//           const newHistory: MotorHistory = {
//             id: Math.random().toString(36).substr(2, 9),
//             action: 'start',
//             timestamp: Date.now(),
//             telemetry: state.telemetry,
//           };
          
//           set({ 
//             isMotorRunning: running,
//             lastStartTime: Date.now(),
//             motorHistory: [...state.motorHistory, newHistory]
//           });
          
//         } else if (!running && state.isMotorRunning) {
//           // Stopping the motor
//           const duration = state.lastStartTime ? Math.round((Date.now() - state.lastStartTime) / 1000) : 0;
          
//           const newHistory: MotorHistory = {
//             id: Math.random().toString(36).substr(2, 9),
//             action: 'stop',
//             timestamp: Date.now(),
//             duration: duration,
//             telemetry: state.telemetry,
//           };
          
//           set({ 
//             isMotorRunning: running,
//             telemetry: DEFAULT_VALUES,
//             lastStartTime: null,
//             motorHistory: [...state.motorHistory, newHistory]
//           });
//         }
//       },
      
//       setTelemetry: (data: MotorData) => set({ telemetry: data }),
      
//       setApiEndpoint: (endpoint: string) => set({ apiEndpoint: endpoint }),
      
//       fetchMotorData: async () => {
//         const { apiEndpoint, isMotorRunning } = get();
        
//         // Only fetch data if motor is running
//         if (!isMotorRunning) return;
        
//         try {
//           const response = await fetch(apiEndpoint);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data: MotorData = await response.json();
          
//           // Validate data types and ranges
//           const validatedData: MotorData = {
//             speed: Math.max(0, Number(data.speed) || 0),
//             temperature: Math.max(0, Number(data.temperature) || 28),
//             pressure: Math.max(0, Number(data.pressure) || 1.0),
//             vibration: Math.max(0, Number(data.vibration) || 0.1),
//             load: Math.max(0, Math.min(100, Number(data.load) || 0)),
//           };
          
//           set({ telemetry: validatedData });
//           console.log("✅ Motor data fetched:", validatedData);
//         } catch (error) {
//           console.error("❌ Error fetching motor data:", error);
//           // Fallback to simulated data if API fails
//           if (isMotorRunning) {
//             const simulatedData = {
//               speed: Math.floor(1000 + Math.random() * 2000),
//               temperature: +(28 + Math.random() * 20).toFixed(1),
//               pressure: +(1 + Math.random() * 2).toFixed(2),
//               vibration: +(Math.random() * 2).toFixed(2),
//               load: Math.floor(Math.random() * 100),
//             };
//             set({ telemetry: simulatedData });
//           }
//         }
//       },
      
//       resetToDefaultValues: () => set({ telemetry: DEFAULT_VALUES }),
      
//       addToHistory: (action: 'start' | 'stop') => {
//         const state = get();
//         const newHistory: MotorHistory = {
//           id: Math.random().toString(36).substr(2, 9),
//           action: action,
//           timestamp: Date.now(),
//           telemetry: state.telemetry,
//         };
        
//         if (action === 'stop' && state.lastStartTime) {
//           newHistory.duration = Math.round((Date.now() - state.lastStartTime) / 1000);
//         }
        
//         set({ 
//           motorHistory: [...state.motorHistory, newHistory],
//           ...(action === 'start' ? { lastStartTime: Date.now() } : { lastStartTime: null })
//         });
//       },
      
//       clearHistory: () => set({ motorHistory: [] }),
//     }),
//     {
//       name: 'motor-storage',
//     }
//   )
// );






// import { create } from 'zustand';
// import { persist } from 'zustand/middleware';

// interface MotorData {
//   speed: number;
//   temperature: number;
//   pressure: number;
//   vibration: number;
//   load: number;
// }

// interface SensorFault {
//   sensor: string;
//   message: string;
//   level: "warning" | "error";
// }

// interface MotorHistory {
//   id: string;
//   action: 'start' | 'stop';
//   timestamp: number;
//   duration?: number; // For stop events, duration in seconds
//   telemetry?: MotorData; // Snapshot at the time of action
// }

// interface MotorStore {
//   isMotorRunning: boolean;
//   telemetry: MotorData;
//   sensorFaults: SensorFault[];
//   apiEndpoint: string;
//   motorHistory: MotorHistory[];
//   lastStartTime: number | null;
//   setIsMotorRunning: (running: boolean) => void;
//   setTelemetry: (data: MotorData) => void;
//   setApiEndpoint: (endpoint: string) => void;
//   fetchMotorData: () => Promise<void>;
//   resetToDefaultValues: () => void;
//   addToHistory: (action: 'start' | 'stop') => void;
//   clearHistory: () => void;
//   checkSensorFaults: (data: MotorData) => void;
//   clearSensorFaults: () => void;
//   addSensorFault: (fault: SensorFault) => void;
// }

// // Default normal values when motor is stopped
// const DEFAULT_VALUES: MotorData = {
//   speed: 0,
//   temperature: 28,
//   pressure: 1.0,
//   vibration: 0.1,
//   load: 0,
// };

// export const useMotorStore = create<MotorStore>()(
//   persist(
//     (set, get) => ({
//       isMotorRunning: false,
//       telemetry: DEFAULT_VALUES,
//       sensorFaults: [],
//       apiEndpoint: "http://localhost:3001/api/motor-data",
//       motorHistory: [],
//       lastStartTime: null,
      
//       setIsMotorRunning: (running: boolean) => {
//         const state = get();
        
//         if (running && !state.isMotorRunning) {
//           // Starting the motor
//           const newHistory: MotorHistory = {
//             id: Math.random().toString(36).substr(2, 9),
//             action: 'start',
//             timestamp: Date.now(),
//             telemetry: state.telemetry,
//           };
          
//           set({ 
//             isMotorRunning: running,
//             lastStartTime: Date.now(),
//             motorHistory: [...state.motorHistory, newHistory],
//             sensorFaults: [] // Clear faults when starting
//           });
          
//         } else if (!running && state.isMotorRunning) {
//           // Stopping the motor
//           const duration = state.lastStartTime ? Math.round((Date.now() - state.lastStartTime) / 1000) : 0;
          
//           const newHistory: MotorHistory = {
//             id: Math.random().toString(36).substr(2, 9),
//             action: 'stop',
//             timestamp: Date.now(),
//             duration: duration,
//             telemetry: state.telemetry,
//           };
          
//           set({ 
//             isMotorRunning: running,
//             telemetry: DEFAULT_VALUES,
//             lastStartTime: null,
//             motorHistory: [...state.motorHistory, newHistory],
//             sensorFaults: [] // Clear faults when stopping
//           });
//         }
//       },
      
//       setTelemetry: (data: MotorData) => {
//         set({ telemetry: data });
//         get().checkSensorFaults(data);
//       },
      
//       setApiEndpoint: (endpoint: string) => set({ apiEndpoint: endpoint }),
      
//       fetchMotorData: async () => {
//         const { apiEndpoint, isMotorRunning, checkSensorFaults } = get();
        
//         // Only fetch data if motor is running
//         if (!isMotorRunning) return;
        
//         try {
//           const response = await fetch(apiEndpoint);
//           if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//           }
//           const data: MotorData = await response.json();
          
//           // Validate data types and ranges
//           const validatedData: MotorData = {
//             speed: Math.max(0, Number(data.speed) || 0),
//             temperature: Math.max(0, Number(data.temperature) || 28),
//             pressure: Math.max(0, Number(data.pressure) || 1.0),
//             vibration: Math.max(0, Number(data.vibration) || 0.1),
//             load: Math.max(0, Math.min(100, Number(data.load) || 0)),
//           };
          
//           set({ telemetry: validatedData });
//           checkSensorFaults(validatedData);
//           console.log("✅ Motor data fetched:", validatedData);
//         } catch (error) {
//           console.error("❌ Error fetching motor data:", error);
          
//           // Add connection fault
//           set({ 
//             sensorFaults: [{ 
//               sensor: "connection", 
//               message: "Cannot connect to motor API server", 
//               level: "error" 
//             }]
//           });
          
//           // Fallback to simulated data if API fails
//           if (isMotorRunning) {
//             const simulatedData = {
//               speed: Math.floor(1000 + Math.random() * 2000),
//               temperature: +(28 + Math.random() * 20).toFixed(1),
//               pressure: +(1 + Math.random() * 2).toFixed(2),
//               vibration: +(Math.random() * 2).toFixed(2),
//               load: Math.floor(Math.random() * 100),
//             };
//             set({ telemetry: simulatedData });
//             checkSensorFaults(simulatedData);
//           }
//         }
//       },
      
//       resetToDefaultValues: () => set({ 
//         telemetry: DEFAULT_VALUES,
//         sensorFaults: [] 
//       }),
      
//       addToHistory: (action: 'start' | 'stop') => {
//         const state = get();
//         const newHistory: MotorHistory = {
//           id: Math.random().toString(36).substr(2, 9),
//           action: action,
//           timestamp: Date.now(),
//           telemetry: state.telemetry,
//         };
        
//         if (action === 'stop' && state.lastStartTime) {
//           newHistory.duration = Math.round((Date.now() - state.lastStartTime) / 1000);
//         }
        
//         set({ 
//           motorHistory: [...state.motorHistory, newHistory],
//           ...(action === 'start' ? { lastStartTime: Date.now() } : { lastStartTime: null })
//         });
//       },
      
//       clearHistory: () => set({ motorHistory: [] }),
      
//       checkSensorFaults: (data: MotorData) => {
//         const faults: SensorFault[] = [];

//         // Check for missing or undefined values
//         if (data.speed === undefined || data.speed === null) {
//           faults.push({ 
//             sensor: "speed", 
//             message: "Speed sensor not responding - no data received", 
//             level: "error" 
//           });
//         } else if (data.speed < 0) {
//           faults.push({ 
//             sensor: "speed", 
//             message: "Invalid speed value detected (negative value)", 
//             level: "warning" 
//           });
//         } else if (data.speed > 5000) {
//           faults.push({ 
//             sensor: "speed", 
//             message: "Critical overspeed detected", 
//             level: "error" 
//           });
//         }

//         if (data.temperature === undefined || data.temperature === null) {
//           faults.push({ 
//             sensor: "temperature", 
//             message: "Temperature sensor not responding - no data received", 
//             level: "error" 
//           });
//         } else if (data.temperature > 80) {
//           faults.push({ 
//             sensor: "temperature", 
//             message: "High temperature warning - motor may overheat", 
//             level: "warning" 
//           });
//         } else if (data.temperature > 100) {
//           faults.push({ 
//             sensor: "temperature", 
//             message: "Critical temperature! Immediate shutdown required", 
//             level: "error" 
//           });
//         } else if (data.temperature < 20) {
//           faults.push({ 
//             sensor: "temperature", 
//             message: "Low temperature detected - possible sensor fault", 
//             level: "warning" 
//           });
//         }

//         if (data.pressure === undefined || data.pressure === null) {
//           faults.push({ 
//             sensor: "pressure", 
//             message: "Pressure sensor not responding - no data received", 
//             level: "error" 
//           });
//         } else if (data.pressure > 3.0) {
//           faults.push({ 
//             sensor: "pressure", 
//             message: "High pressure detected - check cooling system", 
//             level: "warning" 
//           });
//         } else if (data.pressure < 0.5) {
//           faults.push({ 
//             sensor: "pressure", 
//             message: "Low pressure detected - possible leak", 
//             level: "warning" 
//           });
//         }

//         if (data.vibration === undefined || data.vibration === null) {
//           faults.push({ 
//             sensor: "vibration", 
//             message: "Vibration sensor not responding - no data received", 
//             level: "error" 
//           });
//         } else if (data.vibration > 2.0) {
//           faults.push({ 
//             sensor: "vibration", 
//             message: "High vibration levels - check motor balance", 
//             level: "warning" 
//           });
//         } else if (data.vibration > 3.0) {
//           faults.push({ 
//             sensor: "vibration", 
//             message: "Critical vibration levels - risk of damage", 
//             level: "error" 
//           });
//         }

//         if (data.load === undefined || data.load === null) {
//           faults.push({ 
//             sensor: "load", 
//             message: "Load sensor not responding - no data received", 
//             level: "error" 
//           });
//         } else if (data.load > 90) {
//           faults.push({ 
//             sensor: "load", 
//             message: "Motor overload warning - reduce load", 
//             level: "warning" 
//           });
//         } else if (data.load > 100) {
//           faults.push({ 
//             sensor: "load", 
//             message: "Critical overload - immediate action required", 
//             level: "error" 
//           });
//         }

//         set({ sensorFaults: faults });
        
//         if (faults.length > 0) {
//           console.warn("🚨 Sensor faults detected:", faults);
//         }
//       },
      
//       clearSensorFaults: () => set({ sensorFaults: [] }),
      
//       addSensorFault: (fault: SensorFault) => {
//         const state = get();
//         // Avoid duplicate faults for the same sensor
//         const existingFaultIndex = state.sensorFaults.findIndex(f => f.sensor === fault.sensor);
        
//         if (existingFaultIndex >= 0) {
//           // Update existing fault
//           const updatedFaults = [...state.sensorFaults];
//           updatedFaults[existingFaultIndex] = fault;
//           set({ sensorFaults: updatedFaults });
//         } else {
//           // Add new fault
//           set({ sensorFaults: [...state.sensorFaults, fault] });
//         }
//       },
//     }),
//     {
//       name: 'motor-storage',
//     }
//   )
// );



// // src/store/useMotorStore.ts
// import { create } from "zustand";

// interface MotorState {
//   motorHistory: string[];
//   addHistory: (entry: string) => void;
//   clearHistory: () => void;
// }

// export const useMotorStore = create<MotorState>((set) => ({
//   motorHistory: [],
//   addHistory: (entry) =>
//     set((state) => ({ motorHistory: [...state.motorHistory, entry] })),
//   clearHistory: () => set({ motorHistory: [] }),
// }));




import { create } from "zustand";

interface MotorState {
  motorHistory: string[];
  addHistory: (entry: string) => void;
  clearHistory: () => void;
}

export const useMotorStore = create<MotorState>((set) => ({
  motorHistory: [],
  addHistory: (entry) =>
    set((state) => ({ motorHistory: [...state.motorHistory, entry] })),
  clearHistory: () => set({ motorHistory: [] }),
}));

