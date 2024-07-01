import Image from "next/image";
import Sound from "@/components/Sound";
import Soundboard from "@/components/Soundboard";
import DataDisplay from "@/components/DataDisplay";
import CryptoCharts from "@/components/CryptoChart";
import CryptoChart from "@/components/CryptoChart";
import SensorDataChart from "@/components/SensorDataChart";

const data = [
  {
    "Sensor ID": "Sensor1",
    "Sensor Pattern": "Random Noise",
    "Frequency Measurement 1": 0.5,
    "Frequency Measurement 2": 1.2,
    "Frequency Measurement 3": 0.8,
    "Peak Frequency": 1.2,
    "Average Frequency": 0.9,
    "Median Frequency": 0.8
  },
  {
    "Sensor ID": "Sensor2",
    "Sensor Pattern": "Sinusoidal Wave",
    "Frequency Measurement 1": 2.0,
    "Frequency Measurement 2": 2.5,
    "Frequency Measurement 3": 1.8,
    "Peak Frequency": 2.5,
    "Average Frequency": 2.167,
    "Median Frequency": 2.1
  },
  {
    "Sensor ID": "Sensor3",
    "Sensor Pattern": "Low-Frequency Rumbles",
    "Frequency Measurement 1": 0.1,
    "Frequency Measurement 2": 0.2,
    "Frequency Measurement 3": 0.15,
    "Peak Frequency": 0.2,
    "Average Frequency": 0.167,
    "Median Frequency": 0.15
  }
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<DataDisplay data={data} />*/}
      <SensorDataChart data={data} />
      <Soundboard />
    </main>
  );
}
