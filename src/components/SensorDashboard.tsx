
"use client";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, CartesianGrid } from "recharts";
import { useEffect, useState } from "react";
import { useMotorStore } from "../app/store/useMotorStore";
import { Activity, Zap, Gauge, Cpu, Eye, BarChart3, Settings, Wrench, TrendingUp, AlertTriangle, RefreshCw, Filter, Search, Calendar, Clock } from 'lucide-react';

// Define chart types
type ChartType = "speed" | "temperature" | "pressure" | "vibration" | "load" | "all";

// Motor History Component
function MotorHistory() {
  const { motorHistory, clearHistory } = useMotorStore();

  const formatDuration = (seconds: number) => {
    if (seconds < 60) {
      return `${seconds} seconds`;
    } else if (seconds < 3600) {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `${minutes}m ${remainingSeconds}s`;
    } else {
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      return `${hours}h ${minutes}m`;
    }
  };

  const formatTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleString();
  };

  const getStatusColor = (action: 'start' | 'stop') => {
    return action === 'start' ? 'text-emerald-300 bg-emerald-500/20' : 'text-rose-400 bg-rose-500/20';
  };

  const getStatusIcon = (action: 'start' | 'stop') => {
    return action === 'start' ? '🟢' : '🔴';
  };

  return (
    <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-cyan-500/30 rounded-lg">
            <Clock className="w-5 h-5 text-cyan-300" />
          </div>
          <h3 className="font-bold text-xl text-white">Operation History</h3>
        </div>
        {motorHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="px-4 py-2 text-sm bg-rose-500/30 text-rose-300 rounded-lg hover:bg-rose-500/40 transition-all duration-300 border border-rose-400/30 hover:border-rose-300/50"
          >
            Clear History
          </button>
        )}
      </div>

      {motorHistory.length === 0 ? (
        <div className="text-center py-8 text-cyan-100/70">
          <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
            <Activity className="w-8 h-8 text-cyan-400/60" />
          </div>
          <p className="text-white text-lg font-medium">No operation history yet</p>
          <p className="text-cyan-100/70 text-sm mt-1">Start and stop the motor to see history here</p>
        </div>
      ) : (
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {motorHistory.slice().reverse().map((record) => (
            <div
              key={record.id}
              className={`p-4 rounded-xl border backdrop-blur-sm ${
                record.action === 'start' 
                  ? 'border-emerald-400/40 bg-emerald-500/10' 
                  : 'border-rose-400/40 bg-rose-500/10'
              } hover:scale-105 transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <span className="text-xl">{getStatusIcon(record.action)}</span>
                  <div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(record.action)}`}>
                      {record.action === 'start' ? 'STARTED' : 'STOPPED'}
                    </span>
                    <p className="text-cyan-100 font-medium text-sm mt-2">
                      {formatTime(record.timestamp)}
                    </p>
                  </div>
                </div>
                
                {record.duration && (
                  <div className="text-right">
                    <p className="text-white font-bold text-sm">
                      {formatDuration(record.duration)}
                    </p>
                    <p className="text-cyan-200 text-xs font-medium">Duration</p>
                  </div>
                )}
              </div>

              {record.telemetry && (
                <div className="mt-3 pt-3 border-t border-white/20">
                  <div className="grid grid-cols-5 gap-3 text-xs">
                    <div className="text-center p-2 bg-white/10 rounded-lg">
                      <p className="font-bold text-white">Speed</p>
                      <p className="text-emerald-300 font-semibold">{record.telemetry.speed} RPM</p>
                    </div>
                    <div className="text-center p-2 bg-white/10 rounded-lg">
                      <p className="font-bold text-white">Temp</p>
                      <p className="text-rose-300 font-semibold">{record.telemetry.temperature}°C</p>
                    </div>
                    <div className="text-center p-2 bg-white/10 rounded-lg">
                      <p className="font-bold text-white">Pressure</p>
                      <p className="text-blue-300 font-semibold">{record.telemetry.pressure} bar</p>
                    </div>
                    <div className="text-center p-2 bg-white/10 rounded-lg">
                      <p className="font-bold text-white">Vibration</p>
                      <p className="text-amber-300 font-semibold">{record.telemetry.vibration} mm/s</p>
                    </div>
                    <div className="text-center p-2 bg-white/10 rounded-lg">
                      <p className="font-bold text-white">Load</p>
                      <p className="text-purple-300 font-semibold">{record.telemetry.load}%</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      <div className="mt-4 text-sm text-cyan-200 font-medium text-center bg-white/10 rounded-lg p-3">
        Total records: <span className="text-white font-bold">{motorHistory.length}</span>
      </div>
    </div>
  );
}

export default function SensorDashboard() {
  const {
    isMotorRunning,
    telemetry,
    fetchMotorData
  } = useMotorStore();

  const [isVisible, setIsVisible] = useState(false);
  const [chartData, setChartData] = useState<{ 
    time: string; 
    timestamp: number;
    speed: number; 
    temperature: number;
    pressure: number;
    vibration: number;
    load: number;
  }[]>([]);

  const [selectedChart, setSelectedChart] = useState<ChartType>("all");
  const [startDate, setStartDate] = useState<string>("");
  const [endDate, setEndDate] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    if (isMotorRunning) {
      const newDataPoint = {
        time: new Date().toLocaleTimeString(),
        timestamp: Date.now(),
        speed: telemetry.speed,
        temperature: telemetry.temperature,
        pressure: telemetry.pressure,
        vibration: telemetry.vibration,
        load: telemetry.load,
      };
      
      setChartData((prev) => [
        ...prev.slice(-199),
        newDataPoint,
      ]);
    }
  }, [telemetry, isMotorRunning]);

  const filteredData = chartData.filter(item => {
    if (startDate && endDate) {
      const itemDate = new Date(item.timestamp);
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (itemDate < start || itemDate > end) return false;
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      return (
        item.speed.toString().includes(searchTerm) ||
        item.temperature.toString().includes(searchTerm) ||
        item.pressure.toString().includes(searchTerm) ||
        item.vibration.toString().includes(searchTerm) ||
        item.load.toString().includes(searchTerm) ||
        item.time.toLowerCase().includes(searchLower)
      );
    }
    
    return true;
  });

  const handleRefreshData = () => {
    if (isMotorRunning) {
      fetchMotorData();
    }
  };

  const clearFilters = () => {
    setStartDate("");
    setEndDate("");
    setSearchTerm("");
    setSelectedChart("all");
  };

  const chartConfigs = {
    speed: {
      dataKey: "speed",
      stroke: "#10b981",
      name: "Speed",
      unit: "RPM",
      icon: Gauge,
      gradient: "from-emerald-500/30 to-emerald-600/20",
      color: "emerald"
    },
    temperature: {
      dataKey: "temperature",
      stroke: "#ef4444",
      name: "Temperature",
      unit: "°C",
      icon: Zap,
      gradient: "from-rose-500/30 to-rose-600/20",
      color: "rose"
    },
    pressure: {
      dataKey: "pressure",
      stroke: "#3b82f6",
      name: "Pressure",
      unit: "bar",
      icon: Activity,
      gradient: "from-blue-500/30 to-blue-600/20",
      color: "blue"
    },
    vibration: {
      dataKey: "vibration",
      stroke: "#f59e0b",
      name: "Vibration",
      unit: "mm/s",
      icon: BarChart3,
      gradient: "from-amber-500/30 to-amber-600/20",
      color: "amber"
    },
    load: {
      dataKey: "load",
      stroke: "#8b5cf6",
      name: "Load",
      unit: "%",
      icon: Cpu,
      gradient: "from-purple-500/30 to-purple-600/20",
      color: "purple"
    }
  };

  const renderChart = () => {
    if (selectedChart === "all") {
      return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className={`bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-md rounded-2xl p-6 border border-cyan-400/40 hover:border-cyan-300/60 transition-all duration-500 ${isVisible ? 'animate-slide-up' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-emerald-500/30 rounded-lg">
                <Gauge className="w-5 h-5 text-emerald-300" />
              </div>
              <h3 className="font-bold text-xl text-white">Speed vs Temperature</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }} />
                <YAxis tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    border: '1px solid rgba(59, 130, 246, 0.5)',
                    borderRadius: '10px',
                    backdropFilter: 'blur(12px)',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}
                  labelStyle={{ color: '#F3F4F6', fontWeight: '600' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="speed" 
                  stroke="#10b981" 
                  strokeWidth={3}
                  dot={false}
                  name="Speed (RPM)"
                />
                <Line 
                  type="monotone" 
                  dataKey="temperature" 
                  stroke="#ef4444" 
                  strokeWidth={3}
                  dot={false}
                  name="Temperature (°C)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className={`bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-md rounded-2xl p-6 border border-purple-400/40 hover:border-purple-300/60 transition-all duration-500 ${isVisible ? 'animate-slide-up delay-200' : ''}`}>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/30 rounded-lg">
                <Activity className="w-5 h-5 text-purple-300" />
              </div>
              <h3 className="font-bold text-xl text-white">Multi-Sensor Overview</h3>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={filteredData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
                <XAxis dataKey="time" tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }} />
                <YAxis tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }} />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'rgba(17, 24, 39, 0.95)',
                    border: '1px solid rgba(168, 85, 247, 0.5)',
                    borderRadius: '10px',
                    backdropFilter: 'blur(12px)',
                    color: '#FFFFFF',
                    fontWeight: '600'
                  }}
                  labelStyle={{ color: '#F3F4F6', fontWeight: '600' }}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="pressure" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                  dot={false}
                  name="Pressure (bar)"
                />
                <Line 
                  type="monotone" 
                  dataKey="vibration" 
                  stroke="#f59e0b" 
                  strokeWidth={2}
                  dot={false}
                  name="Vibration (mm/s)"
                />
                <Line 
                  type="monotone" 
                  dataKey="load" 
                  stroke="#8b5cf6" 
                  strokeWidth={2}
                  dot={false}
                  name="Load (%)"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      );
    } else {
      const config = chartConfigs[selectedChart];
      const IconComponent = config.icon;
      
      return (
        <div className={`bg-gradient-to-br ${config.gradient} backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:scale-105 transition-all duration-500 ${isVisible ? 'animate-slide-up' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-2 bg-${config.color}-500/30 rounded-lg`}>
              <IconComponent className={`w-5 h-5 text-${config.color}-300`} />
            </div>
            <h3 className="font-bold text-xl text-white">{config.name} Over Time</h3>
          </div>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#4B5563" />
              <XAxis 
                dataKey="time" 
                tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }}
              />
              <YAxis 
                tick={{ fontSize: 12, fill: '#E5E7EB', fontWeight: '500' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'rgba(17, 24, 39, 0.95)',
                  border: `1px solid ${config.stroke}60`,
                  borderRadius: '10px',
                  backdropFilter: 'blur(12px)',
                  color: '#FFFFFF',
                  fontWeight: '600'
                }}
                labelStyle={{ color: '#F3F4F6', fontWeight: '600' }}
                formatter={(value) => [`${value} ${config.unit}`, config.name]}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey={config.dataKey}
                stroke={config.stroke}
                strokeWidth={3}
                dot={{ fill: config.stroke, strokeWidth: 2, r: 4 }}
                activeDot={{ r: 6, stroke: config.stroke, strokeWidth: 2 }}
                name={`${config.name} (${config.unit})`}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 p-4 sm:p-6 lg:p-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
          <div className="mb-6 lg:mb-0">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-cyan-500/30 rounded-xl backdrop-blur-sm border border-cyan-400/40 animate-pulse-glow">
                <Cpu className="w-8 h-8 text-cyan-300" />
              </div>
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-white">Motor Sensor Dashboard</h1>
                <p className="text-cyan-200 font-medium mt-2">Real-time monitoring and analytics</p>
              </div>
            </div>
          </div>
          
          {/* <button
            onClick={handleRefreshData}
            disabled={!isMotorRunning}
            className={`flex items-center gap-3 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
              isMotorRunning 
                ? "bg-cyan-500/30 hover:bg-cyan-500/40 text-cyan-300 border border-cyan-400/40 hover:border-cyan-300/60 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20" 
                : "bg-gray-500/30 text-gray-400 border border-gray-400/30 cursor-not-allowed"
            }`}
          >
            <RefreshCw className={`w-5 h-5 ${isMotorRunning ? 'animate-spin-slow' : ''}`} />
            Refresh Data
          </button> */}
        </div>

        {/* Status Indicator */}
        <div className={`mb-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className={`p-6 rounded-2xl backdrop-blur-md border transition-all duration-500 ${
            isMotorRunning 
              ? "bg-emerald-500/20 border-emerald-400/40 hover:border-emerald-300/60" 
              : "bg-gray-500/20 border-gray-400/30"
          }`}>
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl ${
                isMotorRunning ? "bg-emerald-500/30 animate-pulse" : "bg-gray-500/30"
              }`}>
                <div className={`w-4 h-4 rounded-full ${isMotorRunning ? "bg-emerald-300" : "bg-gray-400"}`}></div>
              </div>
              <div className="flex-1">
                <h3 className="font-bold text-white text-xl">
                  {isMotorRunning ? "🟢 Motor Running - Live Data Streaming" : "🔴 Motor Stopped - Normal Values"}
                </h3>
                <p className="text-cyan-200 font-medium mt-1">
                  {isMotorRunning ? "Real-time sensor data is being collected and analyzed" : "Motor is inactive - displaying last known values"}
                </p>
              </div>
              <div className="text-right">
                <p className="text-white font-bold text-xl">{chartData.length}</p>
                <p className="text-cyan-300 text-sm font-semibold">Data Points</p>
              </div>
            </div>
          </div>
        </div>

        {/* Sensor Cards Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <SensorCard 
            title="Speed" 
            value={telemetry.speed} 
            unit="RPM" 
            icon={Gauge}
            isActive={isMotorRunning}
            color="emerald"
          />
          <SensorCard 
            title="Temperature" 
            value={telemetry.temperature} 
            unit="°C" 
            icon={Zap}
            isActive={isMotorRunning}
            color="rose"
          />
          <SensorCard 
            title="Pressure" 
            value={telemetry.pressure} 
            unit="bar" 
            icon={Activity}
            isActive={isMotorRunning}
            color="blue"
          />
          <SensorCard 
            title="Vibration" 
            value={telemetry.vibration} 
            unit="mm/s" 
            icon={BarChart3}
            isActive={isMotorRunning}
            color="amber"
          />
          <SensorCard 
            title="Load" 
            value={telemetry.load} 
            unit="%" 
            icon={Cpu}
            isActive={isMotorRunning}
            color="purple"
          />
        </div>

        {/* Filters Section */}
        <div className={`bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 hover:border-cyan-400/50 transition-all duration-500 mb-8 ${isVisible ? 'animate-slide-up delay-400' : ''}`}>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-cyan-500/30 rounded-lg">
              <Filter className="w-5 h-5 text-cyan-300" />
            </div>
            <h3 className="font-bold text-xl text-white">Data Filters & Controls</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Chart Selector */}
            {/* <div>
              <label className="block text-sm font-semibold text-cyan-200 mb-3">
                Chart View
              </label>
              <select
                value={selectedChart}
                onChange={(e) => setSelectedChart(e.target.value as ChartType)}
                className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white  font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
              >
                <option className="text-blue-600" value="all " >All Sensors Overview</option>
                <option className="text-blue-600" value="speed">Speed (RPM)</option>
                <option className="text-blue-600"value="temperature">Temperature (°C)</option>
                <option className="text-blue-600" value="pressure">Pressure (bar)</option>
                <option className="text-blue-600" value="vibration">Vibration (mm/s)</option>
                <option className="text-blue-600" value="load">Load (%)</option>
              </select>
            </div> */}
            <div>
  <label className="block text-sm font-semibold text-cyan-200 mb-3">
    Chart View
  </label>
  <select
    value={selectedChart}
    onChange={(e) => setSelectedChart(e.target.value as ChartType)}
    className="w-full p-3 bg-white/10 border border-white/20 rounded-xl text-white font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
  >
    <option className="text-blue-600" value="all">All Sensors Overview</option>
    <option className="text-blue-600" value="speed">Speed (RPM)</option>
    <option className="text-blue-600" value="temperature">Temperature (°C)</option>
    <option className="text-blue-600" value="pressure">Pressure (bar)</option>
    <option className="text-blue-600" value="vibration">Vibration (mm/s)</option>
    <option className="text-blue-600" value="load">Load (%)</option>
  </select>
</div>

            {/* Start Date */}
            <div>
              <label className="block text-sm font-semibold text-cyan-200 mb-3">
                Start Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-300" />
                <input
                  type="datetime-local"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* End Date */}
            <div>
              <label className="block text-sm font-semibold text-cyan-200 mb-3">
                End Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-300" />
                <input
                  type="datetime-local"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                />
              </div>
            </div>

            {/* Search */}
            <div>
              <label className="block text-sm font-semibold text-cyan-200 mb-3">
                Search Data
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-cyan-300" />
                  <input
                    type="text"
                    placeholder="Search values..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-3 pl-10 bg-white/10 border border-white/20 rounded-xl text-white font-medium focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 transition-all duration-300"
                  />
                </div>
                <button
                  onClick={clearFilters}
                  className="px-4 py-3 bg-rose-500/30 text-rose-300 rounded-xl hover:bg-rose-500/40 transition-all duration-300 border border-rose-400/30 hover:border-rose-300/50 font-semibold"
                >
                  Clear
                </button>
              </div>
            </div>
          </div>

          {/* Filter Summary */}
          {(startDate || endDate || searchTerm) && (
            <div className="mt-6 p-4 bg-cyan-500/20 rounded-xl border border-cyan-400/30">
              <p className="text-sm text-cyan-200 font-semibold">
                <strong className="text-white">Active Filters:</strong> 
                {startDate && ` From: ${new Date(startDate).toLocaleString()}`}
                {endDate && ` To: ${new Date(endDate).toLocaleString()}`}
                {searchTerm && ` Search: "${searchTerm}"`}
                {` (Showing ${filteredData.length} of ${chartData.length} records)`}
              </p>
            </div>
          )}
        </div>

        {/* Charts Section */}
        <div className="mb-8">
          {isMotorRunning || chartData.length > 0 ? (
            renderChart()
          ) : (
            <div className="h-64 bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-md">
              <div className="text-center text-cyan-100/70">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-cyan-400/60" />
                </div>
                <p className="text-white text-xl font-bold">No Data Available</p>
                <p className="text-cyan-100/70 text-sm mt-1 font-medium">Start the motor to see live data and charts</p>
              </div>
            </div>
          )}
        </div>

        {/* Status Indicators */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <StatusIndicator 
            title="Temperature Status" 
            value={telemetry.temperature} 
            safeRange={[20, 80]}
            unit="°C"
            isActive={isMotorRunning}
            icon={Zap}
          />
          <StatusIndicator 
            title="Vibration Status" 
            value={telemetry.vibration} 
            safeRange={[0, 5]}
            unit="mm/s"
            isActive={isMotorRunning}
            icon={Activity}
          />
          <StatusIndicator 
            title="Load Status" 
            value={telemetry.load} 
            safeRange={[0, 85]}
            unit="%"
            isActive={isMotorRunning}
            icon={Cpu}
          />
          <StatusIndicator 
            title="Pressure Status" 
            value={telemetry.pressure} 
            safeRange={[0.5, 3.0]}
            unit="bar"
            isActive={isMotorRunning}
            icon={Gauge}
          />
        </div>

        {/* Motor History Section */}
        <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <MotorHistory />
        </div>
      </div>

      <style jsx>{`
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

        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 25px rgba(34, 211, 238, 0.4);
          }
          50% {
            box-shadow: 0 0 45px rgba(34, 211, 238, 0.7);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.8s ease-out backwards;
        }

        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(34, 211, 238, 0.15) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(34, 211, 238, 0.15) 1px, transparent 1px);
          background-size: 50px 50px;
        }

        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
        .delay-300 {
          animation-delay: 0.3s;
        }
        .delay-400 {
          animation-delay: 0.4s;
        }
        .delay-500 {
          animation-delay: 0.5s;
        }
        .delay-600 {
          animation-delay: 0.6s;
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

// Updated SensorCard Component with better colors
function SensorCard({ 
  title, 
  value, 
  unit, 
  icon: Icon,
  isActive = true,
  color = "cyan"
}: { 
  title: string; 
  value: number; 
  unit: string;
  icon: any;
  isActive?: boolean;
  color?: string;
}) {
  const colorClasses = {
    emerald: { 
      bg: 'bg-emerald-500/30', 
      text: 'text-emerald-300', 
      border: 'border-emerald-400/40',
      glow: 'hover:shadow-emerald-500/30'
    },
    rose: { 
      bg: 'bg-rose-500/30', 
      text: 'text-rose-300', 
      border: 'border-rose-400/40',
      glow: 'hover:shadow-rose-500/30'
    },
    blue: { 
      bg: 'bg-blue-500/30', 
      text: 'text-blue-300', 
      border: 'border-blue-400/40',
      glow: 'hover:shadow-blue-500/30'
    },
    amber: { 
      bg: 'bg-amber-500/30', 
      text: 'text-amber-300', 
      border: 'border-amber-400/40',
      glow: 'hover:shadow-amber-500/30'
    },
    purple: { 
      bg: 'bg-purple-500/30', 
      text: 'text-purple-300', 
      border: 'border-purple-400/40',
      glow: 'hover:shadow-purple-500/30'
    },
    cyan: { 
      bg: 'bg-cyan-500/30', 
      text: 'text-cyan-300', 
      border: 'border-cyan-400/40',
      glow: 'hover:shadow-cyan-500/30'
    }
  };

  const currentColor = colorClasses[color as keyof typeof colorClasses] || colorClasses.cyan;

  return (
    <div className={`${currentColor.bg} backdrop-blur-md rounded-2xl p-6 border ${currentColor.border} transition-all duration-500 hover:scale-105 hover:shadow-2xl ${currentColor.glow} group`}>
      <div className="text-center">
        <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className={`w-6 h-6 ${currentColor.text}`} />
        </div>
        <h3 className="font-bold text-gray-200 mb-2 text-sm uppercase tracking-wide">{title}</h3>
        <p className={`text-3xl font-black ${isActive ? currentColor.text : 'text-gray-400'} mb-1`}>
          {value.toFixed(1)}
        </p>
        <p className="text-gray-300 text-sm font-semibold">{unit}</p>
        <div className={`mt-3 w-full h-1 bg-white/10 rounded-full overflow-hidden`}>
          <div 
            className={`h-full ${currentColor.bg.replace('bg-', 'bg-').replace('/30', '/70')} transition-all duration-1000`}
            style={{ width: `${Math.min(100, (value / 100) * 100)}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Updated StatusIndicator Component with better colors
function StatusIndicator({ 
  title, 
  value, 
  safeRange, 
  unit,
  icon: Icon,
  isActive = true
}: { 
  title: string; 
  value: number; 
  safeRange: [number, number];
  unit: string;
  icon: any;
  isActive?: boolean;
}) {
  const [min, max] = safeRange;
  
  if (!isActive) {
    return (
      <div className="bg-gray-500/20 border-l-4 border-gray-400 p-5 rounded-2xl text-gray-400 backdrop-blur-md">
        <div className="flex items-center gap-3 mb-3">
          <div className="p-2 bg-gray-500/30 rounded-lg">
            <Icon className="w-4 h-4" />
          </div>
          <h4 className="font-bold text-lg">{title}</h4>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-black">
            {value.toFixed(1)} {unit}
          </span>
          <span className="font-bold text-sm bg-gray-500/30 px-3 py-1 rounded-full">
            Inactive
          </span>
        </div>
        <div className="mt-3 text-xs text-gray-300 font-medium">
          Safe range: {min}-{max} {unit}
        </div>
      </div>
    );
  }

  const isSafe = value >= min && value <= max;
  const isWarning = value > max * 1.1 || value < min * 0.9;
  
  const getStatusColor = () => {
    if (isWarning) return "bg-rose-500/20 border-rose-400 text-rose-200";
    if (!isSafe) return "bg-amber-500/20 border-amber-400 text-amber-200";
    return "bg-emerald-500/20 border-emerald-400 text-emerald-200";
  };

  const getStatusText = () => {
    if (isWarning) return "Critical";
    if (!isSafe) return "Warning";
    return "Normal";
  };

  const getStatusIconColor = () => {
    if (isWarning) return "text-rose-300";
    if (!isSafe) return "text-amber-300";
    return "text-emerald-300";
  };

  return (
    <div className={`border-l-4 p-5 rounded-2xl backdrop-blur-md ${getStatusColor()} transition-all duration-300 hover:scale-105`}>
      <div className="flex items-center gap-3 mb-3">
        <div className={`p-2 rounded-lg ${getStatusIconColor().replace('text-', 'bg-').replace('300', '300/30')}`}>
          <Icon className={`w-4 h-4 ${getStatusIconColor()}`} />
        </div>
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-lg font-black">
          {value.toFixed(1)} {unit}
        </span>
        <span className={`font-bold text-sm px-3 py-1 rounded-full ${getStatusColor().replace('bg-', 'bg-').replace(' border-', ' border-')}`}>
          {getStatusText()}
        </span>
      </div>
      <div className="mt-3 text-xs font-medium opacity-90">
        Safe range: {min}-{max} {unit}
      </div>
    </div>
  );
}