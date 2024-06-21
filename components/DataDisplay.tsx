'use client';

import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, PieChart, Pie, Cell } from 'recharts';
import { useState, useEffect } from 'react';
import 'tailwindcss/tailwind.css';

interface DataDisplayProps {
  data: any[];
}

const DataDisplay: React.FC<DataDisplayProps> = ({ data }) => {
  const [formattedData, setFormattedData] = useState<any[]>([]);
  const [maxValues, setMaxValues] = useState<any>({});

  useEffect(() => {
    const formatData = () => {
      const units = data[0];
      const valuesArray = data[1];

      const tempMax = Math.max(...valuesArray.map((entry: { Temperature: string }) => parseFloat(entry.Temperature)));
      const humidityMax = Math.max(...valuesArray.map((entry: { Humidity: string }) => parseFloat(entry.Humidity)));
      const lightMax = Math.max(...valuesArray.map((entry: { Light: string }) => parseFloat(entry.Light)));

      setMaxValues({ Temperature: tempMax, Humidity: humidityMax, Light: lightMax });

      const formatted = valuesArray.map((value: any) =>
        Object.entries(value).map(([key, val]) => ({
          key,
          value: typeof val === 'boolean' ? val : parseFloat(val as string),
          displayValue: `${val}${units[key]}`,
          unit: units[key],
        }))
      );

      setFormattedData(formatted);
    };

    formatData();
  }, [data]);

  const renderBarChart = (item: any, maxValue: number) => (
    <div className="w-1/6">
      <BarChart width={100} height={50} data={[{ name: item.key, value: item.value }]}>
        <XAxis dataKey="name" hide={true} />
        <YAxis domain={[0, maxValue]} />
        <Tooltip />
        <Bar dataKey="value" fill="green" />
      </BarChart>
    </div>
  );

  const renderPieChart = (item: any) => (
    <div className="w-1/6">
      <PieChart width={100} height={50}>
        <Pie data={[{ name: 'value', value: item.value ? 1 : 0 }]} dataKey="value" outerRadius={20} fill={item.value ? "green" : "yellow"}>
          <Cell key={'cell-true'} fill="green" />
          <Cell key={'cell-false'} fill="yellow" />
        </Pie>
      </PieChart>
    </div>
  );

  return (
    <div className="space-y-4">
      {formattedData.map((channelData, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm">
          <h3 className="text-lg font-bold mb-2">Channel {index + 1}</h3>
          <div className="flex flex-wrap gap-4">
            {channelData.map((item: any, ind: number) => (
              <div key={ind} className="flex flex-col items-center">
                <h4 className="text-sm mb-1">{item.key} ({item.unit})</h4>
                {typeof item.value === 'boolean' ? renderPieChart(item) : renderBarChart(item, maxValues[item.key])}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DataDisplay;