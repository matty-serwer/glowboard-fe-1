

import React, { useState, useRef, useEffect } from 'react';
import styles from './Sound.module.css';
import { useDrag, useDrop } from 'react-dnd';

const Sound: React.FC<{ name: string; index: number; moveSound: (from: number, to: number) => void }> = ({
                                                                                                           name,
                                                                                                           index,
                                                                                                           moveSound,
                                                                                                         }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [soundName, setSoundName] = useState(name);

  const [{ isDragging }, drag] = useDrag({
    type: 'sound',
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: 'sound',
    drop: (item: { index: number }) => {
      moveSound(item.index, index);
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  });

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      drag(ref.current);
      drop(ref.current);
    }
  }, [drag, drop]);

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSoundName(event.target.value);
  };

  return (
    <div
      ref={ref}
      className={styles.sound}
      style={{
        opacity: isDragging ? 0.5 : 1,
        backgroundColor: isOver ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={soundName}
          onChange={handleChange}
          onBlur={handleBlur}
          style={{
            width: '100%',
            height: '100%',
            padding: 0,
            border: 0,
            backgroundColor: 'transparent',
            color: '#31dea4',
            fontSize: 24,
            fontWeight: 'bold',
          }}
        />
      ) : (
        <span onDoubleClick={handleDoubleClick} style={{ color: '#31dea4' }}>
          {soundName}
        </span>
      )}
    </div>
  );
};

export default Sound;
