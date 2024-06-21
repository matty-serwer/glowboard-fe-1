'use client';

import { ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface CryptoChartProps {
  data: {
    date: string;
    totalValue: number;
    fiatValue: number;
    cryptocurrency: string;
    transactionType: string;
    holdings: number;
    symbol: string;
    buyDate: string;
    currentPrice: number;
  }[];
}

const CryptoChart: React.FC<CryptoChartProps> = ({ data }) => {
  const formatDate = (date: string) => new Date(date).toLocaleDateString();

  return (
    <div>
      <h2>Cryptocurrency Portfolio Performance</h2>
      <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" tickFormatter={formatDate} />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="totalValue" fill="#8884d8" />
          <Line type="monotone" dataKey="fiatValue" stroke="#82ca9d" />
        </ComposedChart>
      </ResponsiveContainer>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {data.map((entry) => (
          <div key={entry.date} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <strong>{entry.cryptocurrency}</strong>
              <p>
                {entry.transactionType}: {entry.holdings} {entry.symbol} at {formatDate(entry.buyDate)}
              </p>
            </div>
            <div style={{ textAlign: 'right' }}>
              <p>
                <strong>Current Price:</strong> {entry.currentPrice}
              </p>
              <p>
                <strong>Total Value:</strong> {entry.totalValue}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CryptoChart;
