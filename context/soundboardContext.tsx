import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User, Soundboard, Sound, Category, Effect } from '../typescript/types';

// Define the context type
interface GlowboardContextType {
  user: User | null;
  soundboards: Soundboard[];
  sounds: Sound[];
  categories: Category[];
  effects: Effect[];
  addSoundboard: (soundboard: Soundboard) => void;
  addSound: (sound: Sound) => void;
  addCategory: (category: Category) => void;
  addEffect: (effect: Effect) => void;
  setSounds: (sounds: Sound[]) => void;
}

// Create the context with a default value
const GlowboardContext = createContext<GlowboardContextType | undefined>(undefined);

interface GlowboardProviderProps {
  children: ReactNode;
}

export const GlowboardProvider: React.FC<GlowboardProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [soundboards, setSoundboards] = useState<Soundboard[]>([]);
  const [sounds, setSounds] = useState<Sound[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [effects, setEffects] = useState<Effect[]>([]);

  const addSoundboard = (soundboard: Soundboard) => {
    setSoundboards((prevSoundboards) => [...prevSoundboards, soundboard]);
  };

  const addSound = (sound: Sound) => {
    setSounds((prevSounds) => [...prevSounds, sound]);
  };

  const addCategory = (category: Category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  const addEffect = (effect: Effect) => {
    setEffects((prevEffects) => [...prevEffects, effect]);
  };

  return (
    <GlowboardContext.Provider
      value={{
        user,
        soundboards,
        sounds,
        categories,
        effects,
        addSoundboard,
        addSound,
        addCategory,
        addEffect,
        setSounds,
      }}
    >
      {children}
    </GlowboardContext.Provider>
  );
};

// Custom hook for using the Glowboard context
export const useGlowboardContext = () => {
  const context = useContext(GlowboardContext);
  if (context === undefined) {
    throw new Error('useGlowboardContext must be used within a GlowboardProvider');
  }
  return context;
};
