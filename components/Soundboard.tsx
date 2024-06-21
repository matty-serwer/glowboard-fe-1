'use client'

import React, { useState } from 'react';
import styles from './SoundBoard.module.css';
import Sound from './Sound';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const SoundBoard = () => {
  const [sounds, setSounds] = useState([
    { name: 'Sound 1' },
    { name: 'Sound 2' },
    { name: 'Sound 3' },
    { name: 'Sound 4' },
    { name: 'Sound 5' },
    { name: 'Sound 6' },
    { name: 'Sound 7' },
    { name: 'Sound 8' },
    { name: 'Sound 9' },
    { name: 'Sound 10' },
    { name: 'Sound 11' },
    { name: 'Sound 12' },
    { name: 'Sound 13' },
    { name: 'Sound 14' },
    { name: 'Sound 15' },
    { name: 'Sound 16' },
    // ...
  ]);

  const moveSound = (from: number, to: number) => {
    const newSounds = [...sounds];
    const sound = newSounds.splice(from, 1)[0];
    newSounds.splice(to, 0, sound);
    setSounds(newSounds);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.soundBoard}>
        {sounds.map((sound, index) => (
          <Sound key={index} name={sound.name} index={index} />
        ))}
      </div>
    </DndProvider>
  );
};

export default SoundBoard;