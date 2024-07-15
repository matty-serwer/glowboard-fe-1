import React, { useState, useRef } from 'react';
import { useDrag, useDrop, DropTargetMonitor, DragSourceMonitor } from 'react-dnd';
import { Sound } from '../typescript/types';
import styles from './Sound.module.css';

interface SoundProps {
  sound: Sound;
  index: number;
  onDrop: (dragIndex: number, hoverIndex: number) => void;
}

interface DragItem {
  type: string;
  index: number;
}

interface DragCollectedProps {
  isDragging: boolean;
}

const Sound: React.FC<SoundProps> = ({ sound, index, onDrop }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [soundName, setSoundName] = useState(sound.name);
  const ref = useRef<HTMLDivElement>(null);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoundName(event.target.value);
  };

  const [{ isDragging }, drag] = useDrag<DragItem, void, DragCollectedProps>({
    type: 'SOUND',
    item: () => ({
      type: 'SOUND',
      index,
    }),
    collect: (monitor: DragSourceMonitor<DragItem, void>) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: 'SOUND',
    hover: (item: DragItem, monitor: DropTargetMonitor) => {
      if (!ref.current) {
        return;
      }
      const dragIndex = item.index;
      const hoverIndex = index;
      if (dragIndex === hoverIndex) {
        return;
      }
      onDrop(dragIndex, hoverIndex);
      item.index = hoverIndex;
    },
  });

  drag(drop(ref));

  return (
    <div ref={ref} className={`${styles.sound} ${isDragging ? styles.dragging : ''}`}>
      <div className={styles.inputWrapper}>
        {isEditing ? (
          <input
            type="text"
            value={soundName}
            onChange={handleChange}
            onBlur={handleBlur}
            className={styles.input}
          />
        ) : (
          <span onDoubleClick={handleDoubleClick}>{soundName}</span>
        )}
      </div>
    </div>
  );
};

export default Sound;
