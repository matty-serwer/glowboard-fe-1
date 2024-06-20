import { createContext, useState } from 'react';
import { User, Sound, Soundboard, Category, Effect } from '@/typescript/types';

interface GlowboardContext {
  user: User | null;
  soundboards: Soundboard[];
  sounds: Sound[];
  categories: Category[];
  effects: Effect[];
  addSoundboard: (soundboard: Soundboard) => void;
  addSound: (sound: Sound) => void;
  addCategory: (category: Category) => void;
  addEffect: (effect: Effect) => void;
}

const GlowboardContext = createContext<GlowboardContext>({
  user: null,
  soundboards: [],
  sounds: [],
  categories: [],
  effects: [],
  addSoundboard: () => {},
  addSound: () => {},
  addCategory: () => {},
  addEffect: () => {},
});

const GlowboardProvider: React.FC = ({ children }: { children?: React.ReactNode }) => {
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
      }}
    >
      {children}
    </GlowboardContext.Provider>
  );
};

export { GlowboardProvider, GlowboardContext };