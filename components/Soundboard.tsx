'use client';

import React, { useContext, useRef } from 'react';
import { useDrop, DropTargetMonitor } from 'react-dnd';
import { useGlowboardContext } from '../context/soundboardContext';
import Sound from './Sound';
import styles from './Soundboard.module.css';

interface DragItem {
  type: string;
  index: number;
}

const Soundboard: React.FC = () => {
  const { soundboards, addSoundboard } = useGlowboardContext();
  const ref = useRef<HTMLDivElement>(null);

  const [, drop] = useDrop({
    accept: 'SOUND',
    drop: (item: DragItem, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = sounds.length;
      if (dragIndex === hoverIndex) {
        return;
      }
      const newSounds = [...sounds];
      const [removed] = newSounds.splice(dragIndex, 1);
      newSounds.splice(hoverIndex, 0, removed);
      setSounds(newSounds);
    },
  });

  drop(ref);

  const handleDrop = (dragIndex: number, hoverIndex: number) => {
    const newSounds = [...sounds];
    const [removed] = newSounds.splice(dragIndex, 1);
    newSounds.splice(hoverIndex, 0, removed);
    setSounds(newSounds);
  };

  return (
    <div ref={ref} className={styles.soundboard}>
      {sounds.map((sound, index) => (
        <Sound key={sound.id} sound={sound} index={index} onDrop={handleDrop} />
      ))}
    </div>
  );
};

export default Soundboard;
