'use client';

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

interface SensorData {
  "Sensor ID": string;
  "Sensor Pattern": string;
  "Frequency Measurement 1": number;
  "Frequency Measurement 2": number;
  "Frequency Measurement 3": number;
  "Peak Frequency": number;
  "Average Frequency": number;
  "Median Frequency": number;
}

const SensorDataChart: React.FC<{ data: SensorData[] }> = ({ data }) => {
  const chartData = data.map((entry) => ({
    name: entry['Sensor ID'],
    'Frequency Measurement 1': entry['Frequency Measurement 1'],
    'Frequency Measurement 2': entry['Frequency Measurement 2'],
    'Frequency Measurement 3': entry['Frequency Measurement 3'],
  }));

  return (
    <LineChart
      width={500}
      height={300}
      data={chartData}
      margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="Frequency Measurement 1" stroke="#8884d8" />
      <Line type="monotone" dataKey="Frequency Measurement 2" stroke="#82ca9d" />
      <Line type="monotone" dataKey="Frequency Measurement 3" stroke="#ffc658" />
    </LineChart>
  );
};

export default SensorDataChart;
