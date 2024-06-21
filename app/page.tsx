import Image from "next/image";
import Sound from "@/components/Sound";
import Soundboard from "@/components/Soundboard";
import DataDisplay from "@/components/DataDisplay";
import CryptoCharts from "@/components/CryptoChart";
import CryptoChart from "@/components/CryptoChart";

const data2 = [
  {
    "InputGain": "dB",
    "CompressionRatio": "%",
    "CompressionThreshold": "dB",
    "LimiterEnable": false,
    "EQGain1": "dB",
    "EQFrequency1": "Hz",
    "EQBandwidth1": "%",
    "EQGain2": "dB",
  "EQFrequency2": "Hz",
  "EQBandwidth2": "%",
  "Solo": false,
  "Mute": false,
  "RecordArm": false
},
[
  {
    "InputGain": 10,
    "CompressionRatio": 3.8,
    "CompressionThreshold": 0,
    "LimiterEnable": true,
    "EQGain1": 4,
    "EQFrequency1": 500,
    "EQBandwidth1": 18,
    "EQGain2": -6,
    "EQFrequency2": 1200,
    "EQBandwidth2": 14,
    "Solo": true,
    "Mute": false,
    "RecordArm": false
  },
  {
    "InputGain": -2,
    "CompressionRatio": 2.4,
    "CompressionThreshold": -3,
    "LimiterEnable": false,
    "EQGain1": 1.2,
    "EQFrequency1": 600,
    "EQBandwidth1": 8.5,
    "EQGain2": 0,
    "EQFrequency2": 1000,
    "EQBandwidth2": 12,
    "Solo": false,
    "Mute": true,
    "RecordArm": true
  },
  {
    "InputGain": 6.5,
    "CompressionRatio": 40,
    "CompressionThreshold": -8,
    "LimiterEnable": false,
    "EQGain1": -3.5,
    "EQFrequency1": 300,
    "EQBandwidth1": 20,
    "EQGain2": 6,
    "EQFrequency2": 800,
    "EQBandwidth2": 10.5,
    "Solo": false,
    "Mute": false,
    "RecordArm": false
  }
]
]

const data3 =  [
  {
    "Temperature": "°C",
    "Humidity": "%",
    "Light": "lux",
    "Motion": ""
  },
  [
    {
      "Temperature": "22.5",
      "Humidity": "65",
      "Light": "800",
      "Motion": true
    },
    {
      "Temperature": "23",
      "Humidity": "60",
      "Light": "500",
      "Motion": false
    },
    {
      "Temperature": "21.8",
      "Humidity": "70",
      "Light": "1000",
      "Motion": true
    }
  ]
]

const data = [
  {
    "date": "2023-07-28",
    "cryptocurrency": "Bitcoin",
    "symbol": "BTC",
    "holdings": 2.5,
    "buyPrice": 58000,
    "buyDate": "2023-07-25",
    "sellPrice": "N/A",
    "sellDate": "N/A",
    "currentPrice": 60000,
    "exchange": "Coinbase",
    "transactionType": "Buy",
    "fee": 0.99,
    "totalCost": 145000,
    "totalValue": 150000,
    "fiatValue": 30000,
    "percentageChange": {
      "24h": 1.25,
      "7d": -3.5,
      "30d": 10.5
    },
    "allTimeHigh": {
      "value": 69000,
      "date": "2021-04-15"
    },
    "allTimeLow": {
      "value": 40000,
      "date": "2022-06-18"
    },
    "notes": "Bought some Bitcoin on Coinbase"
  },
  {
    "date": "2023-07-28",
    "cryptocurrency": "Ethereum",
    "symbol": "ETH",
    "holdings": 10,
    "buyPrice": 1800,
    "buyDate": "2023-06-10",
    "sellPrice": 1950,
    "sellDate": "2023-06-15",
    "currentPrice": 1700,
    "exchange": "Binance",
    "transactionType": "Sell",
    "fee": 15,
    "totalCost": 18000,
    "totalValue": -16500,
    "fiatValue": 3000,
    "percentageChange": {
      "24h": -9.5,
      "7d": 2.7,
      "30d": -12.8
    },
    "allTimeHigh": {
      "value": 4500,
      "date": "2021-05-01"
    },
    "allTimeLow": {
      "value": 2000,
      "date": "2023-03-03"
    },
    "notes": "Sold half of my Ethereum holdings on Binance"
  }
]


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/*<DataDisplay data={data} />*/}
      <CryptoChart data={data} />
      <Soundboard />
    </main>
  );
}
