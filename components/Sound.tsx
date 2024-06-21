import React, { useState } from 'react';
import styles from './Sound.module.css';

const Sound: React.FC<{ name: string; index: number }> = ({ name, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [soundName, setSoundName] = useState(name);

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
    <div className={styles.sound}>
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
          <span onDoubleClick={handleDoubleClick} className={styles.text}>
            {soundName}
          </span>
        )}
      </div>
    </div>
  );
};

export default Sound;