import React from 'react';
import { AppProps } from 'next/app';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import GlowboardProvider from '../context/soundboardContext';
import Soundboard from '../components/Soundboard';
import './globals.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <DndProvider backend={HTML5Backend}>
      <GlowboardProvider>
        <Soundboard />
      </GlowboardProvider>
    </DndProvider>
  );
};

export default App;