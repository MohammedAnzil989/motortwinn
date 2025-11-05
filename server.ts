// server.ts
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Interface for motor data
interface MotorData {
  speed: number;
  temperature: number;
  pressure: number;
  vibration: number;
  load: number;
}

// Default motor data
let motorData: MotorData = {
  speed: 1500,
  temperature: 35.5,
  pressure: 1.8,
  vibration: 0.5,
  load: 75
};

// GET endpoint to fetch current motor data
app.get('/api/motor-data', (req: any, res: any) => {
  console.log('📥 GET Request received - Current motor data:', motorData);
  res.json(motorData);
});

// POST endpoint to update motor data (for Postman)
app.post('/api/motor-data', (req: any, res: any) => {
  try {
    const { speed, temperature, pressure, vibration, load } = req.body;
    
    // Update only provided fields, keep others unchanged
    if (speed !== undefined) motorData.speed = Number(speed);
    if (temperature !== undefined) motorData.temperature = Number(temperature);
    if (pressure !== undefined) motorData.pressure = Number(pressure);
    if (vibration !== undefined) motorData.vibration = Number(vibration);
    if (load !== undefined) motorData.load = Number(load);
    
    console.log('📤 POST Request - Motor data updated:', motorData);
    
    res.json({
      message: 'Motor data updated successfully',
      data: motorData
    });
  } catch (error) {
    console.error('❌ Error updating motor data:', error);
    res.status(500).json({ error: 'Failed to update motor data' });
  }
});

// PUT endpoint as alternative to POST
app.put('/api/motor-data', (req: any, res: any) => {
  try {
    motorData = { ...motorData, ...req.body };
    console.log('🔄 PUT Request - Motor data updated:', motorData);
    
    res.json({
      message: 'Motor data updated successfully via PUT',
      data: motorData
    });
  } catch (error) {
    console.error('❌ Error updating motor data:', error);
    res.status(500).json({ error: 'Failed to update motor data' });
  }
});

// Health check endpoint
app.get('/api/health', (req: any, res: any) => {
  res.json({ 
    status: 'OK', 
    message: 'Motor API server is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Motor API server running on http://localhost:${PORT}`);
  console.log(`📊 Motor Data API: http://localhost:${PORT}/api/motor-data`);
  console.log(`❤️ Health Check: http://localhost:${PORT}/api/health`);
});