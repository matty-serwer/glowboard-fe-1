// types.ts

interface User {
  id: number;
  username: string;
  email: string;
  passwordHash: string;
  createdAt: string;
}

interface Sound {
  id: number;
  name: string;
  filePath: string;
  duration: number;
  createdAt: string;
  category: Category;
  effects: Effect[];
}

interface Soundboard {
  id: number;
  name: string;
  description: string;
  createdAt: string;
  user: User;
}

interface Category {
  id: number;
  name: string;
  description: string;
}

interface Effect {
  id: number;
  name: string;
  description: string;
  parameters: string;
}

export type { User, Sound, Soundboard, Category, Effect };