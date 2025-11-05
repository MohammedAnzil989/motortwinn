// For later if you want to simulate incoming live sensor data
export function generateMockSensorData(rpm) {
  return {
    temperature: 30 + Math.random() * 10,
    current: 2 + Math.random(),
    vibration: 0.5 + Math.random() * 0.5,
    rpm,
    timestamp: new Date().toISOString(),
  };
}
