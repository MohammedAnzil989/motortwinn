"use client";

import { useMotorStore } from "../app/store/useMotorStore"; // ✅ Fixed import path

export default function MotorHistory() {
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

  const formatTime = (timestamp: number) => new Date(timestamp).toLocaleString();

  const getStatusColor = (action: "start" | "stop") =>
    action === "start" ? "text-green-600 bg-green-50" : "text-red-600 bg-red-50";

  const getStatusIcon = (action: "start" | "stop") =>
    action === "start" ? "🟢" : "🔴";

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-lg text-gray-700">
          Motor Operation History
        </h3>
        {motorHistory.length > 0 && (
          <button
            onClick={clearHistory}
            className="px-3 py-1 text-sm bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Clear History
          </button>
        )}
      </div>

      {motorHistory.length === 0 ? (
        <div className="text-center py-8 text-gray-500">
          <p>No operation history yet</p>
          <p className="text-sm">Start and stop the motor to see history here</p>
        </div>
      ) : (
        <div className="space-y-3 max-h-96 overflow-y-auto">
          {motorHistory
            .slice()
            .reverse()
            .map((record: any) => (
              <div
                key={record.id}
                className={`p-3 rounded-lg border ${
                  record.action === "start"
                    ? "border-green-200"
                    : "border-red-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">
                      {getStatusIcon(record.action)}
                    </span>
                    <div>
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                          record.action
                        )}`}
                      >
                        {record.action === "start" ? "STARTED" : "STOPPED"}
                      </span>
                      <p className="text-sm text-gray-600 mt-1">
                        {formatTime(record.timestamp)}
                      </p>
                    </div>
                  </div>

                  {record.duration && (
                    <div className="text-right">
                      <p className="text-sm font-medium text-gray-700">
                        Duration: {formatDuration(record.duration)}
                      </p>
                    </div>
                  )}
                </div>

                {record.telemetry && (
                  <div className="mt-2 pt-2 border-t border-gray-200">
                    <div className="grid grid-cols-5 gap-2 text-xs">
                      <div className="text-center">
                        <p className="font-medium">Speed</p>
                        <p>{record.telemetry.speed} RPM</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Temp</p>
                        <p>{record.telemetry.temperature}°C</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Pressure</p>
                        <p>{record.telemetry.pressure} bar</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Vibration</p>
                        <p>{record.telemetry.vibration} mm/s</p>
                      </div>
                      <div className="text-center">
                        <p className="font-medium">Load</p>
                        <p>{record.telemetry.load}%</p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500 text-center">
        Total records: {motorHistory.length}
      </div>
    </div>
  );
}
